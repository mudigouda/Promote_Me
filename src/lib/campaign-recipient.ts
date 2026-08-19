export type CampaignRecipient={contactId:string;channel:string;status:"PENDING"|"QUEUED"|"SENT"|"FAILED"|"SUPPRESSED"};
export function queueRecipient(contactId:string,channel:string):CampaignRecipient{return {contactId,channel,status:"PENDING"};}
