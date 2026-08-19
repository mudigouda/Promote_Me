export type Session={userId:string;businessId:string;expiresAt:Date};
export function sessionValid(session:Session,now=new Date()){return session.expiresAt>now;}
