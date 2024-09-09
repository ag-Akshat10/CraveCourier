import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connectDB";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000; // Make sure this is a valid port number
app.listen(PORT, () => {
connectDB();
  console.log(`Server running on port ${PORT}`);
});
