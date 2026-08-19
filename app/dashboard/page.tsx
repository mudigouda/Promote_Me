import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { COOKIE_NAME, getSessionUser } from '../../src/lib/auth';

const groups = [
  { title: 'Engage', items: [['/inbox','Inbox','Customer conversations'],['/contacts','Contacts','Customers & leads'],['/campaigns','Campaigns','Broadcasts and campaigns'],['/templates','Templates','Reusable messages'],['/segments','Audience','Target customers']] },
  { title: 'Automate', items: [['/automations','Automation','Workflows and triggers'],['/chatbots','AI Chatbot','Automated journeys'],['/forms','Lead Forms','Capture leads']] },
  { title: 'Measure', items: [['/analytics','Reports','Performance and insights'],['/import-export','Import & Export','Move your business data']] },
  { title: 'Manage', items: [['/team','Team','Users and permissions'],['/channels','Channels','Connected accounts'],['/settings','Settings','Business configuration']] }
];

export default async function Dashboard() {
  const u = await getSessionUser((await cookies()).get(COOKIE_NAME)?.value);
  const m = u?.memberships[0];
  if (!u || !m) redirect('/login');
  return <main className="app"><div className="shell">
    <header className="pageHead"><div><span className="pill">{m.role}</span><h1>Good to see you{u.name ? `, ${u.name}` : ''}.</h1><p>{m.business.name} · Marketing command center</p></div><a className="primary" href="/ai">Ask AI</a></header>
    {groups.map(g => <section key={g.title} style={{marginBottom:28}}><h2 style={{fontSize:16,margin:'0 0 12px'}}>{g.title}</h2><div className="grid">{g.items.map(([href,label,desc]) => <a className="card" key={href} href={href} style={{textDecoration:'none'}}><h3>{label}</h3><p>{desc}</p></a>)}</div></section>)}
  </div></main>;
}
