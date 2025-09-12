import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ChalkboardUserIcon: React.FC<
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
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M160 64c0-35.3 28.7-64 64-64h352c35.3 0 64 28.7 64 64v288c0 35.3-28.7 64-64 64H336.8c-11.8-25.5-29.9-47.5-52.4-64H384v-32c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v32h64V64H224v49.1C205.2 102.2 183.3 96 160 96zm0 64a96 96 0 1 1 0 192 96 96 0 1 1 0-192m-26.7 224h53.3c73.7 0 133.4 59.7 133.4 133.3 0 14.7-11.9 26.7-26.7 26.7H26.7C11.9 512 0 500.1 0 485.3 0 411.7 59.7 352 133.3 352"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M576 48H224c-8.8 0-16 7.2-16 16v41.3c-14.8-6-31-9.3-48-9.3V64c0-35.3 28.7-64 64-64h352c35.3 0 64 28.7 64 64v288c0 35.3-28.7 64-64 64H336.8c-8.3-18-19.8-34.2-33.7-48H368v-40c0-30.9 25.1-56 56-56h64c30.9 0 56 25.1 56 56v40h32c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16m-80 320v-40c0-4.4-3.6-8-8-8h-64c-4.4 0-8 3.6-8 8v40zM208 224a48 48 0 1 0-96 0 48 48 0 1 0 96 0m-144 0a96 96 0 1 1 192 0 96 96 0 1 1-192 0M50.7 464h218.6c-9.5-36.8-42.9-64-82.6-64h-53.4c-39.8 0-73.2 27.2-82.6 64M0 485.3C0 411.7 59.7 352 133.3 352h53.3c73.7 0 133.4 59.7 133.4 133.3 0 14.7-11.9 26.7-26.7 26.7H26.7C11.9 512 0 500.1 0 485.3"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M576 32H224c-17.7 0-32 14.3-32 32v36c-10.2-2.6-21-4-32-4V64c0-35.3 28.7-64 64-64h352c35.3 0 64 28.7 64 64v288c0 35.3-28.7 64-64 64H336.8c-5.3-11.4-11.8-22.2-19.5-32H384v-48c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v48c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32m-32 352v-48c0-8.8-7.2-16-16-16h-96c-8.8 0-16 7.2-16 16v48zM224 224a64 64 0 1 0-128 0 64 64 0 1 0 128 0m-160 0a96 96 0 1 1 192 0 96 96 0 1 1-192 0M32.1 480h255.8c-2.8-53.5-47-96-101.2-96h-53.4c-54.2 0-98.4 42.5-101.2 96M0 485.3C0 411.7 59.7 352 133.3 352h53.3c73.7 0 133.4 59.7 133.4 133.3 0 14.7-11.9 26.7-26.7 26.7H26.7C11.9 512 0 500.1 0 485.3"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M576 16H224c-26.5 0-48 21.5-48 48v33c-5.2-.7-10.6-1-16-1V64c0-35.3 28.7-64 64-64h352c35.3 0 64 28.7 64 64v288c0 35.3-28.7 64-64 64H336.8c-2.5-5.5-5.4-10.8-8.5-16H384v-40c0-22.1 17.9-40 40-40h80c22.1 0 40 17.9 40 40v40h32c26.5 0 48-21.5 48-48V64c0-26.5-21.5-48-48-48m-48 384v-40c0-13.3-10.7-24-24-24h-80c-13.3 0-24 10.7-24 24v40zM240 224a80 80 0 1 0-160 0 80 80 0 1 0 160 0m-176 0a96 96 0 1 1 192 0 96 96 0 1 1-192 0M16 485.3c0 5.9 4.8 10.7 10.7 10.7h266.6c5.9 0 10.7-4.8 10.7-10.7 0-64.8-52.5-117.3-117.3-117.3h-53.4C68.5 368 16 420.5 16 485.3m-16 0C0 411.7 59.7 352 133.3 352h53.3c73.7 0 133.4 59.7 133.4 133.3 0 14.7-11.9 26.7-26.7 26.7H26.7C11.9 512 0 500.1 0 485.3"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M224 0c-35.3 0-64 28.7-64 64v32c23.3 0 45.2 6.2 64 17.1V64h352v288H284.4c22.4 16.5 40.6 38.5 52.4 64H576c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M64 224a96 96 0 1 1 192 0 96 96 0 1 1-192 0M0 485.3C0 411.7 59.7 352 133.3 352h53.3c73.7 0 133.4 59.7 133.4 133.3 0 14.7-11.9 26.7-26.7 26.7H26.7C11.9 512 0 500.1 0 485.3M416 288h64c17.7 0 32 14.3 32 32v32H384v-32c0-17.7 14.3-32 32-32"
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
