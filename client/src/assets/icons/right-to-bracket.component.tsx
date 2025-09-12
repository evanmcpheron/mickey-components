import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const RightToBracketIcon: React.FC<
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
                  d="m217.9 105.9 122.8 122.8c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9-18.7 0-33.9-15.2-33.9-33.9V320H32c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32h128v-62.1c0-18.7 15.2-33.9 33.9-33.9 9 0 17.6 3.6 24 9.9M352 416h64c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32h-64c-17.7 0-32-14.3-32-32s14.3-32 32-32h64c53 0 96 43 96 96v256c0 53-43 96-96 96h-64c-17.7 0-32-14.3-32-32s14.3-32 32-32"
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
                  d="M192 365.8 302 256 192 146.2V200c0 13.3-10.7 24-24 24H48v64h120c13.3 0 24 10.7 24 24zM352 256c0 11.5-4.6 22.5-12.7 30.6L223.2 402.4c-8.7 8.7-20.5 13.6-32.8 13.6-25.6 0-46.4-20.8-46.4-46.4V336H48c-26.5 0-48-21.5-48-48v-64c0-26.5 21.5-48 48-48h96v-33.6c0-25.6 20.8-46.4 46.4-46.4 12.3 0 24.1 4.9 32.8 13.6l116.1 115.8c8.1 8.1 12.7 19.1 12.7 30.6m-8 176h80c22.1 0 40-17.9 40-40V120c0-22.1-17.9-40-40-40h-80c-13.3 0-24-10.7-24-24s10.7-24 24-24h80c48.6 0 88 39.4 88 88v272c0 48.6-39.4 88-88 88h-80c-13.3 0-24-10.7-24-24s10.7-24 24-24"
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
                  d="M319.2 257.8c.5-.5.8-1.1.8-1.8s-.3-1.4-.8-1.8L187.3 129.8c-1.2-1.2-2.9-1.8-4.6-1.8-3.7 0-6.7 3-6.7 6.7V192c0 8.8-7.2 16-16 16H40c-4.4 0-8 3.6-8 8v80c0 4.4 3.6 8 8 8h120c8.8 0 16 7.2 16 16v57.3c0 3.7 3 6.7 6.7 6.7 1.7 0 3.3-.6 4.6-1.8zM352 256c0 9.5-3.9 18.6-10.8 25.1l-132 124.4c-7.2 6.8-16.7 10.5-26.5 10.5-21.4 0-38.7-17.3-38.7-38.7V336H40c-22.1 0-40-17.9-40-40v-80c0-22.1 17.9-40 40-40h104v-41.3c0-21.4 17.3-38.7 38.7-38.7 9.9 0 19.3 3.8 26.5 10.5l132 124.4c6.9 6.5 10.8 15.6 10.8 25.1m-16 192h96c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48h-96c-8.8 0-16-7.2-16-16s7.2-16 16-16h96c44.2 0 80 35.8 80 80v288c0 44.2-35.8 80-80 80h-96c-8.8 0-16-7.2-16-16s7.2-16 16-16"
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
                  d="M332.7 264c2.1-2.1 3.3-5 3.3-8s-1.2-5.9-3.3-8L200.6 116.2c-2.7-2.7-6.4-4.2-10.2-4.2-8 0-14.4 6.5-14.4 14.4V200c0 4.4-3.6 8-8 8H32c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h136c4.4 0 8 3.6 8 8v73.6c0 8 6.5 14.4 14.4 14.4 3.8 0 7.5-1.5 10.2-4.2zm19.3-8c0 7.2-2.9 14.2-8 19.3L211.9 407.1c-5.7 5.7-13.4 8.9-21.5 8.9-16.8 0-30.4-13.6-30.4-30.4V320H32c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32h128v-65.6c0-16.8 13.6-30.4 30.4-30.4 8.1 0 15.8 3.2 21.5 8.9L344 236.7c5.1 5.1 8 12.1 8 19.3m-24 208h96c39.8 0 72-32.2 72-72V120c0-39.8-32.2-72-72-72h-96c-4.4 0-8-3.6-8-8s3.6-8 8-8h96c48.6 0 88 39.4 88 88v272c0 48.6-39.4 88-88 88h-96c-4.4 0-8-3.6-8-8s3.6-8 8-8"
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
                  d="M320 64c0 17.7 14.3 32 32 32h64c17.7 0 32 14.3 32 32v256c0 17.7-14.3 32-32 32h-64c-17.7 0-32 14.3-32 32s14.3 32 32 32h64c53 0 96-43 96-96V128c0-53-43-96-96-96h-64c-17.7 0-32 14.3-32 32"
                />
                <path
                  className="aps-icon-foreground"
                  d="M340.7 228.7 217.9 105.9c-6.4-6.4-15-9.9-24-9.9-18.7 0-33.9 15.2-33.9 33.9V192H32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h128v62.1c0 18.7 15.2 33.9 33.9 33.9 9 0 17.6-3.6 24-9.9l122.8-122.8c7.2-7.2 11.3-17.1 11.3-27.3s-4.1-20.1-11.3-27.3"
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
