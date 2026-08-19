const seen=new Set<string>();
export function webhookAlreadyProcessed(id:string){return seen.has(id);}
export function markWebhookProcessed(id:string){seen.add(id);}
