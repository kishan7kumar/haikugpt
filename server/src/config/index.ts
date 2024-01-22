import dotenv from 'dotenv';
dotenv.config();
export const PORT = process.env.SERVER_PORT;
export const DB_PATH = process.env.DB_PATH!;
export const LLM_API_KEY = process.env.LLM_API_KEY!;