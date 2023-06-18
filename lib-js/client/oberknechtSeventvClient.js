"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.oberknechtSeventvClient = void 0;
const __1 = require("..");
const getAppStates_1 = require("../operations/getAppStates");
const getEmoteSets_1 = require("../operations/getEmoteSets");
const getUserByTwitchName_1 = require("../operations/getUserByTwitchName");
const searchEmotes_1 = require("../operations/searchEmotes");
let clientSymNum = 0;
class oberknechtSeventvClient {
    #symbol = `oberknechtSeventvClient-${clientSymNum++}`;
    get symbol() {
        return this.#symbol;
    }
    constructor(options) {
        if (!options)
            throw Error("client options is undefined");
        if (!options.token)
            throw Error("no client token specified");
        let _options = options;
        __1.i.clientData[this.symbol] = {
            _options: _options,
        };
    }
    getEmoteSets = (query) => {
        return (0, getEmoteSets_1.getEmoteSets)(this.symbol, query);
    };
    searchEmotes = (query, limit, page, sort, filter) => {
        return (0, searchEmotes_1.searchEmotes)(this.symbol, query, limit, page, sort, filter);
    };
    getUserByTwitchName = (query) => {
        return (0, getUserByTwitchName_1.getUserByTwitchName)(this.symbol, query);
    };
    getAppStates = () => {
        return (0, getAppStates_1.getAppStates)(this.symbol);
    };
}
exports.oberknechtSeventvClient = oberknechtSeventvClient;
