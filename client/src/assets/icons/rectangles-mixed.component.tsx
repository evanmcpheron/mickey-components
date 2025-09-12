import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const RectanglesMixedIcon: React.FC<
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
                  d="M0 80c0-26.5 21.5-48 48-48h224c26.5 0 48 21.5 48 48v128c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48zm384 0c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v256c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48zM112 304h176c26.5 0 48 21.5 48 48v80c0 26.5-21.5 48-48 48H112c-26.5 0-48-21.5-48-48v-80c0-26.5 21.5-48 48-48"
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
                  d="M256 80c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16zM64 32C28.7 32 0 60.7 0 96v96c0 35.3 28.7 64 64 64h192c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm448 48c8.8 0 16 7.2 16 16v224c0 8.8-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16zm-64-48c-35.3 0-64 28.7-64 64v224c0 35.3 28.7 64 64 64h64c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zM128 352h144c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16H128c-8.8 0-16-7.2-16-16v-48c0-8.8 7.2-16 16-16m-64 16v48c0 35.3 28.7 64 64 64h144c35.3 0 64-28.7 64-64v-48c0-35.3-28.7-64-64-64H128c-35.3 0-64 28.7-64 64"
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
                  d="M272 64c8.8 0 16 7.2 16 16v128c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16zM48 32C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm480 32c8.8 0 16 7.2 16 16v256c0 8.8-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16zm-96-32c-26.5 0-48 21.5-48 48v256c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM112 336h176c8.8 0 16 7.2 16 16v80c0 8.8-7.2 16-16 16H112c-8.8 0-16-7.2-16-16v-80c0-8.8 7.2-16 16-16m-48 16v80c0 26.5 21.5 48 48 48h176c26.5 0 48-21.5 48-48v-80c0-26.5-21.5-48-48-48H112c-26.5 0-48 21.5-48 48"
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
                  d="M272 48c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H48c-17.7 0-32-14.3-32-32V80c0-17.7 14.3-32 32-32zM48 32C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm480 16c17.7 0 32 14.3 32 32v256c0 17.7-14.3 32-32 32h-96c-17.7 0-32-14.3-32-32V80c0-17.7 14.3-32 32-32zm-96-16c-26.5 0-48 21.5-48 48v256c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM112 320h176c17.7 0 32 14.3 32 32v80c0 17.7-14.3 32-32 32H112c-17.7 0-32-14.3-32-32v-80c0-17.7 14.3-32 32-32m-48 32v80c0 26.5 21.5 48 48 48h176c26.5 0 48-21.5 48-48v-80c0-26.5-21.5-48-48-48H112c-26.5 0-48 21.5-48 48"
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
                  d="M432 32c-26.5 0-48 21.5-48 48v256c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM112 304c-26.5 0-48 21.5-48 48v80c0 26.5 21.5 48 48 48h176c26.5 0 48-21.5 48-48v-80c0-26.5-21.5-48-48-48z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M0 80c0-26.5 21.5-48 48-48h224c26.5 0 48 21.5 48 48v128c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48z"
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
