import {TeamMember} from './team-member';
export function searchTeam(items:TeamMember[],q:string){const s=q.trim().toLowerCase();return !s?items:items.filter(x=>x.name.toLowerCase().includes(s)||x.email.toLowerCase().includes(s));}
