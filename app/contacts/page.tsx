import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { COOKIE_NAME, getSessionUser } from "../../src/lib/auth";
import { prisma } from "../../src/lib/prisma";

export default async function ContactsPage() {
  const u = await getSessionUser((await cookies()).get(COOKIE_NAME)?.value);
  const m = u?.memberships[0];
  if (!u || !m) redirect("/login");

  const [contacts, members] = await Promise.all([
    prisma.contact.findMany({
      where: { businessId: m.businessId },
      include: { assignedToMembership: { include: { user: true } } },
      orderBy: { createdAt: "desc" },
    }),
    prisma.membership.findMany({
      where: { businessId: m.businessId },
      include: { user: true },
      orderBy: { createdAt: "asc" },
    }),
  ]);

  return (
    <main style={{ minHeight: "100vh", background: "#f4f6f9", padding: "32px 20px", fontFamily: "system-ui" }}>
      <div style={{ maxWidth: 1150, margin: "auto" }}>
        <a href="/dashboard">← Dashboard</a>
        <h1>Contacts</h1>
        <p style={{ color: "#667085" }}>Manage leads, customers and assignments.</p>
        <section style={{ background: "#fff", border: "1px solid #e4e7ec", borderRadius: 16, padding: 22 }}>
          <h2>Add contact</h2>
          <form action="/api/contacts" method="post" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 14 }}>
            {[
              ["firstName", "First name", true], ["lastName", "Last name", false], ["company", "Company", true],
              ["phone", "Phone", true], ["email", "Email", false], ["city", "City", false],
              ["region", "State / Region", false], ["country", "Country", false],
            ].map(([n, label, required]) => (
              <label key={String(n)} style={{ display: "grid", gap: 6, fontWeight: 600 }}>
                {String(label)}
                <input name={String(n)} required={Boolean(required)} placeholder={String(label)} style={{ padding: 12, border: "1px solid #d0d5dd", borderRadius: 10 }} />
              </label>
            ))}
            <label style={{ display: "grid", gap: 6, fontWeight: 600 }}>
              Assign to
              <select name="assignedToMembershipId" style={{ padding: 12, border: "1px solid #d0d5dd", borderRadius: 10 }}>
                <option value="">Unassigned</option>
                {members.map((x) => <option key={x.id} value={x.id}>{x.user.name || x.user.email} · {x.role}</option>)}
              </select>
            </label>
            <div style={{ gridColumn: "1/-1" }}><button type="submit" style={{ padding: "12px 20px", border: 0, borderRadius: 10, fontWeight: 700, cursor: "pointer" }}>Add Contact</button></div>
          </form>
        </section>
        <section style={{ marginTop: 22, background: "#fff", border: "1px solid #e4e7ec", borderRadius: 16, overflow: "hidden" }}>
          <div style={{ padding: 18, borderBottom: "1px solid #e4e7ec" }}><strong>{contacts.length} contacts</strong></div>
          {contacts.length === 0 ? <p style={{ padding: 20, color: "#667085" }}>No contacts yet.</p> : contacts.map((c) => (
            <article key={c.id} style={{ padding: 18, borderBottom: "1px solid #eef0f3", display: "flex", justifyContent: "space-between", gap: 18, flexWrap: "wrap" }}>
              <div>
                <strong style={{ fontSize: 17 }}>{[c.firstName, c.lastName].filter(Boolean).join(" ")}</strong>
                <div style={{ color: "#475467", marginTop: 5 }}>{c.company || "No company"} · {c.phone || "No phone"}{c.email ? ` · ${c.email}` : ""}</div>
                <div style={{ color: "#667085", fontSize: 14, marginTop: 4 }}>{[c.city, c.region, c.country].filter(Boolean).join(", ") || "No location"}</div>
              </div>
              <div style={{ padding: "6px 10px", borderRadius: 999, background: c.assignedToMembership ? "#eaf2ff" : "#f2f4f7", color: c.assignedToMembership ? "#175cd3" : "#475467", height: "fit-content", fontSize: 13, fontWeight: 700 }}>
                {c.assignedToMembership ? `Assigned: ${c.assignedToMembership.user.name || c.assignedToMembership.user.email}` : "Unassigned"}
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
