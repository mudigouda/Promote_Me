export default function Home() {
  return <main>
    <h1>Promote_Me</h1>
    <p className="muted">Omnichannel campaign control center</p>
    <section className="grid">
      <div className="card"><div className="muted">Contacts</div><div className="value">12,480</div></div>
      <div className="card"><div className="muted">Active campaigns</div><div className="value">8</div></div>
      <div className="card"><div className="muted">Messages queued</div><div className="value">3,240</div></div>
      <div className="card"><div className="muted">Conversion</div><div className="value">6.8%</div></div>
    </section>
    <section className="card">
      <h2>Campaign workflow</h2>
      <p className="muted">Create a campaign, segment contacts by consent and location, select an approved channel adapter, schedule delivery, and review analytics.</p>
    </section>
  </main>;
}
