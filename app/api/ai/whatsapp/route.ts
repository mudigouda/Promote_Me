import {NextResponse} from 'next/server';
import {prisma} from '../../../../src/lib/prisma';
import {currentMembership,canManageCampaigns} from '../../../../src/lib/tenant';
import {sendWhatsAppText} from '../../../../src/lib/whatsapp';

export async function POST(request:Request){
  const c=await currentMembership();
  if(!c||!canManageCampaigns(c.membership.role))return NextResponse.json({error:'Not authorized'},{status:403});
  const body=await request.json();
  const to=String(body.to||'').replace(/\D/g,'');
  const question=String(body.message||'').trim();
  if(!to||!question)return NextResponse.json({error:'to and message are required'},{status:400});
  const [contacts,campaigns,conversations]=await Promise.all([
    prisma.contact.count({where:{businessId:c.businessId}}),
    prisma.campaign.count({where:{businessId:c.businessId}}),
    prisma.conversation.count({where:{businessId:c.businessId}})
  ]);
  const q=question.toLowerCase();
  let answer=`Your business has ${contacts} contacts, ${campaigns} campaigns and ${conversations} conversations.`;
  if(q.includes('contact')||q.includes('lead'))answer=`You currently have ${contacts} contacts or leads.`;
  else if(q.includes('campaign'))answer=`You currently have ${campaigns} campaigns.`;
  else if(q.includes('conversation')||q.includes('inbox'))answer=`You currently have ${conversations} conversations.`;
  try{return NextResponse.json({ok:true,answer,result:await sendWhatsAppText(c.businessId,to,answer)});}
  catch(error){return NextResponse.json({ok:false,error:error instanceof Error?error.message:'WhatsApp send failed'},{status:502});}
}
