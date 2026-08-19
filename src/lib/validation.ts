export function requiredStrings(input:Record<string,unknown>,fields:string[]){const errors:string[]=[];for(const f of fields)if(typeof input[f]!=="string"||!String(input[f]).trim())errors.push(`${f} is required`);return errors;}
export function normalizePhone(phone:string){return phone.replace(/[^\d+]/g,"");}
