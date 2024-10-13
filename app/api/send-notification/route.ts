import { NextResponse } from 'next/server';
import {prisma} from '@/lib/prisma';
import webpush from 'web-push';

webpush.setVapidDetails(
  'mailto:danieldavel22@gmail.com',
  'BBndgWKwLs0XPuy9DIH-Og5YpGrEdHjAIu4eW561L-gmXbqpqLm_gEHoE_pZwWtD0pQFf01CPWBpB0oprDXr7ZM',
  'c87V5ZrVXsvWmXrwftDay1nhjQsrZUaHJsjO4QPJWgE'
);

export async function POST(req: Request) {
  try {
    const { userId, message } = await req.json();

    if (!userId || !message) {
      return NextResponse.json({ error: 'User ID and message are required' }, { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { id: Number(userId) },
      select: { id: true, name: true, subscription: true },
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    if (!user.subscription) {
      return NextResponse.json({ error: 'No subscription found for this user' }, { status: 400 });
    }

    let subscription;
    try {
      subscription = JSON.parse(user.subscription as unknown as string);
    } catch {
      console.error('Failed to parse subscription:', user.subscription);
      return NextResponse.json({ error: 'Invalid subscription data' }, { status: 400 });
    }

    const payload = JSON.stringify({ title: 'Special Offers!', message });

    await webpush.sendNotification(subscription, payload);

    return NextResponse.json({ message: 'Notification sent successfully' });
  } catch (error) {
    console.error('Error while sending notification:', error);
    return NextResponse.json({ error: 'Failed to send notification' }, { status: 500 });
  }
}
