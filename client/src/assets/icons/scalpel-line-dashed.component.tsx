import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ScalpelLineDashedIcon: React.FC<
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
                  d="M441.4 0c-20.8 0-40.6 9.2-54 25.1L187.8 261.7c-4 4.8-4.9 11.4-2.3 17.1s8.3 9.3 14.5 9.3h132.6c14.1 0 27.6-6.2 36.7-17l125.1-148.4c11.4-13.5 17.6-30.5 17.6-48.1v-4c0-39-31.6-70.6-70.6-70.6M164.7 324.7l-160 160c-4.6 4.6-5.9 11.5-3.5 17.4S9.5 512 16 512c18.1 0 84.1-8.4 145.9-33.1C222.5 454.6 288 410.9 288 336v-16H169.4zM304 480h-64c-8.8 0-16 7.2-16 16s7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16m64 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16zm128 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16z"
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
                  d="M441.4 48c-6.7 0-13 2.9-17.3 8L268.9 240h63.8l125-148.3 36.7 31L369.3 271c-9.1 10.8-22.5 17-36.7 17H200c-6.2 0-11.9-3.6-14.5-9.3s-1.7-12.3 2.3-17.1l12.2-14.4 5.6-6.7.4-.5L387.4 25.1C400.8 9.2 420.6 0 441.4 0c39 0 70.6 31.6 70.6 70.6v4c0 17.6-6.2 34.6-17.6 48.1l-36.7-31c4-4.8 6.3-10.9 6.3-17.1v-4c0-12.5-10.1-22.6-22.6-22.6m-272 272H288v16c0 74.9-65.5 118.6-126.1 142.9C100.1 503.6 34.1 512 16 512c-6.5 0-12.3-3.9-14.8-9.9s-1.1-12.9 3.5-17.4l160-160zM248 464h48c13.3 0 24 10.7 24 24s-10.7 24-24 24h-48c-13.3 0-24-10.7-24-24s10.7-24 24-24m128 0h48c13.3 0 24 10.7 24 24s-10.7 24-24 24h-48c-13.3 0-24-10.7-24-24s10.7-24 24-24m176 0c13.3 0 24 10.7 24 24s-10.7 24-24 24h-48c-13.3 0-24-10.7-24-24s10.7-24 24-24z"
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
                  d="M441.4 32c-11.4 0-22.2 5-29.5 13.7L234.4 256h98.2c4.7 0 9.2-2.1 12.2-5.7L470 102c6.5-7.7 10-17.4 10-27.5v-4c0-21.2-17.3-38.5-38.6-38.5m-54-6.9C400.8 9.2 420.6 0 441.4 0c39 0 70.6 31.6 70.6 70.6v4c0 17.6-6.2 34.6-17.6 48.1L369.3 271c-9.1 10.8-22.5 17-36.7 17H200c-6.2 0-11.9-3.6-14.5-9.3s-1.7-12.3 2.3-17.1zM169.4 320h45.3l-155 154.9c29.2-5 68.3-14.1 106.2-29.7C227.3 419.9 279.2 380.5 287 320h32.2c-8 80.6-76 128-141.1 154.8C108.1 503.6 34 512 16 512c-6.5 0-12.3-3.9-14.8-9.9s-1.1-12.9 3.5-17.4zM304 480c8.8 0 16 7.2 16 16s-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16s7.2-16 16-16zm64 0h64c8.8 0 16 7.2 16 16s-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16s7.2-16 16-16m128 0h64c8.8 0 16 7.2 16 16s-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16s7.2-16 16-16"
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
                  d="M441.4 16c-16.1 0-31.4 7.1-41.7 19.4L200 272h132.6c9.4 0 18.4-4.2 24.5-11.4l125.1-148.2c8.9-10.6 13.8-24 13.8-37.8v-4c0-30.1-24.5-54.6-54.6-54.6M185.5 278.7c-2.6-5.6-1.7-12.3 2.3-17.1L387.4 25.1C400.8 9.2 420.6 0 441.4 0c39 0 70.6 31.6 70.6 70.6v4c0 17.6-6.2 34.6-17.6 48.1L369.3 271c-9.1 10.8-22.5 17-36.7 17H200c-6.2 0-11.9-3.6-14.5-9.3m-9.4 41.3h22.3L28.5 494.4c30.8-3.6 87.1-14 141-36.8 63.8-27 121.4-70 132.5-137.6h16.2c-11.2 77.3-76.5 124.5-142.4 152.4C103 503.1 25.9 512 8 512c-3.2 0-6.1-1.9-7.4-4.9s-.6-6.4 1.6-8.7zM232 496h80c4.4 0 8 3.6 8 8s-3.6 8-8 8h-80c-4.4 0-8-3.6-8-8s3.6-8 8-8m128 0h80c4.4 0 8 3.6 8 8s-3.6 8-8 8h-80c-4.4 0-8-3.6-8-8s3.6-8 8-8m128 0h80c4.4 0 8 3.6 8 8s-3.6 8-8 8h-80c-4.4 0-8-3.6-8-8s3.6-8 8-8"
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
                  d="m169.4 320-4.7 4.7-160 160c-4.6 4.6-5.9 11.5-3.5 17.4S9.5 512 16 512c18.1 0 84.1-8.4 145.9-33.1C222.5 454.6 288 410.9 288 336v-16H169.4"
                />
                <path
                  className="aps-icon-foreground"
                  d="M387.5 24.6C400.9 9 420.5 0 441.2 0 480.3 0 512 31.7 512 70.8v3.4c0 17.9-6.5 35.2-18.2 48.7L337.2 303.5C328 314 314.8 320 300.9 320H168c-6.3 0-11.9-3.6-14.5-9.3s-1.7-12.4 2.4-17.1zM240 480h64c8.8 0 16 7.2 16 16s-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16s7.2-16 16-16m128 0h64c8.8 0 16 7.2 16 16s-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16s7.2-16 16-16m128 0h64c8.8 0 16 7.2 16 16s-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16s7.2-16 16-16"
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
