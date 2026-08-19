export type ContactRecord={id:string;name:string;email?:string;phone?:string;company?:string;ownerId?:string;source?:string;createdAt:Date;updatedAt:Date};
export function normalizeContact(input:Partial<ContactRecord>):Partial<ContactRecord>{return {...input,name:String(input.name||"").trim(),email:input.email?.trim().toLowerCase(),phone:input.phone?.trim()};}
