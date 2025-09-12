import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ForkIcon: React.FC<
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
                  d="M412.4 5.9c5.2 6.4 4.8 15.6-1.1 21.5L320 118.6c-5.2 5.2-5.2 13.6 0 18.8 4.9 4.9 12.8 5.2 18.1.6l99.4-86.1c6.3-5.5 15.9-5.2 21.8.8s6.3 15.4.8 21.8L374 173.9c-4.6 5.3-4.3 13.2.6 18.1 5.2 5.2 13.6 5.2 18.8 0l91.3-91.3c5.8-5.8 15.1-6.3 21.5-1.1s7.7 14.4 3.2 21.2l-71 106.5c-18.6 27.9-49.9 44.6-83.4 44.6-19.3 0-37.9-5.5-53.9-15.7L54.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L255.7 211c-10.2-16-15.7-34.7-15.7-53.9 0-33.5 16.8-64.8 44.6-83.4l106.5-71c6.8-4.6 16-3.2 21.2 3.2z"
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
                  d="M398.4 43.2c10.6-8 12.8-23 4.8-33.6s-23-12.8-33.6-4.8l-122.7 92c-4.4 3.3-8.6 7-12.6 10.9l-1.9 1.9c-20.8 20.8-32.5 49-32.5 78.4 0 24.5 8.1 48.1 22.8 67.3L7 471c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l215.8-215.7c19.2 14.7 42.8 22.8 67.3 22.8 29.4 0 57.6-11.7 78.4-32.5l1.9-1.9c3.9-3.9 7.6-8.1 10.9-12.6l92-122.7c8-10.6 5.8-25.6-4.8-33.6s-25.6-5.8-33.6 4.8l-92 122.7c-2 2.6-4.1 5.1-6.4 7.4l-1.9 1.9C356.7 257.4 340.7 264 324 264s-32.7-6.6-44.5-18.4l-6.5-6.5-6.5-6.5C254.6 220.7 248 204.7 248 188s6.6-32.7 18.4-44.5l1.9-1.9c2.3-2.3 4.8-4.5 7.4-6.4zM457 89c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L307 171c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0z"
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
                  d="M401.5 28.9c7.1-5.2 8.7-15.2 3.4-22.4s-15.2-8.7-22.4-3.4L268.2 86.9c-4.4 3.3-8.6 6.9-12.5 10.7l-1.6 1.6C234.8 118.5 224 144.7 224 172c0 25 9.1 49.1 25.5 67.8L4.7 484.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l244.9-244.8C290.9 278.9 315 288 340 288c27.3 0 53.5-10.8 72.8-30.1l1.6-1.6c3.9-3.9 7.5-8.1 10.7-12.5l83.8-114.3c5.2-7.1 3.7-17.1-3.4-22.4s-17.1-3.7-22.4 3.4l-83.8 114.4c-2.3 3.1-4.8 6.1-7.6 8.8l-1.6 1.6C376.8 248.5 358.8 256 340 256s-36.8-7.5-50.1-20.8l-13.1-13.1C263.5 208.8 256 190.8 256 172s7.5-36.8 20.8-50.1l1.6-1.6c2.7-2.7 5.7-5.3 8.8-7.6zm41 31.1c6.6-5.8 7.3-15.9 1.5-22.6s-15.9-7.3-22.6-1.5l-128 112c-6.7 5.8-7.3 15.9-1.5 22.6s15.9 7.3 22.6 1.5zM476 90.5c5.8-6.7 5.1-16.8-1.5-22.6s-16.8-5.1-22.6 1.5l-112 128c-5.8 6.7-5.1 16.8 1.5 22.6s16.8 5.1 22.6-1.5z"
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
                  d="M401.1 20.2c3.6-2.6 4.4-7.6 1.9-11.2s-7.6-4.4-11.2-1.9L277.3 89c-3.2 2.3-6.3 4.9-9.1 7.7l-7.6 7.6c-28.1 28.1-28.1 73.7 0 101.8l17 17L3 497.7c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L289 234.3l17 17c28.1 28.1 73.7 28.1 101.8 0l7.6-7.6c2.8-2.8 5.4-5.8 7.7-9.1l81.8-114.5c2.6-3.6 1.7-8.6-1.9-11.2s-8.6-1.7-11.2 1.9L410 225.4c-1.8 2.5-3.8 4.9-6 7l-7.6 7.6c-21.9 21.9-57.3 21.9-79.2 0L272 194.7c-21.9-21.9-21.9-57.3 0-79.2l7.6-7.6c2.2-2.2 4.5-4.2 7-6zm34.7 33.4c3.3-3 3.5-8 .6-11.3s-8-3.5-11.3-.6L306.2 149.2c-3.3 3-3.5 8-.6 11.3s8 3.5 11.3.6zM470.3 87c3-3.3 2.7-8.3-.6-11.3s-8.3-2.7-11.3.6L350.9 195c-3 3.3-2.7 8.3.6 11.3s8.3 2.7 11.3-.6z"
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
                  d="M411.3 27.3c5.8-5.8 6.3-15.1 1.1-21.5S398-1.9 391.1 2.7l-106.5 71c-27.8 18.6-44.6 49.9-44.6 83.4 0 26.6 10.6 52.1 29.4 70.9l14.6 14.6c18.8 18.8 44.3 29.4 70.9 29.4 33.5 0 64.8-16.8 83.4-44.6l71-106.5c4.6-6.8 3.2-16-3.2-21.2s-15.6-4.8-21.5 1.1L393.4 192c-5.2 5.2-13.6 5.2-18.8 0-4.9-4.9-5.2-12.8-.6-18.1l86.1-99.4c5.5-6.3 5.2-15.9-.8-21.8s-15.4-6.3-21.8-.8L338.1 138c-5.3 4.6-13.2 4.3-18.1-.6-5.2-5.2-5.2-13.6 0-18.8z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M9.4 457.4 255.7 211c3.9 6.1 8.4 11.8 13.6 17l14.7 14.6c5.2 5.2 10.9 9.8 17 13.6L54.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3z"
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
