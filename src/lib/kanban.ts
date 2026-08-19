export type KanbanItem={id:string;stage:string;position:number};
export function moveItem(items:KanbanItem[],id:string,stage:string,position:number){return items.map(x=>x.id===id?{...x,stage,position}:x);}
