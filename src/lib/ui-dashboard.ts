export type DashboardCard={title:string;value:string|number;trend?:number;href?:string};
export const dashboardSections=["Performance","Campaigns","Leads","Inbox","Calls","Revenue","Tasks"];
export function formatTrend(value:number){return `${value>=0?"+":""}${value.toFixed(1)}%`;}
