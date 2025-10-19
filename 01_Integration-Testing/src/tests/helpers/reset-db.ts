import { PrismaClient } from "../../generated/prisma";


const prisma = new PrismaClient();

export default async function clearDb() {
  await prisma.request.deleteMany();
};