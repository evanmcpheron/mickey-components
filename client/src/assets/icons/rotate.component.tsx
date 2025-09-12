import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const RotateIcon: React.FC<
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
                  d="M142.9 142.9c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2S334.3 224 344 224h128c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2S461.9 48.1 455 55l-41.6 41.6c-87.6-86.5-228.7-86.2-315.8 1-24.4 24.4-42 53.1-52.8 83.8-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5c7.7-21.8 20.2-42.3 37.8-59.8M16 312v128c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l41.6-41.6c87.6 86.5 228.7 86.2 315.8-1 24.4-24.4 42.1-53.1 52.9-83.7 5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8-62.2 62.2-162.7 62.5-225.3 1L185 329c6.9-6.9 8.9-17.2 5.2-26.2S177.7 288 168 288H40c-13.3 0-24 10.7-24 24"
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
                  d="M94 187.1C120.8 124.1 183.3 80 256 80c39.7 0 77.8 15.8 105.9 43.9l4.1 4.1-35.7 35.7c-6.6 6.6-10.3 15.6-10.3 25 0 19.5 15.8 35.3 35.3 35.3H472c13.3 0 24-10.7 24-24V83.3c0-19.5-15.8-35.3-35.3-35.3-9.4 0-18.3 3.7-25 10.3L400 94.1l-4.1-4.1C358.8 52.8 308.5 32 256 32 163.4 32 83.9 88.2 49.8 168.3c-5.2 12.2.5 26.3 12.7 31.5s26.3-.5 31.5-12.7m368 157c5.2-12.2-.4-26.3-12.6-31.5s-26.3.4-31.5 12.6C391 388.1 328.6 432 256 432c-39.7 0-77.8-15.8-105.9-43.9L146 384l35.7-35.7c6.6-6.6 10.3-15.6 10.3-25 0-19.5-15.8-35.3-35.3-35.3H40c-13.3 0-24 10.7-24 24v116.7c0 19.5 15.8 35.3 35.3 35.3 9.4 0 18.3-3.7 25-10.3l35.7-35.8 4.1 4.1c37.1 37.2 87.4 58 139.9 58 92.5 0 171.8-56 206-135.9M448 176h-62.1l62.1-62.1zM64 336h62.1L64 398.1z"
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
                  d="M426.1 301.2C406.2 376.5 337.6 432 256 432c-51 0-96.9-21.7-129-56.3l41-41c5.1-5.1 8-12.1 8-19.3 0-15.1-12.2-27.3-27.3-27.3H48c-8.8 0-16 7.2-16 16v100.6c0 15.1 12.2 27.3 27.3 27.3 7.2 0 14.2-2.9 19.3-8l25.7-25.7c38 40.4 91.9 65.7 151.7 65.7 97.4 0 179.2-67 201.8-157.4 2.4-9.7-5.2-18.6-15.2-18.6-7.8 0-14.5 5.6-16.5 13.2M385 136.3l-41 41c-5.1 5.1-8 12.1-8 19.3 0 15.1 12.2 27.3 27.3 27.3H464c8.8 0 16-7.2 16-16V107.3c0-15.1-12.2-27.3-27.3-27.3-7.2 0-14.2 2.9-19.3 8l-25.7 25.7C369.7 73.3 315.8 48 256 48c-97.4 0-179.2 67-201.8 157.4-2.4 9.7 5.2 18.6 15.2 18.6 7.8 0 14.5-5.6 16.5-13.2C105.8 135.5 174.4 80 256 80c51 0 96.9 21.7 129.1 56.3zm63 55.7h-73.4l73.4-73.4zM64 320h73.4L64 393.4z"
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
                  d="M43.6 224c-4.9 0-8.7-4.3-7.8-9.2 9.7-51.8 37.5-100.4 82.3-135.3 88.3-69 212.1-61.3 291.3 13.2L455 47c6.9-6.9 17.2-8.9 26.2-5.2S496 54.3 496 64v104c0 13.3-10.7 24-24 24H368c-9.7 0-18.5-5.8-22.2-14.8s-1.7-19.3 5.2-26.2l47-47c-73.5-68.9-188.2-75.9-270.1-11.9-41.4 32.3-67.2 77.2-76.3 125.1-.7 3.9-4.1 6.8-8.1 6.8zm423.7 64c4.9 0 8.7 4.3 7.8 9.2-9.7 51.8-37.5 100.4-82.3 135.4-88.1 68.8-211.5 61.3-290.7-12.7L57 465c-6.9 6.9-17.2 8.9-26.2 5.2S16 457.7 16 448V344c0-13.3 10.7-24 24-24h104c9.7 0 18.5 5.8 22.2 14.8s1.7 19.3-5.2 26.2l-47.6 47.6c73.5 68.4 187.9 75.1 269.5 11.4 41.4-32.4 67.2-77.3 76.3-125.1.7-3.9 4.1-6.8 8.1-6.8zM368 176h104c4.4 0 8-3.6 8-8V64c0-3.2-1.9-6.2-4.9-7.4s-6.4-.6-8.7 1.7l-104 104c-2.3 2.3-3 5.7-1.7 8.7s4.2 4.9 7.4 4.9zM144 336H40c-4.4 0-8 3.6-8 8v104c0 3.2 1.9 6.2 4.9 7.4s6.4.6 8.7-1.7l104-104c2.3-2.3 3-5.7 1.7-8.7s-4.2-4.9-7.4-4.9z"
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
                  d="M16 319.6V312c0-13.3 10.7-24 24-24h128c9.7 0 18.5 5.8 22.2 14.8s1.7 19.3-5.2 26.2l-41.1 41.1c62.6 61.5 163.1 61.2 225.3-1 17.5-17.5 30.1-38 37.8-59.8 5.9-16.7 24.2-25.4 40.8-19.5s25.4 24.2 19.5 40.8c-10.8 30.6-28.4 59.3-52.9 83.8-87.2 87.2-228.3 87.5-315.8 1L57 457c-6.9 6.9-17.2 8.9-26.2 5.2S16 449.7 16 440V319.7z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8 62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2S334.3 224 344 224h128c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2S461.9 48.1 455 55l-41.6 41.6c-87.6-86.5-228.7-86.2-315.8 1-24.4 24.4-42 53.1-52.8 83.8-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5z"
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
