import { NextRequest, NextResponse } from "next/server";
const roles={owner:["all"],admin:["crm","campaigns","inbox","settings","analytics"],manager:["crm","campaigns","inbox","analytics"],agent:["crm","inbox","calls"],viewer:["crm","analytics"]};
export async function GET(){return NextResponse.json({roles,channels:["WHATSAPP","EMAIL","SMS","META","X","CALLING"],settings:{requireCampaignApproval:true,excludeOptedOut:true}});}
export async function POST(req:NextRequest){const b=await req.json();if(!b.action)return NextResponse.json({error:"action is required"},{status:400});if(b.action==="role-permissions")return NextResponse.json({role:b.role,permissions:(roles as any)[b.role]||[]});return NextResponse.json({ok:true,action:b.action});}
