import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ScrewdriverIcon: React.FC<
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
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M465 7c-8.5-8.5-22-9.4-31.6-2.1l-104 80c-5.9 4.5-9.4 11.6-9.4 19V158l-85.6 85.6c6.7 4.2 13 9.3 18.8 15.1s10.9 12.2 15.1 18.8l85.6-85.5H408c7.5 0 14.5-3.5 19-9.4l80-104c7.4-9.6 6.5-23.1-2.1-31.6zM121.4 281.4l-112 112c-12.5 12.5-12.5 32.8 0 45.3l64 64c12.5 12.5 32.8 12.5 45.3 0l112-112c30.2-30.2 30.2-79.1 0-109.3s-79.1-30.2-109.3 0"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="m445.9 55.9 10.2 10.2-59.9 77.9H368v-28.2zM507 78.6c7.4-9.6 6.5-23.1-2.1-31.6L465 7c-8.5-8.5-22-9.4-31.6-2.1l-104 80c-5.9 4.5-9.4 11.6-9.4 19V158l-85.6 85.6c6.7 4.2 13 9.3 18.8 15.1s10.9 12.2 15.1 18.8l85.6-85.5H408c7.5 0 14.5-3.5 19-9.4zM155.3 315.3c11.4-11.4 29.9-11.4 41.4 0s11.4 29.9 0 41.4L96 457.4 54.6 416zm75.3-33.9c-30.2-30.2-79.1-30.2-109.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l64 64c12.5 12.5 32.8 12.5 45.3 0l112-112c30.2-30.2 30.2-79.1 0-109.3"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="m447.3 34.6 30.1 30.1-73.3 95.3H352v-52.1zM342.7 192H408c7.5 0 14.5-3.5 19-9.4l80-104c7.4-9.6 6.5-23.1-2.1-31.6L465 7c-8.5-8.5-22-9.4-31.6-2.1l-104 80c-5.9 4.5-9.4 11.6-9.4 19v65.3l-78.9 78.9c4.2 3.2 8.3 6.6 12.1 10.5s7.3 7.9 10.5 12.1zM208 304c17.7 17.7 17.7 46.3 0 64L96 480l-64-64 112-112c17.7-17.7 46.3-17.7 64 0m-86.6-22.6-112 112c-12.5 12.5-12.5 32.8 0 45.3l64 64c12.5 12.5 32.8 12.5 45.3 0l112-112c30.2-30.2 30.2-79.1 0-109.3s-79.1-30.2-109.3 0"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="m465 7 40 40c8.5 8.5 9.4 22 2.1 31.6l-80 104c-4.5 5.9-11.6 9.4-19 9.4h-76.8l-72.6 72.6c-1.7-2-3.6-4-5.5-5.9s-3.9-3.7-5.9-5.5l72.7-72.5V104c0-7.5 3.5-14.5 9.4-19l104-80c9.5-7.4 23-6.5 31.6 2M336 176h72c2.5 0 4.8-1.2 6.3-3.1l80-104c2.4-3.2 2.2-7.7-.7-10.5l-40-40c-2.8-2.8-7.4-3.1-10.5-.7l-104 80c-2 1.5-3.1 3.9-3.1 6.3v72M219.3 292.7c-23.9-23.9-62.7-23.9-86.6 0l-112 112c-6.2 6.2-6.2 16.4 0 22.6l64 64c6.2 6.2 16.4 6.2 22.6 0l112-112c23.9-23.9 23.9-62.7 0-86.6M9.4 438.6c-12.5-12.5-12.5-32.8 0-45.3l112-112c30.2-30.2 79.1-30.2 109.3 0s30.2 79.1 0 109.3l-112 112c-12.5 12.5-32.8 12.5-45.3 0z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M433.4 5c9.5-7.4 23-6.5 31.6 2l40 40c8.5 8.5 9.4 22 2.1 31.6l-80 104c-4.5 5.9-11.6 9.4-19 9.4h-54.2l-109 109c-3.6-7.1-8.4-13.7-14.3-19.7S218 270.6 210.9 267l109-109v-54c0-7.5 3.5-14.5 9.4-19l104-80z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M230.6 281.4c-30.2-30.2-79.1-30.2-109.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l64 64c12.5 12.5 32.8 12.5 45.3 0l112-112c30.2-30.2 30.2-79.1 0-109.3"
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
