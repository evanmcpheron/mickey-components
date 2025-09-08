import React from "react";
import { StyledCell } from "./cell.styled";
import { removeUndefined } from "@/helpers/objects";
import type { DomProperties, ClickActions } from "@/helpers/types/base.types";
import type { CssDimensions, PercentPixel } from "@/helpers/types/style.types";

export interface CellProperties extends DomProperties, ClickActions {
  children?: React.ReactNode;
  display?: "block" | "flex";
  cellDirection?: "row" | "row-reverse" | "column" | "column-reverse";
  width?: CssDimensions;
  height?: PercentPixel;
  justifyContent?:
    | "start"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "right";
  cellWrap?: "nowrap" | "wrap" | "wrap-reverse" | "initial";
  verticalAlign?: "baseline" | "top" | "middle" | "bottom" | "sub" | "text-top";
  alignItems?: "stretch" | "center" | "start" | "end";
  gap?: `${number}px`;
}

export const Cell: React.FC<CellProperties> = ({
  children,
  style,
  className,
  cellDirection,
  justifyContent,
  height,
  verticalAlign,
  width,
  cellWrap,
  display,
  alignItems,
  active,
  gap,
}) => {
  const internalProperties = removeUndefined({
    className: `mickey-cell ${className ? className : ""}`,
    style: { ...(style || {}) },
    display: display ? display : "flex",
    cellDirection,
    justifyContent,
    height,
    verticalAlign,
    width,
    cellWrap,
    gap,
    alignItems,
    active,
  });

  return <StyledCell {...internalProperties}>{children}</StyledCell>;
};
