import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BoxOpenIcon: React.FC<
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
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M58.9 42.1c3-6.1 9.6-9.6 16.3-8.7L320 64l244.8-30.6c6.7-.8 13.3 2.7 16.3 8.7l41.7 83.4c9 17.9-.6 39.6-19.8 45.1l-163.4 46.7c-13.9 4-28.8-1.9-36.2-14.3L320 64l-83.4 139c-7.4 12.4-22.3 18.3-36.2 14.3L37.1 170.6c-19.3-5.5-28.8-27.2-19.8-45.1zM321.1 128l54.9 91.4c14.9 24.8 44.6 36.6 72.5 28.6L576 211.6v167c0 22-15 41.2-36.4 46.6l-204.1 51c-10.2 2.6-20.9 2.6-31 0l-204.1-51C79 419.7 64 400.5 64 378.5v-167L191.6 248c27.8 8 57.6-3.8 72.5-28.6l54.8-91.4z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M17.2 125.5c-9 17.9.6 39.6 19.8 45.1l163.3 46.7c13.9 4 28.8-1.9 36.2-14.3L320 64 75.2 33.4c-6.7-.8-13.3 2.7-16.3 8.7zM320 64l83.4 139c7.4 12.4 22.3 18.3 36.2 14.3l163.3-46.7c19.3-5.5 28.8-27.2 19.8-45.1l-41.6-83.4c-3-6.1-9.6-9.6-16.3-8.7zm-1.1 64h2.2zM528 225.3v153.2l-184 46V184c0-13.3-10.7-24-24-24s-24 10.7-24 24v240.5l-184-46V225.3l-48-13.7v167c0 22 15 41.2 36.4 46.6l204.1 51c10.2 2.5 20.9 2.5 31 0l204.1-51c21.4-5.3 36.4-24.5 36.4-46.6v-167z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M80.4 49.5 320 77.2l239.6-27.7c14.1-1.6 27.5 6.2 33.1 19.2l32 74.7c9.8 22.9-3.5 49.1-27.8 54.7l-159.1 36.7c-18.9 4.4-38.6-3.1-49.9-18.9l-67.9-95-67.9 95.1c-11.3 15.8-30.9 23.2-49.9 18.9L43 198c-24.3-5.6-37.6-31.8-27.8-54.7l32-74.7c5.6-13 19-20.8 33.1-19.2zm-3.7 31.8-32 74.7c-2 4.6.7 9.8 5.6 10.9l159.2 36.7c6.3 1.5 12.9-1 16.6-6.3l65.1-91.2zM544 236.7l32-9.1v151c0 22-15 41.2-36.4 46.6l-208 52c-7.6 1.9-15.6 1.9-23.3 0l-208-52C79 419.7 64 400.5 64 378.5v-151l32 9.1v141.9c0 7.3 5 13.7 12.1 15.5L304 443V208c0-8.8 7.2-16 16-16s16 7.2 16 16v235l195.9-49c7.1-1.8 12.1-8.2 12.1-15.5zM348.8 106.1l65.1 91.2c3.8 5.3 10.3 7.7 16.6 6.3l159.2-36.7c4.9-1.1 7.5-6.4 5.6-10.9l-32-74.7z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="m61.4 54.6-33.2 83c-3.6 9 1.5 19 10.8 21.4l167.7 43.5c9.9 2.6 20.2-1.4 25.9-9.8l73.6-109.3L70 49.7c-3.7-.5-7.2 1.5-8.6 4.9m10.8-20.7L320 69.3l247.8-35.4c11-1.6 21.6 4.6 25.7 14.8l33.2 83c7.2 17.9-3 38-21.7 42.9l-167.7 43.5c-16.4 4.3-33.7-2.3-43.2-16.4l-74-110-74 110c-9.5 14.1-26.8 20.6-43.2 16.4L35 174.6c-18.7-4.8-28.8-25-21.7-42.9l33.2-83c4.1-10.3 14.7-16.4 25.7-14.8M560 216.1l16-4.6v167c0 22-15 41.2-36.4 46.6l-208 52c-7.6 1.9-15.6 1.9-23.3 0l-208-52C79 419.7 64 400.5 64 378.5v-167l16 4.6v162.4c0 14.7 10 27.5 24.2 31l207.8 52V200c0-4.4 3.6-8 8-8s8 3.6 8 8v261.5l207.8-51.9c14.2-3.6 24.2-16.4 24.2-31zm10-166.4L333.8 83.4l73.6 109.3c5.7 8.4 16.1 12.4 25.9 9.8L601 159c9.3-2.4 14.4-12.5 10.8-21.4l-33.2-83c-1.4-3.4-4.9-5.5-8.6-4.9"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M17.2 125.5c-9 17.9.6 39.6 19.8 45.1l163.3 46.7c13.9 4 28.8-1.9 36.2-14.3L320 64 75.2 33.4c-6.7-.8-13.3 2.7-16.3 8.7zm605.5 0-41.6-83.4c-3-6.1-9.6-9.6-16.3-8.7L320 64l83.4 139c7.4 12.4 22.3 18.3 36.2 14.3l163.3-46.7c19.3-5.5 28.8-27.2 19.8-45.1"
                />
                <path
                  className="aps-icon-foreground"
                  d="m320 64-83.4 139c-7.4 12.4-22.3 18.3-36.2 14.3L64 178.3v200.2c0 22 15 41.2 36.4 46.6l204.1 51c10.2 2.6 20.9 2.6 31 0l204.1-51c21.4-5.3 36.4-24.5 36.4-46.6V178.3l-136.4 39c-13.9 4-28.8-1.9-36.2-14.3z"
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
