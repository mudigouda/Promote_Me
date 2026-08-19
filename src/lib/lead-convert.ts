import {LeadRecord} from "./lead-record";
export function markLeadWon(row:LeadRecord){return {...row,stage:"WON",score:100,updatedAt:new Date()};}
