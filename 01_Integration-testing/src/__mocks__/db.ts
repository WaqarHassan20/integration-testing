import {mockDeep} from "vitest-mock-extended"
import { PrismaClient } from "../generated/prisma";

export const prismaClient = mockDeep<PrismaClient>();

// you can mock multiple prisma clients if you have more than one e.g
// export const mockedPrismaClient2 = mockDeep<PrismaClient>();
