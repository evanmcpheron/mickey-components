import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const Transporter7Icon: React.FC<
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
                  d="M472.7 38.6c-1.1-3.9-4.7-6.6-8.7-6.6s-7.6 2.7-8.7 6.6L448 64l-25.4 7.3c-3.9 1.1-6.6 4.7-6.6 8.7s2.7 7.6 6.6 8.7L448 96l7.3 25.4c1.1 3.9 4.7 6.6 8.7 6.6s7.6-2.7 8.7-6.6L480 96l25.4-7.3c3.9-1.1 6.6-4.7 6.6-8.7s-2.7-7.6-6.6-8.7L480 64zM64 288l-7.3-25.4c-1.1-3.9-4.7-6.6-8.7-6.6s-7.6 2.7-8.7 6.6L32 288l-25.4 7.3C2.7 296.4 0 299.9 0 304s2.7 7.6 6.6 8.7L32 320l7.3 25.4c1.1 3.9 4.7 6.6 8.7 6.6s7.6-2.7 8.7-6.6L64 320l25.4-7.3c3.9-1.1 6.6-4.7 6.6-8.7s-2.7-7.6-6.6-8.7zm232 224h88c17.7 0 32-14.3 32-32s-14.3-32-32-32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32h168"
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
                  d="m480 64-7.3-25.4c-1.1-3.9-4.7-6.6-8.7-6.6s-7.6 2.7-8.7 6.6L448 64l-25.4 7.3c-3.9 1.1-6.6 4.7-6.6 8.7s2.7 7.6 6.6 8.7L448 96l7.3 25.4c1.1 3.9 4.7 6.6 8.7 6.6s7.6-2.7 8.7-6.6L480 96l25.4-7.3c3.9-1.1 6.6-4.7 6.6-8.7s-2.7-7.6-6.6-8.7zM64 288l-7.3-25.4c-1.1-3.9-4.7-6.6-8.7-6.6s-7.6 2.7-8.7 6.6L32 288l-25.4 7.3C2.7 296.4 0 299.9 0 304s2.7 7.6 6.6 8.7L32 320l7.3 25.4c1.1 3.9 4.7 6.6 8.7 6.6s7.6-2.7 8.7-6.6L64 320l25.4-7.3c3.9-1.1 6.6-4.7 6.6-8.7s-2.7-7.6-6.6-8.7zm56 176c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24z"
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
                  d="M480 48c0-8.8-7.2-16-16-16s-16 7.2-16 16v16h-16c-8.8 0-16 7.2-16 16s7.2 16 16 16h16v16c0 8.8 7.2 16 16 16s16-7.2 16-16V96h16c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16zM64 272c0-8.8-7.2-16-16-16s-16 7.2-16 16v16H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h16v16c0 8.8 7.2 16 16 16s16-7.2 16-16v-16h16c8.8 0 16-7.2 16-16s-7.2-16-16-16H64zm64 224c0-8.8 7.2-16 16-16h224c8.8 0 16 7.2 16 16s7.2 16 16 16 16-7.2 16-16c0-26.5-21.5-48-48-48H144c-26.5 0-48 21.5-48 48 0 8.8 7.2 16 16 16s16-7.2 16-16"
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
                  d="M472 40c0-4.4-3.6-8-8-8s-8 3.6-8 8v32h-32c-4.4 0-8 3.6-8 8s3.6 8 8 8h32v32c0 4.4 3.6 8 8 8s8-3.6 8-8V88h32c4.4 0 8-3.6 8-8s-3.6-8-8-8h-32zM56 264c0-4.4-3.6-8-8-8s-8 3.6-8 8v32H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h32v32c0 4.4 3.6 8 8 8s8-3.6 8-8v-32h32c4.4 0 8-3.6 8-8s-3.6-8-8-8H56zm56 232c0-17.7 14.3-32 32-32h224c17.7 0 32 14.3 32 32v8c0 4.4 3.6 8 8 8s8-3.6 8-8v-8c0-26.5-21.5-48-48-48H144c-26.5 0-48 21.5-48 48v8c0 4.4 3.6 8 8 8s8-3.6 8-8z"
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
                  d="M472.7 38.6 480 64l25.4 7.3c3.9 1.1 6.6 4.7 6.6 8.7s-2.7 7.6-6.6 8.7L480 96l-7.3 25.4c-1.1 3.9-4.7 6.6-8.7 6.6s-7.6-2.7-8.7-6.6L448 96l-25.4-7.3c-3.9-1.1-6.6-4.7-6.6-8.7s2.7-7.6 6.6-8.7L448 64l7.3-25.4c1.1-3.9 4.7-6.6 8.7-6.6s7.6 2.7 8.7 6.6m-416 224L64 288l25.4 7.3c3.9 1.1 6.6 4.7 6.6 8.7s-2.7 7.6-6.6 8.7L64 320l-7.3 25.4c-1.1 3.9-4.7 6.6-8.7 6.6s-7.6-2.7-8.7-6.6L32 320l-25.4-7.3C2.7 311.6 0 308.1 0 304s2.7-7.6 6.6-8.7L32 288l7.3-25.4c1.1-3.9 4.7-6.6 8.7-6.6s7.6 2.7 8.7 6.6"
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
