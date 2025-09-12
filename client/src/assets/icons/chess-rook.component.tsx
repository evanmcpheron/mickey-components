import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ChessRookIcon: React.FC<
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
                  d="M32 192V48c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16v40c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8V48c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16v40c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8V48c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16v144c0 10.1-4.7 19.6-12.8 25.6L352 256l16 144H80l16-144-51.2-38.4c-8.1-6-12.8-15.5-12.8-25.6m176 96h32c8.8 0 16-7.2 16-16v-48c0-17.7-14.3-32-32-32s-32 14.3-32 32v48c0 8.8 7.2 16 16 16M22.6 473.4 64 432h320l41.4 41.4c4.2 4.2 6.6 10 6.6 16 0 12.5-10.1 22.6-22.6 22.6H38.6C26.1 512 16 501.9 16 489.4c0-6 2.4-11.8 6.6-16"
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
                  d="M80 80v112c0 2.5 1.2 4.9 3.2 6.4l51.2 38.4c6.8 5.1 10.4 13.4 9.5 21.9L133.5 352H85.2l9.4-85-40.2-30.2C40.3 226.2 32 209.6 32 192V72c0-22.1 17.9-40 40-40h304c22.1 0 40 17.9 40 40v120c0 17.6-8.3 34.2-22.4 44.8L353.4 267l9.4 85h-48.3l-10.4-93.3c-.9-8.4 2.7-16.8 9.5-21.9l51.2-38.4c2-1.5 3.2-3.9 3.2-6.4V80h-64v24c0 13.3-10.7 24-24 24s-24-10.7-24-24V80h-64v24c0 13.3-10.7 24-24 24s-24-10.7-24-24V80zm4.7 384h278.6l-16.6-32H101.2zm271.9-80c12 0 22.9 6.7 28.4 17.3l26.5 51.2c3 5.8 4.6 12.2 4.6 18.7 0 22.5-18.2 40.8-40.8 40.8H72.8C50.2 512 32 493.8 32 471.2c0-6.5 1.6-12.9 4.6-18.7l26.5-51.2c5.4-10.6 16.4-17.3 28.4-17.3h265zM208 288c-8.8 0-16-7.2-16-16v-48c0-17.7 14.3-32 32-32s32 14.3 32 32v48c0 8.8-7.2 16-16 16z"
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
                  d="M64 32c-17.7 0-32 14.3-32 32v121.3c0 14 6.1 27.3 16.8 36.4L87.6 255l-5.1 97h32l5.5-103.2c.3-5-1.8-9.8-5.6-13l-44.8-38.4c-3.5-3-5.6-7.5-5.6-12.1V64h80v40c0 8.8 7.2 16 16 16s16-7.2 16-16V64h96v40c0 8.8 7.2 16 16 16s16-7.2 16-16V64h80v121.3c0 4.7-2 9.1-5.6 12.1l-44.8 38.4c-3.8 3.2-5.8 8-5.6 13l5.5 103.2h32l-5.1-97 38.8-33.3c10.6-9.1 16.8-22.4 16.8-36.4V64c0-17.7-14.3-32-32-32zm160 128c-26.5 0-48 21.5-48 48v64c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-64c0-26.5-21.5-48-48-48m-16 48c0-8.8 7.2-16 16-16s16 7.2 16 16v48h-32zM97.8 416h252.4l32.7 52.7c.7 1.2 1.1 2.5 1.1 3.9 0 4.1-3.3 7.4-7.4 7.4H71.4c-4.1 0-7.4-3.3-7.4-7.4 0-1.4.4-2.7 1.1-3.9zm252.4-32H97.8c-11.1 0-21.4 5.7-27.2 15.1l-32.7 52.7c-3.8 6.2-5.9 13.4-5.9 20.8 0 21.7 17.7 39.4 39.4 39.4h305.2c21.8 0 39.4-17.7 39.4-39.4 0-7.3-2.1-14.5-5.9-20.8l-32.7-52.7c-5.8-9.4-16.1-15.1-27.2-15.1"
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
                  d="M48 56c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v24c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24V56c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v24c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24V56c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v130.7c0 6.4-2.5 12.5-7 17l-46.6 46.6c-1.6 1.6-2.5 3.8-2.3 6.1l7 127.6h16l-6.9-124.9 44.1-44.1c7.5-7.5 11.7-17.7 11.7-28.3V56c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24v24c0 4.4-3.6 8-8 8h-32c-4.4 0-8-3.6-8-8V56c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24v24c0 4.4-3.6 8-8 8h-32c-4.4 0-8-3.6-8-8V56c0-13.3-10.7-24-24-24H56c-13.3 0-24 10.7-24 24v130.7c0 10.6 4.2 20.8 11.7 28.3l44.1 44.1L80.9 384h16l7.1-127.6c.1-2.3-.7-4.5-2.3-6.1L55 203.7c-4.5-4.5-7-10.6-7-17zm136 160v64c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8v-64c0-22.1-17.9-40-40-40s-40 17.9-40 40m40-24c13.3 0 24 10.7 24 24v56h-48v-56c0-13.3 10.7-24 24-24M94.3 432h259.4c4.5 0 8.9 1.9 11.9 5.3l30.6 33.9c2.5 2.7 3.8 6.3 3.8 9.9 0 8.2-6.6 14.8-14.8 14.8H62.8c-8.2 0-14.8-6.6-14.8-14.8 0-3.7 1.4-7.2 3.8-9.9l30.6-33.9c3-3.4 7.4-5.3 11.9-5.3m313.8 28.5-30.6-33.9c-6.1-6.7-14.7-10.6-23.8-10.6H94.3c-9.1 0-17.7 3.8-23.8 10.6l-30.6 33.9c-5.1 5.7-7.9 13-7.9 20.6 0 17 13.8 30.8 30.8 30.8h322.4c17 0 30.8-13.8 30.8-30.8 0-7.6-2.8-15-7.9-20.6"
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
                  d="M368 432H80l-41.4 41.4c-4.2 4.2-6.6 10-6.6 16 0 12.5 10.1 22.6 22.6 22.6h338.8c12.5 0 22.6-10.1 22.6-22.6 0-6-2.4-11.8-6.6-16z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M32 48v144c0 10.1 4.7 19.6 12.8 25.6L96 256 80 432h288l-16-176 51.2-38.4c8.1-6 12.8-15.5 12.8-25.6V48c0-8.8-7.2-16-16-16h-64c-8.8 0-16 7.2-16 16v40c0 4.4-3.6 8-8 8h-32c-4.4 0-8-3.6-8-8V48c0-8.8-7.2-16-16-16h-64c-8.8 0-16 7.2-16 16v40c0 4.4-3.6 8-8 8h-32c-4.4 0-8-3.6-8-8V48c0-8.8-7.2-16-16-16H48c-8.8 0-16 7.2-16 16m160 256v-48c0-17.7 14.3-32 32-32s32 14.3 32 32v48c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16"
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
