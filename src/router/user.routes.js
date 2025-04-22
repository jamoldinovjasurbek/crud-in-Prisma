import { Router } from "express";
import UserController from "../controller/user.controller.js";
const UserRoute=Router()
const controller=new UserController()
UserRoute.post("/",controller.create.bind(controller))
UserRoute.get("/:id",controller.findOne.bind(controller))
UserRoute.get("/",controller.findAll.bind(controller))
UserRoute.put("/:id",controller.update.bind(controller))
UserRoute.delete("/:id",controller.delete.bind(controller))


export default UserRoute;