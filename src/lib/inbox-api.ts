import {sortInbox,InboxConversation} from "./inbox";
export function inboxQuery(items:InboxConversation[],status?:InboxConversation["status"]){return sortInbox(status?items.filter(x=>x.status===status):items);}
