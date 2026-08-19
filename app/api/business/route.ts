import { NextResponse } from "next/server";
import { prisma } from "../../../src/lib/prisma";
import { currentMembership, canManageBusiness } from "../../../src/lib/tenant";

export async function POST(request: Request) {
  const ctx = await currentMembership();
  if (!ctx) return NextResponse.redirect(new URL("/login", request.url));
  if (!canManageBusiness(ctx.membership.role)) return NextResponse.json({error:"Not authorized"},{status:403});
  const form = await request.formData();
  const name = String(form.get("name") ?? "").trim();
  if (!name) return NextResponse.json({error:"Business name is required"},{status:400});
  await prisma.business.update({ where:{id:ctx.businessId}, data:{name} });
  return NextResponse.redirect(new URL("/settings?saved=1", request.url));
}
