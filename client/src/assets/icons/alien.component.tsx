import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const AlienIcon: React.FC<
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
                  d="M224 0C100.3 0 0 100.3 0 224c0 135.3 148.8 247.7 194.7 279.2 8.6 5.9 18.9 8.8 29.3 8.8s20.7-2.9 29.3-8.8C299.2 471.7 448 359.3 448 224 448 100.3 347.7 0 224 0m32 306.3c0-45.4 36.8-82.3 82.3-82.3h32c7.6 0 13.7 6.1 13.7 13.7 0 45.4-36.8 82.3-82.3 82.3h-32c-7.6 0-13.7-6.1-13.7-13.7M109.7 224c45.4 0 82.3 36.8 82.3 82.3 0 7.6-6.1 13.7-13.7 13.7h-32c-45.5 0-82.3-36.8-82.3-82.3 0-7.6 6.1-13.7 13.7-13.7z"
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
                  d="M194.7 503.2c8.6 5.9 18.9 8.8 29.3 8.8s20.7-2.9 29.3-8.8C299.2 471.7 448 359.3 448 224 448 100.3 347.7 0 224 0S0 100.3 0 224c0 135.3 148.8 247.7 194.7 279.2M224 48c97.2 0 176 78.8 176 176 0 50.4-28.2 101.3-68.2 146.9-39.2 44.7-84.2 78.1-105.6 92.7h-.4c-.3.1-.9.2-1.8.2s-1.4-.1-1.8-.2c-.1 0-.2-.1-.2-.1h-.2c-21.4-14.6-66.4-48-105.6-92.7C76.2 325.3 48 274.4 48 224c0-97.2 78.8-176 176-176m16 258.3c0 7.6 6.1 13.7 13.7 13.7h32c45.4 0 82.3-36.8 82.3-82.3 0-7.6-6.1-13.7-13.7-13.7h-32c-45.4 0-82.3 36.8-82.3 82.3M125.7 224h-32c-7.6 0-13.7 6.1-13.7 13.7 0 45.4 36.8 82.3 82.3 82.3h32c7.6 0 13.7-6.1 13.7-13.7 0-45.4-36.8-82.3-82.3-82.3"
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
                  d="M224 32C118 32 32 118 32 224c0 56.2 31.2 110.7 72.2 157.4 40.4 46.1 86.7 80.4 108.6 95.4 2.8 1.9 6.6 3.2 11.2 3.2s8.4-1.3 11.2-3.2c21.9-15 68.1-49.3 108.6-95.4 41-46.7 72.2-101.2 72.2-157.4 0-106-86-192-192-192M0 224C0 100.3 100.3 0 224 0s224 100.3 224 224c0 135.3-148.8 247.7-194.7 279.2-8.6 5.9-18.9 8.8-29.3 8.8s-20.7-2.9-29.3-8.8C148.8 471.7 0 359.3 0 224m350 16h-14c-29.8 0-54.9 20.4-62 48h14c29.8 0 54.9-20.4 62-48m-14-32h32c8.8 0 16 7.2 16 16 0 53-43 96-96 96h-32c-8.8 0-16-7.2-16-16 0-53 43-96 96-96m-224 32H98c7.1 27.6 32.2 48 62 48h14c-7.1-27.6-32.2-48-62-48m96 64c0 8.8-7.2 16-16 16h-32c-53 0-96-43-96-96 0-8.8 7.2-16 16-16h32c53 0 96 43 96 96"
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
                  d="M224 16C109.1 16 16 109.1 16 224c0 61.9 34.2 120.2 76.1 168 41.7 47.5 89.1 82.6 111.6 98 5.7 3.9 12.7 6 20.3 6s14.6-2.1 20.3-6c22.4-15.4 69.9-50.5 111.6-98 42-47.8 76.2-106.1 76.2-168 0-114.9-93.1-208-208-208zM0 224C0 100.3 100.3 0 224 0s224 100.3 224 224c0 135.3-148.8 247.7-194.7 279.2-8.6 5.9-18.9 8.8-29.3 8.8s-20.7-2.9-29.3-8.8C148.8 471.7 0 359.3 0 224m368 0h-32c-44.2 0-80 35.8-80 80h32c44.2 0 80-35.8 80-80m-32-16h32c8.8 0 16 7.2 16 16 0 53-43 96-96 96h-32c-8.8 0-16-7.2-16-16 0-53 43-96 96-96m-224 16H80c0 44.2 35.8 80 80 80h32c0-44.2-35.8-80-80-80m96 80c0 8.8-7.2 16-16 16h-32c-53 0-96-43-96-96 0-8.8 7.2-16 16-16h32c53 0 96 43 96 96"
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
                  d="M224 0C100.3 0 0 100.3 0 224c0 135.3 148.8 247.7 194.7 279.2 8.6 5.9 18.9 8.8 29.3 8.8s20.7-2.9 29.3-8.8C299.2 471.7 448 359.3 448 224 448 100.3 347.7 0 224 0m32 306.3c0-45.4 36.8-82.3 82.3-82.3h32c7.6 0 13.7 6.1 13.7 13.7 0 45.4-36.8 82.3-82.3 82.3h-32c-7.6 0-13.7-6.1-13.7-13.7M109.7 224c45.4 0 82.3 36.8 82.3 82.3 0 7.6-6.1 13.7-13.7 13.7h-32c-45.5 0-82.3-36.8-82.3-82.3 0-7.6 6.1-13.7 13.7-13.7z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M109.7 224c45.4 0 82.3 36.8 82.3 82.3 0 7.6-6.1 13.7-13.7 13.7h-32c-45.5 0-82.3-36.8-82.3-82.3 0-7.6 6.1-13.7 13.7-13.7zm228.6 0h32c7.6 0 13.7 6.1 13.7 13.7 0 45.4-36.8 82.3-82.3 82.3h-32c-7.6 0-13.7-6.1-13.7-13.7 0-45.4 36.8-82.3 82.3-82.3"
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
