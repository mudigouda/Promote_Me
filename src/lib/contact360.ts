export type Contact360={contact:Record<string,unknown>;activities:unknown[];campaigns:unknown[];documents:unknown[];deals:unknown[];calls:unknown[]};
export function buildContact360(data:Omit<Contact360,"contact">&{contact:Record<string,unknown>}):Contact360{return data;}
