import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ArrowUpToArcIcon: React.FC<
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
                  d="M256 64c106 0 192 86 192 192 0 17.7 14.3 32 32 32s32-14.3 32-32C512 114.6 397.4 0 256 0S0 114.6 0 256c0 17.7 14.3 32 32 32s32-14.3 32-32c0-106 86-192 192-192m134.6 217.4-112-112c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l57.4-57.4V480c0 17.7 14.3 32 32 32s32-14.3 32-32V269.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3z"
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
                  d="M256 48c114.9 0 208 93.1 208 208 0 13.3 10.7 24 24 24s24-10.7 24-24C512 114.6 397.4 0 256 0S0 114.6 0 256c0 13.3 10.7 24 24 24s24-10.7 24-24c0-114.9 93.1-208 208-208m121.6 231.7-104-112c-4.5-4.9-10.9-7.7-17.6-7.7s-13 2.8-17.6 7.7l-104 112c-9 9.7-8.5 24.9 1.3 33.9s24.9 8.5 33.9-1.3l62.4-67.2V488c0 13.3 10.7 24 24 24s24-10.7 24-24V245.1l62.4 67.2c9 9.7 24.2 10.3 33.9 1.3s10.3-24.2 1.3-33.9"
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
                  d="M256 32c123.7 0 224 100.3 224 224 0 8.8 7.2 16 16 16s16-7.2 16-16C512 114.6 397.4 0 256 0S0 114.6 0 256c0 8.8 7.2 16 16 16s16-7.2 16-16C32 132.3 132.3 32 256 32m140 277.4-128-144c-3-3.4-7.4-5.4-12-5.4s-8.9 2-12 5.4l-128 144c-5.9 6.6-5.3 16.7 1.3 22.6s16.7 5.3 22.6-1.3L240 218.1V496c0 8.8 7.2 16 16 16s16-7.2 16-16V218.1l100 112.5c5.9 6.6 16 7.2 22.6 1.3s7.2-16 1.3-22.6z"
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
                  d="M256 16c132.5 0 240 107.5 240 240 0 4.4 3.6 8 8 8s8-3.6 8-8C512 114.6 397.4 0 256 0S0 114.6 0 256c0 4.4 3.6 8 8 8s8-3.6 8-8C16 123.5 123.5 16 256 16m134.1 298.8-128-152c-1.5-1.8-3.8-2.8-6.1-2.8s-4.6 1-6.1 2.8l-128 152c-2.8 3.4-2.4 8.4 1 11.3s8.4 2.4 11.3-1L248 189.9V504c0 4.4 3.6 8 8 8s8-3.6 8-8V189.9l113.9 135.3c2.8 3.4 7.9 3.8 11.3 1s3.8-7.9 1-11.3z"
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
                  d="M448 256c0-106-86-192-192-192S64 150 64 256c0 17.7-14.3 32-32 32S0 273.7 0 256C0 114.6 114.6 0 256 0s256 114.6 256 256c0 17.7-14.3 32-32 32s-32-14.3-32-32"
                />
                <path
                  className="aps-icon-foreground"
                  d="M390.6 326.6c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l57.4-57.3V480c0 17.7 14.3 32 32 32s32-14.3 32-32V269.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0z"
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
