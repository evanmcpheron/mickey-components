import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CalendarUsersIcon: React.FC<
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
                  d="M192 32v32h-48c-26.5 0-48 21.5-48 48v48h448v-48c0-26.5-21.5-48-48-48h-48V32c0-17.7-14.3-32-32-32s-32 14.3-32 32v32H256V32c0-17.7-14.3-32-32-32s-32 14.3-32 32m55.4 480h145.2c-5.4-9.4-8.6-20.3-8.6-32 0-43.8 29.4-80.8 69.6-92.3-23-20.5-37.6-50.4-37.6-83.7 0-56.4 41.7-103.1 96-110.9V192H128v1.1c54.3 7.8 96 54.4 96 110.9 0 33.3-14.5 63.2-37.6 83.7 40.2 11.5 69.6 48.5 69.6 92.3 0 11.7-3.1 22.6-8.6 32M528 384a80 80 0 1 0 0-160 80 80 0 1 0 0 160m-48 32c-35.3 0-64 28.7-64 64 0 17.7 14.3 32 32 32h160c17.7 0 32-14.3 32-32 0-35.3-28.7-64-64-64zM192 304a80 80 0 1 0-160 0 80 80 0 1 0 160 0M0 480c0 17.7 14.3 32 32 32h160c17.7 0 32-14.3 32-32 0-35.3-28.7-64-64-64H64c-35.3 0-64 28.7-64 64"
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
                  d="M248 24c0-13.3-10.7-24-24-24s-24 10.7-24 24v40h-40c-35.3 0-64 28.7-64 64v64h448v-64c0-35.3-28.7-64-64-64h-40V24c0-13.3-10.7-24-24-24s-24 10.7-24 24v40H248zm6.7 440c.9 5.2 1.3 10.5 1.3 16 0 11.7-3.1 22.6-8.6 32h145.2c-5.4-9.4-8.6-20.3-8.6-32 0-5.5.5-10.8 1.3-16zM528 384a80 80 0 1 0 0-160 80 80 0 1 0 0 160m-48 32c-35.3 0-64 28.7-64 64 0 17.7 14.3 32 32 32h160c17.7 0 32-14.3 32-32 0-35.3-28.7-64-64-64zM192 304a80 80 0 1 0-160 0 80 80 0 1 0 160 0M0 480c0 17.7 14.3 32 32 32h160c17.7 0 32-14.3 32-32 0-35.3-28.7-64-64-64H64c-35.3 0-64 28.7-64 64"
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
                  d="M208 0c8.8 0 16 7.2 16 16v48h192V16c0-8.8 7.2-16 16-16s16 7.2 16 16v48h32c35.3 0 64 28.7 64 64v64H96v-64c0-35.3 28.7-64 64-64h32V16c0-8.8 7.2-16 16-16m39.4 512c5.4-9.4 8.6-20.3 8.6-32h128c0 11.7 3.1 22.6 8.6 32zM480 96H160c-17.7 0-32 14.3-32 32v32h384v-32c0-17.7-14.3-32-32-32m48 256a48 48 0 1 0 0-96 48 48 0 1 0 0 96m0-128a80 80 0 1 1 0 160 80 80 0 1 1 0-160m-48 224c-17.7 0-32 14.3-32 32h160c0-17.7-14.3-32-32-32zm-64 32c0-35.3 28.7-64 64-64h96c35.3 0 64 28.7 64 64 0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32M160 304a48 48 0 1 0-96 0 48 48 0 1 0 96 0m-128 0a80 80 0 1 1 160 0 80 80 0 1 1-160 0m0 176h160c0-17.7-14.3-32-32-32H64c-17.7 0-32 14.3-32 32m32-64h96c35.3 0 64 28.7 64 64 0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32 0-35.3 28.7-64 64-64"
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
                  d="M216 0c4.4 0 8 3.6 8 8v56h192V8c0-4.4 3.6-8 8-8s8 3.6 8 8v56h48c35.3 0 64 28.7 64 64v64H96v-64c0-35.3 28.7-64 64-64h48V8c0-4.4 3.6-8 8-8m31.4 512c2.9-5 5.1-10.3 6.5-16H386c1.5 5.7 3.7 11 6.5 16zM208 120V80h-48c-26.5 0-48 21.5-48 48v48h416v-48c0-26.5-21.5-48-48-48h-48v40c0 4.4-3.6 8-8 8s-8-3.6-8-8V80H224v40c0 4.4-3.6 8-8 8s-8-3.6-8-8m320 248a64 64 0 1 0 0-128 64 64 0 1 0 0 128m-48 64c-26.5 0-48 21.5-48 48 0 8.8 7.2 16 16 16h160c8.8 0 16-7.2 16-16 0-26.5-21.5-48-48-48zm-32-128a80 80 0 1 1 160 0 80 80 0 1 1-160 0m-32 176c0-35.3 28.7-64 64-64h96c35.3 0 64 28.7 64 64 0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32M176 304a64 64 0 1 0-128 0 64 64 0 1 0 128 0M16 480c0 8.8 7.2 16 16 16h160c8.8 0 16-7.2 16-16 0-26.5-21.5-48-48-48H64c-26.5 0-48 21.5-48 48m96-256a80 80 0 1 1 0 160 80 80 0 1 1 0-160M64 416h96c35.3 0 64 28.7 64 64 0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32 0-35.3 28.7-64 64-64"
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
                  d="M192 32v32h-48c-26.5 0-48 21.5-48 48v48h448v-48c0-26.5-21.5-48-48-48h-48V32c0-17.7-14.3-32-32-32s-32 14.3-32 32v32H256V32c0-17.7-14.3-32-32-32s-32 14.3-32 32m55.4 480h145.2c-5.4-9.4-8.6-20.3-8.6-32 0-43.8 29.4-80.8 69.6-92.3-23-20.5-37.6-50.4-37.6-83.7 0-56.4 41.7-103.1 96-110.9V192H128v1.1c54.3 7.8 96 54.4 96 110.9 0 33.3-14.5 63.2-37.6 83.7 40.2 11.5 69.6 48.5 69.6 92.3 0 11.7-3.1 22.6-8.6 32"
                />
                <path
                  className="aps-icon-foreground"
                  d="M32 304a80 80 0 1 1 160 0 80 80 0 1 1-160 0M0 480c0-35.3 28.7-64 64-64h96c35.3 0 64 28.7 64 64 0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32m448-176a80 80 0 1 1 160 0 80 80 0 1 1-160 0m-32 176c0-35.3 28.7-64 64-64h96c35.3 0 64 28.7 64 64 0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32"
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
