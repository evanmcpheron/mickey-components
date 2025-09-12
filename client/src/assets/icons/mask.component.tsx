import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const MaskIcon: React.FC<
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
                  d="M288 64C64 64 0 160 0 272s80 176 176 176h8.4c24.2 0 46.4-13.7 57.2-35.4l23.2-46.3c4.4-8.8 13.3-14.3 23.2-14.3s18.8 5.5 23.2 14.3l23.2 46.3c10.8 21.7 33 35.4 57.2 35.4h8.4c96 0 176-64 176-176S512 64 288 64M96 256a64 64 0 1 1 128 0 64 64 0 1 1-128 0m320-64a64 64 0 1 1 0 128 64 64 0 1 1 0-128"
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
                  d="M91.4 162.3C61 188.5 48 225.2 48 272c0 43.9 15.3 74.8 36.8 95 22 20.6 53.7 33 91.2 33h8.4c6.1 0 11.6-3.4 14.3-8.8l23.2-46.3 39 19.5-39-19.5C234.4 319.8 260 304 288 304s53.6 15.8 66.1 40.8l23.2 46.3c2.7 5.4 8.2 8.8 14.3 8.8h8.4c37.4 0 69.2-12.4 91.2-33 21.5-20.2 36.8-51.1 36.8-95 0-46.8-13-83.5-43.4-109.7C452.9 134.9 394.3 112 288 112s-164.9 22.9-196.6 50.3M0 272C0 160 64 64 288 64s288 96 288 208-80 176-176 176h-8.4c-24.2 0-46.4-13.7-57.2-35.4l-23.2-46.3c-4.4-8.8-13.3-14.3-23.2-14.3s-18.8 5.5-23.2 14.3l-23.2 46.3c-10.8 21.7-33 35.4-57.2 35.4H176C80 448 0 384 0 272m96-16a64 64 0 1 1 128 0 64 64 0 1 1-128 0m320-64a64 64 0 1 1 0 128 64 64 0 1 1 0-128"
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
                  d="M80.9 150.2C46 180.3 32 222.2 32 272c0 47.9 16.9 83.2 41.9 106.7C99.2 402.4 135 416 176 416h8.4c12.1 0 23.2-6.8 28.6-17.7l23.2-46.3 28.6 14.3-23.2 46.3c-10.8 21.7-33 35.4-57.2 35.4H176C80 448 0 384 0 272S64 64 288 64s288 96 288 208-80 176-176 176h-8.4c-24.2 0-46.4-13.7-57.2-35.4l-23.2-46.3c-4.4-8.8-13.3-14.3-23.2-14.3s-18.8 5.5-23.2 14.3L236.2 352c9.8-19.6 29.9-32 51.8-32s42 12.4 51.8 32l23.2 46.3c5.4 10.8 16.5 17.7 28.6 17.7h8.4c41 0 76.8-13.6 102.1-37.3C527.1 355.3 544 320 544 272c0-49.8-14-91.7-48.9-121.8C459.3 119.3 396.2 96 288 96s-171.3 23.3-207.1 54.2M160 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64m0-96a64 64 0 1 1 0 128 64 64 0 1 1 0-128m288 64a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-96 0a64 64 0 1 1 128 0 64 64 0 1 1-128 0"
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
                  d="M70.5 138.1C31 172.2 16 219.1 16 272c0 52 18.4 91.6 46.9 118.3C91.6 417.2 131.5 432 176 432h8.4c18.2 0 34.8-10.3 42.9-26.5l23.2-46.3C257.6 345 272.1 336 288 336s30.4 9 37.5 23.2l23.2 46.3c8.1 16.3 24.8 26.5 42.9 26.5h8.4c44.5 0 84.4-14.8 113.1-41.7C541.6 363.6 560 324 560 272c0-52.9-15-99.8-54.5-133.9C465.6 103.6 398.1 80 288 80s-177.6 23.6-217.5 58.1M0 272C0 160 64 64 288 64s288 96 288 208-80 176-176 176h-8.4c-24.2 0-46.4-13.7-57.2-35.4l-23.2-46.3c-4.4-8.8-13.3-14.3-23.2-14.3s-18.8 5.5-23.2 14.3l-23.2 46.3c-10.8 21.7-33 35.4-57.2 35.4H176C80 448 0 384 0 272m160 32a48 48 0 1 0 0-96 48 48 0 1 0 0 96m0-112a64 64 0 1 1 0 128 64 64 0 1 1 0-128m304 64a48 48 0 1 0-96 0 48 48 0 1 0 96 0m-112 0a64 64 0 1 1 128 0 64 64 0 1 1-128 0"
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
                  d="M288 64C64 64 0 160 0 272s80 176 176 176h8.4c24.2 0 46.4-13.7 57.2-35.4l23.2-46.3c4.4-8.8 13.3-14.3 23.2-14.3s18.8 5.5 23.2 14.3l23.2 46.3c10.8 21.7 33 35.4 57.2 35.4h8.4c96 0 176-64 176-176S512 64 288 64M96 256a64 64 0 1 1 128 0 64 64 0 1 1-128 0m320-64a64 64 0 1 1 0 128 64 64 0 1 1 0-128"
                />
                <path
                  className="aps-icon-foreground"
                  d="M160 320a64 64 0 1 0 0-128 64 64 0 1 0 0 128m256 0a64 64 0 1 0 0-128 64 64 0 1 0 0 128"
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
