import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const EyeDropperFullIcon: React.FC<
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
                  d="M341.6 29.2 240.1 130.8l-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.5-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6v42.4L5.4 462.2c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4L89.7 480h42.4c21.2 0 41.6-8.4 56.6-23.4l120.7-120.7-133.3-133.3z"
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
                  d="m199 169 34 33.9 76.1 76.1 33.9 34 8 8c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-8-8 33.9-33.9 71.3-71.3c19.1-19.1 29.8-45 29.8-72C512 45.6 466.4 0 410.2 0c-27 0-52.9 10.7-72 29.8l-71.3 71.3L233 135l-8-8c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l8 8zm249.2-29.1L343 245.1 266.9 169 372.1 63.8C382.2 53.7 395.9 48 410.2 48c29.7 0 53.8 24.1 53.8 53.8 0 14.3-5.7 28-15.8 38.1M53.1 329A71.98 71.98 0 0 0 32 379.9v52.9l-28 42c-6.3 9.5-5.1 22.2 3 30.3s20.8 9.3 30.3 3l42-28h52.9c19.1 0 37.4-7.6 50.9-21.1l130.3-130.4-130-130z"
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
                  d="m198.1 172.7 22.6 22.6 95.9 95.9 22.6 22.6 17.4 17.4c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-17.4-17.4 22.6-22.6 98.3-98.3c39-39 39-102.2 0-141.1s-102.2-39-141.1 0l-98.3 98.3-22.6 22.6-17.4-17.4c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6zm45.3 0L364.2 51.9c26.5-26.5 69.4-26.5 95.9 0s26.5 69.4 0 95.9L339.3 268.6zm-56.1 39.9c-6.2-6.2-16.4-6.2-22.6 0L55.4 321.9c-15 15-23.4 35.4-23.4 56.6v41.2L3.8 469.1c-2.5 4.4-3.8 9.3-3.8 14.3C0 499.2 12.8 512 28.6 512c5 0 9.9-1.3 14.2-3.8L92.2 480h41.2c21.2 0 41.6-8.4 56.6-23.4l109.3-109.3c6.2-6.2 6.2-16.4 0-22.6l-112-112zm-109.2 132 97.9-98 89.4 89.4-97.9 97.9c-9 9-21.2 14.1-33.9 14.1H83.8l-3.7 2.1-42.4 24.2 24.2-42.4 2.1-3.7v-49.7c0-12.7 5.1-24.9 14.1-33.9"
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
                  d="m211.8 159.1 11.3 11.3 118.5 118.5 11.3 11.3 25.4 25.4c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-14.1-14.1-11.3-11.3 11.3-11.3 107.3-107.2c39-39 39-102.2 0-141.1s-102.2-39-141.1 0L234.4 136.5l-11.3 11.3-11.3-11.3-14.1-14.1c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3zm259.7 0L352.9 277.6 234.4 159.1 352.9 40.5c32.7-32.7 85.8-32.7 118.5 0l11-11-11 11c32.7 32.7 32.7 85.8 0 118.5zm-273.8 35.2c-3.1-3.1-8.2-3.1-11.3 0L53.1 327.6A71.98 71.98 0 0 0 32 378.5v51.1L4.4 470.9c-2.9 4.4-4.4 9.5-4.4 14.7C0 500.2 11.8 512 26.4 512c5.2 0 10.3-1.5 14.7-4.4L82.4 480h51.1c19.1 0 37.4-7.6 50.9-21.1l133.3-133.2c3.1-3.1 3.1-8.2 0-11.3l-120-120zM64.4 338.9 192 211.3 300.7 320 173.1 447.6a55.92 55.92 0 0 1-39.6 16.4H77.6l-2 1.3-43.4 28.9c-1.7 1.1-3.7 1.8-5.8 1.8-5.8 0-10.4-4.7-10.4-10.4 0-2.1.6-4.1 1.8-5.8l28.9-43.4 1.3-2v-55.9c0-14.9 5.9-29.1 16.4-39.6"
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
                  d="M198.7 180 55.4 323.3c-15 15-23.4 35.4-23.4 56.6v42.4L5.4 462.2c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4L89.7 480h42.4c21.2 0 41.6-8.4 56.6-23.4L332 313.3 286.7 268 143.4 411.3c-3 3-7.1 4.7-11.3 4.7H96v-36.1c0-4.2 1.7-8.3 4.7-11.3L244 225.3z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M341.6 29.2 240.1 130.8l-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.5-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM143.4 411.3l118-117.9-42.7-42.7-118 117.9c-3 3-4.7 7.1-4.7 11.3V416h36.1c4.2 0 8.3-1.7 11.3-4.7"
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
