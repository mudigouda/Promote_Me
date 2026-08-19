import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const b = await req.json();
  const businessId = b.businessId || process.env.DEFAULT_BUSINESS_ID;
  if (!businessId || !b.prospectId) return NextResponse.json({ error: "businessId and prospectId are required" }, { status: 400 });
  const prospect = await prisma.businessProspect.findFirst({ where: { id: b.prospectId, businessId } });
  if (!prospect) return NextResponse.json({ error: "Prospect not found" }, { status: 404 });
  const existing = prospect.phone ? await prisma.contact.findFirst({ where: { businessId, phone: prospect.phone } }) : null;
  if (existing) return NextResponse.json({ contact: existing, duplicate: true });
  const parts = prospect.name.trim().split(/\s+/);
  const contact = await prisma.contact.create({ data: { businessId, firstName: parts.shift() || prospect.name, lastName: parts.join(" ") || undefined, phone: prospect.phone, city: prospect.city, region: prospect.region, country: prospect.country, postalCode: prospect.postalCode, lat: prospect.lat, lng: prospect.lng, companyName: prospect.name, consent: false, consentSource: "business-finder" } });
  await prisma.activity.create({ data: { businessId, contactId: contact.id, type: "NOTE", subject: "Prospect converted to CRM", body: `Business Finder prospect ${prospect.id}` } });
  return NextResponse.json({ contact, prospect });
}
