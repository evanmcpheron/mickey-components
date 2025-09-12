import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const LightCeilingIcon: React.FC<
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
                  d="M256 0c17.7 0 32 14.3 32 32v130c115.8 14.4 207.6 106.3 222 222.1 2.2 17.5-12.4 31.9-30 31.9H32c-17.7 0-32.2-14.4-30-31.9C16.4 268.2 108.2 176.4 224 162V32c0-17.7 14.3-32 32-32m0 512c-35.3 0-64-28.7-64-64h128c0 35.3-28.7 64-64 64"
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
                  d="M280 24c0-13.3-10.7-24-24-24s-24 10.7-24 24v137.1C112.4 172.2 16.7 265.6 2 384.1-.2 401.6 14.3 416 32 416h448c17.7 0 32.2-14.4 30-31.9-14.7-118.5-110.5-211.8-230-223zm178.4 344H53.6C75.2 276.3 157.7 208 256 208s180.8 68.3 202.4 160M256 512c35.3 0 64-28.7 64-64H192c0 35.3 28.7 64 64 64"
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
                  d="M256 0c8.8 0 16 7.2 16 16v144.5c123.3 7.6 223 102.5 238 223.6 2.2 17.5-12.4 31.9-30 31.9H32c-17.7 0-32.2-14.4-30-31.9 15-121.2 114.7-216 238-223.6V16c0-8.8 7.2-16 16-16M34.3 384h443.4C462.2 275.5 368.8 192 256 192S49.8 275.5 34.3 384M256 512c-38.7 0-71-27.5-78.4-64h33.1c6.6 18.6 24.4 32 45.3 32s38.7-13.4 45.3-32h33.1c-7.4 36.5-39.7 64-78.4 64"
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
                  d="M256 0c4.4 0 8 3.6 8 8v152.1c126.9 3.9 230.6 100.2 246 224 2.2 17.5-12.4 31.9-30 31.9H32c-17.7 0-32.2-14.4-30-31.9 15.4-123.8 119.1-220.1 246-224V8c0-4.4 3.6-8 8-8M17.9 386c-.8 6.7 4.7 14 14.1 14h448c9.4 0 15-7.3 14.2-14C479.4 267.6 378.4 176 256 176S32.6 267.6 17.9 386M256 512c-35.3 0-64-28.7-64-64h16c0 26.5 21.5 48 48 48s48-21.5 48-48h16c0 35.3-28.7 64-64 64"
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
                  d="M256 0c17.7 0 32 14.3 32 32v160h-64V32c0-17.7 14.3-32 32-32m64 448c0 35.3-28.7 64-64 64s-64-28.7-64-64z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M256 192C125.4 192 17.7 289.8 2 416.1-.2 433.6 14.3 448 32 448h448c17.7 0 32.2-14.4 30-31.9C494.3 289.8 386.6 192 256 192"
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
