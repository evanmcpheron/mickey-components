import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const VolumeIcon: React.FC<
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
                  d="M333.1 34.8C344.6 40 352 51.4 352 64v384c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L163.8 352H96c-35.3 0-64-28.7-64-64v-64c0-35.3 28.7-64 64-64h67.8L298.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3m172 72.2c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C507.3 341.3 528 301.1 528 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5c21.5 17.6 35.4 44.4 35.4 74.5s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C425.1 284.4 432 271 432 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5z"
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
                  d="M191.9 201.9 304 102.3v307.4l-112.1-99.6c-4.4-3.9-10.1-6.1-15.9-6.1H88c-4.4 0-8-3.6-8-8v-80c0-4.4 3.6-8 8-8h88c5.9 0 11.6-2.2 15.9-6.1M322.2 32c-7.3 0-14.3 2.7-19.8 7.5L166.9 160H88c-30.9 0-56 25.1-56 56v80c0 30.9 25.1 56 56 56h78.9l135.5 120.5c5.5 4.8 12.5 7.5 19.8 7.5 16.5 0 29.8-13.3 29.8-29.8V61.8c0-16.5-13.3-29.8-29.8-29.8m182.9 75c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C507.3 170.7 528 210.9 528 256s-20.7 85.3-53.2 111.8c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5c43.2-35.2 70.9-88.9 70.9-149s-27.7-113.8-70.9-149zm-60.5 74.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C425.1 227.6 432 241 432 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5c21.5-17.7 35.4-44.5 35.4-74.6s-13.9-56.9-35.4-74.5"
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
                  d="M320 66.7 183.6 188c-2.9 2.6-6.7 4-10.6 4H88c-13.3 0-24 10.7-24 24v80c0 13.3 10.7 24 24 24h85c3.9 0 7.7 1.4 10.6 4L320 445.3zm-17.6-27.2c5.5-4.8 12.5-7.5 19.8-7.5 16.5 0 29.8 13.3 29.8 29.8v388.4c0 16.5-13.3 29.8-29.8 29.8-7.3 0-14.3-2.7-19.8-7.5l10.6-12-10.6 12L166.9 352H88c-30.9 0-56-25.1-56-56v-80c0-30.9 25.1-56 56-56h78.9zm116.8 142.9c5.3-7.1 15.3-8.5 22.4-3.2 23.3 17.5 38.4 45.4 38.4 76.8s-15.1 59.3-38.4 76.8c-7.1 5.3-17.1 3.9-22.4-3.2s-3.9-17.1 3.2-22.4C438 295.5 448 276.9 448 256s-10-39.5-25.6-51.2c-7.1-5.3-8.5-15.3-3.2-22.4m87-74.5C548.8 143.1 576 196.4 576 256s-27.2 112.9-69.8 148.1c-6.8 5.6-16.9 4.7-22.5-2.1s-4.7-16.9 2.1-22.5C521.4 350.1 544 305.7 544 256s-22.6-94.1-58.2-123.4c-6.8-5.6-7.8-15.7-2.1-22.5s15.7-7.8 22.5-2.1z"
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
                  d="M322.2 48c-3.4 0-6.6 1.2-9.2 3.5L175.2 174c-1.5 1.3-3.4 2-5.3 2H88c-22.1 0-40 17.9-40 40v80c0 22.1 17.9 40 40 40h81.9c2 0 3.9.7 5.3 2L313 460.5c2.5 2.2 5.8 3.5 9.2 3.5 7.6 0 13.8-6.2 13.8-13.8V61.8c0-7.6-6.2-13.8-13.8-13.8m-19.8-8.5c5.5-4.8 12.5-7.5 19.8-7.5 16.5 0 29.8 13.3 29.8 29.8v388.4c0 16.5-13.3 29.8-29.8 29.8-7.3 0-14.3-2.7-19.8-7.5L166.9 352H88c-30.9 0-56-25.1-56-56v-80c0-30.9 25.1-56 56-56h78.9zm128.1 141.3c2.7-3.5 7.7-4.2 11.2-1.6 23.2 17.6 38.3 45.4 38.3 76.8s-15.1 59.2-38.3 76.7c-3.5 2.7-8.5 1.9-11.2-1.6s-1.9-8.5 1.6-11.2c19.4-14.6 31.9-37.8 31.9-64s-12.5-49.4-31.9-64c-3.5-2.7-4.2-7.7-1.6-11.2zm70.4-77.2C546.5 138.7 576 193.9 576 256s-29.5 117.3-75.1 152.3c-3.5 2.7-8.5 2-11.2-1.5s-2-8.5 1.5-11.2C533 363.5 560 312.9 560 256s-27-107.5-68.9-139.7c-3.5-2.7-4.2-7.7-1.5-11.2s7.7-4.2 11.2-1.5z"
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
                  d="M471.3 110.5c8.4-10.3 23.5-11.8 33.8-3.5 43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C507.3 341.3 528 301.1 528 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8zM410.8 185c8.4-10.3 23.5-11.8 33.8-3.5 21.5 17.6 35.4 44.4 35.4 74.5s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C425.1 284.4 432 271 432 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M352 64c0-12.6-7.4-24-18.9-29.2s-25-3.1-34.4 5.3L163.8 160H96c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64h67.8l134.9 119.9c9.4 8.4 22.9 10.4 34.4 5.3S352 460.6 352 448z"
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
