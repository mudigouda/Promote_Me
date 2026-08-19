import { NextRequest, NextResponse } from "next/server";
import { requirePermission } from "@/lib/permission-guard";
export async function GET(req:NextRequest){const auth=await requirePermission(req,"settings:read");if(!auth.ok)return NextResponse.json({error:auth.error},{status:auth.status});return NextResponse.json({ok:true,userId:auth.user.id,security:"enforced"});}
