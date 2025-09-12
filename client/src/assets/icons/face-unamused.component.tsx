import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const FaceUnamusedIcon: React.FC<
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
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m60.1-117.3c-11.7-13-31.6-26.7-60.1-26.7s-48.4 13.7-60.1 26.7c-5.9 6.6-16 7.1-22.6 1.2s-7.1-16-1.2-22.6c16.1-17.9 44.2-37.3 83.9-37.3s67.8 19.4 83.9 37.3c5.9 6.6 5.4 16.7-1.2 22.6s-16.7 5.4-22.6-1.2M112 192h64c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32h-32c-8.8 0-16-7.2-16-16s7.2-16 16-16m176 16c0-8.8 7.2-16 16-16h64c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32h-32c-8.8 0-16-7.2-16-16"
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
                  d="M464 256a208 208 0 1 0-416 0 208 208 0 1 0 416 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m294.5 136.4c-7.4-7.9-20-16.4-38.5-16.4s-31.1 8.5-38.5 16.4c-9 9.7-24.2 10.2-33.9 1.2s-10.2-24.2-1.2-33.9c14.3-15.4 39-31.7 73.6-31.7s59.3 16.3 73.5 31.6c9 9.7 8.5 24.9-1.2 33.9s-24.9 8.5-33.9-1.2zM112 192h64c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32h-32c-8.8 0-16-7.2-16-16s7.2-16 16-16m176 16c0-8.8 7.2-16 16-16h64c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32h-32c-8.8 0-16-7.2-16-16"
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
                  d="M480 256a224 224 0 1 0-448 0 224 224 0 1 0 448 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m316.1 138.7c-11.7-13-31.6-26.7-60.1-26.7s-48.4 13.7-60.1 26.7c-5.9 6.6-16 7.1-22.6 1.2s-7.1-16-1.2-22.6c16.1-17.9 44.2-37.3 83.9-37.3s67.8 19.4 83.9 37.3c5.9 6.6 5.4 16.7-1.2 22.6s-16.7 5.4-22.6-1.2M112 192h64c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32h-32c-8.8 0-16-7.2-16-16s7.2-16 16-16m176 16c0-8.8 7.2-16 16-16h64c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32h-32c-8.8 0-16-7.2-16-16"
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
                  d="M496 256a240 240 0 1 0-480 0 240 240 0 1 0 480 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m322.1 141.4C309.3 383.1 287.3 368 256 368s-53.3 15.1-66.1 29.4c-3 3.3-8 3.6-11.3.6s-3.6-8-.6-11.3c15.1-16.7 41.1-34.7 78-34.7s62.9 18 77.9 34.6c3 3.3 2.7 8.3-.6 11.3s-8.3 2.7-11.3-.6zM104 192h72c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32c0-5.8 1.6-11.3 4.3-16H104c-4.4 0-8-3.6-8-8s3.6-8 8-8m72 16a16 16 0 1 0 0 32 16 16 0 1 0 0-32m112-8c0-4.4 3.6-8 8-8h72c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32c0-5.8 1.6-11.3 4.3-16H296c-4.4 0-8-3.6-8-8m64 24a16 16 0 1 0 32 0 16 16 0 1 0-32 0"
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
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m60.1-117.3c-11.7-13-31.6-26.7-60.1-26.7s-48.4 13.7-60.1 26.7c-5.9 6.6-16 7.1-22.6 1.2s-7.1-16-1.2-22.6c16.1-17.9 44.2-37.3 83.9-37.3s67.8 19.4 83.9 37.3c5.9 6.6 5.4 16.7-1.2 22.6s-16.7 5.4-22.6-1.2M112 192h64c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32h-32c-8.8 0-16-7.2-16-16s7.2-16 16-16m176 16c0-8.8 7.2-16 16-16h64c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32h-32c-8.8 0-16-7.2-16-16"
                />
                <path
                  className="aps-icon-foreground"
                  d="M96 208c0-8.8 7.2-16 16-16h64c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32h-32c-8.8 0-16-7.2-16-16m192 0c0-8.8 7.2-16 16-16h64c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32h-32c-8.8 0-16-7.2-16-16"
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
