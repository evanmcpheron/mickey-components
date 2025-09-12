import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const PersonSimpleIcon: React.FC<
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
                viewBox="0 0 256 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M64 64a64 64 0 1 1 128 0 64 64 0 1 1-128 0M25.9 233.4C29.3 191.9 64 160 105.6 160h44.8c41.6 0 76.3 31.9 79.7 73.4l4.1 49.3c2.5 29.8-15.7 56.1-42.2 65.6V464c0 26.5-21.5 48-48 48h-32c-26.5 0-48-21.5-48-48V348.3c-26.5-9.5-44.7-35.8-42.2-65.6z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M128 128a64 64 0 1 0 0-128 64 64 0 1 0 0 128M73.7 237.3C75.1 220.8 89 208 105.6 208h44.8c16.6 0 30.5 12.8 31.9 29.3l4.1 49.3c.8 9.3-6.6 17.3-15.9 17.3H85.6c-9.4 0-16.7-8-15.9-17.3l4.1-49.3zM112 352h32v136c0 13.3 10.7 24 24 24s24-10.7 24-24V348.3c26.5-9.5 44.7-35.8 42.2-65.6l-4.1-49.3c-3.4-41.5-38.1-73.4-79.7-73.4h-44.8c-41.6 0-76.3 31.9-79.7 73.4l-4.1 49.3c-2.5 29.8 15.7 56.1 42.2 65.6V488c0 13.3 10.7 24 24 24s24-10.7 24-24z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M160 64a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-96 0a64 64 0 1 1 128 0 64 64 0 1 1-128 0m-6.2 172-4.1 49.3C52.1 304 66.8 320 85.6 320h84.9c18.7 0 33.4-16 31.9-34.7l-4.2-49.3c-2.1-24.9-22.9-44-47.8-44h-44.8c-25 0-45.8 19.1-47.8 44m-31.9-2.7C29.3 191.9 64 160 105.6 160h44.8c41.6 0 76.3 31.9 79.7 73.4l4.1 49.3c2.5 29.8-15.7 56.1-42.2 65.6V496c0 8.8-7.2 16-16 16s-16-7.2-16-16V352H96v144c0 8.8-7.2 16-16 16s-16-7.2-16-16V348.3c-26.5-9.5-44.7-35.8-42.2-65.6l4.1-49.3z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M176 64a48 48 0 1 0-96 0 48 48 0 1 0 96 0M64 64a64 64 0 1 1 128 0 64 64 0 1 1-128 0M41.8 234.7 37.7 284c-2.3 28 19.8 52 47.8 52h84.9c28.1 0 50.2-24 47.8-52l-4.1-49.3c-2.8-33.2-30.5-58.7-63.8-58.7h-44.7c-33.3 0-61 25.5-63.8 58.7M136 352h-16v128c0 17.7-14.3 32-32 32s-32-14.3-32-32V344.8c-22.1-11.5-36.4-35.4-34.2-62.1l4.1-49.3C29.3 191.9 64 160 105.6 160h44.8c41.6 0 76.3 31.9 79.7 73.4l4.1 49.3c2.2 26.7-12.2 50.6-34.2 62.1V480c0 17.7-14.3 32-32 32s-32-14.3-32-32zm48-1.4c-4.4.9-8.9 1.4-13.6 1.4H152v128c0 8.8 7.2 16 16 16s16-7.2 16-16zM85.6 352c-4.7 0-9.2-.5-13.6-1.4V480c0 8.8 7.2 16 16 16s16-7.2 16-16V352z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M64 64a64 64 0 1 1 128 0 64 64 0 1 1-128 0"
                />
                <path
                  className="aps-icon-foreground"
                  d="M105.6 160c-41.6 0-76.3 31.9-79.7 73.4l-4.1 49.3c-2.5 29.8 15.7 56.1 42.2 65.6V464c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V348.3c26.5-9.5 44.7-35.8 42.2-65.6l-4.1-49.3c-3.4-41.5-38.1-73.4-79.7-73.4z"
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
