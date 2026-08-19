export function requiredText(value:unknown,field:string){if(!String(value||"").trim())throw new Error(`${field.toUpperCase()}_REQUIRED`);return String(value).trim();}
