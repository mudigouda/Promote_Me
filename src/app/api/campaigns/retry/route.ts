import {NextRequest,NextResponse} from "next/server";
import {pending} from "@/lib/campaign-queue";
export async function GET(req:NextRequest){const limit=Math.min(Number(req.nextUrl.searchParams.get("limit")||50),500);return NextResponse.json({retryable:pending().filter(x=>x.status==="failed").slice(0,limit)});}
