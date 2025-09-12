import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const HeartCrackIcon: React.FC<
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
                  d="M119.4 44.1c23.3-3.9 46.8-1.9 68.6 5.3l49.8 77.5-75.4 75.4c-1.5 1.5-2.4 3.6-2.3 5.8s1 4.2 2.6 5.7l112 104c2.9 2.7 7.4 2.9 10.5.3s3.8-7 1.7-10.4l-60.4-98.1 90.7-75.6c2.6-2.1 3.5-5.7 2.4-8.8l-22.8-63.4c28.5-16.7 62.4-23.2 95.7-17.6 69 11.4 119.5 71 119.5 140.9v5.8c0 41.5-17.2 81.2-47.6 109.5L283.7 469.1c-7.5 7-17.4 10.9-27.7 10.9s-20.2-3.9-27.7-10.9L47.6 300.4C17.2 272.1 0 232.4 0 190.9v-5.8c0-69.9 50.5-129.5 119.4-141"
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
                  d="m223.3 465.9 2.5 2.3c8.2 7.6 19 11.9 30.2 11.9s22-4.2 30.2-11.9l2.5-2.3 175.2-162.7c30.7-28.5 48.1-68.5 48.1-110.4v-3.3c0-70.4-50-130.8-119.2-144-39.4-7.6-79.7 1.5-111.8 24.1-4 2.8-7.8 5.8-11.5 9-4.7 4.1-9.3 8.5-13.5 13.3-7.5-8.4-15.9-15.9-25-22.3-32.1-22.6-72.4-31.7-111.8-24.2C50 58.6 0 119.1 0 189.5v3.3c0 41.9 17.4 81.9 48.1 110.4zm6.6-331.1-67.6 67.6c-1.5 1.5-2.4 3.6-2.3 5.8s1 4.2 2.6 5.7l112 104c2.9 2.7 7.4 2.9 10.5.3s3.8-7 1.7-10.4l-59.7-97 88.9-51.9c3.6-2.1 5-6.6 3.2-10.3l-16.6-35.1C325 95 354.8 87.1 383.9 92.6c46.5 8.9 80.1 49.5 80.1 96.9v3.3c0 28.5-11.9 55.8-32.8 75.2L256 430.7 80.8 268A102.7 102.7 0 0 1 48 192.8v-3.3c0-47.3 33.6-88 80.1-96.9 34-6.5 69 5.4 92 31.2l.1.1 9.6 10.8z"
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
                  d="m272 126.1 7.9-8.9 4.2-4.7c26-29.2 65.3-42.8 103.8-35.8 53.3 9.7 92 56.1 92 110.3v3.5c0 32.3-13.4 63.1-37 85.1L259 446.8c-.8.7-1.9 1.2-3 1.2s-2.2-.4-3-1.2L69.1 275.5c-23.7-22-37.1-52.8-37.1-85.1v-3.5c0-54.2 38.7-100.6 92-110.3 38.5-7 77.8 6.6 103.8 35.8l4.2 4.7 7.9 8.9v18c0 4.2 1.7 8.3 4.7 11.3l34.2 34.2-79.8 53.2c-3.7 2.5-6.2 6.4-6.9 10.9s.5 8.9 3.3 12.4l64 80c5.5 6.9 15.6 8 22.5 2.5s8-15.6 2.5-22.5l-53.1-66.4 81.5-54.3c4-2.7 6.6-7 7-11.7s-1.2-9.5-4.6-12.9L272 137.4zm121.7-81c-40.9-7.4-82.6 3.2-114.7 28.4q-2.7 2.1-5.4 4.5c-4.7 4.1-9.1 8.4-13.3 13.1l-4.3 4.8-4.2-4.7c-5.8-6.5-12-12.4-18.7-17.6-32.1-25.2-73.8-35.9-114.8-28.5C49.8 57.6 0 117.3 0 186.9v3.5c0 36 13.1 70.6 36.6 97.5 3.4 3.8 6.9 7.5 10.7 11l184 171.3c6.7 6.3 15.6 9.7 24.8 9.7 8 0 15.8-2.7 22.1-7.5.9-.7 1.8-1.4 2.6-2.2l184-171.2c3.8-3.5 7.3-7.2 10.7-11 23.4-27 36.5-61.6 36.5-97.6v-3.5c0-69.6-49.8-129.3-118.3-141.8"
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
                  d="M282.4 105.2c25.4-34.9 68.3-53.2 111.2-47.6C451.9 65.3 496 115 496 173.6c0 30.3-11.7 59.3-32.8 81.1L264.7 460.4c-2.2 2.3-5.2 3.6-8.4 3.6s-6.2-1.3-8.4-3.6l-199-205.7C27.8 232.9 16 203.8 16 173.5c0-58.6 44.1-108.2 102.3-115.8 42.9-5.6 85.8 12.6 111.2 47.6l18.5 25.3V144c0 2.1.8 4.2 2.3 5.7l41.1 41.1-87.9 58.6c-1.9 1.2-3.1 3.2-3.5 5.4s.3 4.5 1.7 6.2l64 80c2.8 3.4 7.8 4 11.2 1.2s4-7.8 1.2-11.2l-58.5-73.2 88.7-59.2c2-1.3 3.3-3.5 3.5-5.9s-.6-4.8-2.3-6.4L264 140.7v-10.1zm113.3-63.4c-48.6-6.3-97.3 14.3-126.2 54L256 114.4l-13.5-18.6c-28.9-39.7-77.6-60.4-126.2-54C50.2 50.4 0 106.8 0 173.5c0 34.5 13.4 67.6 37.4 92.3l199.1 205.8c5.2 5.4 12.4 8.4 19.9 8.4s14.7-3 19.9-8.5l198.5-205.7c23.8-24.7 37.2-57.8 37.2-92.2 0-66.8-50.2-123.2-116.3-131.8"
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
                  d="M119.4 44.1c23.3-3.9 46.8-1.9 68.5 5.3l49.8 77.5-75.4 75.4c-1.5 1.5-2.4 3.6-2.3 5.8s1 4.2 2.6 5.7l112 104c2.9 2.7 7.4 2.9 10.5.3s3.8-7 1.7-10.4l-60.4-98.1 90.7-75.6c2.6-2.1 3.5-5.7 2.4-8.8l-22.7-63.5c28.5-16.7 62.4-23.2 95.7-17.6 69 11.5 119.5 71.1 119.5 141v5.8c0 41.5-17.2 81.2-47.6 109.5L283.7 469.1c-7.5 7-17.4 10.9-27.7 10.9s-20.2-3.9-27.7-10.9L47.6 300.4C17.2 272.1 0 232.4 0 190.9v-5.8c0-69.9 50.5-129.5 119.4-141"
                />
                <path
                  className="aps-icon-foreground"
                  d="M296.8 61.7C286.4 67.8 276.7 75.3 268 84l-12 12-12-12c-16-16-35.2-27.7-56-34.6l49.8 77.5-75.4 75.4c-1.5 1.5-2.4 3.6-2.3 5.8s1 4.2 2.6 5.7l112 104c2.9 2.7 7.4 2.9 10.5.3s3.8-7 1.7-10.4l-60.4-98.1 90.7-75.6c2.6-2.1 3.5-5.7 2.4-8.8z"
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
