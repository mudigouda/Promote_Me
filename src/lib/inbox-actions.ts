export const inboxActions=["REPLY","ASSIGN","MARK_READ","SNOOZE","CLOSE","HANDOFF_TO_AI","HANDOFF_TO_HUMAN"] as const;
export type InboxAction=typeof inboxActions[number];
