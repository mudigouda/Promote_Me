import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

function scoreLead(contact: { consent: boolean; phone: string | null; email: string | null; city: string | null; companyId: string | null; optedOutAt: Date | null }) {
  let score = 0;
  if (contact.consent && !contact.optedOutAt) score += 30;
  if (contact.phone) score += 20;
  if (contact.email) score += 15;
  if (contact.city) score += 10;
  if (contact.companyId) score += 15;
  return Math.min(score, 100);
}

export async function GET(request: NextRequest) {
  const businessId = request.nextUrl.searchParams.get("businessId") || process.env.DEFAULT_BUSINESS_ID;
  if (!businessId) return NextResponse.json({ error: "businessId is required" }, { status: 400 });
  const contacts = await prisma.contact.findMany({ where: { businessId }, include: { company: true, deals: true, activities: { orderBy: { createdAt: "desc" }, take: 3 } }, orderBy: { updatedAt: "desc" } });
  return NextResponse.json({ leads: contacts.map(c => ({ ...c, score: scoreLead(c) })) });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const businessId = body.businessId || process.env.DEFAULT_BUSINESS_ID;
  if (!businessId || !body.phone && !body.email) return NextResponse.json({ error: "businessId and phone or email are required" }, { status: 400 });
  const existing = await prisma.contact.findFirst({ where: { businessId, OR: [body.phone ? { phone: body.phone } : undefined, body.email ? { email: body.email } : undefined].filter(Boolean) as any } });
  if (existing) return NextResponse.json({ lead: existing, duplicate: true, score: scoreLead(existing) });
  const lead = await prisma.contact.create({ data: { businessId, firstName: body.firstName, lastName: body.lastName, phone: body.phone, email: body.email, companyName: body.companyName, city: body.city, region: body.region, country: body.country, postalCode: body.postalCode, lat: body.lat, lng: body.lng, consent: Boolean(body.consent), consentSource: body.consentSource, consentAt: body.consent ? new Date() : undefined } });
  await prisma.activity.create({ data: { businessId, contactId: lead.id, type: "NOTE", subject: "Lead captured", body: `Source: ${body.source || "manual"}` } });
  return NextResponse.json({ lead, score: scoreLead(lead) }, { status: 201 });
}
