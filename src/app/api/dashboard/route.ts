import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
export async function GET(req:NextRequest){
 const id=req.nextUrl.searchParams.get("businessId")||process.env.DEFAULT_BUSINESS_ID;
 if(!id)return NextResponse.json({error:"businessId is required"},{status:400});
 const [contacts,companies,deals,campaigns,activities]=await Promise.all([
  prisma.contact.count({where:{businessId:id}}), prisma.company.count({where:{businessId:id}}),
  prisma.deal.findMany({where:{businessId:id,stage:{not:"LOST"}},select:{value:true,stage:true}}),
  prisma.campaign.count({where:{businessId:id}}), prisma.activity.findMany({where:{businessId:id},orderBy:{createdAt:"desc"},take:8,include:{contact:true}})
 ]);
 return NextResponse.json({contacts,companies,campaigns,openDeals:deals.length,pipelineValue:deals.reduce((s,d)=>s+d.value,0),activities});
}
