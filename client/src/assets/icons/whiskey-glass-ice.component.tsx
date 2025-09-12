import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const WhiskeyGlassIceIcon: React.FC<
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
                  d="M32 32c-9.3 0-18.1 4-24.2 11.1S-1 59.4.3 68.6l50 342.9C56 450.8 89.7 480 129.5 480h253c39.7 0 73.4-29.1 79.2-68.5l50-342.9c1.3-9.2-1.4-18.5-7.5-25.5S489.3 32 480 32zm385 251.7c9.6 9.6 15 22.7 15 36.3s-5.4 26.7-15 36.3L356.3 417c-9.6 9.6-22.7 15-36.3 15s-26.7-5.4-36.3-15l-49-49H160c-35.3 0-64-28.7-64-64v-22.9L69 96h374l-27.2 186.5zM160 208c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h50.6a50.6 50.6 0 0 1-2.6-16c0-13.6 5.4-26.7 15-36.3l33-33V240c0-17.7-14.3-32-32-32zm85.7 98.3c-3.7 3.7-5.7 8.6-5.7 13.7s2 10 5.7 13.7l60.7 60.7c3.6 3.6 8.5 5.7 13.7 5.7s10-2 13.7-5.7l60.7-60.7c3.6-3.6 5.7-8.5 5.7-13.7s-2-10-5.7-13.7l-60.7-60.7c-3.8-3.6-8.7-5.6-13.8-5.6s-10 2-13.7 5.7l-60.7 60.7z"
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
                  d="M50.5 80h411l-47.3 324.6c-2.3 15.7-15.8 27.4-31.7 27.4h-253c-15.9 0-29.4-11.7-31.7-27.4zM32 32c-9.3 0-18.1 4-24.2 11.1S-1 59.4.3 68.6l50 342.9C56 450.8 89.7 480 129.5 480h253c39.7 0 73.4-29.1 79.2-68.5l50-342.9c1.3-9.2-1.4-18.5-7.5-25.5S489.3 32 480 32zm223.4 147.3.6-.6c-5-1.8-10.4-2.7-16-2.7h-96c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h73.8l-19-19c-8.5-8.5-14.7-18.4-18.6-29H144v-96h66.7zm56.6 56.6 56.6 56.6L312 349l-56.6-56.6zM278.1 202l-56.6 56.6c-18.7 18.7-18.7 49.1 0 67.9l56.6 56.5c18.7 18.7 49.1 18.7 67.9 0l56.6-56.6c18.7-18.7 18.7-49.1 0-67.9L346 201.9c-18.7-18.7-49.1-18.7-67.9 0z"
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
                  d="m480 64-50 342.9c-3.4 23.6-23.7 41.1-47.5 41.1h-253c-23.8 0-44.1-17.5-47.5-41.1L32 64zM32 32c-9.3 0-18.1 4-24.2 11.1S-1 59.4.3 68.6l50 342.9C56 450.8 89.7 480 129.5 480h253c39.7 0 73.4-29.1 79.2-68.5l50-342.9c1.3-9.2-1.4-18.5-7.5-25.5S489.3 32 480 32zm223.4 163.3.6-.6c-5-1.8-10.4-2.7-16-2.7h-96c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h73.8l-19-19c-4-4-7.6-8.4-10.6-13H144c-8.8 0-16-7.2-16-16v-96c0-8.8 7.2-16 16-16h82.7zm67.9 45.3 56.6 56.6c6.2 6.2 6.2 16.4 0 22.6l-56.6 56.6c-6.2 6.2-16.4 6.2-22.6 0l-56.6-56.6c-6.2-6.2-6.2-16.4 0-22.6l56.6-56.6c6.2-6.2 16.4-6.2 22.6 0M278 218l-56.6 56.6c-18.7 18.7-18.7 49.1 0 67.9l56.7 56.5c18.7 18.7 49.1 18.7 67.9 0l56.6-56.6c18.7-18.7 18.7-49.1 0-67.9L346 217.9c-18.7-18.7-49.1-18.7-67.9 0z"
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
                  d="M32 48h448c4.6 0 9.1 2 12.1 5.5s4.4 8.2 3.7 12.8l-50 342.9c-4.6 31.4-31.6 54.8-63.3 54.8h-253c-31.8 0-58.7-23.3-63.3-54.8l-50-342.9c-.7-4.6.7-9.3 3.7-12.8S27.4 48 32 48m0-16c-9.3 0-18.1 4-24.2 11.1S-1 59.4.3 68.6l50 342.9C56 450.8 89.7 480 129.5 480h253c39.7 0 73.4-29.1 79.2-68.5l50-342.9c1.3-9.2-1.4-18.5-7.5-25.5S489.3 32 480 32zm223.4 163.3.6-.6c-5-1.8-10.4-2.7-16-2.7h-96c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h73.8l-16-16H144c-17.7 0-32-14.3-32-32v-96c0-17.7 14.3-32 32-32h96c.9 0 1.8 0 2.6.1zm79.2 33.9 56.6 56.6c12.5 12.5 12.5 32.8 0 45.3l-56.6 56.6c-12.5 12.5-32.8 12.5-45.3 0l-56.6-56.6c-12.5-12.5-12.5-32.8 0-45.3l56.6-56.6c12.5-12.5 32.8-12.5 45.3 0M278 217.9l-56.6 56.6c-18.7 18.7-18.7 49.1 0 67.9l56.7 56.6c18.7 18.7 49.1 18.7 67.9 0l56.6-56.6c18.7-18.7 18.7-49.1 0-67.9L346 217.9c-18.7-18.7-49.1-18.7-67.9 0z"
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
                  d="M7.8 43.1C13.9 36 22.7 32 32 32h448c9.3 0 18.1 4 24.2 11.1s8.8 16.4 7.5 25.5l-50 342.9c-5.7 39.3-39.4 68.5-79.2 68.5h-253c-39.7 0-73.4-29.1-79.2-68.5L.3 68.6C-1 59.4 1.7 50.1 7.8 43.1M69 96l44.7 306.3c1.1 7.9 7.9 13.7 15.8 13.7h253c7.9 0 14.7-5.8 15.8-13.7L443 96z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M83 192h346l-30.7 210.3c-1.1 7.9-7.9 13.7-15.8 13.7h-253c-7.9 0-14.7-5.8-15.8-13.7zm93 32c-17.7 0-32 14.3-32 32v48c0 17.7 14.3 32 32 32h48c3.4 0 6.6-.5 9.7-1.5-1.1-4.4-1.7-9-1.7-13.7v-1.7c0-14.9 5.9-29.1 16.4-39.6l7.6-7.5v-16c0-17.7-14.3-32-32-32zm89.4 72.5c-6 6-9.4 14.1-9.4 22.6v1.7c0 8.5 3.4 16.6 9.4 22.6l31.2 31.2c6 6 14.1 9.4 22.6 9.4h1.7c8.5 0 16.6-3.4 22.6-9.4l31.2-31.2c6-6 9.4-14.1 9.4-22.6v-1.7c0-8.5-3.4-16.6-9.4-22.6l-31.2-31.2c-6-6-14.1-9.4-22.6-9.4h-1.7c-8.5 0-16.6 3.4-22.6 9.4z"
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
