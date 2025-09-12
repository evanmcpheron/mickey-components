import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const FishingRodIcon: React.FC<
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
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M295.9 48c-3 0-6 .4-8.8 1.2l-77.3 22.1C137.7 91.9 88 157.8 88 232.8V288h8c17.7 0 32 14.3 32 32v160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V320c0-17.7 14.3-32 32-32h8v-55.2c0-96.4 63.9-181.2 156.7-207.7l77.1-22C281 1 288.4 0 295.9 0 340.1 0 376 35.9 376 80.1V136c0 13.3-10.7 24-24 24s-24-10.7-24-24V80.1c0-17.7-14.4-32.1-32.1-32.1M256 344c0-71.6 55.6-127.8 89-148.1 4.3-2.6 9.6-2.6 14 0 33.5 20.3 89 76.6 89 148.1 0 32-16 80-64 112l27.3 27.3c3 3 4.7 7.1 4.7 11.3v1.4c0 8.8-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16v-1.4c0-4.2 1.7-8.3 4.7-11.3L320 456c-48-32-64-80-64-112m128-32a24 24 0 1 0-48 0 24 24 0 1 0 48 0"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M280.4 48c-3.2 0-6.3.5-9.3 1.4l-64.5 19.8C136.1 90.9 88 156.1 88 229.8v42.9c22.7 3.8 40 23.6 40 47.3v144c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V320c0-23.8 17.3-43.5 40-47.3v-42.9C40 135 101.8 51.2 192.5 23.4l64.4-19.9c7.6-2.3 15.5-3.5 23.5-3.5 44 0 79.6 35.7 79.6 79.6V136c0 13.3-10.7 24-24 24s-24-10.7-24-24V79.6c0-17.4-14.2-31.6-31.6-31.6M48 320v144h32V320zm208 24c0-71.6 55.6-127.8 89-148.1 4.3-2.6 9.6-2.6 14 0 33.5 20.3 89 76.6 89 148.1 0 32-16 80-64 112l27.3 27.3c3 3 4.7 7.1 4.7 11.3v1.4c0 8.8-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16v-1.4c0-4.2 1.7-8.3 4.7-11.3L320 456c-48-32-64-80-64-112m128-32a24 24 0 1 0-48 0 24 24 0 1 0 48 0"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M280.4 32q-6 0-11.7 1.8l-64.5 19.8C130.4 76.3 80 144.5 80 221.8V288h8c22.1 0 40 17.9 40 40v144c0 22.1-17.9 40-40 40H40c-22.1 0-40-17.9-40-40V328c0-22.1 17.9-40 40-40h8v-66.2C48 130.5 107.6 49.9 194.8 23l64.5-19.8c6.8-2.1 13.9-3.2 21.1-3.2C319.9 0 352 32.1 352 71.6V136c0 8.8-7.2 16-16 16s-16-7.2-16-16V71.6c0-21.9-17.7-39.6-39.6-39.6m48.5 145.7c4.5-2.3 9.8-2.3 14.3 0 17.9 8.9 43.7 27.1 65.2 53.4C430 257.5 448 292.9 448 336c0 33.5-15.1 80.9-58.2 115.8l23.5 35.3c3.3 4.9 3.6 11.2.8 16.4s-8.2 8.5-14.1 8.5H272c-5.9 0-11.3-3.2-14.1-8.5s-2.5-11.5.8-16.4l23.5-35.3C239.1 416.9 224 369.5 224 336c0-43.1 18-78.5 39.6-104.9 21.5-26.3 47.4-44.4 65.2-53.4zM256 336c0 27.3 13.9 70 56.9 98.7 7.4 4.9 9.3 14.8 4.4 22.2L301.9 480h68.2l-15.4-23.1c-4.9-7.4-2.9-17.3 4.4-22.2 43-28.7 56.9-71.4 56.9-98.7 0-33.7-14-62.3-32.4-84.7-15.6-19-33.8-33-47.6-41.1-13.8 8.1-32 22.1-47.6 41.1-18.4 22.4-32.4 51-32.4 84.7M88 320H40c-4.4 0-8 3.6-8 8v144c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V328c0-4.4-3.6-8-8-8m272-32a24 24 0 1 1 0 48 24 24 0 1 1 0-48"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M296.7 16c-4.9 0-9.8.8-14.5 2.3l-82.5 26.5C123.6 69.2 72 140 72 220v68h16c22.1 0 40 17.9 40 40v144c0 22.1-17.9 40-40 40H40c-22.1 0-40-17.9-40-40V328c0-22.1 17.9-40 40-40h16v-68c0-86.9 56.1-163.8 138.8-190.4L277.3 3c6.3-2 12.8-3 19.4-3 35 0 63.3 28.4 63.3 63.3V152c0 4.4-3.6 8-8 8s-8-3.6-8-8V63.3c0-26.1-21.2-47.3-47.3-47.3m51.5 193c2.4-1.3 5.3-1.3 7.7 0 30.1 16.4 92.2 61.7 92.2 143 0 33-14.5 73.3-56.1 106l25.6 41.8c1.5 2.5 1.6 5.6.2 8.1s-4.1 4.1-7 4.1H293.3c-2.9 0-5.6-1.6-7-4.1s-1.4-5.6.2-8.1l25.6-41.8c-41.6-32.7-56.1-73-56.1-106 0-81.3 62.1-126.6 92.2-143M272 352c0 29.4 13.4 67 55.4 97.5 3.4 2.5 4.3 7.1 2.1 10.6L307.6 496h88.8l-21.9-35.8c-2.2-3.6-1.3-8.2 2.1-10.6 42-30.6 55.4-68.2 55.4-97.6 0-69.1-50.6-109.8-80-126.8-29.4 17-80 57.7-80 126.8M88 304H40c-13.3 0-24 10.7-24 24v144c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V328c0-13.3-10.7-24-24-24m280-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M287 49.2c2.9-.8 5.8-1.2 8.8-1.2 17.8 0 32.2 14.4 32.2 32.1V136c0 13.3 10.7 24 24 24s24-10.7 24-24V80.1C376 35.9 340.1 0 295.9 0c-7.4 0-14.9 1-22 3.1l-77.2 22C103.9 51.6 40 136.4 40 232.8V288h-8c-17.7 0-32 14.3-32 32v160c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V320c0-17.7-14.3-32-32-32h-8v-55.2c0-75 49.7-140.9 121.8-161.5z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M345 195.9c-33.5 20.3-89 76.6-89 148.1 0 32 16 80 64 112l-27.3 27.3c-3 3-4.7 7.1-4.7 11.3v1.4c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16v-1.4c0-4.2-1.7-8.3-4.7-11.3L384 456c48-32 64-80 64-112 0-71.6-55.6-127.8-89-148.1-4.3-2.6-9.6-2.6-14 0m15 92.1a24 24 0 1 1 0 48 24 24 0 1 1 0-48"
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
