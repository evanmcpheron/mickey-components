import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CommentMiddleTopIcon: React.FC<
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
                  d="m188.3 103.3 44.5-89C237.2 5.5 246.2 0 256 0s18.8 5.5 23.2 14.3l44.5 89C432.2 127.5 512 208.2 512 304c0 114.9-114.6 208-256 208S0 418.9 0 304c0-95.8 79.8-176.5 188.3-200.7"
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
                  d="M231.3 124.8 256 75.3l24.7 49.5c6.5 12.9 18.4 22.3 32.5 25.4C407 171 464 237.3 464 304c0 79.5-83.3 160-208 160S48 383.5 48 304c0-66.7 57-133 150.7-153.8 14.1-3.1 26.1-12.5 32.5-25.4zm92.4-21.5-44.5-89C274.8 5.5 265.8 0 256 0s-18.8 5.5-23.2 14.3l-44.5 89C79.8 127.5 0 208.2 0 304c0 114.9 114.6 208 256 208s256-93.1 256-208c0-95.8-79.8-176.5-188.3-200.7"
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
                  d="M216.9 117.7 256 39.6l39.1 78.1c4.3 8.6 12.3 14.8 21.7 16.9C415.4 156.5 480 227.6 480 304c0 91.3-93.8 176-224 176S32 395.3 32 304c0-76.4 64.6-147.5 163.3-169.4 9.4-2.1 17.4-8.3 21.7-16.9zm44.5-89-5.4-2.8 5.5 2.7zm62.2 74.7-44.5-89C274.8 5.5 265.8 0 256 0s-18.8 5.5-23.2 14.3l-44.5 89C79.8 127.5 0 208.2 0 304c0 114.9 114.6 208 256 208s256-93.1 256-208c0-95.8-79.8-176.5-188.3-200.7z"
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
                  d="m202.6 110.5 44.5-89c1.7-3.4 5.1-5.5 8.8-5.5s7.2 2.1 8.8 5.5l44.5 89c2.2 4.3 6.1 7.4 10.8 8.5 103.8 23 176 98.9 176 185 0 103.1-104.2 192-240 192S16 407.1 16 304c0-86.1 72.2-162 175.8-185 4.7-1 8.7-4.2 10.8-8.5m121-7.2-44.5-89C274.8 5.5 265.8 0 256 0s-18.8 5.5-23.2 14.3l-44.5 89C79.8 127.5 0 208.2 0 304c0 114.9 114.6 208 256 208s256-93.1 256-208c0-95.8-79.8-176.5-188.3-200.7z"
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
                  d="m188.3 103.3 44.5-89C237.2 5.5 246.2 0 256 0s18.8 5.5 23.2 14.3l44.5 89C432.2 127.5 512 208.2 512 304c0 114.9-114.6 208-256 208S0 418.9 0 304c0-95.8 79.8-176.5 188.3-200.7"
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
