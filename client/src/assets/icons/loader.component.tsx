import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const LoaderIcon: React.FC<
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
                  d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 17.7 14.3 32 32 32s32-14.3 32-32zm0 384c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 17.7 14.3 32 32 32s32-14.3 32-32zM0 256c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32m416-32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64c17.7 0 32-14.3 32-32s-14.3-32-32-32zM75 75c-12.5 12.5-12.5 32.8 0 45.3l45.3 45.3c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L120.2 75C107.7 62.5 87.5 62.5 75 75m316.8 271.5c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l45.3 45.2c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-45.3-45.3zM75 437c12.5 12.5 32.8 12.5 45.3 0l45.3-45.3c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L75 391.8c-12.5 12.5-12.5 32.8 0 45.3zm271.5-316.8c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l45.2-45.3c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-45.3 45.3z"
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
                  d="M280 24c0-13.3-10.7-24-24-24s-24 10.7-24 24v80c0 13.3 10.7 24 24 24s24-10.7 24-24zm0 384c0-13.3-10.7-24-24-24s-24 10.7-24 24v80c0 13.3 10.7 24 24 24s24-10.7 24-24zM0 256c0 13.3 10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H24c-13.3 0-24 10.7-24 24m408-24c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24zm29-157c-9.4-9.4-24.6-9.4-33.9 0l-56.6 56.6c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l56.6-56.6c9.4-9.4 9.4-24.6 0-33.9M165.5 380.4c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L75 403.1c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0zM75 75c-9.4 9.4-9.4 24.6 0 33.9l56.6 56.6c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L108.9 75c-9.4-9.4-24.6-9.4-33.9 0m305.5 271.5c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l56.5 56.6c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-56.6-56.6z"
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
                  d="M272 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V16c0-8.8 7.2-16 16-16s16 7.2 16 16m0 384v96c0 8.8-7.2 16-16 16s-16-7.2-16-16v-96c0-8.8 7.2-16 16-16s16 7.2 16 16M0 256c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16-7.2-16-16m400-16h96c8.8 0 16 7.2 16 16s-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16s7.2-16 16-16m37-165c6.2 6.2 6.2 16.4 0 22.6l-67.9 67.9c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L414.4 75c6.2-6.2 16.4-6.2 22.6 0M165.5 369.1 97.6 437c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l67.9-67.9c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6M75 75c6.2-6.2 16.4-6.2 22.6 0l67.9 67.9c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L75 97.6c-6.2-6.2-6.2-16.4 0-22.6m294.1 271.5 67.9 67.9c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-67.9-67.9c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0"
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
                  d="M264 8v88c0 4.4-3.6 8-8 8s-8-3.6-8-8V8c0-4.4 3.6-8 8-8s8 3.6 8 8m0 408v88c0 4.4-3.6 8-8 8s-8-3.6-8-8v-88c0-4.4 3.6-8 8-8s8 3.6 8 8M-8 256c0-4.4 3.6-8 8-8h96c4.4 0 8 3.6 8 8s-3.6 8-8 8H0c-4.4 0-8-3.6-8-8m424-8h88c4.4 0 8 3.6 8 8s-3.6 8-8 8h-88c-4.4 0-8-3.6-8-8s3.6-8 8-8m19.8-170.2c3.1 3.1 3.1 8.2 0 11.3l-62.2 62.2c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l62.2-62.2c3.1-3.1 8.2-3.1 11.3 0M147.3 377.6l-62.2 62.2c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l62.2-62.2c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3M68.2 72.2c3.1-3.1 8.2-3.1 11.3 0l67.8 67.8c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0L68.2 83.5c-3.1-3.1-3.1-8.2 0-11.3m305.4 294.1 62.2 62.2c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0l-62.2-62.2c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0"
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
                  d="M346.5 120.2c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l45.2-45.3c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-45.3 45.3zM384 256c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32s-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32M256 384c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32s32-14.3 32-32v-64c0-17.7-14.3-32-32-32m135.8-37.5c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l45.3 45.2c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-45.3-45.3zM75 437c12.5 12.5 32.8 12.5 45.3 0l45.3-45.3c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L75 391.8c-12.5 12.5-12.5 32.8 0 45.3z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M256 0c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32M0 256c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32M120.2 75C107.7 62.5 87.5 62.5 75 75s-12.5 32.8 0 45.3l45.3 45.3c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3z"
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
