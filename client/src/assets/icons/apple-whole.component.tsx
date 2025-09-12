import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const AppleWholeIcon: React.FC<
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
                  d="M224 112c-8.8 0-16-7.2-16-16V80c0-44.2 35.8-80 80-80h16c8.8 0 16 7.2 16 16v16c0 44.2-35.8 80-80 80zM0 288c0-76.3 35.7-160 112-160 27.3 0 59.7 10.3 82.7 19.3 18.8 7.3 39.9 7.3 58.7 0 22.9-8.9 55.4-19.3 82.7-19.3 76.3 0 112 83.7 112 160 0 128-80 224-160 224-16.5 0-38.1-6.6-51.5-11.3-8.1-2.8-16.9-2.8-25 0-13.4 4.7-35 11.3-51.5 11.3C80 512 0 416 0 288"
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
                  d="M224 112h16c44.2 0 80-35.8 80-80V16c0-8.8-7.2-16-16-16h-16c-44.2 0-80 35.8-80 80v16c0 8.8 7.2 16 16 16M48 288c0-31.7 7.6-62.5 20.4-83.7 12.1-20 26.3-28.3 43.6-28.3 17.8 0 43.2 7.4 65.3 16 30 11.7 63.5 11.7 93.5 0 22.1-8.6 47.5-16 65.3-16 17.3 0 31.5 8.3 43.6 28.3 12.7 21.2 20.3 52 20.3 83.7 0 54.2-17 100-40.4 131.2-24 32-51.2 44.8-71.6 44.8-4.6 0-13.6-1.7-24.9-5.1-25.4-7.6-52.7-7.6-78.1 0-11.3 3.4-20.3 5.1-24.9 5.1-20.4 0-47.6-12.8-71.6-44.8C65 388 48 342.2 48 288m64-160C35.7 128 0 211.7 0 288c0 128 80 224 160 224 11.9 0 26.5-3.4 38.8-7.1 16.4-4.9 34.1-4.9 50.5 0 12.2 3.7 26.8 7.1 38.8 7.1 80 0 160-96 160-224 0-76.3-35.7-160-112-160-27.3 0-59.7 10.3-82.7 19.3-18.8 7.3-39.9 7.3-58.7 0-23-9-55.4-19.3-82.7-19.3"
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
                  d="M228.6 96H224v-4.6c0-32.8 26.6-59.4 59.4-59.4h4.6v4.6c0 32.8-26.6 59.4-59.4 59.4m-18.3 32h18.3c50.5 0 91.4-40.9 91.4-91.4V18.3C320 8.2 311.8 0 301.7 0h-18.3C232.9 0 192 40.9 192 91.4v18.3c0 10.1 8.2 18.3 18.3 18.3M32 288c0-33.8 8-67.7 22.8-92 14.2-23.5 33-36 57.2-36 21 0 48.7 8.4 71.1 17.1 26.2 10.2 55.6 10.2 81.9 0 22.3-8.7 50-17.1 71-17.1 24.3 0 43 12.5 57.2 36 14.8 24.3 22.8 58.2 22.8 92 0 57.5-18 106.6-43.6 140.8-26 34.7-57.4 51.2-84.4 51.2-13.2 0-32-2.7-45.3-5-12.3-2.2-25-2.2-37.3 0-13.3 2.3-32.1 5-45.3 5-27 0-58.4-16.5-84.4-51.2C50 394.6 32 345.5 32 288m128 224c16.2 0 37.4-3.2 50.8-5.5 8.7-1.5 17.6-1.5 26.3 0 13.5 2.4 34.6 5.5 50.8 5.5 80 0 160-96 160-224 0-76.3-35.7-160-112-160-27.3 0-59.7 10.3-82.7 19.3-18.8 7.3-39.9 7.3-58.7 0-22.8-9-55.2-19.3-82.5-19.3C35.7 128 0 211.7 0 288c0 128 80 224 160 224"
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
                  d="M240 96h-16V80c0-35.3 28.7-64 64-64h16v16c0 35.3-28.7 64-64 64m0 16c44.2 0 80-35.8 80-80V16c0-8.8-7.2-16-16-16h-16c-44.2 0-80 35.8-80 80v16c0 8.8 7.2 16 16 16zM16 288c0-36 8.5-72.9 25.1-100.3 16.3-27 39.7-43.7 70.9-43.7 24.1 0 54.2 9.4 76.9 18.2 22.5 8.8 47.8 8.8 70.3 0 22.7-8.8 52.7-18.2 76.9-18.2 31.2 0 54.6 16.7 70.9 43.7 16.5 27.4 25 64.3 25 100.3 0 60.7-19 113.3-46.8 150.4-28 37.3-63.7 57.6-97.2 57.6-9.5 0-22.2-2.8-34.1-6.4-19.4-5.8-40.3-5.8-59.7 0-11.9 3.6-24.7 6.4-34.1 6.4-33.5 0-69.2-20.3-97.2-57.6C35 401.3 16 348.7 16 288m96-160C35.7 128 0 211.7 0 288c0 128 80 224 160 224 11.9 0 26.5-3.4 38.8-7.1 16.4-4.9 34.1-4.9 50.5 0 12.2 3.7 26.8 7.1 38.8 7.1 80 0 160-96 160-224 0-76.3-35.7-160-112-160-27.3 0-59.7 10.3-82.7 19.3-18.8 7.3-39.9 7.3-58.7 0-23-9-55.4-19.3-82.7-19.3"
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
                  d="M240 112h-16c-8.8 0-16-7.2-16-16V80c0-44.2 35.8-80 80-80h16c8.8 0 16 7.2 16 16v16c0 44.2-35.8 80-80 80"
                />
                <path
                  className="aps-icon-foreground"
                  d="M112 128C35.7 128 0 211.7 0 288c0 128 80 224 160 224 16.5 0 38.1-6.6 51.5-11.3 8.1-2.8 16.9-2.8 25 0 13.4 4.7 35 11.3 51.5 11.3 80 0 160-96 160-224 0-76.3-35.7-160-112-160-27.3 0-59.7 10.3-82.7 19.3-18.8 7.3-39.9 7.3-58.7 0-22.9-9-55.3-19.3-82.6-19.3"
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
