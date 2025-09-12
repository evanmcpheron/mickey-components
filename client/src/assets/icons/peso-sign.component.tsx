import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const PesoSignIcon: React.FC<
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
                  d="M64 32c-17.7 0-32 14.3-32 32v64c-17.7 0-32 14.3-32 32s14.3 32 32 32v32c-17.7 0-32 14.3-32 32s14.3 32 32 32v160c0 17.7 14.3 32 32 32s32-14.3 32-32v-64h80c68.4 0 127.7-39 156.8-96H352c17.7 0 32-14.3 32-32s-14.3-32-32-32h-.7c.5-5.3.7-10.6.7-16s-.2-10.7-.7-16h.7c17.7 0 32-14.3 32-32s-14.3-32-32-32h-19.2C303.7 71 244.4 32 176 32zm190.4 96H96V96h80c30.5 0 58.2 12.2 78.4 32M96 192h190.9c.7 5.2 1.1 10.6 1.1 16s-.4 10.8-1.1 16H96zm158.4 96c-20.2 19.8-47.9 32-78.4 32H96v-32z"
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
                  d="M93.6 32C68.4 32 48 52.4 48 77.6V128H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h24v48H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h24v184c0 13.3 10.7 24 24 24s24-10.7 24-24v-88h88c67 0 124.9-39.2 151.8-96H360c13.3 0 24-10.7 24-24s-10.7-24-24-24h-9.7c1.1-7.8 1.7-15.9 1.7-24s-.6-16.2-1.7-24h9.7c13.3 0 24-10.7 24-24s-10.7-24-24-24h-24.2C308.9 71.2 251 32 184 32zM280 128H96V80h88c39.3 0 74.1 18.9 96 48M96 176h205.6q2.4 11.7 2.4 24c0 12.3-.8 16.2-2.4 24H96zm184 96c-21.9 29.1-56.7 48-96 48H96v-48z"
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
                  d="M71.4 32C49.6 32 32 49.6 32 71.4V128H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h16v64H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h16v208c0 8.8 7.2 16 16 16s16-7.2 16-16V352h128c65.6 0 122-39.5 146.7-96H368c8.8 0 16-7.2 16-16s-7.2-16-16-16h-19.2c2.1-10.3 3.2-21 3.2-32s-1.1-21.7-3.2-32H368c8.8 0 16-7.2 16-16s-7.2-16-16-16h-29.3C314 71.5 257.6 32 192 32zm231.5 96H64V71.4c0-4.1 3.3-7.4 7.4-7.4H192c47.4 0 88.7 25.7 110.9 64M64 160h252c2.6 10.2 4 21 4 32s-1.4 21.8-4 32H64zm238.9 96c-22.1 38.3-63.5 64-110.9 64H64v-64z"
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
                  d="M48 63.3C48 46 62 32 79.3 32H184c70.1 0 129.1 47.5 146.7 112H376c4.4 0 8 3.6 8 8s-3.6 8-8 8h-41.9c1.2 7.8 1.9 15.8 1.9 24 0 13.8-1.8 27.3-5.3 40H376c4.4 0 8 3.6 8 8s-3.6 8-8 8h-50.6c-22.3 56.2-77.2 96-141.4 96H64v136c0 4.4-3.6 8-8 8s-8-3.6-8-8V240H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h40v-64H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h40zM64 240v80h120c55.1 0 102.6-32.8 124-80zm250-16c3.9-12.6 6-26.1 6-40q0-12.3-2.1-24H64v64zM184 48H79.3C70.9 48 64 54.9 64 63.3V144h250c-17.1-55.6-68.8-96-130-96"
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
                  d="M32 128v64c-17.7 0-32-14.3-32-32s14.3-32 32-32m0 96v64c-17.7 0-32-14.3-32-32s14.3-32 32-32m64 64v-64h190.9c-3.6 24.9-15.3 47.2-32.5 64zm236.8 0c10-19.5 16.4-41.1 18.5-64h.7c17.7 0 32 14.3 32 32s-14.3 32-32 32zm18.5-96c-2.1-22.9-8.5-44.5-18.5-64H352c17.7 0 32 14.3 32 32s-14.3 32-32 32zM96 128h158.4c17.1 16.8 28.9 39.1 32.5 64H96z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M32 64c0-17.7 14.3-32 32-32h112c97.2 0 176 78.8 176 176s-78.8 176-176 176H96v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V64m64 256h80c61.9 0 112-50.1 112-112S237.9 96 176 96H96z"
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
