import { NextRequest } from "next/server";
import { getSessionUser } from "./auth";
import { can, Role } from "./permissions";
export async function requirePermission(req:NextRequest,permission:string){const raw=req.cookies.get("promote_me_session")?.value;const user=await getSessionUser(raw);if(!user)return {ok:false,status:401,error:"Authentication required"} as const;const role=((user as any).role||"VIEWER") as Role;if(!can(role,permission))return {ok:false,status:403,error:"Permission denied"} as const;return {ok:true,user} as const;}
