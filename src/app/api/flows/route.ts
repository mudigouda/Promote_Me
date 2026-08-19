import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

const flows = [
  { id: "lead-capture", name: "Lead Capture", steps: ["Source", "Deduplicate", "Contact", "Consent", "Assign", "Follow-up"] },
  { id: "qualification", name: "Lead Qualification", steps: ["Lead", "Score", "Qualify", "Segment", "Deal"] },
  { id: "campaign", name: "Promotion", steps: ["Audience", "Consent", "AI Draft", "Approval", "Schedule", "Send", "Measure"] },
  { id: "conversation", name: "Conversation", steps: ["Inbound", "Identify", "AI Intent", "Reply", "Human Handoff", "Activity"] },
  { id: "conversion", name: "Sales Conversion", steps: ["Interested", "Lead", "Call", "Deal", "Won/Lost", "Revenue"] },
  { id: "retention", name: "Retention", steps: ["Customer", "Segment", "Automation", "Follow-up", "Repeat"] },
  { id: "analytics", name: "Analytics", steps: ["Events", "Attribution", "ROI", "Insights", "Next Action"] },
];

export async function GET() {
  const business = await prisma.business.findFirst({ select: { id: true, name: true } });
  return NextResponse.json({ business, flows });
}
