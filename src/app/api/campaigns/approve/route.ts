import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const { campaignId, action } = await req.json();
  if (!campaignId || !["approve", "schedule", "pause"].includes(action)) return NextResponse.json({ error: "campaignId and valid action are required" }, { status: 400 });
  const campaign = await prisma.campaign.findUnique({ where: { id: campaignId }, include: { contacts: { include: { contact: true } } } });
  if (!campaign) return NextResponse.json({ error: "Campaign not found" }, { status: 404 });
  if (action === "approve") return NextResponse.json(await prisma.campaign.update({ where: { id: campaignId }, data: { status: "approved" } }));
  if (action === "pause") return NextResponse.json(await prisma.campaign.update({ where: { id: campaignId }, data: { status: "paused" } }));
  if (campaign.status !== "approved") return NextResponse.json({ error: "Campaign must be approved before scheduling" }, { status: 409 });
  const updated = await prisma.campaign.update({ where: { id: campaignId }, data: { status: "scheduled", scheduledAt: campaign.scheduledAt || new Date() } });
  return NextResponse.json({ campaign: updated, eligibleRecipients: campaign.contacts.filter(x => x.contact.consent && !x.contact.optedOutAt).length });
}
