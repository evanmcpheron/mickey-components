import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CardSpadeIcon: React.FC<
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
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm111 137.8c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6 64 64c21.9 21.9 21.9 57.3 0 79.2s-57.3 21.9-79.2 0l-7.4-7.4c-.3-.3-.6-.6-1-.9V336h16c8.8 0 16 7.2 16 16s-7.2 16-16 16H160c-8.8 0-16-7.2-16-16s7.2-16 16-16h16v-40.8c-.3.3-.7.6-1 .9l-7.4 7.4c-21.9 21.9-57.3 21.9-79.2 0s-21.9-57.3 0-79.2l64-64z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M64 48c-8.8 0-16 7.2-16 16v384c0 8.8 7.2 16 16 16h256c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16zM0 64C0 28.7 28.7 0 64 0h256c35.3 0 64 28.7 64 64v384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm175 77.2c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6 59.7 59.7c21.9 21.9 21.9 57.3 0 79.2s-57.3 21.9-79.2 0l-3.2-3.2c-.3-.3-.6-.6-1-.9V336h16c8.8 0 16 7.2 16 16s-7.2 16-16 16H160c-8.8 0-16-7.2-16-16s7.2-16 16-16h16v-37.4c-.3.3-.7.6-1 .9l-3.2 3.2c-21.9 21.9-57.3 21.9-79.2 0s-21.9-57.3 0-79.2l59.7-59.7z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M64 32c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32zM0 64C0 28.7 28.7 0 64 0h256c35.3 0 64 28.7 64 64v384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm180.7 68.2c6.2-6.2 16.4-6.2 22.6 0l33.9 33.9 59.8 59.8c25 25 25 65.5 0 90.5-24.5 24.5-63.9 25-89 1.5V352h16c8.8 0 16 7.2 16 16s-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16s7.2-16 16-16h16v-34.2c-25.1 23.5-64.5 23-89-1.5-25-25-25-65.5 0-90.5l59.7-59.7 33.9-33.9zm11.3 33.9-22.6 22.6-59.7 59.7c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l25.8-25.8c3-3 7.1-4.7 11.3-4.7s8.3 1.7 11.3 4.7l25.8 25.8c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-59.7-59.7z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M64 16c-26.5 0-48 21.5-48 48v384c0 26.5 21.5 48 48 48h256c26.5 0 48-21.5 48-48V64c0-26.5-21.5-48-48-48zM0 64C0 28.7 28.7 0 64 0h256c35.3 0 64 28.7 64 64v384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm186.3 62.5c3.1-3.1 8.2-3.1 11.3 0l39.6 39.6 59.8 59.8c25 25 25 65.5 0 90.5s-65.5 25-90.5 0l-6.5-6.5V366h24c4.4 0 8 3.6 8 8s-3.6 8-8 8h-64c-4.4 0-8-3.6-8-8s3.6-8 8-8h24v-56.1l-6.5 6.5c-25 25-65.5 25-90.5 0s-25-65.5 0-90.5l59.7-59.7 39.6-39.6zm5.7 175.4-.1.1h.2zm0-158.4-33.9 33.9-59.8 59.8c-18.7 18.7-18.7 49.1 0 67.9s49.1 18.7 67.9 0l20.1-20.1c3.1-3.1 8.2-3.1 11.3 0l20.1 20.1c18.7 18.7 49.1 18.7 67.9 0s18.7-49.1 0-67.9l-59.7-59.7z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm111 137.8c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6 64 64c21.9 21.9 21.9 57.3 0 79.2s-57.3 21.9-79.2 0l-7.4-7.4c-.3-.3-.6-.6-1-.9V336h16c8.8 0 16 7.2 16 16s-7.2 16-16 16H160c-8.8 0-16-7.2-16-16s7.2-16 16-16h16v-40.8c-.3.3-.7.6-1 .9l-7.4 7.4c-21.9 21.9-57.3 21.9-79.2 0s-21.9-57.3 0-79.2l64-64z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M209 137.8c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6-64 64c-21.9 21.9-21.9 57.3 0 79.2s57.3 21.9 79.2 0l7.4-7.4c.3-.3.6-.6 1-.9V336H160c-8.8 0-16 7.2-16 16s7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16v-40.8c.3.3.7.6 1 .9l7.4 7.4c21.9 21.9 57.3 21.9 79.2 0s21.9-57.3 0-79.2l-64-64z"
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
