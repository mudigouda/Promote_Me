import { NextRequest, NextResponse } from "next/server";
const channels=["WHATSAPP","EMAIL","SMS","META","X","CALLING"];
export async function GET(req:NextRequest){const role=req.nextUrl.searchParams.get("role")||"VIEWER";const map:any={OWNER:channels,ADMIN:channels,MANAGER:["WHATSAPP","EMAIL","SMS","CALLING"],AGENT:["WHATSAPP","EMAIL","CALLING"],VIEWER:[]};return NextResponse.json({role,allowedChannels:map[role]||[]});}
export async function POST(req:NextRequest){const b=await req.json();if(!b.userId||!b.channel)return NextResponse.json({error:"userId and channel are required"},{status:400});if(!channels.includes(b.channel))return NextResponse.json({error:"Invalid channel"},{status:400});return NextResponse.json({userId:b.userId,channel:b.channel,allowed:Boolean(b.allowed),saved:true});}
