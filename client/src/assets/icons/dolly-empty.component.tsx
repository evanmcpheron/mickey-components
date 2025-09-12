import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const DollyEmptyIcon: React.FC<
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
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M32 0C14.3 0 0 14.3 0 32s14.3 32 32 32h72.9L197 340.2c-22.5 17.6-37 45-37 75.8 0 53 43 96 96 96 52.4 0 95.1-42 96-94.3l202.1-67.4c16.8-5.6 25.8-23.7 20.2-40.5s-23.7-25.8-40.5-20.2l-202 67.4c-17.2-22.1-43.9-36.5-74-37L165.7 43.8C156.9 17.6 132.5 0 104.9 0z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M0 24C0 10.7 10.7 0 24 0h80.8C129 0 150.5 15.6 158 38.6l92 281.6c2-.1 4-.2 6-.2 33.2 0 62.5 16.9 79.8 42.5L544 289.4c12.5-4.4 26.2 2.2 30.6 14.7s-2.2 26.2-14.7 30.6l-208.2 73.1c.2 2.7.3 5.4.3 8.2 0 53-43 96-96 96s-96-43-96-96c0-34 17.7-63.9 44.3-80.9L112.4 53.5c-1.1-3.3-4.1-5.5-7.6-5.5H24C10.7 48 0 37.3 0 24m304 392a48 48 0 1 0-96 0 48 48 0 1 0 96 0"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M8 16C8 7.2 15.2 0 24 0h64.9c20.7 0 39 13.2 45.5 32.8l106.9 320.5c4.8-.9 9.7-1.3 14.7-1.3 34.1 0 63.2 21.3 74.7 51.4L554.5 321c8.3-3.1 17.5 1.2 20.5 9.5s-1.2 17.5-9.5 20.5l-229.6 84.6C334 478.1 299 512 256 512c-44.2 0-80-35.8-80-80 0-27.8 14.1-52.2 35.6-66.6L104.1 42.9C101.9 36.4 95.8 32 88.9 32H24c-8.8 0-16-7.2-16-16m296 416a48 48 0 1 0-96 0 48 48 0 1 0 96 0"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M0 8c0-4.4 3.6-8 8-8h88.5c17.5 0 32.9 11.3 38.2 28L247 384.6q4.5-.6 9-.6c23.2 0 43.5 12.3 54.7 30.8l254.9-78.4c4.2-1.3 8.7 1.1 10 5.3s-1.1 8.7-5.3 10l-253 77.8c1.8 5.9 2.7 12.1 2.7 18.5 0 35.3-28.7 64-64 64s-64-28.7-64-64c0-26.7 16.3-49.5 39.5-59.1L119.4 32.8C116.3 22.8 107 16 96.5 16H8c-4.4 0-8-3.6-8-8m304 440a48 48 0 1 0-96 0 48 48 0 1 0 96 0"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M256 512a96 96 0 1 0 0-192 96 96 0 1 0 0 192"
                />
                <path
                  className="aps-icon-foreground"
                  d="M32 0C14.3 0 0 14.3 0 32s14.3 32 32 32h72.9L197 340.2c16.3-12.7 36.7-20.2 59-20.2h1.7l-92-276.2C156.9 17.6 132.5 0 104.9 0zm299.8 357c12.7 16.3 20.2 36.7 20.2 59v1.7l202.1-67.4c16.8-5.6 25.8-23.7 20.2-40.5s-23.7-25.8-40.5-20.2z"
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
