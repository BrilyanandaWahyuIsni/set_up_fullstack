import { PrismaClient } from "@prisma/client";
import { Request,Response } from "express";
import { StatusCodes } from "http-status-codes";

const prisma = new PrismaClient();

export async function UserTest(req:Request, res:Response){
    res.json({"msg": "ok!"});
}

export async function CreateNewUser(req:Request, res:Response){
    await prisma.user.create({
        data: {...req.body}
    });
    res.status(StatusCodes.OK).json("ok");
    
}