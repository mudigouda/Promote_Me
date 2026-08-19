export type DocumentAccess={role:string;canView:boolean;canUpload:boolean;canDelete:boolean};
export function documentAccess(role:string):DocumentAccess{const admin=["ADMIN","OWNER"].includes(role);return {role,canView:true,canUpload:true,canDelete:admin};}
