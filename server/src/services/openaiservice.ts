import { OpenAI } from "openai";
import * as dotenv from "dotenv";
dotenv.config();

// Get a haiku from the OpenAI API
const getHaiku = async () => {
    const chatCompletion = await new OpenAI({
        apiKey: process.env.LLM_API_KEY, // Your Secret API Key
    }).chat.completions.create({
        messages: [{ role: 'user', content: 'Generate a haiku' }],
        model: 'gpt-3.5-turbo'
    });
    return chatCompletion?.choices[0]?.message?.content || "Could not review your haiku now";
};


export { getHaiku };