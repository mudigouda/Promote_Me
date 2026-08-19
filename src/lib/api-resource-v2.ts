export const resources=["contacts","leads","deals","tasks","campaigns","documents"] as const;
export function validResource(x:string){return (resources as readonly string[]).includes(x);}
