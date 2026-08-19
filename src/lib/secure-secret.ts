export function maskSecret(value?:string|null){if(!value)return "";if(value.length<=8)return "••••••••";return `${value.slice(0,4)}••••${value.slice(-4)}`;}
export function hasSecret(value?:string|null){return Boolean(value&&value.trim());}
