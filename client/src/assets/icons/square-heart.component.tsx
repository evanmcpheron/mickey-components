import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SquareHeartIcon: React.FC<
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
                  d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm35.9 248.9c-29.4-29.8-29.4-78.2 0-108s77-29.8 106.4 0l17.7 18 17.7-18c29.4-29.8 77-29.8 106.4 0s29.4 78.2 0 108L246.5 384.1c-6.2 6.3-14.3 9.4-22.5 9.4s-16.3-3.1-22.5-9.4z"
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
                  d="M64 80c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm335.7 169.6-91.5 92.9c-5.6 5.7-13 8.5-20.3 8.5s-14.6-2.9-20.1-8.5l-91.5-92.9c-26.4-26.8-26.4-70.4 0-97.2s69.3-26.8 95.8 0l16 16.2 16-16.2c26.4-26.8 69.3-26.8 95.8 0s26.4 70.4 0 97.2z"
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
                  d="M64 64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm99.9 68.9c27.8-28.2 71.9-29.7 101.5-4.6 5.8 4.9 11 10.4 16.3 15.9 2.1 2.2 4.2 4.5 6.4 6.6 2.1-2.2 4.3-4.4 6.4-6.6 5.2-5.5 10.5-11 16.3-15.9 29.6-25.1 73.7-23.6 101.5 4.6 29.4 29.8 29.4 78.2 0 108L246.5 376.1c-6.2 6.3-14.3 9.4-22.5 9.4s-16.3-3.1-22.5-9.4L99.9 272.9c-29.4-29.8-29.4-78.2 0-108m83.6 22.5c-16.8-17.1-44-17.1-60.8 0-17.1 17.4-17.1 45.7 0 63.1L224 353.3l101.3-102.9c17.1-17.4 17.1-45.7 0-63.1-16.8-17.1-44-17.1-60.8 0l-29.1 29.6c-6.3 6.4-16.5 6.4-22.8 0l-29.1-29.6z"
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
                  d="M64 48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm224 78.9 17.7-18c29.4-29.8 77-29.8 106.4 0s29.4 78.2 0 108L246.5 368.1c-6.2 6.3-14.3 9.4-22.5 9.4s-16.3-3.1-22.5-9.4L99.9 264.9c-29.4-29.8-29.4-78.2 0-108s77-29.8 106.4 0zm5.7 17c-3.1 3.2-8.3 3.2-11.4 0l-23.4-23.8c-23.1-23.5-60.5-23.5-83.6 0-23.2 23.6-23.2 61.9 0 85.5l101.6 103.3c3.1 3.1 7.1 4.7 11.1 4.7s8-1.5 11.1-4.7l101.6-103.2c23.2-23.6 23.2-61.9 0-85.5-23.1-23.5-60.5-23.5-83.6 0L229.7 192z"
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
                  d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm35.9 248.9c-29.4-29.8-29.4-78.2 0-108s77-29.8 106.4 0l17.7 18 17.7-18c29.4-29.8 77-29.8 106.4 0s29.4 78.2 0 108L246.5 384.1c-6.2 6.3-14.3 9.4-22.5 9.4s-16.3-3.1-22.5-9.4z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M99.9 172.9c-29.4 29.8-29.4 78.2 0 108l101.6 103.2c6.2 6.3 14.3 9.4 22.5 9.4s16.3-3.1 22.5-9.4l101.6-103.2c29.4-29.8 29.4-78.2 0-108s-77-29.8-106.4 0l-17.7 18-17.7-18c-29.4-29.8-77-29.8-106.4 0"
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
