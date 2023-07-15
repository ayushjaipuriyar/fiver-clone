import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { METHODS } from "http";
dotenv.config();
const app = express();

const port = process.env.PORT;
const hostname = process.env.HOSTNAME;
app.use(
  cors({
    origin: [hostname],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());
app.listen(port, () => {
  console.log(`Server is running at https://localhost:${port}`);
});
