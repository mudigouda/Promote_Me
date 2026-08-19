import {NotificationEvent} from "./notification-event";
export function markRead(n:NotificationEvent){return {...n,read:true};}
