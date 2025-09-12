import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const DiagramSubtaskIcon: React.FC<
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
                  d="M0 96c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H160v96c0 17.7 14.3 32 32 32h32c0-35.3 28.7-64 64-64h160c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H288c-35.3 0-64-28.7-64-64h-32c-53 0-96-43-96-96v-96H64c-35.3 0-64-28.7-64-64zm448 256H288v64h160z"
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
                  d="M0 96c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H152v96c0 22.1 17.9 40 40 40h32v-8c0-35.3 28.7-64 64-64h160c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H288c-35.3 0-64-28.7-64-64v-8h-32c-48.6 0-88-39.4-88-88v-96H64c-35.3 0-64-28.7-64-64zm448 240H288c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h160c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16"
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
                  d="M448 64c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32zM144 224h304c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96v64c0 35.3 28.7 64 64 64h48v96c0 44.2 35.8 80 80 80h32v16c0 35.3 28.7 64 64 64h160c35.3 0 64-28.7 64-64v-64c0-35.3-28.7-64-64-64H288c-35.3 0-64 28.7-64 64v16h-32c-26.5 0-48-21.5-48-48zm304 96c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32z"
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
                  d="M448 48c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V96c0-26.5 21.5-48 48-48zM64 32C28.7 32 0 60.7 0 96v64c0 35.3 28.7 64 64 64h56v96c0 39.8 32.2 72 72 72h32v24c0 35.3 28.7 64 64 64h160c35.3 0 64-28.7 64-64v-64c0-35.3-28.7-64-64-64H288c-35.3 0-64 28.7-64 64v24h-32c-30.9 0-56-25.1-56-56v-96h312c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm384 272c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H288c-26.5 0-48-21.5-48-48v-64c0-26.5 21.5-48 48-48z"
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
                  d="M96 320v-96h64v96c0 17.7 14.3 32 32 32h32v64h-32c-53 0-96-43-96-96"
                />
                <path
                  className="aps-icon-foreground"
                  d="M64 32C28.7 32 0 60.7 0 96v64c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm224 256c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64h160c35.3 0 64-28.7 64-64v-64c0-35.3-28.7-64-64-64z"
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
