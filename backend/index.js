import express from "express";
import {logger} from "logger-express"
import router from "./routes/routes.js";
// import  serverLogs  from "./middleware/serverLogs.js";

const port = 3000;

// middlewares

const app = express();
app.use(express.json());
app.use("/", router);
app.use(logger());

app.listen(port, () => console.log(`Server running on localhost:${port}`));