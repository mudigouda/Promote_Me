export type Notification={id:string;userId:string;title:string;message:string;read:boolean;createdAt:Date};
export function notify(userId:string,title:string,message:string):Notification{return {id:crypto.randomUUID(),userId,title,message,read:false,createdAt:new Date()};}
