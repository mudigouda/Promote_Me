export const dealStages=["QUALIFICATION","PROPOSAL","NEGOTIATION","CLOSED_WON","CLOSED_LOST"] as const;
export type DealStage=typeof dealStages[number];
export function isClosed(stage:DealStage){return stage==="CLOSED_WON"||stage==="CLOSED_LOST";}
