import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const DrumstickBiteIcon: React.FC<
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
                  d="M160 265.2c0 8.5-3.4 16.6-9.4 22.6l-26.8 26.8c-12.3 12.3-32.5 11.4-49.4 7.2Q67.5 320 60 320c-33.1 0-60 26.9-60 60s26.9 60 60 60c6.3 0 12 5.7 12 12 0 33.1 26.9 60 60 60s60-26.9 60-60c0-5-.6-9.8-1.8-14.5-4.2-16.9-5.2-37.1 7.2-49.4l26.8-26.8c6-6 14.1-9.4 22.6-9.4H336c6.3 0 12.4-.3 18.5-1 11.9-1.2 16.4-15.5 10.8-26-8.5-15.8-13.3-33.8-13.3-53 0-61.9 50.1-112 112-112 8 0 15.7.8 23.2 2.4 11.7 2.5 24.1-5.9 22-17.6C494.5 62.5 422.5 0 336 0c-97.2 0-176 78.8-176 176z"
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
                  d="M208 272c0 17.7 14.3 32 32 32h67.2c-2.1-10.4-3.2-21.1-3.2-32 0-82.8 62.8-150.8 143.4-159.1C425.4 74.1 383.7 48 336 48c-70.7 0-128 57.3-128 128v96m-48-32v-64C160 78.8 238.8 0 336 0c86.5 0 158.5 62.5 173.2 144.8 2.1 11.8-10.3 20.1-22 17.6-7.5-1.6-15.3-2.4-23.2-2.4-61.9 0-112 50.1-112 112 0 19.2 4.8 37.2 13.3 53 5.7 10.5 1.1 24.8-10.8 26-6.1.6-12.3 1-18.5 1h-92c-17.7 0-31.3 15.6-41.5 30-1.7 2.4-3.6 4.6-5.7 6.7-12 12-11.1 31.5-6.8 47.9 1.3 4.9 2 10 2 15.4 0 33.1-26.9 60-60 60s-60-26.9-60-60c0-6.3-5.7-12-12-12-33.1 0-60-26.9-60-60s26.9-60 60-60c5.3 0 10.5.7 15.4 2 16.4 4.3 35.9 5.2 47.9-6.8 2.1-2.1 4.4-4 6.8-5.7 14.4-10.2 30-23.9 30-41.5v-28z"
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
                  d="M192 272c0 26.5 21.5 48 48 48h88.2c-5.3-15-8.2-31.2-8.2-48 0-79.5 64.5-144 144-144 2.6 0 5.3.1 7.9.2C452.2 72.2 398.8 32 336 32c-79.5 0-144 64.5-144 144zm-32 0v-96C160 78.8 238.8 0 336 0c86.5 0 158.5 62.5 173.2 144.8 2.1 11.8-10.3 20.1-22 17.6-7.5-1.6-15.3-2.4-23.2-2.4-61.9 0-112 50.1-112 112 0 19.2 4.8 37.2 13.3 53 5.7 10.5 1.1 24.8-10.8 26-6.1.6-12.3 1-18.5 1h-96c-3 0-6-.2-8.9-.5L192 390.6v.1c0 .1-.1.5-.1 1.2.1 1.5.7 3.5 2 5.2 8.9 12 14.2 26.9 14.2 42.9 0 39.8-32.2 72-72 72-37.2 0-67.8-28.2-71.6-64.4C28.2 443.8 0 413.2 0 376c0-39.8 32.2-72 72-72 16.1 0 30.9 5.3 42.9 14.2 1.7 1.2 3.7 1.9 5.2 2 .7 0 1.1-.1 1.2-.1h.1l39.1-39.1c-.3-2.9-.5-5.9-.5-8.9zm12.2 42.4L144 342.7c-15 15-36.5 9.9-48.1 1.2-6.7-5-14.9-7.9-23.9-7.9-22.1 0-40 17.9-40 40s17.9 40 40 40c13.1 0 24 10.9 24 24 0 22.1 17.9 40 40 40s40-17.9 40-40c0-9-2.9-17.2-7.9-23.8-8.7-11.7-13.7-33.2 1.2-48.1l28.2-28.2c-10.3-6.4-18.9-15.1-25.4-25.4z"
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
                  d="M345.9 0C243.2 0 160 83.2 160 185.9v98.8l-45.8 45.8c-3.1 3.1-9.6 3.6-15.7-.3C88.6 323.7 76.7 320 64 320c-35.3 0-64 28.7-64 64s28.7 64 64 64c0 35.3 28.7 64 64 64s64-28.7 64-64c0-12.7-3.7-24.6-10.1-34.6-3.9-6.1-3.4-12.6-.3-15.7l45.7-45.7h98.8c17 0 33.6-2.3 49.3-6.6 2.5-.7 4.6-2.6 5.4-5.1s.5-5.2-1.1-7.3c-12.4-17.1-19.7-38.2-19.7-61 0-57.4 46.6-104 104-104 13.1 0 25.6 2.4 37.1 6.8 2.4.9 5.2.6 7.4-.9s3.5-3.9 3.5-6.6V166C512 74.4 437.6 0 345.9 0M208 348.7l-37.7 37.7c-10.3 10.3-8.2 25.8-1.8 35.6 4.8 7.5 7.6 16.4 7.6 25.9 0 26.5-21.5 48-48 48s-48-21.5-48-48c0-8.7-7.3-16-16-16-26.5 0-48-21.5-48-48s21.5-48 48-48c9.6 0 18.5 2.8 25.9 7.6 9.8 6.3 25.3 8.5 35.6-1.8l37.7-37.7c6.8 21.2 23.5 37.9 44.7 44.7m-32-162.8C176 92.1 252.1 16 345.9 16c79.6 0 144.7 61.9 149.8 140.2-10.1-2.7-20.7-4.2-31.7-4.2-66.3 0-120 53.7-120 120 0 22.1 6 42.8 16.4 60.5-11.1 2.3-22.5 3.5-34.3 3.5h-97c-29.3 0-53.1-23.8-53.1-53.1z"
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
                  d="M160.2 278.2c3 39.2 34.3 70.5 73.5 73.5l-36.4 36.4c-12.3 12.3-11.4 32.5-7.2 49.4 1.1 4.6 1.8 9.5 1.8 14.5 0 33.1-26.9 60-60 60s-60-26.9-60-60c0-6.3-5.7-12-12-12-33.1 0-60-26.9-60-60s26.9-60 60-60c5 0 9.8.6 14.5 1.8 16.9 4.2 37.1 5.2 49.4-7.2z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M160 272v-96C160 78.8 238.8 0 336 0c86.5 0 158.5 62.5 173.2 144.8 2.1 11.8-10.3 20.1-22 17.6-7.5-1.6-15.3-2.4-23.2-2.4-61.9 0-112 50.1-112 112 0 19.2 4.8 37.2 13.3 53 5.7 10.5 1.1 24.8-10.8 26-6.1.6-12.3 1-18.5 1h-96c-44.2 0-80-35.8-80-80"
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
