export const required=(v:unknown)=>String(v??"").trim().length>0;
export const validEmail=(v:unknown)=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v??""));
