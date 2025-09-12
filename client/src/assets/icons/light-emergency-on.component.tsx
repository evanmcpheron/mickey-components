import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const LightEmergencyOnIcon: React.FC<
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
                  d="M69.3 36c-11-7.4-25.9-4.4-33.3 6.7S31.6 68.6 42.7 76l48 32c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3zm528 40c11-7.4 14-22.3 6.7-33.3s-22.3-14-33.3-6.7l-48 32c-11 7.4-14 22.3-6.7 33.3s22.3 14 33.3 6.7zM24 192c-13.3 0-24 10.7-24 24s10.7 24 24 24h64c13.3 0 24-10.7 24-24s-10.7-24-24-24zm528 0c-13.3 0-24 10.7-24 24s10.7 24 24 24h64c13.3 0 24-10.7 24-24s-10.7-24-24-24zM320 32c-88.4 0-160 71.6-160 160v160h320V192c0-88.4-71.6-160-160-160m-80 160c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112 8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80M96 416v32c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32v-32c0-17.7-14.3-32-32-32H128c-17.7 0-32 14.3-32 32"
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
                  d="M69.3 36c-11-7.4-25.9-4.4-33.3 6.7S31.6 68.6 42.7 76l48 32c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3zm528 40c11-7.4 14-22.3 6.7-33.3s-22.3-14-33.3-6.7l-48 32c-11 7.4-14 22.3-6.7 33.3s22.3 14 33.3 6.7zM24 192c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24zm544 0c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24zm-120 16v96h48v-96c0-97.2-78.8-176-176-176s-176 78.8-176 176v96h48v-96c0-70.7 57.3-128 128-128s128 57.3 128 128M144 432v-48h352v48zm-48-48v48c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-48c0-26.5-21.5-48-48-48H144c-26.5 0-48 21.5-48 48m224-240c8.8 0 16-7.2 16-16s-7.2-16-16-16c-53 0-96 43-96 96 0 8.8 7.2 16 16 16s16-7.2 16-16c0-35.3 28.7-64 64-64"
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
                  d="M55.2 33.7c-7.9-4-17.5-.7-21.5 7.2s-.7 17.5 7.2 21.5l64 32c7.9 4 17.5.7 21.5-7.2s.7-17.5-7.2-21.5zm544 28.6c7.9-4 11.1-13.6 7.2-21.5s-13.6-11.1-21.5-7.2l-64 32c-7.9 4-11.1 13.6-7.2 21.5s13.6 11.1 21.5 7.2zM16 192c-8.8 0-16 7.2-16 16s7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16zm544 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16zm-112 0v128h32V192c0-88.4-71.6-160-160-160s-160 71.6-160 160v128h32V192c0-70.7 57.3-128 128-128s128 57.3 128 128M128 400c0-8.8 7.2-16 16-16h352c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm-32 0v32c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-32c0-26.5-21.5-48-48-48H144c-26.5 0-48 21.5-48 48m224-272c8.8 0 16-7.2 16-16s-7.2-16-16-16c-53 0-96 43-96 96 0 8.8 7.2 16 16 16s16-7.2 16-16c0-35.3 28.7-64 64-64"
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
                  d="M44.1 33.1c-3.8-2.3-8.7-1-11 2.7s-1 8.7 2.7 11l80 48c3.8 2.3 8.7 1 11-2.7s1-8.7-2.7-11zm560 13.7c3.8-2.3 5-7.2 2.7-11s-7.2-5-11-2.7l-80 48c-3.8 2.3-5 7.2-2.7 11s7.2 5 11 2.7zM8 192c-4.4 0-8 3.6-8 8s3.6 8 8 8h80c4.4 0 8-3.6 8-8s-3.6-8-8-8zm544 0c-4.4 0-8 3.6-8 8s3.6 8 8 8h80c4.4 0 8-3.6 8-8s-3.6-8-8-8zm-88 0v128h16V192c0-88.4-71.6-160-160-160s-160 71.6-160 160v128h16V192c0-79.5 64.5-144 144-144s144 64.5 144 144M112 400c0-17.7 14.3-32 32-32h352c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32H144c-17.7 0-32-14.3-32-32zm-16 0v32c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-32c0-26.5-21.5-48-48-48H144c-26.5 0-48 21.5-48 48m216-287.6c4.4-.4 8-4 8-8.4s-3.6-8-8-7.7c-46.6 3.8-83.8 41-87.7 87.7-.4 4.4 3.3 8 7.7 8s8-3.6 8.4-8c3.7-37.8 33.8-67.9 71.6-71.6"
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
                  d="M320 32c-88.4 0-160 71.6-160 160v160h320V192c0-88.4-71.6-160-160-160m-80 160c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112 8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80"
                />
                <path
                  className="aps-icon-foreground"
                  d="M69.3 36c-11-7.4-25.9-4.4-33.3 6.7S31.6 68.6 42.7 76l48 32c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3zm528 40c11-7.4 14-22.3 6.7-33.3s-22.3-14-33.3-6.7l-48 32c-11 7.4-14 22.3-6.7 33.3s22.3 14 33.3 6.7zM24 192c-13.3 0-24 10.7-24 24s10.7 24 24 24h64c13.3 0 24-10.7 24-24s-10.7-24-24-24zm528 0c-13.3 0-24 10.7-24 24s10.7 24 24 24h64c13.3 0 24-10.7 24-24s-10.7-24-24-24zM128 352c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32z"
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
