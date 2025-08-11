-- CreateTable
CREATE TABLE "public"."client" (
    "id" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "birthday" DATE NOT NULL,
    "height" DECIMAL(4,2) NOT NULL,
    "weight" DECIMAL(5,2) NOT NULL,
    "base_user_id" TEXT NOT NULL,

    CONSTRAINT "client_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "client_base_user_id_key" ON "public"."client"("base_user_id");

-- AddForeignKey
ALTER TABLE "public"."client" ADD CONSTRAINT "client_base_user_id_fkey" FOREIGN KEY ("base_user_id") REFERENCES "public"."base_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
