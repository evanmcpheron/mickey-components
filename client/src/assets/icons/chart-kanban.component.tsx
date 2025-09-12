import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ChartKanbanIcon: React.FC<
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
                  d="M320 432c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48h-32c-26.5 0-48 21.5-48 48zM160 240c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48h-32c-26.5 0-48 21.5-48 48zM48 416h32c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48H48C21.5 32 0 53.5 0 80v288c0 26.5 21.5 48 48 48"
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
                  d="M368 432V80h32v352zm-48 0c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48h-32c-26.5 0-48 21.5-48 48zM80 368H48V80h32zm-32 48h32c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48H48C21.5 32 0 53.5 0 80v288c0 26.5 21.5 48 48 48m192-176h-32V80h32zm-32 48h32c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48h-32c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48"
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
                  d="M368 448c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v352c0 8.8-7.2 16-16 16zm-48-16c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48h-32c-26.5 0-48 21.5-48 48zM80 384H48c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v288c0 8.8-7.2 16-16 16m-32 32h32c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48H48C21.5 32 0 53.5 0 80v288c0 26.5 21.5 48 48 48m192-160h-32c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v160c0 8.8-7.2 16-16 16m-32 32h32c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48h-32c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48"
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
                  d="M368 464c-17.7 0-32-14.3-32-32V80c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32v352c0 17.7-14.3 32-32 32zm-48-32c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48h-32c-26.5 0-48 21.5-48 48zM80 400H48c-17.7 0-32-14.3-32-32V80c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32v288c0 17.7-14.3 32-32 32m-32 16h32c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48H48C21.5 32 0 53.5 0 80v288c0 26.5 21.5 48 48 48m192-144h-32c-17.7 0-32-14.3-32-32V80c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32v160c0 17.7-14.3 32-32 32m-32 16h32c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48h-32c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48"
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
                  d="M160 240c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48h-32c-26.5 0-48 21.5-48 48z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M368 480c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zM48 416c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48v288c0 26.5-21.5 48-48 48z"
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
