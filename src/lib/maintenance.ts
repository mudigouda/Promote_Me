export type MaintenanceJob={name:string;enabled:boolean;intervalMinutes:number};
export const maintenanceJobs:MaintenanceJob[]=[{name:"retry-failed-deliveries",enabled:true,intervalMinutes:5},{name:"expire-retention-data",enabled:true,intervalMinutes:60},{name:"refresh-analytics",enabled:true,intervalMinutes:15}];
