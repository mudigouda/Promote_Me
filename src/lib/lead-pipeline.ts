export const stages=["NEW","CONTACTED","QUALIFIED","PROPOSAL","NEGOTIATION","WON","LOST"] as const;
export type LeadStage=typeof stages[number];
export function stageIndex(stage:LeadStage){return stages.indexOf(stage);}
