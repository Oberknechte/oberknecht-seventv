"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserByTwitchName = void 0;
const oberknecht_request_1 = require("oberknecht-request");
const urls_1 = require("../variables/urls");
function getUserByTwitchName(sym, query) {
    return new Promise((resolve, reject) => {
        const gql = urls_1.urls.seventv.gql;
        const body = {
            operationName: "SearchUsers",
            variables: { query: query },
            query: "query SearchUsers($query: String!) {\n  users(query: $query) {\n    id\n    username\n    display_name\n    roles\n    style {\n      color\n      __typename\n    }\n    avatar_url\n    __typename\n  }\n}",
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
exports.getUserByTwitchName = getUserByTwitchName;
