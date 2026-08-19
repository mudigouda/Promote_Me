export type ConversationAssignment={conversationId:string;assigneeId?:string;status:"UNASSIGNED"|"ASSIGNED"};
export function assignConversation(id:string,userId:string):ConversationAssignment{return {conversationId:id,assigneeId:userId,status:"ASSIGNED"};}
