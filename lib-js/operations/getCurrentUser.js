"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentUser = void 0;
const oberknecht_request_1 = require("oberknecht-request");
const urls_1 = require("../variables/urls");
function getCurrentUser(sym) {
    return new Promise((resolve, reject) => {
        const gql = urls_1.urls.seventv.gql;
        const body = {
            operationName: "GetCurrentUser",
            variables: {},
            query: "query GetCurrentUser {\n  user: actor {\n    id\n    username\n    display_name\n    created_at\n    avatar_url\n    style {\n      color\n      paint_id\n      __typename\n    }\n    biography\n    inbox_unread_count\n    editor_of {\n      id\n      permissions\n      user {\n        emote_sets {\n          id\n          __typename\n        }\n        connections {\n          id\n          display_name\n          platform\n          emote_capacity\n          emote_set_id\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    roles\n    emote_sets {\n      id\n      name\n      capacity\n      emotes {\n        id\n        name\n        data {\n          name\n          __typename\n        }\n        __typename\n      }\n      owner {\n        id\n        display_name\n        style {\n          color\n          __typename\n        }\n        avatar_url\n        __typename\n      }\n      __typename\n    }\n    connections {\n      id\n      display_name\n      platform\n      linked_at\n      emote_capacity\n      emote_set_id\n      __typename\n    }\n    __typename\n  }\n}",
        };
        (0, oberknecht_request_1.request)(gql._base, {
            method: "POST",
            headers: gql._headers(sym),
            json: true,
            body: body,
        }, (e, r) => {
            if (e || r.errors)
                return reject(e ?? r.errors);
            let dat = r.body;
            return resolve(dat);
        });
    });
}
exports.getCurrentUser = getCurrentUser;
