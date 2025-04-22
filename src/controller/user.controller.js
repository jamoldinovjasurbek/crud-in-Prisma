import UserService from "../service/user.service.js";
import CustomError from "../utils/custom.error.js";

export default class UserController {
  constructor() {
    this.userService = new UserService();
  }
  async create(req, res) {
    try {
      const newUser = await this.userService.createUser(req.body);
      res.status(201).json(newUser);
    } catch (error) {
      throw new CustomError(error.message, 500);
    }
  }

  async findOne(req, res) {
    try {
      const user = await this.userService.getUserById(req.params.id);
      if (!user) {
        return res.status(404).json({ message: "user not found" });
      } else {
        return res.status(201).json(user);
      }
    } catch (error) {
      throw new CustomError(error.message, 500);
    }
  }
  async findAll(req, res) {
    try {
      const user = await this.userService.getAll();
      res.json(user);
    } catch (error) {
      throw new CustomError(error.message, 500);
    }
  }
  async update(req, res) {
    try {
      const UpdateUser = await this.userService.update(req.params.id, req.body);
      res.status(201).json(UpdateUser);
    } catch (error) {
      throw new CustomError(error.message, 500);
    }
  }
  async delete(req, res) {
    try {
      await this.userService.deleteOne(req.params.id);
      res.status(201).json({ message: "user deleted" });
    } catch (error) {
      throw new CustomError(error.message, 500);
    }
  }
}
