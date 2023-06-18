import { request } from "oberknecht-request";
import { urls } from "../variables/urls";
import { getEmoteSetResponse } from "../types/operations/getEmoteSet";

export function getEmoteSet(sym: string, emotesetID: string) {
  return new Promise<getEmoteSetResponse>((resolve, reject) => {
    const gql = urls.seventv.gql;
    const body = {
      operationName: "GetEmoteSet",
      variables: { id: emotesetID },
      query:
        "query GetEmoteSet($id: ObjectID!, $formats: [ImageFormat!]) {\n  emoteSet(id: $id) {\n    id\n    name\n    flags\n    capacity\n    origins {\n      id\n      weight\n      __typename\n    }\n    emotes {\n      id\n      name\n      actor {\n        id\n        display_name\n        avatar_url\n        __typename\n      }\n      origin_id\n      data {\n        id\n        name\n        flags\n        state\n        lifecycle\n        host {\n          url\n          files(formats: $formats) {\n            name\n            format\n            __typename\n          }\n          __typename\n        }\n        owner {\n          id\n          display_name\n          style {\n            color\n            __typename\n          }\n          roles\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    owner {\n      id\n      username\n      display_name\n      style {\n        color\n        __typename\n      }\n      avatar_url\n      roles\n      connections {\n        id\n        display_name\n        emote_capacity\n        platform\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}",
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
