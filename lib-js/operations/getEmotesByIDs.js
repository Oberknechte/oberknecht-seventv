"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEmotesByIDs = void 0;
function getEmotesByIDs(sym, ids) {
    return new Promise((resolve, reject) => {
        const body = {
            operationName: "EmotesByID",
            variables: {
                list: ids,
            },
            query: "query EmotesByID($list: [ObjectID!]!, $formats: [ImageFormat!]) {\n  emotesByID(list: $list) {\n    id\n    name\n    flags\n    state\n    tags\n    owner {\n      id\n      display_name\n      style {\n        color\n        __typename\n      }\n      __typename\n    }\n    host {\n      url\n      files(formats: $formats) {\n        name\n        format\n        width\n        height\n        size\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}",
        };
    });
}
exports.getEmotesByIDs = getEmotesByIDs;
