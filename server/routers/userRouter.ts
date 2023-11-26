import express from "express";
import { UserTest } from "../controllers/userController";


const router = express.Router();

router.get("/", UserTest);


export default router;