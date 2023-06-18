"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserEmoteSets = void 0;
function getUserEmoteSets(sym, id) {
    return new Promise((resolve, reject) => {
        const body = {
            operationName: "GetUserEmoteSets",
            variables: { id: id },
            query: "query GetUserEmoteSets($id: ObjectID!) {\n  user(id: $id) {\n    id\n    emote_sets {\n      id\n      name\n      flags\n      capacity\n      emote_count\n      origins {\n        id\n        weight\n        __typename\n      }\n      owner {\n        id\n        display_name\n        style {\n          color\n          __typename\n        }\n        avatar_url\n        connections {\n          id\n          emote_capacity\n          emote_set_id\n          platform\n          display_name\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}",
        };
    });
}
exports.getUserEmoteSets = getUserEmoteSets;
