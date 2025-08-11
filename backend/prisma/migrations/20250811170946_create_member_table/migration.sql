-- CreateTable
CREATE TABLE "public"."member" (
    "id" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "is_admin" BOOLEAN NOT NULL,
    "base_user_id" TEXT NOT NULL,

    CONSTRAINT "member_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "member_base_user_id_key" ON "public"."member"("base_user_id");

-- AddForeignKey
ALTER TABLE "public"."member" ADD CONSTRAINT "member_base_user_id_fkey" FOREIGN KEY ("base_user_id") REFERENCES "public"."base_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
