import {TeamMember} from "./team-members";
export function deactivateMember(member:TeamMember){return {...member,active:false};}
