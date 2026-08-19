import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
const idFor=(req:NextRequest)=>req.nextUrl.searchParams.get("businessId")||process.env.DEFAULT_BUSINESS_ID;
export async function GET(req:NextRequest){const id=idFor(req);if(!id)return NextResponse.json({error:"businessId is required"},{status:400});const rows=await prisma.activity.findMany({where:{businessId:id},include:{contact:true,deal:true},orderBy:{createdAt:"desc"},take:100});return NextResponse.json(rows)}
export async function POST(req:NextRequest){const b=await req.json();const id=b.businessId||process.env.DEFAULT_BUSINESS_ID;if(!id||!b.subject||!b.type)return NextResponse.json({error:"businessId, type and subject are required"},{status:400});const row=await prisma.activity.create({data:{businessId:id,type:b.type,subject:b.subject,body:b.body,contactId:b.contactId,dealId:b.dealId,dueAt:b.dueAt?new Date(b.dueAt):undefined}});return NextResponse.json(row,{status:201})}
