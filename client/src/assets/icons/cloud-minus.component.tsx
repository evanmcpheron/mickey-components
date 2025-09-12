import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CloudMinusIcon: React.FC<
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
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9-.1-2.7-.2-5.4-.2-8.1 0-88.4 71.6-160 160-160 59.3 0 111 32.2 138.7 80.2A95.5 95.5 0 0 1 448 96c53 0 96 43 96 96 0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128zm104-216c-13.3 0-24 10.7-24 24s10.7 24 24 24h144c13.3 0 24-10.7 24-24s-10.7-24-24-24z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M354.9 121.7c13.8 16 36.5 21.1 55.9 12.5 8.9-3.9 18.7-6.2 29.2-6.2 39.8 0 72 32.2 72 72q0 6-.9 11.7c-3.5 21.6 8.1 42.9 28.1 51.7C570.4 276.9 592 308 592 344c0 46.8-36.6 85.2-82.8 87.8-.6 0-1.3.1-1.9.2H144c-53 0-96-43-96-96 0-41.7 26.6-77.3 64-90.5 19.2-6.8 32-24.9 32-45.3v-.2c0-66.3 53.7-120 120-120 36.3 0 68.8 16.1 90.9 41.7M512 480v-.2c71.4-4.1 128-63.3 128-135.8 0-55.7-33.5-103.7-81.5-124.7 1-6.3 1.5-12.8 1.5-19.3 0-66.3-53.7-120-120-120-17.4 0-33.8 3.7-48.7 10.3C360.4 54.6 314.9 32 264 32c-92.8 0-168 75.2-168 168v.2C40.1 220 0 273.3 0 336c0 79.5 64.5 144 144 144h368M248 264c-13.3 0-24 10.7-24 24s10.7 24 24 24h144c13.3 0 24-10.7 24-24s-10.7-24-24-24z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M389.8 125.2C363.7 88.1 320.7 64 272 64c-77.4 0-140.5 61-143.9 137.5-.6 13-9 24.4-21.3 28.8C63.2 245.7 32 287.2 32 336c0 61.9 50.1 112 112 112h368c53 0 96-43 96-96 0-36.8-20.7-68.8-51.2-84.9-13.4-7.1-20-22.5-15.8-37.1 2-6.9 3-14.3 3-22 0-44.2-35.8-80-80-80-12.3 0-23.9 2.8-34.3 7.7a31.93 31.93 0 0 1-39.9-10.5M272 32c59.5 0 112.1 29.5 144 74.8 14.5-6.9 30.8-10.8 48-10.8 61.9 0 112 50.1 112 112 0 10.7-1.5 21-4.3 30.8C612.3 260.2 640 302.9 640 352c0 70.7-57.3 128-128 128H144C64.5 480 0 415.5 0 336c0-62.8 40.2-116.1 96.2-135.9C100.3 106.6 177.4 32 272 32m-48 240h192c8.8 0 16 7.2 16 16s-7.2 16-16 16H224c-8.8 0-16-7.2-16-16s7.2-16 16-16"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M522.7 220.8c3.4-8.9 5.3-18.6 5.3-28.8 0-44.2-35.8-80-80-80-16.5 0-31.7 5-44.4 13.5-3.7 2.5-8.2 3.3-12.5 2.3s-8-3.8-10.2-7.6C355.9 77 309.3 48 256 48c-79.5 0-144 64.5-144 144 0 2.5.1 4.9.2 7.3.4 7.1-4 13.5-10.7 15.9C51.7 232.7 16 280.2 16 336c0 70.7 57.3 128 128 128h368c61.9 0 112-50.1 112-112 0-54.2-38.5-99.4-89.6-109.8-4.6-.9-8.6-3.9-10.9-8s-2.6-9.1-.9-13.4zM256 32c53.6 0 101 26.3 130 66.7 3.1 4.3 6 8.8 8.7 13.4 3.5-2.4 7.2-4.5 11-6.4 12.8-6.2 27.1-9.7 42.3-9.7 53 0 96 43 96 96 0 6.6-.7 13-1.9 19.2-1.1 5.3-2.6 10.5-4.5 15.4 5.3 1.1 10.5 2.5 15.5 4.2C603.6 247.9 640 295.7 640 352c0 70.7-57.3 128-128 128H144C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9-.1-2.7-.2-5.4-.2-8.1 0-88.4 71.6-160 160-160m-32 248h192c4.4 0 8 3.6 8 8s-3.6 8-8 8H224c-4.4 0-8-3.6-8-8s3.6-8 8-8"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9-.1-2.7-.2-5.4-.2-8.1 0-88.4 71.6-160 160-160 59.3 0 111 32.2 138.7 80.2A95.5 95.5 0 0 1 448 96c53 0 96 43 96 96 0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128zm104-216c-13.3 0-24 10.7-24 24s10.7 24 24 24h144c13.3 0 24-10.7 24-24s-10.7-24-24-24z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M224 288c0-13.3 10.7-24 24-24h144c13.3 0 24 10.7 24 24s-10.7 24-24 24H248c-13.3 0-24-10.7-24-24"
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
