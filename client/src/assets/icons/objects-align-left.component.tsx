import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ObjectsAlignLeftIcon: React.FC<
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
                  d="M0 24v464c0 13.3 10.7 24 24 24s24-10.7 24-24V24C48 10.7 37.3 0 24 0S0 10.7 0 24m176 40c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-64c0-26.5-21.5-48-48-48zm0 224c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48v-64c0-26.5-21.5-48-48-48z"
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
                  d="M0 24C0 10.7 10.7 0 24 0s24 10.7 24 24v464c0 13.3-10.7 24-24 24S0 501.3 0 488zm176 152h288v-64H176zm-48-64c0-26.5 21.5-48 48-48h288c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H176c-26.5 0-48-21.5-48-48zm48 288h160v-64H176zm-48-64c0-26.5 21.5-48 48-48h160c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H176c-26.5 0-48-21.5-48-48z"
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
                  d="M0 16C0 7.2 7.2 0 16 0s16 7.2 16 16v480c0 8.8-7.2 16-16 16s-16-7.2-16-16zm160 160c0 8.8 7.2 16 16 16h288c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16H176c-8.8 0-16 7.2-16 16zm-32-64c0-26.5 21.5-48 48-48h288c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H176c-26.5 0-48-21.5-48-48zm32 288c0 8.8 7.2 16 16 16h160c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16H176c-8.8 0-16 7.2-16 16zm-32-64c0-26.5 21.5-48 48-48h160c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H176c-26.5 0-48-21.5-48-48z"
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
                  d="M0 8c0-4.4 3.6-8 8-8s8 3.6 8 8v496c0 4.4-3.6 8-8 8s-8-3.6-8-8zm112 168c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32H144c-17.7 0-32 14.3-32 32zm-16-64c0-26.5 21.5-48 48-48h320c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H144c-26.5 0-48-21.5-48-48zm16 288c0 17.7 14.3 32 32 32h192c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32H144c-17.7 0-32 14.3-32 32zm-16-64c0-26.5 21.5-48 48-48h192c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H144c-26.5 0-48-21.5-48-48z"
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
                  d="M128 112c0-26.5 21.5-48 48-48h288c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H176c-26.5 0-48-21.5-48-48zm0 224c0-26.5 21.5-48 48-48h160c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H176c-26.5 0-48-21.5-48-48z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M24 0C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24s24-10.7 24-24V24C48 10.7 37.3 0 24 0"
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
