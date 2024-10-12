// app/api/favfood/add/route.ts
import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { userId, ffoodtype } = await req.json();

  if (!userId || !ffoodtype) {
    return NextResponse.json({ error: 'User ID and food type are required' }, { status: 400 });
  }

  try {
    const newFavFood = await prisma.favFood.create({
      data: {
        userId,
        ffoodtype,
      },
    });

    return NextResponse.json(newFavFood);
  } catch (error) {
    console.error('Error adding favorite food:', error);
    return NextResponse.json({ error: 'Failed to add favorite food' }, { status: 500 });
  }
}
