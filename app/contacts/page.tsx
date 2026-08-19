import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { COOKIE_NAME, getSessionUser } from "../../src/lib/auth";
import { prisma } from "../../src/lib/prisma";

export default async function ContactsPage(){
 const user=await getSessionUser((await cookies()).get(COOKIE_NAME)?.value); const m=user?.memberships[0]; if(!user||!m) redirect('/login');
 const contacts=await prisma.contact.findMany({where:{businessId:m.businessId},orderBy:{createdAt:'desc'}});
 return <main style={{maxWidth:1000,margin:'40px auto',padding:24,fontFamily:'system-ui'}}><p><a href="/dashboard">← Dashboard</a></p><h1>Contacts</h1><form action="/api/contacts" method="post" style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))',gap:10}}>{['firstName','lastName','company','phone','email','city','region','country'].map(x=><input key={x} name={x} placeholder={x}/>) }<button type="submit">Add contact</button></form><hr/><div>{contacts.map(c=><article key={c.id} style={{padding:14,borderBottom:'1px solid #ddd'}}><strong>{[c.firstName,c.lastName].filter(Boolean).join(' ')||'Unnamed'}</strong> · {c.company||'—'}<br/>{c.phone||''} {c.email||''}<br/>{[c.city,c.region,c.country].filter(Boolean).join(', ')}</article>)}</div></main>
}
