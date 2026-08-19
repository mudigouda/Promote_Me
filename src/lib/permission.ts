import {TeamMember} from "./team-member";
const rank={VIEWER:1,AGENT:2,ADMIN:3,OWNER:4};
export function canManage(actor:TeamMember,targetRole:TeamMember["role"]){return actor.active&&rank[actor.role]>=rank[targetRole];}
