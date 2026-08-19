export type TestSend={campaignId:string;recipient:string;channel:string;at:Date};
export function createTestSend(campaignId:string,recipient:string,channel:string):TestSend{return {campaignId,recipient,channel,at:new Date()};}
