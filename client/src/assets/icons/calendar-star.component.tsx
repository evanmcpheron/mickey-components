import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CalendarStarIcon: React.FC<
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
                  d="M128 0c17.7 0 32 14.3 32 32v32h128V32c0-17.7 14.3-32 32-32s32 14.3 32 32v32h48c26.5 0 48 21.5 48 48v48H0v-48c0-26.5 21.5-48 48-48h48V32c0-17.7 14.3-32 32-32M0 192h448v272c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48zm233.3 58.9c-3.8-7.7-14.8-7.7-18.7 0L191 298.7l-52.7 7.7c-8.5 1.2-11.9 11.7-5.8 17.7l38.2 37.2-9 52.5c-1.5 8.5 7.5 15 15.1 11L224 400l47.2 24.8c7.6 4 16.5-2.5 15.1-11l-9-52.5 38.2-37.2c6.2-6 2.8-16.5-5.8-17.7l-52.7-7.7-23.6-47.8z"
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
                  d="M128 0c13.3 0 24 10.7 24 24v40h144V24c0-13.3 10.7-24 24-24s24 10.7 24 24v40h40c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128c0-35.3 28.7-64 64-64h40V24c0-13.3 10.7-24 24-24m272 192H48v256c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16zm-166.7 50.9 23.6 47.8 52.7 7.7c8.5 1.2 11.9 11.7 5.8 17.7l-38.2 37.2 9 52.5c1.5 8.5-7.5 15-15.1 11L224 392l-47.2 24.8c-7.6 4-16.5-2.5-15.1-11l9-52.5-38.2-37.2c-6.2-6-2.8-16.5 5.8-17.7l52.7-7.7 23.6-47.8c3.8-7.7 14.8-7.7 18.7 0"
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
                  d="M128 16c0-8.8-7.2-16-16-16S96 7.2 96 16v48H64C28.7 64 0 92.7 0 128v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64h-32V16c0-8.8-7.2-16-16-16s-16 7.2-16 16v48H128zM32 192h384v256c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32zm32-96h320c17.7 0 32 14.3 32 32v32H32v-32c0-17.7 14.3-32 32-32m181.5 135.5c-8.8-17.8-34.2-17.8-43 0l-22 44.6-49.2 7.2c-19.7 2.9-27.5 27.1-13.3 40.9l35.6 34.7-8.4 49c-3.4 19.6 17.2 34.6 34.8 25.3l44-23.2 44 23.2c17.6 9.3 38.2-5.7 34.8-25.3l-8.4-49 35.6-34.7c14.2-13.9 6.4-38.1-13.3-40.9l-49.2-7.2zm-40.1 66.3 18.6-37.6 18.6 37.6 3.7 7.5 8.3 1.2 41.5 6-30 29.3-6 5.9 1.4 8.3 7.1 41.4-37.1-19.5-7.4-3.9-7.4 3.9-37.1 19.5 7.1-41.4 1.4-8.3-6-5.9-30-29.3 41.5-6 8.3-1.2 3.7-7.5z"
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
                  d="M128 8c0-4.4-3.6-8-8-8s-8 3.6-8 8v56H64C28.7 64 0 92.7 0 128v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64h-48V8c0-4.4-3.6-8-8-8s-8 3.6-8 8v56H128zM16 192h416v256c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48zm96-112v40c0 4.4 3.6 8 8 8s8-3.6 8-8V80h192v40c0 4.4 3.6 8 8 8s8-3.6 8-8V80h48c26.5 0 48 21.5 48 48v48H16v-48c0-26.5 21.5-48 48-48zm126.3 171c-5.9-11.9-22.8-11.9-28.7 0l-23.9 48.4-53.4 7.8c-13.1 1.9-18.4 18-8.9 27.3l38.6 37.7-9 53.1c-2.2 13.1 11.5 23 23.2 16.9L224 417l47.8 25.1c11.7 6.2 25.5-3.8 23.2-16.9l-9.1-53.2 38.6-37.7c9.5-9.3 4.3-25.4-8.9-27.3l-53.4-7.8zm-14.3 7.1 25.7 52.2 1.9 3.8 4.2.6 57.6 8.4-41.7 40.6-3 2.9.7 4.1 9.8 57.3-51.5-27.1-3.7-2-3.7 2-51.5 27.1 9.8-57.3.7-4.1-3-2.9-41.6-40.7 57.6-8.4 4.2-.6 1.9-3.8z"
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
                  d="M448 192H0v272c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48zm-214.7 58.9 23.6 47.8 52.7 7.7c8.5 1.2 11.9 11.7 5.8 17.7l-38.2 37.2 9 52.5c1.5 8.5-7.5 15-15.1 11L224 400l-47.2 24.8c-7.6 4-16.5-2.5-15.1-11l9-52.5-38.2-37.2c-6.2-6-2.8-16.5 5.8-17.7l52.7-7.7 23.6-47.8c3.8-7.7 14.8-7.7 18.7 0"
                />
                <path
                  className="aps-icon-foreground"
                  d="M128 0c-17.7 0-32 14.3-32 32v32H48C21.5 64 0 85.5 0 112v80h448v-80c0-26.5-21.5-48-48-48h-48V32c0-17.7-14.3-32-32-32s-32 14.3-32 32v32H160V32c0-17.7-14.3-32-32-32m105.3 250.9c-3.8-7.7-14.8-7.7-18.7 0L191 298.7l-52.7 7.7c-8.5 1.2-11.9 11.7-5.8 17.7l38.2 37.2-9 52.5c-1.5 8.5 7.5 15 15.1 11L224 400l47.2 24.8c7.6 4 16.5-2.5 15.1-11l-9-52.5 38.2-37.2c6.2-6 2.8-16.5-5.8-17.7l-52.7-7.7-23.6-47.8z"
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
