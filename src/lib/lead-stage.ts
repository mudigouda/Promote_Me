export const leadStages=["NEW","CONTACTED","QUALIFIED","PROPOSAL","NEGOTIATION","WON","LOST"] as const;
export type LeadStage=typeof leadStages[number];
export function validLeadStage(stage:string):stage is LeadStage{return (leadStages as readonly string[]).includes(stage);}
