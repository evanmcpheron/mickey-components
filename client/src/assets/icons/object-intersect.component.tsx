import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ObjectIntersectIcon: React.FC<
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
                  d="M288 64v96h-64c-35.3 0-64 28.7-64 64v64H64V64zM64 352h96v96c0 35.3 28.7 64 64 64h224c35.3 0 64-28.7 64-64V224c0-35.3-28.7-64-64-64h-96V64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64v224c0 35.3 28.7 64 64 64m384-128v224H224v-96h64c35.3 0 64-28.7 64-64v-64z"
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
                  d="M96 48H64c-8.8 0-16 7.2-16 16v32H0V64C0 28.7 28.7 0 64 0h32zm32 0V0h96v48zM0 128h48v96H0zm352 32v128c0 35.3-28.7 64-64 64H160V224c0-35.3 28.7-64 64-64h128M160 416h48v32c0 8.8 7.2 16 16 16h32v48h-32c-35.3 0-64-28.7-64-64zM352 64v32h-48V64c0-8.8-7.2-16-16-16h-32V0h32c35.3 0 64 28.7 64 64m64 144v-48h32c35.3 0 64 28.7 64 64v32h-48v-32c0-8.8-7.2-16-16-16zM96 304v48H64c-35.3 0-64-28.7-64-64v-32h48v32c0 8.8 7.2 16 16 16zm192 160h96v48h-96zm160 48h-32v-48h32c8.8 0 16-7.2 16-16v-32h48v32c0 35.3-28.7 64-64 64m64-128h-48v-96h48zM304 208h-80c-8.8 0-16 7.2-16 16v80h80c8.8 0 16-7.2 16-16z"
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
                  d="M96 32H64c-17.7 0-32 14.3-32 32v32H0V64C0 28.7 28.7 0 64 0h32zm32 0V0h96v32zM0 128h32v96H0zm288-96h-32V0h32c35.3 0 64 28.7 64 64v64h-32V64c0-17.7-14.3-32-32-32m32 128h32v128c0 35.3-28.7 64-64 64H160V224c0-35.3 28.7-64 64-64h96M160 384h32v64c0 17.7 14.3 32 32 32h32v32h-32c-35.3 0-64-28.7-64-64zm-32-32H64c-35.3 0-64-28.7-64-64v-32h32v32c0 17.7 14.3 32 32 32h64zm256-160v-32h64c35.3 0 64 28.7 64 64v32h-32v-32c0-17.7-14.3-32-32-32zm-96 320v-32h96v32zm160 0h-32v-32h32c17.7 0 32-14.3 32-32v-32h32v32c0 35.3-28.7 64-64 64m64-128h-32v-96h32zM224 192c-17.7 0-32 14.3-32 32v96h96c17.7 0 32-14.3 32-32v-96z"
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
                  d="M128 0h96v16h-96zM96 0v16H64c-26.5 0-48 21.5-48 48v32H0V64C0 28.7 28.7 0 64 0zM0 128h16v96H0zM256 16V0h32c35.3 0 64 28.7 64 64v64h-16V64c0-26.5-21.5-48-48-48zm80 144h16v128c0 35.3-28.7 64-64 64H160V224c0-35.3 28.7-64 64-64h112M160 384h16v64c0 26.5 21.5 48 48 48h32v16h-32c-35.3 0-64-28.7-64-64zm-32-32H64c-35.3 0-64-28.7-64-64v-32h16v32c0 26.5 21.5 48 48 48h64zm256-176v-16h64c35.3 0 64 28.7 64 64v32h-16v-32c0-26.5-21.5-48-48-48zm32 336v-16h32c26.5 0 48-21.5 48-48v-32h16v32c0 35.3-28.7 64-64 64zm80-224h16v96h-16zM288 512v-16h96v16zm48-336H224c-26.5 0-48 21.5-48 48v112h112c26.5 0 48-21.5 48-48z"
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
                  d="M64 64h224v96h64v64h96v224H224v-96h-64v-64H64zm96 288v96c0 35.3 28.7 64 64 64h224c35.3 0 64-28.7 64-64V224c0-35.3-28.7-64-64-64h-96V64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64v224c0 35.3 28.7 64 64 64z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M160 224c0-35.3 28.7-64 64-64h128v128c0 35.3-28.7 64-64 64H160z"
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
