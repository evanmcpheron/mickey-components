import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const VectorSquareIcon: React.FC<
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
                  d="M368 80h32v32h-32zm-16-48c-17.7 0-32 14.3-32 32H128c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64v64c0 17.7 14.3 32 32 32v192c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32h192c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32V160c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32zM96 160c17.7 0 32-14.3 32-32h192c0 17.7 14.3 32 32 32v192c-17.7 0-32 14.3-32 32H128c0-17.7-14.3-32-32-32zM48 400h32v32H48zm320 32v-32h32v32zM48 112V80h32v32z"
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
                  d="M360 72h48v48h-48zm-8-40c-17.7 0-32 14.3-32 32v8H128v-8c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64v64c0 17.7 14.3 32 32 32h8v192h-8c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32v-8h192v8c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32h-8V160h8c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32zM88 352V160h8c17.7 0 32-14.3 32-32v-8h192v8c0 17.7 14.3 32 32 32h8v192h-8c-17.7 0-32 14.3-32 32v8H128v-8c0-17.7-14.3-32-32-32zm-48 88v-48h48v48zm320 0v-48h48v48zM40 120V72h48v48z"
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
                  d="M408 64c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V72c0-4.4 3.6-8 8-8zm-48-32c-22.1 0-40 17.9-40 40v8H128v-8c0-22.1-17.9-40-40-40H40C17.9 32 0 49.9 0 72v48c0 22.1 17.9 40 40 40h8v192h-8c-22.1 0-40 17.9-40 40v48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40v-8h192v8c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40v-48c0-22.1-17.9-40-40-40h-8V160h8c22.1 0 40-17.9 40-40V72c0-22.1-17.9-40-40-40zM80 352V160h8c22.1 0 40-17.9 40-40v-8h192v8c0 22.1 17.9 40 40 40h8v192h-8c-22.1 0-40 17.9-40 40v8H128v-8c0-22.1-17.9-40-40-40zm-40 32h48c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8H40c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8m320 0h48c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8M40 64h48c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8H40c-4.4 0-8-3.6-8-8V72c0-4.4 3.6-8 8-8"
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
                  d="M416 48c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16zm-32-16c-17.7 0-32 14.3-32 32v8H96v-8c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64v32c0 17.7 14.3 32 32 32h8v256h-8c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32v-8h256v8c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32v-32c0-17.7-14.3-32-32-32h-8V128h8c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32zM56 384V128h8c17.7 0 32-14.3 32-32v-8h256v8c0 17.7 14.3 32 32 32h8v256h-8c-17.7 0-32 14.3-32 32v8H96v-8c0-17.7-14.3-32-32-32zm-24 16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H32c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16m352 0h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16M32 48h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H32c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16"
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
                  d="M320 64H128v64h192zm0 320H128v64h192zM32 160v192h64V160zm384 0h-64v192h64z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M368 80h32v32h-32zm-16-48c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32zM48 432v-32h32v32zM0 384v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32m368 48v-32h32v32zm-48-48v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32M48 112V80h32v32zM0 64v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64"
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
