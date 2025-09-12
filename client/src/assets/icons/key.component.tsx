import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const KeyIcon: React.FC<
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
                  d="M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0 160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17v80c0 13.3 10.7 24 24 24h80c13.3 0 24-10.7 24-24v-40h40c13.3 0 24-10.7 24-24v-40h40c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3m40-256a40 40 0 1 1 0 80 40 40 0 1 1 0-80"
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
                  d="M208 176c0-70.7 57.3-128 128-128s128 57.3 128 128-57.3 128-128 128c-10.4 0-20.5-1.2-30.1-3.6-8.1-2-16.7.4-22.6 6.4L254.1 336H200c-13.3 0-24 10.7-24 24v40h-40c-13.3 0-24 10.7-24 24v40H48v-78.1l157.2-157.2c5.9-5.9 8.3-14.5 6.4-22.6-2.3-9.6-3.6-19.7-3.6-30.1M336 0c-97.2 0-176 78.8-176 176 0 9.5.7 18.8 2.2 27.9L7 359c-4.5 4.5-7 10.6-7 17v112c0 13.3 10.7 24 24 24h112c13.3 0 24-10.7 24-24v-40h40c13.3 0 24-10.7 24-24v-40h40c6.4 0 12.5-2.5 17-7l27.2-27.2c9.1 1.4 18.4 2.2 27.9 2.2 97.2 0 176-78.8 176-176S433.2 0 336 0m32 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
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
                  d="M192 176c0-79.5 64.5-144 144-144s144 64.5 144 144-64.5 144-144 144c-11.1 0-22-1.3-32.4-3.6-5.4-1.2-11 .4-14.9 4.3L257.4 352H208c-8.8 0-16 7.2-16 16v48h-48c-8.8 0-16 7.2-16 16v48H32v-81.4l162.8-162.8c4.2-4.2 5.7-10.5 3.9-16.2-4.4-13.8-6.7-28.4-6.7-43.7zM336 0c-97.2 0-176 78.8-176 176 0 15.1 1.9 29.8 5.5 43.9L4.7 380.7c-3 3-4.7 7.1-4.7 11.3v104c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16v-48h48c8.8 0 16-7.2 16-16v-48h40c4.2 0 8.3-1.7 11.3-4.7l30-30c10 1.8 20.2 2.7 30.7 2.7 97.2 0 176-78.8 176-176S433.2 0 336 0m32 168a24 24 0 1 0 0-48 24 24 0 1 0 0 48"
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
                  d="M287.2 328.4c15.4 4.9 31.8 7.6 48.8 7.6 88.4 0 160-71.6 160-160S424.4 16 336 16 176 87.6 176 176c0 17.1 2.7 33.5 7.6 48.8 1.8 5.7.3 12-3.9 16.2L18.3 402.3c-1.5 1.5-2.3 3.5-2.3 5.7v80c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8v-40c0-8.8 7.2-16 16-16h40c4.4 0 8-3.6 8-8v-40c0-8.8 7.2-16 16-16h40c2.1 0 4.2-.8 5.7-2.3l33.3-33.4c4.2-4.2 10.5-5.8 16.2-3.9M336 352c-18.7 0-36.8-2.9-53.7-8.3L249 377c-4.5 4.5-10.6 7-17 7h-40v40c0 13.3-10.7 24-24 24h-40v40c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24v-80c0-6.4 2.5-12.5 7-17l161.3-161.3c-5.4-16.9-8.3-35-8.3-53.7C160 78.8 238.8 0 336 0s176 78.8 176 176-78.8 176-176 176m32-248a40 40 0 1 1 0 80 40 40 0 1 1 0-80m24 40a24 24 0 1 0-48 0 24 24 0 1 0 48 0"
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
                  d="m168.3 229.7 114 114L249 377c-4.5 4.5-10.6 7-17 7h-40v40c0 13.3-10.7 24-24 24h-40v40c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24v-80c0-6.4 2.5-12.5 7-17z"
                />
                <path
                  className="aps-icon-foreground"
                  d="m168.3 229.7 114 114c16.9 5.4 35 8.3 53.7 8.3 97.2 0 176-78.8 176-176S433.2 0 336 0 160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7M336 136a40 40 0 1 1 80 0 40 40 0 1 1-80 0"
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
