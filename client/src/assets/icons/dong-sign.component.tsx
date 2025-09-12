import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const DongSignIcon: React.FC<
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
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M288 32c-17.7 0-32 14.3-32 32h-32c-17.7 0-32 14.3-32 32s14.3 32 32 32h32v49.1c-18.8-10.9-40.7-17.1-64-17.1-70.7 0-128 57.3-128 128s57.3 128 128 128c24.5 0 47.4-6.9 66.8-18.8 5 11.1 16.2 18.8 29.2 18.8 17.7 0 32-14.3 32-32V128c17.7 0 32-14.3 32-32s-14.3-32-32-32c0-17.7-14.3-32-32-32M128 288a64 64 0 1 1 128 0 64 64 0 1 1-128 0M32 448c-17.7 0-32 14.3-32 32s14.3 32 32 32h320c17.7 0 32-14.3 32-32s-14.3-32-32-32z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M296 32c-13.3 0-24 10.7-24 24v8h-56c-13.3 0-24 10.7-24 24s10.7 24 24 24h56v76.1c-21.9-17.6-49.7-28.1-80-28.1-70.7 0-128 57.3-128 128s57.3 128 128 128c30.3 0 58.1-10.5 80-28.1v4.1c0 13.3 10.7 24 24 24s24-10.7 24-24V112h8c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8v-8c0-13.3-10.7-24-24-24M112 288a80 80 0 1 1 160 0 80 80 0 1 1-160 0M24 448c-13.3 0-24 10.7-24 24s10.7 24 24 24h336c13.3 0 24-10.7 24-24s-10.7-24-24-24z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M304 32c-8.8 0-16 7.2-16 16v16h-80c-8.8 0-16 7.2-16 16s7.2 16 16 16h80v107.3c-23.5-26.6-57.8-43.3-96-43.3-70.7 0-128 57.3-128 128s57.3 128 128 128c38.2 0 72.5-16.8 96-43.3V400c0 8.8 7.2 16 16 16s16-7.2 16-16V96h16c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16V48c0-8.8-7.2-16-16-16M96 288a96 96 0 1 1 192 0 96 96 0 1 1-192 0M16 448c-8.8 0-16 7.2-16 16s7.2 16 16 16h352c8.8 0 16-7.2 16-16s-7.2-16-16-16z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M312 32c-4.4 0-8 3.6-8 8v40H200c-4.4 0-8 3.6-8 8s3.6 8 8 8h104v130c-21.8-39.4-63.8-66-112-66-70.7 0-128 57.3-128 128s57.3 128 128 128c48.2 0 90.2-26.6 112-66v58c0 4.4 3.6 8 8 8s8-3.6 8-8V96h24c4.4 0 8-3.6 8-8s-3.6-8-8-8h-24V40c0-4.4-3.6-8-8-8M80 288a112 112 0 1 1 224 0 112 112 0 1 1-224 0M8 464c-4.4 0-8 3.6-8 8s3.6 8 8 8h368c4.4 0 8-3.6 8-8s-3.6-8-8-8z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M256 64v64h-32c-17.7 0-32-14.3-32-32s14.3-32 32-32zm64 64V64c17.7 0 32 14.3 32 32s-14.3 32-32 32M0 480c0-17.7 14.3-32 32-32h320c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32"
                />
                <path
                  className="aps-icon-foreground"
                  d="M288 32c-17.7 0-32 14.3-32 32v113.1c-18.8-10.9-40.7-17.1-64-17.1-70.7 0-128 57.3-128 128s57.3 128 128 128c24.5 0 47.4-6.9 66.8-18.8 5 11.1 16.2 18.8 29.2 18.8 17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32M128 288a64 64 0 1 1 128 0 64 64 0 1 1-128 0"
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
