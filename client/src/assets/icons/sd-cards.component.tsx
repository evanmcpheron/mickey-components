import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SdCardsIcon: React.FC<
  IconProps & {
    type: "solid" | "regular" | "light" | "thin" | "duotone" | Dimensions;
  }
> = ({ type, size, color, active, className, style, ...more }) => {
  const domRef: MickeyObject = useRef(null);

  const { onPress, onOut, onMove, onUp, onDown, onOver, groupId } = more;
  const pointerEvents = {
    onPress,
    onOut,
    onMove,
    onUp,
    onDown,
    onOver,
    groupId,
  };

  usePointerEvent({ element: domRef, active: active, ...pointerEvents });

  const internalProperties = removeUndefined({
    className,
    style: { ...(style || {}) },
    active,
    size,
    color,
  });

  return (
    <StyledIcon ref={domRef} {...internalProperties}>
      {(() => {
        switch (type) {
          case "solid":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M384 0H237.3c-17 0-33.3 6.7-45.3 18.7L114.7 96c-12 12-18.7 28.3-18.7 45.3V352c0 35.3 28.7 64 64 64h224c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64M280 64c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24s-24-10.7-24-24V88c0-13.3 10.7-24 24-24m80 0c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24s-24-10.7-24-24V88c0-13.3 10.7-24 24-24M48 120c0-13.3-10.7-24-24-24S0 106.7 0 120v256c0 75.1 60.9 136 136 136h224c13.3 0 24-10.7 24-24s-10.7-24-24-24H136c-48.6 0-88-39.4-88-88z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M400 352V64c0-8.8-7.2-16-16-16H234.5c-4.2 0-8.3 1.7-11.3 4.7l-74.5 74.5c-3 3-4.7 7.1-4.7 11.3V352c0 8.8 7.2 16 16 16h224c8.8 0 16-7.2 16-16M114.7 93.3l74.5-74.5C201.3 6.7 217.5 0 234.5 0H384c35.3 0 64 28.7 64 64v288c0 35.3-28.7 64-64 64H160c-35.3 0-64-28.7-64-64V138.5c0-17 6.7-33.3 18.7-45.3zM24 96c13.3 0 24 10.7 24 24v256c0 48.6 39.4 88 88 88h224c13.3 0 24 10.7 24 24s-10.7 24-24 24H136C60.9 512 0 451.1 0 376V120c0-13.3 10.7-24 24-24m280 0v64c0 8.8-7.2 16-16 16s-16-7.2-16-16V96c0-8.8 7.2-16 16-16s16 7.2 16 16m64 0v64c0 8.8-7.2 16-16 16s-16-7.2-16-16V96c0-8.8 7.2-16 16-16s16 7.2 16 16"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M416 368c0 17.7-14.3 32-32 32H144c-17.7 0-32-14.3-32-32V154.5c0-8.5 3.4-16.6 9.4-22.6l90.5-90.5c6-6 14.1-9.4 22.6-9.4H384c17.7 0 32 14.3 32 32zm32-304c0-35.3-28.7-64-64-64H234.5c-17 0-33.3 6.7-45.3 18.7l-90.5 90.6c-12 12-18.7 28.3-18.7 45.3V368c0 35.3 28.7 64 64 64h240c35.3 0 64-28.7 64-64zm-208 0c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V80c0-8.8-7.2-16-16-16m64 0c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V80c0-8.8-7.2-16-16-16m64 0c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V80c0-8.8-7.2-16-16-16M32 112c0-8.8-7.2-16-16-16s-16 7.2-16 16v272c0 70.7 57.3 128 128 128h240c8.8 0 16-7.2 16-16s-7.2-16-16-16H128c-53 0-96-43-96-96z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M432 368V64c0-26.5-21.5-48-48-48H234.5c-12.7 0-24.9 5.1-33.9 14.1l-90.5 90.5c-9 9-14.1 21.2-14.1 33.9V368c0 26.5 21.5 48 48 48h240c26.5 0 48-21.5 48-48m16-304v304c0 35.3-28.7 64-64 64H144c-35.3 0-64-28.7-64-64V154.5c0-17 6.7-33.3 18.7-45.3l90.5-90.5C201.3 6.7 217.5 0 234.5 0H384c35.3 0 64 28.7 64 64m-208 8c4.4 0 8 3.6 8 8v64c0 4.4-3.6 8-8 8s-8-3.6-8-8V80c0-4.4 3.6-8 8-8m64 0c4.4 0 8 3.6 8 8v64c0 4.4-3.6 8-8 8s-8-3.6-8-8V80c0-4.4 3.6-8 8-8m64 0c4.4 0 8 3.6 8 8v64c0 4.4-3.6 8-8 8s-8-3.6-8-8V80c0-4.4 3.6-8 8-8M18.7 189.3 48 160v22.6l-17.9 18c-9 9-14.1 21.2-14.1 33.9V448c0 26.5 21.5 48 48 48h240c20.9 0 38.7-13.4 45.3-32H366c-7.1 27.6-32.2 48-62 48H64c-35.3 0-64-28.7-64-64V234.5c0-17 6.7-33.3 18.7-45.3z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M304 88c0-13.3-10.7-24-24-24s-24 10.7-24 24v48c0 13.3 10.7 24 24 24s24-10.7 24-24zm80 0c0-13.3-10.7-24-24-24s-24 10.7-24 24v48c0 13.3 10.7 24 24 24s24-10.7 24-24zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120v256c0 75.1 60.9 136 136 136h224c13.3 0 24-10.7 24-24s-10.7-24-24-24H136c-48.6 0-88-39.4-88-88z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M448 64c0-35.3-28.7-64-64-64H237.3c-17 0-33.3 6.7-45.3 18.7L114.7 96c-12 12-18.7 28.3-18.7 45.3V352c0 35.3 28.7 64 64 64h224c35.3 0 64-28.7 64-64zM304 88v48c0 13.3-10.7 24-24 24s-24-10.7-24-24V88c0-13.3 10.7-24 24-24s24 10.7 24 24m80 0v48c0 13.3-10.7 24-24 24s-24-10.7-24-24V88c0-13.3 10.7-24 24-24s24 10.7 24 24"
                />
              </svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
