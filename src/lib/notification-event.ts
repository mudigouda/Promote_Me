export type NotificationEvent={id:string;userId:string;type:string;title:string;message:string;read:boolean;createdAt:Date};
export function notification(userId:string,type:string,title:string,message:string):NotificationEvent{return {id:crypto.randomUUID(),userId,type,title,message,read:false,createdAt:new Date()};}
