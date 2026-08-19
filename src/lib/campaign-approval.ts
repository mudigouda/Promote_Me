export type Approval={campaignId:string;status:"PENDING"|"APPROVED"|"REJECTED";reviewerId?:string;reviewedAt?:Date;reason?:string};
export function approveCampaign(campaignId:string,reviewerId:string):Approval{return {campaignId,status:"APPROVED",reviewerId,reviewedAt:new Date()};}
export function rejectCampaign(campaignId:string,reviewerId:string,reason:string):Approval{return {campaignId,status:"REJECTED",reviewerId,reviewedAt:new Date(),reason};}
