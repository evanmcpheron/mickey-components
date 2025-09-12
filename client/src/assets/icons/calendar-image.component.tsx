import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CalendarImageIcon: React.FC<
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
                  d="M96 32v32H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48h-48V32c0-17.7-14.3-32-32-32s-32 14.3-32 32v32H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32m352 160H0v272c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48zM147.2 360.7c6.5-8.4 19.1-8.3 25.5.2L184 376l58.3-84.2c6.5-9.4 20.5-9.1 26.7.5l83.4 131.1c6.8 10.6-.9 24.6-13.5 24.6H112.5c-13.3 0-20.8-15.2-12.7-25.8l47.3-61.5zM128 256a32 32 0 1 1 0 64 32 32 0 1 1 0-64"
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
                  d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24v40H64C28.7 64 0 92.7 0 128v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64h-40V24c0-13.3-10.7-24-24-24s-24 10.7-24 24v40H152zM48 192h352v256c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16zm99.2 136.7-47.4 61.5c-8.1 10.5-.6 25.8 12.7 25.8h226.4c12.6 0 20.3-13.9 13.5-24.6l-83.5-131.1c-6.1-9.7-20.1-9.9-26.7-.5L184 344l-11.4-15.1c-6.4-8.5-19-8.5-25.5-.2zM128 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
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
                  d="M112 0c8.8 0 16 7.2 16 16v48h192V16c0-8.8 7.2-16 16-16s16 7.2 16 16v48h32c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128c0-35.3 28.7-64 64-64h32V16c0-8.8 7.2-16 16-16m304 192H32v256c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32zm-32-96H64c-17.7 0-32 14.3-32 32v32h384v-32c0-17.7-14.3-32-32-32M230 265.4c12.5-18.1 39.2-18.4 52.2-.6l96.3 132.4c15.4 21.2.3 50.8-25.9 50.8H95.1c-26 0-41.2-29.4-26-50.6l51-71.3c11.5-16.1 34.7-18 48.7-4l13.1 13.1zM352.6 416l-96.3-132.4-59.2 85.5c-2.7 3.9-7 6.4-11.7 6.8s-9.4-1.3-12.8-4.6L146 344.7 95.1 416zM96 232a24 24 0 1 1 0 48 24 24 0 1 1 0-48"
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
                  d="M120 0c4.4 0 8 3.6 8 8v56h192V8c0-4.4 3.6-8 8-8s8 3.6 8 8v56h48c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128c0-35.3 28.7-64 64-64h48V8c0-4.4 3.6-8 8-8m312 192H16v256c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48zm-320-72V80H64c-26.5 0-48 21.5-48 48v48h416v-48c0-26.5-21.5-48-48-48h-48v40c0 4.4-3.6 8-8 8s-8-3.6-8-8V80H128v40c0 4.4-3.6 8-8 8s-8-3.6-8-8m150.8 166.9c-3.2-4.5-9.9-4.4-13 .2l-59.2 85.5c-1.4 2-3.5 3.2-5.9 3.4s-4.7-.6-6.4-2.3L151.7 347c-3.5-3.5-9.3-3-12.2 1l-51 71.3c-3.8 5.3 0 12.6 6.5 12.6h257.6c6.5 0 10.3-7.4 6.5-12.7zm-26.2-9c9.4-13.6 29.4-13.8 39.1-.5L372 409.9c11.5 15.9.2 38.1-19.4 38.1H95.1c-19.5 0-30.9-22.1-19.5-37.9l51-71.3c8.6-12.1 26-13.5 36.5-3l19.9 19.9 53.6-77.7zM96 272a16 16 0 1 0 32 0 16 16 0 1 0-32 0m16 32a32 32 0 1 1 0-64 32 32 0 1 1 0 64"
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
                  d="M0 192h448v272c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48zm147.2 168.7-47.4 61.5c-8.1 10.5-.6 25.8 12.7 25.8h226.4c12.6 0 20.3-13.9 13.5-24.6l-83.5-131.1c-6.1-9.7-20.1-9.9-26.7-.5L184 376l-11.4-15.1c-6.4-8.5-19-8.5-25.5-.2zM128 320a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
                />
                <path
                  className="aps-icon-foreground"
                  d="M128 0c-17.7 0-32 14.3-32 32v32H48C21.5 64 0 85.5 0 112v80h448v-80c0-26.5-21.5-48-48-48h-48V32c0-17.7-14.3-32-32-32s-32 14.3-32 32v32H160V32c0-17.7-14.3-32-32-32M99.8 422.2c-8.1 10.5-.6 25.8 12.7 25.8h226.4c12.6 0 20.3-13.9 13.5-24.6l-83.5-131.1c-6.1-9.7-20.1-9.9-26.7-.5L184 376l-11.4-15.1c-6.4-8.5-19-8.5-25.5-.2z"
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
