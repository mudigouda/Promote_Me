import {LeadStage,validLeadStage} from "./lead-stage";
export function transitionLead(stage:string,next:string){if(!validLeadStage(stage)||!validLeadStage(next))throw new Error("INVALID_STAGE");return next as LeadStage;}
