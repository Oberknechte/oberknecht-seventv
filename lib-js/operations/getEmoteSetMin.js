"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEmoteSetMin = void 0;
const oberknecht_request_1 = require("oberknecht-request");
const urls_1 = require("../variables/urls");
function getEmoteSetMin(sym, id) {
    return new Promise((resolve, reject) => {
        const gql = urls_1.urls.seventv.gql;
        const body = {
            operationName: "GetEmoteSetMin",
            variables: { id: id },
            query: "query GetEmoteSetMin($id: ObjectID!) {\n  emoteSet(id: $id) {\n    id\n    name\n    flags\n    capacity\n    origins {\n      id\n      weight\n      __typename\n    }\n    emotes {\n      id\n      name\n      origin_id\n      data {\n        name\n        __typename\n      }\n      __typename\n    }\n    owner {\n      id\n      display_name\n      style {\n        color\n        __typename\n      }\n      avatar_url\n      connections {\n        id\n        username\n        platform\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}",
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
exports.getEmoteSetMin = getEmoteSetMin;
