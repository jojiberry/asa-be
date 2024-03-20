-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_warehouseId_fkey";

-- DropIndex
DROP INDEX "Logger_id_item_key";

-- DropIndex
DROP INDEX "Logger_id_user_key";

-- CreateTable
CREATE TABLE "_ItemToWarehouse" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ItemToWarehouse_AB_unique" ON "_ItemToWarehouse"("A", "B");

-- CreateIndex
CREATE INDEX "_ItemToWarehouse_B_index" ON "_ItemToWarehouse"("B");

-- AddForeignKey
ALTER TABLE "_ItemToWarehouse" ADD CONSTRAINT "_ItemToWarehouse_A_fkey" FOREIGN KEY ("A") REFERENCES "Item"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ItemToWarehouse" ADD CONSTRAINT "_ItemToWarehouse_B_fkey" FOREIGN KEY ("B") REFERENCES "Warehouse"("id") ON DELETE CASCADE ON UPDATE CASCADE;
