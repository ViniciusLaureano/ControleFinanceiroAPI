/*
  Warnings:

  - Added the required column `months` to the `plan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "plan" ADD COLUMN     "months" INTEGER NOT NULL;
