export function getEmoteChannels(sym: string, id: string) {
  return new Promise((resolve, reject) => {
    const body = {
      operationName: "GetEmoteChannels",
      variables: { id: id },
      query:
        "query GetEmoteChannels($id: ObjectID!, $page: Int, $limit: Int) {\n  emote(id: $id) {\n    id\n    channels(page: $page, limit: $limit) {\n      total\n      items {\n        id\n        username\n        display_name\n        avatar_url\n        style {\n          color\n          paint_id\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}",
    };
  });
}
