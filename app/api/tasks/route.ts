import { NextResponse } from "next/server";
import { prisma } from "../../../src/lib/prisma";
import { currentMembership } from "../../../src/lib/tenant";

export async function GET(){const c=await currentMembership();if(!c)return NextResponse.json({error:"Unauthorized"},{status:401});return NextResponse.json(await prisma.activity.findMany({where:{businessId:c.businessId,type:"TASK"},orderBy:{createdAt:"desc"}}));}
export async function POST(request:Request){const c=await currentMembership();if(!c)return NextResponse.json({error:"Unauthorized"},{status:401});const f=await request.formData();const subject=String(f.get("title")||f.get("subject")||"").trim();if(!subject)return NextResponse.json({error:"Task title is required"},{status:400});const task=await prisma.activity.create({data:{businessId:c.businessId,type:"TASK",subject,body:String(f.get("body")||"")||null,contactId:String(f.get("contactId")||"")||null,dealId:String(f.get("dealId")||"")||null,ownerMembershipId:c.membership.id,dueAt:f.get("dueAt")?new Date(String(f.get("dueAt"))):null}});return NextResponse.json(task,{status:201});}
