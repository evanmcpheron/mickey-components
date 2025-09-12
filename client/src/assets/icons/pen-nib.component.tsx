import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const PenNibIcon: React.FC<
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
                  d="m368.4 18.3-55.7 55.8 125.2 125.2 55.7-55.7c21.9-21.9 21.9-57.3 0-79.2l-46-46.1c-21.9-21.9-57.3-21.9-79.2 0M288 94.6l-9.2 2.8-144.1 43.2c-19.9 6-35.7 21.2-42.3 41L3.8 445.8c-3.8 11.3-1 23.9 7.3 32.4l153.6-153.5c-3-6.3-4.7-13.3-4.7-20.7 0-26.5 21.5-48 48-48s48 21.5 48 48-21.5 48-48 48c-7.4 0-14.4-1.7-20.7-4.7L33.7 500.9c8.6 8.3 21.1 11.2 32.4 7.3l264.3-88.6c19.7-6.6 35-22.4 41-42.3l43.2-144.1 2.8-9.2z"
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
                  d="M368.4 18.3c21.9-21.9 57.3-21.9 79.2 0l46.1 46.1c21.9 21.9 21.9 57.3 0 79.2l-71 71-10.5 10.4-40.6 149.1c-4.8 17.8-18.1 32-35.5 38.1L72 505c-18.5 6.5-39.1 1.8-52.9-12S.5 458.5 7 440l92.8-264.1c6.1-17.4 20.3-30.6 38.1-35.5L287 99.8l10.4-10.4 71-71zm-71.5 128.5-146.4 39.9c-2.5.7-4.6 2.6-5.4 5.1L62.5 426.9l102.2-102.2c-3-6.3-4.7-13.3-4.7-20.7 0-26.5 21.5-48 48-48s48 21.5 48 48-21.5 48-48 48c-7.4 0-14.4-1.7-20.7-4.7L85.1 449.5l235.1-82.6c2.5-.9 4.4-2.9 5.1-5.4l39.9-146.4z"
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
                  d="M377.4 45.3 310.6 112l89.4 89.4 66.7-66.7c12.5-12.5 12.5-32.8 0-45.3l-44.1-44.1c-12.5-12.5-32.8-12.5-45.3 0zm-97.7 52.4 75.1-75.1c25-25 65.5-25 90.5 0l44.1 44.1c25 25 25 65.5 0 90.5l-75.1 75.1L376.8 370a80.19 80.19 0 0 1-54.2 55.6L47.4 508.1c-12.3 3.7-25.7.3-34.7-8.8S.2 476.9 3.9 464.6l82.6-275.2c7.9-26.4 28.9-46.9 55.6-54.2zm3.6 32.2-132.8 36.2c-16 4.4-28.6 16.6-33.3 32.5L42.7 446.7l110.2-110.2c-5.6-9.5-8.9-20.6-8.9-32.5 0-35.3 28.7-64 64-64s64 28.7 64 64-28.7 64-64 64c-11.9 0-23-3.2-32.5-8.9L65.3 469.3l248.1-74.4c15.9-4.8 28.2-17.4 32.5-33.3l36.2-132.8-98.9-98.9zM208 272a32 32 0 1 0 0 64 32 32 0 1 0 0-64"
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
                  d="M379.7 31.6 307.3 104 408 204.7l72.4-72.4c15.6-15.6 15.6-40.9 0-56.6l-44.1-44.1c-15.6-15.6-40.9-15.6-56.6 0m-88 65.3 76.6-76.6c21.9-21.9 57.3-21.9 79.2 0l44.1 44.1c21.9 21.9 21.9 57.3 0 79.2L415 220.2l-45.5 149.9c-6.9 22.7-24.5 40.5-47.1 47.7L37.2 508.2c-9.5 3-19.8.5-26.9-6.6s-9.6-17.4-6.5-26.9l90.4-285c7.2-22.6 25-40.2 47.7-47.1l149.9-45.7zm2 16.1-147.2 44.9c-17.6 5.4-31.5 19.1-37.1 36.6L19 479.6c-.3.8-.4 1.6-.5 2.5l144.6-144.6c-7-9.4-11.1-21-11.1-33.5 0-30.9 25.1-56 56-56s56 25.1 56 56-25.1 56-56 56c-12.6 0-24.2-4.1-33.5-11.1L29.9 493.4c.8-.1 1.7-.2 2.5-.5l285.1-90.4c17.6-5.6 31.3-19.4 36.6-37.1L399 218.3 293.7 113.1zM208 264a40 40 0 1 0 0 80 40 40 0 1 0 0-80"
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
                  d="m293.9 92.8 125.3 125.3-4.5 15.1-43.3 144.1c-6 19.9-21.2 35.7-41 42.3L66.2 508.2c-11.3 3.8-23.9 1-32.4-7.4l153.5-153.5c6.3 3 13.3 4.7 20.7 4.7 26.5 0 48-21.5 48-48s-21.5-48-48-48-48 21.5-48 48c0 7.4 1.7 14.4 4.7 20.7L11.1 478.3c-8.3-8.6-11.1-21.1-7.3-32.5l88.6-264.3c6.6-19.7 22.4-35 42.3-41l144.1-43.1 15.1-4.5z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M368.4 18.3c21.9-21.9 57.3-21.9 79.2 0l46.1 46.1c21.9 21.9 21.9 57.3 0 79.2l-71 71-3.4 3.4L293.9 92.8l3.4-3.4 71-71z"
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
