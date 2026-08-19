import {NotificationEvent} from "./notification-event";
export function clearNotifications(rows:NotificationEvent[],userId:string){return rows.map(x=>x.userId===userId?{...x,read:true}:x);}
