import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const TombstoneIcon: React.FC<
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
                  d="M32 192C32 86 118 0 224 0s192 86 192 192v224H32zM0 480c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32m248-360c0-13.3-10.7-24-24-24s-24 10.7-24 24v40h-48c-13.3 0-24 10.7-24 24s10.7 24 24 24h48v120c0 13.3 10.7 24 24 24s24-10.7 24-24V208h48c13.3 0 24-10.7 24-24s-10.7-24-24-24h-48z"
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
                  d="M368 432V192c0-79.5-64.5-144-144-144S80 112.5 80 192v240H32V192C32 86 118 0 224 0s192 86 192 192v240zM0 488c0-13.3 10.7-24 24-24h400c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24m248-336v40h48c13.3 0 24 10.7 24 24s-10.7 24-24 24h-48v120c0 13.3-10.7 24-24 24s-24-10.7-24-24V240h-48c-13.3 0-24-10.7-24-24s10.7-24 24-24h48v-40c0-13.3 10.7-24 24-24s24 10.7 24 24"
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
                  d="M384 448V192c0-88.4-71.6-160-160-160S64 103.6 64 192v256H32V192C32 86 118 0 224 0s192 86 192 192v256zM0 496c0-8.8 7.2-16 16-16h416c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16-7.2-16-16m240-352v64h64c8.8 0 16 7.2 16 16s-7.2 16-16 16h-64v128c0 8.8-7.2 16-16 16s-16-7.2-16-16V240h-64c-8.8 0-16-7.2-16-16s7.2-16 16-16h64v-64c0-8.8 7.2-16 16-16s16 7.2 16 16"
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
                  d="M400 464V192c0-97.2-78.8-176-176-176S48 94.8 48 192v272H32V192C32 86 118 0 224 0s192 86 192 192v272zM0 504c0-4.4 3.6-8 8-8h432c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.4 0-8-3.6-8-8m232-368v72h80c4.4 0 8 3.6 8 8s-3.6 8-8 8h-80v152c0 4.4-3.6 8-8 8s-8-3.6-8-8V224h-80c-4.4 0-8-3.6-8-8s3.6-8 8-8h80v-72c0-4.4 3.6-8 8-8s8 3.6 8 8"
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
                  d="M224 0C118 0 32 86 32 192v256h384V192C416 86 330 0 224 0m24 152v40h48c13.3 0 24 10.7 24 24s-10.7 24-24 24h-48v120c0 13.3-10.7 24-24 24s-24-10.7-24-24V240h-48c-13.3 0-24-10.7-24-24s10.7-24 24-24h48v-40c0-13.3 10.7-24 24-24s24 10.7 24 24"
                />
                <path
                  className="aps-icon-foreground"
                  d="M248 152c0-13.3-10.7-24-24-24s-24 10.7-24 24v40h-48c-13.3 0-24 10.7-24 24s10.7 24 24 24h48v120c0 13.3 10.7 24 24 24s24-10.7 24-24V240h48c13.3 0 24-10.7 24-24s-10.7-24-24-24h-48zM32 448c-17.7 0-32 14.3-32 32s14.3 32 32 32h384c17.7 0 32-14.3 32-32s-14.3-32-32-32z"
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
