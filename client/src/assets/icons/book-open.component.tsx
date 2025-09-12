import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BookOpenIcon: React.FC<
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
                  d="M249.6 471.5c10.8 3.8 22.4-4.1 22.4-15.5V78.6c0-4.2-1.6-8.4-5-11C247.4 52 202.4 32 144 32 93.5 32 46.3 45.3 18.1 56.1 6.8 60.5 0 71.7 0 83.8v370.3c0 11.9 12.8 20.2 24.1 16.5C55.6 460.1 105.5 448 144 448c33.9 0 79 14 105.6 23.5m76.8 0C353 462 398.1 448 432 448c38.5 0 88.4 12.1 119.9 22.6 11.3 3.8 24.1-4.6 24.1-16.5V83.8c0-12.1-6.8-23.3-18.1-27.6C529.7 45.3 482.5 32 432 32c-58.4 0-103.4 20-123 35.6-3.3 2.6-5 6.8-5 11V456c0 11.4 11.7 19.3 22.4 15.5"
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
                  d="M156 32C100.6 32 48.8 46.6 27.1 53.6 10.3 59 0 74.5 0 91.1v312.4c0 26.1 24 44.2 48 40.2 19.8-3.3 54.8-7.7 100-7.7 54 0 97.5 25.5 112.5 35.6 7.5 5 16.8 8.4 27 8.4 11.5 0 21.6-4.2 29.3-9.9 13.4-9.8 52.3-34.1 111.2-34.1 47.7 0 80.5 4 99 7.2 23.9 4.1 49-13.8 49-40.6V91.1c0-16.5-10.3-32.1-27.1-37.5C527.2 46.6 475.4 32 420 32c-36.8 0-71.8 6.4-97.4 12.7-12.8 3.2-23.5 6.3-30.9 8.7-1.3.4-2.6.8-3.7 1.2-1.1-.4-2.4-.8-3.7-1.2-7.5-2.4-18.1-5.5-30.9-8.7C227.8 38.4 192.8 32 156 32m108 65.3v320.6c-26-13.7-67.2-29.9-116-29.9-42.9 0-77.4 3.7-100 7.1V97.3C70.3 90.6 112.4 80 156 80c31.6 0 62.6 5.6 85.9 11.3 8.6 2.1 16.1 4.2 22.1 6m48 319.2V97.3c6-1.8 13.5-3.9 22.1-6C357.4 85.6 388.4 80 420 80c43.6 0 85.7 10.6 108 17.3v297.4c-21.7-3.3-54.9-6.7-100-6.7-51.4 0-90.8 15-116 28.6z"
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
                  d="M156 32c44.6 0 89.7 8.6 132 22.6 42.3-14 87.4-22.6 132-22.6 55.4 0 107.2 14.6 128.9 21.6C565.7 59 576 74.5 576 91.1v311.4c0 26.9-25.1 44.8-49 40.6-18.5-3.2-51.3-7.2-99-7.2-58.9 0-97.8 24.3-111.2 34.1-7.5 5.5-17.2 9.6-28.2 9.9h-1.2c-10.2 0-19.6-3.4-27-8.4C245.5 461.5 202 436 148 436c-45.2 0-80.1 4.4-100 7.7-24 4-48-14.1-48-40.2V91.1C0 74.5 10.3 59 27.1 53.6 48.8 46.6 100.6 32 156 32m148 408c20.3-13.5 63.1-36 124-36 49.5 0 84.1 4.2 104.4 7.6 2.5.4 5.7-.3 8.2-2.3 2.2-1.8 3.4-4 3.4-6.8V91.1c0-3.5-2.1-6.1-4.9-7C518.6 77.5 470.5 64 420 64c-38.6 0-78.1 7.1-116 19zM272 83c-37.9-12-77.4-19-116-19-50.5 0-98.6 13.5-119.1 20-2.8.9-4.9 3.6-4.9 7v312.5c0 2.7 1.1 4.9 3.1 6.5 2.2 1.8 5.1 2.5 7.6 2.1 21.3-3.6 58-8.2 105.3-8.2 56.8 0 102.8 23.7 124 36.9z"
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
                  d="M156 32c44.6 0 89.7 8.6 132 22.6 42.3-14 87.4-22.6 132-22.6 55.4 0 107.2 14.6 128.9 21.6C565.7 59 576 74.5 576 91.1v311.4c0 26.9-25.1 44.8-49 40.6-18.5-3.2-51.3-7.2-99-7.2-58.9 0-97.8 24.3-111.2 34.1-7.7 5.7-17.9 9.9-29.3 9.9-10.2 0-19.6-3.4-27-8.4-15-10-58.5-35.5-112.5-35.5-45.2 0-80.1 4.4-100 7.7-24 4-48-14.1-48-40.2V91.1C0 74.5 10.3 59 27.1 53.6 48.8 46.6 100.6 32 156 32m124 36.8C239.9 55.8 197.6 48 156 48 103 48 53.1 62 32 68.8 22.2 72 16 81.1 16 91.1v312.4c0 15.5 14.4 27 29.4 24.5 20.6-3.4 56.4-8 102.6-8 58.7 0 105.4 27.5 121.4 38.3 3.2 2.1 6.8 3.8 10.6 4.8zm16 394c4.2-1.2 8-3.2 11.4-5.6 15-11.1 57.2-37.2 120.6-37.2 48.6 0 82.3 4.1 101.7 7.4 15.2 2.6 30.3-9 30.3-24.9V91.1c0-10-6.2-19.1-16-22.2C522.9 62 473 48 420 48c-41.6 0-83.9 7.8-124 20.8z"
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
                  d="M288 72v408s92.8-32 144-32c38.5 0 88.4 12.1 119.9 22.6 11.3 3.8 24.1-4.6 24.1-16.5V83.8c0-12.1-6.8-23.3-18.1-27.6C529.7 45.3 482.5 32 432 32c-64 0-128 24-144 40"
                />
                <path
                  className="aps-icon-foreground"
                  d="M288 72v408s-92.8-32-144-32c-38.5 0-88.4 12.1-119.9 22.6C12.8 474.3 0 466 0 454.1V83.8c0-12.1 6.8-23.3 18.1-27.7C46.3 45.3 93.5 32 144 32c64 0 128 24 144 40"
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
