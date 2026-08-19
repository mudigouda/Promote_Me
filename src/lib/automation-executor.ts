export type AutomationAction={type:"FOLLOW_UP"|"CALL"|"TASK"|"CAMPAIGN";delayMinutes:number;payload:Record<string,unknown>};
export function dueActions(actions:AutomationAction[],now=new Date()){return actions.filter(a=>a.delayMinutes<=0).map(a=>({...a,executeAt:now}));}
