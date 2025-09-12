import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ChartPieIcon: React.FC<
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
                  d="M304 240V16.6c0-9 7-16.6 16-16.6 123.7 0 224 100.3 224 224 0 9-7.6 16-16.6 16zM32 272c0-121.3 90.1-221.7 207-237.7 9.2-1.3 17 6.1 17 15.4V288l156.5 156.5c6.7 6.7 6.2 17.7-1.5 23.1-39.2 28-87.2 44.4-139 44.4-132.5 0-240-107.4-240-240m526.4 16c9.3 0 16.6 7.8 15.4 17-7.7 55.9-34.6 105.6-73.9 142.3-6 5.6-15.4 5.2-21.2-.7L320 288z"
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
                  d="M493.1 192H352V50.9C423.5 64 480 120.5 493.1 192M352 240h175.4c9 0 16.6-7 16.6-16C544 100.3 443.7 0 320 0c-9 0-16 7.6-16 16.6V240zm-129.9 81.9 126.3 126.3C325 458.4 299.2 464 272 464c-106 0-192-86-192-192 0-83.6 53.4-154.7 128-181.1V288c0 12.7 5.1 24.9 14.1 33.9M239 34.3C122.1 50.3 32 150.7 32 272c0 132.5 107.5 240 240 240 51.8 0 99.8-16.4 139-44.3 7.7-5.5 8.2-16.5 1.5-23.1L256 288V49.6c0-9.2-7.8-16.6-17-15.4zM558.4 288H320l158.7 158.7c5.8 5.8 15.2 6.3 21.2.7 39.3-36.7 66.2-86.5 73.9-142.3 1.3-9.2-6.1-17-15.4-17z"
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
                  d="M511.3 208H336V32.7c93.3 7.7 167.6 82.1 175.3 175.3M320 240h208.5c8.4 0 15.4-6.5 15.5-14.9V224C544 100.3 443.7 0 320 0h-1.1C310.5 0 304 7.1 304 15.5V224c0 8.8 7.2 16 16 16m-86.6 70.6 141.9 142C344.9 470 309.6 480 272 480c-114.9 0-208-93.1-208-208 0-98.3 68.3-180.8 160-202.4V288c0 8.5 3.4 16.6 9.4 22.6M239 34.3C122.1 50.3 32 150.7 32 272c0 132.5 107.5 240 240 240 51.8 0 99.8-16.4 139-44.3 7.7-5.5 8.2-16.5 1.5-23.1L256 288V49.6c0-9.2-7.8-16.6-17-15.4zm250.6 378L397.3 320h141.1c-8.3 35-25.4 66.6-48.9 92.3zM573.8 305c1.3-9.2-6.1-17-15.4-17H358.6c-14.3 0-21.4 17.2-11.3 27.3l131.4 131.4c5.8 5.8 15.2 6.3 21.2.7 39.3-36.7 66.2-86.5 73.9-142.3z"
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
                  d="M528 224H320V16c114.9 0 208 93.1 208 208m-208 16h208.5c8.4 0 15.4-6.5 15.5-14.9V224C544 100.3 443.7 0 320 0h-1.1C310.5 0 304 7.1 304 15.5V224c0 8.8 7.2 16 16 16m-75.3 59.3 156 156C364.3 481 319.9 496 272 496 148.3 496 48 395.7 48 272c0-112.8 83.5-206.2 192-221.7V288c0 4.2 1.7 8.3 4.7 11.3m-5.7-265C122.1 50.3 32 150.7 32 272c0 132.5 107.5 240 240 240 51.8 0 99.8-16.4 139-44.3 7.7-5.5 8.2-16.5 1.5-23.1L256 288V49.6c0-9.2-7.8-16.6-17-15.4zM358.6 304h199.1c-7.3 51.3-32.1 97-68.1 131zm215.1 1c1.3-9.2-6.1-17-15.4-17H358.6c-14.3 0-21.4 17.2-11.3 27.3l131.4 131.4c5.8 5.8 15.2 6.3 21.2.7 39.3-36.7 66.2-86.5 73.9-142.3z"
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
                  d="M32 272c0-121.3 90.1-221.7 207-237.7 9.2-1.3 17 6.1 17 15.4V288l156.5 156.5c6.7 6.7 6.2 17.7-1.5 23.1-39.2 28-87.2 44.4-139 44.4-132.5 0-240-107.4-240-240"
                />
                <path
                  className="aps-icon-foreground"
                  d="M527.4 240H304V16.6c0-9 7-16.6 16-16.6 123.7 0 224 100.3 224 224 0 9-7.6 16-16.6 16m31 48c9.3 0 16.6 7.8 15.4 17-7.7 55.9-34.6 105.6-73.9 142.3-6 5.6-15.4 5.2-21.2-.7L320 288z"
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
