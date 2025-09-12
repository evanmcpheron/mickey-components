import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CircleVideoIcon: React.FC<
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
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512M128 192c0-17.7 14.3-32 32-32h128c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32zm268.9 125.9L352 288v-64l44.9-29.9c2-1.3 4.4-2.1 6.8-2.1 6.8 0 12.3 5.5 12.3 12.3v103.4c0 6.8-5.5 12.3-12.3 12.3-2.4 0-4.8-.7-6.8-2.1"
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
                  d="M464 256a208 208 0 1 0-416 0 208 208 0 1 0 416 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m144-56c0-13.3 10.7-24 24-24h96c13.3 0 24 10.7 24 24v112c0 13.3-10.7 24-24 24h-96c-13.3 0-24-10.7-24-24zm220.9 117.9L320 288v-64l44.9-29.9c2-1.3 4.4-2.1 6.8-2.1 6.8 0 12.3 5.5 12.3 12.3v103.4c0 6.8-5.5 12.3-12.3 12.3-2.4 0-4.8-.7-6.8-2.1"
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
                  d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m32-320v128H160V192zm32 9.8V192c0-17.7-14.3-32-32-32H160c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32v-9.8l74.9 25c4.9 1.6 10.2.8 14.4-2.2s6.6-7.8 6.6-13V192c0-5.1-2.5-10-6.6-13s-9.5-3.8-14.4-2.2zm0 33.7 64-21.3v83.6l-64-21.3z"
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
                  d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m32-336c8.8 0 16 7.2 16 16v128c0 8.8-7.2 16-16 16H160c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16zm-128-16c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32v-18.8l60.7 18.2c1.4.4 2.8.6 4.3.6 8.3 0 15-6.7 15-15v-98c0-8.3-6.7-15-15-15-1.5 0-2.9.2-4.3.6L320 210.8V192c0-17.7-14.3-32-32-32zm160 67.6 64-19.2v95.3l-64-19.2z"
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
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512M128 192c0-17.7 14.3-32 32-32h128c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32zm268.9 125.9L352 288v-64l44.9-29.9c2-1.3 4.4-2.1 6.8-2.1 6.8 0 12.3 5.5 12.3 12.3v103.4c0 6.8-5.5 12.3-12.3 12.3-2.4 0-4.8-.7-6.8-2.1"
                />
                <path
                  className="aps-icon-foreground"
                  d="M160 160c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm192 128 44.9 29.9c2 1.3 4.4 2.1 6.8 2.1 6.8 0 12.3-5.5 12.3-12.3V204.3c0-6.8-5.5-12.3-12.3-12.3-2.4 0-4.8.7-6.8 2.1L352 224z"
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
