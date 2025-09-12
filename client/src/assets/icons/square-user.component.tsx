import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SquareUserIcon: React.FC<
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
                  d="M81.1 416h285.8c-7.8-54.3-54.4-96-110.9-96h-64c-56.4 0-103.1 41.7-110.9 96M0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm224 176a72 72 0 1 0 0-144 72 72 0 1 0 0 144"
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
                  d="M384 80c8.8 0 16 7.2 16 16v320c0 8.8-7.2 16-16 16h-1c-7.9-63.1-61.7-112-127-112h-64c-65.3 0-119.1 48.9-127 112h-1c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16zm-49.6 352H113.6c7.4-36.5 39.7-64 78.4-64h64c38.7 0 71 27.5 78.4 64M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm160 208a40 40 0 1 1 0-80 40 40 0 1 1 0 80m-88-40a88 88 0 1 0 176 0 88 88 0 1 0-176 0"
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
                  d="M384 64c17.7 0 32 14.3 32 32v320c0 17.7-14.3 32-32 32 0-70.7-57.3-128-128-128h-64c-70.7 0-128 57.3-128 128-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32zm-32 384H96c0-53 43-96 96-96h64c53 0 96 43 96 96M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm160 224a48 48 0 1 1 0-96 48 48 0 1 1 0 96m-80-48a80 80 0 1 0 160 0 80 80 0 1 0-160 0"
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
                  d="M384 48c26.5 0 48 21.5 48 48v320c0 26.5-21.5 48-48 48v-16c0-70.7-57.3-128-128-128h-64c-70.7 0-128 57.3-128 128v16c-26.5 0-48-21.5-48-48V96c0-26.5 21.5-48 48-48zm-16 416H80v-16c0-61.9 50.1-112 112-112h64c61.9 0 112 50.1 112 112zM64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm240 176a80 80 0 1 0-160 0 80 80 0 1 0 160 0m-80-64a64 64 0 1 1 0 128 64 64 0 1 1 0-128"
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
                  d="M81.1 416h285.8c-7.8-54.3-54.4-96-110.9-96h-64c-56.4 0-103.1 41.7-110.9 96M0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm224 176a72 72 0 1 0 0-144 72 72 0 1 0 0 144"
                />
                <path
                  className="aps-icon-foreground"
                  d="M152 200a72 72 0 1 1 144 0 72 72 0 1 1-144 0M81.1 416c7.8-54.3 54.4-96 110.9-96h64c56.4 0 103.1 41.7 110.9 96z"
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
