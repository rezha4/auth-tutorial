import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;

// in dev mode, rebuilding will cause too many new PrismaClient
// so it'll do it like this for dev

// workflow: npx prisma generate, npx prisma db push