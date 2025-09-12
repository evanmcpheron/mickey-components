import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const HryvniaSignIcon: React.FC<
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
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M121.9 116.2c16.4-13.1 36.8-20.2 57.7-20.2H223c27.1 0 49 21.9 49 49 0 11.5-4 22.4-11.1 31H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h123.5l-50.6 28.9c-1.7 1-3.4 2-5.1 3.1H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h20.3c-2.8 9.9-4.3 20.4-4.3 31 0 62.4 50.6 113 113 113h43.4c35.5 0 70-12.1 97.7-34.3l5.9-4.7c13.8-11 16-31.2 5-45s-31.2-16-45-5l-5.9 4.7c-16.4 13.1-36.7 20.2-57.7 20.2H161c-27.1 0-49-21.9-49-49 0-11.5 4-22.4 11.1-31H352c17.7 0 32-14.3 32-32s-14.3-32-32-32H228.5l50.6-28.9c1.7-1 3.4-2 5.1-3.1H352c17.7 0 32-14.3 32-32s-14.3-32-32-32h-20.3c2.8-10 4.3-20.4 4.3-31 0-62.4-50.6-113-113-113h-43.4c-35.5 0-70 12.1-97.7 34.3L76 71c-13.8 11-16 31.2-5 45s31.2 16 45 5l5.9-4.7z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M105.7 104.6C125.6 88.7 150.3 80 175.8 80H227c33.7 0 61 27.3 61 61 0 20.7-10.5 39.8-27.5 51H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h147l-65.3 34.8c-7 3.7-13.5 8.2-19.4 13.2H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h29.8C50 347.1 48 358.9 48 371c0 60.2 48.8 109 109 109h51.2c36.4 0 71.7-12.4 100.1-35.1l2.7-2.2c10.4-8.3 12-23.4 3.7-33.7s-23.4-12-33.7-3.8l-2.7 2.2c-19.9 15.9-44.6 24.6-70.1 24.6H157c-33.7 0-61-27.3-61-61 0-12.8 4-24.9 11-35h253c13.3 0 24-10.7 24-24s-10.7-24-24-24H183l90-48h87c13.3 0 24-10.7 24-24s-10.7-24-24-24h-36.7c8.2-15.4 12.7-32.9 12.7-51 0-60.2-48.8-109-109-109h-51.2c-36.4 0-71.7 12.4-100.1 35.1L73 69.3c-10.3 8.2-12 23.3-3.7 33.7s23.4 12 33.7 3.7l2.7-2.2z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M99.7 86.1c21.6-14.4 47-22.1 72.9-22.1H231c40.3 0 73 32.7 73 73 0 21.4-9.3 41.3-25 55H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h204.2L106 281.1c-4.1 2.1-8.1 4.4-11.8 6.9H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h47.6c-10 16.2-15.6 35.2-15.6 55 0 58 47 105 105 105h58.4c32.3 0 63.8-9.5 90.6-27.4l10.9-7.2c7.4-4.9 9.3-14.8 4.4-22.2s-14.8-9.3-22.2-4.4l-10.9 7.2c-21.6 14.4-46.9 22.1-72.9 22.1H153c-40.3 0-73-32.7-73-73 0-21.4 9.3-41.3 25-55h263c8.8 0 16-7.2 16-16s-7.2-16-16-16H163.8L278 230.9c4.1-2.1 8.1-4.4 11.8-6.9H368c8.8 0 16-7.2 16-16s-7.2-16-16-16h-47.6c10-16.2 15.6-35.2 15.6-55 0-58-47-105-105-105h-58.4c-32.3 0-63.8 9.5-90.6 27.4l-10.9 7.3c-7.4 4.9-9.3 14.8-4.4 22.2s14.8 9.3 22.2 4.4l10.9-7.2z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M84.2 73.5C109.1 56.9 138.4 48 168.3 48H235c46.9 0 85 38.1 85 85 0 22.4-8.8 43.4-23.8 59H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h267c-1.2.7-2.5 1.3-3.8 1.9L106 287.6c-.3.1-.5.2-.8.4H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h73.4C60.5 322.9 48 350 48 379c0 55.8 45.2 101 101 101h66.7c33.1 0 65.5-9.8 93-28.2l7.8-5.2c3.7-2.5 4.7-7.4 2.2-11.1s-7.4-4.7-11.1-2.2l-7.8 5.2c-24.9 16.6-54.2 25.5-84.1 25.5H149c-46.9 0-85-38.1-85-85 0-31.5 17.4-60.3 45-75h267c4.4 0 8-3.6 8-8s-3.6-8-8-8H142.8L278 224.4c9.1-4.3 17.4-9.8 24.6-16.4H376c4.4 0 8-3.6 8-8s-3.6-8-8-8h-59c12.1-16.9 19-37.4 19-59 0-55.8-45.2-101-101-101h-66.7c-33.1 0-65.5 9.8-93 28.2l-7.8 5.2c-3.7 2.5-4.7 7.4-2.2 11.1s7.4 4.7 11.1 2.2z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M260.9 176H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h123.5l91.8-52.5c5.3-3 9.9-7 13.6-11.5M99.8 272H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h20.3c7.5-26.1 24.2-49 47.5-64m23.2 64h229c17.7 0 32-14.3 32-32s-14.3-32-32-32H228.5l-91.8 52.5c-5.3 3-9.9 7-13.6 11.5zm161.1-96H352c17.7 0 32-14.3 32-32s-14.3-32-32-32h-20.3c-7.5 26.1-24.2 49-47.5 64z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M179.6 96c-21 0-41.3 7.1-57.7 20.2L116 121c-13.8 11-33.9 8.8-45-5s-8.8-33.9 5-45l5.9-4.7C109.7 44.1 144.1 32 179.6 32H223c62.4 0 113 50.6 113 113 0 40.5-21.7 78-56.9 98.1l-142.4 81.4c-15.3 8.7-24.7 25-24.7 42.5 0 27.1 21.9 49 49 49h43.4c21 0 41.3-7.1 57.7-20.2l5.9-4.8c13.8-11 33.9-8.8 45 5s8.8 33.9-5 45l-5.9 4.7c-27.7 22.2-62.2 34.3-97.7 34.3H161c-62.4 0-113-50.6-113-113 0-40.6 21.7-78 56.9-98.1l142.4-81.4c15.3-8.7 24.7-25 24.7-42.5 0-27.1-21.9-49-49-49z"
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
