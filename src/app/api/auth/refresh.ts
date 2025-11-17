import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || 'dev_refresh_secret';
const JWT_SECRET = process.env.JWT_SECRET || 'dev_secret';

export async function POST(req: NextRequest) {
    const { refreshToken } = await req.json();
    if (!refreshToken) {
        return NextResponse.json({ error: 'Refresh token required' }, { status: 400 });
    }
    try {
        const payload = jwt.verify(refreshToken, JWT_REFRESH_SECRET) as { userId: string };
        const newAccessToken = jwt.sign({ userId: payload.userId }, JWT_SECRET, { expiresIn: '15m' });
        return NextResponse.json({ accessToken: newAccessToken });
    } catch {
        return NextResponse.json({ error: 'Invalid refresh token' }, { status: 401 });
    }
}
