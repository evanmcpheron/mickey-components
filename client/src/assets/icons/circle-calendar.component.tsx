import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CircleCalendarIcon: React.FC<
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
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512M208 96c8.8 0 16 7.2 16 16v16h64v-16c0-8.8 7.2-16 16-16s16 7.2 16 16v16h32c17.7 0 32 14.3 32 32v32H128v-32c0-17.7 14.3-32 32-32h32v-16c0-8.8 7.2-16 16-16m-80 256V224h256v128c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32"
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
                  d="M464 256a208 208 0 1 0-416 0 208 208 0 1 0 416 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m208-144c8.8 0 16 7.2 16 16v16h64v-16c0-8.8 7.2-16 16-16s16 7.2 16 16v16h16c26.5 0 48 21.5 48 48v128c0 26.5-21.5 48-48 48H176c-26.5 0-48-21.5-48-48V192c0-26.5 21.5-48 48-48h16v-16c0-8.8 7.2-16 16-16m-32 208h160v-96H176z"
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
                  d="M480 256a224 224 0 1 0-448 0 224 224 0 1 0 448 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0M208 96c8.8 0 16 7.2 16 16v16h64v-16c0-8.8 7.2-16 16-16s16 7.2 16 16v16h16c26.5 0 48 21.5 48 48v160c0 26.5-21.5 48-48 48H176c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48h16v-16c0-8.8 7.2-16 16-16m-48 80v16h192v-16c0-8.8-7.2-16-16-16H176c-8.8 0-16 7.2-16 16m192 48H160v112c0 8.8 7.2 16 16 16h160c8.8 0 16-7.2 16-16z"
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
                  d="M496 256a240 240 0 1 0-480 0 240 240 0 1 0 480 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0M200 96c4.4 0 8 3.6 8 8v24h96v-24c0-4.4 3.6-8 8-8s8 3.6 8 8v24h16c26.5 0 48 21.5 48 48v160c0 26.5-21.5 48-48 48H176c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48h16v-24c0-4.4 3.6-8 8-8m-8 72v-24h-16c-17.7 0-32 14.3-32 32v32h224v-32c0-17.7-14.3-32-32-32h-16v24c0 4.4-3.6 8-8 8s-8-3.6-8-8v-24h-96v24c0 4.4-3.6 8-8 8s-8-3.6-8-8m176 56H144v112c0 17.7 14.3 32 32 32h160c17.7 0 32-14.3 32-32z"
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
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512M208 96c8.8 0 16 7.2 16 16v16h64v-16c0-8.8 7.2-16 16-16s16 7.2 16 16v16h32c17.7 0 32 14.3 32 32v192c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h32v-16c0-8.8 7.2-16 16-16"
                />
                <path
                  className="aps-icon-foreground"
                  d="M192 112c0-8.8 7.2-16 16-16s16 7.2 16 16v16h64v-16c0-8.8 7.2-16 16-16s16 7.2 16 16v16h32c17.7 0 32 14.3 32 32v64H128v-64c0-17.7 14.3-32 32-32h32z"
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
