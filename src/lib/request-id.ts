export function requestId(input?:string){const value=input?.trim();return value||crypto.randomUUID();}
