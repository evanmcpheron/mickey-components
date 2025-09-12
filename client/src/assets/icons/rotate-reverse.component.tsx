import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const RotateReverseIcon: React.FC<
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
                  d="M368.9 142.9c-62.2-62.2-162.7-62.5-225.3-1l41.1 41.1c6.9 6.9 8.9 17.2 5.2 26.2S177.4 224 167.7 224H39.8c-13.3 0-24-10.7-24-24V72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l41.5 41.6c87.6-86.5 228.7-86.2 315.8 1 24.4 24.4 42.1 53.1 52.9 83.7 5.9 16.7-2.9 34.9-19.5 40.8s-34.9-2.9-40.8-19.5c-7.7-21.8-20.2-42.3-37.8-59.8zM495.8 312v128c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-41.6-41.6c-87.6 86.5-228.7 86.2-315.8-1C73 390 55.3 361.3 44.5 330.6c-5.9-16.7 2.9-34.9 19.5-40.8s34.9 2.9 40.8 19.5c7.7 21.8 20.2 42.3 37.8 59.8 62.2 62.2 162.7 62.5 225.3 1L326.8 329c-6.9-6.9-8.9-17.2-5.2-26.2s12.5-14.8 22.2-14.8h127.9c13.3 0 24 10.7 24 24z"
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
                  d="M418 187.1C391.2 124.1 328.7 80 256 80c-39.7 0-77.8 15.8-105.9 43.9L146 128l35.7 35.7c6.6 6.6 10.3 15.6 10.3 25 0 19.5-15.8 35.3-35.3 35.3H40c-13.3 0-24-10.7-24-24V83.3C16 63.8 31.8 48 51.3 48c9.4 0 18.3 3.7 25 10.3L112 94.1l4.1-4.1c37.1-37.2 87.4-58 139.9-58 92.6 0 172.1 56.2 206.2 136.3 5.2 12.2-.5 26.3-12.7 31.5s-26.3-.5-31.5-12.7m-368 157c-5.2-12.2.4-26.3 12.6-31.5s26.3.4 31.5 12.6C121 388.1 183.4 432 256 432c39.7 0 77.8-15.8 105.9-43.9l4.1-4.1-35.7-35.7c-6.6-6.6-10.3-15.6-10.3-25 0-19.5 15.8-35.3 35.3-35.3H472c13.3 0 24 10.7 24 24v116.7c0 19.5-15.8 35.3-35.3 35.3-9.4 0-18.3-3.7-25-10.3L400 417.9l-4.1 4.1c-37.1 37.2-87.4 58-139.9 58-92.5 0-171.8-56-206-135.9M64 176h62.1L64 113.9zm384 160h-62.1l62.1 62.1z"
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
                  d="M85.9 301.2c-2-7.6-8.6-13.2-16.5-13.2-10 0-17.6 8.9-15.2 18.6C76.8 397 158.6 464 256 464c59.8 0 113.7-25.3 151.7-65.7l25.7 25.7c5.1 5.1 12.1 8 19.3 8 15.1 0 27.3-12.2 27.3-27.3V304c0-8.8-7.2-16-16-16H363.3c-15.1 0-27.3 12.2-27.3 27.3 0 7.2 2.9 14.2 8 19.3l41 41c-32.1 34.7-78 56.4-129 56.4-81.6 0-150.2-55.5-170.1-130.8M127 136.3C159.1 101.7 205 80 256 80c81.6 0 150.2 55.5 170.1 130.8 2 7.6 8.6 13.2 16.5 13.2 10 0 17.6-8.9 15.2-18.6C435.2 115 353.4 48 256 48c-59.8 0-113.7 25.3-151.7 65.7L78.6 88c-5.1-5.1-12.1-8-19.3-8C44.2 80 32 92.2 32 107.3V208c0 8.8 7.2 16 16 16h100.7c15.1 0 27.3-12.2 27.3-27.3 0-7.2-2.9-14.2-8-19.3l-41-41zM64 192v-73.4l73.4 73.4zm384 128v73.4L374.6 320z"
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
                  d="M468.4 224c4.9 0 8.7-4.3 7.8-9.2-9.7-51.8-37.5-100.4-82.3-135.3-88.3-69-212.1-61.3-291.3 13.2L114 104c73.5-68.9 188.2-75.9 270.1-11.9 41.4 32.3 67.2 77.2 76.3 125.1.7 3.9 4.1 6.8 8.1 6.8zM44.7 288c-4.9 0-8.7 4.3-7.8 9.2 9.7 51.8 37.5 100.4 82.3 135.4 88.1 68.8 211.5 61.3 290.7-12.7L455 465c6.9 6.9 17.2 8.9 26.2 5.2S496 457.7 496 448V344c0-13.3-10.7-24-24-24H368c-9.7 0-18.5 5.8-22.2 14.8s-1.7 19.3 5.2 26.2l47.6 47.6C325.1 477 210.7 483.7 129.1 420c-41.4-32.4-67.2-77.3-76.3-125.1-.7-3.9-4.1-6.8-8.1-6.8zM144 176H40c-4.4 0-8-3.6-8-8V64c0-3.2 1.9-6.2 4.9-7.4s6.4-.6 8.7 1.7l104 104c2.3 2.3 3 5.7 1.7 8.7s-4.2 4.9-7.4 4.9zM40 192h104c9.7 0 18.5-5.8 22.2-14.8s1.7-19.3-5.2-26.2L57 47c-6.9-6.9-17.2-8.9-26.2-5.2S16 54.3 16 64v104c0 13.3 10.7 24 24 24m328 144h104c4.4 0 8 3.6 8 8v104c0 3.2-1.9 6.2-4.9 7.4s-6.4.6-8.7-1.7l-104-104c-2.3-2.3-3-5.7-1.7-8.7s4.2-4.9 7.4-4.9z"
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
                  d="M495.8 319.6V312c0-13.3-10.7-24-24-24h-128c-9.7 0-18.5 5.8-22.2 14.8s-1.7 19.3 5.2 26.2l41.1 41.1c-62.6 61.5-163.1 61.2-225.3-1-17.5-17.5-30.1-38-37.8-59.8-5.9-16.7-24.2-25.4-40.8-19.5S38.6 314 44.5 330.6C55.3 361.3 73 390 97.4 414.4c87.2 87.2 228.3 87.5 315.8 1l41.6 41.6c6.9 6.9 17.2 8.9 26.2 5.2s14.8-12.5 14.8-22.2V319.7z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M406.6 202.6c-7.7-21.8-20.2-42.3-37.8-59.8-62.2-62.2-162.7-62.5-225.3-1l41.2 41.2c6.9 6.9 8.9 17.2 5.2 26.2S177.4 224 167.7 224H39.8c-13.3 0-24-10.7-24-24V72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l41.5 41.6c87.6-86.5 228.7-86.2 315.8 1 24.4 24.4 42.1 53.1 52.9 83.7 5.9 16.7-2.9 34.9-19.5 40.8s-34.9-2.9-40.8-19.5z"
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
