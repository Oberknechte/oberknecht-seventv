import { request } from "oberknecht-request";
import { urls } from "../variables/urls";
import { getEmoteSetMinResponse } from "../types/operations/getEmoteSetMin";

export function getEmoteSetMin(sym: string, id: string) {
  return new Promise<getEmoteSetMinResponse>((resolve, reject) => {
    const gql = urls.seventv.gql;
    const body = {
      operationName: "GetEmoteSetMin",
      variables: { id: id },
      query:
        "query GetEmoteSetMin($id: ObjectID!) {\n  emoteSet(id: $id) {\n    id\n    name\n    flags\n    capacity\n    origins {\n      id\n      weight\n      __typename\n    }\n    emotes {\n      id\n      name\n      origin_id\n      data {\n        name\n        __typename\n      }\n      __typename\n    }\n    owner {\n      id\n      display_name\n      style {\n        color\n        __typename\n      }\n      avatar_url\n      connections {\n        id\n        username\n        platform\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}",
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
