import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ObjectSubtractIcon: React.FC<
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
                  d="M512 448c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64v-96H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0h224c35.3 0 64 28.7 64 64v96h96c35.3 0 64 28.7 64 64zM288 288V64H64v224z"
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
                  d="M64 48h32V0H64C28.7 0 0 28.7 0 64v32h48V64c0-8.8 7.2-16 16-16m160 0V0h-96v48zM48 128H0v96h48zm0 128H0v32c0 35.3 28.7 64 64 64h32v-48H64c-8.8 0-16-7.2-16-16zm80 96h96v-48h-96zm32 32v64c0 35.3 28.7 64 64 64h224c35.3 0 64-28.7 64-64V224c0-35.3-28.7-64-64-64h-64v48h64c8.8 0 16 7.2 16 16v224c0 8.8-7.2 16-16 16H224c-8.8 0-16-7.2-16-16v-64zm192-176v-80h-48v96h48zm0-144c0-35.3-28.7-64-64-64h-32v48h32c8.8 0 16 7.2 16 16v32h48zm-96 240v48h32c35.3 0 64-28.7 64-64v-32h-48v32c0 8.8-7.2 16-16 16z"
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
                  d="M64 32h32V0H64C28.7 0 0 28.7 0 64v32h32V64c0-17.7 14.3-32 32-32m160 0V0h-96v32zM32 128H0v96h32zm0 128H0v32c0 35.3 28.7 64 64 64h32v-32H64c-17.7 0-32-14.3-32-32zm96 96h96v-32h-96zm32 32v64c0 35.3 28.7 64 64 64h224c35.3 0 64-28.7 64-64V224c0-35.3-28.7-64-64-64h-64v32h64c17.7 0 32 14.3 32 32v224c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32v-64zm192-192v-64h-32v96h32zm0-128c0-35.3-28.7-64-64-64h-32v32h32c17.7 0 32 14.3 32 32v32h32zm-96 256v32h32c35.3 0 64-28.7 64-64v-32h-32v32c0 17.7-14.3 32-32 32z"
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
                  d="M128 16h96V0h-96zm-32 0V0H64C28.7 0 0 28.7 0 64v32h16V64c0-26.5 21.5-48 48-48zM0 224h16v-96H0zm0 32v32c0 35.3 28.7 64 64 64h32v-16H64c-26.5 0-48-21.5-48-48v-32zm128 80v16h96v-16h-96m48 48h-16v64c0 35.3 28.7 64 64 64h224c35.3 0 64-28.7 64-64V224c0-35.3-28.7-64-64-64h-64v16h64c26.5 0 48 21.5 48 48v224c0 26.5-21.5 48-48 48H224c-26.5 0-48-21.5-48-48zM352 64c0-35.3-28.7-64-64-64h-32v16h32c26.5 0 48 21.5 48 48v32h16zm0 112v-48h-16v96h16zm-96 160v16h32c35.3 0 64-28.7 64-64v-32h-16v32c0 26.5-21.5 48-48 48z"
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
                  d="M64 288V64h224v224zm224 64c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64v224c0 35.3 28.7 64 64 64z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M448 512c35.3 0 64-28.7 64-64V224c0-35.3-28.7-64-64-64h-96v128c0 35.3-28.7 64-64 64H160v96c0 35.3 28.7 64 64 64z"
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
