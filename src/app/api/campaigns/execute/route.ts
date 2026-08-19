import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const b = await req.json();
  const businessId = b.businessId || process.env.DEFAULT_BUSINESS_ID;
  if (!businessId || !b.campaignId) return NextResponse.json({ error: "businessId and campaignId are required" }, { status: 400 });
  const campaign = await prisma.campaign.findFirst({ where: { id: b.campaignId, businessId }, include: { contacts: { include: { contact: true } } } });
  if (!campaign) return NextResponse.json({ error: "Campaign not found" }, { status: 404 });
  if (campaign.status !== "approved" && campaign.status !== "scheduled") return NextResponse.json({ error: "Campaign must be approved or scheduled" }, { status: 409 });
  const eligible = campaign.contacts.filter(x => x.contact.consent && !x.contact.optedOutAt);
  if (!eligible.length) return NextResponse.json({ error: "No consented recipients" }, { status: 409 });
  await prisma.campaign.update({ where: { id: campaign.id }, data: { status: "sending" } });
  await prisma.campaignMetric.create({ data: { campaignId: campaign.id, sent: eligible.length } });
  await prisma.campaignContact.updateMany({ where: { campaignId: campaign.id, contactId: { in: eligible.map(x => x.contactId) } }, data: { status: "queued" } });
  return NextResponse.json({ queued: eligible.length, channel: campaign.channel, providerConfigured: Boolean(process.env.WHATSAPP_ACCESS_TOKEN || process.env.EMAIL_PROVIDER_API_KEY) });
}
