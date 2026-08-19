export type CampaignSchedule={scheduledAt:Date;timezone:string};
export function validSchedule(s:CampaignSchedule,now=new Date()){return s.scheduledAt>now&&Boolean(s.timezone);}
