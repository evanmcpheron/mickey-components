import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ButterIcon: React.FC<
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
                  d="M64 128c0-35.3 28.7-64 64-64h320v224H64zM32 320h576c17.7 0 32 14.3 32 32s-14.3 32-32 32v32c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32v-32c-17.7 0-32-14.3-32-32s14.3-32 32-32M512 64c35.3 0 64 28.7 64 64v160h-96V64z"
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
                  d="M464 112v176h-48V112H128c-8.8 0-16 7.2-16 16v160H64V128c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v160h-48V128c0-8.8-7.2-16-16-16zM0 344c0-13.3 10.7-24 24-24h592c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8v48c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32v-48h-8c-13.3 0-24-10.7-24-24"
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
                  d="M480 96v192h-32V96H128c-17.7 0-32 14.3-32 32v160H64V128c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v160h-32V128c0-17.7-14.3-32-32-32zM0 336c0-8.8 7.2-16 16-16h608c8.8 0 16 7.2 16 16s-7.2 16-16 16h-16v48c0 26.5-21.5 48-48 48H80c-26.5 0-48-21.5-48-48v-48H16c-8.8 0-16-7.2-16-16m64 16v48c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-48z"
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
                  d="M480 80v208h-16V80H128c-26.5 0-48 21.5-48 48v160H64V128c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v160h-16V128c0-26.5-21.5-48-48-48zM0 328c0-4.4 3.6-8 8-8h624c4.4 0 8 3.6 8 8s-3.6 8-8 8h-24v64c0 26.5-21.5 48-48 48H80c-26.5 0-48-21.5-48-48v-64H8c-4.4 0-8-3.6-8-8m48 8v64c0 17.7 14.3 32 32 32h480c17.7 0 32-14.3 32-32v-64z"
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
                  d="M128 64c-35.3 0-64 28.7-64 64v192h384V64zm384 0h-32v256h96V128c0-35.3-28.7-64-64-64"
                />
                <path
                  className="aps-icon-foreground"
                  d="M32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32v32c0 17.7 14.3 32 32 32h512c17.7 0 32-14.3 32-32v-32c17.7 0 32-14.3 32-32s-14.3-32-32-32z"
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
