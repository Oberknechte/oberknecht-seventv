export const cosmeticPaintNameEntries = [
  "Rainbow",
  "Hibiscus",
  "Lemon Slice",
  "Mojito",
  "Breeze",
] as const;

export const cosmeticPaintFunctionEntries = [
  "LINEAR_GRADIENT",
  "RADIAL_GRADIENT",
] as const;

export const cosmeticPaintShapeEntries = ["circle"] as const;

export type cosmeticPaintNameEntriesType = typeof cosmeticPaintNameEntries[number];
export type cosmeticPaintFunctionEntriesType = typeof cosmeticPaintFunctionEntries[number];
export type cosmeticPaintShapeEntriesType = typeof cosmeticPaintShapeEntries[number];

export type cosmeticPaintStopEntry = {
  at: number;
  color: number;
  __typename: "CosmeticPaintStop";
};

export type cosmeaticPaintShadowEntry = {
  x_offset: number;
  y_offset: number;
  radius: number;
  color: number;
  __typename: "CosmeticPaintShadow";
};

export type cosmeticPaintEntry = {
  id: string;
  kind: string;
  name: cosmeticPaintNameEntriesType;
  function: cosmeticPaintFunctionEntriesType;
  color: number;
  angle: number;
  shape: cosmeticPaintShapeEntriesType;
  image_url: null | string;
  repeat: boolean;
  stops: cosmeticPaintStopEntry[];
  shadows: cosmeaticPaintShadowEntry[];
  __typename: "CosmeticPaint";
};

export type getCosmeticsResponse = {
  data: {
    cosmetics: {
      paints: cosmeticPaintEntry[];
      badges: [];
      __typename: "CosmeticsQuery";
    };
  };
};
