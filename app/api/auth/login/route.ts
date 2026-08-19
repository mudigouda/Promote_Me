import { NextResponse } from "next/server";
import { prisma } from "../../../../src/lib/prisma";
import { createSession, verifyPassword } from "../../../../src/lib/auth";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = String(body.email ?? "").trim().toLowerCase();
    const password = String(body.password ?? "");
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || !(await verifyPassword(password, user.passwordHash))) {
      return NextResponse.json({ error: "Invalid email or password." }, { status: 401 });
    }
    const { token, expiresAt } = await createSession(user.id);
    const response = NextResponse.json({ ok: true, redirectTo: "/dashboard" });
    response.cookies.set("promote_me_session", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      expires: expiresAt,
    });
    return response;
  } catch (error) {
    console.error("LOGIN_ERROR", error);
    return NextResponse.json({ error: "Unable to sign in." }, { status: 500 });
  }
}
