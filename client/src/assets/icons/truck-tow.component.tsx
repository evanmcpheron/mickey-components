import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const TruckTowIcon: React.FC<
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
                  d="M96 0h49.6c9.1 0 17.8 3.9 23.9 10.7L384 252V128c0-17.7 14.3-32 32-32h82.7c17 0 33.3 6.7 45.3 18.7l77.3 77.3c12 12 18.7 28.3 18.7 45.3V376c0 22.1-17.9 40-40 40h-24c0 53-43 96-96 96s-96-43-96-96H256c0 53-43 96-96 96s-96-43-96-96H48c-26.5 0-48-21.5-48-48v-64c0-26.5 21.5-48 48-48h144L96 64v112c0 26.5-21.5 48-48 48S0 202.5 0 176v-16c0-8.8 7.2-16 16-16s16 7.2 16 16v16c0 8.8 7.2 16 16 16s16-7.2 16-16V32C64 14.3 78.3 0 96 0m480 256v-18.7L498.7 160H448v96zM208 416a48 48 0 1 0-96 0 48 48 0 1 0 96 0m272 48a48 48 0 1 0 0-96 48 48 0 1 0 0 96"
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
                  d="M96 64v96c0 26.5-21.5 48-48 48S0 186.5 0 160v-16c0-8.8 7.2-16 16-16s16 7.2 16 16v16c0 8.8 7.2 16 16 16s16-7.2 16-16V32c0-11.8 6.4-22.2 16-27.7C84.7 1.6 90.2 0 96 0h49.7c9.1 0 17.8 3.9 23.9 10.7L373.3 240H384v-88c0-30.9 25.1-56 56-56h50.1c20.9 0 40.7 9.1 54.4 24.8l81.8 94.4c8.8 10.2 13.7 23.2 13.7 36.7V360c0 30.9-25.1 56-56 56h-8c0 53-43 96-96 96s-96-43-96-96H256c0 53-43 96-96 96s-96-43-96-96h-8c-30.9 0-56-25.1-56-56v-64c0-30.9 25.1-56 56-56h128zm147.2 304h153.6c16.6-28.7 47.6-48 83.2-48s66.6 19.3 83.2 48H584c4.4 0 8-3.6 8-8v-72H56c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h20.8c16.6-28.7 47.6-48 83.2-48s66.6 19.3 83.2 48M145.8 56.3 237.7 240h71.4zM584.2 240l-76-87.7c-4.6-5.3-11.2-8.3-18.1-8.3H440c-4.4 0-8 3.6-8 8v88zM208 416a48 48 0 1 0-96 0 48 48 0 1 0 96 0m272 48a48 48 0 1 0 0-96 48 48 0 1 0 0 96"
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
                  d="M96 64v112c0 26.5-21.5 48-48 48S0 202.5 0 176v-16c0-8.8 7.2-16 16-16s16 7.2 16 16v16c0 8.8 7.2 16 16 16s16-7.2 16-16V32c0-11.8 6.4-22.2 16-27.7C84.7 1.6 90.2 0 96 0h49.7c9.1 0 17.8 3.9 23.9 10.7L384 252V144c0-26.5 21.5-48 48-48h56.5c19.8 0 38.4 9.1 50.5 24.7l90.8 116.8c6.6 8.4 10.1 18.8 10.1 29.5v101c0 26.5-21.5 48-48 48H576c0 53-43 96-96 96s-96-43-96-96H256c0 53-43 96-96 96s-96-43-96-96H48c-26.5 0-48-21.5-48-48v-64c0-26.5 21.5-48 48-48h144zm154.5 320h139c13.2-37.3 48.7-64 90.5-64s77.4 26.7 90.5 64H592c8.8 0 16-7.2 16-16v-80H48c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h21.5c13.2-37.3 48.7-64 90.5-64s77.4 26.7 90.5 64M416 416a64 64 0 1 0 128 0 64 64 0 1 0-128 0m97.8-275.6c-6.1-7.8-15.4-12.4-25.3-12.4H432c-8.8 0-16 7.2-16 16v112h187.7zM145.6 32h-29.9l112 224h117zM224 416a64 64 0 1 0-128 0 64 64 0 1 0 128 0"
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
                  d="M209.9 256h156.2L157.6 21.4c-3-3.4-7.4-5.4-12-5.4H96c-2 0-3.9.4-5.6 1l3.9 7.8zm174.1-4V152c0-22.1 17.9-40 40-40h66.3c16.1 0 31.4 6.9 42 18.9L630 241.6c6.4 7.3 10 16.7 10 26.5V376c0 22.1-17.9 40-40 40h-24c0 53-43 96-96 96s-96-43-96-96H256c0 53-43 96-96 96s-96-43-96-96H40c-22.1 0-40-17.9-40-40v-80c0-22.1 17.9-40 40-40h152L80 32v136c0 22.1-17.9 40-40 40S0 190.1 0 168v-16c0-4.4 3.6-8 8-8s8 3.6 8 8v16c0 13.3 10.7 24 24 24s24-10.7 24-24V32c0-5.8 1.6-11.3 4.3-16C73.8 6.4 84.2 0 96 0h49.6c9.1 0 17.8 3.9 23.9 10.7zm1.3 148c7.6-45.4 47.1-80 94.7-80s87.1 34.6 94.7 80H600c13.3 0 24-10.7 24-24V272H40c-13.3 0-24 10.7-24 24v80c0 13.3 10.7 24 24 24h25.3c7.6-45.4 47.1-80 94.7-80s87.1 34.6 94.7 80zm235.4-144c-.8-1.3-1.7-2.6-2.7-3.8l-97.7-110.7c-7.6-8.6-18.5-13.5-30-13.5H424c-13.3 0-24 10.7-24 24v104zM240 416a80 80 0 1 0-160 0 80 80 0 1 0 160 0m240 80a80 80 0 1 0 0-160 80 80 0 1 0 0 160"
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
                  d="M96 0h49.5c9.2 0 18 4 24.1 10.9L384 256H192L96 64v112c0 26.5-21.5 48-48 48S0 202.5 0 176v-16c0-8.8 7.2-16 16-16s16 7.2 16 16v16c0 8.8 7.2 16 16 16s16-7.2 16-16V32C64 14.3 78.3 0 96 0m0 432a80 80 0 1 1 160 0 80 80 0 1 1-160 0m400-80a80 80 0 1 1 0 160 80 80 0 1 1 0-160"
                />
                <path
                  className="aps-icon-foreground"
                  d="M416 96c-17.7 0-32 14.3-32 32v128H48c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h17.1c7.8-54.3 54.4-96 110.9-96s103.1 41.7 110.9 96h98.2c7.8-54.3 54.4-96 110.9-96 56.2 0 102.8 41.4 110.8 95.4 18.9-3.2 33.2-19.6 33.2-39.4V237.3c0-17-6.7-33.3-18.7-45.3L544 114.7c-12-12-28.3-18.7-45.3-18.7zm160 160H448v-96h50.7l77.3 77.3z"
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
