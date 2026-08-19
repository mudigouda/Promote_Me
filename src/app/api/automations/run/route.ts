import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const b = await req.json();
  const businessId = b.businessId || process.env.DEFAULT_BUSINESS_ID;
  if (!businessId || !b.trigger) return NextResponse.json({ error: "businessId and trigger are required" }, { status: 400 });
  const rules = await prisma.automation.findMany({ where: { businessId, enabled: true } });
  const matched = rules.filter((r:any) => r.trigger === b.trigger || r.triggerType === b.trigger);
  const actions = matched.map((r:any) => ({ automationId: r.id, name: r.name, action: r.action || r.actionType || "follow_up" }));
  return NextResponse.json({ trigger: b.trigger, matched: matched.length, actions });
}
