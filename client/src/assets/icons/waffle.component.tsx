import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const WaffleIcon: React.FC<
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
                  d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0M160 80c-8.8 0-16 7.2-16 16v48H96c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v64H64c-8.8 0-16 7.2-16 16s7.2 16 16 16h80v64H96c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h64v80c0 8.8 7.2 16 16 16s16-7.2 16-16v-80h64v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48v-64h80c8.8 0 16-7.2 16-16s-7.2-16-16-16h-80v-64h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48V96c0-8.8-7.2-16-16-16s-16 7.2-16 16v48h-64V64c0-8.8-7.2-16-16-16s-16 7.2-16 16v80h-64V96c0-8.8-7.2-16-16-16m16 256v-64h64v64zm96 0v-64h64v64zm64-160v64h-64v-64zm-96 0v64h-64v-64z"
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
                  d="M464 256a208 208 0 1 0-416 0 208 208 0 1 0 416 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m176-144v32h64v-32c0-8.8 7.2-16 16-16s16 7.2 16 16v32h64v-32c0-8.8 7.2-16 16-16s16 7.2 16 16v32h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32v64h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32v64h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32v32c0 8.8-7.2 16-16 16s-16-7.2-16-16v-32h-64v32c0 8.8-7.2 16-16 16s-16-7.2-16-16v-32h-64v32c0 8.8-7.2 16-16 16s-16-7.2-16-16v-32h-32c-8.8 0-16-7.2-16-16s7.2-16 16-16h32v-64h-32c-8.8 0-16-7.2-16-16s7.2-16 16-16h32v-64h-32c-8.8 0-16-7.2-16-16s7.2-16 16-16h32v-32c0-8.8 7.2-16 16-16s16 7.2 16 16m0 128h64v-64h-64zm96 0h64v-64h-64zm0 32v64h64v-64zm-32 0h-64v64h64z"
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
                  d="M480 256a224 224 0 1 0-448 0 224 224 0 1 0 448 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0M272 80v64h64v-32c0-8.8 7.2-16 16-16s16 7.2 16 16v32h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32v64h64c8.8 0 16 7.2 16 16s-7.2 16-16 16h-64v64h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32v32c0 8.8-7.2 16-16 16s-16-7.2-16-16v-32h-64v64c0 8.8-7.2 16-16 16s-16-7.2-16-16v-64h-64v32c0 8.8-7.2 16-16 16s-16-7.2-16-16v-32h-32c-8.8 0-16-7.2-16-16s7.2-16 16-16h32v-64H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h64v-64h-32c-8.8 0-16-7.2-16-16s7.2-16 16-16h32v-32c0-8.8 7.2-16 16-16s16 7.2 16 16v32h64V80c0-8.8 7.2-16 16-16s16 7.2 16 16m-96 96v64h64v-64zm0 96v64h64v-64zm96 0v64h64v-64zm0-32h64v-64h-64z"
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
                  d="M496 256a240 240 0 1 0-480 0 240 240 0 1 0 480 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0M264 72v80h80v-48c0-4.4 3.6-8 8-8s8 3.6 8 8v48h48c4.4 0 8 3.6 8 8s-3.6 8-8 8h-48v80h80c4.4 0 8 3.6 8 8s-3.6 8-8 8h-80v80h48c4.4 0 8 3.6 8 8s-3.6 8-8 8h-48v48c0 4.4-3.6 8-8 8s-8-3.6-8-8v-48h-80v80c0 4.4-3.6 8-8 8s-8-3.6-8-8v-80h-80v48c0 4.4-3.6 8-8 8s-8-3.6-8-8v-48h-48c-4.4 0-8-3.6-8-8s3.6-8 8-8h48v-80H72c-4.4 0-8-3.6-8-8s3.6-8 8-8h80v-80h-48c-4.4 0-8-3.6-8-8s3.6-8 8-8h48v-48c0-4.4 3.6-8 8-8s8 3.6 8 8v48h80V72c0-4.4 3.6-8 8-8s8 3.6 8 8m-96 96v80h80v-80zm0 96v80h80v-80zm96 0v80h80v-80zm0-16h80v-80h-80z"
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
                  d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0M160 80c-8.8 0-16 7.2-16 16v48H96c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v64H64c-8.8 0-16 7.2-16 16s7.2 16 16 16h80v64H96c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h64v80c0 8.8 7.2 16 16 16s16-7.2 16-16v-80h64v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48v-64h80c8.8 0 16-7.2 16-16s-7.2-16-16-16h-80v-64h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48V96c0-8.8-7.2-16-16-16s-16 7.2-16 16v48h-64V64c0-8.8-7.2-16-16-16s-16 7.2-16 16v80h-64V96c0-8.8-7.2-16-16-16m16 256v-64h64v64zm96 0v-64h64v64zm64-160v64h-64v-64zm-96 0v64h-64v-64z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M272 64c0-8.8-7.2-16-16-16s-16 7.2-16 16v80h-64V96c0-8.8-7.2-16-16-16s-16 7.2-16 16v48H96c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v64H64c-8.8 0-16 7.2-16 16s7.2 16 16 16h80v64H96c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h64v80c0 8.8 7.2 16 16 16s16-7.2 16-16v-80h64v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48v-64h80c8.8 0 16-7.2 16-16s-7.2-16-16-16h-80v-64h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48V96c0-8.8-7.2-16-16-16s-16 7.2-16 16v48h-64zm64 272h-64v-64h64zm-96 0h-64v-64h64zm0-96h-64v-64h64zm96 0h-64v-64h64z"
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
