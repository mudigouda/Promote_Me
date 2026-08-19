export const dealStages=["OPEN","QUALIFIED","PROPOSAL","NEGOTIATION","WON","LOST"] as const;
export type DealStage=typeof dealStages[number];
export function validDealStage(x:string):x is DealStage{return (dealStages as readonly string[]).includes(x);}
