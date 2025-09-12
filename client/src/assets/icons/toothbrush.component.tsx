import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ToothbrushIcon: React.FC<
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
                  d="M64 224c-35.3 0-64-28.7-64-64s28.7-64 64-64h224c31.2 0 38.2-22.7 39.6-48 .5-8.8 7.6-16.1 16.4-15.2 52.4 5.3 104 36.7 104 95.2 0 53-43 96-96 96zm-8 32c13.3 0 24 10.7 24 24v136h32V280c0-13.3 10.7-24 24-24s24 10.7 24 24v136h32V280c0-13.3 10.7-24 24-24s24 10.7 24 24v136h32V280c0-13.3 10.7-24 24-24s24 10.7 24 24v136h32V280c0-13.3 10.7-24 24-24s24 10.7 24 24v136h144c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32V280c0-13.3 10.7-24 24-24"
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
                  d="M64 176c-8.8 0-16-7.2-16-16s7.2-16 16-16h224c29.4 0 55.1-11.9 71-36.1 4.3-6.5 7.4-13.2 9.7-19.9 6.4 2.7 12 6 16.6 9.7 9.5 7.7 14.6 17 14.6 30.3 0 26.5-21.5 48-48 48zM0 160c0 35.3 28.7 64 64 64h288c53 0 96-43 96-96 0-58.5-51.6-89.9-104-95.2-8.8-.9-15.8 6.4-16.4 15.2-1.5 25.3-8.4 48-39.6 48H64c-35.3 0-64 28.7-64 64m80 120c0-13.3-10.7-24-24-24s-24 10.7-24 24v152h-8c-13.3 0-24 10.7-24 24s10.7 24 24 24h528c13.3 0 24-10.7 24-24s-10.7-24-24-24H400V280c0-13.3-10.7-24-24-24s-24 10.7-24 24v152h-32V280c0-13.3-10.7-24-24-24s-24 10.7-24 24v152h-32V280c0-13.3-10.7-24-24-24s-24 10.7-24 24v152h-32V280c0-13.3-10.7-24-24-24s-24 10.7-24 24v152H80z"
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
                  d="M64 192c-17.7 0-32-14.3-32-32s14.3-32 32-32h224c24.8 0 45.1-9.9 57.7-28.9 6.6-10.1 10.1-21.2 11.9-31.6 14.8 3.6 27.9 9.7 37.9 17.8C408.3 95.7 416 109.4 416 128c0 35.3-28.7 64-64 64zM0 160c0 35.3 28.7 64 64 64h288c53 0 96-43 96-96 0-58.5-51.6-89.9-104-95.2-8.8-.9-15.8 6.4-16.4 15.2-1.5 25.3-8.4 48-39.6 48H64c-35.3 0-64 28.7-64 64m64 112c0-8.8-7.2-16-16-16s-16 7.2-16 16v176H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h544c8.8 0 16-7.2 16-16s-7.2-16-16-16H384V272c0-8.8-7.2-16-16-16s-16 7.2-16 16v176h-32V272c0-8.8-7.2-16-16-16s-16 7.2-16 16v176h-32V272c0-8.8-7.2-16-16-16s-16 7.2-16 16v176h-32V272c0-8.8-7.2-16-16-16s-16 7.2-16 16v176h-32V272c0-8.8-7.2-16-16-16s-16 7.2-16 16v176H64z"
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
                  d="M64 208c-26.5 0-48-21.5-48-48s21.5-48 48-48h224c20.2 0 35.1-7.8 44.3-21.7 8.3-12.5 10.5-28.2 11.3-41.4v-.1c23.4 2.6 45.7 10.8 61.9 24S432 104.1 432 128c0 44.2-35.8 80-80 80zM0 160c0 35.3 28.7 64 64 64h288c53 0 96-43 96-96 0-58.5-51.6-89.9-104-95.2-8.8-.9-15.8 6.4-16.4 15.2-1.5 25.3-8.4 48-39.6 48H64c-35.3 0-64 28.7-64 64m64 104c0-4.4-3.6-8-8-8s-8 3.6-8 8v152H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h536c4.4 0 8-3.6 8-8s-3.6-8-8-8H32c-8.8 0-16-7.2-16-16s7.2-16 16-16h536c4.4 0 8-3.6 8-8s-3.6-8-8-8H384V264c0-4.4-3.6-8-8-8s-8 3.6-8 8v152h-48V264c0-4.4-3.6-8-8-8s-8 3.6-8 8v152h-48V264c0-4.4-3.6-8-8-8s-8 3.6-8 8v152h-48V264c0-4.4-3.6-8-8-8s-8 3.6-8 8v152h-48V264c0-4.4-3.6-8-8-8s-8 3.6-8 8v152H64z"
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
                  d="M80 280c0-13.3-10.7-24-24-24s-24 10.7-24 24v136h48zm80 136V280c0-13.3-10.7-24-24-24s-24 10.7-24 24v136zm80 0V280c0-13.3-10.7-24-24-24s-24 10.7-24 24v136zm80 0V280c0-13.3-10.7-24-24-24s-24 10.7-24 24v136zm80 0V280c0-13.3-10.7-24-24-24s-24 10.7-24 24v136z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M64 224c-35.3 0-64-28.7-64-64s28.7-64 64-64h224c31.2 0 38.2-22.7 39.6-48 .5-8.8 7.6-16.1 16.4-15.2 52.4 5.3 104 36.7 104 95.2 0 53-43 96-96 96zM32 416h512c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32"
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
