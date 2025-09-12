import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const HeadphonesIcon: React.FC<
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
                  d="M256 80C149.9 80 62.4 159.4 49.6 262c9.4-3.8 19.6-6 30.4-6 26.5 0 48 21.5 48 48v128c0 26.5-21.5 48-48 48-44.2 0-80-35.8-80-80V288C0 146.6 114.6 32 256 32s256 114.6 256 256v112c0 44.2-35.8 80-80 80-26.5 0-48-21.5-48-48V304c0-26.5 21.5-48 48-48 10.8 0 21 2.1 30.4 6C449.6 159.4 362.1 80 256 80"
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
                  d="M49.6 262C62.4 159.4 149.9 80 256 80s193.6 79.4 206.4 182c-9.4-3.9-19.6-6-30.4-6-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48 44.2 0 80-35.8 80-80V288c0-141.4-114.6-256-256-256S0 146.6 0 288v112c0 44.2 35.8 80 80 80 26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48-10.8 0-21 2.1-30.4 6M48 336c0-17.7 14.3-32 32-32v128c-17.7 0-32-14.3-32-32v-64m416 0v64c0 17.7-14.3 32-32 32V304c17.7 0 32 14.3 32 32"
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
                  d="M32.6 271.6C41 155.5 137.8 64 256 64s215 91.5 223.4 207.6c-13.3-9.8-29.7-15.6-47.4-15.6-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48 44.2 0 80-35.8 80-80V288c0-141.4-114.6-256-256-256S0 146.6 0 288v112c0 44.2 35.8 80 80 80 26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48-17.7 0-34.1 5.8-47.4 15.6M32 336c0-26.5 21.5-48 48-48 8.8 0 16 7.2 16 16v128c0 8.8-7.2 16-16 16-26.5 0-48-21.5-48-48v-64m448 0v64c0 26.5-21.5 48-48 48-8.8 0-16-7.2-16-16V304c0-8.8 7.2-16 16-16 26.5 0 48 21.5 48 48"
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
                  d="M16 288C16 155.4 123.5 48 256 48s240 107.4 240 240c-14.6-19.4-37.8-32-64-32-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48 44.2 0 80-35.8 80-80V288c0-141.4-114.6-256-256-256S0 146.6 0 288v112c0 44.2 35.8 80 80 80 26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48-26.2 0-49.4 12.6-64 32m0 48c0-35.3 28.7-64 64-64 17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32-35.3 0-64-28.7-64-64v-64m480 0v64c0 35.3-28.7 64-64 64-17.7 0-32-14.3-32-32V304c0-17.7 14.3-32 32-32 35.3 0 64 28.7 64 64"
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
                  d="M49.6 262C62.4 159.4 149.9 80 256 80s193.6 79.4 206.4 182c29.1 12 49.6 40.6 49.6 74v-48c0-141.4-114.6-256-256-256S0 146.6 0 288v48c0-33.4 20.5-62.1 49.6-74"
                />
                <path
                  className="aps-icon-foreground"
                  d="M80 256c-44.2 0-80 35.8-80 80v64c0 44.2 35.8 80 80 80 26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48m352 0c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48 44.2 0 80-35.8 80-80v-64c0-44.2-35.8-80-80-80"
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
