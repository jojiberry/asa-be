/*
  Warnings:

  - You are about to drop the column `created` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `updated` on the `Item` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Item" DROP COLUMN "created",
DROP COLUMN "updated";
