export type AutomationRule={event:string;delayMinutes:number;action:"FOLLOW_UP"|"CALL"|"TASK"|"CAMPAIGN"};
export function matchingRules(rules:AutomationRule[],event:string){return rules.filter(r=>r.event===event);}
