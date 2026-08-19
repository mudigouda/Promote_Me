export type AssistantIntent="SEARCH_BUSINESS"|"CREATE_CAMPAIGN"|"REPLY_MESSAGE"|"CREATE_TASK"|"CALL_CONTACT"|"SHOW_ANALYTICS"|"UNKNOWN";
export type AssistantResult={intent:AssistantIntent;confidence:number;requiresHuman:boolean};
export function assistantResult(intent:AssistantIntent,confidence:number):AssistantResult{return {intent,confidence,requiresHuman:intent==="UNKNOWN"||confidence<0.6};}
