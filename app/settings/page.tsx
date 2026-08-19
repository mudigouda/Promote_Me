import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { COOKIE_NAME, getSessionUser } from "../../src/lib/auth";

export default async function SettingsPage() {
  const user = await getSessionUser((await cookies()).get(COOKIE_NAME)?.value);
  const membership = user?.memberships[0];
  if (!user || !membership) redirect("/login");
  const business = membership.business;
  return <main style={{maxWidth:900,margin:"40px auto",padding:24,fontFamily:"system-ui"}}><p><a href="/dashboard">← Dashboard</a></p><h1>Business Settings</h1><form action="/api/business" method="post" style={{display:"grid",gap:14}}><label>Business name<input name="name" defaultValue={business.name} required style={{display:"block",width:"100%",padding:10}}/></label><label>Phone<input name="phone" style={{display:"block",width:"100%",padding:10}}/></label><label>Email<input name="email" type="email" style={{display:"block",width:"100%",padding:10}}/></label><label>Website<input name="website" style={{display:"block",width:"100%",padding:10}}/></label><label>Address<input name="address" style={{display:"block",width:"100%",padding:10}}/></label><button type="submit">Save business</button></form><p style={{marginTop:24}}>Signed in as {user.email} · {membership.role}</p></main>;
}
