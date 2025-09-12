import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ScannerTouchscreenIcon: React.FC<
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
                  d="M152 0h16c13.3 0 24 10.7 24 24v40h-64V24c0-13.3 10.7-24 24-24M0 160c0-35.3 28.7-64 64-64h224c35.3 0 64 28.7 64 64v288c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm64 16v256c0 8.8 7.2 16 16 16h192c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16M288 24c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24v40h-64zM240 0c8.8 0 16 7.2 16 16v48h-32V16c0-8.8 7.2-16 16-16m144 16c0-8.8 7.2-16 16-16s16 7.2 16 16v256c0 8.8-7.2 16-16 16s-16-7.2-16-16zm88-16h16c13.3 0 24 10.7 24 24v240c0 13.3-10.7 24-24 24h-16c-13.3 0-24-10.7-24-24V24c0-13.3 10.7-24 24-24"
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
                  d="M128 24v40h48V24c0-13.3-10.7-24-24-24s-24 10.7-24 24m176 0v40h48V24c0-13.3-10.7-24-24-24s-24 10.7-24 24M240 0c-8.8 0-16 7.2-16 16v48h32V16c0-8.8-7.2-16-16-16m144 16v256c0 8.8 7.2 16 16 16s16-7.2 16-16V16c0-8.8-7.2-16-16-16s-16 7.2-16 16M488 0c-13.3 0-24 10.7-24 24v240c0 13.3 10.7 24 24 24s24-10.7 24-24V24c0-13.3-10.7-24-24-24M64 144h224c8.8 0 16 7.2 16 16v288c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V160c0-8.8 7.2-16 16-16m0-48c-35.3 0-64 28.7-64 64v288c0 35.3 28.7 64 64 64h224c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64zm40 80c-13.3 0-24 10.7-24 24v208c0 13.3 10.7 24 24 24h144c13.3 0 24-10.7 24-24V200c0-13.3-10.7-24-24-24z"
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
                  d="M128 16v32c0 8.8 7.2 16 16 16s16-7.2 16-16V16c0-8.8-7.2-16-16-16s-16 7.2-16 16m192 0v32c0 8.8 7.2 16 16 16s16-7.2 16-16V16c0-8.8-7.2-16-16-16s-16 7.2-16 16M208 0c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16s16-7.2 16-16V16c0-8.8-7.2-16-16-16m192 16v256c0 8.8 7.2 16 16 16s16-7.2 16-16V16c0-8.8-7.2-16-16-16s-16 7.2-16 16m96-16c-8.8 0-16 7.2-16 16v256c0 8.8 7.2 16 16 16s16-7.2 16-16V16c0-8.8-7.2-16-16-16M288 128c17.7 0 32 14.3 32 32v288c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32zM64 96c-35.3 0-64 28.7-64 64v288c0 35.3 28.7 64 64 64h224c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64zm40 96h144c4.4 0 8 3.6 8 8v208c0 4.4-3.6 8-8 8H104c-4.4 0-8-3.6-8-8V200c0-4.4 3.6-8 8-8m-40 8v208c0 22.1 17.9 40 40 40h144c22.1 0 40-17.9 40-40V200c0-22.1-17.9-40-40-40H104c-22.1 0-40 17.9-40 40"
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
                  d="M136 0c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8s8-3.6 8-8V8c0-4.4-3.6-8-8-8m128 0c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8s8-3.6 8-8V8c0-4.4-3.6-8-8-8m120 8v272c0 4.4 3.6 8 8 8s8-3.6 8-8V8c0-4.4-3.6-8-8-8s-8 3.6-8 8m64 0v272c0 4.4 3.6 8 8 8s8-3.6 8-8V8c0-4.4-3.6-8-8-8s-8 3.6-8 8M320 8v48c0 4.4 3.6 8 8 8s8-3.6 8-8V8c0-4.4-3.6-8-8-8s-8 3.6-8 8M192 8v48c0 4.4 3.6 8 8 8s8-3.6 8-8V8c0-4.4-3.6-8-8-8s-8 3.6-8 8m312-8c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8s8-3.6 8-8V8c0-4.4-3.6-8-8-8M288 112c26.5 0 48 21.5 48 48v288c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V160c0-26.5 21.5-48 48-48zM64 96c-35.3 0-64 28.7-64 64v288c0 35.3 28.7 64 64 64h224c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64zm40 80h144c13.3 0 24 10.7 24 24v208c0 13.3-10.7 24-24 24H104c-13.3 0-24-10.7-24-24V200c0-13.3 10.7-24 24-24m-40 24v208c0 22.1 17.9 40 40 40h144c22.1 0 40-17.9 40-40V200c0-22.1-17.9-40-40-40H104c-22.1 0-40 17.9-40 40"
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
                  d="M64 96c-35.3 0-64 28.7-64 64v288c0 35.3 28.7 64 64 64h224c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64zm24 64h176c13.3 0 24 10.7 24 24v240c0 13.3-10.7 24-24 24H88c-13.3 0-24-10.7-24-24V184c0-13.3 10.7-24 24-24"
                />
                <path
                  className="aps-icon-foreground"
                  d="M152 0c-13.3 0-24 10.7-24 24v40h64V24c0-13.3-10.7-24-24-24zm160 0c-13.3 0-24 10.7-24 24v40h64V24c0-13.3-10.7-24-24-24zm-88 16v48h32V16c0-8.8-7.2-16-16-16s-16 7.2-16 16M400 0c-8.8 0-16 7.2-16 16v256c0 8.8 7.2 16 16 16s16-7.2 16-16V16c0-8.8-7.2-16-16-16m48 24v240c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V24c0-13.3-10.7-24-24-24h-16c-13.3 0-24 10.7-24 24M88 160c-13.3 0-24 10.7-24 24v240c0 13.3 10.7 24 24 24h176c13.3 0 24-10.7 24-24V184c0-13.3-10.7-24-24-24z"
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
