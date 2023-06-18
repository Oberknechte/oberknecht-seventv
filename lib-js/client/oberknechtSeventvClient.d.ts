import { searchEmotesVariablesFilter, searchEmotesVariablesSort } from "../types/operations/searchEmotes";
import { seventvClientOptions } from "../types/seventvclient.options";
export declare class oberknechtSeventvClient {
    #private;
    get symbol(): string;
    constructor(options: seventvClientOptions);
    getEmoteSets: (query: string) => Promise<unknown>;
    searchEmotes: (query: string, limit: number | undefined, page: number | undefined, sort: searchEmotesVariablesSort, filter: searchEmotesVariablesFilter) => Promise<unknown>;
    getUserByTwitchName: (query: string) => Promise<unknown>;
    getAppStates: () => Promise<import("../types/operations/getAppStates").getAppStatesResponse>;
}
