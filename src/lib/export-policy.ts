export type ExportPolicy={allowedRoles:string[];fields:string[];maxRows:number};
export function canExport(role:string,policy:ExportPolicy){return policy.allowedRoles.includes(role);}
