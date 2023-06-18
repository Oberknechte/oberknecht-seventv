"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchEmotes = void 0;
const oberknecht_request_1 = require("oberknecht-request");
const urls_1 = require("../variables/urls");
async function searchEmotes(sym, query, limit, page, sort, filter) {
    return new Promise((resolve, reject) => {
        const gql = urls_1.urls.seventv.gql;
        const body = {
            operationName: "SearchEmotes",
            variables: {
                query: query,
                limit: limit ?? 35,
                page: page ?? 1,
                sort: sort ?? { value: "popularity", order: "DESCENDING" },
                filter: filter ?? {
                    category: "TOP",
                    exact_match: false,
                    case_sensitive: false,
                    ignore_tags: false,
                    zero_width: false,
                    animated: false,
                    aspect_ratio: "",
                },
            },
            query: "query SearchEmotes($query: String!, $page: Int, $sort: Sort, $limit: Int, $filter: EmoteSearchFilter) {\n  emotes(query: $query, page: $page, sort: $sort, limit: $limit, filter: $filter) {\n    count\n    items {\n      id\n      name\n      state\n      trending\n      owner {\n        id\n        username\n        display_name\n        style {\n          color\n          paint_id\n          __typename\n        }\n        __typename\n      }\n      flags\n      host {\n        url\n        files {\n          name\n          format\n          width\n          height\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}",
        };
        (0, oberknecht_request_1.request)(gql._base, {
            method: "POST",
            headers: gql._headers(sym),
            json: true,
            body: body,
        }, (e, r) => {
            if (e || r.errors)
                return reject(e ?? r.errors);
            let dat = r.body.data;
            resolve(dat);
        });
    });
}
exports.searchEmotes = searchEmotes;
