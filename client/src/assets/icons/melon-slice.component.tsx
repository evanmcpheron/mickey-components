import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const MelonSliceIcon: React.FC<
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
                  d="M41 391c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9c115.6 115.6 302.6 116 418.3.3S540.5 122.6 425 7c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9c96.9 96.9 97.1 253.6.3 350.4S137.9 487.9 41 391m279-263c0 106-86 192-192 192-11.4 0-22.5-1-33.3-2.9-5.4-.9-11 .6-14.8 4.5l-20.6 20.6c-6.2 6.2-6.2 16.4 0 22.6l4 4c84.4 84.4 221.1 84.4 305.5 0 84.2-84.2 84.4-220.7.3-305.1l-4.3-4.3c-6.2-6.2-16.4-6.2-22.6 0l-20.6 20.4c-3.9 3.9-5.4 9.4-4.5 14.8 1.9 10.8 2.9 22 2.9 33.3z"
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
                  d="M7 391c-4.5 4.5-7 10.6-7 17s2.5 12.5 7 17c115.6 115.6 302.6 116 418.3.3S540.5 122.6 425 7c-9.4-9.4-24.6-9.4-33.9 0L319 79c-6.2 6.2-8.5 15.3-6.1 23.7l.1.4q.15.75.6 2.4c.5 2.3 1.2 5.8 1.8 10.4 1.2 9.2 2.1 22.3.6 37.9-2.9 30.9-15.1 71.3-53 109.2-42.3 42.3-82.7 54-111.6 55.9-14.7 1-26.8-.5-35-2.2-4.1-.8-7.2-1.7-9.2-2.3-1-.3-1.7-.5-2-.7l-.3-.1c-8.9-3.4-19.1-1.4-25.9 5.4zm306-288.3v-.1zm51.8 35.2c12.3 23.4 19.2 49.9 19.2 78.1 0 92.8-75.2 168-168 168-26.2 0-51-6-73.1-16.7 3.8 0 7.7-.2 11.8-.4 39.9-2.7 91.4-19 142.2-69.9 47.2-47.2 63-98.7 66.8-138.6.7-7.2 1-14.1 1-20.4zM81.2 384.8C118.1 414.3 165 432 216 432c119.3 0 216-96.7 216-216 0-51-17.7-97.9-47.2-134.8l22.4-22.4c80.4 97.4 75.3 241.5-15.8 332.6s-235.2 96.2-332.6 15.8z"
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
                  d="M427.3 4.7c-6.2-6.2-16.4-6.2-22.6 0l-82.1 82.1c-3.6 3.6-5.2 8.6-4.5 13.6 1.3 9 2 18.2 2 27.6 0 106-86 192-192 192-9.4 0-18.6-.7-27.6-2-5-.7-10 1-13.6 4.5L4.7 404.7c-6.2 6.2-6.2 16.4 0 22.6C58.9 481.5 132.5 512 209.1 512h4C378.2 512 512 378.2 512 213.2v-4c0-76.7-30.5-150.2-84.7-204.5m-36.3 59L415.6 39C457 85.8 480 146.3 480 209.1v4C480 360.5 360.5 480 213.2 480h-4c-62.9 0-123.4-23-170.2-64.4L63.7 391c40.8 35.5 94 57 152.3 57 128.1 0 232-103.9 232-232 0-58.3-21.5-111.6-57-152.3m-22.7 22.6C398 121.3 416 166.5 416 216c0 110.5-89.5 200-200 200-49.5 0-94.7-18-129.7-47.7l17.6-17.6c7.9.8 16 1.3 24.1 1.3 123.7 0 224-100.3 224-224 0-8.1-.4-16.2-1.3-24.1z"
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
                  d="M427 2.3c-3.1-3.1-8.2-3.1-11.3 0l-84.9 84.9c-1.8 1.8-2.6 4.3-2.3 6.8q2.1 14.55 2.1 29.7c0 114.3-92.6 206.9-206.9 206.9q-15.15 0-29.7-2.1c-2.5-.4-5 .5-6.8 2.3L2.3 415.7c-3.1 3.1-3.1 8.2 0 11.3 54.4 54.4 128.3 85 205.2 85h4.2C377.6 512 512 377.6 512 211.7v-4.2c0-77-30.6-150.8-85-205.2m-42.7 54 36.9-36.9c48 50.8 74.8 118.1 74.8 188.2v4.2C496 368.7 368.7 496 211.7 496h-4.2c-70.1 0-137.4-26.8-188.2-74.7l36.9-36.9C97.9 423.8 154.1 448 216 448c128.1 0 232-103.9 232-232 0-61.9-24.2-118.1-63.7-159.7M373 67.6c36.6 38.7 59 90.9 59 148.4 0 119.3-96.7 216-216 216-57.4 0-109.7-22.4-148.4-59l28.1-28.1c9.2 1.1 18.5 1.7 28 1.7 123.1 0 222.9-99.8 222.9-222.9 0-9.5-.6-18.8-1.7-28z"
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
                  d="M385.2 16.6c-.7.5-1.3 1-1.9 1.6l-61.7 61.7c-3.9 3.9-5.4 9.4-4.5 14.8 1.9 10.8 2.9 22 2.9 33.3 0 106-86 192-192 192-11.4 0-22.5-1-33.3-2.9-5.4-.9-11 .6-14.8 4.5l-61.7 61.7c-.6.6-1.1 1.2-1.6 1.9 8.3-2.7 17.8-.8 24.4 5.9 96.9 96.9 253.6 97.1 350.4.3S488 137.9 391.1 41c-6.6-6.6-8.6-16.1-5.9-24.4"
                />
                <path
                  className="aps-icon-foreground"
                  d="M7 391c9.4-9.4 24.6-9.4 33.9 0 96.9 96.9 253.6 97.1 350.4.3s96.6-253.5-.3-350.4c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0c115.6 115.6 116 302.6.3 418.3S122.6 540.5 7 425c-9.4-9.4-9.4-24.6 0-33.9z"
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
