import dotenv from 'dotenv';
dotenv.config();
export const PORT = process.env.SERVER_PORT;
export const DB_PATH = process.env.DB_PATH!;