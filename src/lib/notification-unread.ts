import {NotificationEvent} from "./notification-event";
export function unreadCount(rows:NotificationEvent[],userId:string){return rows.filter(x=>x.userId===userId&&!x.read).length;}
