-- CreateEnum
CREATE TYPE "Userroles" AS ENUM ('User', 'Owner', 'Admin');

-- CreateEnum
CREATE TYPE "FoodOrGroc" AS ENUM ('Food', 'Groc', 'Both');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL DEFAULT 'Unknown',
    "email" TEXT NOT NULL,
    "role" "Userroles" NOT NULL DEFAULT 'User',
    "password" TEXT NOT NULL,
    "refreshToken" TEXT,
    "subscription" JSONB,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FavFood" (
    "id" SERIAL NOT NULL,
    "type" TEXT,
    "userId" INTEGER NOT NULL,
    "place" TEXT,
    "ffoodname" TEXT,
    "fplacename" TEXT,
    "ffoodtype" TEXT,
    "notified" TEXT DEFAULT 'not yet',

    CONSTRAINT "FavFood_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Places" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "imagepath" TEXT NOT NULL,

    CONSTRAINT "Places_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Special" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "poster" TEXT NOT NULL DEFAULT 'beforetime',
    "foodorgroc" "FoodOrGroc" NOT NULL,
    "imagepath" TEXT NOT NULL,
    "from" TEXT NOT NULL,
    "till" TEXT NOT NULL,
    "before" DOUBLE PRECISION NOT NULL,
    "after" DOUBLE PRECISION NOT NULL,
    "placesId" INTEGER NOT NULL,
    "PlaceName" TEXT NOT NULL,

    CONSTRAINT "Special_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_foodbyname" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_placebyname" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_favbytype" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Places_name_key" ON "Places"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_foodbyname_AB_unique" ON "_foodbyname"("A", "B");

-- CreateIndex
CREATE INDEX "_foodbyname_B_index" ON "_foodbyname"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_placebyname_AB_unique" ON "_placebyname"("A", "B");

-- CreateIndex
CREATE INDEX "_placebyname_B_index" ON "_placebyname"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_favbytype_AB_unique" ON "_favbytype"("A", "B");

-- CreateIndex
CREATE INDEX "_favbytype_B_index" ON "_favbytype"("B");

-- AddForeignKey
ALTER TABLE "FavFood" ADD CONSTRAINT "FavFood_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Special" ADD CONSTRAINT "Special_placesId_fkey" FOREIGN KEY ("placesId") REFERENCES "Places"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Special" ADD CONSTRAINT "Special_PlaceName_fkey" FOREIGN KEY ("PlaceName") REFERENCES "Places"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_foodbyname" ADD CONSTRAINT "_foodbyname_A_fkey" FOREIGN KEY ("A") REFERENCES "FavFood"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_foodbyname" ADD CONSTRAINT "_foodbyname_B_fkey" FOREIGN KEY ("B") REFERENCES "Special"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_placebyname" ADD CONSTRAINT "_placebyname_A_fkey" FOREIGN KEY ("A") REFERENCES "FavFood"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_placebyname" ADD CONSTRAINT "_placebyname_B_fkey" FOREIGN KEY ("B") REFERENCES "Special"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_favbytype" ADD CONSTRAINT "_favbytype_A_fkey" FOREIGN KEY ("A") REFERENCES "FavFood"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_favbytype" ADD CONSTRAINT "_favbytype_B_fkey" FOREIGN KEY ("B") REFERENCES "Special"("id") ON DELETE CASCADE ON UPDATE CASCADE;
