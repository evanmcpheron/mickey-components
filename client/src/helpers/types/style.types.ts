import type { MickeyObject } from "./base.types";

export type PixelSize = `${number}px`;
export type PointSize = `${number}pt`;
export type PicasSize = `${number}pc`;
export type CentimeterSize = `${number}cm`;
export type MilimeterSize = `${number}mm`;
export type ElementSize = `${number}em`;
export type RelativeSize = `${number}rem`;
export type PercentSize = `${number}%`;
export type ViewportWidthSize = `${number}vw`;
export type ViewportHeightSize = `${number}vh`;
export type ViewportMinSize = `${number}vmin`;
export type ViewportMaxSize = `${number}vmax`;
export type Padding = `${PixelSize} ${PixelSize}`;
type CalcDivision = "-" | "+" | "/";
export type CssCalc = `calc(${
  | PixelSize
  | PercentSize
  | ViewportWidthSize
  | ViewportHeightSize} ${CalcDivision} ${PixelSize | PercentSize})`;
export type PercentPixel = PixelSize | PercentSize;
export type CssDimensions =
  | PercentPixel
  | CssCalc
  | "-webkit-fill-available"
  | "";
export type Dimensions =
  | CssDimensions
  | PercentPixel
  | PointSize
  | PicasSize
  | CentimeterSize
  | MilimeterSize
  | ElementSize
  | RelativeSize
  | PercentSize
  | ViewportHeightSize
  | ViewportMaxSize
  | ViewportMinSize
  | ViewportWidthSize
  | CssCalc
  | "auto"
  | "inherit"
  | "initial";
export type RGBAColor = `rgba(${number},${number},${number},${number})`;
export type RGBColor = `rgb(${number},${number},${number})`;
export type VarColor = `var(--${string})`;
export type HexColor = `#${string}`;
export type DisplayP3 = `color(display-p3 ${number} ${number} ${number})`;
export type CSSColor =
  | RGBAColor
  | RGBColor
  | HexColor
  | DisplayP3
  | VarColor
  | MickeyObject;
export type TimeMs = `${number}ms`;
export type TimeS = `${number}s`;
