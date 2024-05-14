import { NODE_ENV } from './../../../.svelte-kit/ambient.d';
import { PrismaClient } from "@prisma/client";

const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === 'development') {
    global.prisma = prisma;
};

export { prisma }