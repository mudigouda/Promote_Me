import {Notification} from './notification';
export function unread(items:Notification[],userId:string){return items.filter(x=>x.userId===userId&&!x.read);}
