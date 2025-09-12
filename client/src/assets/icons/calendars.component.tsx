import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CalendarsIcon: React.FC<
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
                  d="M224 0c-17.7 0-32 14.3-32 32v32h-48c-26.5 0-48 21.5-48 48v48h416v-48c0-26.5-21.5-48-48-48h-48V32c0-17.7-14.3-32-32-32s-32 14.3-32 32v32h-96V32c0-17.7-14.3-32-32-32M96 192v176c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V192zm-48-8c0-13.3-10.7-24-24-24S0 170.7 0 184v208c0 66.3 53.7 120 120 120h272c13.3 0 24-10.7 24-24s-10.7-24-24-24H120c-39.8 0-72-32.2-72-72z"
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
                  d="M224 0c13.3 0 24 10.7 24 24v40h112V24c0-13.3 10.7-24 24-24s24 10.7 24 24v40h40c35.3 0 64 28.7 64 64v224c0 35.3-28.7 64-64 64H160c-35.3 0-64-28.7-64-64V128c0-35.3 28.7-64 64-64h40V24c0-13.3 10.7-24 24-24m-80 192v160c0 8.8 7.2 16 16 16h288c8.8 0 16-7.2 16-16V192zm-96-8v208c0 39.8 32.2 72 72 72h272c13.3 0 24 10.7 24 24s-10.7 24-24 24H120C53.7 512 0 458.3 0 392V184c0-13.3 10.7-24 24-24s24 10.7 24 24"
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
                  d="M208 0c8.8 0 16 7.2 16 16v48h160V16c0-8.8 7.2-16 16-16s16 7.2 16 16v48h32c35.3 0 64 28.7 64 64v224c0 35.3-28.7 64-64 64H160c-35.3 0-64-28.7-64-64V128c0-35.3 28.7-64 64-64h32V16c0-8.8 7.2-16 16-16m-48 96c-17.7 0-32 14.3-32 32v32h352v-32c0-17.7-14.3-32-32-32zm320 96H128v160c0 17.7 14.3 32 32 32h288c17.7 0 32-14.3 32-32zM32 208v176c0 53 43 96 96 96h240c8.8 0 16 7.2 16 16s-7.2 16-16 16H128C57.3 512 0 454.7 0 384V208c0-8.8 7.2-16 16-16s16 7.2 16 16"
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
                  d="M216 0c4.4 0 8 3.6 8 8v56h160V8c0-4.4 3.6-8 8-8s8 3.6 8 8v56h48c35.3 0 64 28.7 64 64v224c0 35.3-28.7 64-64 64H160c-35.3 0-64-28.7-64-64V128c0-35.3 28.7-64 64-64h48V8c0-4.4 3.6-8 8-8m-8 120V80h-48c-26.5 0-48 21.5-48 48v48h384v-48c0-26.5-21.5-48-48-48h-48v40c0 4.4-3.6 8-8 8s-8-3.6-8-8V80H224v40c0 4.4-3.6 8-8 8s-8-3.6-8-8m288 72H112v160c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48zM0 224c0-29.8 20.4-54.9 48-62v16.7c-18.6 6.6-32 24.4-32 45.3v224c0 26.5 21.5 48 48 48h288c20.9 0 38.7-13.4 45.3-32H414c-7.1 27.6-32.2 48-62 48H64c-35.3 0-64-28.7-64-64z"
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
                  d="M96 192h416v176c0 26.5-21.5 48-48 48H144c-26.5 0-48-21.5-48-48z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M224 0c-17.7 0-32 14.3-32 32v32h-48c-26.5 0-48 21.5-48 48v80h416v-80c0-26.5-21.5-48-48-48h-48V32c0-17.7-14.3-32-32-32s-32 14.3-32 32v32h-96V32c0-17.7-14.3-32-32-32M48 184c0-13.3-10.7-24-24-24S0 170.7 0 184v208c0 66.3 53.7 120 120 120h272c13.3 0 24-10.7 24-24s-10.7-24-24-24H120c-39.8 0-72-32.2-72-72z"
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
