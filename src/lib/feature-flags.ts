export type FeatureFlags=Record<string,boolean>;
const defaults:FeatureFlags={campaignBuilder:true,contact360:true,inbox:true,analytics:true,calling:true,aiAssistant:true,businessFinder:true,documents:true};
export function featureEnabled(flags:FeatureFlags|undefined,name:string){return (flags||defaults)[name]===true;}
