import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CommentMiddleIcon: React.FC<
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
                  d="m188.3 408.7 44.5 89c4.4 8.8 13.3 14.3 23.2 14.3s18.8-5.5 23.2-14.3l44.5-89C432.2 384.5 512 303.8 512 208 512 93.1 397.4 0 256 0S0 93.1 0 208c0 95.8 79.8 176.5 188.3 200.7"
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
                  d="m231.3 387.2 24.7 49.5 24.7-49.5c6.5-12.9 18.4-22.3 32.5-25.4C407 341 464 274.7 464 208c0-79.5-83.3-160-208-160S48 128.5 48 208c0 66.7 57 133 150.7 153.8 14.1 3.1 26.1 12.5 32.5 25.4zm92.4 21.5-44.5 89c-4.4 8.8-13.3 14.3-23.2 14.3s-18.8-5.5-23.2-14.3l-44.5-89C79.8 384.5 0 303.8 0 208 0 93.1 114.6 0 256 0s256 93.1 256 208c0 95.8-79.8 176.5-188.3 200.7"
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
                  d="m216.9 394.3 39.1 78.1 39.1-78.1c4.3-8.6 12.3-14.8 21.7-16.9C415.4 355.5 480 284.4 480 208c0-91.3-93.8-176-224-176S32 116.7 32 208c0 76.4 64.6 147.5 163.3 169.4 9.4 2.1 17.4 8.3 21.7 16.9zm44.5 89-5.5 2.7zm62.2-74.7-44.5 89c-4.4 8.8-13.3 14.3-23.2 14.3s-18.8-5.5-23.2-14.3l-44.5-89C79.8 384.5 0 303.8 0 208 0 93.1 114.6 0 256 0s256 93.1 256 208c0 95.8-79.8 176.5-188.3 200.7z"
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
                  d="m202.6 401.5 44.5 89c1.7 3.4 5.1 5.5 8.8 5.5s7.2-2.1 8.8-5.5l44.5-89c2.2-4.3 6.1-7.4 10.8-8.5 103.8-23 176-98.9 176-185 0-103.1-104.2-192-240-192S16 104.9 16 208c0 86.1 72.2 162 175.8 185 4.7 1 8.7 4.2 10.8 8.5m121 7.2-44.5 89c-4.4 8.8-13.3 14.3-23.2 14.3s-18.8-5.5-23.2-14.3l-44.5-89C79.8 384.5 0 303.8 0 208 0 93.1 114.6 0 256 0s256 93.1 256 208c0 95.8-79.8 176.5-188.3 200.7z"
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
                  d="m188.3 408.7 44.5 89c4.4 8.8 13.3 14.3 23.2 14.3s18.8-5.5 23.2-14.3l44.5-89C432.2 384.5 512 303.8 512 208 512 93.1 397.4 0 256 0S0 93.1 0 208c0 95.8 79.8 176.5 188.3 200.7"
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
