import { NextResponse } from 'next/server';
import { prisma } from '../../../src/lib/prisma';
import { currentMembership,canManageBusiness } from '../../../src/lib/tenant';

export async function POST(request:Request){
  const c=await currentMembership();
  if(!c||!canManageBusiness(c.membership.role))return NextResponse.json({error:'Not authorized'},{status:403});
  const f=await request.formData();
  const channel=String(f.get('channel')||'').trim().toLowerCase();
  const name=String(f.get('name')||'').trim();
  const externalId=String(f.get('externalId')||'').trim();
  if(!channel||!name)return NextResponse.json({error:'Channel and account name are required.'},{status:400});
  if(channel==='whatsapp'&&!externalId)return NextResponse.json({error:'WhatsApp Phone Number ID is required.'},{status:400});
  await prisma.channelAccount.create({data:{businessId:c.businessId,channel,name,externalId:externalId||null,enabled:true}});
  return NextResponse.redirect(new URL('/channels',request.url));
}
