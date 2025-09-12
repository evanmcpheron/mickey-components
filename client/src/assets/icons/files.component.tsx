import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const FilesIcon: React.FC<
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
                  d="M320 0H160c-35.3 0-64 28.7-64 64v288c0 35.3 28.7 64 64 64h224c35.3 0 64-28.7 64-64V128h-96c-17.7 0-32-14.3-32-32zm128 96-32-32-32-32-32-32v96h96M48 120c0-13.3-10.7-24-24-24S0 106.7 0 120v256c0 75.1 60.9 136 136 136h192c13.3 0 24-10.7 24-24s-10.7-24-24-24H136c-48.6 0-88-39.4-88-88z"
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
                  d="M160 368h224c8.8 0 16-7.2 16-16V128h-48c-17.7 0-32-14.3-32-32V48H160c-8.8 0-16 7.2-16 16v288c0 8.8 7.2 16 16 16m224 48H160c-35.3 0-64-28.7-64-64V64c0-35.3 28.7-64 64-64h165.5c17 0 33.3 6.7 45.3 18.7l58.5 58.5c12 12 18.7 28.3 18.7 45.3V352c0 35.3-28.7 64-64 64M24 96c13.3 0 24 10.7 24 24v256c0 48.6 39.4 88 88 88h192c13.3 0 24 10.7 24 24s-10.7 24-24 24H136C60.9 512 0 451.1 0 376V120c0-13.3 10.7-24 24-24"
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
                  d="M160 384c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32h144v80c0 17.7 14.3 32 32 32h80v208c0 17.7-14.3 32-32 32zM336 57.5l54 54.5h-54zM160 0c-35.3 0-64 28.7-64 64v288c0 35.3 28.7 64 64 64h224c35.3 0 64-28.7 64-64V144.8a48 48 0 0 0-13.9-33.8l-96-96.8C329.1 5.1 316.8 0 304 0zM32 112c0-8.8-7.2-16-16-16s-16 7.2-16 16v272c0 70.7 57.3 128 128 128h208c8.8 0 16-7.2 16-16s-7.2-16-16-16H128c-53 0-96-43-96-96z"
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
                  d="M192 400h192c26.5 0 48-21.5 48-48V123.9c0-4.1-.8-8.1-2.3-11.9H360c-13.3 0-24-10.7-24-24V18.3c-3.7-1.5-7.8-2.3-11.9-2.3H192c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48M433.9 89.9c1.9 1.9 3.6 3.9 5.1 6.1h.9v1.3c5.2 7.8 8 17 8 26.5V352c0 35.3-28.7 64-64 64H192c-35.3 0-64-28.7-64-64V64c0-35.3 28.7-64 64-64h132.1C336.8 0 349 5.1 358 14.1L433.9 90zM360 96h57.4L352 30.6V88c0 4.4 3.6 8 8 8M64 96h32v16H64c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h192c26.5 0 48-21.5 48-48h16c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64"
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
                  d="M160 0h192v64c0 17.7 14.3 32 32 32h64v256c0 35.3-28.7 64-64 64H160c-35.3 0-64-28.7-64-64V64c0-35.3 28.7-64 64-64"
                />
                <path
                  className="aps-icon-foreground"
                  d="M352 0v64c0 17.7 14.3 32 32 32h64zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120v256c0 75.1 60.9 136 136 136h192c13.3 0 24-10.7 24-24s-10.7-24-24-24H136c-48.6 0-88-39.4-88-88z"
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
