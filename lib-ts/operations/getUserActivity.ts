export function getUserActivity(sym: string, id: string) {
  return new Promise((resolve, reject) => {
    const body = {
      operationName: "GetUserActivity",
      variables: { id: id },
      query:
        "query GetUserActivity($id: ObjectID!, $limit: Int) {\n  user(id: $id) {\n    id\n    activity(limit: $limit) {\n      id\n      kind\n      created_at\n      target_id\n      target_kind\n      actor {\n        id\n        username\n        display_name\n        style {\n          color\n          __typename\n        }\n        avatar_url\n        __typename\n      }\n      changes {\n        format\n        key\n        value\n        array_value {\n          added\n          updated\n          removed\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}",
    };
  });
}
