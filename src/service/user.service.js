import { PrismaClient } from "@prisma/client";

export default class UserService {
  constructor() {
    this.prisma = new PrismaClient();
  }
  async createUser(user) {
    return await this.prisma.user.create({ data: user });
  }
  async getUserById(id) {
    return await this.prisma.user.findUnique({
      where: { id: Number(id) },
    });
  }
  async getAll() {
    return await this.prisma.user.findMany();
  }
  async update(id, data) {
    return await this.prisma.user.update({
      where: { id: Number(id) },
      data,
    });
  }
  async deleteOne(id) {
    return await this.prisma.user.delete({
      where: { id: Number(id) },
    });
  }
}
