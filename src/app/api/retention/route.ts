import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
export async function GET(req:NextRequest){const businessId=req.nextUrl.searchParams.get("businessId")||process.env.DEFAULT_BUSINESS_ID;if(!businessId)return NextResponse.json({error:"businessId is required"},{status:400});const customers=await prisma.deal.findMany({where:{businessId,stage:"WON"},include:{contact:true},orderBy:{updatedAt:"desc"}});return NextResponse.json({customers:customers.map(d=>({dealId:d.id,contact:d.contact,nextAction:d.nextActivityAt||"follow-up",value:d.value}))});}
