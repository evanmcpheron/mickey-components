import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const RvIcon: React.FC<
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
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M224 16c0-8.8 7.2-16 16-16h128c8.8 0 16 7.2 16 16v16h128c53 0 96 43 96 96 0 17.7-14.3 32-32 32H384v256H254.4c1 5.2 1.6 10.5 1.6 16 0 44.2-35.8 80-80 80s-80-35.8-80-80c0-5.5.6-10.8 1.6-16H96l-77.3-77.3C6.7 326.7 0 310.5 0 293.5V96c0-35.3 28.7-64 64-64h160zM112 128c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16zm96 304a32 32 0 1 0-64 0 32 32 0 1 0 64 0m288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64m-80-48V192h100.6c12.9 0 25.5 4.5 35.5 12.7l67.4 55.2c13 10.6 20.5 26.5 20.5 43.3V384c0 17.7-14.3 32-32 32h-33.6c1 5.2 1.6 10.5 1.6 16 0 44.2-35.8 80-80 80s-80-35.8-80-80zm162.1-128-56.5-46.2c-1.4-1.2-3.2-1.8-5.1-1.8H464v48z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M224 24c0-13.3 10.7-24 24-24h112c13.3 0 24 10.7 24 24v8h136c48.6 0 88 39.4 88 88v40c0 22.5-15.5 41.4-36.4 46.6l53.1 41.7c9.7 7.6 15.3 19.2 15.3 31.5V376c0 22.1-17.9 40-40 40h-25.6c1 5.2 1.6 10.5 1.6 16 0 44.2-35.8 80-80 80s-80-35.8-80-80c0-5.5.6-10.8 1.6-16H254.4c1 5.2 1.6 10.5 1.6 16 0 44.2-35.8 80-80 80s-80-35.8-80-80c0-7 .9-13.7 2.6-20.1-1.3-.8-2.4-1.8-3.5-2.9l-74-74A71.98 71.98 0 0 1 0 284.1V104c0-39.8 32.2-72 72-72h152zM72 80c-13.3 0-24 10.7-24 24v180.1c0 6.4 2.5 12.5 7 17l66.9 66.9h6.1c13.4-10 30-16 48-16s34.6 6 48 16h160V184c0-13.3 10.7-24 24-24h152v-40c0-22.1-17.9-40-40-40zm484.8 176-61.1-48H432v48zM208 432a32 32 0 1 0-64 0 32 32 0 1 0 64 0m320 0a32 32 0 1 0-64 0 32 32 0 1 0 64 0M120 128h144c13.3 0 24 10.7 24 24v80c0 13.3-10.7 24-24 24H120c-13.3 0-24-10.7-24-24v-80c0-13.3 10.7-24 24-24"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M224 24c0-13.3 10.7-24 24-24h112c13.3 0 24 10.7 24 24v8h112c61.9 0 112 50.1 112 112v8c0 22.1-17.9 40-40 40h-18.4l78.4 62.7c7.6 6.1 12 15.3 12 25V384c0 17.7-14.3 32-32 32h-33.6c1 5.2 1.6 10.5 1.6 16 0 44.2-35.8 80-80 80s-80-35.8-80-80c0-5.5.6-10.8 1.6-16H254.4c1 5.2 1.6 10.5 1.6 16 0 44.2-35.8 80-80 80s-80-35.8-80-80c0-7.7 1.1-15.2 3.1-22.2l-80.4-80.4C6.7 317.4 0 301.1 0 284.1V96c0-35.3 28.7-64 64-64h160zM64 64c-17.7 0-32 14.3-32 32v188.1c0 8.5 3.4 16.6 9.4 22.6l73.6 73.6c14.6-17.3 36.5-28.3 61-28.3 26.2 0 49.4 12.6 64 32h144V176c0-8.8 7.2-16 16-16h168c4.4 0 8-3.6 8-8v-8c0-44.2-35.8-80-80-80H352V32h-96v32H64m112 320a48 48 0 1 0 0 96 48 48 0 1 0 0-96m320 0a48 48 0 1 0 0 96 48 48 0 1 0 0-96m-64 0c14.6-19.4 37.8-32 64-32s49.4 12.6 64 32h48v-96H416v96zm-16-192v64h162.4l-80-64zm-288 32h160v-64H128zm-32-72c0-13.3 10.7-24 24-24h176c13.3 0 24 10.7 24 24v80c0 13.3-10.7 24-24 24H120c-13.3 0-24-10.7-24-24z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M248 16c-4.4 0-8 3.6-8 8v8h128v-8c0-4.4-3.6-8-8-8zm-24 16v-8c0-13.3 10.7-24 24-24h112c13.3 0 24 10.7 24 24v8h126.4c53.9 0 97.6 43.7 97.6 97.6 0 16.8-13.6 30.4-30.4 30.4H408c-13.3 0-24 10.7-24 24v208c0 4.4-3.6 8-8 8h-91.3c2.2 7.6 3.3 15.7 3.3 24 0 48.6-39.4 88-88 88s-88-39.4-88-88c0-10.5 1.8-20.6 5.2-30l-94.3-69.2C8.5 314.3 0 297.5 0 279.7V88c0-30.9 25.1-56 56-56zm160 16H56c-22.1 0-40 17.9-40 40v191.7c0 12.7 6.1 24.7 16.3 32.3l91.8 67.4c15.4-26 43.6-43.4 75.9-43.4 34.2 0 63.8 19.5 78.4 48H368V184c0-22.1 17.9-40 40-40h169.6c8 0 14.4-6.4 14.4-14.4 0-45.1-36.5-81.6-81.6-81.6zM200 496a72 72 0 1 0 0-144 72 72 0 1 0 0 144m288 0a72 72 0 1 0 0-144 72 72 0 1 0 0 144m0-160a88 88 0 1 1 0 176 88 88 0 1 1 0-176M272 128H112c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h160c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16m-160-16h160c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H112c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32m304 88c0-4.4 3.6-8 8-8h93.1c8.8 0 17.4 2.9 24.4 8.3l82.9 63.8c9.8 7.6 15.6 19.3 15.6 31.7V360c0 22.1-17.9 40-40 40h-8c-4.4 0-8-3.6-8-8s3.6-8 8-8h8c13.3 0 24-10.7 24-24v-64.2c0-2.7-.4-5.3-1.3-7.8H424c-4.4 0-8-3.6-8-8s3.6-8 8-8h184.5l-76.7-59c-4.2-3.2-9.3-5-14.6-5H424c-4.4 0-8-3.6-8-8"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M176 512a64 64 0 1 0 0-128 64 64 0 1 0 0 128m320 0a64 64 0 1 0 0-128 64 64 0 1 0 0 128"
                />
                <path
                  className="aps-icon-foreground"
                  d="M224 16c0-8.8 7.2-16 16-16h128c8.8 0 16 7.2 16 16v16h128c53 0 96 43 96 96 0 17.7-14.3 32-32 32H384v256H266.5c-13.2-37.3-48.7-64-90.5-64-38.9 0-72.5 23.2-87.5 56.5l-69.8-69.8C6.7 326.7 0 310.5 0 293.5V96c0-35.3 28.7-64 64-64h160zM96 144v64c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16m320 176V192h100.6c12.9 0 25.5 4.5 35.5 12.7l67.4 55.2c13 10.6 20.5 26.5 20.5 43.3V384c0 17.7-14.3 32-32 32h-21.5c-13.2-37.3-48.7-64-90.5-64-33.4 0-62.8 17-80 42.9zm162.1-32-56.5-46.2c-1.4-1.2-3.2-1.8-5.1-1.8H464v48z"
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
