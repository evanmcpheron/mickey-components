import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const Transporter6Icon: React.FC<
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
                  d="M56.7 6.6 64 32l25.4 7.3c3.9 1.1 6.6 4.6 6.6 8.7s-2.7 7.6-6.6 8.7L64 64l-7.3 25.4C55.6 93.3 52.1 96 48 96s-7.6-2.7-8.7-6.6L32 64 6.6 56.7C2.7 55.6 0 52.1 0 48s2.7-7.6 6.6-8.7L32 32l7.3-25.4C40.4 2.7 43.9 0 48 0s7.6 2.7 8.7 6.6M384 512H128c-17.7 0-32-14.3-32-32s14.3-32 32-32h256c17.7 0 32 14.3 32 32s-14.3 32-32 32m96-128 25.4 7.3c3.9 1.1 6.6 4.7 6.6 8.7s-2.7 7.6-6.6 8.7L480 416l-7.3 25.4c-1.1 3.9-4.7 6.6-8.7 6.6s-7.6-2.7-8.7-6.6L448 416l-25.4-7.3c-3.9-1.1-6.6-4.7-6.6-8.7s2.7-7.6 6.6-8.7L448 384l7.3-25.4c1.1-3.9 4.7-6.6 8.7-6.6s7.6 2.7 8.7 6.6zM224 0h64c8.8 0 16 7.2 16 16s-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16s7.2-16 16-16M112 256h288c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16"
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
                  d="M56.7 6.6 64 32l25.4 7.3c3.9 1.1 6.6 4.6 6.6 8.7s-2.7 7.6-6.6 8.7L64 64l-7.3 25.4C55.6 93.3 52.1 96 48 96s-7.6-2.7-8.7-6.6L32 64 6.6 56.7C2.7 55.6 0 52.1 0 48s2.7-7.6 6.6-8.7L32 32l7.3-25.4C40.4 2.7 43.9 0 48 0s7.6 2.7 8.7 6.6m416 352L480 384l25.4 7.3c3.9 1.1 6.6 4.7 6.6 8.7s-2.7 7.6-6.6 8.7L480 416l-7.3 25.4c-1.1 3.9-4.7 6.6-8.7 6.6s-7.6-2.7-8.7-6.6L448 416l-25.4-7.3c-3.9-1.1-6.6-4.7-6.6-8.7s2.7-7.6 6.6-8.7L448 384l7.3-25.4c1.1-3.9 4.7-6.6 8.7-6.6s7.6 2.7 8.7 6.6M96 488c0-13.3 10.7-24 24-24h272c13.3 0 24 10.7 24 24s-10.7 24-24 24H120c-13.3 0-24-10.7-24-24M224 0h64c8.8 0 16 7.2 16 16s-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16s7.2-16 16-16M112 256h288c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16"
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
                  d="M48 0c-8.8 0-16 7.2-16 16v16H16C7.2 32 0 39.2 0 48s7.2 16 16 16h16v16c0 8.8 7.2 16 16 16s16-7.2 16-16V64h16c8.8 0 16-7.2 16-16s-7.2-16-16-16H64V16c0-8.8-7.2-16-16-16m416 352c-8.8 0-16 7.2-16 16v16h-16c-8.8 0-16 7.2-16 16s7.2 16 16 16h16v16c0 8.8 7.2 16 16 16s16-7.2 16-16v-16h16c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16v-16c0-8.8-7.2-16-16-16M208 16c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16h-64c-8.8 0-16 7.2-16 16M96 272c0 8.8 7.2 16 16 16h288c8.8 0 16-7.2 16-16s-7.2-16-16-16H112c-8.8 0-16 7.2-16 16m32 224c0-8.8 7.2-16 16-16h224c8.8 0 16 7.2 16 16s7.2 16 16 16 16-7.2 16-16c0-26.5-21.5-48-48-48H144c-26.5 0-48 21.5-48 48 0 8.8 7.2 16 16 16s16-7.2 16-16"
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
                  d="M56 8c0-4.4-3.6-8-8-8s-8 3.6-8 8v32H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h32v32c0 4.4 3.6 8 8 8s8-3.6 8-8V56h32c4.4 0 8-3.6 8-8s-3.6-8-8-8H56zm416 352c0-4.4-3.6-8-8-8s-8 3.6-8 8v32h-32c-4.4 0-8 3.6-8 8s3.6 8 8 8h32v32c0 4.4 3.6 8 8 8s8-3.6 8-8v-32h32c4.4 0 8-3.6 8-8s-3.6-8-8-8h-32zM112 496c0-17.7 14.3-32 32-32h224c17.7 0 32 14.3 32 32v8c0 4.4 3.6 8 8 8s8-3.6 8-8v-8c0-26.5-21.5-48-48-48H144c-26.5 0-48 21.5-48 48v8c0 4.4 3.6 8 8 8s8-3.6 8-8zM96 264c0 4.4 3.6 8 8 8h304c4.4 0 8-3.6 8-8s-3.6-8-8-8H104c-4.4 0-8 3.6-8 8M232 0c-4.4 0-8 3.6-8 8s3.6 8 8 8h48c4.4 0 8-3.6 8-8s-3.6-8-8-8z"
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
                  d="M64 32 56.7 6.6C55.6 2.7 52.1 0 48 0s-7.6 2.7-8.7 6.6L32 32 6.6 39.3C2.7 40.4 0 43.9 0 48s2.7 7.6 6.6 8.7L32 64l7.3 25.4c1.1 3.9 4.6 6.6 8.7 6.6s7.6-2.7 8.7-6.6L64 64l25.4-7.3c3.9-1.1 6.6-4.6 6.6-8.7s-2.7-7.6-6.6-8.7zm416 352-7.3-25.4c-1.1-3.9-4.7-6.6-8.7-6.6s-7.6 2.7-8.7 6.6L448 384l-25.4 7.3c-3.9 1.1-6.6 4.7-6.6 8.7s2.7 7.6 6.6 8.7L448 416l7.3 25.4c1.1 3.9 4.7 6.6 8.7 6.6s7.6-2.7 8.7-6.6L480 416l25.4-7.3c3.9-1.1 6.6-4.7 6.6-8.7s-2.7-7.6-6.6-8.7zM224 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16zM112 256c-8.8 0-16 7.2-16 16s7.2 16 16 16h288c8.8 0 16-7.2 16-16s-7.2-16-16-16z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M96 480c0-17.7 14.3-32 32-32h256c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32-14.3-32-32"
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
