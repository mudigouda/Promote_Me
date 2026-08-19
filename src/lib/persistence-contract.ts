export type QueueRecord={id:string;campaignId:string;contactId:string;channel:string;to:string;body:string;status:string;attempts:number;nextAttemptAt?:Date};
export interface QueueStore{add(item:QueueRecord):Promise<QueueRecord>;pending(limit:number):Promise<QueueRecord[]>;update(id:string,patch:Partial<QueueRecord>):Promise<QueueRecord>;}
