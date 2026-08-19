export type Role="OWNER"|"ADMIN"|"MANAGER"|"AGENT"|"VIEWER";
const matrix:Record<Role,string[]>={OWNER:["*"],ADMIN:["crm:*","campaigns:*","inbox:*","calls:*","settings:read","settings:write","team:*"],MANAGER:["crm:*","campaigns:*","inbox:*","calls:*"],AGENT:["crm:read","crm:write","inbox:*","calls:*"],VIEWER:["crm:read"]};
export function can(role:Role,permission:string){const p=matrix[role]||[];return p.includes("*")||p.includes(permission)||p.some(x=>x.endsWith(":*")&&permission.startsWith(x.slice(0,-1)));}
export function permissions(role:Role){return matrix[role]||[];}
