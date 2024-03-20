import { PrismaClient } from "@prisma/client";

declare global {
    var prisma: PrismaClient;
}

async function setupDB() {
  let prisma: PrismaClient;

  if (!globalThis.prisma) {
    globalThis.prisma = new PrismaClient();
  }
  prisma = globalThis.prisma;
}

export { setupDB };