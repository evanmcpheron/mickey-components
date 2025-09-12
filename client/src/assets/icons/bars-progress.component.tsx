import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BarsProgressIcon: React.FC<
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
                  d="M448 160H320v-32h128zM48 64C21.5 64 0 85.5 0 112v64c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-64c0-26.5-21.5-48-48-48zm400 288v32H192v-32zM48 288c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-64c0-26.5-21.5-48-48-48z"
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
                  d="M464 112v64H320v-64zM48 64C21.5 64 0 85.5 0 112v64c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-64c0-26.5-21.5-48-48-48zm416 272v64H192v-64zM48 288c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-64c0-26.5-21.5-48-48-48z"
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
                  d="M464 96c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H320V96zM48 96h240v96H48c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16m0-32C21.5 64 0 85.5 0 112v64c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-64c0-26.5-21.5-48-48-48zm416 256c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H192v-96zm-416 0h112v96H48c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16m0-32c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-64c0-26.5-21.5-48-48-48z"
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
                  d="M464 80c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H320V80zM48 80h256v128H48c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32m0-16C21.5 64 0 85.5 0 112v64c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-64c0-26.5-21.5-48-48-48zm416 240c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H192V304zm-416 0h128v128H48c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32m0-16c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-64c0-26.5-21.5-48-48-48z"
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
                  d="M320 224h144c26.5 0 48-21.5 48-48v-64c0-26.5-21.5-48-48-48H320v64h128v32H320zM192 448h272c26.5 0 48-21.5 48-48v-64c0-26.5-21.5-48-48-48H192v64h256v32H192z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M0 112c0-26.5 21.5-48 48-48h272v160H48c-26.5 0-48-21.5-48-48zm0 224c0-26.5 21.5-48 48-48h144v160H48c-26.5 0-48-21.5-48-48z"
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
