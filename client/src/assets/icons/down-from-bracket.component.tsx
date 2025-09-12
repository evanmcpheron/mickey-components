import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const DownFromBracketIcon: React.FC<
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
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M64 160V96c0-17.7 14.3-32 32-32h256c17.7 0 32 14.3 32 32v64c0 17.7 14.3 32 32 32s32-14.3 32-32V96c0-53-43-96-96-96H96C43 0 0 43 0 96v64c0 17.7 14.3 32 32 32s32-14.3 32-32m9.9 217.9 122.8 122.8c7.2 7.2 17.1 11.3 27.3 11.3s20.1-4.1 27.3-11.3l122.8-122.8c6.4-6.4 9.9-15 9.9-24 0-18.7-15.2-33.9-33.9-33.9H288V192c0-17.7-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32v128H97.9C79.2 320 64 335.2 64 353.9c0 9 3.6 17.6 9.9 24"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M333.8 352 224 462 114.2 352H168c13.3 0 24-10.7 24-24V208h64v120c0 13.3 10.7 24 24 24zM224 512c11.5 0 22.5-4.6 30.6-12.7l115.8-116.1c8.7-8.7 13.6-20.5 13.6-32.8 0-25.6-20.8-46.4-46.4-46.4H304v-96c0-26.5-21.5-48-48-48h-64c-26.5 0-48 21.5-48 48v96h-33.6C84.8 304 64 324.8 64 350.4c0 12.3 4.9 24.1 13.6 32.8l115.8 116.1c8.1 8.1 19.1 12.7 30.6 12.7m176-344c0 13.3 10.7 24 24 24s24-10.7 24-24V88c0-48.6-39.4-88-88-88H88C39.4 0 0 39.4 0 88v80c0 13.3 10.7 24 24 24s24-10.7 24-24V88c0-22.1 17.9-40 40-40h272c22.1 0 40 17.9 40 40z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M225.8 479.2c-.5.5-1.1.8-1.8.8s-1.4-.3-1.8-.8L97.8 347.3c-1.2-1.2-1.8-2.9-1.8-4.6 0-3.7 3-6.7 6.7-6.7H160c8.8 0 16-7.2 16-16V200c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8v120c0 8.8 7.2 16 16 16h57.3c3.7 0 6.7 3 6.7 6.7 0 1.7-.6 3.3-1.8 4.6zM224 512c9.5 0 18.6-3.9 25.1-10.8l124.4-132c6.8-7.2 10.5-16.7 10.5-26.5 0-21.4-17.3-38.7-38.7-38.7H304V200c0-22.1-17.9-40-40-40h-80c-22.1 0-40 17.9-40 40v104h-41.3C81.3 304 64 321.3 64 342.7c0 9.9 3.8 19.4 10.5 26.5l124.4 132c6.5 6.9 15.6 10.8 25.1 10.8m192-336c0 8.8 7.2 16 16 16s16-7.2 16-16V80c0-44.2-35.8-80-80-80H80C35.8 0 0 35.8 0 80v96c0 8.8 7.2 16 16 16s16-7.2 16-16V80c0-26.5 21.5-48 48-48h288c26.5 0 48 21.5 48 48z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M232 492.7c-2.1 2.1-5 3.3-8 3.3s-5.9-1.2-8-3.3L84.2 360.6c-2.7-2.7-4.2-6.4-4.2-10.2 0-8 6.5-14.4 14.4-14.4H168c4.4 0 8-3.6 8-8V192c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16v136c0 4.4 3.6 8 8 8h73.6c8 0 14.4 6.5 14.4 14.4 0 3.8-1.5 7.5-4.2 10.2zm-8 19.3c7.2 0 14.2-2.9 19.3-8l131.8-132.1c5.7-5.7 8.9-13.4 8.9-21.5 0-16.8-13.6-30.4-30.4-30.4H288V192c0-17.7-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32v128H94.4C77.6 320 64 333.6 64 350.4c0 8.1 3.2 15.8 8.9 21.5L204.7 504c5.1 5.1 12.1 8 19.3 8m208-328c0 4.4 3.6 8 8 8s8-3.6 8-8V88c0-48.6-39.4-88-88-88H88C39.4 0 0 39.4 0 88v96c0 4.4 3.6 8 8 8s8-3.6 8-8V88c0-39.8 32.2-72 72-72h272c39.8 0 72 32.2 72 72z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M0 96v64c0 17.7 14.3 32 32 32s32-14.3 32-32V96c0-17.7 14.3-32 32-32h256c17.7 0 32 14.3 32 32v64c0 17.7 14.3 32 32 32s32-14.3 32-32V96c0-53-43-96-96-96H96C43 0 0 43 0 96"
                />
                <path
                  className="aps-icon-foreground"
                  d="m251.3 500.7 122.8-122.8c6.4-6.4 9.9-15 9.9-24 0-18.7-15.2-33.9-33.9-33.9H288V192c0-17.7-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32v128H97.9C79.2 320 64 335.2 64 353.9c0 9 3.6 17.6 9.9 24l122.8 122.8c7.2 7.2 17.1 11.3 27.3 11.3s20.1-4.1 27.3-11.3"
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
