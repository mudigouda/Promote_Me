export function requiredString(value:unknown){return typeof value==="string"&&value.trim().length>0;}
export function validEmail(value:unknown){return typeof value==="string"&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);}
