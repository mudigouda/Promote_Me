import {TeamMember} from "./team-members";
export function changeRole(member:TeamMember,role:TeamMember["role"]){return {...member,role};}
