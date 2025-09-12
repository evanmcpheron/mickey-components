import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CircleCaretDownIcon: React.FC<
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
                  d="M256 0a256 256 0 1 0 0 512 256 256 0 1 0 0-512m0 368c-6.7 0-13-2.8-17.6-7.7l-104-112c-6.5-7-8.2-17.2-4.4-25.9s12.5-14.4 22-14.4h208c9.5 0 18.2 5.7 22 14.4s2.1 18.9-4.4 25.9l-104 112c-4.5 4.9-10.9 7.7-17.6 7.7"
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
                  d="M256 464a208 208 0 1 1 0-416 208 208 0 1 1 0 416m0-464a256 256 0 1 0 0 512 256 256 0 1 0 0-512m0 368c6.7 0 13-2.8 17.6-7.7l104-112c6.5-7 8.2-17.2 4.4-25.9S369.5 208 360 208H152c-9.5 0-18.2 5.7-22 14.4s-2.1 18.9 4.4 25.9l104 112c4.5 4.9 10.9 7.7 17.6 7.7"
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
                  d="M256 480a224 224 0 1 1 0-448 224 224 0 1 1 0 448m0-480a256 256 0 1 0 0 512 256 256 0 1 0 0-512m0 352c9.6 0 18.7-4 25.2-11l95.5-102.8c4.7-5.1 7.3-11.8 7.3-18.7 0-15.2-12.3-27.5-27.5-27.5h-201c-15.2 0-27.5 12.3-27.5 27.5 0 6.9 2.6 13.6 7.3 18.7L230.8 341c6.5 7 15.6 11 25.2 11m1.7-32.7c-.4.5-1.1.7-1.7.7s-1.3-.3-1.7-.7L165.8 224h180.3z"
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
                  d="M256 16a240 240 0 1 0 0 480 240 240 0 1 0 0-480m0 496a256 256 0 1 1 0-512 256 256 0 1 1 0 512m0-160c-7.3 0-14.3-3-19.3-8.4L134.8 234.4c-4.4-4.7-6.8-10.8-6.8-17.2 0-13.9 11.3-25.2 25.2-25.2h205.6c13.9 0 25.2 11.3 25.2 25.2 0 6.4-2.4 12.5-6.8 17.2L275.3 343.6c-5 5.4-12 8.4-19.3 8.4M153.2 208c-5.1 0-9.2 4.1-9.2 9.2 0 2.3.9 4.6 2.5 6.3l101.9 109.2c2 2.1 4.7 3.3 7.6 3.3s5.6-1.2 7.6-3.3l101.9-109.2c1.6-1.7 2.5-4 2.5-6.3 0-5.1-4.1-9.2-9.2-9.2z"
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
                  d="M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512m0-144c6.7 0 13-2.8 17.6-7.7l104-112c6.5-7 8.2-17.2 4.4-25.9S369.5 208 360 208H152c-9.5 0-18.2 5.7-22 14.4s-2.1 18.9 4.4 25.9l104 112c4.5 4.9 10.9 7.7 17.6 7.7"
                />
                <path
                  className="aps-icon-foreground"
                  d="M273.6 360.3c-4.5 4.9-10.9 7.7-17.6 7.7s-13-2.8-17.6-7.7l-104-112c-6.5-7-8.2-17.2-4.4-25.9s12.5-14.4 22-14.4h208c9.5 0 18.2 5.7 22 14.4s2.1 18.9-4.4 25.9z"
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
