import { i } from "..";
import { getAppStates } from "../operations/getAppStates";
import { getEmoteSets } from "../operations/getEmoteSets";
import { getUserByTwitchName } from "../operations/getUserByTwitchName";
import { searchEmotes } from "../operations/searchEmotes";
import {
  searchEmotesVariablesFilter,
  searchEmotesVariablesSort,
} from "../types/operations/searchEmotes";
import { seventvClientOptions } from "../types/seventvclient.options";
let clientSymNum = 0;

export class oberknechtSeventvClient {
  readonly #symbol = `oberknechtSeventvClient-${clientSymNum++}`;
  get symbol() {
    return this.#symbol;
  }

  constructor(options: seventvClientOptions) {
    if (!options) throw Error("client options is undefined");
    if (!options.token) throw Error("no client token specified");

    let _options: seventvClientOptions = options;
    i.clientData[this.symbol] = {
      _options: _options,
    };
  }

  getEmoteSets = (query: string) => {
    return getEmoteSets(this.symbol, query);
  };

  searchEmotes = (
    query: string,
    limit: number | undefined,
    page: number | undefined,
    sort: searchEmotesVariablesSort,
    filter: searchEmotesVariablesFilter
  ) => {
    return searchEmotes(this.symbol, query, limit, page, sort, filter);
  };

  getUserByTwitchName = (query: string) => {
    return getUserByTwitchName(this.symbol, query);
  };

  getAppStates = () => {
    return getAppStates(this.symbol);
  };
}
