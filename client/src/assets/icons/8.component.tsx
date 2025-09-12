import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const Icon8: React.FC<
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
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M304 160c0-70.7-57.3-128-128-128h-32C73.3 32 16 89.3 16 160c0 34.6 13.7 66 36 89-31.5 23.3-52 60.8-52 103 0 70.7 57.3 128 128 128h64c70.7 0 128-57.3 128-128 0-42.2-20.5-79.7-52-103 22.3-23 36-54.4 36-89M176.1 288H192c35.3 0 64 28.7 64 64s-28.7 64-64 64h-64c-35.3 0-64-28.7-64-64s28.7-64 64-64h48.1m0-64H144c-35.3 0-64-28.7-64-64s28.7-64 64-64h32c35.3 0 64 28.7 64 64s-28.6 64-64 64z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M304 156c0-68.5-55.5-124-124-124h-40C71.5 32 16 87.5 16 156c0 37.7 16.8 71.4 43.3 94.2C23.7 272 0 311.2 0 356c0 68.5 55.5 124 124 124h72c68.5 0 124-55.5 124-124 0-44.8-23.7-84-59.3-105.8 26.5-22.8 43.3-56.5 43.3-94.2M180.1 280H196c42 0 76 34 76 76s-34 76-76 76h-72c-42 0-76-34-76-76s34-76 76-76h56.1m0-48H140c-42 0-76-34-76-76s34-76 76-76h40c42 0 76 34 76 76s-34 76-76 76z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M304 152c0-66.3-53.7-120-120-120h-48C69.7 32 16 85.7 16 152c0 41.4 20.9 77.9 52.8 99.4C28.1 270.6 0 312 0 360c0 66.3 53.7 120 120 120h80c66.3 0 120-53.7 120-120 0-48-28.1-89.4-68.8-108.6 31.9-21.5 52.8-58 52.8-99.4M184.1 272H200c48.6 0 88 39.4 88 88s-39.4 88-88 88h-80c-48.6 0-88-39.4-88-88s39.4-88 88-88h64.1m0-32h-48.2C87.4 240 48 200.6 48 152s39.4-88 88-88h48c48.6 0 88 39.4 88 88s-39.4 88-87.9 88"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M296 148c0-64.1-51.9-116-116-116h-40C75.9 32 24 83.9 24 148c0 45.2 25.9 84.4 63.6 103.5C37.3 264.2 0 309.7 0 364c0 64.1 51.9 116 116 116h88c64.1 0 116-51.9 116-116 0-54.3-37.3-99.8-87.6-112.5C270.1 232.4 296 193.2 296 148M180.1 264H204c55.2 0 100 44.8 100 100s-44.8 100-100 100h-88c-55.2 0-100-44.8-100-100s44.8-100 100-100h64.1m0-16h-40.2C84.7 248 40 203.2 40 148S84.8 48 140 48h40c55.2 0 100 44.8 100 100s-44.7 100-99.9 100"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M304 160c0-70.7-57.3-128-128-128h-32C73.3 32 16 89.3 16 160c0 34.6 13.7 66 36 89-31.5 23.3-52 60.8-52 103 0 70.7 57.3 128 128 128h64c70.7 0 128-57.3 128-128 0-42.2-20.5-79.7-52-103 22.3-23 36-54.4 36-89M176.1 288H192c35.3 0 64 28.7 64 64s-28.7 64-64 64h-64c-35.3 0-64-28.7-64-64s28.7-64 64-64h48.1m0-64H144c-35.3 0-64-28.7-64-64s28.7-64 64-64h32c35.3 0 64 28.7 64 64s-28.6 64-64 64z"
                />
                <path className="aps-icon-foreground" d="" />
              </svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
