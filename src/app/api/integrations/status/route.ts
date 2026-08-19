import { NextResponse } from "next/server";
export async function GET(){return NextResponse.json({providers:{whatsapp:Boolean(process.env.WHATSAPP_ACCESS_TOKEN),email:Boolean(process.env.EMAIL_PROVIDER_API_KEY),sms:Boolean(process.env.SMS_PROVIDER_API_KEY),meta:Boolean(process.env.META_ACCESS_TOKEN),x:Boolean(process.env.X_API_KEY)},mode:"adapter"});}
