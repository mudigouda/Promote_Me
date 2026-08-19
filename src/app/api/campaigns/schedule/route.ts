import {NextRequest,NextResponse} from "next/server";
import {scheduleCampaign} from "@/lib/campaign-scheduler";
export async function POST(req:NextRequest){const b=await req.json();if(!b.campaignId||!b.runAt)return NextResponse.json({error:"campaignId and runAt are required"},{status:400});const runAt=new Date(b.runAt);if(Number.isNaN(runAt.getTime())||runAt<=new Date())return NextResponse.json({error:"runAt must be a valid future date"},{status:400});return NextResponse.json({schedule:scheduleCampaign(b.campaignId,runAt,b.timezone||"UTC")},{status:201});}
