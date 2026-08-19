export type TeamMember={id:string;email:string;role:"OWNER"|"ADMIN"|"AGENT"|"VIEWER";active:boolean};
export function activeMembers(rows:TeamMember[]){return rows.filter(x=>x.active);}
