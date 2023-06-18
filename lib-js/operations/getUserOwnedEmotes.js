"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserOwnedEmotes = void 0;
function getUserOwnedEmotes(sym, id) {
    return new Promise((resolve, reject) => {
        const body = {
            operationName: "GetUserOwnedEmotes",
            variables: { id: id },
            query: "query GetUserOwnedEmotes($id: ObjectID!, $formats: [ImageFormat!]) {\n  user(id: $id) {\n    owned_emotes {\n      id\n      name\n      lifecycle\n      flags\n      state\n      trending\n      host {\n        url\n        files(formats: $formats) {\n          name\n          format\n          __typename\n        }\n        __typename\n      }\n      owner {\n        id\n        display_name\n        style {\n          color\n          __typename\n        }\n        avatar_url\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}",
        };
    });
}
exports.getUserOwnedEmotes = getUserOwnedEmotes;
