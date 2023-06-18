import { searchEmotesVariablesFilter, searchEmotesVariablesSort } from "../types/operations/searchEmotes";
export declare function searchEmotes(sym: string, query: string, limit: number | undefined, page: number | undefined, sort?: searchEmotesVariablesSort | undefined, filter?: searchEmotesVariablesFilter | undefined): Promise<unknown>;
