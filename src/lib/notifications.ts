export type Notification={id:string;type:"CAMPAIGN"|"LEAD"|"MESSAGE"|"CALL"|"TASK"|"SYSTEM";title:string;read:boolean;createdAt:Date};
export function unreadCount(items:Notification[]){return items.filter(x=>!x.read).length;}
export function markAllRead(items:Notification[]){return items.map(x=>({...x,read:true}));}
