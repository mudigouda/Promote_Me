import { NextResponse } from "next/server";
import { prisma } from "../../../src/lib/prisma";
import { currentMembership } from "../../../src/lib/tenant";

export async function POST(request: Request) {
  const ctx = await currentMembership();
  if (!ctx) return NextResponse.redirect(new URL("/login", request.url));
  const f = await request.formData();
  const firstName = String(f.get("firstName") || "").trim();
  const lastName = String(f.get("lastName") || "").trim();
  const company = String(f.get("company") || "").trim();
  const phone = String(f.get("phone") || "").trim();
  const email = String(f.get("email") || "").trim().toLowerCase();
  if (!firstName || !company || !phone) {
    return NextResponse.json({ error: "First name, company and phone are required." }, { status: 400 });
  }
  if (email && !/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }
  await prisma.contact.create({data:{businessId:ctx.businessId,firstName,lastName:lastName||null,company,phone,email:email||null,city:String(f.get("city")||"").trim()||null,region:String(f.get("region")||"").trim()||null,country:String(f.get("country")||"").trim()||null}});
  return NextResponse.redirect(new URL("/contacts?saved=1", request.url));
}
