import { NextResponse } from "next/server";
import { prisma } from "../../../src/lib/prisma";
import { currentMembership } from "../../../src/lib/tenant";

export async function GET(){const c=await currentMembership();if(!c)return NextResponse.json({error:"Unauthorized"},{status:401});return NextResponse.json(await prisma.document.findMany({where:{businessId:c.businessId},orderBy:{updatedAt:"desc"}}));}
export async function POST(request:Request){const c=await currentMembership();if(!c)return NextResponse.json({error:"Unauthorized"},{status:401});const f=await request.formData();const name=String(f.get("name")||"").trim();if(!name)return NextResponse.json({error:"Document name is required"},{status:400});const doc=await prisma.document.create({data:{businessId:c.businessId,name,description:String(f.get("description")||"")||null,category:String(f.get("category")||"general"),mimeType:String(f.get("mimeType")||"")||null,sizeBytes:f.get("sizeBytes")?Number(f.get("sizeBytes")):null,storageKey:String(f.get("storageKey")||"")||null,url:String(f.get("url")||"")||null,createdByUserId:c.user.id}});return NextResponse.json(doc,{status:201});}
