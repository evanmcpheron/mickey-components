import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const MicroscopeIcon: React.FC<
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
                  d="M160 32c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32 17.7 0 32 14.3 32 32v224c0 17.7-14.3 32-32 32 0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32M32 448h288c70.7 0 128-57.3 128-128s-57.3-128-128-128v-64c106 0 192 86 192 192 0 49.2-18.5 94-48.9 128H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32m80-64h192c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16"
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
                  d="M192 0c-17.7 0-32 14.3-32 32-17.7 0-32 14.3-32 32v224c0 17.7 14.3 32 32 32 0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32 17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32 0-17.7-14.3-32-32-32zm-16 272V80h64v192zM24 464c-13.3 0-24 10.7-24 24s10.7 24 24 24h464c13.3 0 24-10.7 24-24s-10.7-24-24-24h-41c39.9-35.2 65-86.7 65-144 0-106-86-192-192-192v48c79.5 0 144 64.5 144 144s-64.5 144-144 144zm72-56c0 13.3 10.7 24 24 24h176c13.3 0 24-10.7 24-24s-10.7-24-24-24H120c-13.3 0-24 10.7-24 24"
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
                  d="M192 0c-17.7 0-32 14.3-32 32-17.7 0-32 14.3-32 32v224c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32V160c88.4 0 160 71.6 160 160s-71.6 160-160 160H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h480c8.8 0 16-7.2 16-16s-7.2-16-16-16H394.2c51.7-34.4 85.8-93.2 85.8-160 0-106-86-192-192-192V64c0-17.7-14.3-32-32-32 0-17.7-14.3-32-32-32zm0 32h32v16c0 8.8 7.2 16 16 16h16v224h-96V64h16c8.8 0 16-7.2 16-16zm-32 336c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16h-64c-8.8 0-16 7.2-16 16m-64 64c0 8.8 7.2 16 16 16h192c8.8 0 16-7.2 16-16s-7.2-16-16-16H112c-8.8 0-16 7.2-16 16"
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
                  d="M176 24v16c0 4.4-3.6 8-8 8h-8c-8.8 0-16 7.2-16 16v224c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16h-8c-4.4 0-8-3.6-8-8V24c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8m112 120v144c0 17.7-14.3 32-32 32h-96c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32v-8c0-13.3 10.7-24 24-24h48c13.3 0 24 10.7 24 24v8c17.7 0 32 14.3 32 32v64c106 0 192 86 192 192 0 78.7-47.4 146.4-115.1 176H504c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h280c97.2 0 176-78.8 176-176s-78.8-176-176-176M160 360c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8s-3.6 8-8 8h-80c-4.4 0-8-3.6-8-8m-64 64c0-4.4 3.6-8 8-8h208c4.4 0 8 3.6 8 8s-3.6 8-8 8H104c-4.4 0-8-3.6-8-8"
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
                  d="M192 0c-17.7 0-32 14.3-32 32h96c0-17.7-14.3-32-32-32zm-80 384c-8.8 0-16 7.2-16 16s7.2 16 16 16h192c8.8 0 16-7.2 16-16s-7.2-16-16-16z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M128 64c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32v224c0 17.7-14.3 32-32 32 0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32-17.7 0-32-14.3-32-32zm384 256c0 49.2-18.5 94-48.9 128H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h288c70.7 0 128-57.3 128-128s-57.3-128-128-128v-64c106 0 192 86 192 192"
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
