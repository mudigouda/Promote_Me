import {TeamMember} from "./team-members";
export function searchMembers(rows:TeamMember[],query:string){const q=query.toLowerCase().trim();return !q?rows:rows.filter(x=>x.email.toLowerCase().includes(q)||x.role.toLowerCase().includes(q));}
