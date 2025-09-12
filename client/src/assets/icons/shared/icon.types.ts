import type { ClickActions } from "@/helpers/types/base.types";
import type { Color, CSSColor, Dimensions } from "@/helpers/types/style.types";
import { type CSSProperties } from "react";

export interface DomProperties {
  style?: CSSProperties;
  className?: string;
}

export interface IconBaseProps extends DomProperties, ClickActions {
  size?: keyof typeof sizes | string;
  color?: keyof typeof Color | CSSColor | string;
  display?: "block" | "inline-block";
}

export interface IconProps extends DomProperties, ClickActions {
  type?: "solid" | "regular" | "light" | "thin" | "duotone" | "brands";
  size?:
    | "small"
    | "regular"
    | "medium"
    | "large"
    | "x-large"
    | "xx-large"
    | Dimensions;
  color?: keyof typeof Color | CSSColor | string;
  display?: "block" | "inline-block";
}

export const sizes = {
  small: "12px",
  regular: "14px",
  medium: "16px",
  large: "18px",
  "x-large": "22px",
  "xx-large": "32px",
};
