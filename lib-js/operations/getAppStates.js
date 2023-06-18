"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAppStates = void 0;
const oberknecht_request_1 = require("oberknecht-request");
const urls_1 = require("../variables/urls");
function getAppStates(sym) {
    return new Promise((resolve, reject) => {
        const gql = urls_1.urls.seventv.gql;
        const body = {
            operationName: "AppState",
            variables: {},
            query: "query AppState {\n  globalEmoteSet: namedEmoteSet(name: GLOBAL) {\n    id\n    name\n    emotes {\n      id\n      name\n      flags\n      __typename\n    }\n    capacity\n    __typename\n  }\n  roles: roles {\n    id\n    name\n    allowed\n    denied\n    position\n    color\n    invisible\n    __typename\n  }\n}",
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
exports.getAppStates = getAppStates;
