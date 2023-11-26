import {resolve} from "path";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import * as dotenv from "dotenv";
// import router
import UserRouter from "./routers/userRouter";

dotenv.config({path: resolve(__dirname, "./../server.env")});
const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set router
app.use('/user', UserRouter);


app.listen(process.env.PORT,()=>{
    console.log(`http://localhost:${process.env.PORT}`);
});