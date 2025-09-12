import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CastleIcon: React.FC<
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
                  d="M128 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h48V16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h32V16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h48V16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v208h64v-48c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v288c0 26.5-21.5 48-48 48H384V384c0-35.3-28.7-64-64-64s-64 28.7-64 64v128H48c-26.5 0-48-21.5-48-48V176c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h64V16"
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
                  d="M176 24c0-13.3-10.7-24-24-24s-24 10.7-24 24v200H48v-40c0-13.3-10.7-24-24-24S0 170.7 0 184v256c0 39.8 32.2 72 72 72h496c39.8 0 72-32.2 72-72V184c0-13.3-10.7-24-24-24s-24 10.7-24 24v40h-80V24c0-13.3-10.7-24-24-24s-24 10.7-24 24v40h-64V24c0-13.3-10.7-24-24-24s-24 10.7-24 24v40h-64V24c0-13.3-10.7-24-24-24s-24 10.7-24 24v40h-64zm0 88h288v112H176zM48 272h544v168c0 13.3-10.7 24-24 24H384v-80c0-35.3-28.7-64-64-64s-64 28.7-64 64v80H72c-13.3 0-24-10.7-24-24z"
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
                  d="M128 40c0-22.1 17.9-40 40-40h24c22.1 0 40 17.9 40 40v24h32V40c0-22.1 17.9-40 40-40h32c22.1 0 40 17.9 40 40v24h32V40c0-22.1 17.9-40 40-40h24c22.1 0 40 17.9 40 40v184h32v-24c0-22.1 17.9-40 40-40h16c22.1 0 40 17.9 40 40v232c0 44.2-35.8 80-80 80H80c-44.2 0-80-35.8-80-80V200c0-22.1 17.9-40 40-40h16c22.1 0 40 17.9 40 40v24h32zm40-8c-4.4 0-8 3.6-8 8v184h320V40c0-4.4-3.6-8-8-8h-24c-4.4 0-8 3.6-8 8v40c0 8.8-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16V40c0-4.4-3.6-8-8-8h-32c-4.4 0-8 3.6-8 8v40c0 8.8-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16V40c0-4.4-3.6-8-8-8zm328 224H80c-8.8 0-16-7.2-16-16v-40c0-4.4-3.6-8-8-8H40c-4.4 0-8 3.6-8 8v232c0 26.5 21.5 48 48 48h144v-80c0-53 43-96 96-96s96 43 96 96v80h144c26.5 0 48-21.5 48-48V200c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v40c0 8.8-7.2 16-16 16zM384 400c0-35.3-28.7-64-64-64s-64 28.7-64 64v80h128z"
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
                  d="M128 24c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v48h24V24c0-13.3 10.7-24 24-24h24c13.3 0 24 10.7 24 24v48h32V24c0-13.3 10.7-24 24-24h24c13.3 0 24 10.7 24 24v48h24V24c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v200h48v-40c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v256c0 39.8-32.2 72-72 72H72c-39.8 0-72-32.2-72-72V184c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v40h48zm8 216H72c-4.4 0-8-3.6-8-8v-48c0-4.4-3.6-8-8-8H24c-4.4 0-8 3.6-8 8v256c0 30.9 25.1 56 56 56h168V392c0-44.2 35.8-80 80-80s80 35.8 80 80v104h168c30.9 0 56-25.1 56-56V184c0-4.4-3.6-8-8-8h-32c-4.4 0-8 3.6-8 8v48c0 4.4-3.6 8-8 8H136m360-16V24c0-4.4-3.6-8-8-8h-32c-4.4 0-8 3.6-8 8v56c0 4.4-3.6 8-8 8h-40c-4.4 0-8-3.6-8-8V24c0-4.4-3.6-8-8-8h-24c-4.4 0-8 3.6-8 8v56c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V24c0-4.4-3.6-8-8-8h-24c-4.4 0-8 3.6-8 8v56c0 4.4-3.6 8-8 8h-40c-4.4 0-8-3.6-8-8V24c0-4.4-3.6-8-8-8h-32c-4.4 0-8 3.6-8 8v200zM384 392c0-35.3-28.7-64-64-64s-64 28.7-64 64v104h128z"
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
                  d="M128 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h48V16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h32V16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h48V16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v208H128V16"
                />
                <path
                  className="aps-icon-foreground"
                  d="M0 176c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h512v-48c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v288c0 26.5-21.5 48-48 48H384V384c0-35.3-28.7-64-64-64s-64 28.7-64 64v128H48c-26.5 0-48-21.5-48-48V176"
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
