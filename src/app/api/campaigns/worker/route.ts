import {NextResponse} from "next/server";
import {processQueue} from "@/lib/campaign-worker";
export async function POST(){return NextResponse.json(await processQueue(50));}
