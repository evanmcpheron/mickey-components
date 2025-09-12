import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const NotesMedicalIcon: React.FC<
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
                  d="M96 352V96c0-35.3 28.7-64 64-64h256c35.3 0 64 28.7 64 64v197.5c0 17-6.7 33.3-18.7 45.3l-58.5 58.5c-12 12-28.3 18.7-45.3 18.7H160c-35.3 0-64-28.7-64-64m176-224c-8.8 0-16 7.2-16 16v48h-48c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h48v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-48v-48c0-8.8-7.2-16-16-16zm24 336c13.3 0 24 10.7 24 24s-10.7 24-24 24H136C60.9 512 0 451.1 0 376V152c0-13.3 10.7-24 24-24s24 10.7 24 24v224c0 48.6 39.4 88 88 88z"
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
                  d="M144 96c0-8.8 7.2-16 16-16h256c8.8 0 16 7.2 16 16v197.5c0 4.2-1.7 8.3-4.7 11.3l-58.5 58.5c-3 3-7.1 4.7-11.3 4.7H160c-8.8 0-16-7.2-16-16zm-48 0v256c0 35.3 28.7 64 64 64h197.5c17 0 33.3-6.7 45.3-18.7l58.5-58.5c12-12 18.7-28.3 18.7-45.3V96c0-35.3-28.7-64-64-64H160c-35.3 0-64 28.7-64 64m176 32c-8.8 0-16 7.2-16 16v48h-48c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h48v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-48v-48c0-8.8-7.2-16-16-16zm24 336H136c-48.6 0-88-39.4-88-88V152c0-13.3-10.7-24-24-24S0 138.7 0 152v224c0 75.1 60.9 136 136 136h160c13.3 0 24-10.7 24-24s-10.7-24-24-24"
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
                  d="M128 96c0-17.7 14.3-32 32-32h256c17.7 0 32 14.3 32 32v197.5c0 8.5-3.4 16.6-9.4 22.6l-58.5 58.5c-6 6-14.1 9.4-22.6 9.4H160c-17.7 0-32-14.3-32-32zm-32 0v256c0 35.3 28.7 64 64 64h197.5c17 0 33.3-6.7 45.3-18.7l58.5-58.5c12-12 18.7-28.3 18.7-45.3V96c0-35.3-28.7-64-64-64H160c-35.3 0-64 28.7-64 64m224 400c0-8.8-7.2-16-16-16H128c-53 0-96-43-96-96V144c0-8.8-7.2-16-16-16s-16 7.2-16 16v240c0 70.7 57.3 128 128 128h176c8.8 0 16-7.2 16-16m-48-384c-17.7 0-32 14.3-32 32v32h-32c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h32v32c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32v-32h32c17.7 0 32-14.3 32-32v-32c0-17.7-14.3-32-32-32h-32v-32c0-17.7-14.3-32-32-32zm0 32h32v48c0 8.8 7.2 16 16 16h48v32h-48c-8.8 0-16 7.2-16 16v48h-32v-48c0-8.8-7.2-16-16-16h-48v-32h48c4.2 0 8.3-1.7 11.3-4.7s4.7-7.1 4.7-11.3z"
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
                  d="M112 96c0-26.5 21.5-48 48-48h256c26.5 0 48 21.5 48 48v197.5c0 12.7-5.1 24.9-14.1 33.9l-58.5 58.5c-9 9-21.2 14.1-33.9 14.1H160c-26.5 0-48-21.5-48-48zm-16 0v256c0 35.3 28.7 64 64 64h197.5c17 0 33.3-6.7 45.3-18.7l58.5-58.5c12-12 18.7-28.3 18.7-45.3V96c0-35.3-28.7-64-64-64H160c-35.3 0-64 28.7-64 64m176 32h32c4.4 0 8 3.6 8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8 3.6 8 8v32c0 4.4-3.6 8-8 8h-56c-4.4 0-8 3.6-8 8v56c0 4.4-3.6 8-8 8h-32c-4.4 0-8-3.6-8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8-3.6-8-8v-32c0-4.4 3.6-8 8-8h56c4.4 0 8-3.6 8-8v-56c0-4.4 3.6-8 8-8m-24 8v48h-48c-13.3 0-24 10.7-24 24v32c0 13.3 10.7 24 24 24h48v48c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-48h48c13.3 0 24-10.7 24-24v-32c0-13.3-10.7-24-24-24h-48v-48c0-13.3-10.7-24-24-24h-32c-13.3 0-24 10.7-24 24M0 192v256c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64h-16c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V192c0-26.5 21.5-48 48-48v-16c-35.3 0-64 28.7-64 64"
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
                  d="M96 96v256c0 35.3 28.7 64 64 64h197.5c17 0 33.3-6.7 45.3-18.7l58.5-58.5c12-12 18.7-28.3 18.7-45.3V96c0-35.3-28.7-64-64-64H160c-35.3 0-64 28.7-64 64m160 48c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h48c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-48v48c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-48h-48c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h48z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M296 464c13.3 0 24 10.7 24 24s-10.7 24-24 24H136C60.9 512 0 451.1 0 376V152c0-13.3 10.7-24 24-24s24 10.7 24 24v224c0 48.6 39.4 88 88 88zm-40-320c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h48c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-48v48c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-48h-48c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h48z"
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
