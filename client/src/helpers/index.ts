export type Role =
  | "primary"
  | "secondary"
  | "error"
  | "warning"
  | "info"
  | "success";

export type Variant = "text" | "contained" | "outlined";

export type Direction = "left" | "right";

export type RowDirection = "row" | "column";

export type Orientation = "horizontal" | "vertical";

export type Spacing =
  | "space-around"
  | "space-between"
  | "center"
  | "space-evenly";

export const normalCase = (text: string): string =>
  text
    .split(" ")
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
