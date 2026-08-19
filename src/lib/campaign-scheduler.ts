export type Schedule={campaignId:string;runAt:Date;timezone:string};
const schedules:Schedule[]=[];
export function scheduleCampaign(campaignId:string,runAt:Date,timezone="UTC"){const item={campaignId,runAt,timezone};schedules.push(item);return item;}
export function dueCampaigns(now=new Date()){return schedules.filter(x=>x.runAt<=now);}
