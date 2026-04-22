// src/app/api/events/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    // データベースからすべてのイベントを取得
    const events = await prisma.event.findMany({
      orderBy: {
        date: 'asc', // 日付順に並び替え
      },
    });

    // 取得に成功した場合
    return NextResponse.json(events);
  } catch (error) {
    console.error('Database connection error:', error);
    
    // エラーが発生した場合（DBが起動していない、URLが間違っている等）
    return NextResponse.json(
      { error: 'データベース接続に失敗しました' },
      { status: 500 }
    );
  }
}