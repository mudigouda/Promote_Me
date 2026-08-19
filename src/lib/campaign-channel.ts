export type CampaignChannel="EMAIL"|"SMS"|"WHATSAPP"|"SOCIAL";
export const campaignChannels:CampaignChannel[]=["EMAIL","SMS","WHATSAPP","SOCIAL"];
export function supportsChannel(channel:string){return campaignChannels.includes(channel as CampaignChannel);}
