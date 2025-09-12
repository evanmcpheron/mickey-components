import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const RacquetIcon: React.FC<
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
                  d="M349 64c-36 0-76.4 15.8-108.8 48.2S192 184.9 192 221c0 28.2 9.6 53.2 27.7 71.3 40.4 40.4 120.7 38.9 180.1-20.5C432.2 239.4 448 199.1 448 163c0-28.2-9.6-53.2-27.7-71.3S377.1 64 349 64m-154 2.9C238.5 23.4 294.8 0 349 0c42.8 0 84.9 14.8 116.6 46.5S512 120.2 512 163c0 54.2-23.4 110.5-66.9 154-54.4 54.4-131.9 78.7-198.2 61.7-29.4-7.5-62.9-5.5-84.3 16L148.3 409c6.4 12.1 4.5 27.4-5.6 37.6l-56 56c-12.5 12.5-32.8 12.5-45.3 0l-32-32c-12.5-12.5-12.5-32.8 0-45.3l56-56c10.2-10.2 25.5-12.1 37.6-5.6l14.5-14.5c21.4-21.4 23.5-54.7 16-84-3.7-14.3-5.5-29.2-5.5-44.2 0-54.2 23.4-110.5 66.9-154z"
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
                  d="M349 48c31.9 0 61.1 10.9 82.6 32.4S464 131.2 464 163c0 40.6-17.7 84.9-52.9 120.1-64 64-154.5 68.7-202.7 20.5-21.5-21.5-32.4-50.8-32.4-82.6 0-40.6 17.7-84.9 52.9-120.1S308.4 48 349 48m0-48c-54.2 0-110.5 23.4-154 66.9s-67 99.8-66.9 154c0 17.2 2.4 34.3 7.3 50.6 8.2 27.4 7.6 58.9-9.9 80.6-12.6-11.3-31.9-10.9-44 1.2l-72 72C-3 437.8-3 458.1 9.5 470.6l32 32c12.5 12.5 32.8 12.5 45.3 0l72-72c12.1-12.1 12.5-31.4 1.2-44 21.7-17.5 53.2-18 80.5-9.7 67.7 20.4 148.5-3.6 204.8-59.8 43.6-43.6 67-99.8 66.9-154 0-42.8-14.8-84.9-46.5-116.6S391.8 0 349 0M54.6 448l49.4-49.4 9.4 9.4L64 457.4z"
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
                  d="M349 32c35.5 0 69 12.2 93.9 37.1S480 127.5 480 163c0 45.1-19.6 93.4-57.6 131.4-68.1 68.1-168.9 76.9-225.3 20.5C172.2 290 160 256.5 160 221c0-45.1 19.6-93.4 57.6-131.4S303.9 32 349 32m0-32c-54.2 0-110.5 23.4-154 66.9s-67 99.8-66.9 154c0 28.2 6.4 56 19.7 80.7 7.8 14.4 7.2 32.8-4.4 44.4l-12 12-4.7-4.7c-12.5-12.5-32.8-12.5-45.3 0l-72 72c-12.5 12.5-12.5 32.8 0 45.3l32 32c12.5 12.5 32.8 12.5 45.3 0l72-72c12.5-12.5 12.5-32.8 0-45.3l-4.7-4.7 11.9-11.9c11.6-11.6 30-12.2 44.4-4.3 72.5 39.4 169.9 17.5 234.7-47.4 43.6-43.6 67-99.8 66.9-154 0-42.8-14.8-84.9-46.5-116.6S391.8 0 349 0M104 376l32 32-72 72-32-32z"
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
                  d="M349 16c39.2 0 77 13.5 105.3 41.8S496 123.8 496 163c0 49.6-21.5 101.9-62.3 142.7-72.2 72.2-183.4 85.1-248 20.5-28.2-28.3-41.7-66-41.7-105.2 0-49.6 21.5-101.9 62.3-142.7S299.3 16 349 16m0-16c-54.2 0-110.5 23.4-154 66.9s-67 99.8-66.9 154c0 40.3 13.1 79.8 40.9 110.8l-32 32-10.3-10.3c-12.5-12.5-32.8-12.5-45.3 0l-72 72c-12.5 12.5-12.5 32.8 0 45.3l32 32c12.5 12.5 32.8 12.5 45.3 0l72-72c12.5-12.5 12.5-32.8 0-45.3L148.3 375l32-32c73.3 66.3 190.4 48.3 264.8-26 43.6-43.6 67-99.8 66.9-154 0-42.8-14.8-84.9-46.5-116.6S391.8 0 349 0M92.7 364.7c6.2-6.2 16.4-6.2 22.6 0l32 32c6.2 6.2 6.2 16.4 0 22.6l-72 72c-6.2 6.2-16.4 6.2-22.6 0l-32-32c-6.2-6.2-6.2-16.4 0-22.6z"
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
                  d="M65.4 369.4c12.5-12.5 32.8-12.5 45.3 0l32 32c12.5 12.5 12.5 32.8 0 45.3l-56 56c-12.5 12.5-32.8 12.5-45.3 0l-32-32c-12.5-12.5-12.5-32.8 0-45.3z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M349 64c-36 0-76.4 15.8-108.8 48.2S192 184.9 192 221c0 28.2 9.6 53.2 27.7 71.3 40.4 40.4 120.7 38.9 180.1-20.5C432.2 239.4 448 199.1 448 163c0-28.2-9.6-53.2-27.7-71.3S377.1 64 349 64m-154 2.9C238.5 23.4 294.8 0 349 0c42.8 0 84.9 14.8 116.6 46.5S512 120.2 512 163c0 54.2-23.4 110.5-66.9 154-54.4 54.4-131.9 78.7-198.2 61.7-29.4-7.5-62.9-5.5-84.3 16L148.3 409c-1.5-2.7-3.3-5.3-5.6-7.6l-32-32c-2.3-2.3-4.9-4.2-7.6-5.6l14.5-14.5c21.4-21.4 23.5-54.7 16-84-3.8-14.4-5.6-29.3-5.6-44.3 0-54.2 23.4-110.5 66.9-154z"
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
