import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SignPostIcon: React.FC<
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
                  d="M224 32c0-17.7 14.3-32 32-32s32 14.3 32 32v32h129c9.5 0 18.5 4.2 24.6 11.5l61.9 74.2c4.9 5.9 4.9 14.6 0 20.5l-61.9 74.2c-6.1 7.3-15.1 11.5-24.6 11.5H80c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h144zm64 448c0 17.7-14.3 32-32 32s-32-14.3-32-32V288h64z"
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
                  d="M232 24c0-13.3 10.7-24 24-24s24 10.7 24 24v40h137c9.5 0 18.5 4.2 24.6 11.5l61.9 74.2c4.9 5.9 4.9 14.6 0 20.5l-61.9 74.2c-6.1 7.3-15.1 11.5-24.6 11.5H280V488c0 13.3-10.7 24-24 24s-24-10.7-24-24V256H80c-26.5 0-48-21.5-48-48v-96c0-26.5 21.5-48 48-48h152zm217.5 136-40-48H80v96h329.5z"
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
                  d="M240 16c0-8.8 7.2-16 16-16s16 7.2 16 16v48h145c9.5 0 18.5 4.2 24.6 11.5l61.9 74.2c4.9 5.9 4.9 14.6 0 20.5l-61.9 74.2c-6.1 7.3-15.1 11.5-24.6 11.5H272V496c0 8.8-7.2 16-16 16s-16-7.2-16-16V256H64c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h176zm230.3 144L417 96H64v128h353z"
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
                  d="M248 8c0-4.4 3.6-8 8-8s8 3.6 8 8v56h153c9.5 0 18.5 4.2 24.6 11.5l61.9 74.2c4.9 5.9 4.9 14.6 0 20.5l-61.9 74.2c-6.1 7.3-15.1 11.5-24.6 11.5H264V504c0 4.4-3.6 8-8 8s-8-3.6-8-8V256H64c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h184zm181.3 77.8c-3-3.6-7.5-5.8-12.3-5.8H64c-8.8 0-16 7.2-16 16v128c0 8.8 7.2 16 16 16h353c4.7 0 9.3-2.1 12.3-5.8l61.9-74.2z"
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
                  d="M256 0c-17.7 0-32 14.3-32 32v32h64V32c0-17.7-14.3-32-32-32m32 480V256h-64v224c0 17.7 14.3 32 32 32s32-14.3 32-32"
                />
                <path
                  className="aps-icon-foreground"
                  d="m441.6 75.5 61.9 74.2c4.9 5.9 4.9 14.6 0 20.5l-61.9 74.2c-6.1 7.3-15.1 11.5-24.6 11.5H64c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h353c9.5 0 18.5 4.2 24.6 11.5"
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
