import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("contactId");
  if (!id) return NextResponse.json({ error: "contactId is required" }, { status: 400 });
  const contact = await prisma.contact.findUnique({ where: { id }, include: { company: true, deals: { orderBy: { updatedAt: "desc" } }, activities: { orderBy: { createdAt: "desc" }, take: 50 }, conversations: { orderBy: { updatedAt: "desc" } }, calls: { orderBy: { createdAt: "desc" }, take: 20 }, campaigns: { include: { campaign: true } } } });
  if (!contact) return NextResponse.json({ error: "Contact not found" }, { status: 404 });
  const totalDealValue = contact.deals.reduce((sum, d) => sum + d.value, 0);
  return NextResponse.json({ customer: contact, summary: { totalDealValue, openDeals: contact.deals.filter(d => !["WON", "LOST"].includes(d.stage)).length, activities: contact.activities.length, conversations: contact.conversations.length, calls: contact.calls.length, campaigns: contact.campaigns.length } });
}
