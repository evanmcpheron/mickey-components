import React, { type CSSProperties } from "react";
import { type ColorResult } from "@uiw/react-color";
import type {
  ClickActions,
  DomProperties,
  MickeyObject,
} from "@/helpers/types/base.types";
import type { Colors } from "@/helpers/types/style.types";

export interface ColorPickerProps extends DomProperties, ClickActions {
  name: string;
  label?: string;
  labelPosition?: "left" | "right";
  type?: "circle" | "square";
  picker?:
    | "Alpha"
    | "Block"
    | "Chrome"
    | "Circle"
    | "Compact"
    | "Custom"
    | "Github"
    | "Hue"
    | "Material"
    | "Photoshop"
    | "Sketch"
    | "Slider"
    | "Swatches"
    | "Twitter";
  color?: ColorResult | string | undefined;
  colors?: Colors[];
  width?: string | undefined;
  circleSize?: number | undefined;
  circleSpacing?: number | undefined;
  value?: string;
  defaultValue?: MickeyObject;
  disabled?: boolean;
  onChange?: (color: MickeyObject) => void;
}

export interface ColorDivProps {
  color: ColorResult | undefined;
  disabled?: boolean;
}

export interface CircleProps {
  color: ColorResult | undefined;
  disabled?: boolean;
}

export interface PopoverProps {
  disabled?: number;
  popoverUp?: number;
  className?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
  ref?: MickeyObject;
  isCustomPicker?: boolean;
}

export type CoverProps = ClickActions;

export const colorOptionsDefault = [
  "#FF0000",
  "#FF3300",
  "#FF6600",
  "#FF8000",
  "#FF9900",
  "#FFB300",
  "#FFCC00",
  "#FFFF00",
  "#CCFF00",
  "#99FF00",
  "#66FF00",
  "#33FF00",
  "#00FF00",
  "#00FF33",
  "#00FF66",
  "#00FF99",
  "#00FFCC",
  "#00FFFF",
  "#00CCFF",
  "#0099FF",
  "#0066FF",
  "#0033FF",
  "#0000FF",
  "#3300FF",
  "#6600FF",
  "#8000FF",
  "#9900FF",
  "#B300FF",
  "#CC00FF",
  "#FF00FF",
  "#FF00CC",
  "#FF0099",
  "#FF0066",
  "#FF0033",
  "#FF1919",
  "#FF3333",
  "#FF4D4D",
  "#FF6666",
  "#FF8080",
  "#FF9999",
  "#FFB3B3",
  "#FFD6D6",
  "#FFE6E6",
  "#FFF0F0",
  "#FFFFFF",
  "#DDDDDD",
  "#AAAAAA",
  "#555555",
  "#000000",
];
