import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const businessId = req.nextUrl.searchParams.get("businessId") || process.env.DEFAULT_BUSINESS_ID;
  if (!businessId) return NextResponse.json({ error: "businessId is required" }, { status: 400 });
  const contacts = await prisma.contact.findMany({ where: { businessId, consent: true, optedOutAt: null }, select: { id:true, firstName:true,lastName:true,phone:true,email:true,city:true,region:true,companyName:true } });
  return NextResponse.json({ count: contacts.length, contacts });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const businessId = body.businessId || process.env.DEFAULT_BUSINESS_ID;
  if (!businessId || !body.campaignId) return NextResponse.json({ error: "businessId and campaignId are required" }, { status: 400 });
  const contacts = await prisma.contact.findMany({ where: { businessId, consent: true, optedOutAt: null, ...(body.city ? { city: body.city } : {}) }, select: { id:true } });
  await prisma.campaignContact.createMany({ data: contacts.map(c => ({ campaignId: body.campaignId, contactId: c.id })), skipDuplicates: true });
  return NextResponse.json({ queuedAudience: contacts.length });
}
