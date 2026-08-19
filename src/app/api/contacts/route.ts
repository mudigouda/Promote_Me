import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

const businessId = (req: NextRequest) => req.nextUrl.searchParams.get("businessId") || process.env.DEFAULT_BUSINESS_ID;

export async function GET(req: NextRequest) {
  const id = businessId(req);
  if (!id) return NextResponse.json({ error: "businessId is required" }, { status: 400 });
  const q = req.nextUrl.searchParams.get("q")?.trim();
  const city = req.nextUrl.searchParams.get("city")?.trim();
  const contacts = await prisma.contact.findMany({
    where: { businessId: id, ...(city ? { city: { contains: city, mode: "insensitive" } } : {}), ...(q ? { OR: [{ firstName: { contains: q, mode: "insensitive" } }, { lastName: { contains: q, mode: "insensitive" } }, { phone: { contains: q } }, { email: { contains: q, mode: "insensitive" } }, { companyName: { contains: q, mode: "insensitive" } }] } : {}) },
    include: { company: true, deals: true },
    orderBy: { updatedAt: "desc" }, take: 100,
  });
  return NextResponse.json(contacts);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const id = body.businessId || process.env.DEFAULT_BUSINESS_ID;
  if (!id || !body.phone && !body.email) return NextResponse.json({ error: "businessId and phone or email are required" }, { status: 400 });
  const contact = await prisma.contact.create({ data: { businessId: id, firstName: body.firstName, lastName: body.lastName, phone: body.phone, email: body.email, companyName: body.companyName, companyId: body.companyId, city: body.city, region: body.region, country: body.country, postalCode: body.postalCode, lat: body.lat, lng: body.lng, consent: Boolean(body.consent), consentSource: body.consentSource, consentAt: body.consent ? new Date() : undefined } });
  await prisma.auditLog.create({ data: { businessId: id, action: "contact.created", metadata: { contactId: contact.id } } });
  return NextResponse.json(contact, { status: 201 });
}
