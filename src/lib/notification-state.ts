import {Notification} from "./notification";
export function markRead(n:Notification){return {...n,read:true};}
export function unreadCount(rows:Notification[],userId:string){return rows.filter(x=>x.userId===userId&&!x.read).length;}
