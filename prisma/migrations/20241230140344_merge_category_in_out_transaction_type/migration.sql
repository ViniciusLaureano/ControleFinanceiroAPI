/*
  Warnings:

  - Changed the type of `type` on the `transaction` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterEnum
ALTER TYPE "CategoryInOut" ADD VALUE 'I';

-- AlterTable
ALTER TABLE "transaction" DROP COLUMN "type",
ADD COLUMN     "type" "CategoryInOut" NOT NULL;

-- DropEnum
DROP TYPE "TransactionType";
