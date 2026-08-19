export type AudienceRule={field:string;operator:"equals"|"contains"|"startsWith";value:string};
export function matchesAudience(contact:Record<string,unknown>,rules:AudienceRule[]){return rules.every(r=>{const value=String(contact[r.field]??"").toLowerCase(),target=r.value.toLowerCase();if(r.operator==="equals")return value===target;if(r.operator==="startsWith")return value.startsWith(target);return value.includes(target);});}
export type RetryPolicy={maxAttempts:number;baseDelayMs:number;maxDelayMs:number};
export function retryDelay(attempt:number,p:RetryPolicy={maxAttempts:5,baseDelayMs:1000,maxDelayMs:60000}){return Math.min(p.maxDelayMs,p.baseDelayMs*Math.pow(2,Math.max(0,attempt-1)));}
export function idempotencyKey(campaignId:string,contactId:string,channel:string){return `${campaignId}:${contactId}:${channel}`;}
