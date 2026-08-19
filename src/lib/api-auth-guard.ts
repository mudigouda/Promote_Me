import {AuthContext,requireRole} from "./api-auth";
export function authorize(ctx:AuthContext,roles:string[]){return requireRole(ctx,roles);}
