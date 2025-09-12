import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CalendarHeartIcon: React.FC<
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
                  d="M128 0c17.7 0 32 14.3 32 32v32h128V32c0-17.7 14.3-32 32-32s32 14.3 32 32v32h48c26.5 0 48 21.5 48 48v48H0v-48c0-26.5 21.5-48 48-48h48V32c0-17.7 14.3-32 32-32M0 192h448v272c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48zm112 125.3c0 16.2 6.5 31.8 17.9 43.3l82.7 82.7c6.2 6.2 16.4 6.2 22.6 0l82.7-82.7c11.5-11.5 17.9-27.1 17.9-43.3 0-33.8-27.4-61.3-61.3-61.3-16.2 0-31.8 6.5-43.3 17.9l-7.4 7.4-7.4-7.4c-11.5-11.5-27.1-17.9-43.3-17.9-33.8 0-61.3 27.4-61.3 61.3z"
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
                  d="M128 0c13.3 0 24 10.7 24 24v40h144V24c0-13.3 10.7-24 24-24s24 10.7 24 24v40h40c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128c0-35.3 28.7-64 64-64h40V24c0-13.3 10.7-24 24-24m272 192H48v256c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16zM112 301.3c0-33.8 27.4-61.3 61.3-61.3 16.2 0 31.8 6.5 43.3 17.9l7.4 7.4 7.4-7.4c11.5-11.5 27.1-17.9 43.3-17.9 33.8 0 61.3 27.4 61.3 61.3 0 16.2-6.5 31.8-17.9 43.3l-82.7 82.7c-6.2 6.2-16.4 6.2-22.6 0l-82.7-82.7c-11.5-11.5-17.9-27.1-17.9-43.3z"
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
                  d="M128 16c0-8.8-7.2-16-16-16S96 7.2 96 16v48H64C28.7 64 0 92.7 0 128v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64h-32V16c0-8.8-7.2-16-16-16s-16 7.2-16 16v48H128zM32 192h384v256c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32zm32-96h320c17.7 0 32 14.3 32 32v32H32v-32c0-17.7 14.3-32 32-32m80 205.3c0-16.2 13.1-29.3 29.3-29.3 7.8 0 15.2 3.1 20.7 8.6l18.7 18.7c6.2 6.2 16.4 6.2 22.6 0l18.7-18.7c5.5-5.5 12.9-8.6 20.7-8.6 16.2 0 29.3 13.1 29.3 29.3 0 7.8-3.1 15.2-8.6 20.7L224 393.4 152.6 322c-5.5-5.5-8.6-12.9-8.6-20.7m29.3-61.3c-33.8 0-61.3 27.4-61.3 61.3 0 16.2 6.5 31.8 17.9 43.3l82.7 82.7c6.2 6.2 16.4 6.2 22.6 0l82.7-82.7c11.5-11.5 17.9-27.1 17.9-43.3 0-33.8-27.4-61.3-61.3-61.3-16.2 0-31.8 6.5-43.3 17.9l-7.4 7.4-7.4-7.4c-11.5-11.5-27.1-17.9-43.3-17.9z"
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
                  d="M128 8c0-4.4-3.6-8-8-8s-8 3.6-8 8v56H64C28.7 64 0 92.7 0 128v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64h-48V8c0-4.4-3.6-8-8-8s-8 3.6-8 8v56H128zM16 192h416v256c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48zm96-112v40c0 4.4 3.6 8 8 8s8-3.6 8-8V80h192v40c0 4.4 3.6 8 8 8s8-3.6 8-8V80h48c26.5 0 48 21.5 48 48v48H16v-48c0-26.5 21.5-48 48-48zm16 225.9c0-23.2 18.8-41.9 41.9-41.9 11.1 0 21.8 4.4 29.7 12.3l18.7 18.7c1.5 1.5 3.5 2.3 5.7 2.3s4.2-.8 5.7-2.3l18.7-18.7c7.9-7.9 18.5-12.3 29.7-12.3 23.2 0 41.9 18.8 41.9 41.9v.6c0 10.6-4 20.9-11.2 28.8l-78.9 86.1c-1.5 1.7-3.7 2.6-5.9 2.6s-4.4-.9-5.9-2.6l-78.9-86.1c-7.2-7.8-11.2-18.1-11.2-28.8zm41.9-57.9c-32 0-57.9 25.9-57.9 57.9v.6c0 14.7 5.5 28.8 15.4 39.6l78.9 86.1c4.5 5 11 7.8 17.7 7.8s13.1-2.8 17.7-7.8l78.9-86.1a58.55 58.55 0 0 0 15.4-39.6v-.6c0-32-25.9-57.9-57.9-57.9-15.4 0-30.1 6.1-41 17L224 278.1 210.9 265c-10.9-10.9-25.6-17-41-17"
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
                  d="M448 192H0v272c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48zM112 317.3c0-33.8 27.4-61.3 61.3-61.3 16.2 0 31.8 6.5 43.3 17.9l7.4 7.4 7.4-7.4c11.5-11.5 27.1-17.9 43.3-17.9 33.8 0 61.3 27.4 61.3 61.3 0 16.2-6.5 31.8-17.9 43.3l-82.7 82.7c-6.2 6.2-16.4 6.2-22.6 0l-82.7-82.7c-11.5-11.5-17.9-27.1-17.9-43.3z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M128 0c-17.7 0-32 14.3-32 32v32H48C21.5 64 0 85.5 0 112v80h448v-80c0-26.5-21.5-48-48-48h-48V32c0-17.7-14.3-32-32-32s-32 14.3-32 32v32H160V32c0-17.7-14.3-32-32-32m-16 317.3c0 16.2 6.5 31.8 17.9 43.3l82.7 82.7c6.2 6.2 16.4 6.2 22.6 0l82.7-82.7c11.5-11.5 17.9-27.1 17.9-43.3 0-33.8-27.4-61.3-61.3-61.3-16.2 0-31.8 6.5-43.3 17.9l-7.4 7.4-7.4-7.4c-11.5-11.5-27.1-17.9-43.3-17.9-33.8 0-61.3 27.4-61.3 61.3z"
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
