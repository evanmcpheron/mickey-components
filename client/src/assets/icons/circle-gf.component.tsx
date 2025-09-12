import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CircleGfIcon: React.FC<
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
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-72-384c39.8 0 72 32.2 72 72 0 13.3-10.7 24-24 24s-24-10.7-24-24-10.7-24-24-24-24 10.7-24 24v112c0 13.3 10.7 24 24 24s24-10.7 24-24v-8c-13.3 0-24-10.7-24-24s10.7-24 24-24h24c13.3 0 24 10.7 24 24v32c0 39.8-32.2 72-72 72s-72-32.2-72-72V200c0-39.8 32.2-72 72-72m104 24c0-13.3 10.7-24 24-24h64c13.3 0 24 10.7 24 24s-10.7 24-24 24h-40v64h24c13.3 0 24 10.7 24 24s-10.7 24-24 24h-24v72c0 13.3-10.7 24-24 24s-24-10.7-24-24V152"
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
                  d="M464 256a208 208 0 1 0-416 0 208 208 0 1 0 416 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m184-128c39.8 0 72 32.2 72 72 0 13.3-10.7 24-24 24s-24-10.7-24-24-10.7-24-24-24-24 10.7-24 24v112c0 13.3 10.7 24 24 24s24-10.7 24-24v-8c-13.3 0-24-10.7-24-24s10.7-24 24-24h24c13.3 0 24 10.7 24 24v32c0 39.8-32.2 72-72 72s-72-32.2-72-72V200c0-39.8 32.2-72 72-72m104 24c0-13.3 10.7-24 24-24h64c13.3 0 24 10.7 24 24s-10.7 24-24 24h-40v64h24c13.3 0 24 10.7 24 24s-10.7 24-24 24h-24v72c0 13.3-10.7 24-24 24s-24-10.7-24-24V152"
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
                  d="M480 256a224 224 0 1 0-448 0 224 224 0 1 0 448 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m192-128c35.3 0 64 28.7 64 64v8c0 8.8-7.2 16-16 16s-16-7.2-16-16v-8c0-17.7-14.3-32-32-32s-32 14.3-32 32v128c0 17.7 14.3 32 32 32s32-14.3 32-32v-32h-16c-8.8 0-16-7.2-16-16s7.2-16 16-16h32c8.8 0 16 7.2 16 16v48c0 35.3-28.7 64-64 64s-64-28.7-64-64V192c0-35.3 28.7-64 64-64m96 16c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48v96h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32v80c0 8.8-7.2 16-16 16s-16-7.2-16-16z"
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
                  d="M496 256a240 240 0 1 0-480 0 240 240 0 1 0 480 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m192-112c35.3 0 64 28.7 64 64v8c0 4.4-3.6 8-8 8s-8-3.6-8-8v-8c0-26.5-21.5-48-48-48s-48 21.5-48 48v96c0 26.5 21.5 48 48 48s48-21.5 48-48v-16h-40c-4.4 0-8-3.6-8-8s3.6-8 8-8h48c4.4 0 8 3.6 8 8v24c0 35.3-28.7 64-64 64s-64-28.7-64-64v-96c0-35.3 28.7-64 64-64m96 8c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8s-3.6 8-8 8h-72v96h56c4.4 0 8 3.6 8 8s-3.6 8-8 8h-56v88c0 4.4-3.6 8-8 8s-8-3.6-8-8V152"
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
                  d="M0 256a256 256 0 1 0 512 0 256 256 0 1 0-512 0m112-56c0-39.8 32.2-72 72-72s72 32.2 72 72c0 13.3-10.7 24-24 24s-24-10.7-24-24-10.7-24-24-24-24 10.7-24 24v112c0 13.3 10.7 24 24 24s24-10.7 24-24v-8c-13.3 0-24-10.7-24-24s10.7-24 24-24h24c13.3 0 24 10.7 24 24v32c0 39.8-32.2 72-72 72s-72-32.2-72-72zm176-48c0-13.3 10.7-24 24-24h64c13.3 0 24 10.7 24 24s-10.7 24-24 24h-40v64h24c13.3 0 24 10.7 24 24s-10.7 24-24 24h-24v72c0 13.3-10.7 24-24 24s-24-10.7-24-24V152"
                />
                <path
                  className="aps-icon-foreground"
                  d="M112 200c0-39.8 32.2-72 72-72s72 32.2 72 72c0 13.3-10.7 24-24 24s-24-10.7-24-24-10.7-24-24-24-24 10.7-24 24v112c0 13.3 10.7 24 24 24s24-10.7 24-24v-8c-13.3 0-24-10.7-24-24s10.7-24 24-24h24c13.3 0 24 10.7 24 24v32c0 39.8-32.2 72-72 72s-72-32.2-72-72zm176-48c0-13.3 10.7-24 24-24h64c13.3 0 24 10.7 24 24s-10.7 24-24 24h-40v64h24c13.3 0 24 10.7 24 24s-10.7 24-24 24h-24v72c0 13.3-10.7 24-24 24s-24-10.7-24-24V152"
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
