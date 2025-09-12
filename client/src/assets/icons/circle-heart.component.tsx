import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CircleHeartIcon: React.FC<
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
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512M131.9 280.9c-29.4-29.8-29.4-78.2 0-108s77-29.8 106.4 0l17.7 18 17.7-18c29.4-29.8 77-29.8 106.4 0s29.4 78.2 0 108L278.5 384.1c-6.2 6.3-14.3 9.4-22.5 9.4s-16.3-3.1-22.5-9.4z"
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
                  d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512M131.9 280.9l101.6 103.2c6.2 6.3 14.3 9.4 22.5 9.4s16.3-3.1 22.5-9.4l101.6-103.2c29.4-29.8 29.4-78.2 0-108s-77-29.8-106.4 0l-17.7 18-17.7-18c-29.4-29.8-77-29.8-106.4 0s-29.4 78.2 0 108"
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
                  d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512M131.9 164.9c-29.4 29.8-29.4 78.2 0 108l101.6 103.2c6.2 6.3 14.3 9.4 22.5 9.4s16.3-3.1 22.5-9.4l101.6-103.2c29.4-29.8 29.4-78.2 0-108-27.8-28.2-71.9-29.7-101.5-4.6-5.8 4.9-11 10.4-16.3 15.9-2.1 2.2-4.2 4.5-6.4 6.6-2.1-2.2-4.3-4.4-6.4-6.6-5.2-5.5-10.5-11-16.3-15.9-29.6-25.1-73.7-23.6-101.5 4.6zm83.6 22.5 29.1 29.6c6.3 6.4 16.5 6.4 22.8 0l29.1-29.6c16.8-17.1 44-17.1 60.8 0 17.1 17.4 17.1 45.7 0 63.1L256 353.3 154.7 250.4c-17.1-17.4-17.1-45.7 0-63.1 16.8-17.1 44-17.1 60.8 0z"
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
                  d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m0-329.1-17.7-18c-29.4-29.8-77-29.8-106.4 0s-29.4 78.2 0 108l101.6 103.2c6.2 6.3 14.3 9.4 22.5 9.4s16.3-3.1 22.5-9.4l101.6-103.2c29.4-29.8 29.4-78.2 0-108s-77-29.8-106.4 0zm5.7 17 23.4-23.8c23.1-23.5 60.5-23.5 83.6 0 23.2 23.6 23.2 61.9 0 85.5L267.1 364.9c-3.1 3.1-7.1 4.7-11.1 4.7s-8-1.5-11.1-4.7L143.3 261.7c-23.2-23.6-23.2-61.9 0-85.5 23.1-23.5 60.5-23.5 83.6 0l23.4 23.8c3.1 3.2 8.3 3.2 11.4 0z"
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
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512M131.9 280.9c-29.4-29.8-29.4-78.2 0-108s77-29.8 106.4 0l17.7 18 17.7-18c29.4-29.8 77-29.8 106.4 0s29.4 78.2 0 108L278.5 384.1c-6.2 6.3-14.3 9.4-22.5 9.4s-16.3-3.1-22.5-9.4z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M131.9 172.9c-29.4 29.8-29.4 78.2 0 108l101.6 103.2c6.2 6.3 14.3 9.4 22.5 9.4s16.3-3.1 22.5-9.4l101.6-103.2c29.4-29.8 29.4-78.2 0-108s-77-29.8-106.4 0l-17.7 18-17.7-18c-29.4-29.8-77-29.8-106.4 0"
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
