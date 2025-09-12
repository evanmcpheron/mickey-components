import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const GameBoardIcon: React.FC<
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
                  d="M0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm144 0v80h80V96zm0 160v-80H64v80zm80 0h-80v80H64v80h80v-80h80v80h80v-80h80v-80h-80v-80h80V96h-80v80h-80zm0 0h80v80h-80z"
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
                  d="M384 80c8.8 0 16 7.2 16 16v320c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16zM64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm240 64h-80v80h-80V96H64v80h80v80H64v80h80v80h80v-80h80v80h80v-80h-80v-80h80v-80h-80zm-80 160v80h-80v-80zm0 0v-80h80v80z"
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
                  d="M64 64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm144 16v32h64v-32c0-8.8 7.2-16 16-16s16 7.2 16 16v32h64v-32c0-8.8 7.2-16 16-16s16 7.2 16 16v32h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32v64h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32v64h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32v32c0 8.8-7.2 16-16 16s-16-7.2-16-16v-32h-64v32c0 8.8-7.2 16-16 16s-16-7.2-16-16v-32h-64v32c0 8.8-7.2 16-16 16s-16-7.2-16-16v-32H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h32v-64H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h32v-64H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h32v-32c0-8.8 7.2-16 16-16s16 7.2 16 16m0 128h64v-64h-64zm96 0h64v-64h-64zm0 32v64h64v-64zm-32 0h-64v64h64z"
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
                  d="M64 48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm136 0v56h80V96c0-4.4 3.6-8 8-8s8 3.6 8 8v56h80V96c0-4.4 3.6-8 8-8s8 3.6 8 8v56h56c4.4 0 8 3.6 8 8s-3.6 8-8 8h-56v80h56c4.4 0 8 3.6 8 8s-3.6 8-8 8h-56v80h56c4.4 0 8 3.6 8 8s-3.6 8-8 8h-56v56c0 4.4-3.6 8-8 8s-8-3.6-8-8v-56h-80v56c0 4.4-3.6 8-8 8s-8-3.6-8-8v-56h-80v56c0 4.4-3.6 8-8 8s-8-3.6-8-8v-56H64c-4.4 0-8-3.6-8-8s3.6-8 8-8h56v-80H64c-4.4 0-8-3.6-8-8s3.6-8 8-8h56v-80H64c-4.4 0-8-3.6-8-8s3.6-8 8-8h56V96c0-4.4 3.6-8 8-8s8 3.6 8 8m0 152h80v-80h-80zm96 0h80v-80h-80zm0 16v80h80v-80zm-16 0h-80v80h80z"
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
                  d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm320 64v320H64V96z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M64 256v80h80v-80zm320 160v-80h-80v80zm-240 0h80v-80h-80zM64 96v80h80V96zm160 80h-80v80h80zm0 80v80h80v-80zm160 0v-80h-80v80zM304 96h-80v80h80z"
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
