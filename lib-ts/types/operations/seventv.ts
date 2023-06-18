export const versionEntryStates = [
  "LISTED",
  "PERSONAL",
  "NO_PERSONAL",
] as const;

export const hostFileFormats = ["WEBP", "AVIV"] as const;

export const userConnectionPlatforms = ["TWITCH", "DISCORD"] as const;

export type versionEntryStatesType = typeof versionEntryStates[number];
export type hostFileFormatsType = typeof hostFileFormats[number];
export type userConnectionPlatformsType = typeof userConnectionPlatforms[number];

export type hostFileEntry = {
  name: string;
  format: hostFileFormatsType;
  width: number;
  height: number;
  size: number;
  __typename: "Image";
};

export type userConnectionEntry = {
  id: string;
  display_name: string;
  emote_capacity: number;
  platform: userConnectionPlatformsType;
  __typename: "UserConnectionPartial";
};

export type versionEntry = {
  id: string;
  name: string;
  description: string;
  created_at: string;
  lifecycle: number;
  state: versionEntryStatesType[];
  host: {
    url: string;
    files: hostFileEntry[];
    __typename: "ImageHost";
  };
  __typename: "EmoteVersion";
};

export type userStyleEntry = {
  color: number;
  paint_id: null | string;
  __typename: "UserStyle";
};

export type userEntry = {
  id: string;
  username: string;
  display_name: string;
  avatar_url: string;
  style: userStyleEntry;
  __typename: "UserPartial";
};

export type ownerEntry = {
  id: string;
  username: string;
  display_name: string;
  style: userStyleEntry;
  avatar_url: string;
  roles: string[];
  connections: userConnectionEntry[];
  __typename: "UserPartial";
};

export type emoteActorUserPartial = {
  id: string;
  display_name: string;
  avatar_url: string;
  __typename: "UserPartial";
};

export type emote = {
  id: string;
  created_at: string;
  name: string;
  lifecycle: number;
  state: string[];
  trending: null | boolean;
  tags: string[];
  owner: ownerEntry;
  flags: number;
  host: {
    url: string;
    files: hostFileEntry[];
    __typename: "ImageHost";
  };
  versions: versionEntry[];
  animated: boolean;
  __typename: "Emote";
};

export type emoteSet = {
  id: string;
  name: string;
  flags: number;
  capacity: number;
  origins: string[];
  emotes: emoteSetActiveEmote[];
  owner: ownerEntry;
  __typename: "EmoteSet";
};

export type activeEmote = {
  id: string;
  name: string;
  __typename: "ActiveEmote";
};

export type emoteSetActiveEmote = {
  id: string;
  name: string;
  actor: null | emoteActorUserPartial;
  origin_id: null | string;
  data: {
    id: string;
    name: string;
    flags: number;
    state: versionEntryStatesType;
    lifecycle: number;
    host: {
      url: string;
      files: hostFileEntry[];
      __typename: "ImageHost";
    };
    owner: ownerEntry;
    __typename: "EmotePartial";
  };
  __typename: "ActiveEmote";
};
