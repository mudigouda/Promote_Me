import { NextResponse } from "next/server";
import { prisma } from "../../../../../src/lib/prisma";
import { createSession, hashPassword, sessionCookie } from "../../../../../src/lib/auth";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim().toLowerCase();
    const password = String(body.password ?? "");
    const businessName = String(body.business ?? "").trim();
    if (!name || !email || !password || !businessName) return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    if (password.length < 8) return NextResponse.json({ error: "Password must be at least 8 characters." }, { status: 400 });
    if (!/^\S+@\S+\.\S+$/.test(email)) return NextResponse.json({ error: "Enter a valid email." }, { status: 400 });
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) return NextResponse.json({ error: "An account with this email already exists." }, { status: 409 });
    const passwordHash = await hashPassword(password);
    const user = await prisma.user.create({ data: { name, email, passwordHash, memberships: { create: { role: "OWNER", business: { create: { name: businessName } } } } }, include: { memberships: true } });
    const { token, expiresAt } = await createSession(user.id);
    const response = NextResponse.json({ ok: true });
    response.headers.set("Set-Cookie", sessionCookie(token, expiresAt));
    return response;
  } catch { return NextResponse.json({ error: "Unable to create account." }, { status: 500 }); }
}
