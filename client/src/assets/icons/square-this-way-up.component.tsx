import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SquareThisWayUpIcon: React.FC<
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
                  d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm16 352h288c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16s7.2-16 16-16m185.4-192c-9.6 0-17.4-7.8-17.4-17.4 0-4.3 1.6-8.4 4.4-11.6l54.3-61c3.4-3.8 8.2-6 13.3-6s9.9 2.2 13.3 6l54.3 61.1c2.8 3.2 4.4 7.3 4.4 11.6 0 9.6-7.8 17.4-17.4 17.4H352V304c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16V192zm-192 0c-9.6 0-17.4-7.8-17.4-17.4 0-4.3 1.6-8.4 4.4-11.6l54.3-61c3.4-3.8 8.2-6 13.3-6s9.9 2.2 13.3 6l54.3 61.1c2.8 3.2 4.4 7.3 4.4 11.6 0 9.6-7.8 17.4-17.4 17.4H160V304c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16V192z"
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
                  d="M64 80c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm120 256h208c13.3 0 24 10.7 24 24s-10.7 24-24 24H120c-13.3 0-24-10.7-24-24s10.7-24 24-24m208-160v104c0 13.3-10.7 24-24 24s-24-10.7-24-24V192h-25.5c-8 0-14.5-6.5-14.5-14.5 0-3.5 1.3-7 3.7-9.6l42.5-47.9c4.5-5.1 11-8 17.8-8s13.2 2.9 17.8 8l42.6 47.9c2.4 2.7 3.7 6.1 3.7 9.6 0 8-6.5 14.5-14.5 14.5zM80 177.5c0-3.5 1.3-7 3.7-9.6l42.5-47.9c4.5-5.1 11-8 17.8-8s13.2 2.9 17.8 8l42.6 47.9c2.4 2.7 3.7 6.1 3.7 9.6 0 8-6.5 14.5-14.5 14.5H168v104c0 13.3-10.7 24-24 24s-24-10.7-24-24V192H94.5c-8 0-14.5-6.5-14.5-14.5"
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
                  d="M64 64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm112 272h224c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16m32-256c4.6 0 9 2 12 5.5l56 64c5.8 6.7 5.1 16.8-1.5 22.6s-16.8 5.1-22.6-1.5l-28-32V304c0 8.8-7.2 16-16 16s-16-7.2-16-16V170.6l-28 32c-5.8 6.7-15.9 7.3-22.6 1.5s-7.3-15.9-1.5-22.6l56-64c3-3.5 7.4-5.5 12-5.5zm160 0c4.6 0 9 2 12 5.5l56 64c5.8 6.7 5.1 16.8-1.5 22.6s-16.8 5.1-22.6-1.5l-28-32V304c0 8.8-7.2 16-16 16s-16-7.2-16-16V170.6l-28 32c-5.8 6.7-15.9 7.3-22.6 1.5s-7.3-15.9-1.5-22.6l56-64c3-3.5 7.4-5.5 12-5.5z"
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
                  d="M64 48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm104 288h240c4.4 0 8 3.6 8 8s-3.6 8-8 8H104c-4.4 0-8-3.6-8-8s3.6-8 8-8m18.3-261.7c3.1-3.1 8.2-3.1 11.3 0l64 64c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0L136 147.3V312c0 4.4-3.6 8-8 8s-8-3.6-8-8V147.3l-50.3 50.4c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l64-64zm192 0c3.1-3.1 8.2-3.1 11.3 0l64 64c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0L328 147.3V312c0 4.4-3.6 8-8 8s-8-3.6-8-8V147.3l-50.3 50.3c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l64-64z"
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
                  d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm16 352h288c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16s7.2-16 16-16m185.4-192c-9.6 0-17.4-7.8-17.4-17.4 0-4.3 1.6-8.4 4.4-11.6l54.3-61c3.4-3.8 8.2-6 13.3-6s9.9 2.2 13.3 6l54.3 61.1c2.8 3.2 4.4 7.3 4.4 11.6 0 9.6-7.8 17.4-17.4 17.4H352V304c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16V192zm-192 0c-9.6 0-17.4-7.8-17.4-17.4 0-4.3 1.6-8.4 4.4-11.6l54.3-61c3.4-3.8 8.2-6 13.3-6s9.9 2.2 13.3 6l54.3 61.1c2.8 3.2 4.4 7.3 4.4 11.6 0 9.6-7.8 17.4-17.4 17.4H160V304c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16V192z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M73.4 192c-9.6 0-17.4-7.8-17.4-17.4 0-4.3 1.6-8.4 4.4-11.6l54.3-61c3.4-3.8 8.2-6 13.3-6s9.9 2.2 13.3 6l54.3 61.1c2.8 3.2 4.4 7.3 4.4 11.6 0 9.6-7.8 17.4-17.4 17.4H160V304c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16V192zm278.6 0v112c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16V192h-22.6c-9.6 0-17.4-7.8-17.4-17.4 0-4.3 1.6-8.4 4.4-11.6l54.3-61c3.4-3.8 8.2-6 13.3-6s9.9 2.2 13.3 6l54.3 61.1c2.8 3.2 4.4 7.3 4.4 11.6 0 9.6-7.8 17.4-17.4 17.4H352z"
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
