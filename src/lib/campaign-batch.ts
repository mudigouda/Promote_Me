import {CampaignRecipient} from "./campaign-recipient";
export function recipientBatches(items:CampaignRecipient[],size=100){const n=Math.max(1,Math.min(1000,size));const out:CampaignRecipient[][]=[];for(let i=0;i<items.length;i+=n)out.push(items.slice(i,i+n));return out;}
