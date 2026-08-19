export type AuthContext={userId:string;businessId:string;roles:string[]};
export function requireRole(ctx:AuthContext,roles:string[]){if(!roles.some(r=>ctx.roles.includes(r)))throw new Error("FORBIDDEN");return ctx;}
