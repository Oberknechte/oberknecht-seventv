import { request } from "oberknecht-request";
import { urls } from "../variables/urls";
import { getEmoteResponse } from "../types/operations/getEmote";

export function getEmotes(sym: string, id: string) {
  return new Promise<getEmoteResponse>((resolve, reject) => {
    const gql = urls.seventv.gql;
    const body = {
      operationName: "Emote",
      variables: { id: id },
      query:
        "query Emote($id: ObjectID!) {\n  emote(id: $id) {\n    id\n    created_at\n    name\n    lifecycle\n    state\n    trending\n    tags\n    owner {\n      id\n      username\n      display_name\n      avatar_url\n      style {\n        color\n        paint_id\n        __typename\n      }\n      __typename\n    }\n    flags\n    host {\n      ...HostFragment\n      __typename\n    }\n    versions {\n      id\n      name\n      description\n      created_at\n      lifecycle\n      state\n      host {\n        ...HostFragment\n        __typename\n      }\n      __typename\n    }\n    animated\n    __typename\n  }\n}\n\nfragment HostFragment on ImageHost {\n  url\n  files {\n    name\n    format\n    width\n    height\n    size\n    __typename\n  }\n  __typename\n}",
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
