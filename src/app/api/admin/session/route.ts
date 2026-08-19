import { NextRequest, NextResponse } from "next/server";
import { getSessionUser } from "@/lib/auth";
export async function GET(req:NextRequest){const token=req.cookies.get("promote_me_session")?.value;const user=await getSessionUser(token);if(!user)return NextResponse.json({authenticated:false},{status:401});return NextResponse.json({authenticated:true,user:{id:user.id,name:user.name,email:user.email}});}
