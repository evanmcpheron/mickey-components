import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ToolboxIcon: React.FC<
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
                  d="M176 88v40h160V88c0-4.4-3.6-8-8-8H184c-4.4 0-8 3.6-8 8m-48 40V88c0-30.9 25.1-56 56-56h144c30.9 0 56 25.1 56 56v40h28.1c12.7 0 24.9 5.1 33.9 14.1l51.9 51.9c9 9 14.1 21.2 14.1 33.9V320H384v-32c0-17.7-14.3-32-32-32s-32 14.3-32 32v32H192v-32c0-17.7-14.3-32-32-32s-32 14.3-32 32v32H0v-92.1C0 215.2 5.1 203 14.1 194L66 142.1c9-9 21.2-14.1 33.9-14.1zM0 416v-64h128c0 17.7 14.3 32 32 32s32-14.3 32-32h128c0 17.7 14.3 32 32 32s32-14.3 32-32h128v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64"
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
                  d="M184 80h144c4.4 0 8 3.6 8 8v40H176V88c0-4.4 3.6-8 8-8m-56 8v40H99.9c-12.7 0-24.9 5.1-33.9 14.1l-51.9 51.8c-9 9-14.1 21.2-14.1 33.9V416c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V227.9c0-12.7-5.1-24.9-14.1-33.9L446 142.1c-9-9-21.2-14.1-33.9-14.1H384V88c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56m336 216h-96v-16c0-13.3-10.7-24-24-24s-24 10.7-24 24v16H192v-16c0-13.3-10.7-24-24-24s-24 10.7-24 24v16H48v-76.1L99.9 176h312.2l51.9 51.9zM48 352h96v16c0 13.3 10.7 24 24 24s24-10.7 24-24v-16h128v16c0 13.3 10.7 24 24 24s24-10.7 24-24v-16h96v64c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16z"
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
                  d="M176 64h160c8.8 0 16 7.2 16 16v48H160V80c0-8.8 7.2-16 16-16m-48 16v48h-21.5c-17 0-33.3 6.7-45.3 18.7l-42.5 42.6C6.7 201.3 0 217.5 0 234.5V416c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V234.5c0-17-6.7-33.3-18.7-45.3l-42.5-42.5c-12-12-28.3-18.7-45.3-18.7H384V80c0-26.5-21.5-48-48-48H176c-26.5 0-48 21.5-48 48m16 80h261.5c8.5 0 16.6 3.4 22.6 9.4l42.5 42.5c6 6 9.4 14.1 9.4 22.6V320H352v-32c0-8.8-7.2-16-16-16s-16 7.2-16 16v32H192v-32c0-8.8-7.2-16-16-16s-16 7.2-16 16v32H32v-85.5c0-8.5 3.4-16.6 9.4-22.6l42.5-42.5c6-6 14.1-9.4 22.6-9.4zM32 352h128v32c0 8.8 7.2 16 16 16s16-7.2 16-16v-32h128v32c0 8.8 7.2 16 16 16s16-7.2 16-16v-32h128v64c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32z"
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
                  d="M176 56h160c13.3 0 24 10.7 24 24v48H152V80c0-13.3 10.7-24 24-24m-40 24v48h-29.5c-17 0-33.3 6.7-45.3 18.7l-42.5 42.6C6.7 201.3 0 217.5 0 234.5V416c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V234.5c0-17-6.7-33.3-18.7-45.3l-42.5-42.5c-12-12-28.3-18.7-45.3-18.7H376V80c0-22.1-17.9-40-40-40H176c-22.1 0-40 17.9-40 40m360 248H352v-48c0-4.4-3.6-8-8-8s-8 3.6-8 8v48H176v-48c0-4.4-3.6-8-8-8s-8 3.6-8 8v48H16v-93.5c0-12.7 5.1-24.9 14.1-33.9l42.5-42.5c9-9 21.2-14.1 33.9-14.1h299c12.7 0 24.9 5.1 33.9 14.1l42.5 42.5c9 9 14.1 21.2 14.1 33.9zM16 344h144v48c0 4.4 3.6 8 8 8s8-3.6 8-8v-48h160v48c0 4.4 3.6 8 8 8s8-3.6 8-8v-48h144v72c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48z"
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
                  d="M0 320h128v32c0 17.7 14.3 32 32 32s32-14.3 32-32v-32h128v32c0 17.7 14.3 32 32 32s32-14.3 32-32v-32h128v96c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zM128 88c0-30.9 25.1-56 56-56h144c30.9 0 56 25.1 56 56v40h-48V88c0-4.4-3.6-8-8-8H184c-4.4 0-8 3.6-8 8v40h-48z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M0 320v-85.5c0-17 6.7-33.3 18.7-45.3l42.5-42.5c12-12 28.3-18.7 45.3-18.7h299c17 0 33.3 6.7 45.3 18.7l42.5 42.5c12 12 18.7 28.3 18.7 45.3V320H384v-32c0-17.7-14.3-32-32-32s-32 14.3-32 32v32H192v-32c0-17.7-14.3-32-32-32s-32 14.3-32 32v32z"
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
