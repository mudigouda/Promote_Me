import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
export async function POST(req:NextRequest){const b=await req.json();const businessId=b.businessId||process.env.DEFAULT_BUSINESS_ID;if(!businessId||!b.contactId)return NextResponse.json({error:"businessId and contactId are required"},{status:400});const contact=await prisma.contact.update({where:{id:b.contactId},data:{optedOutAt:new Date(),consent:false}});return NextResponse.json({contact,suppressed:true});}
