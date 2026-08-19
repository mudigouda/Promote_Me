import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
const idFor=(req:NextRequest)=>req.nextUrl.searchParams.get("businessId")||process.env.DEFAULT_BUSINESS_ID;
export async function GET(req:NextRequest){const id=idFor(req);if(!id)return NextResponse.json({error:"businessId is required"},{status:400});const rows=await prisma.deal.findMany({where:{businessId:id},include:{contact:true,company:true},orderBy:{updatedAt:"desc"}});return NextResponse.json(rows)}
export async function POST(req:NextRequest){const b=await req.json();const id=b.businessId||process.env.DEFAULT_BUSINESS_ID;if(!id||!b.name)return NextResponse.json({error:"businessId and name are required"},{status:400});const row=await prisma.deal.create({data:{businessId:id,name:b.name,value:Number(b.value||0),currency:b.currency||"INR",stage:b.stage||"NEW",probability:Number(b.probability||10),contactId:b.contactId,companyId:b.companyId}});return NextResponse.json(row,{status:201})}
