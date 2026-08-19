export function toggleSelection(selected:Set<string>,id:string){const next=new Set(selected);next.has(id)?next.delete(id):next.add(id);return next;}
export function clearSelection(){return new Set<string>();}
