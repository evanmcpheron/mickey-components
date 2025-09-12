import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const HourglassClockIcon: React.FC<
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
                  d="M0 32C0 14.3 14.3 0 32 0h320c17.7 0 32 14.3 32 32s-14.3 32-32 32v11c0 42.4-16.9 83.1-46.9 113.1L237.3 256l36 36c-10.7 22.2-16.8 47.1-17.2 73.3l-64-64-67.9 67.9c-18 18-28.1 42.4-28.1 67.9v11h179.1c13.1 25.6 32.2 47.6 55.6 64H32c-17.7 0-32-14.3-32-32s14.3-32 32-32V437c0-42.4 16.9-83.1 46.9-113.1l67.8-67.9-67.8-67.9C48.9 158.1 32 117.4 32 75V64C14.3 64 0 49.7 0 32m96 32v11c0 25.5 10.1 49.9 28.1 67.9l67.9 67.8 67.9-67.9c18-18 28.1-42.4 28.1-67.9V64zm192 304a144 144 0 1 1 288 0 144 144 0 1 1-288 0m144-80c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-32v-48c0-8.8-7.2-16-16-16"
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
                  d="M24 0C10.7 0 0 10.7 0 24s10.7 24 24 24h8v19c0 40.3 16 79 44.5 107.5l81.6 81.5-81.6 81.5C48 366 32 404.7 32 445v19h-8c-13.3 0-24 10.7-24 24s10.7 24 24 24h306.8c-18.3-12.9-34.1-29.2-46.3-48H80v-19c0-27.6 11-54 30.5-73.5l81.5-81.6 64.5 64.5c1.5-19.3 6-37.7 13.2-54.7L225.9 256l81.5-81.5C336 146 352 107.3 352 67V48h8c13.3 0 24-10.7 24-24S373.3 0 360 0zm168 222.1-81.5-81.5C91 121 80 94.6 80 67V48h224v19c0 27.6-11 54-30.5 73.5zM576 368a144 144 0 1 0-288 0 144 144 0 1 0 288 0m-144-80c8.8 0 16 7.2 16 16v48h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16"
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
                  d="M16 512c-8.8 0-16-7.2-16-16s7.2-16 16-16h16v-41.6c0-49.4 22.8-96 61.8-126.3l72.1-56.1-72.1-56.1c-39-30.3-61.8-77-61.8-126.3V32H16C7.2 32 0 24.8 0 16S7.2 0 16 0h352c8.8 0 16 7.2 16 16s-7.2 16-16 16h-16v41.6c0 49.4-22.8 96-61.8 126.3L218.1 256l52.8 41.1c-4.5 10.3-8.1 21.1-10.6 32.3L192 276.3l-78.6 61.1C82.2 361.6 64 398.9 64 438.4V480h232.2c10 12.1 21.7 22.9 34.6 32H16m176-276.3 78.6-61.1c31.2-24.3 49.4-61.5 49.4-101V32H64v41.6c0 39.5 18.2 76.8 49.4 101zM432 480a112 112 0 1 0 0-224 112 112 0 1 0 0 224m0-256a144 144 0 1 1 0 288 144 144 0 1 1 0-288m0 64c8.8 0 16 7.2 16 16v48h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16"
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
                  d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8h24v55.2c0 48.3 23 93.7 61.8 122.4l84.7 62.4-84.7 62.4C55 347 32 392.5 32 440.8V496H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h322.8c-6.9-4.9-13.5-10.2-19.6-16H48v-55.2c0-43.2 20.5-83.9 55.3-109.5l88.7-65.4 71.1 52.4c1.6-5.4 3.4-10.7 5.5-15.8L205.5 256l84.7-62.4C329 165 352 119.5 352 71.2V16h24c4.4 0 8-3.6 8-8s-3.6-8-8-8zm328 16v55.2c0 43.2-20.5 83.9-55.3 109.5L192 246.1l-88.7-65.3C68.5 155.1 48 114.4 48 71.2V16zm96 224a128 128 0 1 1 0 256 128 128 0 1 1 0-256m0 272a144 144 0 1 0 0-288 144 144 0 1 0 0 288m0-224c-4.4 0-8 3.6-8 8v72c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8s-3.6-8-8-8h-48v-64c0-4.4-3.6-8-8-8"
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
                  d="M32 0C14.3 0 0 14.3 0 32s14.3 32 32 32v11c0 42.4 16.9 83.1 46.9 113.1l67.8 67.9-67.8 67.9C48.9 353.9 32 394.6 32 437v11c-17.7 0-32 14.3-32 32s14.3 32 32 32h298.8a177 177 0 0 1-55.6-64H96v-11c0-25.5 10.1-49.9 28.1-67.9l67.9-67.8 64 64c.4-26.2 6.5-51.1 17.2-73.3l-36-36 67.9-67.9c30-30 46.9-70.7 46.9-113.1V64c17.7 0 32-14.3 32-32S369.7 0 352 0H32m64 75V64h192v11c0 25.5-10.1 49.9-28.1 67.9L192 210.7l-67.9-67.9C106.1 124.9 96 100.4 96 75"
                />
                <path
                  className="aps-icon-foreground"
                  d="M432 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288m16-208v48h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16s16 7.2 16 16"
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
