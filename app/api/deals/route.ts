import { NextResponse } from "next/server";
import { prisma } from "../../../src/lib/prisma";
import { currentMembership } from "../../../src/lib/tenant";

export async function GET(){const c=await currentMembership();if(!c)return NextResponse.json({error:"Unauthorized"},{status:401});return NextResponse.json(await prisma.deal.findMany({where:{businessId:c.businessId},orderBy:{updatedAt:"desc"}}));}
export async function POST(request:Request){const c=await currentMembership();if(!c)return NextResponse.json({error:"Unauthorized"},{status:401});const f=await request.formData();const name=String(f.get("name")||"").trim();if(!name)return NextResponse.json({error:"Deal name is required"},{status:400});const value=Math.max(0,Number(f.get("value")||0));const probability=Math.max(0,Math.min(100,Number(f.get("probability")||10)));const deal=await prisma.deal.create({data:{businessId:c.businessId,name,value,probability,stage:"NEW",contactId:String(f.get("contactId")||"")||null,companyId:String(f.get("companyId")||"")||null,ownerMembershipId:c.membership.id}});return NextResponse.json(deal,{status:201});}
