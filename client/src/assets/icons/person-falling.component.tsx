import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const PersonFallingIcon: React.FC<
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
                  d="M288 0c17.7 0 32 14.3 32 32v9.8c0 54.6-27.9 104.6-72.5 133.6l.2.3 56.8 80.3H392c15.1 0 29.3 7.1 38.4 19.2l43.2 57.6c10.6 14.1 7.7 34.2-6.4 44.8s-34.2 7.7-44.8-6.4L384 320h-97.4l92.3 142.6c9.6 14.8 5.4 34.6-9.5 44.3s-34.6 5.4-44.3-9.5L164.5 249.2c-2.9 9.2-4.5 19-4.5 29V352c0 17.7-14.3 32-32 32s-32-14.3-32-32v-73.8c0-65.1 39.6-123.7 100.1-147.9 36.2-14.5 59.9-49.5 59.9-88.5V32c0-17.7 14.3-32 32-32M112 32a48 48 0 1 1 0 96 48 48 0 1 1 0-96"
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
                  d="M320 24c0-13.3-10.7-24-24-24s-24 10.7-24 24v10.4c0 46.1-28.9 87.3-72.2 103.1C137.5 160.1 96 219.3 96 285.6V360c0 13.3 10.7 24 24 24s24-10.7 24-24v-74.4c0-10.7 1.5-21.1 4.4-30.9L307.9 501c7.2 11.1 22.1 14.3 33.2 7.1s14.3-22.1 7.1-33.2l-84.6-130.6L327 304h46.3l64.8 72.1c8.9 9.9 24 10.6 33.9 1.8s10.6-24 1.8-33.9l-67.2-74.7c-7.6-8.4-18.4-13.2-29.7-13.2h-76.2l-58.2-85.9c47.4-28 77.5-79.3 77.5-135.8zm-56.1 263.2L237.5 304l-61.8-95.5c6.7-6.8 14.4-12.8 22.8-17.7zM112 128a48 48 0 1 0 0-96 48 48 0 1 0 0 96"
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
                  d="M320 16c0-8.8-7.2-16-16-16s-16 7.2-16 16v10.8c0 48.1-27.6 91.3-70 111.9-1.8.4-3.6 1.1-5.2 2.2-.2.1-.4.3-.6.4-3 1.3-6.1 2.4-9.3 3.5C139.1 166.1 96 225.9 96 293.2V368c0 8.8 7.2 16 16 16s16-7.2 16-16v-74.8c0-21.7 5.6-42.5 15.8-60.6l178.8 272.2c4.9 7.4 14.8 9.4 22.2 4.6s9.4-14.8 4.6-22.2l-96.7-147.1 57.5-44.7 67-6.7 74.6 89.5c5.7 6.8 15.7 7.7 22.5 2s7.7-15.7 2-22.5l-74.6-89.5c-6.8-8.2-17.2-12.4-27.8-11.4L312 263l-67.2-102.5c46-27.9 75.2-78.2 75.2-133.7zm-37.5 260.4-47.4 36.9-69.7-106.1c-.4-.6-.8-1.1-1.3-1.7 13.4-13.5 30-24.1 48.9-30.4.8-.3 1.7-.6 2.5-.9l66.9 102.1zM96 88a24 24 0 1 1 48 0 24 24 0 1 1-48 0m80 0a56 56 0 1 0-112 0 56 56 0 1 0 112 0"
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
                  d="M231.7 172.5c.8-4.3 3.3-8.1 7-10.5C278.9 135.9 304 91 304 41.8V32c0-8.8-7.2-16-16-16s-16 7.2-16 16v9.8c0 45.5-27.7 86.4-69.9 103.3-54.4 21.8-90.1 74.4-90.1 133V352c0 8.8 7.2 16 16 16s16-7.2 16-16v-73.8c0-11.7 1.8-23.1 5.3-33.9 1.9-5.9 7-10.2 13.1-11s12.2 2 15.5 7.2l160.7 248.2c4.8 7.4 14.7 9.5 22.1 4.7s9.5-14.7 4.7-22.1l-92.2-142.6c-3.2-4.9-3.4-11.2-.6-16.3s8.2-8.4 14.1-8.4H368c5 0 9.8 2.4 12.8 6.4l38.4 51.2c5.3 7.1 15.3 8.5 22.4 3.2s8.5-15.3 3.2-22.4l-43.2-57.6c-6-8.1-15.5-12.8-25.6-12.8h-71.5c-5.2 0-10.1-2.5-13.1-6.7l-56.8-80.1-.2-.3c-2.6-3.6-3.5-8-2.7-12.3zm25 16 47.8 67.5H376c15.1 0 29.3 7.1 38.4 19.2l43.2 57.6c10.6 14.1 7.7 34.2-6.4 44.8s-34.2 7.7-44.8-6.4L368 320h-81.4l1.4 2.2 8.9 13.8 81.9 126.6c9.6 14.8 5.4 34.6-9.5 44.3s-34.6 5.4-44.3-9.5L176.7 267.9l-12.1-18.8c-2.3 7.3-3.8 14.9-4.3 22.8-.1 2.1-.2 4.1-.2 6.2v73.8c0 17.7-14.3 32-32 32s-32-14.3-32-32v-73.7c0-65.1 39.6-123.7 100.1-147.9 36.1-14.5 59.8-49.5 59.8-88.5V32c0-17.7 14.3-32 32-32s32 14.3 32 32v9.8c0 49.4-22.9 95.1-60.3 124.8-3.9 3.1-8 6-12.2 8.8l.2.3 9 12.7zM120 128a40 40 0 1 0 0-80 40 40 0 1 0 0 80M64 88a56 56 0 1 1 112 0 56 56 0 1 1-112 0"
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
                  d="M64 80a48 48 0 1 1 96 0 48 48 0 1 1-96 0"
                />
                <path
                  className="aps-icon-foreground"
                  d="M320 32c0-17.7-14.3-32-32-32s-32 14.3-32 32v9.8c0 39-23.7 74-59.9 88.4C135.6 154.5 96 213 96 278.2V352c0 17.7 14.3 32 32 32s32-14.3 32-32v-73.8c0-10 1.6-19.8 4.5-29l160.6 248.2c9.6 14.8 29.4 19.1 44.3 9.5s19.1-29.4 9.5-44.3L286.6 320H368l38.4 51.2c10.6 14.1 30.7 17 44.8 6.4s17-30.7 6.4-44.8l-43.2-57.6c-9.1-12.1-23.3-19.2-38.4-19.2h-71.5l-56.8-80.2-.2-.3c44.7-29 72.5-79 72.5-133.6v-9.8z"
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
