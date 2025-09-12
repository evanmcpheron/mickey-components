import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ListOlIcon: React.FC<
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
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M24 56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v120h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H40c-13.3 0-24-10.7-24-24s10.7-24 24-24h16V80h-8c-13.3 0-24-10.7-24-24m62.7 285.2c-6.5-7.4-18.3-6.9-24 1.2l-11.2 15.5c-7.7 10.8-22.7 13.3-33.5 5.6S4.7 340.8 12.4 330l11.1-15.6c23.7-33.2 72.3-35.6 99.2-4.9 21.3 24.4 20.8 60.9-1.1 84.7L86.8 432H120c13.3 0 24 10.7 24 24s-10.7 24-24 24H32c-9.5 0-18.2-5.6-22-14.4s-2.1-18.9 4.3-25.9l72-78c5.3-5.8 5.4-14.6.3-20.5zM224 64h256c17.7 0 32 14.3 32 32s-14.3 32-32 32H224c-17.7 0-32-14.3-32-32s14.3-32 32-32m0 160h256c17.7 0 32 14.3 32 32s-14.3 32-32 32H224c-17.7 0-32-14.3-32-32s14.3-32 32-32m0 160h256c17.7 0 32 14.3 32 32s-14.3 32-32 32H224c-17.7 0-32-14.3-32-32s14.3-32 32-32"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M24 56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v120h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H40c-13.3 0-24-10.7-24-24s10.7-24 24-24h16V80h-8c-13.3 0-24-10.7-24-24m62.7 285.2c-6.5-7.4-18.3-6.9-24 1.2l-11.2 15.5c-7.7 10.8-22.7 13.3-33.5 5.6S4.7 340.8 12.4 330l11.1-15.6c23.7-33.2 72.3-35.6 99.2-4.9 21.3 24.4 20.8 60.9-1.1 84.7L86.8 432H120c13.3 0 24 10.7 24 24s-10.7 24-24 24H32c-9.5 0-18.2-5.6-22-14.4s-2.1-18.9 4.3-25.9l72-78c5.3-5.8 5.4-14.6.3-20.5zM216 72h272c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24m0 160h272c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24m0 160h272c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M32 48c0 8.8 7.2 16 16 16h16v128H32c-8.8 0-16 7.2-16 16s7.2 16 16 16h96c8.8 0 16-7.2 16-16s-7.2-16-16-16H96V48c0-8.8-7.2-16-16-16H48c-8.8 0-16 7.2-16 16m160 48c0 8.8 7.2 16 16 16h288c8.8 0 16-7.2 16-16s-7.2-16-16-16H208c-8.8 0-16 7.2-16 16m0 160c0 8.8 7.2 16 16 16h288c8.8 0 16-7.2 16-16s-7.2-16-16-16H208c-8.8 0-16 7.2-16 16m0 160c0 8.8 7.2 16 16 16h288c8.8 0 16-7.2 16-16s-7.2-16-16-16H208c-8.8 0-16 7.2-16 16M58.7 323.9c11.1-11.1 29.2-10.5 39.6 1.3 9.2 10.5 8.9 26.2-.6 36.3l-85.4 91.6c-4.3 4.7-5.5 11.5-3 17.3S17.6 480 24 480h104c8.8 0 16-7.2 16-16s-7.2-16-16-16H60.8l60.3-64.6c20.7-22.2 21.2-56.4 1.3-79.3-22.5-25.7-62.1-27.1-86.3-2.9l-15.4 15.5c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M40 48c0-4.4 3.6-8 8-8h32c4.4 0 8 3.6 8 8v160h40c4.4 0 8 3.6 8 8s-3.6 8-8 8H32c-4.4 0-8-3.6-8-8s3.6-8 8-8h40V56H48c-4.4 0-8-3.6-8-8m71.2 270.7c-13.3-15.2-36.4-16.9-51.7-3.7l-22.3 19.1c-3.4 2.9-8.4 2.5-11.3-.9s-2.5-8.4.9-11.3l22.3-19.1c22-18.9 55.1-16.5 74.2 5.3 17.9 20.5 17.4 51.1-1.2 71L42.5 464H136c4.4 0 8 3.6 8 8s-3.6 8-8 8H24c-3.2 0-6.1-1.9-7.3-4.8s-.7-6.3 1.5-8.7l92.2-98.4c13-13.8 13.3-35.2.8-49.5zM208 88h288c4.4 0 8 3.6 8 8s-3.6 8-8 8H208c-4.4 0-8-3.6-8-8s3.6-8 8-8m0 160h288c4.4 0 8 3.6 8 8s-3.6 8-8 8H208c-4.4 0-8-3.6-8-8s3.6-8 8-8m0 160h288c4.4 0 8 3.6 8 8s-3.6 8-8 8H208c-4.4 0-8-3.6-8-8s3.6-8 8-8"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M192 96c0-17.7 14.3-32 32-32h256c17.7 0 32 14.3 32 32s-14.3 32-32 32H224c-17.7 0-32-14.3-32-32m0 160c0-17.7 14.3-32 32-32h264c17.7 0 32 14.3 32 32s-14.3 32-32 32H224c-17.7 0-32-14.3-32-32m32 128h256c17.7 0 32 14.3 32 32s-14.3 32-32 32H224c-17.7 0-32-14.3-32-32s14.3-32 32-32"
                />
                <path
                  className="aps-icon-foreground"
                  d="M48 32c-13.3 0-24 10.8-24 24s10.7 24 24 24h8v96H40c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24h-16V56c0-13.3-10.7-24-24-24zm14.6 310.4c5.7-8.1 17.5-8.6 24-1.2 5.2 5.9 5 14.7-.3 20.5l-72 78c-6.5 7-8.2 17.2-4.3 25.9S22.5 480 32 480h88c13.3 0 24-10.7 24-24s-10.7-24-24-24H86.8l34.8-37.7c22-23.8 22.4-60.3 1.1-84.7-26.9-30.7-75.4-28.4-99.2 4.9l-11 15.6c-7.7 10.8-5.2 25.8 5.6 33.5s25.8 5.2 33.5-5.6l11.1-15.6z"
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
