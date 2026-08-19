import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const businessId=req.nextUrl.searchParams.get("businessId")||process.env.DEFAULT_BUSINESS_ID;
  if(!businessId)return NextResponse.json({error:"businessId is required"},{status:400});
  const conversations=await prisma.conversation.findMany({where:{businessId},include:{contact:true},orderBy:{updatedAt:"desc"}});
  return NextResponse.json({conversations});
}

export async function POST(req: NextRequest) {
  const b=await req.json(); const businessId=b.businessId||process.env.DEFAULT_BUSINESS_ID;
  if(!businessId||!b.channel)return NextResponse.json({error:"businessId and channel are required"},{status:400});
  let contact=b.contactId?await prisma.contact.findUnique({where:{id:b.contactId}}):null;
  if(!contact&&(b.phone||b.email)) contact=await prisma.contact.findFirst({where:{businessId,OR:[b.phone?{phone:b.phone}:undefined,b.email?{email:b.email}:undefined].filter(Boolean) as any}});
  const conversation=await prisma.conversation.create({data:{businessId,contactId:contact?.id,channel:b.channel,externalId:b.externalId,status:"open"}});
  if(contact)await prisma.activity.create({data:{businessId,contactId:contact.id,type:b.channel.toUpperCase()==="WHATSAPP"?"WHATSAPP":"NOTE",subject:"New inbound conversation",body:b.preview||"Inbound message received"}});
  return NextResponse.json({conversation,contact},{status:201});
}
