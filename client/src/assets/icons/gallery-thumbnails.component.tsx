import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const GalleryThumbnailsIcon: React.FC<
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
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M512 64v224H64V64zM64 0C28.7 0 0 28.7 0 64v224c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zM0 448v32c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32v-32c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32m192-32c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32v-32c0-17.7-14.3-32-32-32zm128 32v32c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32v-32c0-17.7-14.3-32-32-32h-32c-17.7 0-32 14.3-32 32m192-32c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32v-32c0-17.7-14.3-32-32-32z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M512 48c8.8 0 16 7.2 16 16v224c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16zM64 0C28.7 0 0 28.7 0 64v224c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zM0 448v32c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32v-32c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32m192-32c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32v-32c0-17.7-14.3-32-32-32zm128 32v32c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32v-32c0-17.7-14.3-32-32-32h-32c-17.7 0-32 14.3-32 32m192-32c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32v-32c0-17.7-14.3-32-32-32z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M512 32c17.7 0 32 14.3 32 32v224c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32zM64 0C28.7 0 0 28.7 0 64v224c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm0 448v32H32v-32zm-32-32c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32v-32c0-17.7-14.3-32-32-32zm160 32h32v32h-32zm-32 0v32c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32v-32c0-17.7-14.3-32-32-32h-32c-17.7 0-32 14.3-32 32m224 0v32h-32v-32zm-32-32c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32v-32c0-17.7-14.3-32-32-32zm160 32h32v32h-32zm-32 0v32c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32v-32c0-17.7-14.3-32-32-32h-32c-17.7 0-32 14.3-32 32"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M512 16c26.5 0 48 21.5 48 48v224c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V64c0-26.5 21.5-48 48-48zM64 0C28.7 0 0 28.7 0 64v224c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm0 432c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H32c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16zm-32-16c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32v-32c0-17.7-14.3-32-32-32zm160 16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16m-32 16v32c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32v-32c0-17.7-14.3-32-32-32h-32c-17.7 0-32 14.3-32 32m224-16c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16zm-32-16c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32v-32c0-17.7-14.3-32-32-32zm160 16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16m-32 16v32c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32v-32c0-17.7-14.3-32-32-32h-32c-17.7 0-32 14.3-32 32"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M32 416c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32v-32c0-17.7-14.3-32-32-32zm160 0c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32v-32c0-17.7-14.3-32-32-32zm128 32v32c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32v-32c0-17.7-14.3-32-32-32h-32c-17.7 0-32 14.3-32 32m192-32c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32v-32c0-17.7-14.3-32-32-32z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M512 64v224H64V64zM64 0C28.7 0 0 28.7 0 64v224c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64z"
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
