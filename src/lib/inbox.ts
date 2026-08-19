export type InboxConversation={id:string;channel:string;contactId:string;lastMessageAt:Date;unread:number;status:"OPEN"|"PENDING"|"CLOSED"};
export function sortInbox(items:InboxConversation[]){return [...items].sort((a,b)=>b.lastMessageAt.getTime()-a.lastMessageAt.getTime());}
