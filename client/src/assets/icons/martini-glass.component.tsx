import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const MartiniGlassIcon: React.FC<
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
                  d="M32 0C19.1 0 7.4 7.8 2.4 19.8S.2 45.5 9.3 54.7L224 269.3V448h-64c-17.7 0-32 14.3-32 32s14.3 32 32 32h192c17.7 0 32-14.3 32-32s-14.3-32-32-32h-64V269.3L502.6 54.6c9.2-9.2 11.9-22.9 6.9-34.9S492.9 0 480 0zm141.3 128-64-64h293.4l-64 64z"
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
                  d="M35.3 0C15.8 0 0 15.8 0 35.3c0 9.4 3.7 18.3 10.3 25L232 281.9V464h-80c-13.3 0-24 10.7-24 24s10.7 24 24 24h208c13.3 0 24-10.7 24-24s-10.7-24-24-24h-80V281.9L501.7 60.3c6.6-6.6 10.3-15.6 10.3-25C512 15.8 496.2 0 476.7 0zm282.8 176L256 238.1 193.9 176zm48-48H145.9l-80-80h380.2z"
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
                  d="M32 33c0-.5.4-1 1-1h446c.5 0 1 .4 1 1 0 .3-.1.5-.3.7l-94.4 94.4c-.4 0-.9-.1-1.3-.1H128c-.4 0-.9 0-1.3.1L32.3 33.7c-.2-.2-.3-.4-.3-.7m126.6 127h194.8L256 257.4zM9.7 56.3 240 286.6V480h-96c-8.8 0-16 7.2-16 16s7.2 16 16 16h224c8.8 0 16-7.2 16-16s-7.2-16-16-16h-96V286.6L502.3 56.3c6.2-6.2 9.7-14.6 9.7-23.3 0-18.2-14.8-33-33-33H33C14.8 0 0 14.8 0 33c0 8.7 3.5 17.1 9.7 23.3"
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
                  d="M16 25.5c0-5.3 4.3-9.5 9.5-9.5h461c5.3 0 9.5 4.3 9.5 9.5 0 2.5-1 5-2.8 6.7L397.5 128h-283L18.8 32.3C17 30.5 16 28.1 16 25.5M130.5 144h251L256 269.5zM7.5 43.6 248 284.1V496H136c-4.4 0-8 3.6-8 8s3.6 8 8 8h240c4.4 0 8-3.6 8-8s-3.6-8-8-8H264V284.1L504.5 43.6c4.8-4.8 7.5-11.3 7.5-18.1C512 11.4 500.6 0 486.5 0h-461C11.4 0 0 11.4 0 25.5c0 6.8 2.7 13.3 7.5 18.1"
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
                  d="M2.4 19.8C7.4 7.8 19.1 0 32 0h448c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9L288 269.3V448h64c17.7 0 32 14.3 32 32s-14.3 32-32 32H160c-17.7 0-32-14.3-32-32s14.3-32 32-32h64V269.3L9.4 54.6c-9.2-9.1-11.9-22.9-7-34.8M256 210.7 402.7 64H109.3z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M338.7 128 256 210.7 173.3 128z"
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
