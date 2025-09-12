import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BuildingFlagIcon: React.FC<
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
                  d="M48 0C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h96v-80c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm16 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16m80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16m80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16M448 0c-17.7 0-32 14.3-32 32v480h64V192h144c8.8 0 16-7.2 16-16V48c0-8.8-7.2-16-16-16H480c0-17.7-14.3-32-32-32"
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
                  d="M64 48c-8.8 0-16 7.2-16 16v384c0 8.8 7.2 16 16 16h80v-64c0-26.5 21.5-48 48-48s48 21.5 48 48v64h80c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16zM0 64C0 28.7 28.7 0 64 0h256c35.3 0 64 28.7 64 64v384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm88 40c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16zm144-16h48c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16v-48c0-8.8 7.2-16 16-16M88 232c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16zm144-16h48c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16v-48c0-8.8 7.2-16 16-16M448 0c17.7 0 32 14.3 32 32h144c8.8 0 16 7.2 16 16v128c0 8.8-7.2 16-16 16H480v320h-64V32c0-17.7 14.3-32 32-32"
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
                  d="M64 32c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h64v-64c0-35.3 28.7-64 64-64s64 28.7 64 64v64h64c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32zm160 384c0-17.7-14.3-32-32-32s-32 14.3-32 32v64h64zm-96 96H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0h256c35.3 0 64 28.7 64 64v384c0 35.3-28.7 64-64 64H128M64 120c0-13.3 10.7-24 24-24h48c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24H88c-13.3 0-24-10.7-24-24zm32 8v32h32v-32zm152-32h48c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24h-48c-13.3 0-24-10.7-24-24v-48c0-13.3 10.7-24 24-24m8 64h32v-32h-32zM64 248c0-13.3 10.7-24 24-24h48c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24H88c-13.3 0-24-10.7-24-24zm32 8v32h32v-32zm152-32h48c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24h-48c-13.3 0-24-10.7-24-24v-48c0-13.3 10.7-24 24-24m8 64h32v-32h-32zM432 0c8.8 0 16 7.2 16 16v16h160c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H448v272c0 8.8-7.2 16-16 16s-16-7.2-16-16V16c0-8.8 7.2-16 16-16m16 192h160V64H448z"
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
                  d="M48 16c-17.7 0-32 14.3-32 32v416c0 17.7 14.3 32 32 32h96v-80c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c17.7 0 32-14.3 32-32V48c0-17.7-14.3-32-32-32zm176 480v-80c0-17.7-14.3-32-32-32s-32 14.3-32 32v80zm-80 16H48c-26.5 0-48-21.5-48-48V48C0 21.5 21.5 0 48 0h288c26.5 0 48 21.5 48 48v416c0 26.5-21.5 48-48 48H144m-40-280h32c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24m-8 24v32c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8v-32c0-4.4-3.6-8-8-8h-32c-4.4 0-8 3.6-8 8m128 0c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24zm24-8c-4.4 0-8 3.6-8 8v32c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8v-32c0-4.4-3.6-8-8-8zM104 104h32c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24m-8 24v32c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8v-32c0-4.4-3.6-8-8-8h-32c-4.4 0-8 3.6-8 8m128 0c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24zm24-8c-4.4 0-8 3.6-8 8v32c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8v-32c0-4.4-3.6-8-8-8zM424 0c4.4 0 8 3.6 8 8v24h184c13.3 0 24 10.7 24 24v128c0 13.3-10.7 24-24 24H432v296c0 4.4-3.6 8-8 8s-8-3.6-8-8V8c0-4.4 3.6-8 8-8m8 192h184c4.4 0 8-3.6 8-8V56c0-4.4-3.6-8-8-8H432z"
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
                  d="M0 48C0 21.5 21.5 0 48 0h288c26.5 0 48 21.5 48 48v416c0 26.5-21.5 48-48 48h-96v-80c0-26.5-21.5-48-48-48s-48 21.5-48 48v80H48c-26.5 0-48-21.5-48-48zm80 176c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm80 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16m112-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM64 112v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16m112-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm80 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16"
                />
                <path
                  className="aps-icon-foreground"
                  d="M480 32c0-17.7-14.3-32-32-32s-32 14.3-32 32v480h64V192h144c8.8 0 16-7.2 16-16V48c0-8.8-7.2-16-16-16z"
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
