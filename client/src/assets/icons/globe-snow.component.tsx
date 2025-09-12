import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const GlobeSnowIcon: React.FC<
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
                  d="M448 224c0 62.7-25.7 119.3-67.2 160H256v-32h64c6.5 0 12.3-3.9 14.8-9.9s1.1-12.9-3.5-17.4L262.6 256H288c6.5 0 12.3-3.9 14.8-9.9s1.1-12.9-3.5-17.4l-64-64c-6.2-6.2-16.4-6.2-22.6 0l-64 64c-4.6 4.6-5.9 11.5-3.5 17.4s8.3 9.9 14.8 9.9h25.4l-68.7 68.7c-4.6 4.6-5.9 11.5-3.5 17.4s8.3 9.9 14.8 9.9h64v32H67.2C25.7 343.3 0 286.7 0 224 0 100.3 100.3 0 224 0s224 100.3 224 224M256 80a16 16 0 1 0-32 0 16 16 0 1 0 32 0m80 112a16 16 0 1 0 0-32 16 16 0 1 0 0 32M96 208a16 16 0 1 0-32 0 16 16 0 1 0 32 0M20.3 474.2 61.1 416h325.8l40.8 58.2c5.1 7.3 5.8 16.9 1.6 24.8s-12.4 13-21.3 13H40c-8.9 0-17.2-5-21.3-12.9s-3.5-17.5 1.6-24.8z"
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
                  d="M297.4 384C358 356.2 400 295 400 224c0-97.2-78.8-176-176-176S48 126.8 48 224c0 71 42 132.2 102.6 160H67.2C25.7 343.3 0 286.7 0 224 0 100.3 100.3 0 224 0s224 100.3 224 224c0 62.7-25.7 119.3-67.2 160zM232 80a24 24 0 1 1 0 48 24 24 0 1 1 0-48m3.3 84.7 64 64c4.6 4.6 5.9 11.5 3.5 17.4s-8.3 9.9-14.8 9.9h-16.5l44.8 53.8c4 4.8 4.8 11.4 2.2 17s-8.3 9.2-14.5 9.2h-56v48h-48v-48h-56c-6.2 0-11.9-3.6-14.5-9.2s-1.8-12.3 2.2-17l44.8-53.8H160c-6.5 0-12.3-3.9-14.8-9.9s-1.1-12.9 3.5-17.4l64-64c6.2-6.2 16.4-6.2 22.6 0M328 144a24 24 0 1 1 0 48 24 24 0 1 1 0-48M80 184a24 24 0 1 1 48 0 24 24 0 1 1-48 0M20.3 474.2 61.1 416h325.8l40.8 58.2c5.1 7.3 5.8 16.9 1.6 24.8s-12.4 13-21.3 13H40c-8.9 0-17.2-5-21.3-12.9s-3.5-17.5 1.6-24.8z"
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
                  d="M416 224c0 49.2-18.5 94-48.9 128h40.7c25.3-36.3 40.2-80.4 40.2-128C448 100.3 347.7 0 224 0S0 100.3 0 224c0 47.6 14.8 91.7 40.2 128h40.7C50.5 318 32 273.2 32 224c0-106 86-192 192-192s192 86 192 192M240 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48m-27.3 44.7-64 64c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l36.7-36.7v34.7l-59.3 59.3c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l36.7-36.6V352h32v-73.4l36.7 36.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L240 233.4v-34.8l36.7 36.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-64-64c-6.2-6.2-16.4-6.2-22.6 0M360 176a24 24 0 1 0-48 0 24 24 0 1 0 48 0M80 264a24 24 0 1 0 0-48 24 24 0 1 0 0 48M50.3 391.8l-46.2 77c-2.7 4.4-4.1 9.5-4.1 14.7C0 499.2 12.8 512 28.5 512h391c15.8 0 28.5-12.8 28.5-28.5 0-5.2-1.4-10.2-4.1-14.7l-46.2-77c-2.9-4.8-8.1-7.8-13.7-7.8H64c-5.6 0-10.8 2.9-13.7 7.8M73.1 416h301.8l38.4 64H34.7z"
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
                  d="M432 224c0 55.9-22 106.6-57.9 144h21.5c32.7-38.9 52.4-89.2 52.4-144C448 100.3 347.7 0 224 0S0 100.3 0 224c0 54.8 19.7 105.1 52.4 144h21.5C38 330.6 16 279.9 16 224c0-114.9 93.1-208 208-208s208 93.1 208 208M240 96a16 16 0 1 0 0-32 16 16 0 1 0 0 32m-10.3 66.3c-3.1-3.1-8.2-3.1-11.3 0l-72 72c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l58.3-58.3v41.4l-77.7 77.7c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l66.4-66.4V368h16V251.3l66.3 66.3c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L232 228.7v-41.4l58.3 58.3c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-72-72zM352 176a16 16 0 1 0-32 0 16 16 0 1 0 32 0M80 256a16 16 0 1 0 0-32 16 16 0 1 0 0 32m-6.7 147.6-44.9 67.3c-2.9 4.3-4.4 9.4-4.4 14.7 0 14.6 11.8 26.4 26.4 26.4h347.2c14.6 0 26.4-11.8 26.4-26.4 0-5.2-1.5-10.3-4.4-14.7l-44.9-67.4c-1.5-2.2-4-3.6-6.7-3.6H80c-2.7 0-5.2 1.3-6.7 3.6zm11 12.4h279.4l42.5 63.8c1.1 1.7 1.8 3.7 1.8 5.8 0 5.8-4.7 10.4-10.4 10.4H50.4c-5.8 0-10.4-4.7-10.4-10.4 0-2.1.6-4.1 1.8-5.8z"
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
                  d="M448 224c0 71.4-33.4 135-85.4 176H256v-48h64c6.5 0 12.3-3.9 14.8-9.9s1.1-12.9-3.5-17.4L262.6 256H288c6.5 0 12.3-3.9 14.8-9.9s1.1-12.9-3.5-17.4l-64-64c-6.2-6.2-16.4-6.2-22.6 0l-64 64c-4.6 4.6-5.9 11.5-3.5 17.4s8.3 9.9 14.8 9.9h25.4l-68.7 68.7c-4.6 4.6-5.9 11.5-3.5 17.4s8.3 9.9 14.8 9.9h64v48H85.4C33.4 359 0 295.4 0 224 0 100.3 100.3 0 224 0s224 100.3 224 224M256 80a16 16 0 1 0-32 0 16 16 0 1 0 32 0m80 112a16 16 0 1 0 0-32 16 16 0 1 0 0 32M96 208a16 16 0 1 0-32 0 16 16 0 1 0 32 0"
                />
                <path
                  className="aps-icon-foreground"
                  d="M235.3 164.7c-6.2-6.2-16.4-6.2-22.6 0l-64 64c-4.6 4.6-5.9 11.5-3.5 17.4s8.3 9.9 14.8 9.9h25.4l-68.7 68.7c-4.6 4.6-5.9 11.5-3.5 17.4s8.3 9.9 14.8 9.9h64v48H85.4l-63.7 73.4c-3.7 4.2-5.7 9.7-5.7 15.3 0 12.9 10.4 23.3 23.3 23.3h369.4c12.9 0 23.3-10.4 23.3-23.3 0-5.6-2-11-5.7-15.3L362.6 400H256v-48h64c6.5 0 12.3-3.9 14.8-9.9s1.1-12.9-3.5-17.4L262.6 256H288c6.5 0 12.3-3.9 14.8-9.9s1.1-12.9-3.5-17.4z"
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
