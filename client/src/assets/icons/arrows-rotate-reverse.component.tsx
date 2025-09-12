import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ArrowsRotateReverseIcon: React.FC<
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
                  d="M406.6 202.6c-7.7-21.8-20.2-42.3-37.8-59.8-62.5-62.5-163.8-62.5-226.3 0l-17 17.2h34.3c17.7 0 32 14.3 32 32s-14.3 32-32 32H47.9c-17.7 0-32-14.3-32-32V80c0-17.7 14.3-32 32-32s32 14.3 32 32v35.2l17.5-17.6c87.5-87.5 229.3-87.5 316.8 0 24.4 24.4 42.1 53.1 52.9 83.7 5.9 16.7-2.9 34.9-19.5 40.8s-34.9-2.9-40.8-19.5zm66.1 86.6c5 1.5 9.8 4.2 13.7 8.2 4 4 6.7 8.9 8.1 14 .3 1.2.6 2.5.8 3.8.3 1.7.4 3.4.4 5.1V432c0 17.7-14.3 32-32 32s-32-14.3-32-32v-35.1l-17.6 17.5c-87.5 87.4-229.3 87.4-316.7 0C73 390 55.3 361.3 44.5 330.6c-5.9-16.7 2.9-34.9 19.5-40.8s34.9 2.9 40.8 19.5c7.7 21.8 20.2 42.3 37.8 59.8 62.5 62.5 163.8 62.5 226.3 0l.1-.1 17.1-17h-34.3c-17.7 0-32-14.3-32-32s14.3-32 32-32h111.6q2.4 0 4.8.3c2.4.3 3.1.5 4.6 1z"
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
                  d="M418 187.1C391.2 124.1 328.7 80 256 80c-39.7 0-77.8 15.8-105.9 43.9L97.9 176H152c13.3 0 24 10.7 24 24s-10.7 24-24 24H40c-13.3 0-24-10.7-24-24V88c0-13.3 10.7-24 24-24s24 10.7 24 24v54.1L116.1 90c37.1-37.2 87.4-58 139.9-58 92.6 0 172.1 56.2 206.2 136.3 5.2 12.2-.5 26.3-12.7 31.5s-26.3-.5-31.5-12.7m-368 157c-5.2-12.2.4-26.3 12.6-31.5s26.3.4 31.5 12.6C121 388.1 183.4 432 256 432c39.7 0 77.8-15.8 105.9-43.9l52.2-52.1H360c-13.3 0-24-10.7-24-24s10.7-24 24-24h112c13.3 0 24 10.7 24 24v112c0 13.3-10.7 24-24 24s-24-10.7-24-24v-54.1L395.9 422c-37.1 37.2-87.4 58-139.9 58-92.5 0-171.8-56-206-135.9"
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
                  d="M442.6 210.6C422.2 126.5 346.4 64 256 64c-71.1 0-133.1 38.6-166.3 96H144c8.8 0 16 7.2 16 16s-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16s16 7.2 16 16v60.6C103.2 75.5 174.5 32 256 32c106.4 0 195.5 74.2 218.3 173.6 2.2 9.6-5.4 18.4-15.3 18.4-7.9 0-14.6-5.7-16.5-13.4zM69.4 301.4C89.8 385.5 165.6 448 256 448c71.1 0 133.1-38.6 166.3-96h-54.5c-8.8 0-16-7.2-16-16s7.2-16 16-16h96c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16v-60.2C408.6 436.6 337.3 480 256 480c-106.4 0-195.5-74.2-218.3-173.6-2.2-9.6 5.4-18.4 15.3-18.4 7.9 0 14.6 5.7 16.5 13.4z"
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
                  d="M467.3 224c4.9 0 8.7-4.3 7.8-9.2-9.7-51.8-37.5-100.4-82.3-135.3-97.5-76.2-238.3-58.9-314.5 38.6l-.1.1L46.9 160V72c0-4.4-3.6-8-8-8s-8 3.6-8 8v112c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8s-3.6-8-8-8h-96L91 127.9c70.7-90.5 201.4-106.5 291.9-35.8 41.4 32.3 67.2 77.2 76.3 125.1.7 3.9 4.1 6.8 8.1 6.8m3.4 96h-112c-4.4 0-8 3.6-8 8s3.6 8 8 8H456l-36.1 48.1c-70.7 90.5-201.4 106.5-291.9 35.8-41.4-32.4-67.2-77.3-76.3-125.1-.7-3.9-4.1-6.8-8.1-6.8-4.9 0-8.7 4.3-7.8 9.2 9.7 51.8 37.5 100.4 82.3 135.4 97.5 76.2 238.3 58.9 314.4-38.6l.1-.1 30.1-40V440c0 4.4 3.6 8 8 8s8-3.6 8-8V328c0-4.4-3.6-8-8-8"
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
                  d="M472.8 289.3c5 1.5 9.8 4.2 13.7 8.2 4 4 6.7 8.9 8.1 14 .3 1.2.6 2.5.8 3.8.3 1.7.4 3.4.4 5.1V432c0 17.7-14.3 32-32 32s-32-14.3-32-32v-35.1l-17.6 17.5c-87.5 87.4-229.3 87.4-316.7 0-24.5-24.4-42.2-53.1-53-83.8-5.9-16.7 2.9-34.9 19.5-40.8s34.9 2.9 40.8 19.5c7.7 21.8 20.2 42.3 37.8 59.8 62.5 62.5 163.8 62.5 226.3 0l.1-.1 17.1-17h-34.3c-17.7 0-32-14.3-32-32s14.3-32 32-32h111.6q2.4 0 4.8.3c1.6.2 3.1.5 4.6 1"
                />
                <path
                  className="aps-icon-foreground"
                  d="M406.6 202.6c-7.7-21.8-20.2-42.3-37.8-59.8-62.5-62.5-163.8-62.5-226.3 0l-17 17.2h34.3c17.7 0 32 14.3 32 32s-14.3 32-32 32H47.9c-17.7 0-32-14.3-32-32V80c0-17.7 14.3-32 32-32s32 14.3 32 32v35.2l17.5-17.6c87.5-87.5 229.3-87.5 316.8 0 24.4 24.4 42.1 53.1 52.9 83.7 5.9 16.7-2.9 34.9-19.5 40.8s-34.9-2.9-40.8-19.5z"
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
