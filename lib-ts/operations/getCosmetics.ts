import { convertToArray } from "oberknecht-utils";
import { urls } from "../variables/urls";
import { request } from "oberknecht-request";
import { getCosmeticsResponse } from "../types/operations/getCosmetics";

export function getCosmetics(sym: string, userIDs: string | string[]) {
  return new Promise<getCosmeticsResponse>((resolve, reject) => {
    const gql = urls.seventv.gql;
    const body = {
      operationName: "GetCosmestics",
      variables: { list: convertToArray(userIDs) },
      query:
        "query GetCosmestics($list: [ObjectID!]) {\n  cosmetics(list: $list) {\n    paints {\n      id\n      kind\n      name\n      function\n      color\n      angle\n      shape\n      image_url\n      repeat\n      stops {\n        at\n        color\n        __typename\n      }\n      shadows {\n        x_offset\n        y_offset\n        radius\n        color\n        __typename\n      }\n      __typename\n    }\n    badges {\n      id\n      kind\n      name\n      tooltip\n      tag\n      __typename\n    }\n    __typename\n  }\n}",
    };

    request(
      gql._base,
      {
        method: "POST",
        headers: gql._headers(sym),
        json: true,
        body: body,
      },
      (e, r) => {
        if (e || r.errors) return reject(e ?? r.errors);

        let dat = r.body;
        return resolve(dat);
      }
    );
  });
}
