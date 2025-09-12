import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ParagraphLeftIcon: React.FC<
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
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M320 64c17.7 0 32-14.3 32-32S337.7 0 320 0H144C82.1 0 32 50.1 32 112s50.1 112 112 112h16v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64h32v224c0 17.7 14.3 32 32 32s32-14.3 32-32zM128 384v-46.4c0-9.7-7.9-17.6-17.6-17.6-4.2 0-8.2 1.5-11.3 4.2l-93 78.7c-3.9 3.2-6.1 8-6.1 13.1s2.2 9.9 6.1 13.2l93 78.7c3.2 2.7 7.2 4.2 11.3 4.2 9.7 0 17.6-7.9 17.6-17.6V448h224c17.7 0 32-14.3 32-32s-14.3-32-32-32z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M304 48h24c13.3 0 24-10.7 24-24S341.3 0 328 0H144C82.1 0 32 50.1 32 112s50.1 112 112 112h32v72c0 13.3 10.7 24 24 24s24-10.7 24-24V48h32v248c0 13.3 10.7 24 24 24s24-10.7 24-24zm-128 0v128h-32c-35.3 0-64-28.7-64-64s28.7-64 64-64h32m-55.9 313.8c9.9-8.9 10.7-24 1.8-33.9s-24-10.7-33.9-1.8l-80 72c-5.1 4.6-8 11.1-8 17.9s2.9 13.3 7.9 17.8l80 72c9.9 8.9 25 8.1 33.9-1.8s8.1-25-1.8-33.9L86.5 440H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H86.5l33.5-30.2z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M320 32h16c8.8 0 16-7.2 16-16s-7.2-16-16-16H144C82.1 0 32 50.1 32 112s50.1 112 112 112h48v80c0 8.8 7.2 16 16 16s16-7.2 16-16V32h64v272c0 8.8 7.2 16 16 16s16-7.2 16-16zm-128 0v160h-48c-44.2 0-80-35.8-80-80s35.8-80 80-80h48m-69.8 316.3c6.8-5.7 7.7-15.7 2-22.5s-15.7-7.7-22.5-2l-96 80C2.1 406.7 0 411.3 0 416s2.1 9.3 5.8 12.3l96 80c6.8 5.7 16.9 4.7 22.5-2s4.7-16.9-2-22.5L60.2 432H368c8.8 0 16-7.2 16-16s-7.2-16-16-16H60.2l62.1-51.7z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M304 16h40c4.4 0 8-3.6 8-8s-3.6-8-8-8H136C78.6 0 32 46.6 32 104s46.6 104 104 104h56v104c0 4.4 3.6 8 8 8s8-3.6 8-8V16h80v296c0 4.4 3.6 8 8 8s8-3.6 8-8zm-112 8v168h-56c-48.6 0-88-39.4-88-88s39.4-88 88-88h56zm-82.9 318.1c3.4-2.8 3.9-7.9 1-11.3s-7.9-3.9-11.3-1l-96 80C1.1 411.4 0 413.6 0 416s1.1 4.6 2.9 6.1l96 80c3.4 2.8 8.4 2.4 11.3-1s2.4-8.4-1-11.3L30.1 424H376c4.4 0 8-3.6 8-8s-3.6-8-8-8H30.1z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M144 0h176c17.7 0 32 14.3 32 32s-14.3 32-32 32v224c0 17.7-14.3 32-32 32s-32-14.3-32-32V64h-32v224c0 17.7-14.3 32-32 32s-32-14.3-32-32v-64h-16c-61.9 0-112-50.1-112-112S82.1 0 144 0"
                />
                <path
                  className="aps-icon-foreground"
                  d="M128 384v-46.4c0-9.7-7.9-17.6-17.6-17.6-4.2 0-8.2 1.5-11.3 4.2l-93 78.7c-3.9 3.2-6.1 8-6.1 13.1s2.2 9.9 6.1 13.2l93 78.7c3.2 2.7 7.2 4.2 11.3 4.2 9.7 0 17.6-7.9 17.6-17.6V448h224c17.7 0 32-14.3 32-32s-14.3-32-32-32z"
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
