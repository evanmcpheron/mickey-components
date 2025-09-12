import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const MIcon: React.FC<
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
                  d="M22.7 33.4c13.5-4.1 28.1 1.1 35.9 12.9l165.4 248L389.4 46.2c7.8-11.7 22.4-17 35.9-12.9S448 49.9 448 64v384c0 17.7-14.3 32-32 32s-32-14.3-32-32V169.7L250.6 369.8c-5.9 8.9-15.9 14.2-26.6 14.2s-20.7-5.3-26.6-14.2L64 169.7V448c0 17.7-14.3 32-32 32S0 465.7 0 448V64c0-14.1 9.2-26.5 22.7-30.6"
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
                  d="M17.1 33c10.2-3 21.1 1 26.9 9.8l180 273.5L403.9 42.8c5.9-8.8 16.8-12.8 27-9.8S448 45.4 448 56v400c0 13.3-10.7 24-24 24s-24-10.7-24-24V136.1l-156 237c-4.4 6.7-12 10.8-20 10.8s-15.6-4.1-20-10.8l-156-237V456c0 13.3-10.7 24-24 24S0 469.3 0 456V56c0-10.6 7-19.9 17.1-23"
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
                  d="M11.3 32.7c6.7-2.1 14 .5 17.9 6.3L224 323.7 418.8 39c4-5.8 11.2-8.3 17.9-6.3S448 41 448 48v416c0 8.8-7.2 16-16 16s-16-7.2-16-16V99.7L237.2 361c-3 4.4-7.9 7-13.2 7s-10.2-2.6-13.2-7L32 99.7V464c0 8.8-7.2 16-16 16s-16-7.2-16-16V48c0-7 4.6-13.2 11.3-15.3"
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
                  d="M5.6 32.4c3.3-1.1 6.9.1 9 3L224 330.2 433.5 35.4c2-2.8 5.6-4 9-3s5.6 4.1 5.6 7.6v424c0 4.4-3.6 8-8 8s-8-3.6-8-8V65.1L230.5 348.6c-1.5 2.1-3.9 3.4-6.5 3.4s-5-1.3-6.5-3.4L16 65.1V472c0 4.4-3.6 8-8 8s-8-3.6-8-8V40c0-3.5 2.3-6.6 5.6-7.6"
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
                  d="M22.7 33.4c13.5-4.1 28.1 1.1 35.9 12.9l165.4 248 165.4-248c7.8-11.7 22.4-17 35.9-12.9S448 49.9 448 64v384c0 17.7-14.3 32-32 32s-32-14.3-32-32V169.7L250.6 369.8c-5.9 8.9-15.9 14.2-26.6 14.2s-20.7-5.3-26.6-14.2L64 169.7V448c0 17.7-14.3 32-32 32S0 465.7 0 448V64c0-14.1 9.2-26.5 22.7-30.6"
                />
                <path className="aps-icon-foreground" d="" />
              </svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
