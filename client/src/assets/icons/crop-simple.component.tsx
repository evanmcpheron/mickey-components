import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CropSimpleIcon: React.FC<
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
                  d="M128 32c0-17.7-14.3-32-32-32S64 14.3 64 32v32H32C14.3 64 0 78.3 0 96s14.3 32 32 32h32v256c0 35.3 28.7 64 64 64h224v-64H128zm256 448c0 17.7 14.3 32 32 32s32-14.3 32-32v-32h32c17.7 0 32-14.3 32-32s-14.3-32-32-32h-32V128c0-35.3-28.7-64-64-64H160v64h224z"
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
                  d="M128 24c0-13.3-10.7-24-24-24S80 10.7 80 24v56H24C10.7 80 0 90.7 0 104s10.7 24 24 24h56v248c0 30.9 25.1 56 56 56h216v-48H136c-4.4 0-8-3.6-8-8zm256 464c0 13.3 10.7 24 24 24s24-10.7 24-24v-56h56c13.3 0 24-10.7 24-24s-10.7-24-24-24h-56V136c0-30.9-25.1-56-56-56H160v48h216c4.4 0 8 3.6 8 8z"
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
                  d="M128 16c0-8.8-7.2-16-16-16S96 7.2 96 16v80H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h80v240c0 26.5 21.5 48 48 48h208v-32H144c-8.8 0-16-7.2-16-16zm256 480c0 8.8 7.2 16 16 16s16-7.2 16-16v-80h80c8.8 0 16-7.2 16-16s-7.2-16-16-16h-80V144c0-26.5-21.5-48-48-48H160v32h208c8.8 0 16 7.2 16 16z"
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
                  d="M112 8c0-4.4-3.6-8-8-8s-8 3.6-8 8v88H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h88v264c0 22.1 17.9 40 40 40h216v-16H136c-13.3 0-24-10.7-24-24zm288 496c0 4.4 3.6 8 8 8s8-3.6 8-8v-88h88c4.4 0 8-3.6 8-8s-3.6-8-8-8h-88V136c0-22.1-17.9-40-40-40H160v16h216c13.3 0 24 10.7 24 24z"
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
                  d="M128 32c0-17.7-14.3-32-32-32S64 14.3 64 32v352c0 35.3 28.7 64 64 64h256v-64H128zm352 352h-32v64h32c17.7 0 32-14.3 32-32s-14.3-32-32-32"
                />
                <path
                  className="aps-icon-foreground"
                  d="M32 64C14.3 64 0 78.3 0 96s14.3 32 32 32h32V64zm352 416c0 17.7 14.3 32 32 32s32-14.3 32-32V128c0-35.3-28.7-64-64-64H128v64h256z"
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
