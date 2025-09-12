import styled from "styled-components";
import type { MickeyObject } from "./base.types";
import type { JSX } from "react";
import React from "react";
export type MickeyDefaultFontNames =
  | "default"
  | "black"
  | "bold"
  | "heavy"
  | "light"
  | "regular"
  | "medium"
  | "semiBold"
  | (string & {
      value?: string;
    });

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
export interface ColorProperties {
  blueLight?: CSSColor;
  blueDark?: CSSColor;
  greenLight?: CSSColor;
  greenDark?: CSSColor;
  indigoLight?: CSSColor;
  indigoDark?: CSSColor;
  orangeLight?: CSSColor;
  orangeDark?: CSSColor;
  pinkLight?: CSSColor;
  pinkDark?: CSSColor;
  purpleLight?: CSSColor;
  purpleDark?: CSSColor;
  redLight?: CSSColor;
  redDark?: CSSColor;
  tealLight?: CSSColor;
  tealDark?: CSSColor;
  mintLight?: CSSColor;
  mintDark?: CSSColor;
  brownLight?: CSSColor;
  brownDark?: CSSColor;
  cyanLight?: CSSColor;
  cyanDark?: CSSColor;
  yellowLight?: CSSColor;
  yellowDark?: CSSColor;
  grayLight1?: CSSColor;
  grayLight2?: CSSColor;
  grayLight3?: CSSColor;
  grayLight4?: CSSColor;
  grayLight5?: CSSColor;
  grayLight6?: CSSColor;
  grayLight7?: CSSColor;
  grayDark1?: CSSColor;
  grayDark2?: CSSColor;
  grayDark3?: CSSColor;
  grayDark4?: CSSColor;
  grayDark5?: CSSColor;
  grayDark6?: CSSColor;
  grayDark7?: CSSColor;
  black?: CSSColor;
  white?: CSSColor;
  transparent?: CSSColor;
}
export interface ScrollProperties {
  scrollWidth?: PixelSize;
  scrollHeight?: PixelSize;
  scrollTrack?: CSSColor;
  scrollTrackHover?: CSSColor;
  scrollOff?: CSSColor;
  scrollOn?: CSSColor;
  scrollBorder?: string;
  scrollBorderLeftColor?: CSSColor;
  scrollRadius?: string;
}
export interface MiscProperties {
  shadowLeft?: string;
  shadowRight?: string;
  shadowBottom?: string;
  shadowTop?: string;
  shadowFull?: string;
  baseBgColor?: CSSColor;
  baseTextColor?: CSSColor;
  textSelectionBg?: CSSColor;
  textSelectionColor?: CSSColor;
}
export interface ThemeAliasProperties {
  primary?: CSSColor;
  primaryLight?: CSSColor;
  primaryDark?: CSSColor;
  primaryText?: CSSColor;
  primaryTextAlt?: CSSColor;
  secondary?: CSSColor;
  secondaryLight?: CSSColor;
  secondaryDark?: CSSColor;
  secondaryText?: CSSColor;
  secondaryTextAlt?: CSSColor;
  tertiary?: CSSColor;
  tertiaryLight?: CSSColor;
  tertiaryDark?: CSSColor;
  tertiarText?: CSSColor;
  tertiarTextAlt?: CSSColor;
  quaternary?: CSSColor;
  quaternaryLight?: CSSColor;
  quaternaryDark?: CSSColor;
  quaternaryText?: CSSColor;
  quaternaryTextAlt?: CSSColor;
}
type ColorKeys = keyof ColorProperties;
type ThemeAliasKeys = keyof ThemeAliasProperties;
type MiscKeys = keyof MiscProperties;
export type ThemeColorKeys = ColorKeys | ThemeAliasKeys | MiscKeys;
export type Colors = ThemeColorKeys | CSSColor | string;
export interface ThemeColorProperties
  extends ColorProperties,
    ThemeAliasProperties,
    MiscProperties,
    Record<string, CSSColor> {}
export declare const Color: Record<ThemeColorKeys, string>;

export interface AquaPhoenixFonts extends Record<string, string> {
  default: string;
}
export type FontType =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "body"
  | "lead"
  | "small";
export type DisplayType =
  | "block"
  | "inline"
  | "inline-block"
  | "flex"
  | "inline-flex"
  | "grid"
  | "inline-grid"
  | "flow-root"
  | "none"
  | "contents"
  | "table"
  | "table-row"
  | "list-item"
  | "inherit"
  | "initial"
  | "revert"
  | "revert-layer"
  | "unset";
