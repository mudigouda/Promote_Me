import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { COOKIE_NAME, getSessionUser } from "../../src/lib/auth";

export default async function Dashboard() {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  const user = await getSessionUser(token);

  if (!user) redirect("/login");

  const membership = user.memberships[0];
  const businessName = membership?.business?.name ?? "Your Business";

  return (
    <main style={{ minHeight: "100vh", padding: "32px", fontFamily: "system-ui, sans-serif" }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
        <div>
          <h1 style={{ margin: 0 }}>Promote_Me</h1>
          <p style={{ margin: "6px 0 0", color: "#666" }}>Marketing workspace</p>
        </div>
        <form action="/api/auth/logout" method="post">
          <button type="submit">Log out</button>
        </form>
      </header>

      <section style={{ marginTop: 32 }}>
        <h2>Welcome{user.name ? `, ${user.name}` : ""}!</h2>
        <p>You are signed in to <strong>{businessName}</strong>.</p>
        <p>Role: <strong>{membership?.role ?? "VIEWER"}</strong></p>
      </section>

      <section style={{ marginTop: 32, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
        {[
          ["Campaigns", "Create and manage promotions"],
          ["Contacts", "Manage your business contacts"],
          ["Channels", "Connect WhatsApp and social accounts"],
          ["AI Assistant", "Help users create and manage campaigns"],
        ].map(([title, text]) => (
          <div key={title} style={{ border: "1px solid #ddd", borderRadius: 12, padding: 20 }}>
            <h3 style={{ marginTop: 0 }}>{title}</h3>
            <p style={{ color: "#666" }}>{text}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
