import { activeEmote } from "./seventv";

export type changeEmoteInSetResponse = {
  data: {
    emoteSet: {
      id: string;
      emotes: activeEmote[];
      __typename: "EmoteSetOps";
    };
  };
};
