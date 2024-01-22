import express from "express";
import createHttpError from "http-errors";
import morgan from "morgan";
import cors from "cors";
import { Database } from "sqlite3";
import { PORT, DB_PATH } from "./config";
import { errorHandler } from "./middleware/errorHandler";
import * as fs from "fs";

// Setting up global SQLite DB instance so that we don't have to create a new connection for every request
// tslint:disable-next-line
global.SQLiteDBInstance = null;

const app = express();
app.use(express.json());
app.use(morgan("tiny"));

// Setting up CORS for all routes
app.use(
  cors({
    origin: "*",
  })
);

app.use(() => {
  throw createHttpError(404, "Not found");
});

// Function to create a connection to the SQLite DB
function createDatabaseConnection() {
  if (fs.existsSync(DB_PATH)) {
    global.SQLiteDBInstance = new Database(DB_PATH);
  } else {
    const db: Database = new Database(DB_PATH, (error: any) => {
      if (error) {
        return console.error(error.message);
      }
    });
    db.exec(`
            CREATE TABLE haikuqueries
            (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              userquery TEXT NOT NULL
            );
    `);
    console.log("SQLite DB created");
    global.SQLiteDBInstance = db;
  }
  console.log("Database connnection successful");
}

createDatabaseConnection();

app.set("port", PORT);

let http = require("http").Server(app);

const server = http.listen(PORT, function () {
  console.log("listening on port " + PORT);
});

app.use(errorHandler);
