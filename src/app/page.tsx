import { Bell, Bot, BriefcaseBusiness, CalendarDays, ChevronDown, FileText, Home, Inbox, Megaphone, MessageCircle, Phone, Search, Settings, Users, MapPinned, BarChart3, Send, Plus, Sparkles } from "lucide-react";

const nav = [
  ["Dashboard", Home], ["Campaigns", Megaphone], ["Contacts", Users], ["Business Finder", MapPinned],
  ["Inbox", Inbox], ["Calls", Phone], ["Automations", CalendarDays], ["Analytics", BarChart3], ["AI Assistant", Bot], ["Settings", Settings]
] as const;

const kpis = [
  ["Contacts", "12,480", "+8.2% this month"], ["Active campaigns", "8", "+3 this week"],
  ["Messages sent", "18,420", "+14.6% this month"], ["Conversion", "6.8%", "+1.4% vs last month"]
];

const channels = [["WhatsApp", "7,420 sent", 82], ["Instagram", "4,180 sent", 64], ["Facebook", "3,940 sent", 58], ["Email", "2,880 sent", 47]];

export default function Home() {
  return <div className="app-shell">
    <aside className="sidebar">
      <div className="brand"><div className="brand-mark"><Sparkles size={18}/></div>Promote_Me</div>
      <div className="nav">{nav.map(([label, Icon], i) => <a className={`nav-item ${i === 0 ? "active" : ""}`} href="#" key={label}><Icon size={17}/><span>{label}</span></a>)}</div>
      <div style={{position:"absolute",left:16,right:16,bottom:18}} className="card">
        <div style={{padding:14,color:"#111827"}}><div style={{fontSize:12,fontWeight:700}}>Need help?</div><div style={{fontSize:11,color:"#667085",marginTop:4}}>Ask the AI assistant about your campaigns.</div></div>
      </div>
    </aside>

    <div className="main">
      <header className="topbar">
        <div style={{display:"flex",alignItems:"center",gap:10}}><div className="desktop-only" style={{color:"#667085"}}><Search size={18}/></div><span className="kicker">Workspace / Overview</span></div>
        <div className="actions"><button className="btn desktop-only"><Bell size={16}/></button><button className="btn-primary btn"><Plus size={16}/> New Campaign</button><button className="btn desktop-only">Admin <ChevronDown size={14}/></button></div>
      </header>

      <main className="content">
        <div><div className="kicker">Wednesday, August 19</div><h1 className="title">Good evening, welcome back 👋</h1><p className="panel-subtitle">Here's what is happening across your marketing channels today.</p></div>

        <section className="grid kpi-grid">{kpis.map(([name,value,foot]) => <article className="card kpi" key={name}><div className="kpi-head"><span>{name}</span><BarChart3 size={15}/></div><div className="kpi-value">{value}</div><div className="kpi-foot">↗ {foot}</div></article>)}</section>

        <section className="grid content-grid">
          <article className="card panel"><div style={{display:"flex",justifyContent:"space-between",alignItems:"start"}}><div><h2 className="panel-title">Campaign performance</h2><p className="panel-subtitle">Messages delivered over the last 14 days</p></div><button className="btn">Last 14 days <ChevronDown size={13}/></button></div><div className="chart">{[36,52,43,68,58,74,61,82,70,89,77,94,84,98].map((h,i)=><div className="bar" style={{height:`${h}%`}} key={i}/>)}</div><div style={{display:"flex",justifyContent:"space-between",fontSize:11,color:"#98a2b3"}}><span>Aug 06</span><span>Aug 12</span><span>Aug 19</span></div></article>

          <article className="card panel"><h2 className="panel-title">Channel performance</h2><p className="panel-subtitle">Delivery activity by channel</p><div className="channel-list">{channels.map(([name,meta,value])=><div className="channel" key={name}><div className="channel-icon"><MessageCircle size={16}/></div><div className="channel-info"><div style={{display:"flex",justifyContent:"space-between"}}><span className="channel-name">{name}</span><span className="channel-meta">{meta}</span></div><div className="progress"><span style={{width:`${value}%`}}/></div></div></div>)}</div></article>
        </section>

        <section className="grid content-grid" style={{marginTop:16}}>
          <article className="card panel"><div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}><div><h2 className="panel-title">Recent campaigns</h2><p className="panel-subtitle">Latest activity across your workspace</p></div><button className="btn">View all</button></div><div style={{marginTop:18,display:"grid",gap:10}}>{[["Weekend Sale","WhatsApp · Instagram","8,240","Active"],["New Product Launch","Email · Facebook","4,180","Scheduled"],["Re-engagement","WhatsApp","2,940","Completed"]].map(([a,b,c,d])=><div key={a} style={{display:"flex",alignItems:"center",gap:14,padding:"12px 0",borderTop:"1px solid #eef0f4"}}><div className="channel-icon"><Megaphone size={16}/></div><div style={{flex:1}}><div style={{fontSize:13,fontWeight:700}}>{a}</div><div className="channel-meta">{b}</div></div><div style={{fontSize:13,fontWeight:700}}>{c}</div><span className="channel-meta">{d}</span></div>)}</div></article>
          <article className="card panel"><h2 className="panel-title">Quick actions</h2><p className="panel-subtitle">Jump into your most-used tools</p><div style={{display:"grid",gap:9,marginTop:18}}>{[[Users,"Import contacts"],[MapPinned,"Find businesses"],[Bot,"Ask AI assistant"],[Send,"Send test message"],[Phone,"Request callback"]].map(([Icon,label])=>{const I=Icon as typeof Home;return <button className="btn" style={{display:"flex",alignItems:"center",gap:10,textAlign:"left"}} key={String(label)}><I size={16}/>{String(label)}</button>})}</div></article>
        </section>
      </main>
    </div>

    <nav className="mobile-nav">{[[Home,"Home"],[Megaphone,"Campaigns"],[Users,"Contacts"],[Inbox,"Inbox"],[Settings,"Settings"]].map(([Icon,label],i)=>{const I=Icon as typeof Home;return <a className={i===0?"active":""} href="#" key={String(label)}><I size={18}/><span>{String(label)}</span></a>})}</nav>
  </div>;
}
