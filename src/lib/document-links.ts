import {DocumentLink} from "./document-link";
export function linksForEntity(rows:DocumentLink[],entityType:DocumentLink["entityType"],entityId:string){return rows.filter(x=>x.entityType===entityType&&x.entityId===entityId);}
