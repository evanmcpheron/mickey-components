import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const LeftLongIcon: React.FC<
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
                  d="M177.5 414c-8.8 3.8-19 2-26-4.6l-144-136C2.7 268.9 0 262.6 0 256s2.7-12.9 7.5-17.4l144-136c7-6.6 17.2-8.4 26-4.6s14.5 12.5 14.5 22v72h288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H192v72c0 9.6-5.7 18.2-14.5 22"
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
                  d="M6.5 272.4c-8.7-9.2-8.7-23.7 0-32.9l121.4-129c8.8-9.3 21-14.6 33.7-14.6 25.6 0 46.3 20.7 46.3 46.3v33.7h248c30.9 0 56 25.1 56 56v48c0 30.9-25.1 56-56 56h-248v33.7c0 25.6-20.7 46.3-46.3 46.3-12.8 0-25-5.3-33.7-14.6zm153.5 93v-53.5c0-13.3 10.7-24 24-24h272c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H184c-6.4 0-12.5-2.5-17-7s-7-10.6-7-17v-53.5L57 256l103 109.5z"
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
                  d="M160 328v49.3c0 3.7-3 6.7-6.7 6.7-1.9 0-3.7-.8-5-2.2L35.8 256l112.5-125.8c1.3-1.4 3.1-2.2 5-2.2 3.7 0 6.7 3 6.7 6.7V184c0 17.7 14.3 32 32 32h272c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16H192c-17.7 0-32 14.3-32 32M5.3 242c-3.4 3.9-5.3 8.8-5.3 14s1.9 10.1 5.3 14l119.2 133.1c7.3 8.2 17.8 12.9 28.8 12.9 21.4 0 38.7-17.3 38.7-38.7V328h272c26.5 0 48-21.5 48-48v-48c0-26.5-21.5-48-48-48H192v-49.3c0-21.4-17.3-38.7-38.7-38.7-11 0-21.5 4.7-28.8 12.9z"
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
                  d="M176 312v81.1c0 3.8-3.1 6.9-6.9 6.9-1.8 0-3.5-.7-4.7-1.9L16.8 257.9c-.5-.5-.8-1.2-.8-1.9s.3-1.4.8-1.9l147.6-140.2c1.3-1.2 3-1.9 4.7-1.9 3.8 0 6.9 3.1 6.9 6.9V200c0 8.8 7.2 16 16 16h280c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H192c-8.8 0-16 7.2-16 16M5.8 269.5l147.6 140.2c4.3 4 9.9 6.3 15.8 6.3 12.6 0 22.9-10.2 22.9-22.9V312h280c22.1 0 40-17.9 40-40v-32c0-22.1-17.9-40-40-40h-280v-81.1c0-12.6-10.2-22.9-22.9-22.9-5.9 0-11.5 2.3-15.8 6.3L5.8 242.5C2.1 246 0 250.9 0 256s2.1 10 5.8 13.5"
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
                  d="M192 192v128h288c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32H192"
                />
                <path
                  className="aps-icon-foreground"
                  d="M151.5 102.6c7-6.6 17.2-8.4 26-4.6s14.5 12.5 14.5 22v272c0 9.6-5.7 18.2-14.5 22s-19 2-26-4.6l-144-136C2.7 268.9 0 262.6 0 256s2.7-12.9 7.5-17.4z"
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
