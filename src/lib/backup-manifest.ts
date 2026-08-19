export type BackupManifest={createdAt:Date;version:string;resources:string[]};
export function createBackupManifest(version:string,resources:string[]){return {createdAt:new Date(),version,resources};}
