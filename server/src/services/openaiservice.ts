import { OpenAI } from "openai";
import { LLM_API_KEY } from "../config";


// Get a haiku from the OpenAI API
const getHaiku = async () => {
    const chatCompletion = await new OpenAI({
        apiKey: LLM_API_KEY, // Your Secret API Key
    }).chat.completions.create({
        messages: [{ role: 'user', content: 'Generate a haiku' }],
        model: 'gpt-3.5-turbo'
    });
    return chatCompletion?.choices[0]?.message?.content || "Could not get your haiku now";
};

// Get a review of the haiku from the OpenAI API
const reviewHaiku = async (userquery: string) => {
    const chatCompletion = await new OpenAI({
        apiKey: LLM_API_KEY, // Your Secret API Key
    }).chat.completions.create({
        messages: [{ role: 'user', content: 'Give feedback on this haiku ' + userquery }],
        model: 'gpt-3.5-turbo'

    });
    return chatCompletion?.choices[0]?.message?.content || "Could not review your haiku now";
};


export { getHaiku, reviewHaiku };