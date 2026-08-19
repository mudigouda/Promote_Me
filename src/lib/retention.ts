export type RetentionRule={resource:string;days:number};
export function expiresAt(createdAt:Date,rule:RetentionRule){return new Date(createdAt.getTime()+rule.days*86400000);}
export function isExpired(createdAt:Date,rule:RetentionRule,now=new Date()){return now>=expiresAt(createdAt,rule);}
