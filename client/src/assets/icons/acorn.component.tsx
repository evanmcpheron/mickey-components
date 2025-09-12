import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const AcornIcon: React.FC<
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
                  d="M262.4 4.8c10.6 8 12.8 23 4.8 33.6l-4.8 6.4c-4.4 5.9-7.9 12.4-10.3 19.2H352c53 0 96 43 96 96 0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32 0-53 43-96 96-96h106.4c3.6-17.3 10.9-33.7 21.6-48l4.8-6.4c8-10.6 23-12.8 33.6-4.8m-48.5 471.6C78.5 425.9 48 302.1 48 224h352c0 78.1-30.5 201.9-165.9 252.4-6.5 2.4-13.7 2.4-20.2 0"
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
                  d="M267.2 38.4c8-10.6 5.8-25.6-4.8-33.6S236.8-1 228.8 9.6L224 16c-10.7 14.3-18 30.7-21.6 48H96c-53 0-96 43-96 96v16c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32v-16c0-53-43-96-96-96h-99.9c2.4-6.8 5.9-13.3 10.3-19.2zM400 160H48c0-26.5 21.5-48 48-48h256c26.5 0 48 21.5 48 48M48.4 240c4.1 78.1 39 189.3 165.5 236.4 6.5 2.4 13.7 2.4 20.2 0C360.6 429.3 395.5 318.1 399.6 240h-48.1c-3.9 65.7-32.7 150.2-127.5 188.9C129.2 390.2 100.3 305.7 96.5 240z"
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
                  d="M267.3 27.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-3.9 3.9c-15.3 15.3-25.7 34.6-30.3 55.4H96c-53 0-96 43-96 96v16c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32v-16c0-53-43-96-96-96H243.6c3.8-12.3 10.6-23.6 19.8-32.8zM352 96c35.3 0 64 28.7 64 64v16H32v-16c0-35.3 28.7-64 64-64zM48.4 240c4.1 78.1 39 189.3 165.5 236.4 6.5 2.4 13.7 2.4 20.2 0C360.6 429.3 395.5 318.1 399.6 240h-32c-4 70.6-35.5 165.2-143.5 206C116 405.2 84.4 310.6 80.5 240h-32z"
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
                  d="M261.7 13.7c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0l-9.4 9.3c-14.1 14.1-22.8 32.6-24.6 52.3H96c-53 0-96 43-96 96v16c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32v-16c0-53-43-96-96-96H232.5c1.8-15.4 8.7-29.9 19.8-41l9.4-9.4zM352 80c44.2 0 80 35.8 80 80v16c0 8.8-7.2 16-16 16H32c-8.8 0-16-7.2-16-16v-16c0-44.2 35.8-80 80-80zM48.4 240c4.1 78.1 39 189.3 165.5 236.4 6.5 2.4 13.7 2.4 20.2 0C360.6 429.3 395.5 318.1 399.6 240h-16c-4 74.5-37.4 177.6-155.1 221.4-2.9 1.1-6.1 1.1-9 0C101.8 417.5 68.5 314.5 64.4 240z"
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
                  d="M400 192H48v32c0 78.1 30.5 201.9 165.9 252.4 6.5 2.4 13.7 2.4 20.2 0C369.5 425.9 400 302.1 400 224z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M267.2 38.4c8-10.6 5.8-25.6-4.8-33.6S236.8-1 228.8 9.6L224 16c-10.7 14.3-18 30.7-21.6 48H96c-53 0-96 43-96 96 0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32 0-53-43-96-96-96h-99.9c2.4-6.8 5.9-13.3 10.3-19.2z"
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
