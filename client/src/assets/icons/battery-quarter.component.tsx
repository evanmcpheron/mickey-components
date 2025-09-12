import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BatteryQuarterIcon: React.FC<
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
                  d="M464 160c8.8 0 16 7.2 16 16v160c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16zM80 96c-44.2 0-80 35.8-80 80v160c0 44.2 35.8 80 80 80h384c44.2 0 80-35.8 80-80v-16c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32v-16c0-44.2-35.8-80-80-80zm112 96H96v128h96z"
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
                  d="M464 144c17.7 0 32 14.3 32 32v160c0 17.7-14.3 32-32 32H80c-17.7 0-32-14.3-32-32V176c0-17.7 14.3-32 32-32zM80 96c-44.2 0-80 35.8-80 80v160c0 44.2 35.8 80 80 80h384c44.2 0 80-35.8 80-80v-16c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32v-16c0-44.2-35.8-80-80-80zm112 96H96v128h96z"
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
                  d="M432 128c26.5 0 48 21.5 48 48v160c0 26.5-21.5 48-48 48H80c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48zM80 96c-44.2 0-80 35.8-80 80v160c0 44.2 35.8 80 80 80h352c44.2 0 80-35.8 80-80V176c0-44.2-35.8-80-80-80zm496 112c0-8.8-7.2-16-16-16s-16 7.2-16 16v96c0 8.8 7.2 16 16 16s16-7.2 16-16zm-464-16h32c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-96c0-8.8 7.2-16 16-16m-48 16v96c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48v-96c0-26.5-21.5-48-48-48h-32c-26.5 0-48 21.5-48 48"
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
                  d="M448 112c35.3 0 64 28.7 64 64v160c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V176c0-35.3 28.7-64 64-64zm80 224v-16h16c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32h-16v-16c0-44.2-35.8-80-80-80H80c-44.2 0-80 35.8-80 80v160c0 44.2 35.8 80 80 80h368c44.2 0 80-35.8 80-80m0-32v-96h16c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16zM112 176h32c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-96c0-17.7 14.3-32 32-32m-48 32v96c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48v-96c0-26.5-21.5-48-48-48h-32c-26.5 0-48 21.5-48 48"
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
                  d="M80 160c-8.8 0-16 7.2-16 16v160c0 8.8 7.2 16 16 16h384c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16zM0 176c0-44.2 35.8-80 80-80h384c44.2 0 80 35.8 80 80v16c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32v16c0 44.2-35.8 80-80 80H80c-44.2 0-80-35.8-80-80z"
                />
                <path className="aps-icon-foreground" d="M96 192h96v128H96z" />
              </svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
