import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SquareFragileIcon: React.FC<
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
                  d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm64 86.3C128 106 138 96 150.3 96H176l32 64-32 32 80 64-32-64 48-32-32-64h57.7c12.3 0 22.3 10 22.3 22.3V208c0 47.6-34.6 87.1-80 94.7V384h48c8.8 0 16 7.2 16 16s-7.2 16-16 16H160c-8.8 0-16-7.2-16-16s7.2-16 16-16h48v-81.3c-45.4-7.6-80-47.1-80-94.7z"
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
                  d="M64 80c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm128 38.3c0-12.3 10-22.3 22.3-22.3H176l32 64-32 32 80 64-32-64 48-32-32-64h57.7c12.3 0 22.3 10 22.3 22.3V224c0 47.6-34.6 87.1-80 94.7V368h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16s7.2-16 16-16h32v-49.3c-45.4-7.6-80-47.1-80-94.7z"
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
                  d="M64 64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm144 32v80c0 44.2 35.8 80 80 80s80-35.8 80-80v-80h-73.4l20.7 20.7c3.4 3.4 5.1 8.1 4.6 12.9s-3.1 9.1-7 11.7l-30.2 20.1 31.5 26.3c6.8 5.7 7.7 15.7 2 22.5s-15.7 7.7-22.5 2l-48-40c-3.9-3.2-6-8.1-5.7-13.1s2.9-9.7 7.1-12.5l31.8-21.2-29.5-29.4zm-1.1-32h162.2c17.1 0 30.9 13.8 30.9 30.9V208c0 56.4-41.7 103.1-96 110.9V384h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16s7.2-16 16-16h32v-65.1c-54.3-7.8-96-54.4-96-110.9v-81.1c0-17.1 13.8-30.9 30.9-30.9"
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
                  d="M64 48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm305.1 16h-85.8l34.3 34.3c1.7 1.7 2.5 4.1 2.3 6.4s-1.5 4.5-3.5 5.9l-39.1 26.1 39.8 33.1c3.4 2.8 3.9 7.9 1 11.3s-7.9 3.9-11.3 1l-48-40c-1.9-1.6-3-4.1-2.9-6.6s1.5-4.8 3.6-6.2l39.9-26.6-38.7-38.7h-53.8c-8.2 0-14.9 6.7-14.9 14.9V208c0 53 43 96 96 96s96-43 96-96v-81.1c0-8.2-6.7-14.9-14.9-14.9M142.9 96h162.2c17.1 0 30.9 13.8 30.9 30.9V208c0 59.2-45.9 107.6-104 111.7V400h48c4.4 0 8 3.6 8 8s-3.6 8-8 8H168c-4.4 0-8-3.6-8-8s3.6-8 8-8h48v-80.3c-58.1-4.1-104-52.6-104-111.7v-81.1c0-17.1 13.8-30.9 30.9-30.9"
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
                  d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm86.3 64h147.4c12.3 0 22.3 10 22.3 22.3V208c0 47.6-34.6 87.1-80 94.7V384h48c8.8 0 16 7.2 16 16s-7.2 16-16 16H160c-8.8 0-16-7.2-16-16s7.2-16 16-16h48v-81.3c-45.4-7.6-80-47.1-80-94.7v-89.7C128 106 138 96 150.3 96"
                />
                <path
                  className="aps-icon-foreground"
                  d="M150.3 96C138 96 128 106 128 118.3V208c0 47.6 34.6 87.1 80 94.7V384h-48c-8.8 0-16 7.2-16 16s7.2 16 16 16h128c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48v-81.3c45.4-7.6 80-47.1 80-94.7v-89.7C320 106 310 96 297.7 96H240l32 64-48 32 32 64-80-64 32-32-32-64z"
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
