import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const PipeValveIcon: React.FC<
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
                  d="M288 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v12l-96-12c-17.7 0-32 14.3-32 32s14.3 32 32 32l128-16 128 16c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 12zm0 84.2-32-4-32 4V192H96v256h320V192H288zM32 160c-17.7 0-32 14.3-32 32v256c0 17.7 14.3 32 32 32s32-14.3 32-32V192c0-17.7-14.3-32-32-32m480 32c0-17.7-14.3-32-32-32s-32 14.3-32 32v256c0 17.7 14.3 32 32 32s32-14.3 32-32z"
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
                  d="M280 56c0-13.3-10.7-24-24-24s-24 10.7-24 24v21L128 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l104-13v77H48v-8c0-13.3-10.7-24-24-24S0 170.7 0 184v272c0 13.3 10.7 24 24 24s24-10.7 24-24v-8h416v8c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24s-24 10.7-24 24v8H280v-77l104 13c17.7 0 32-14.3 32-32s-14.3-32-32-32L280 77zM48 400V240h416v160z"
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
                  d="M272 32c0-8.8-7.2-16-16-16s-16 7.2-16 16v48h-96c-8.8 0-16 7.2-16 16s7.2 16 16 16h96v80H32v-16c0-8.8-7.2-16-16-16s-16 7.2-16 16v288c0 8.8 7.2 16 16 16s16-7.2 16-16v-16h448v16c0 8.8 7.2 16 16 16s16-7.2 16-16V176c0-8.8-7.2-16-16-16s-16 7.2-16 16v16H272v-80h96c8.8 0 16-7.2 16-16s-7.2-16-16-16h-96zm-16 192h224v192H32V224z"
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
                  d="M264 40c0-4.4-3.6-8-8-8s-8 3.6-8 8v30.6L144.8 54.3C119.2 50.3 96 70.1 96 96s23.2 45.7 48.8 41.7L248 121.4V192H64c0-17.7-14.3-32-32-32S0 174.3 0 192v256c0 17.7 14.3 32 32 32s32-14.3 32-32h384c0 17.7 14.3 32 32 32s32-14.3 32-32V192c0-17.7-14.3-32-32-32s-32 14.3-32 32H264v-70.6l103.2 16.3c25.6 4 48.8-15.7 48.8-41.7s-23.2-45.7-48.8-41.7L264 70.6zm184 168v224H64V208h384M248 86.8v18.3l-105.7 16.8c-15.9 2.5-30.3-9.8-30.3-25.9s14.4-28.4 30.3-25.9zm16 0 105.7-16.7C385.6 67.6 400 79.9 400 96s-14.4 28.4-30.3 25.9L264 105.2zM48 448c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm448-256v256c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16"
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
                  d="M256 32c17.7 0 32 14.3 32 32v12l-32 4-32-4V64c0-17.7 14.3-32 32-32m0 80 32 4v76h160v256H64V192h160v-76z"
                />
                <path
                  className="aps-icon-foreground"
                  d="m128 128 128-16 128 16c17.7 0 32-14.3 32-32s-14.3-32-32-32L256 80 128 64c-17.7 0-32 14.3-32 32s14.3 32 32 32m-96 32c-17.7 0-32 14.3-32 32v256c0 17.7 14.3 32 32 32s32-14.3 32-32V192c0-17.7-14.3-32-32-32m480 32c0-17.7-14.3-32-32-32s-32 14.3-32 32v256c0 17.7 14.3 32 32 32s32-14.3 32-32z"
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
