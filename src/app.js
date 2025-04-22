import express from "express";
import "dotenv/config";
import UserRoute from "./router/user.routes.js";
import { PrismaClient } from "@prisma/client";
const Port = process.env.PORT || 8080;

const app = express();
const prisma=new PrismaClient()
app.use(express.json());
app.use("/api/users", UserRoute);

const initApp = async () => {
  try {
    await prisma.$connect()
    console.log("database connected");
    
    app.listen(Port, () => {
      console.log("server is running at port:", Port);
    });
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};
initApp();
