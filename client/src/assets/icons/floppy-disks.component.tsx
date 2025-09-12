import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const FloppyDisksIcon: React.FC<
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
                  d="M96 56c0-30.9 25.1-56 56-56h218.7c14.9 0 29.1 5.9 39.6 16.4l85.3 85.3c10.5 10.5 16.4 24.7 16.4 39.6V360c0 30.9-25.1 56-56 56H152c-30.9 0-56-25.1-56-56zm96 8c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h160c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm176 224a64 64 0 1 0-128 0 64 64 0 1 0 128 0M48 120v256c0 48.6 39.4 88 88 88h256c13.3 0 24 10.7 24 24s-10.7 24-24 24H136C60.9 512 0 451.1 0 376V120c0-13.3 10.7-24 24-24s24 10.7 24 24"
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
                  d="M144 352c0 8.8 7.2 16 16 16h288c8.8 0 16-7.2 16-16V138.5c0-4.2-1.7-8.3-4.7-11.3l33.9-33.9-33.9 33.9-74.5-74.5-.8-.8V120c0 13.3-10.7 24-24 24H200c-13.3 0-24-10.7-24-24V48h-16c-8.8 0-16 7.2-16 16zM224 0h149.5c17 0 33.3 6.7 45.3 18.7l74.5 74.5c12 12 18.7 28.3 18.7 45.3V352c0 35.3-28.7 64-64 64H160c-35.3 0-64-28.7-64-64V64c0-35.3 28.7-64 64-64h64m0 48v48h112V48zM48 120v256c0 48.6 39.4 88 88 88h256c13.3 0 24 10.7 24 24s-10.7 24-24 24H136C60.9 512 0 451.1 0 376V120c0-13.3 10.7-24 24-24s24 10.7 24 24m192 136a64 64 0 1 1 128 0 64 64 0 1 1-128 0"
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
                  d="M128 352c0 17.7 14.3 32 32 32h288c17.7 0 32-14.3 32-32V138.5c0-8.5-3.4-16.6-9.4-22.6l-74.5-74.5c-3.4-3.4-7.6-6-12.1-7.6V112c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V32c-17.7 0-32 14.3-32 32zM352 32H192v80h160zM192 0h181.5c17 0 33.3 6.7 45.3 18.7l74.5 74.5c12 12 18.7 28.3 18.7 45.3V352c0 35.3-28.7 64-64 64H160c-35.3 0-64-28.7-64-64V64c0-35.3 28.7-64 64-64zM32 112v256c0 61.9 50.1 112 112 112h256c8.8 0 16 7.2 16 16s-7.2 16-16 16H144C64.5 512 0 447.5 0 368V112c0-8.8 7.2-16 16-16s16 7.2 16 16m264 192a40 40 0 1 0 0-80 40 40 0 1 0 0 80m0-112a72 72 0 1 1 0 144 72 72 0 1 1 0-144"
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
                  d="M112 352V64c0-26.5 21.5-48 48-48v96c0 17.7 14.3 32 32 32h160c17.7 0 32-14.3 32-32V17.2c8.8 2 17 6.4 23.4 12.9l74.5 74.5c9 9 14.1 21.2 14.1 33.9V352c0 26.5-21.5 48-48 48H160c-26.5 0-48-21.5-48-48M176 0h-16c-35.3 0-64 28.7-64 64v288c0 35.3 28.7 64 64 64h288c35.3 0 64-28.7 64-64V138.5c0-17-6.7-33.3-18.7-45.3l-74.6-74.5C406.7 6.7 390.5 0 373.5 0zm16 128c-8.8 0-16-7.2-16-16V16h192v96c0 8.8-7.2 16-16 16zm48 144a64 64 0 1 1 128 0 64 64 0 1 1-128 0m144 0a80 80 0 1 0-160 0 80 80 0 1 0 160 0M0 160v288c0 35.3 28.7 64 64 64h288c35.3 0 64-28.7 64-64h-16c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V160c0-26.5 21.5-48 48-48V96c-35.3 0-64 28.7-64 64"
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
                  d="M48 120c0-13.3-10.7-24-24-24S0 106.7 0 120v256c0 75.1 60.9 136 136 136h256c13.3 0 24-10.7 24-24s-10.7-24-24-24H136c-48.6 0-88-39.4-88-88zm256 232a64 64 0 1 0 0-128 64 64 0 1 0 0 128"
                />
                <path
                  className="aps-icon-foreground"
                  d="M152 0c-30.9 0-56 25.1-56 56v304c0 30.9 25.1 56 56 56h304c30.9 0 56-25.1 56-56V141.3c0-14.9-5.9-29.1-16.4-39.6l-85.3-85.3A55.92 55.92 0 0 0 370.7 0zm8 96c0-17.7 14.3-32 32-32h160c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32zm144 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128"
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
