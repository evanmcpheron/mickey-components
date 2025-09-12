import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SunsetIcon: React.FC<
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
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M354.5 104.3 320 135.7V32c0-17.7-14.3-32-32-32s-32 14.3-32 32v103.7l-34.5-31.3c-13.1-11.9-33.3-10.9-45.2 2.2s-10.9 33.3 2.2 45.2l88 80c12.2 11.1 30.8 11.1 43.1 0l88-80c13.1-11.9 14-32.1 2.2-45.2s-32.1-14-45.2-2.2zm48.7 132.8c-1-5.3-4.6-9.8-9.6-11.9s-10.7-1.5-15.2 1.6L288 289.1l-90.3-62.3c-4.5-3.1-10.2-3.7-15.2-1.6s-8.6 6.6-9.6 11.9L153 345 45.1 364.9c-5.3 1-9.8 4.6-11.9 9.6s-1.5 10.7 1.6 15.2L64 432h105.3c19-46.9 65-80 118.7-80s99.7 33.1 118.7 80H512l29.2-42.3c3.1-4.5 3.7-10.2 1.6-15.2s-6.6-8.6-11.9-9.6L423 345l-19.9-107.9zM0 488c0 13.3 10.7 24 24 24h528c13.3 0 24-10.7 24-24s-10.7-24-24-24H24c-13.3 0-24 10.7-24 24"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M305 217c-9.4 9.4-24.6 9.4-33.9 0l-80-80c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l39 39V24c0-13.3 10.7-24 24-24s24 10.7 24 24v118.1l39-39c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-80 80zm88.3 8.8c7.5 3.1 12.9 9.8 14.4 17.8l18.1 98.5 98.5 18.1c8 1.5 14.7 6.9 17.8 14.4s2.2 16.1-2.4 22.8L493.9 464H552c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h58.1l-45.9-66.5c-4.6-6.7-5.5-15.3-2.4-22.8s9.8-13 17.8-14.4l98.5-18.1 18.1-98.5c1.5-8 6.9-14.7 14.4-17.8s16.1-2.2 22.8 2.4l82.6 56.8 82.5-56.9c6.7-4.6 15.3-5.5 22.8-2.4M140.4 464h36.7c7.8-54.3 54.4-96 110.9-96s103.1 41.7 110.9 96h36.7l43.6-63.2-78.3-14.4c-9.8-1.8-17.5-9.5-19.3-19.3l-14.4-78.3-65.6 45.2c-8.2 5.7-19 5.7-27.2 0l-65.6-45.2-14.4 78.3c-1.8 9.8-9.5 17.5-19.3 19.3l-78.3 14.4zm209.6 0c-7.1-27.6-32.2-48-62-48s-54.9 20.4-62 48z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M299.3 219.3c-6.2 6.2-16.4 6.2-22.6 0l-96-96c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l68.7 68.7V16c0-8.8 7.2-16 16-16s16 7.2 16 16v153.4l68.7-68.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6zm94.2 5.9c5 2.1 8.6 6.6 9.6 11.9L423 345l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L500.9 448h-38.8l38.7-56.2-94.5-17.4c-6.5-1.2-11.6-6.3-12.8-12.8l-17.4-94.5-79.1 54.5c-5.5 3.8-12.7 3.8-18.2 0l-79.1-54.5-17.4 94.5c-1.2 6.5-6.3 11.6-12.8 12.8l-94.3 17.4 38.7 56.2H75.1l-40.3-58.3c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L153 345l19.8-107.9c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6l90.4 62.3 90.3-62.3c4.5-3.1 10.2-3.7 15.2-1.6M412 448h-33.5c-13.2-37.3-48.7-64-90.5-64s-77.4 26.7-90.5 64H164c14.2-55.2 64.3-96 124-96s109.8 40.8 124 96M16 480h544c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16-7.2-16-16s7.2-16 16-16"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M293.7 221.7c-3.1 3.1-8.2 3.1-11.3 0l-88-88c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0l74.3 74.3V8c0-4.4 3.6-8 8-8s8 3.6 8 8v188.7l74.3-74.3c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3l-88 88zm-111.2 3.6c5-2.1 10.7-1.5 15.2 1.6l90.3 62.2 90.3-62.3c4.5-3.1 10.2-3.7 15.2-1.6s8.6 6.6 9.6 11.9L423 345l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6l-7.4 3.1 7.4-3.1c2.1 5 1.5 10.7-1.6 15.2L489.9 464h-19.4l57.5-83.4-113.3-20.8c-3.3-.6-5.8-3.2-6.4-6.4L387.4 240l-94.9 65.4c-2.7 1.9-6.3 1.9-9.1 0L188.6 240l-20.8 113.3c-.6 3.3-3.2 5.8-6.4 6.4L48 380.6l57.5 83.4H86.1l-51.3-74.3c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L153 345l19.8-107.9c1-5.3 4.6-9.8 9.6-11.9zM398.9 464h-16.2c-7.6-45.4-47.1-80-94.7-80s-87.1 34.6-94.7 80h-16.2c7.8-54.3 54.4-96 110.9-96s103.1 41.7 110.9 96M8 496h560c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.4 0-8-3.6-8-8s3.6-8 8-8"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M403.1 237.1c-1-5.3-4.6-9.8-9.6-11.9s-10.7-1.5-15.2 1.6L288 289.1l-90.3-62.3c-4.5-3.1-10.2-3.7-15.2-1.6s-8.6 6.6-9.6 11.9L153 345 45.1 364.9c-5.3 1-9.8 4.6-11.9 9.6s-1.5 10.7 1.6 15.2L86.1 464H161c7.9-63.1 61.7-112 127-112s119.1 48.9 127 112h74.9l51.3-74.3c3.1-4.5 3.7-10.2 1.6-15.2s-6.6-8.6-11.9-9.6L423 345zM382.7 464c-7.6-45.4-47.1-80-94.7-80s-87.1 34.6-94.7 80z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M354.5 104.3 320 135.7V32c0-17.7-14.3-32-32-32s-32 14.3-32 32v103.7l-34.5-31.3c-13.1-11.9-33.3-10.9-45.2 2.2s-10.9 33.3 2.2 45.2l88 80c12.2 11.1 30.8 11.1 43.1 0l88-80c13.1-11.9 14-32.1 2.2-45.2s-32.1-14-45.2-2.2zM24 464c-13.3 0-24 10.7-24 24s10.7 24 24 24h528c13.3 0 24-10.7 24-24s-10.7-24-24-24z"
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
