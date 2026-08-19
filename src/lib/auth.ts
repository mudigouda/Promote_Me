import crypto from "node:crypto";
import bcrypt from "bcryptjs";
import { prisma } from "./prisma";

export const COOKIE_NAME = "promote_me_session";
const SESSION_DAYS = 30;

export async function hashPassword(password: string) { return bcrypt.hash(password, 12); }
export async function verifyPassword(password: string, hash: string) { return bcrypt.compare(password, hash); }
export function hashToken(token: string) { return crypto.createHash("sha256").update(token).digest("hex"); }

export async function createSession(userId: string) {
  const token = crypto.randomBytes(32).toString("hex");
  const expiresAt = new Date(Date.now() + SESSION_DAYS * 86400000);
  await prisma.session.create({ data: { userId, tokenHash: hashToken(token), expiresAt } });
  return { token, expiresAt };
}

export function sessionCookie(token: string, expiresAt: Date) {
  return `${COOKIE_NAME}=${token}; Path=/; HttpOnly; SameSite=Lax; Expires=${expiresAt.toUTCString()}`;
}

export function clearSessionCookie() { return `${COOKIE_NAME}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0`; }

export async function getSessionUser(token?: string) {
  if (!token) return null;
  const session = await prisma.session.findUnique({ where: { tokenHash: hashToken(token) }, include: { user: { include: { memberships: { include: { business: true } } } } } });
  if (!session || session.expiresAt <= new Date()) return null;
  return session.user;
}
