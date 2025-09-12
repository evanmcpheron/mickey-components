import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SignalBarsGoodIcon: React.FC<
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
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M400 128c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48s48-21.5 48-48V176c0-26.5-21.5-48-48-48M192 304v160c0 26.5 21.5 48 48 48s48-21.5 48-48V304c0-26.5-21.5-48-48-48s-48 21.5-48 48M32 432v32c0 26.5 21.5 48 48 48s48-21.5 48-48v-32c0-26.5-21.5-48-48-48s-48 21.5-48 48"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M416 192v256c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16m-16-64c-35.3 0-64 28.7-64 64v256c0 35.3 28.7 64 64 64s64-28.7 64-64V192c0-35.3-28.7-64-64-64M240 464c-8.8 0-16-7.2-16-16V320c0-8.8 7.2-16 16-16s16 7.2 16 16v128c0 8.8-7.2 16-16 16m0-208c-35.3 0-64 28.7-64 64v128c0 35.3 28.7 64 64 64s64-28.7 64-64V320c0-35.3-28.7-64-64-64M80 432a16 16 0 1 1 0 32 16 16 0 1 1 0-32m-64 16a64 64 0 1 0 128 0 64 64 0 1 0-128 0"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M416 464c0 8.8-7.2 16-16 16s-16-7.2-16-16V176c0-8.8 7.2-16 16-16s16 7.2 16 16zm-16-336c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48s48-21.5 48-48V176c0-26.5-21.5-48-48-48M256 464c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16zm-16-208c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48s48-21.5 48-48V304c0-26.5-21.5-48-48-48M96 432v32c0 8.8-7.2 16-16 16s-16-7.2-16-16v-32c0-8.8 7.2-16 16-16s16 7.2 16 16m-64 0v32c0 26.5 21.5 48 48 48s48-21.5 48-48v-32c0-26.5-21.5-48-48-48s-48 21.5-48 48"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M432 176c0-17.7-14.3-32-32-32s-32 14.3-32 32v288c0 17.7 14.3 32 32 32s32-14.3 32-32zm-80 0c0-26.5 21.5-48 48-48s48 21.5 48 48v288c0 26.5-21.5 48-48 48s-48-21.5-48-48zm-80 128c0-17.7-14.3-32-32-32s-32 14.3-32 32v160c0 17.7 14.3 32 32 32s32-14.3 32-32zm-32-48c26.5 0 48 21.5 48 48v160c0 26.5-21.5 48-48 48s-48-21.5-48-48V304c0-26.5 21.5-48 48-48M112 464v-32c0-17.7-14.3-32-32-32s-32 14.3-32 32v32c0 17.7 14.3 32 32 32s32-14.3 32-32m-32-80c26.5 0 48 21.5 48 48v32c0 26.5-21.5 48-48 48s-48-21.5-48-48v-32c0-26.5 21.5-48 48-48"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M512 48c0-26.5 21.5-48 48-48s48 21.5 48 48v416c0 26.5-21.5 48-48 48s-48-21.5-48-48z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M400 128c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48s48-21.5 48-48V176c0-26.5-21.5-48-48-48M192 304v160c0 26.5 21.5 48 48 48s48-21.5 48-48V304c0-26.5-21.5-48-48-48s-48 21.5-48 48M32 432v32c0 26.5 21.5 48 48 48s48-21.5 48-48v-32c0-26.5-21.5-48-48-48s-48 21.5-48 48"
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
