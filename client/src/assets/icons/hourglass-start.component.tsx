import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const HourglassStartIcon: React.FC<
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
                  d="M32 0C14.3 0 0 14.3 0 32s14.3 32 32 32v11c0 42.4 16.9 83.1 46.9 113.1l67.8 67.9-67.8 67.9C48.9 353.9 32 394.6 32 437v11c-17.7 0-32 14.3-32 32s14.3 32 32 32h320c17.7 0 32-14.3 32-32s-14.3-32-32-32v-11c0-42.4-16.9-83.1-46.9-113.1L237.3 256l67.9-67.9c30-30 46.9-70.7 46.9-113.1V64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32m256 437v11H96v-11c0-25.5 10.1-49.9 28.1-67.9l67.9-67.8 67.9 67.9c18 18 28.1 42.4 28.1 67.9z"
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
                  d="M0 488c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8v-19c0-40.3-16-79-44.5-107.5L225.9 256l81.5-81.5C336 146 352 107.3 352 67V48h8c13.3 0 24-10.7 24-24S373.3 0 360 0H24C10.7 0 0 10.7 0 24s10.7 24 24 24h8v19c0 40.3 16 79 44.5 107.5l81.6 81.5-81.6 81.5C48 366 32 404.7 32 445v19h-8c-13.3 0-24 10.7-24 24M84.1 96C81.4 86.7 80 76.9 80 67V48h224v19c0 9.9-1.4 19.7-4.1 29zm189.4 275.5C293 391 304 417.4 304 445v19H80v-19c0-27.6 11-54 30.5-73.5l81.5-81.6 81.5 81.5z"
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
                  d="M0 496c0 8.8 7.2 16 16 16h352c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16v-41.6c0-49.4-22.8-96-61.8-126.3L218.1 256l72.2-56.1c39-30.3 61.8-76.9 61.8-126.3V32h16c8.8 0 16-7.2 16-16s-7.2-16-16-16H16C7.2 0 0 7.2 0 16s7.2 16 16 16h16v41.6c0 49.4 22.8 96 61.8 126.3l72.1 56.1-72.1 56.1c-39 30.3-61.8 77-61.8 126.3V480H16c-8.8 0-16 7.2-16 16m64-16v-41.6c0-39.5 18.2-76.8 49.4-101l78.6-61.1 78.6 61.1c31.2 24.2 49.4 61.5 49.4 101V480zm49.4-305.4C97.3 162.1 84.6 146 76.1 128h231.8c-8.5 18-21.1 34.1-37.3 46.6L192 235.7zM66 96c-1.3-7.3-2-14.8-2-22.4V32h256v41.6c0 7.6-.7 15.1-2 22.4z"
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
                  d="M0 8c0-4.4 3.6-8 8-8h368c4.4 0 8 3.6 8 8s-3.6 8-8 8h-24v55.2c0 48.3-23 93.7-61.8 122.4L205.5 256l84.7 62.4C329 347 352 392.5 352 440.8V496h24c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h24v-55.2c0-48.3 23-93.7 61.8-122.4l84.7-62.4-84.7-62.4C55 165 32 119.5 32 71.2V16H8c-4.4 0-8-3.6-8-8m48 8v48h288V16zm.3 64c2.6 39.9 22.6 76.8 55 100.7l88.7 65.4 88.7-65.3c32.4-23.9 52.5-60.8 55-100.7H48.3zm55 251.3C68.5 356.9 48 397.6 48 440.8V496h288v-55.2c0-43.2-20.5-83.9-55.3-109.5L192 265.9l-88.7 65.3z"
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
                  d="M32 64v11c0 42.4 16.9 83.1 46.9 113.1l67.8 67.9-67.8 67.9C48.9 353.9 32 394.6 32 437v11h64v-11c0-25.5 10.1-49.9 28.1-67.9l67.9-67.8 67.9 67.9c18 18 28.1 42.4 28.1 67.9v11h64V437c0-42.4-16.9-83.1-46.9-113.1L237.3 256l67.9-67.9c30-30 46.9-70.7 46.9-113.1V64H32"
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
