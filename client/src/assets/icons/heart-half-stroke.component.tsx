import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const HeartHalfStrokeIcon: React.FC<
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
                  d="M256 186.5v220.9l164.7-153.8a85.66 85.66 0 0 0 27.3-62.7v-5.8c0-38.6-27.9-71.5-66-77.9-25.1-4.2-50.8 4-68.8 22l-12 12zM119.4 44.1C165 36.5 211.3 51.4 244 84l12 12 12-12c32.6-32.6 79-47.5 124.6-39.9 68.9 11.5 119.4 71.1 119.4 141v5.8c0 41.5-17.2 81.2-47.6 109.5L283.7 469.1c-7.5 7-17.4 10.9-27.7 10.9s-20.2-3.9-27.7-10.9L47.6 300.4C17.2 272.1 0 232.4 0 190.9v-5.8c0-69.9 50.5-129.5 119.4-141"
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
                  d="m223.3 465.9 2.5 2.3c8.2 7.6 19 11.9 30.2 11.9s22-4.2 30.2-11.9l2.5-2.3 175.2-162.7c30.7-28.5 48.1-68.5 48.1-110.4v-3.3c0-70.4-50-130.8-119.2-144-39.4-7.6-79.7 1.5-111.8 24.1-4 2.8-7.8 5.8-11.5 9-4.7 4.1-9.3 8.5-13.5 13.3-7.5-8.4-15.9-15.9-25-22.3-32.1-22.6-72.4-31.7-111.8-24.2C50 58.6 0 119.1 0 189.5v3.3c0 41.9 17.4 81.9 48.1 110.4zm32.7-35.2V152c6.4 0 12.4-2.5 16.9-7 .4-.3.7-.7 1-1.1l17.8-20 .1-.1.1-.1c23.1-25.9 58-37.7 92-31.2 46.5 8.9 80.1 49.5 80.1 96.9v3.3c0 28.5-11.9 55.8-32.8 75.2z"
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
                  d="m272 126.1 7.9-8.9 4.2-4.7c26-29.2 65.3-42.8 103.8-35.8 53.3 9.7 92 56.1 92 110.3v3.5c0 32.3-13.4 63.1-37 85.1L272 434.7zM256.3 448h-.6.5zM240 434.7 69.1 275.5c-23.7-22-37.1-52.8-37.1-85.1v-3.5c0-54.2 38.7-100.6 92-110.3 38.5-7 77.8 6.6 103.8 35.8l4.2 4.7 7.9 8.9v308.7zM393.7 45.1c-40.9-7.4-82.6 3.2-114.7 28.4q-2.7 2.1-5.4 4.5c-4.7 4.1-9.1 8.4-13.3 13.1l-4.3 4.8-4.2-4.7c-5.8-6.5-12-12.4-18.7-17.6-32.1-25.2-73.8-35.9-114.8-28.5C49.8 57.6 0 117.3 0 186.9v3.5c0 36 13.1 70.6 36.6 97.5 3.4 3.8 6.9 7.5 10.7 11l184 171.3c6.7 6.3 15.6 9.7 24.8 9.7 8 0 15.8-2.7 22.1-7.5.9-.7 1.8-1.4 2.6-2.2l184-171.2c3.8-3.5 7.3-7.2 10.7-11 23.4-27 36.5-61.6 36.5-97.6v-3.5c0-69.6-49.8-129.3-118.3-141.8"
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
                  d="M282.4 105.2c25.4-34.9 68.3-53.2 111.2-47.6C451.9 65.3 496 115 496 173.6c0 30.3-11.7 59.3-32.8 81.1L264.7 460.4l-.7.7V130.6zM248 130.6v329.9L48.9 254.7C27.8 232.9 16 203.8 16 173.5c0-58.6 44.1-108.2 102.3-115.8 42.9-5.6 85.8 12.6 111.2 47.6zm147.7-88.8c-48.6-6.3-97.3 14.3-126.2 54L256 114.4l-13.5-18.6c-28.9-39.7-77.6-60.4-126.2-54C50.2 50.4 0 106.8 0 173.5c0 34.5 13.4 67.6 37.4 92.3l199.1 205.8c5.2 5.4 12.4 8.4 19.9 8.4s14.7-3 19.9-8.5l198.5-205.7c23.8-24.7 37.2-57.8 37.2-92.2 0-66.8-50.2-123.2-116.3-131.8"
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
                  d="M256 480c10.3 0 20.2-3.9 27.7-10.9l180.7-168.7c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141-45.6-7.6-92 7.3-124.6 39.9l-12 12v90.5l45.3-45.3 12-12c18-18 43.6-26.2 68.8-22 38.1 6.3 66 39.3 66 77.9v5.8c0 23.8-9.9 46.5-27.3 62.7L256 407.4z"
                />
                <path
                  className="aps-icon-foreground"
                  d="m256 96-12-12c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5l180.7 168.7c7.5 7 17.4 10.9 27.7 10.9V96"
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