export type FontSizeNames =
  | "inherit"
  | "xx-small"
  | "x-small"
  | "small"
  | "regular"
  | "medium"
  | "large"
  | "x-large"
  | "xx-large";
export type FontSize =
  | FontSizeNames
  | PixelSize
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
  | ViewportWidthSize;
export type LineHeightSize =
  | PixelSize
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
  | ViewportWidthSize;
export interface BaseFonts {
  font?: MickeyDefaultFontNames;
  fontType?: FontType;
  color?: Colors;
  size?: FontSize;
  lineHeight?: LineHeightSize;
  display?: DisplayType;
  weight?:
    | "normal"
    | "bold"
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900"
    | "lighter"
    | "bolder"
    | "inherit"
    | "initial"
    | "revert"
    | "revert-layer"
    | "unset";
}
export {};

// Define a set of standard HTML attributes that we want to allow on the dom
const standardHtmlProps: Set<string> = new Set([
  "data-selected",
  "data-disabled",
  "data-read-only",
  "data-focus",
  "data-error",
  "data-visible",
  "data-language",
  "data-id",
  "onPress",
  "onChange",
  "onBlur",
  "onFocus",
  "abbr",
  "accept",
  "acceptCharset",
  "accessKey",
  "action",
  "allowFullScreen",
  "allowTransparency",
  "alt",
  "async",
  "autoComplete",
  "autoFocus",
  "autoPlay",
  "capture",
  "cellPadding",
  "cellSpacing",
  "challenge",
  "charSet",
  "checked",
  "cite",
  "classID",
  "className",
  "colSpan",
  "cols",
  "content",
  "contentEditable",
  "contextMenu",
  "controls",
  "coords",
  "crossOrigin",
  "data",
  "dateTime",
  "default",
  "defer",
  "dir",
  "disabled",
  "download",
  "draggable",
  "encType",
  "form",
  "formAction",
  "formEncType",
  "formMethod",
  "formNoValidate",
  "formTarget",
  "frameBorder",
  "headers",
  "height",
  "hidden",
  "high",
  "href",
  "hrefLang",
  "htmlFor",
  "httpEquiv",
  "icon",
  "id",
  "inputMode",
  "integrity",
  "is",
  "keyParams",
  "keyType",
  "kind",
  "label",
  "lang",
  "list",
  "loop",
  "low",
  "manifest",
  "marginHeight",
  "marginWidth",
  "max",
  "maxLength",
  "media",
  "mediaGroup",
  "method",
  "min",
  "minLength",
  "multiple",
  "muted",
  "name",
  "noValidate",
  "nonce",
  "open",
  "optimum",
  "pattern",
  "placeholder",
  "playsInline",
  "poster",
  "preload",
  "profile",
  "radioGroup",
  "readOnly",
  "referrerPolicy",
  "rel",
  "required",
  "reversed",
  "role",
  "rows",
  "rowSpan",
  "sandbox",
  "scope",
  "scoped",
  "scrolling",
  "seamless",
  "selected",
  "shape",
  "size",
  "sizes",
  "span",
  "spellCheck",
  "src",
  "srcDoc",
  "srcLang",
  "srcSet",
  "start",
  "step",
  "style",
  "summary",
  "tabIndex",
  "target",
  "title",
  "type",
  "useMap",
  "value",
  "width",
  "wmode",
  "wrap",

  // Custom
  "onPress",
  "onOut",
  "onMove",
  "onUp",
  "onDown",
  "onOver",
  "groupId",
  "active",
]);

export const filterProps = <P extends object>(
  component: keyof JSX.IntrinsicElements | React.ComponentType<MickeyObject>,
  filteredProps?: (keyof P)[] | string[]
) => {
  return styled(
    React.forwardRef<MickeyObject, P & { children?: React.ReactNode }>(
      ({ children, ...props }, ref) => {
        const componentProps: Record<string, MickeyObject> = { ref, children };

        const propsToFilter =
          filteredProps ?? (Object.keys(props) as (keyof P | string)[]);

        Object.keys(props).forEach((prop) => {
          if (
            standardHtmlProps.has(prop) ||
            !propsToFilter.includes(prop as keyof P | string)
          ) {
            if (prop === "active") {
              componentProps[prop] = (props as Record<string, MickeyObject>)[
                prop
              ].toString();
            } else {
              componentProps[prop] = (props as Record<string, MickeyObject>)[
                prop
              ];
            }
          }
        });

        return React.createElement(component, componentProps);
      }
    )
  );
};
