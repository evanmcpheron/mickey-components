import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const EyeDropperHalfIcon: React.FC<
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
                  d="M240.1 130.8 341.6 29.2c39-39 102.2-39 141.1 0s39 102.2 0 141.1L381.2 271.9l9.4 9.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l9.4 9.4zm-63.9 71.8 45.3 45.3-72.2 72.1h85.5l29.4-29.4 45.3 45.3-120.8 120.7c-15 15-35.4 23.4-56.6 23.4H89.7l-40 26.6c-12.7 8.5-29.6 6.8-40.4-4s-12.5-27.7-4-40.4L32 422.3v-42.4c0-21.2 8.4-41.6 23.4-56.6l120.7-120.7z"
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
                  d="M233 202.9 199 169l-8-8c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l8 8 33.9-33.9 71.3-71.3c19.1-19.1 45-29.8 72-29.8C466.4 0 512 45.6 512 101.8c0 27-10.7 52.9-29.8 72l-71.3 71.3L377 279l8 8c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-8-8-34-33.9zm110 42.2 105.2-105.2c10.1-10.1 15.8-23.8 15.8-38.1 0-29.7-24.1-53.8-53.8-53.8-14.3 0-28 5.7-38.1 15.8L266.9 169zm-159.6-46.5 33.9 33.9-87.4 87.5h124.2l25.4-25.4 33.9 33.9L183 458.9a71.98 71.98 0 0 1-50.9 21.1H79.3l-42 28c-9.5 6.3-22.2 5.1-30.3-3s-9.3-20.8-3-30.3l28-42v-52.8c0-19.1 7.6-37.4 21.1-50.9z"
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
                  d="m198.1 172.7 22.6 22.6 95.9 95.9 22.6 22.6 17.4 17.4c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-17.4-17.4 22.6-22.6 98.3-98.3c39-39 39-102.2 0-141.1s-102.2-39-141.1 0l-98.3 98.3-22.6 22.6-17.4-17.4c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6zm45.3 0L364.2 51.9c26.5-26.5 69.4-26.5 95.9 0s26.5 69.4 0 95.9L339.3 268.6zm-56.1 62.6c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L55.4 321.9c-15 15-23.4 35.4-23.4 56.6v41.2L3.8 469.1c-2.5 4.4-3.8 9.3-3.8 14.3C0 499.2 12.8 512 28.6 512c5 0 9.9-1.3 14.2-3.8L92.2 480h41.2c21.2 0 41.6-8.4 56.6-23.4l109.3-109.3c4.6-4.6 5.9-11.5 3.5-17.4s-8.3-9.9-14.8-9.9H102.6zM64 378.5c0-9.5 2.8-18.7 8-26.5h177.4l-81.9 81.9c-9 9-21.2 14.1-33.9 14.1H83.8l-3.7 2.1-42.4 24.2 24.2-42.4 2.1-3.7v-49.7"
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
                  d="m211.8 159.1 11.3 11.3 118.5 118.5 11.3 11.3 25.4 25.4c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-14.1-14.1-11.3-11.3 11.3-11.3 107.3-107.2c39-39 39-102.2 0-141.1s-102.2-39-141.1 0L234.4 136.5l-11.3 11.3-11.3-11.3-14.1-14.1c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3zm259.7 0L352.9 277.6 234.4 159.1 352.9 40.5c32.7-32.7 85.8-32.7 118.5 0l11-11-11 11c32.7 32.7 32.7 85.8 0 118.5zm-273.8 46.6c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L53.1 327.6A71.98 71.98 0 0 0 32 378.5v51.1L4.4 470.9c-2.9 4.4-4.4 9.5-4.4 14.7C0 500.2 11.8 512 26.4 512c5.2 0 10.3-1.5 14.7-4.4L82.4 480h51.1c19.1 0 37.4-7.6 50.9-21.1l133.3-133.2c2.3-2.3 3-5.7 1.7-8.7s-4.2-4.9-7.4-4.9H91.3zM64.4 338.9 75.3 328h217.4L173.1 447.6a55.92 55.92 0 0 1-39.6 16.4H77.6l-2 1.3-43.4 28.9c-1.7 1.1-3.7 1.8-5.8 1.8-5.8 0-10.4-4.7-10.4-10.4 0-2.1.6-4.1 1.8-5.8l28.9-43.4 1.3-2v-55.9c0-14.9 5.9-29.1 16.4-39.6"
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
                  d="M341.6 29.2 240.1 130.8l-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.5-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM143.4 411.3l91.3-91.3h-85.4l-48.6 48.6c-3 3-4.7 7.1-4.7 11.3V416h36.1c4.2 0 8.3-1.7 11.3-4.7"
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
