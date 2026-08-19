export type FollowUpRule={event:string;delayMinutes:number;channel:"CALL"|"EMAIL"|"SMS"|"WHATSAPP"|"TASK"};
export function dueFollowUps(rules:FollowUpRule[],event:string){return rules.filter(r=>r.event===event);}
