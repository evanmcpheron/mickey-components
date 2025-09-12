import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const MarsStrokeIcon: React.FC<
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
                  d="M376 0c-9.7 0-18.5 5.8-22.2 14.8S352.1 34.1 359 41l33.4 33.4-22.1 22L345 71c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l25.4 25.4-28.7 28.7c-28.4-19.5-62.7-31-99.8-31-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176c0-37-11.4-71.4-31-99.8l28.6-28.6L407 201c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-25.4-25.4 22.1-22.1L471 153c6.9 6.9 17.2 8.9 26.2 5.2S512 145.7 512 136V24c0-13.3-10.7-24-24-24zM96 304a112 112 0 1 1 224 0 112 112 0 1 1-224 0"
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
                  d="M352 24c0-13.3 10.7-24 24-24h112c13.3 0 24 10.7 24 24v112c0 13.3-10.7 24-24 24s-24-10.7-24-24V81.9L409.9 136l31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-31-31-27.7 27.7C370.7 227.2 384 264.1 384 304c0 97.2-78.8 176-176 176S32 401.2 32 304s78.8-176 176-176c39.9 0 76.8 13.3 106.3 35.7l27.8-27.7-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l31 31L430.1 48H376c-13.3 0-24-10.7-24-24M208 432a128 128 0 1 0 0-256 128 128 0 1 0 0 256"
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
                  d="M368 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h89.4L384 105.4l-36.7-36.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l36.7 36.7-40.7 40.7C290.1 143.3 250.8 128 208 128c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176c0-42.8-15.3-82.1-40.7-112.6l40.7-40.8 36.7 36.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L406.6 128 480 54.6V144c0 8.8 7.2 16 16 16s16-7.2 16-16V16c0-8.8-7.2-16-16-16zM64 304a144 144 0 1 1 288 0 144 144 0 1 1-288 0"
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
                  d="M376 0c-4.4 0-8 3.6-8 8s3.6 8 8 8h108.7L392 108.7l-42.3-42.4c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l42.3 42.4-50.3 50.3c-1.4 1.4-2.1 3.1-2.3 4.9C296.6 145.9 254.4 128 208 128c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176c0-46.4-17.9-88.6-47.3-120 1.8-.2 3.6-.9 4.9-2.3l50.4-50.4 42.3 42.3c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L403.3 120 496 27.3V136c0 4.4 3.6 8 8 8s8-3.6 8-8V8c0-4.4-3.6-8-8-8zM48 304a160 160 0 1 1 320 0 160 160 0 1 1-320 0"
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
                  d="M128 304a80 80 0 1 1 160 0 80 80 0 1 1-160 0"
                />
                <path
                  className="aps-icon-foreground"
                  d="M376 0c-9.7 0-18.5 5.8-22.2 14.8S352.1 34.1 359 41l33.4 33.4-22.1 22L345 71c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l25.4 25.4-28.7 28.7c-28.4-19.5-62.7-31-99.8-31-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176c0-37-11.4-71.4-31-99.8l28.6-28.6L407 201c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-25.4-25.4 22.1-22.1L471 153c6.9 6.9 17.2 8.9 26.2 5.2S512 145.7 512 136V24c0-13.3-10.7-24-24-24zM96 304a112 112 0 1 1 224 0 112 112 0 1 1-224 0"
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
