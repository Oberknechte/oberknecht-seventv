import { request } from "oberknecht-request";
import { urls } from "../variables/urls";
import { getAppStatesResponse } from "../types/operations/getAppStates";

export function getAppStates(sym: string) {
  return new Promise<getAppStatesResponse>((resolve, reject) => {
    const gql = urls.seventv.gql;
    const body = {
      operationName: "AppState",
      variables: {},
      query:
        "query AppState {\n  globalEmoteSet: namedEmoteSet(name: GLOBAL) {\n    id\n    name\n    emotes {\n      id\n      name\n      flags\n      __typename\n    }\n    capacity\n    __typename\n  }\n  roles: roles {\n    id\n    name\n    allowed\n    denied\n    position\n    color\n    invisible\n    __typename\n  }\n}",
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
