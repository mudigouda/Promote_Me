export const contactActions=["MESSAGE","EMAIL","CALL","ADD_NOTE","ADD_TASK","ADD_TO_CAMPAIGN","VIEW_DOCUMENTS"] as const;
export type ContactAction=typeof contactActions[number];
export function isContactAction(value:string):value is ContactAction{return (contactActions as readonly string[]).includes(value);}
