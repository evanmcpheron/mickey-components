import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const HourglassHalfIcon: React.FC<
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
                  d="M32 0C14.3 0 0 14.3 0 32s14.3 32 32 32v11c0 42.4 16.9 83.1 46.9 113.1l67.8 67.9-67.8 67.9C48.9 353.9 32 394.6 32 437v11c-17.7 0-32 14.3-32 32s14.3 32 32 32h320c17.7 0 32-14.3 32-32s-14.3-32-32-32v-11c0-42.4-16.9-83.1-46.9-113.1L237.3 256l67.9-67.9c30-30 46.9-70.7 46.9-113.1V64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32m64 75V64h192v11c0 19-5.6 37.4-16 53H112c-10.3-15.6-16-34-16-53m16 309c3.5-5.3 7.6-10.3 12.1-14.9l67.9-67.8 67.9 67.9c4.6 4.6 8.6 9.6 12.1 14.9H112z"
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
                  d="M0 24C0 10.7 10.7 0 24 0h336c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8v19c0 40.3-16 79-44.5 107.5L225.9 256l81.5 81.5C336 366 352 404.7 352 445v19h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h8v-19c0-40.3 16-79 44.5-107.5l81.6-81.5-81.6-81.5C48 146 32 107.3 32 67V48h-8C10.7 48 0 37.3 0 24m110.5 347.5c-3.9 3.9-7.5 8.1-10.7 12.5h184.4c-3.2-4.4-6.8-8.6-10.7-12.5L192 289.9l-81.5 81.5zM284.2 128C297 110.4 304 89 304 67V48H80v19c0 22.1 7 43.4 19.8 61z"
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
                  d="M16 512c-8.8 0-16-7.2-16-16s7.2-16 16-16h16v-41.6c0-49.4 22.8-96 61.8-126.3l72.1-56.1-72.1-56.1c-39-30.3-61.8-77-61.8-126.3V32H16C7.2 32 0 24.8 0 16S7.2 0 16 0h352c8.8 0 16 7.2 16 16s-7.2 16-16 16h-16v41.6c0 49.4-22.8 96-61.8 126.3L218.1 256l72.2 56.1c39 30.3 61.8 76.9 61.8 126.3V480h16c8.8 0 16 7.2 16 16s-7.2 16-16 16H16m304-32v-41.6c0-7.6-.7-15.1-2-22.4H66c-1.3 7.3-2 14.8-2 22.4V480zM113.4 337.4C97.3 349.9 84.6 366 76.1 384h231.8c-8.5-18-21.1-34.1-37.3-46.6L192 276.3zM192 235.7l78.6-61.1c5.7-4.5 11-9.3 15.8-14.6H97.6c4.8 5.3 10.1 10.2 15.8 14.6zM307.9 128c7.9-16.8 12.1-35.4 12.1-54.4V32H64v41.6c0 19.1 4.2 37.6 12.1 54.4z"
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
                  d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8h24v55.2c0 48.3 23 93.7 61.8 122.4l84.7 62.4-84.7 62.4C55 347 32 392.5 32 440.8V496H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h368c4.4 0 8-3.6 8-8s-3.6-8-8-8h-24v-55.2c0-48.3-23-93.7-61.8-122.4L205.5 256l84.7-62.4C329 165 352 119.5 352 71.2V16h24c4.4 0 8-3.6 8-8s-3.6-8-8-8zm328 16v55.2c0 19.9-4.3 39.2-12.4 56.8H60.4C52.3 110.4 48 91.1 48 71.2V16zm-21.1 128c-8.9 14.1-20.5 26.6-34.2 36.7L192 246.1l-88.7-65.3C89.6 170.6 78 158.1 69.1 144zM192 265.9l88.7 65.3c28 20.7 46.8 51.1 53.1 84.7H50.3c6.2-33.7 25-64.1 53.1-84.7zM48 440.8c0-2.9.1-5.9.3-8.8h287.4c.2 2.9.3 5.8.3 8.8V496H48z"
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
                  d="M32 75V64h64v11c0 19 5.6 37.4 16 53h160c10.3-15.6 16-34 16-53V64h64v11c0 42.4-16.9 83.1-46.9 113.1L237.3 256l67.9 67.9c30 30 46.9 70.7 46.9 113.1v11H32v-11c0-42.4 16.9-83.1 46.9-113.1l67.8-67.9-67.8-67.9C48.9 158.1 32 117.4 32 75m80 309h160c-3.5-5.3-7.6-10.3-12.1-14.9L192 301.3l-67.9 67.9c-4.6 4.6-8.6 9.6-12.1 14.9z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M32 0C14.3 0 0 14.3 0 32s14.3 32 32 32h320c17.7 0 32-14.3 32-32S369.7 0 352 0zm0 448c-17.7 0-32 14.3-32 32s14.3 32 32 32h320c17.7 0 32-14.3 32-32s-14.3-32-32-32z"
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
