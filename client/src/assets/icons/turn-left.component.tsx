import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const TurnLeftIcon: React.FC<
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
                  d="M177.5 66c-8.8-3.8-19-2-26 4.6l-144 136C2.7 211.1 0 217.4 0 224s2.7 12.9 7.5 17.4l144 136c7 6.6 17.2 8.4 26 4.6s14.5-12.5 14.5-22v-88h192c17.7 0 32 14.3 32 32v144c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V304c0-70.7-57.3-128-128-128H192V88c0-9.6-5.7-18.2-14.5-22"
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
                  d="M6.5 240.4c-8.7-9.2-8.7-23.7 0-32.9l121.4-129c8.8-9.3 21-14.6 33.7-14.6 25.6 0 46.3 20.7 46.3 46.3v41.7h144c88.4 0 160 71.6 160 160v112c0 30.9-25.1 56-56 56h-32c-30.9 0-56-25.1-56-56v-120c0-4.4-3.6-8-8-8h-152v41.7c0 25.6-20.7 46.3-46.3 46.3-12.8 0-25-5.3-33.7-14.6zm153.5 93v-61.5c0-13.3 10.7-24 24-24h176c30.9 0 56 25.1 56 56v120c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8v-112c0-61.9-50.1-112-112-112H184c-13.3 0-24-10.7-24-24v-61.5L57 224l103 109.5z"
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
                  d="M160 304v57.3c0 3.7-3 6.7-6.7 6.7-1.9 0-3.7-.8-5-2.2L35.8 240l112.5-125.8c1.3-1.4 3.1-2.2 5-2.2 3.7 0 6.7 3 6.7 6.7V176c0 17.7 14.3 32 32 32h176c61.9 0 112 50.1 112 112v112c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16V320c0-26.5-21.5-48-48-48H192c-17.7 0-32 14.3-32 32M5.3 226c-3.4 3.9-5.3 8.8-5.3 14s1.9 10.1 5.3 14l119.2 133.1c7.3 8.2 17.8 12.9 28.8 12.9 21.4 0 38.7-17.3 38.7-38.7V304h176c8.8 0 16 7.2 16 16v112c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V320c0-79.5-64.5-144-144-144H192v-57.3c0-21.4-17.3-38.7-38.7-38.7-11 0-21.5 4.7-28.8 12.9z"
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
                  d="M176 272v89.1c0 3.8-3.1 6.9-6.9 6.9-1.8 0-3.5-.7-4.7-1.9L16.8 225.9c-.5-.5-.8-1.2-.8-1.9s.3-1.4.8-1.9L164.4 81.9c1.3-1.2 3-1.9 4.7-1.9 3.8 0 6.9 3.1 6.9 6.9V176c0 8.8 7.2 16 16 16h208c53 0 96 43 96 96v152c0 13.3-10.7 24-24 24h-16c-13.3 0-24-10.7-24-24V288c0-17.7-14.3-32-32-32H192c-8.8 0-16 7.2-16 16M5.8 237.5l147.6 140.2c4.3 4 9.9 6.3 15.8 6.3 12.6 0 22.9-10.2 22.9-22.9V272h208c8.8 0 16 7.2 16 16v152c0 22.1 17.9 40 40 40h16c22.1 0 40-17.9 40-40V288c0-61.9-50.1-112-112-112h-208V86.9c-.1-12.7-10.3-22.9-23-22.9-5.9 0-11.5 2.3-15.8 6.3L5.8 210.5C2.1 214 0 218.9 0 224s2.1 10 5.8 13.5"
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
                  d="M512 304c0-70.7-57.3-128-128-128H192v96h192c17.7 0 32 14.3 32 32v144c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M151.5 70.6c7-6.6 17.2-8.4 26-4.6S192 78.5 192 88v272c0 9.6-5.7 18.2-14.5 22s-19 2-26-4.6l-144-136C2.7 236.9 0 230.6 0 224s2.7-12.9 7.5-17.4z"
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
