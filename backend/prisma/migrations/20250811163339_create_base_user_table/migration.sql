/*
  Warnings:

  - You are about to drop the `members` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "public"."members";

-- CreateTable
CREATE TABLE "public"."base_user" (
    "id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "base_user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "base_user_email_key" ON "public"."base_user"("email");
