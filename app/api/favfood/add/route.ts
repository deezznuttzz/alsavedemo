// app/api/favfood/add/route.ts
import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { userId, ffoodname, fplacename, ffoodtype } = await req.json();

  if (!userId || !ffoodname || !fplacename || !ffoodtype) {
    return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
  }

  try {
    const newFavFood = await prisma.favFood.create({
      data: {
        userId,
        ffoodname,
        fplacename,
        ffoodtype,
      },
    });

    return NextResponse.json(newFavFood);
  } catch (error) {
    console.error('Error adding favorite food:', error);
    return NextResponse.json({ error: 'Failed to add favorite food' }, { status: 500 });
  }
}
