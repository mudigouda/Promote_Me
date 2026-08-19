import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST() {
  if (process.env.NODE_ENV === "production" && process.env.ALLOW_DEMO_RESET !== "true") {
    return NextResponse.json({ error: "Demo reset is disabled in production." }, { status: 403 });
  }
  const business = await prisma.business.findFirst();
  if (!business) return NextResponse.json({ error: "No demo business exists." }, { status: 404 });

  await prisma.$transaction([
    prisma.auditLog.deleteMany({ where: { businessId: business.id } }),
    prisma.paymentLink.deleteMany({ where: { businessId: business.id } }),
    prisma.businessProspect.deleteMany({ where: { businessId: business.id } }),
    prisma.adCampaign.deleteMany({ where: { businessId: business.id } }),
    prisma.integration.deleteMany({ where: { businessId: business.id } }),
    prisma.whatsAppForm.deleteMany({ where: { businessId: business.id } }),
    prisma.chatbotFlow.deleteMany({ where: { businessId: business.id } }),
    prisma.audienceSegment.deleteMany({ where: { businessId: business.id } }),
    prisma.messageTemplate.deleteMany({ where: { businessId: business.id } }),
    prisma.call.deleteMany({ where: { businessId: business.id } }),
    prisma.conversation.deleteMany({ where: { businessId: business.id } }),
    prisma.campaignMetric.deleteMany({ where: { campaign: { businessId: business.id } } }),
    prisma.campaignContact.deleteMany({ where: { campaign: { businessId: business.id } } }),
    prisma.campaign.deleteMany({ where: { businessId: business.id } }),
    prisma.activity.deleteMany({ where: { businessId: business.id } }),
    prisma.deal.deleteMany({ where: { businessId: business.id } }),
    prisma.contact.deleteMany({ where: { businessId: business.id } }),
    prisma.company.deleteMany({ where: { businessId: business.id } }),
    prisma.automation.deleteMany({ where: { businessId: business.id } }),
    prisma.channelAccount.deleteMany({ where: { businessId: business.id } }),
  ]);
  return NextResponse.json({ ok: true, message: "Demo data cleared. Run npm run db:seed to restore sample data." });
}
