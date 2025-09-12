import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const PesetaSignIcon: React.FC<
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
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M64 32c-17.7 0-32 14.3-32 32v96c-17.7 0-32 14.3-32 32s14.3 32 32 32v224c0 17.7 14.3 32 32 32s32-14.3 32-32v-96h96c77.4 0 142-55 156.8-128h3.2c17.7 0 32-14.3 32-32s-14.3-32-32-32h-3.2C334 87 269.4 32 192 32zm218.5 128H96V96h96c41.8 0 77.4 26.7 90.5 64M96 224h186.5c-13.2 37.3-48.7 64-90.5 64H96z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M93.9 32C68.6 32 48 52.6 48 77.9V176H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h24v232c0 13.3 10.7 24 24 24s24-10.7 24-24V352h96c77.4 0 142-55 156.8-128H360c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8.8C343.2 95.1 275 32 192 32zm209 144H96V80h96c56.4 0 103.1 41.7 110.9 96M96 224h203.4c-13.8 46.3-56.6 80-107.4 80H96z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M72.7 32C50.2 32 32 50.2 32 72.7V160H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h16v272c0 8.8 7.2 16 16 16s16-7.2 16-16V320h144c74.1 0 135.2-56 143.1-128H368c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16.9c-8-72-69-128-143.1-128zm246.2 128H64V72.7c0-4.8 3.9-8.7 8.7-8.7H208c56.4 0 103.1 41.7 110.9 96M64 192h254.9c-7.8 54.3-54.4 96-110.9 96H64z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M79.3 32C62 32 48 46 48 63.3V176H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h40v280c0 4.4 3.6 8 8 8s8-3.6 8-8V320h128c74.1 0 135.2-56 143.1-128H376c4.4 0 8-3.6 8-8s-3.6-8-8-8h-40c0-79.5-64.5-144-144-144zM320 176H64V63.3C64 54.9 70.9 48 79.3 48H192c70.7 0 128 57.3 128 128M64 192h255c-7.9 63.1-61.7 112-127 112H64z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M32 160v64c-17.7 0-32-14.3-32-32s14.3-32 32-32m250.5 64H96v-64h186.5c3.5 10 5.5 20.8 5.5 32s-1.9 22-5.5 32m66.3 0c2.1-10.3 3.2-21 3.2-32s-1.1-21.7-3.2-32h3.2c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M32 64c0-17.7 14.3-32 32-32h128c88.4 0 160 71.6 160 160s-71.6 160-160 160H96v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V64m64 224h96c53 0 96-43 96-96s-43-96-96-96H96z"
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
