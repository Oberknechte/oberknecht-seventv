import { userEntry } from "./seventv";

export type activityChangeApproveEntry = {
  n: { listed: boolean };
  o: { listed: boolean };
  p: number;
};

export type activityChangeSetTagEntry = {
  n: string[];
  o: string[];
  p: number;
};

export type activityChangeEntry = {
  format: 2;
  key: "versions";
  value: {};
  array_value: {
    added: [activityChangeApproveEntry, activityChangeSetTagEntry];
    updated: [];
    removed: [];
    __typename: "AuditLogChangeArray";
  };
  __typename: "AuditLogChange";
};

export type activityEntry = {
  id: string;
  kind: number;
  created_at: string;
  target_id: string;
  target_kind: number;
  actor: userEntry;
  changes: activityChangeEntry[];
  __typename: "AuditLog";
};

export type getEmoteActivityResponse = {
  data: {
    emote: {
      id: string;
      activity: activityEntry[];
      __typename: "Emote";
    };
  };
};
