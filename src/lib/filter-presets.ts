export type FilterPreset={id:string;name:string;filters:Record<string,unknown>};
const presets:FilterPreset[]=[];
export function savePreset(p:FilterPreset){presets.push(p);return p;}
export function listPresets(){return [...presets];}
