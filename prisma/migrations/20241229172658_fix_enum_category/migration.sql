/*
  Warnings:

  - Changed the type of `in_out` on the `category` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "category" DROP COLUMN "in_out",
ADD COLUMN     "in_out" "CategoryInOut" NOT NULL;
