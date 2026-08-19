export type TeamInvite={email:string;role:"ADMIN"|"AGENT"|"VIEWER";expiresAt:Date};
export function inviteValid(invite:TeamInvite,now=new Date()){return invite.expiresAt>now&&invite.email.includes("@");}
