/*
  Warnings:

  - You are about to drop the column `active` on the `Subcategory` table. All the data in the column will be lost.
  - You are about to drop the column `active` on the `bank_account` table. All the data in the column will be lost.
  - You are about to drop the column `active` on the `category` table. All the data in the column will be lost.
  - You are about to drop the column `active` on the `credit_card` table. All the data in the column will be lost.
  - You are about to drop the column `active` on the `transaction_method` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[user_id,name,in_out]` on the table `category` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "category_user_id_name_key";

-- AlterTable
ALTER TABLE "Subcategory" DROP COLUMN "active";

-- AlterTable
ALTER TABLE "bank_account" DROP COLUMN "active";

-- AlterTable
ALTER TABLE "category" DROP COLUMN "active";

-- AlterTable
ALTER TABLE "credit_card" DROP COLUMN "active";

-- AlterTable
ALTER TABLE "transaction_method" DROP COLUMN "active";

-- CreateIndex
CREATE UNIQUE INDEX "category_user_id_name_in_out_key" ON "category"("user_id", "name", "in_out");
