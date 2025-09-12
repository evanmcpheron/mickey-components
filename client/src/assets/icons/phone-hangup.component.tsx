import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const PhoneHangupIcon: React.FC<
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
                  d="m11.7 266.3 41.9 94.3c6.1 13.7 20.8 21.3 35.5 18.4l109.2-21.8c15-3 25.7-16.1 25.7-31.4V240c62.3-20.8 129.7-20.8 192 0v85.8c0 15.3 10.8 28.4 25.7 31.4L550.9 379c14.7 2.9 29.4-4.7 35.5-18.4l41.9-94.3c7.2-16.2 5.1-35.1-7.4-47.7C570.8 168.1 464.2 96 320 96S69.2 168.1 19.1 218.6c-12.5 12.6-14.6 31.5-7.4 47.7"
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
                  d="M320 144c-126.9 0-221.3 61.9-266.7 106.2-4.6 4.5-6.6 12.9-2.1 21.8l36.1 71.5c1.6 3.2 5.2 4.9 8.7 4.2l102.4-20.3c3.7-.7 6.4-4 6.4-7.8v-71.1c0-10.4 6.6-19.5 16.5-22.8l3.4-1.1c61.9-20.4 128.7-20.4 190.7 0l3.4 1.1c9.8 3.2 16.5 12.4 16.5 22.8v71.1c0 3.8 2.7 7.1 6.4 7.8L544 347.7c3.5.7 7.1-1 8.7-4.2l36.1-71.5c4.5-8.9 2.6-17.3-2.1-21.8C541.3 205.9 446.9 144 320 144M19.8 215.8C71.5 165.4 177.4 96 320 96s248.5 69.4 300.2 119.8c22 21.5 23.8 53.4 11.4 77.8l-36.1 71.5c-11.3 22.4-36.2 34.6-60.9 29.7l-102.3-20.3c-26.2-5.2-45.1-28.2-45.1-54.9v-53.4c-44-12-90.4-12-134.4 0v53.4c0 26.7-18.9 49.7-45.1 54.9l-102.4 20.3c-24.7 4.9-49.6-7.3-60.9-29.7L8.3 293.6C-4 269.2-2.3 237.3 19.8 215.8"
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
                  d="M320 128c-134.4 0-234.1 68.7-281.2 117-7.2 7.4-8.9 19.3-3.5 30.5l38.3 78.6c3.3 6.7 10.7 10.3 18 8.6l88-20.5c7.2-1.7 12.4-8.1 12.4-15.6V240c0-7.1 4.7-13.4 11.6-15.4l32.9-9.4a303.8 303.8 0 0 1 167 0l32.9 9.4c6.9 2 11.6 8.2 11.6 15.4v86.6c0 7.4 5.1 13.9 12.4 15.6l88 20.5c7.3 1.7 14.7-1.9 18-8.6l38.3-78.6c5.5-11.2 3.7-23.2-3.5-30.5-47.1-48.3-146.8-117-281.2-117M15.9 222.6C67.2 170.1 174.6 96 320 96s252.8 74.1 304.1 126.6c18.1 18.5 19.8 45.6 9.3 66.9l-38.3 78.6c-9.8 20.1-32.2 30.8-54 25.7l-88-20.5c-21.7-5.1-37.1-24.4-37.1-46.8v-74.4l-21.3-6.1c-48.8-14-100.6-14-149.4 0l-21.3 6.1v74.5c0 22.3-15.4 41.7-37.1 46.8l-88 20.5c-21.8 5.1-44.2-5.6-54-25.7L6.5 289.5c-10.4-21.3-8.7-48.4 9.3-66.9z"
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
                  d="M421.1 240.8c6.5 2.2 10.9 8.3 10.9 15.2v69.8c0 7.6 5.4 14.2 12.9 15.7l110.3 22.1c7.1 1.4 14.2-2.1 17.4-8.5l39.5-79.1c5.7-11.4 3.9-23.6-3.6-31-48.4-48.5-150.6-117-288.5-117S79.9 196.5 31.4 244.9c-7.5 7.4-9.3 19.7-3.6 31L67.4 355c3.2 6.5 10.4 9.9 17.4 8.5l110.3-22.1c7.5-1.5 12.9-8.1 12.9-15.7V256c0-6.9 4.4-13 10.9-15.2 65.6-21.9 136.5-21.9 202.1 0zM416 256c-62.3-20.8-129.7-20.8-192 0v69.8c0 15.3-10.8 28.4-25.7 31.4L88 379.2c-14.2 2.8-28.5-4.2-34.9-17.1l-39.6-79c-8.3-16.5-6.5-36.5 6.6-49.5C70.7 183.1 176.8 112 320 112s249.3 71.1 299.9 121.5c13.1 13 14.9 33 6.6 49.5L587 362.1c-6.5 12.9-20.8 19.9-35 17.1l-110.3-22.1c-15-3-25.7-16.1-25.7-31.4z"
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
                  d="M224 225.6c-64.2 8-128.3 25.8-203.8 59.8l13 29.2c71.2-32.1 131.2-49 190.8-56.8zM416 240v17.9c59.6 7.9 119.7 24.8 190.8 56.8l13-29.2c-75.5-34-139.6-51.8-203.8-59.8z"
                />
                <path
                  className="aps-icon-foreground"
                  d="m20.2 285.5-8.5-19.2c-7.2-16.2-5.1-35.1 7.4-47.7C69.2 168.1 175.8 96 320 96s250.8 72.1 300.9 122.6c12.5 12.6 14.6 31.5 7.4 47.7l-8.5 19.2C507.2 234.7 420 220.1 320 220.1s-187.2 14.7-299.8 65.4m13 29.2c71.2-32.1 131.2-49 190.8-56.8v67.9c0 15.3-10.8 28.4-25.7 31.4L89.1 379c-14.7 2.9-29.4-4.7-35.5-18.4zM416 257.9c59.6 7.9 119.7 24.8 190.8 56.8l-20.4 45.9c-6.1 13.7-20.8 21.3-35.5 18.4l-109.2-21.9c-15-3-25.7-16.1-25.7-31.4z"
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
