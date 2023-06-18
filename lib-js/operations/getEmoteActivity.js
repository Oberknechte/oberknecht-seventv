"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEmoteActivity = void 0;
const oberknecht_request_1 = require("oberknecht-request");
const urls_1 = require("../variables/urls");
function getEmoteActivity(sym, id) {
    return new Promise((resolve, reject) => {
        const gql = urls_1.urls.seventv.gql;
        const body = {
            operationName: "GetEmoteActivity",
            variables: { id: id },
            query: "query GetEmoteActivity($id: ObjectID!, $limit: Int) {\n  emote(id: $id) {\n    id\n    activity(limit: $limit) {\n      id\n      kind\n      created_at\n      target_id\n      target_kind\n      actor {\n        id\n        username\n        display_name\n        style {\n          color\n          __typename\n        }\n        avatar_url\n        __typename\n      }\n      changes {\n        format\n        key\n        value\n        array_value {\n          added\n          updated\n          removed\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}",
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
exports.getEmoteActivity = getEmoteActivity;
