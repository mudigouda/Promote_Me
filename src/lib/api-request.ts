export function jsonHeaders(){return {"Content-Type":"application/json"};}
export function jsonBody<T>(value:T){return JSON.stringify(value);}
