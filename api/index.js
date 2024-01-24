import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import listingRouter from "./routes/listing.route.js";
import cookieParser from "cookie-parser";
import path from "path";
import connectDB from "./config/connectDB.js";
import manageErrors from "./middleware/manageErrors.js";
import { errorHandler } from "./utils/error.js";
dotenv.config();

// ? Connect to DB
connectDB();

const app = express();

app.use(express.json());

app.use(cookieParser());

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/listing", listingRouter);

// ? if the router is not found, send 404 error
app.use((req, res, next) => next(errorHandler(404, "Router not found!")));

// ? handle errors
app.use(manageErrors);

// ? once connected to DB, start server
mongoose.connection.once("open", () => {
   console.log("connected to DB");
   app.listen(3000, () => console.log("Server is running on port 3000!"));
});
