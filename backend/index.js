import express from "express";
import {logger} from "logger-express"
import router from "./routes/routes.js";

const port = 3000;

// middlewares

const app = express();
app.use(logger());
app.use(express.json());
app.use("/",router);

app.listen(port, () => console.log(`Server running on localhost:${port}`));