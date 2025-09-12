import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const PrescriptionIcon: React.FC<
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
                  d="M32 0C14.3 0 0 14.3 0 32v256c0 17.7 14.3 32 32 32s32-14.3 32-32v-64h50.7l128 128-105.3 105.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L288 397.3l105.4 105.3c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L333.3 352l105.3-105.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 306.7l-85.8-85.8C251.4 209.1 288 164.8 288 112 288 50.1 237.9 0 176 0zm144 160H64V64h112c26.5 0 48 21.5 48 48s-21.5 48-48 48"
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
                  d="M24 0C10.7 0 0 10.7 0 24v272c0 13.3 10.7 24 24 24s24-10.7 24-24v-72h78.1l128 128L135 471c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l119-119L407 505c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-119-119L441 233c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-119 119-95.3-95.3c53.8-8.1 95.2-54.6 95.2-110.8C288 50.1 237.9 0 176 0zm152 176H48V48h128c35.3 0 64 28.7 64 64s-28.7 64-64 64"
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
                  d="M31.1 0C13.9 0 0 13.9 0 31.1V304c0 8.8 7.2 16 16 16s16-7.2 16-16v-80h105.4l128 128-132.7 132.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L288 374.6l132.7 132.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L310.6 352l132.7-132.7c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L288 329.4 182.4 223.8C241.3 220.5 288 171.7 288 112 288 50.1 237.9 0 176 0zM144 192H32V32h144c44.2 0 80 35.8 80 80s-35.8 80-80 80z"
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
                  d="M24 0C10.7 0 0 10.7 0 24v288c0 4.4 3.6 8 8 8s8-3.6 8-8v-88h132.7l128 128-146.4 146.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L288 363.3l146.3 146.4c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L299.3 352l146.4-146.3c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L288 340.7 171.3 224h4.7c61.9 0 112-50.1 112-112S237.9 0 176 0zm128 208H16V24c0-4.4 3.6-8 8-8h152c53 0 96 43 96 96s-43 96-96 96z"
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
                  d="M438.6 201.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l256-256c12.5-12.5 32.8-12.5 45.3 0"
                />
                <path
                  className="aps-icon-foreground"
                  d="M0 32C0 14.3 14.3 0 32 0h144c61.9 0 112 50.1 112 112 0 52.8-36.6 97.1-85.8 108.9l85.8 85.8-45.3 45.3-128-128H64v64c0 17.7-14.3 32-32 32S0 305.7 0 288V32m288 365.3 45.3-45.3 105.3 105.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0zM64 160h112c26.5 0 48-21.5 48-48s-21.5-48-48-48H64z"
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
