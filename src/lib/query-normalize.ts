export function normalizeQuery(q:Record<string,unknown>){return Object.fromEntries(Object.entries(q).map(([k,v])=>[k,typeof v==="string"?v.trim():v]));}
