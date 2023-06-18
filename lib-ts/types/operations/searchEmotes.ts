export type searchEmotesVariablesSort = {
  value: "popularity" | "age";
  order: "DESCENDING" | "ASCENDING";
};

export type searchEmotesVariablesFilter = {
  category: "TOP" | "TRENDING";
  exact_match: boolean;
  case_sensitive: boolean;
  ignore_tags: boolean;
  zero_width: boolean;
  animated: boolean;
  aspect_ratio: string;
  // ↑ w:h:tolerance%
};

export type searchEmotesVariables = {
  query: string;
  limit: number;
  page: number;
  sort: searchEmotesVariablesSort;
  filter: searchEmotesVariablesFilter;
};
