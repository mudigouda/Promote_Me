export type SegmentRule={field:string;operator:"equals"|"contains"|"exists";value?:string};
export function matchesSegment(item:Record<string,unknown>,rules:SegmentRule[]){return rules.every(r=>r.operator==="exists"?Boolean(item[r.field]):r.operator==="equals"?String(item[r.field]??"")===String(r.value??""):String(item[r.field]??"").toLowerCase().includes(String(r.value??"").toLowerCase()));}
