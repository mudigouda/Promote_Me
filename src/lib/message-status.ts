export type MessageStatus="QUEUED"|"SENT"|"DELIVERED"|"READ"|"REPLIED"|"FAILED";
export const messageStatusOrder:MessageStatus[]=["QUEUED","SENT","DELIVERED","READ","REPLIED","FAILED"];
export function isFinalStatus(s:MessageStatus){return s==="REPLIED"||s==="FAILED";}
