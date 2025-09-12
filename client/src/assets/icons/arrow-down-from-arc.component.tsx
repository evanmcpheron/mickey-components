import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ArrowDownFromArcIcon: React.FC<
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
                  d="M256 64C150 64 64 150 64 256c0 17.7-14.3 32-32 32S0 273.7 0 256C0 114.6 114.6 0 256 0s256 114.6 256 256c0 17.7-14.3 32-32 32s-32-14.3-32-32c0-106-86-192-192-192M121.4 390.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l57.3 57.4V192c0-17.7 14.3-32 32-32s32 14.3 32 32v210.7l57.4-57.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-112 112c-12.5 12.5-32.8 12.5-45.3 0z"
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
                  d="M256 48C141.1 48 48 141.1 48 256c0 13.3-10.7 24-24 24S0 269.3 0 256C0 114.6 114.6 0 256 0s256 114.6 256 256c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-114.9-93.1-208-208-208M134.4 392.3c-9-9.7-8.5-24.9 1.3-33.9s24.9-8.5 33.9 1.3l62.4 67.2V184c0-13.3 10.7-24 24-24s24 10.7 24 24v242.9l62.4-67.2c9-9.7 24.2-10.3 33.9-1.3s10.3 24.2 1.3 33.9l-104 112c-4.5 4.9-10.9 7.7-17.6 7.7s-13-2.8-17.6-7.7z"
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
                  d="M256 160c8.8 0 16 7.2 16 16v277.9l100-112.5c5.9-6.6 16-7.2 22.6-1.3s7.2 16 1.3 22.6l-128 144c-3 3.4-7.4 5.4-12 5.4s-8.9-2-12-5.4l-128-144c-5.9-6.6-5.3-16.7 1.3-22.6s16.7-5.3 22.6 1.3L240 453.9V176c0-8.8 7.2-16 16-16M0 256C0 114.6 114.6 0 256 0s256 114.6 256 256c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-123.7-100.3-224-224-224S32 132.3 32 256c0 8.8-7.2 16-16 16s-16-7.2-16-16"
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
                  d="M256 16C123.5 16 16 123.5 16 256c0 4.4-3.6 8-8 8s-8-3.6-8-8C0 114.6 114.6 0 256 0s256 114.6 256 256c0 4.4-3.6 8-8 8s-8-3.6-8-8c0-132.5-107.5-240-240-240M121.9 357.2c-2.8-3.4-2.4-8.4 1-11.3s8.4-2.4 11.3 1L248 482.1V168c0-4.4 3.6-8 8-8s8 3.6 8 8v314.1l113.9-135.3c2.8-3.4 7.9-3.8 11.3-1s3.8 7.9 1 11.3l-128 152c-1.5 1.8-3.8 2.8-6.1 2.8s-4.6-1-6.1-2.8l-128-152z"
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
                  d="M64 256c0-106 86-192 192-192s192 86 192 192c0 17.7 14.3 32 32 32s32-14.3 32-32C512 114.6 397.4 0 256 0S0 114.6 0 256c0 17.7 14.3 32 32 32s32-14.3 32-32"
                />
                <path
                  className="aps-icon-foreground"
                  d="M121.4 345.4c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 402.7V192c0-17.7-14.3-32-32-32s-32 14.3-32 32v210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0z"
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
