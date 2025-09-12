import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const LeftToLineIcon: React.FC<
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
                  d="M230.1 406.1 107.3 283.3C100.1 276.1 96 266.2 96 256s4.1-20.1 11.3-27.3l122.8-122.8c6.4-6.4 15-9.9 24-9.9 18.7 0 33.9 15.2 33.9 33.9V192h128c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H288v62.1c0 18.7-15.2 33.9-33.9 33.9-9 0-17.6-3.6-24-9.9M64 96v320c0 17.7-14.3 32-32 32S0 433.7 0 416V96c0-17.7 14.3-32 32-32s32 14.3 32 32"
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
                  d="M256 146.2 146 256l110 109.8V312c0-13.3 10.7-24 24-24h120v-64H280c-13.3 0-24-10.7-24-24zM96 256c0-11.5 4.6-22.5 12.7-30.6l116.1-115.8c8.7-8.7 20.5-13.6 32.8-13.6 25.6 0 46.4 20.8 46.4 46.4V176h96c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48h-96v33.6c0 25.6-20.8 46.4-46.4 46.4-12.3 0-24.1-4.9-32.8-13.6L108.7 286.6C100.6 278.5 96 267.5 96 256M48 88v336c0 13.3-10.7 24-24 24S0 437.3 0 424V88c0-13.3 10.7-24 24-24s24 10.7 24 24"
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
                  d="M32 432V80c0-8.8-7.2-16-16-16S0 71.2 0 80v352c0 8.8 7.2 16 16 16s16-7.2 16-16m96.8-174.2c-.5-.5-.8-1.1-.8-1.8s.3-1.4.8-1.8l131.9-124.4c1.2-1.2 2.9-1.8 4.6-1.8 3.7 0 6.7 3 6.7 6.7V192c0 8.8 7.2 16 16 16h120c4.4 0 8 3.6 8 8v80c0 4.4-3.6 8-8 8H288c-8.8 0-16 7.2-16 16v57.3c0 3.7-3 6.7-6.7 6.7-1.7 0-3.3-.6-4.6-1.8zM96 256c0 9.5 3.9 18.6 10.8 25.1l132 124.4c7.2 6.8 16.7 10.5 26.5 10.5 21.4 0 38.7-17.3 38.7-38.7V336h104c22.1 0 40-17.9 40-40v-80c0-22.1-17.9-40-40-40H304v-41.3c0-21.4-17.3-38.7-38.7-38.7-9.9 0-19.3 3.8-26.5 10.5l-132 124.4C99.9 237.4 96 246.5 96 256"
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
                  d="M16 440V72c0-4.4-3.6-8-8-8s-8 3.6-8 8v368c0 4.4 3.6 8 8 8s8-3.6 8-8m99.3-176c-2.1-2.1-3.3-5-3.3-8s1.2-5.9 3.3-8l132.1-131.8c2.7-2.7 6.4-4.2 10.2-4.2 8 0 14.4 6.5 14.4 14.4V200c0 4.4 3.6 8 8 8h136c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H280c-4.4 0-8 3.6-8 8v73.6c0 8-6.5 14.4-14.4 14.4-3.8 0-7.5-1.5-10.2-4.2zM96 256c0 7.2 2.9 14.2 8 19.3l132.1 131.8c5.7 5.7 13.4 8.9 21.5 8.9 16.8 0 30.4-13.6 30.4-30.4V320h128c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32H288v-65.6c0-16.8-13.6-30.4-30.4-30.4-8.1 0-15.8 3.2-21.5 8.9L104 236.7c-5.1 5.1-8 12.1-8 19.3"
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
                  d="M0 96v320c0 17.7 14.3 32 32 32s32-14.3 32-32V96c0-17.7-14.3-32-32-32S0 78.3 0 96"
                />
                <path
                  className="aps-icon-foreground"
                  d="m107.3 283.3 122.8 122.8c6.4 6.4 15 9.9 24 9.9 18.7 0 33.9-15.2 33.9-33.9V320h128c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32H288v-62.1c0-18.7-15.2-33.9-33.9-33.9-9 0-17.6 3.6-24 9.9L107.3 228.7C100.1 235.9 96 245.8 96 256s4.1 20.1 11.3 27.3"
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
