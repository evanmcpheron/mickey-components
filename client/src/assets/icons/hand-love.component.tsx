import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const HandLoveIcon: React.FC<
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
                  d="M160 0c17.7 0 32 14.3 32 32v256c0 35.3 28.7 64 64 64 19.1 0 36.3-8.4 48-21.7 11.7 13.3 28.9 21.7 48 21.7 35.3 0 64-28.7 64-64V96c0-17.7 14.3-32 32-32s32 14.3 32 32v240c0 97.2-78.8 176-176 176h-19.2c-59.6 0-116.9-22.9-160-64L12.4 341c-16-15.2-16.6-40.6-1.4-56.6s40.6-16.6 56.6-1.4l60.5 57.6c0-1.5-.1-3.1-.1-4.6V32c0-17.7 14.3-32 32-32m64 192c0-17.7 14.3-32 32-32s32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32zm128 0c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32s-32-14.3-32-32v-64c0-17.7 14.3-32 32-32"
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
                  d="M176 48c8.8 0 16 7.2 16 16v240c0 35.3 28.7 64 64 64 15.1 0 29-5.3 40-14 11 8.8 24.9 14 40 14 35.3 0 64-28.7 64-64V128c0-8.8 7.2-16 16-16s16 7.2 16 16v209.9c-.3 1.2-.5 2.5-.7 3.7-6.6 66.5-61.1 118.9-128.5 122.2-.6 0-1.3.1-1.9.2h-13.4c-55.2 0-108.1-21.9-147.1-60.9l-87.7-87.8c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l43.7 43.7c6.9 6.9 17.2 8.9 26.2 5.2s14.8-12.5 14.8-22.2V64c0-8.8 7.2-16 16-16m176 208v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-64c0-8.8 7.2-16 16-16s16 7.2 16 16zm0-104v26c-5.1-1.3-10.5-2-16-2-7.9 0-15.4 1.4-22.4 4-10.4-21.3-32.3-36-57.6-36-5.5 0-10.9.7-16 2V64c0-35.3-28.7-64-64-64s-64 28.7-64 64v197.5l-2.7-2.7c-25-25-65.5-25-90.5 0s-25 65.5 0 90.5l87.7 87.7c48 48 113.1 75 181 75H304c1.5 0 3-.1 4.5-.4 87.6-5.9 158.3-72.9 169.9-158.8 1.1-2.7 1.7-5.7 1.7-8.8V128c0-35.3-28.7-64-64-64s-64 28.7-64 64v24zm-112 64v-8.2c.1-8.8 7.2-15.8 16-15.8s16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16z"
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
                  d="M184 32c13.3 0 24 10.7 24 24v240c0 30.9 25.1 56 56 56 15.7 0 29.8-6.4 40-16.8 10.2 10.4 24.3 16.8 40 16.8 30.9 0 56-25.1 56-56V120c0-13.3 10.7-24 24-24s24 10.7 24 24v216c0 79.5-64.5 144-144 144h-8.5c-57.3 0-112.2-22.8-152.7-63.3L39 313c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l59.7 59.7c4.6 4.6 11.5 5.9 17.4 3.5s9.9-8.3 9.9-14.8V56c0-13.3 10.7-24 24-24zm104 264c0 13.3-10.7 24-24 24s-24-10.7-24-24v-96.1c0-13.2 10.8-23.9 24-23.9 13.3 0 24 10.7 24 24v96m32-64c0-13.3 10.7-24 24-24s24 10.7 24 24v64c0 13.3-10.7 24-24 24s-24-10.7-24-24zm48-50.6c-7.3-3.5-15.4-5.4-24-5.4-9.7 0-18.8 2.5-26.7 6.8C310 160.3 288.9 144 264 144c-8.6 0-16.7 1.9-24 5.4V56c0-30.9-25.1-56-56-56s-56 25.1-56 56v232.8l-32.4-32.4c-21.9-21.9-57.3-21.9-79.2 0s-21.9 57.3 0 79.2l103.8 103.8c46.5 46.5 109.6 72.6 175.3 72.6h8.5c97.2 0 176-78.8 176-176V120c0-30.9-25.1-56-56-56s-56 25.1-56 56v61.4"
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
                  d="M192 16c-17.7 0-32 14.3-32 32v287.4c0 3.2-1.9 6.2-4.9 7.4s-6.4.6-8.7-1.7l-59.8-59.7c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l103.8 103.7c42 42 99 65.6 158.4 65.6h8.5c81.4 0 147.9-64 151.8-144.4 0-.5.1-.9.2-1.4V112c0-17.7-14.3-32-32-32s-32 14.3-32 32v192c0 26.5-21.5 48-48 48-16.7 0-31.4-8.5-40-21.5-8.6 12.9-23.3 21.5-40 21.5-26.5 0-48-21.5-48-48V48c0-17.7-14.3-32-32-32m112 288v-96c0-17.7-14.3-32-32-32-17.6 0-32 14.3-32 31.9V304c0 17.7 14.3 32 32 32s32-14.3 32-32m16-64v64c0 17.7 14.3 32 32 32s32-14.3 32-32v-64c0-17.7-14.3-32-32-32s-32 14.3-32 32m64-35.8V112c0-26.5 21.5-48 48-48s48 21.5 48 48v240c0 .8-.1 1.5-.3 2.2-5.3 88-78.3 157.8-167.7 157.8h-8.5c-63.7 0-124.7-25.3-169.7-70.3L30.1 337.9c-18.7-18.7-18.7-49.1 0-67.9s49.1-18.7 67.9 0l46 46.1V48c0-26.5 21.5-48 48-48s48 21.5 48 48v124.2c8.5-7.6 19.7-12.2 32-12.2 25.3 0 46 19.5 47.9 44.3 8.5-7.7 19.8-12.3 32.1-12.3s23.5 4.6 32 12.2"
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
                  d="M160 0c17.7 0 32 14.3 32 32v256c0 35.3 28.7 64 64 64 19.1 0 36.3-8.4 48-21.7 11.7 13.3 28.9 21.7 48 21.7 35.3 0 64-28.7 64-64V96c0-17.7 14.3-32 32-32s32 14.3 32 32v240c0 97.2-78.8 176-176 176h-19.2c-59.6 0-116.9-22.9-160-64L12.4 341c-16-15.2-16.6-40.6-1.4-56.6s40.6-16.6 56.6-1.4l60.5 57.6c0-1.5-.1-3.1-.1-4.6V32c0-17.7 14.3-32 32-32"
                />
                <path
                  className="aps-icon-foreground"
                  d="M256 160c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32s32-14.3 32-32v-96c0-17.7-14.3-32-32-32m96 32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32s32-14.3 32-32v-64c0-17.7-14.3-32-32-32"
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
