import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const AnglesUpDownIcon: React.FC<
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
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M244 7c-11.7-9.3-28.3-9.3-40 0L44 135c-13.8 11-16 31.2-5 45s31.2 16 45 5L224 73l140 112c13.8 11 33.9 8.8 45-5s8.8-33.9-5-45zm160 370c13.8-11 16-31.2 5-45s-31.2-16-45-5L224 439 84 327c-13.8-11-33.9-8.8-45 5s-8.8 33.9 5 45l160 128c11.7 9.3 28.3 9.3 40 0z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M239 498.7c-8.8 7-21.2 7-30 0l-160-128c-10.4-8.3-12-23.4-3.7-33.7s23.4-12 33.7-3.8l145 116 145-116c10.4-8.3 25.5-6.6 33.7 3.8s6.6 25.5-3.8 33.7l-160 128zm160-357.4c10.3 8.3 12 23.4 3.7 33.7s-23.4 12-33.7 3.7l-145-116-145 116c-10.4 8.3-25.5 6.6-33.7-3.7s-6.6-25.5 3.7-33.7l160-128c8.8-7 21.2-7 30 0z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M234 19.5c-5.8-4.7-14.1-4.7-20 0l-160 128c-6.9 5.5-8 15.6-2.5 22.5s15.6 8 22.5 2.5l150-120 150 120c6.9 5.5 17 4.4 22.5-2.5s4.4-17-2.5-22.5zm160 345c6.9-5.5 8-15.6 2.5-22.5s-15.6-8-22.5-2.5l-150 120-150-120c-6.9-5.5-17-4.4-22.5 2.5s-4.4 17 2.5 22.5l160 128c5.8 4.7 14.1 4.7 20 0z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="m229.1 486.2 176-144c3.4-2.8 3.9-7.8 1.1-11.3s-7.8-3.9-11.3-1.1L224 469.7 53.1 329.8c-3.4-2.8-8.5-2.3-11.3 1.1s-2.3 8.5 1.1 11.3l176 144c2.9 2.4 7.2 2.4 10.1 0zm176-316.4-176-144c-2.9-2.4-7.2-2.4-10.1 0l-176 144c-3.4 2.8-3.9 7.8-1.1 11.3s7.8 3.9 11.3 1.1L224 42.3l170.9 139.9c3.4 2.8 8.5 2.3 11.3-1.1s2.3-8.5-1.1-11.3"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M204 505c11.7 9.4 28.3 9.4 40 0l160-128c13.8-11 16-31.2 5-45s-31.2-16-45-5L224 439 84 327c-13.8-11-33.9-8.8-45 5s-8.8 33.9 5 45z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M204 7c11.7-9.3 28.3-9.3 40 0l160 128c13.8 11 16 31.2 5 45s-31.2 16-45 5L224 73 84 185c-13.8 11-33.9 8.8-45-5s-8.8-33.9 5-45z"
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
