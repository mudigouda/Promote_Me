export type LeadAssignee={id:string;active:boolean;openLeads:number;capacity:number};
export function assignLead(members:LeadAssignee[]){return members.filter(m=>m.active&&m.openLeads<m.capacity).sort((a,b)=>a.openLeads-b.openLeads)[0]||null;}
