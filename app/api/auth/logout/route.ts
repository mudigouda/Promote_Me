import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { COOKIE_NAME, clearSessionCookie, hashToken } from "../../../../src/lib/auth";
import { prisma } from "../../../../src/lib/prisma";

export async function POST() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(COOKIE_NAME)?.value;
    if (token) {
      await prisma.session.deleteMany({ where: { tokenHash: hashToken(token) } });
    }
    const response = NextResponse.redirect(new URL("/login", process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"));
    response.headers.append("Set-Cookie", clearSessionCookie());
    return response;
  } catch (error) {
    console.error("LOGOUT_ERROR", error);
    const response = NextResponse.redirect(new URL("/login", process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"));
    response.headers.append("Set-Cookie", clearSessionCookie());
    return response;
  }
}
