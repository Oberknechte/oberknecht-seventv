import { request } from "oberknecht-request";
import { changeEmoteInSetResponse } from "../types/operations/changeEmoteInSet";
import { urls } from "../variables/urls";

export function changeEmoteInSet(
  sym: string,
  id: string,
  action: "ADD" | "REMOVE",
  emoteID: string
) {
  return new Promise<changeEmoteInSetResponse>((resolve, reject) => {
    const gql = urls.seventv.gql;
    const body = {
      operationName: "ChangeEmoteInSet",
      variables: {
        action: action,
        id: id,
        emote_id: emoteID,
      },
      query:
        "mutation ChangeEmoteInSet($id: ObjectID!, $action: ListItemAction!, $emote_id: ObjectID!, $name: String) {\n  emoteSet(id: $id) {\n    id\n    emotes(id: $emote_id, action: $action, name: $name) {\n      id\n      name\n      __typename\n    }\n    __typename\n  }\n}",
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
