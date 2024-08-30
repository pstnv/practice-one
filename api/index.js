import "dotenv/config";
import express from "express";
import cors from "cors";
import greetRouter from "./route/greetRouter.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static("./public"));

app.use("/greet", greetRouter);

const port = process.env.PORT || 8000;
app.listen(port, (req, res) => {
    console.log(`Server is listening on port ${port}`);
});
