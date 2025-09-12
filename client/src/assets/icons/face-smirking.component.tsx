import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const FaceSmirkingIcon: React.FC<
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
                  d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m96-48c0 8.8 7.2 16 16 16h32c0 17.7 14.3 32 32 32s32-14.3 32-32-14.3-32-32-32h-64c-8.8 0-16 7.2-16 16m279.8 130.6c1.5-8.7-4.4-17-13.2-18.4s-17 4.4-18.4 13.2l-.2 1.2c-3.2 19.3-19.9 33.4-39.5 33.4H192c-8.8 0-16 7.2-16 16s7.2 16 16 16h112.6c35.2 0 65.2-25.4 71-60.2zM288 208c0 8.8 7.2 16 16 16h32c0 17.7 14.3 32 32 32s32-14.3 32-32-14.3-32-32-32h-64c-8.8 0-16 7.2-16 16"
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
                  d="M464 256a208 208 0 1 0-416 0 208 208 0 1 0 416 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m382.3 88.9-1.9 4.8c-12.2 30.4-41.6 50.3-74.3 50.3H184c-13.3 0-24-10.7-24-24s10.7-24 24-24h122.1c13.1 0 24.9-8 29.7-20.1l1.9-4.8c4.9-12.3 18.9-18.3 31.2-13.4s18.3 18.9 13.4 31.2M112 192h64c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32h-32c-8.8 0-16-7.2-16-16s7.2-16 16-16m176 16c0-8.8 7.2-16 16-16h64c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32h-32c-8.8 0-16-7.2-16-16"
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
                  d="M480 256a224 224 0 1 0-448 0 224 224 0 1 0 448 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m375.8 82.6-.2 1.2c-5.8 34.7-35.8 60.2-71 60.2H192c-8.8 0-16-7.2-16-16s7.2-16 16-16h112.6c19.6 0 36.2-14.1 39.5-33.4l.2-1.2c1.5-8.7 9.7-14.6 18.4-13.2s14.6 9.7 13.2 18.4zM112 192h64c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32h-32c-8.8 0-16-7.2-16-16s7.2-16 16-16m176 16c0-8.8 7.2-16 16-16h64c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32h-32c-8.8 0-16-7.2-16-16"
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
                  d="M496 256a240 240 0 1 0-480 0 240 240 0 1 0 480 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m383.9 89.3-.2 1.2c-5.1 30.9-31.8 53.5-63.1 53.5H200c-4.4 0-8-3.6-8-8s3.6-8 8-8h120.6c23.5 0 43.5-17 47.3-40.1l.2-1.2c.7-4.4 4.8-7.3 9.2-6.6s7.3 4.8 6.6 9.2M104 192h72c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32c0-5.8 1.6-11.3 4.3-16H104c-4.4 0-8-3.6-8-8s3.6-8 8-8m72 16a16 16 0 1 0 0 32 16 16 0 1 0 0-32m112-8c0-4.4 3.6-8 8-8h72c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32c0-5.8 1.6-11.3 4.3-16H296c-4.4 0-8-3.6-8-8m64 24a16 16 0 1 0 32 0 16 16 0 1 0-32 0"
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
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m119.8-173.4-.2 1.2c-5.8 34.7-35.8 60.2-71 60.2H192c-8.8 0-16-7.2-16-16s7.2-16 16-16h112.6c19.6 0 36.2-14.1 39.5-33.4l.2-1.2c1.5-8.7 9.7-14.6 18.4-13.2s14.6 9.7 13.2 18.4zM112 192h64c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32h-32c-8.8 0-16-7.2-16-16s7.2-16 16-16m176 16c0-8.8 7.2-16 16-16h64c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32h-32c-8.8 0-16-7.2-16-16"
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
