import { request } from "oberknecht-request";
import { urls } from "../variables/urls";

export function getUserByTwitchName(sym: string, query: string) {
  return new Promise((resolve, reject) => {
    const gql = urls.seventv.gql;
    const body = {
      operationName: "SearchUsers",
      variables: { query: query },
      query:
        "query SearchUsers($query: String!) {\n  users(query: $query) {\n    id\n    username\n    display_name\n    roles\n    style {\n      color\n      __typename\n    }\n    avatar_url\n    __typename\n  }\n}",
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
        
        let dat = r.body.data;
        return resolve(dat);
      }
    );
  });
}
