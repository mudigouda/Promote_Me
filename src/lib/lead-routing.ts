export type Agent={id:string;active:boolean;capacity:number;openLeads:number};
export function routeLead(agents:Agent[]){return agents.filter(a=>a.active&&a.openLeads<a.capacity).sort((a,b)=>(a.openLeads/a.capacity)-(b.openLeads/b.capacity))[0]||null;}
