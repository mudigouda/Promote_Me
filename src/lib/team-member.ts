export type TeamMember={id:string;name:string;email:string;role:"OWNER"|"ADMIN"|"AGENT"|"VIEWER";active:boolean};
export function deactivateMember(m:TeamMember){return {...m,active:false};}
