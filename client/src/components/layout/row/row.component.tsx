import React, { useRef } from "react";
import { StyledRow } from "./row.styled";
import type {
  ClickActions,
  DomProperties,
  MickeyObject,
} from "@/helpers/types/base.types";
import { removeUndefined } from "@/helpers/objects";
import type { CssDimensions, PixelSize } from "@/helpers/types/style.types";

export interface RowProperties extends DomProperties, ClickActions {
  children?: React.ReactNode;
  gap?: PixelSize;
  width?: CssDimensions;
  height?: CssDimensions;
  minWidth?: CssDimensions;
  minHeight?: CssDimensions;
  rowDirection?: "row" | "row-reverse" | "column" | "column-reverse";
  alignItems?: "stretch" | "center" | "start" | "end";
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  rowWrap?: "nowrap" | "wrap" | "wrap-reverse" | "initial";
  stretchRow?: boolean;
}

export const Row: React.FC<RowProperties> = ({
  children,
  style,
  className,
  rowDirection,
  stretchRow,
  gap,
  alignItems,
  height,
  justifyContent,
  width,
  rowWrap,
  active,
}) => {
  const domRef: MickeyObject = useRef(null);

  const internalProperties = removeUndefined({
    className: `mickey-row ${className ? className : ""}`,
    style: { ...(style || {}) },
    rowDirection: rowDirection ? rowDirection : "row",
    stretchRow: stretchRow ? stretchRow : true,
    gap,
    alignItems,
    height,
    justifyContent,
    width,
    rowWrap,
    active,
  });

  return (
    <StyledRow ref={domRef} {...internalProperties}>
      {children}
    </StyledRow>
  );
};
