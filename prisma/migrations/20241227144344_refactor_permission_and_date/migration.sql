/*
  Warnings:

  - You are about to alter the column `name` on the `plan` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `email` on the `user` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `first_name` on the `user` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `last_name` on the `user` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `nickname` on the `user` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - The `permission` column on the `user` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to alter the column `password` on the `user` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - Added the required column `finish_date` to the `user_plan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `start_date` to the `user_plan` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "UserPermission" AS ENUM ('basic', 'complete');

-- DropIndex
DROP INDEX "user_plan_user_id_plan_id_key";

-- AlterTable
ALTER TABLE "plan" ALTER COLUMN "name" SET DATA TYPE VARCHAR(255);

-- AlterTable
ALTER TABLE "user" ALTER COLUMN "email" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "first_name" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "last_name" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "nickname" SET DATA TYPE VARCHAR(255),
DROP COLUMN "permission",
ADD COLUMN     "permission" "UserPermission" NOT NULL DEFAULT 'basic',
ALTER COLUMN "password" SET DATA TYPE VARCHAR(255);

-- AlterTable
ALTER TABLE "user_plan" ADD COLUMN     "finish_date" DATE NOT NULL,
ADD COLUMN     "start_date" DATE NOT NULL;
