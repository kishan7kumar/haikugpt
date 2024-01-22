import express from "express";
import createHttpError from "http-errors";
import morgan from "morgan";
import cors from "cors";
import { PORT } from "./config";
import { errorHandler } from "./middleware/errorHandler";



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

app.set("port", PORT);

let http = require("http").Server(app);

const server = http.listen(PORT, function () {
  console.log("listening on port " + PORT);
});

app.use(errorHandler);
