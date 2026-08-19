export type TeamMember={id:string;active:boolean;capacity:number;assigned:number};
export function pickAvailable(members:TeamMember[]){const available=members.filter(m=>m.active&&m.assigned<m.capacity);return available.sort((a,b)=>(a.assigned/a.capacity)-(b.assigned/b.capacity))[0]||null;}
