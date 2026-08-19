export type AiTool = "searchContacts" | "draftCampaign" | "campaignAnalytics";

export async function runAiTool(tool: AiTool, input: Record<string, unknown>) {
  switch (tool) {
    case "searchContacts":
      return { tool, query: input.query ?? "", results: [] };
    case "draftCampaign":
      return { tool, draft: { name: input.name ?? "Untitled", channel: input.channel ?? "email" } };
    case "campaignAnalytics":
      return { tool, metrics: { sent: 0, delivered: 0, converted: 0 } };
  }
}
