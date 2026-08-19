import {DealRecord} from "./deal-record";
export function closeDeal(row:DealRecord,won=true){return {...row,stage:won?"WON":"LOST",probability:won?1:0,updatedAt:new Date()};}
