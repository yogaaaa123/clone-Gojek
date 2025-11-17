import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'dev_secret';

export async function POST(req: NextRequest) {
    const { token } = await req.json();
    if (!token) {
        return NextResponse.json({ error: 'Token required' }, { status: 400 });
    }
    try {
        const payload = jwt.verify(token, JWT_SECRET);
        return NextResponse.json({ valid: true, payload });
    } catch {
        return NextResponse.json({ valid: false }, { status: 401 });
    }
}
