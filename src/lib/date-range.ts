export type DateRange={from?:Date;to?:Date};
export function currentMonth(now=new Date()):DateRange{return {from:new Date(now.getFullYear(),now.getMonth(),1),to:new Date(now.getFullYear(),now.getMonth()+1,0,23,59,59,999)};}
