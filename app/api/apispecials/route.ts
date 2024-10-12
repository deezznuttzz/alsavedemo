import { NextResponse } from 'next/server';
import { PrismaClient, FoodOrGroc } from '@prisma/client'; // Import Prisma's enum type
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    // Check the database connection
    await prisma.$connect();
    console.log('Database connected');

    const formData = await request.formData();
    const placeName = formData.get('placeName')?.toString();
    const location = formData.get('location')?.toString();
    const type = formData.get('type')?.toString();
    const specialName = formData.get('specialName')?.toString();
    
    // Validate and cast to the Prisma enum
    const foodorgroc = formData.get('foodorgroc')?.toString() as FoodOrGroc;
    if (!foodorgroc || !['Food', 'Grocery'].includes(foodorgroc)) {
      return NextResponse.json({ error: 'Invalid foodorgroc value' }, { status: 400 });
    }

    const from = formData.get('from')?.toString();
    const till = formData.get('till')?.toString();
    const before = parseFloat(formData.get('before')?.toString() || '0');
    const after = parseFloat(formData.get('after')?.toString() || '0');
    const image = formData.get('image') as File;
    const poster = formData.get('poster')?.toString();

    if (!placeName || !location || !type || !specialName || !from || !till || !image || !poster) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    const imageName = `${Date.now()}_${image.name}`;
    const imagePath = path.join(process.cwd(), 'public/uploads', imageName);
    const fileData = Buffer.from(await image.arrayBuffer());
    fs.writeFileSync(imagePath, fileData);

    let place = await prisma.places.findFirst({ where: { name: placeName, location } });

    if (!place) {
      place = await prisma.places.create({
        data: {
          name: placeName,
          location: location,
          type: type,
          imagepath: `/uploads/${imageName}`,
        },
      });
    }

    const newSpecial = await prisma.special.create({
      data: {
        name: specialName,
        type: type,
        foodorgroc: foodorgroc, // Prisma enum value assigned
        from: from,
        till: till,
        before,
        after,
        PlaceName: place.name,
        imagepath: `/uploads/${imageName}`,
        placesId: place.id,
        poster: poster,
      },
    });

    return NextResponse.json(newSpecial);
  } catch (error) {
    console.error('Error creating special:', error);
    return NextResponse.json({ error: 'An error occurred while creating the special' }, { status: 500 });
  }
}
