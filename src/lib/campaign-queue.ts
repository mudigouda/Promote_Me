export type QueueItem={campaignId:string;contactId:string;channel:string;to:string;body:string;attempts:number;status:"queued"|"sending"|"sent"|"failed"};
const queue:QueueItem[]=[];
export function enqueue(item:Omit<QueueItem,"attempts"|"status">){const entry={...item,attempts:0,status:"queued" as const};queue.push(entry);return entry;}
export function pending(){return queue.filter(x=>x.status==="queued"||x.status==="failed");}
export function markSending(item:QueueItem){item.status="sending";item.attempts+=1;return item;}
export function markSent(item:QueueItem){item.status="sent";return item;}
export function markFailed(item:QueueItem){item.status="failed";return item;}
