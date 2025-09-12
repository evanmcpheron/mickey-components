import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ShuttersIcon: React.FC<
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
                  d="M32 32C14.3 32 0 46.3 0 64s14.3 32 32 32h448c17.7 0 32-14.3 32-32s-14.3-32-32-32zM20.6 224h470.8c11.4 0 20.6-9.2 20.6-20.6 0-2.2-.4-4.4-1.1-6.5L488 128H24L1.1 196.8c-.7 2.1-1.1 4.3-1.1 6.5C0 214.8 9.2 224 20.6 224m470.8 128c11.4 0 20.6-9.2 20.6-20.6 0-2.2-.4-4.4-1.1-6.5L488 256H24L1.1 324.8c-.7 2.1-1.1 4.3-1.1 6.5C0 342.8 9.2 352 20.6 352zM20.6 480h470.8c11.4 0 20.6-9.2 20.6-20.6 0-2.2-.4-4.4-1.1-6.5L488 384H24L1.1 452.8c-.7 2.1-1.1 4.3-1.1 6.5C0 470.8 9.2 480 20.6 480"
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
                  d="M24 32C10.7 32 0 42.7 0 56s10.7 24 24 24h464c13.3 0 24-10.7 24-24s-10.7-24-24-24zm-10.3 96L.4 198c-.3 1.4-.4 2.7-.4 4.1C0 214.2 9.8 224 21.9 224h468.2c12.1 0 21.9-9.8 21.9-21.9 0-1.4-.1-2.8-.4-4.1l-13.3-70h-48.9l9.1 48H53.4l9.1-48zM.4 326c-.3 1.4-.4 2.7-.4 4.1C0 342.2 9.8 352 21.9 352h468.2c12.1 0 21.9-9.8 21.9-21.9 0-1.4-.1-2.8-.4-4.1l-13.3-70h-48.9l9.1 48H53.4l9.1-48H13.7zm0 128c-.3 1.4-.4 2.7-.4 4.1C0 470.2 9.8 480 21.9 480h468.2c12.1 0 21.9-9.8 21.9-21.9 0-1.4-.1-2.8-.4-4.1l-13.3-70h-48.9l9.1 48H53.4l9.1-48H13.7z"
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
                  d="M32 32C14.3 32 0 46.3 0 64v32c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32zm0 32h448v32H32zM.9 453c-.6 2-.9 4.1-.9 6.1C0 470.7 9.3 480 20.9 480h470.2c11.5 0 20.9-9.3 20.9-20.9 0-2.1-.3-4.1-.9-6.1l-21.2-69h-33.5l19.7 64H35.9l19.7-64H22.2zm21.3-197L.9 325c-.6 2-.9 4.1-.9 6.1C0 342.7 9.3 352 20.9 352h470.2c11.5 0 20.9-9.3 20.9-20.9 0-2.1-.3-4.1-.9-6.1l-21.2-69h-33.5l19.7 64H35.9l19.7-64zm453.9-64H35.9l9.8-32H12.3L.9 197c-.6 2-.9 4.1-.9 6.1C0 214.7 9.3 224 20.9 224h470.2c11.5 0 20.9-9.3 20.9-20.9 0-2.1-.3-4.1-.9-6.1l-11.4-37h-33.5l9.8 32z"
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
                  d="M496 48v32H16V48zM16 32C7.2 32 0 39.2 0 48v32c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16V48c0-8.8-7.2-16-16-16zm2.5 192L1.8 260.1c-1.2 2.6-1.8 5.4-1.8 8.2C0 279.2 8.8 288 19.7 288h472.6c10.9 0 19.7-8.8 19.7-19.7 0-2.8-.6-5.7-1.8-8.2L493.5 224h-17.6l19.7 42.8q.3.75.3 1.5c0 2-1.6 3.7-3.7 3.7H19.7c-2 0-3.7-1.6-3.7-3.7 0-.5.1-1.1.3-1.5L36.1 224zM1.8 356.1c-1.2 2.6-1.8 5.4-1.8 8.2C0 375.2 8.8 384 19.7 384h472.6c10.9 0 19.7-8.8 19.7-19.7 0-2.8-.6-5.7-1.8-8.2L493.5 320h-17.6l19.7 42.8q.3.75.3 1.5c0 2-1.6 3.7-3.7 3.7H19.7c-2 0-3.7-1.6-3.7-3.7 0-.5.1-1.1.3-1.5L36.1 320H18.5zM18.5 416 1.8 452.1c-1.2 2.6-1.8 5.4-1.8 8.2C0 471.2 8.8 480 19.7 480h472.6c10.9 0 19.7-8.8 19.7-19.7 0-2.8-.6-5.7-1.8-8.2L493.5 416h-17.6l19.7 42.8q.3.75.3 1.5c0 2-1.6 3.7-3.7 3.7H19.7c-2 0-3.7-1.6-3.7-3.7 0-.5.1-1.1.3-1.5L36.1 416zM1.8 164.1c-1.2 2.6-1.8 5.4-1.8 8.2C0 183.2 8.8 192 19.7 192h472.6c10.9 0 19.7-8.8 19.7-19.7 0-2.8-.6-5.7-1.8-8.2L493.5 128h-17.6l19.7 42.8q.3.75.3 1.5c0 2-1.6 3.7-3.7 3.7H19.7c-2 0-3.7-1.6-3.7-3.7 0-.5.1-1.1.3-1.5L36.1 128H18.5z"
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
                  d="M491.4 224H20.6C9.2 224 0 214.8 0 203.4c0-2.2.4-4.4 1.1-6.5L24 128h464l22.9 68.8c.7 2.1 1.1 4.3 1.1 6.5 0 11.4-9.2 20.6-20.6 20.6zm0 128H20.6C9.2 352 0 342.8 0 331.4c0-2.2.4-4.4 1.1-6.5L24 256h464l22.9 68.8c.7 2.1 1.1 4.3 1.1 6.5 0 11.4-9.2 20.6-20.6 20.6zM20.6 480C9.2 480 0 470.8 0 459.4c0-2.2.4-4.4 1.1-6.5L24 384h464l22.9 68.8c.7 2.1 1.1 4.3 1.1 6.5 0 11.4-9.2 20.6-20.6 20.6H20.6z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M0 64c0-17.7 14.3-32 32-32h448c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64"
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
