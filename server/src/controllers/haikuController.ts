import { RequestHandler } from "express";
import { getHaiku, reviewHaiku } from "../services/openaiservice";

// This function is called when the user hits the /haiku endpoint with a GET request
export const generateHaiku: RequestHandler = async (req, res, next) => {
    try {
        // Get the response from the OpenAI API
        const queryResponse: string = await getHaiku();

        // Insert the user query into the database
        let query: string = `INSERT INTO haikuqueries ("userquery") VALUES ("Generate a haiku")`;
        await global.SQLiteDBInstance.run(query, function (err: Error) {
            if (err) {
                console.log(`Error getting response: ${err.message}`);
                res.status(500).json({ error: err.message });
            } else {
                res.status(200).json({ response: queryResponse });
            }
        });
    } catch (error: any) {
        console.log(`Error getting response: ${error.message}`);
        res.status(500).json({ error: error.message });
    }
};

//This function is called when the user hits the /haiku endpoint with a POST request
export const generateReview: RequestHandler = async (req, res, next) => {
    try {
        // Get the user query from the request body
        const { userquery } = req.body;
        if (!userquery || userquery == "") {
            res.status(500).json({ error: "No user query received!" });
        }

        // GET the response from the OpenAI API
        const queryResponse: string = await reviewHaiku(userquery);

        // Insert the user query into the database
        let query: string = `INSERT INTO haikuqueries ("userquery") VALUES ("${userquery}")`;
        await global.SQLiteDBInstance.run(query, function (err: Error) {
            if (err) {
                console.log(`Error getting response: ${err.message}`);
                res.status(500).json({ error: err.message });
            } else {
                res.status(200).json({ response: queryResponse });
            }
        });
    } catch (error: any) {
        console.log(`Error getting response: ${error.message}`);
        res.status(500).json({ error: error.message });
    }
};
