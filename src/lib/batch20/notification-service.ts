import {Notification} from './notification';
export function notify(userId:string,title:string,body:string):Notification{return {id:crypto.randomUUID(),userId,title,body,read:false,createdAt:new Date()};}
