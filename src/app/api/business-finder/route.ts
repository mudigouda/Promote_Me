import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Provider-neutral discovery endpoint. Connect a licensed/public business-data provider here.
// It intentionally does not scrape restricted maps or collect private personal data.
export async function GET(req:NextRequest){
  const p=req.nextUrl.searchParams;
  const businessId=p.get("businessId")||process.env.DEFAULT_BUSINESS_ID;
  if(!businessId)return NextResponse.json({error:"businessId is required"},{status:400});
  const category=p.get("category")||""; const city=p.get("city")||"";
  const saved=await prisma.businessProspect.findMany({where:{businessId,...(category?{category:{contains:category,mode:"insensitive"}}:{}),...(city?{city:{contains:city,mode:"insensitive"}}:{})},orderBy:{collectedAt:"desc"},take:100});
  return NextResponse.json({source:"local-crm",configuredProvider:Boolean(process.env.BUSINESS_DATA_PROVIDER_URL),results:saved});
}
export async function POST(req:NextRequest){
  const b=await req.json(); const businessId=b.businessId||process.env.DEFAULT_BUSINESS_ID;
  if(!businessId||!b.name||!b.source)return NextResponse.json({error:"businessId, name and source are required"},{status:400});
  const row=await prisma.businessProspect.create({data:{businessId,source:b.source,externalId:b.externalId,name:b.name,category:b.category,address:b.address,city:b.city,region:b.region,country:b.country,postalCode:b.postalCode,lat:b.lat,lng:b.lng,phone:b.phone,website:b.website}});
  return NextResponse.json(row,{status:201});
}
