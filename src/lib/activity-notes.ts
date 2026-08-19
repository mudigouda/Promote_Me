export type ActivityNote={id:string;contactId:string;authorId:string;body:string;createdAt:Date;updatedAt?:Date};
export function updateNote(note:ActivityNote,body:string){return {...note,body,updatedAt:new Date()};}
