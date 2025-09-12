import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BoxBallotIcon: React.FC<
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
                  d="M128 32c0-17.7 14.3-32 32-32h256c17.7 0 32 14.3 32 32v192H128zM0 352h576v112c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48zm48-192h48v96h384v-96h48c26.5 0 48 21.5 48 48v112H0V208c0-26.5 21.5-48 48-48"
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
                  d="M176 208h224V48H176zM128 32c0-17.7 14.3-32 32-32h256c17.7 0 32 14.3 32 32v192c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32zM48 160h48v48H48v112h480V208h-48v-48h48c26.5 0 48 21.5 48 48v256c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V208c0-26.5 21.5-48 48-48m480 208H48v96h480z"
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
                  d="M160 32v192h256V32zm-32 0c0-17.7 14.3-32 32-32h256c17.7 0 32 14.3 32 32v192c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32zM48 160h48v32H48c-8.8 0-16 7.2-16 16v112h512V208c0-8.8-7.2-16-16-16h-48v-32h48c26.5 0 48 21.5 48 48v256c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V208c0-26.5 21.5-48 48-48m496 192H32v112c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16z"
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
                  d="M160 16c-8.8 0-16 7.2-16 16v192c0 8.8 7.2 16 16 16h256c8.8 0 16-7.2 16-16V32c0-8.8-7.2-16-16-16zm-32 16c0-17.7 14.3-32 32-32h256c17.7 0 32 14.3 32 32v192c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32zM48 160h48v16H48c-17.7 0-32 14.3-32 32v112h544V208c0-17.7-14.3-32-32-32h-48v-16h48c26.5 0 48 21.5 48 48v256c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V208c0-26.5 21.5-48 48-48m512 176H16v128c0 17.7 14.3 32 32 32h480c17.7 0 32-14.3 32-32z"
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
                  d="M48 160h80v64H80c-8.8 0-16 7.2-16 16s7.2 16 16 16h416c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48v-64h80c26.5 0 48 21.5 48 48v112H0V208c0-26.5 21.5-48 48-48"
                />
                <path
                  className="aps-icon-foreground"
                  d="M160 0h256c17.7 0 32 14.3 32 32v224H128V32c0-17.7 14.3-32 32-32M32 512c-17.7 0-32-14.3-32-32V320h576v160c0 17.7-14.3 32-32 32z"
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
