import { PrismaClient } from "./generated/prisma";

export const prismaClient = new PrismaClient();

console.log(Object.keys(prismaClient.request));