import { userEntry } from "./seventv";
export type getEmoteChannelsResponse = {
    data: {
        emote: {
            id: string;
            channels: {
                total: number;
                items: userEntry[];
                __typename: "UserSearchResult";
            };
            __typename: "Emote";
        };
    };
};
