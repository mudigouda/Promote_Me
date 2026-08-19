import {BusinessResult} from "./business-finder";
import {dedupeBusinesses} from "./business-finder";
export function importBatch(items:BusinessResult[],batchSize=50){const rows=dedupeBusinesses(items);const size=Math.max(1,Math.min(500,batchSize));const batches:BusinessResult[][]=[];for(let i=0;i<rows.length;i+=size)batches.push(rows.slice(i,i+size));return batches;}
