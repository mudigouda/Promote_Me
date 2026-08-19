export type CampaignRun={id:string;status:"DRAFT"|"SCHEDULED"|"RUNNING"|"PAUSED"|"COMPLETED"|"FAILED"};
export function canPause(status:CampaignRun["status"]){return status==="RUNNING"||status==="SCHEDULED";}
export function canResume(status:CampaignRun["status"]){return status==="PAUSED";}
