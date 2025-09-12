import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BoxIcon: React.FC<
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
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M50.7 58.5 0 160h208V32H93.7c-18.2 0-34.8 10.3-43 26.5M240 160h208L397.3 58.5c-8.2-16.2-24.8-26.5-43-26.5H240zm208 32H0v224c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M342.4 80H248v80h140.4L357 89.5c-2.6-5.8-8.3-9.5-14.6-9.5M400 208H48v208c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16zM59.6 160H200V80h-94.4c-6.3 0-12.1 3.7-14.6 9.5zM342.4 32c25.3 0 48.2 14.9 58.5 38l41.6 93.6c3.6 8.2 5.5 17 5.5 26V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V189.6c0-9 1.9-17.8 5.5-26L47.1 70c10.3-23.1 33.2-38 58.5-38z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M342.4 64H240v96h165.9l-34.2-77c-5.1-11.6-16.6-19-29.2-19zM416 192H32v224c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32zM42.1 160H208V64H105.6C93 64 81.5 71.4 76.4 83zM342.4 32c25.3 0 48.2 14.9 58.5 38l41.6 93.6c3.6 8.2 5.5 17 5.5 26V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V189.6c0-9 1.9-17.8 5.5-26L47.1 70c10.3-23.1 33.2-38 58.5-38z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M342.4 48H232v128h198c-.6-2-1.3-4-2.2-5.9l-41.5-93.6C378.6 59.2 361.4 48 342.4 48M432 192H16v224c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48zM18 176h198V48H105.6c-19 0-36.2 11.2-43.9 28.5l-41.6 93.6c-.9 1.9-1.6 3.9-2.2 5.9zM342.4 32c25.3 0 48.2 14.9 58.5 38l41.6 93.6c3.6 8.2 5.5 17 5.5 26V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V189.6c0-9 1.9-17.8 5.5-26L47.1 70c10.3-23.1 33.2-38 58.5-38z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M93.7 32c-18.2 0-34.8 10.3-43 26.5L0 160h208V32zM240 32v128h208L397.3 58.5c-8.2-16.2-24.8-26.5-43-26.5z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M240 160h208v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V160h208V32h32z"
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
