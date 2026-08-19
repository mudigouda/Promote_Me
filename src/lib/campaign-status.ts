export const statuses=["DRAFT","APPROVAL","APPROVED","SCHEDULED","QUEUED","SENDING","PAUSED","COMPLETED","FAILED"] as const;
export type CampaignStatus=typeof statuses[number];
const transitions:Record<CampaignStatus,CampaignStatus[]>={DRAFT:["APPROVAL"],APPROVAL:["APPROVED","DRAFT"],APPROVED:["SCHEDULED","QUEUED"],SCHEDULED:["QUEUED","PAUSED"],QUEUED:["SENDING","PAUSED"],SENDING:["COMPLETED","FAILED","PAUSED"],PAUSED:["SCHEDULED","QUEUED"],COMPLETED:[],FAILED:["QUEUED"],};
export function canTransition(from:CampaignStatus,to:CampaignStatus){return transitions[from]?.includes(to)??false;}
