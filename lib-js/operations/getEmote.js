"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEmotes = void 0;
const oberknecht_request_1 = require("oberknecht-request");
const urls_1 = require("../variables/urls");
function getEmotes(sym, id) {
    return new Promise((resolve, reject) => {
        const gql = urls_1.urls.seventv.gql;
        const body = {
            operationName: "Emote",
            variables: { id: id },
            query: "query Emote($id: ObjectID!) {\n  emote(id: $id) {\n    id\n    created_at\n    name\n    lifecycle\n    state\n    trending\n    tags\n    owner {\n      id\n      username\n      display_name\n      avatar_url\n      style {\n        color\n        paint_id\n        __typename\n      }\n      __typename\n    }\n    flags\n    host {\n      ...HostFragment\n      __typename\n    }\n    versions {\n      id\n      name\n      description\n      created_at\n      lifecycle\n      state\n      host {\n        ...HostFragment\n        __typename\n      }\n      __typename\n    }\n    animated\n    __typename\n  }\n}\n\nfragment HostFragment on ImageHost {\n  url\n  files {\n    name\n    format\n    width\n    height\n    size\n    __typename\n  }\n  __typename\n}",
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
exports.getEmotes = getEmotes;
