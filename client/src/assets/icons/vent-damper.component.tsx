import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const VentDamperIcon: React.FC<
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
                  d="M64 128c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v32h32c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32h-32v32c0 35.3-28.7 64-64 64H128c-35.3 0-64-28.7-64-64v-32H32c-17.7 0-32-14.3-32-32V192c0-17.7 14.3-32 32-32h32zm120 16c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24zm0 88c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24zm0 88c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24z"
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
                  d="M512 112c8.8 0 16 7.2 16 16v256c0 8.8-7.2 16-16 16H128c-8.8 0-16-7.2-16-16V128c0-8.8 7.2-16 16-16zM128 64c-35.3 0-64 28.7-64 64v32H32c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h32v32c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64v-32h32c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32h-32v-32c0-35.3-28.7-64-64-64zm56 80c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24zm0 88c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24zm0 88c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24z"
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
                  d="M512 96H128c-17.7 0-32 14.3-32 32v256c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32M48 128h16c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64h16c26.5 0 48 21.5 48 48v160c0 26.5-21.5 48-48 48h-16c0 35.3-28.7 64-64 64H128c-35.3 0-64-28.7-64-64H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48m544 224c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16h-16v192zm-544 0h16V160H48c-8.8 0-16 7.2-16 16v160c0 8.8 7.2 16 16 16m128-192h288c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16m0 80h288c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16m0 80h288c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16"
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
                  d="M128 80c-26.5 0-48 21.5-48 48v256c0 26.5 21.5 48 48 48h384c26.5 0 48-21.5 48-48V128c0-26.5-21.5-48-48-48zm384-16c35.3 0 64 28.7 64 64h24c22.1 0 40 17.9 40 40v176c0 22.1-17.9 40-40 40h-24c0 35.3-28.7 64-64 64H128c-35.3 0-64-28.7-64-64H40c-22.1 0-40-17.9-40-40V168c0-22.1 17.9-40 40-40h24c0-35.3 28.7-64 64-64zm88 304c13.3 0 24-10.7 24-24V168c0-13.3-10.7-24-24-24h-24v224zM64 144H40c-13.3 0-24 10.7-24 24v176c0 13.3 10.7 24 24 24h24zm80-16c-8.8 0-16 7.2-16 16v224c0 8.8 7.2 16 16 16h352c8.8 0 16-7.2 16-16V144c0-8.8-7.2-16-16-16zm-32 16c0-17.7 14.3-32 32-32h352c17.7 0 32 14.3 32 32v224c0 17.7-14.3 32-32 32H144c-17.7 0-32-14.3-32-32zm72 32h272c4.4 0 8 3.6 8 8s-3.6 8-8 8H184c-4.4 0-8-3.6-8-8s3.6-8 8-8m0 72h272c4.4 0 8 3.6 8 8s-3.6 8-8 8H184c-4.4 0-8-3.6-8-8s3.6-8 8-8m0 72h272c4.4 0 8 3.6 8 8s-3.6 8-8 8H184c-4.4 0-8-3.6-8-8s3.6-8 8-8"
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
                  d="M64 160H32c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h32zm512 192h32c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32h-32z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M128 64c-35.3 0-64 28.7-64 64v256c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zm56 80h272c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-13.3 0-24-10.7-24-24s10.7-24 24-24m0 88h272c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-13.3 0-24-10.7-24-24s10.7-24 24-24m0 88h272c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-13.3 0-24-10.7-24-24s10.7-24 24-24"
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
