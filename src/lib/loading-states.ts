export type LoadingState="IDLE"|"LOADING"|"SUCCESS"|"ERROR";
export function isLoading(state:LoadingState){return state==="LOADING";}
