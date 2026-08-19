export function addTag(tags:string[],tag:string){const value=tag.trim();return value&&!tags.includes(value)?[...tags,value]:tags;}
export function removeTag(tags:string[],tag:string){return tags.filter(x=>x!==tag);}
