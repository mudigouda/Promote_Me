import {TeamMember} from './team-member';
export function deactivateMember(m:TeamMember){return {...m,active:false};}
export function changeRole(m:TeamMember,role:TeamMember['role']){return {...m,role};}
