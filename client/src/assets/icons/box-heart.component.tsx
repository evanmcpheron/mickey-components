import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BoxHeartIcon: React.FC<
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
                  d="M93.7 32H208v128H0L50.7 58.5C58.9 42.3 75.5 32 93.7 32M240 32h114.3c18.2 0 34.8 10.3 42.9 26.5L448 160H240zM0 192h448v224c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm212.7 228.7c6.2 6.2 16.4 6.2 22.6 0l77.3-77.3c20.5-20.5 20.5-53.8 0-74.3s-53.8-20.5-74.3 0L224 283.4l-14.3-14.3c-20.5-20.5-53.8-20.5-74.3 0s-20.5 53.8 0 74.3z"
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
                  d="M248 80h94.4c6.3 0 12.1 3.7 14.6 9.5l31.4 70.5H248zM48 208h352v208c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16zm152-48H59.6L91 89.5c2.6-5.8 8.3-9.5 14.6-9.5H200zm200.9-90c-10.3-23.1-33.2-38-58.5-38H105.6c-25.3 0-48.2 14.9-58.5 38L5.5 163.6c-3.6 8.2-5.5 17-5.5 26V416c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V189.6c0-9-1.9-17.8-5.5-26zM212.7 404.7c6.2 6.2 16.4 6.2 22.6 0l77.3-77.3c20.5-20.5 20.5-53.8 0-74.3s-53.8-20.5-74.3 0L224 267.4l-14.3-14.3c-20.5-20.5-53.8-20.5-74.3 0s-20.5 53.8 0 74.3z"
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
                  d="M240 64h102.4c12.6 0 24.1 7.4 29.2 19l34.2 77H240zm0 128h176v224c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V192h208m-32-32H42.1l34.2-77c5.1-11.6 16.6-19 29.2-19H208zm192.9-90c-10.3-23.1-33.2-38-58.5-38H105.6c-25.3 0-48.2 14.9-58.5 38L5.5 163.6c-3.6 8.2-5.5 17-5.5 26V416c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V189.6c0-9-1.9-17.8-5.5-26zM146.7 264.5c14.3-14.3 37.4-14.3 51.7 0l14.3 14.3c3 3 7.1 4.7 11.3 4.7s8.3-1.7 11.3-4.7l14.3-14.3c14.3-14.3 37.4-14.3 51.7 0s14.3 37.4 0 51.7L224 393.4l-77.3-77.3c-14.3-14.3-14.3-37.4 0-51.7zm74.3-22.7c-26.8-26.8-70.2-26.8-96.9 0s-26.8 70.2 0 96.9l77.3 77.3c12.5 12.5 32.8 12.5 45.3 0l77.3-77.3c26.8-26.8 26.8-70.2 0-96.9s-70.2-26.8-96.9 0l-3 3-3-3z"
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
                  d="M232 48h110.4c19 0 36.2 11.2 43.9 28.5l41.6 93.6c.9 1.9 1.6 3.9 2.2 5.9H232zM16 192h416v224c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48zm200-16H18c.6-2 1.3-4 2.2-5.9l41.5-93.6C69.4 59.2 86.6 48 105.6 48H216zM400.9 70c-10.3-23.1-33.2-38-58.5-38H105.6c-25.3 0-48.2 14.9-58.5 38L5.5 163.6c-3.6 8.2-5.5 17-5.5 26V416c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V189.6c0-9-1.9-17.8-5.5-26zM141.1 258.8c17.4-17.4 45.6-17.4 63 0l14.3 14.3c1.5 1.5 3.5 2.3 5.7 2.3s4.2-.8 5.7-2.3l14.3-14.3c17.4-17.4 45.6-17.4 63 0s17.4 45.6 0 63L229.7 399c-3.1 3.1-8.2 3.1-11.3 0l-77.3-77.3c-17.4-17.4-17.4-45.6 0-63zm74.3-11.3c-23.6-23.6-62-23.6-85.6 0s-23.6 62 0 85.6l77.2 77.2c9.4 9.4 24.6 9.4 33.9 0l77.3-77.3c23.6-23.6 23.6-62 0-85.6s-62-23.6-85.6 0L224 256l-8.6-8.6z"
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
                  d="M93.7 32c-18.2 0-34.8 10.3-43 26.5L0 160h208V32zM240 32v128h208L397.3 58.5c-8.2-16.2-24.8-26.5-43-26.5z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M448 160H240V32h-32v128H0v256c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64zM212.7 404.7l-77.3-77.3c-20.5-20.5-20.5-53.8 0-74.3s53.8-20.5 74.3 0l14.3 14.3 14.3-14.3c20.5-20.5 53.8-20.5 74.3 0s20.5 53.8 0 74.3l-77.3 77.3c-6.2 6.2-16.4 6.2-22.6 0"
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
