export const mobileQuickActions=["ADD_CONTACT","CREATE_CAMPAIGN","OPEN_INBOX","CALL_LEAD","FIND_BUSINESS"] as const;
export function isMobileQuickAction(value:string){return (mobileQuickActions as readonly string[]).includes(value);}
