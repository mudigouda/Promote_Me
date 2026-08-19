import { NextResponse } from "next/server";
import { prisma } from "../../../../../src/lib/prisma";
import { createSession, sessionCookie, verifyPassword } from "../../../../../src/lib/auth";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = String(body.email ?? "").trim().toLowerCase();
    const password = String(body.password ?? "");
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || !(await verifyPassword(password, user.passwordHash))) return NextResponse.json({ error: "Invalid email or password." }, { status: 401 });
    const { token, expiresAt } = await createSession(user.id);
    const response = NextResponse.json({ ok: true });
    response.headers.set("Set-Cookie", sessionCookie(token, expiresAt));
    return response;
  } catch { return NextResponse.json({ error: "Unable to sign in." }, { status: 500 }); }
}
