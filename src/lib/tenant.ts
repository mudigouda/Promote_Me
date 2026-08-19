import { cookies } from "next/headers";
import { COOKIE_NAME, getSessionUser } from "./auth";

export async function currentMembership() {
  const token = (await cookies()).get(COOKIE_NAME)?.value;
  const user = await getSessionUser(token);
  const membership = user?.memberships[0];
  if (!user || !membership) return null;
  return { user, membership, businessId: membership.businessId };
}

export function canManageBusiness(role: string) { return role === "OWNER" || role === "ADMIN"; }
export function canManageCampaigns(role: string) { return ["OWNER", "ADMIN", "MARKETING"].includes(role); }
