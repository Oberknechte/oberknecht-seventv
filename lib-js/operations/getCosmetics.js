"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCosmetics = void 0;
const oberknecht_utils_1 = require("oberknecht-utils");
const urls_1 = require("../variables/urls");
const oberknecht_request_1 = require("oberknecht-request");
function getCosmetics(sym, userIDs) {
    return new Promise((resolve, reject) => {
        const gql = urls_1.urls.seventv.gql;
        const body = {
            operationName: "GetCosmestics",
            variables: { list: (0, oberknecht_utils_1.convertToArray)(userIDs) },
            query: "query GetCosmestics($list: [ObjectID!]) {\n  cosmetics(list: $list) {\n    paints {\n      id\n      kind\n      name\n      function\n      color\n      angle\n      shape\n      image_url\n      repeat\n      stops {\n        at\n        color\n        __typename\n      }\n      shadows {\n        x_offset\n        y_offset\n        radius\n        color\n        __typename\n      }\n      __typename\n    }\n    badges {\n      id\n      kind\n      name\n      tooltip\n      tag\n      __typename\n    }\n    __typename\n  }\n}",
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
exports.getCosmetics = getCosmetics;
