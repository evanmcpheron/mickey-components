import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const PaintbrushFineIcon: React.FC<
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
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M559.6 16.4c21.9 21.9 21.9 57.3 0 79.2L306.9 348.3l-79.2-79.2L480.4 16.4c21.9-21.9 57.3-21.9 79.2 0M205.1 291.7l79.2 79.2-.1.1c2.5 9.3 3.8 19 3.8 29 0 61.9-50.1 112-112 112H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h4.8c17.6 0 29.6-18.9 27.8-36.4-.4-3.8-.6-7.7-.6-11.6 0-61.9 50.1-112 112-112 10 0 19.8 1.3 29 3.8z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M489 57 306.2 239.7l30.1 30.1L519 87c8.3-8.3 8.3-21.8 0-30.1s-21.8-8.3-30.1 0zM210.5 325c-8.2-3.3-17.2-5-26.5-5-39.8 0-72 32.2-72 72 0 3.8.3 7.5.8 11.1 3.3 21.4-2.2 43.1-13.8 60l-.7.9H184c39.8 0 72-32.2 72-72 0-9.4-1.8-18.3-5-26.5zm-6.2-51.3L455 23c27-27 70.9-27 97.9 0s27 70.9 0 97.9L302.3 371.7c1.1 6.6 1.7 13.4 1.7 20.3 0 66.3-53.7 120-120 120H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h6c18.1 0 30.1-19.8 27.4-37.6-.9-6-1.4-12.1-1.4-18.4 0-66.3 53.7-120 120-120 6.9 0 13.7.6 20.3 1.7"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M534.5 41.4c-12.5-12.5-32.8-12.5-45.3 0L324.6 206l45.3 45.3L534.5 86.6c12.5-12.5 12.5-32.8 0-45.3zM302 228.6l-36.6 36.6-40.8 40.8 45.3 45.3 4.6-4.6 36.1-36.1 36.6-36.6zm-106.1 93.9c-6.3-1.6-13-2.5-19.9-2.5-44.2 0-80 35.8-80 80 0 2.8.1 5.6.4 8.3 1.7 16.7-3 33.6-12.5 46.7-9.6 13.5-25.9 25-47.1 25H176c44.2 0 80-35.8 80-80 0-6.9-.9-13.5-2.5-19.9l-57.7-57.7zm361.3-213.2L286.3 380.2c1.1 6.4 1.7 13.1 1.7 19.8 0 61.9-50.1 112-112 112H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h4.8c17.6 0 29.6-18.9 27.8-36.4-.4-3.8-.6-7.7-.6-11.6 0-61.9 50.1-112 112-112 6.7 0 13.3.6 19.7 1.7l271-271c25-25 65.5-25 90.5 0s25 65.5 0 90.5z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M548.2 27.7c-15.6-15.6-40.9-15.6-56.6 0L297.3 222l56.6 56.6L548.2 84.3c15.6-15.6 15.6-40.9 0-56.6M286 233.3l-26.3 26.3-54.4 54.4 56.6 56.6 2.3-2.3 52.1-52.1 26.3-26.3zm-94 90c-7.6-2.2-15.7-3.3-24-3.3-48.6 0-88 39.4-88 88 0 1.4 0 2.9.1 4.3.6 12.3-3.3 24.7-10.6 34.3-7.3 9.7-19 17.4-33.5 17.4h-4c-8.8 0-16 7.2-16 16s7.2 16 16 16h141c.6-.1 1.3-.2 1.9-.3 45.4-3.5 81.1-41.5 81.1-87.7 0-8.3-1.2-16.4-3.3-24zM559.5 95.6 269.6 385.5q2.4 10.8 2.4 22.5c0 54.7-42.2 99.5-95.9 103.7-.1 0-.1.1-.1.2s-.1.2-.2.2H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h4c17.1 0 29-17.8 28.2-35-.1-1.7-.1-3.4-.1-5 0-57.4 46.6-104 104-104 7.7 0 15.1.8 22.3 2.4l290-290c21.9-21.9 57.3-21.9 79.2 0s21.9 57.3 0 79.2z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M205 291.8c-9.2-2.5-19-3.8-29-3.8-61.9 0-112 50.1-112 112 0 3.9.2 7.8.6 11.6 1.8 17.5-10.2 36.4-27.8 36.4H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h144c61.9 0 112-50.1 112-112 0-10-1.3-19.7-3.8-29 0-.1 0-.1-.1-.2l-78.9-78.9c-.1 0-.1 0-.2-.1"
                />
                <path
                  className="aps-icon-foreground"
                  d="M559.6 95.6c21.9-21.9 21.9-57.3 0-79.2s-57.3-21.9-79.2 0L205.1 291.7l79.2 79.2z"
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
