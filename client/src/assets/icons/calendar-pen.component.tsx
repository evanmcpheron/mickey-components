import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CalendarPenIcon: React.FC<
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
                  d="M128 0c17.7 0 32 14.3 32 32v32h128V32c0-17.7 14.3-32 32-32s32 14.3 32 32v32h48c26.5 0 48 21.5 48 48v48H0v-48c0-26.5 21.5-48 48-48h48V32c0-17.7 14.3-32 32-32M0 192h448v272c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48zm308.8 75c-14.7-14.7-38.6-14.7-53.3 0l-14.9 15 53.3 53.3 14.9-14.9c14.7-14.7 14.7-38.6 0-53.3zM146.1 376.5c-4.1 4.1-7 9.2-8.4 14.9l-9.2 36.6c-1.4 5.5.2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l36.6-9.2c5.6-1.4 10.8-4.3 14.9-8.4l71.9-71.9-53.3-53.3z"
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
                  d="M128 0c13.3 0 24 10.7 24 24v40h144V24c0-13.3 10.7-24 24-24s24 10.7 24 24v40h40c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128c0-35.3 28.7-64 64-64h40V24c0-13.3 10.7-24 24-24m272 192H48v256c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16zm-91.2 51c14.7 14.7 14.7 38.6 0 53.3l-14.9 14.9-53.3-53.2 14.9-15c14.7-14.7 38.6-14.7 53.3 0M146.1 352.5l71.9-71.9 53.3 53.3-71.9 71.9c-4.1 4.1-9.2 7-14.9 8.4l-36.6 9.2c-5.5 1.4-11.2-.2-15.2-4.2s-5.6-9.7-4.2-15.2l9.2-36.6c1.4-5.6 4.3-10.8 8.4-14.9"
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
                  d="M112 0c8.8 0 16 7.2 16 16v48h192V16c0-8.8 7.2-16 16-16s16 7.2 16 16v48h32c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128c0-35.3 28.7-64 64-64h32V16c0-8.8 7.2-16 16-16m304 192H32v256c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32zm-32-96H64c-17.7 0-32 14.3-32 32v32h384v-32c0-17.7-14.3-32-32-32m-88.4 161.9c-6.2-6.2-16.4-6.2-22.6 0l-12.2 12.2 29.1 29.1 12.2-12.2c6.2-6.2 6.2-16.4 0-22.6l-6.4-6.4zm-28.4 63.9-29.1-29.1L150 381l-8.6 37.7L179 410zm-16.9-86.5c18.7-18.7 49.1-18.7 67.9 0l6.4 6.4c18.7 18.7 18.7 49.1 0 67.9l-123 123c-4.3 4.3-9.6 7.2-15.5 8.6L136 452.7c-17.3 4-32.7-11.5-28.8-28.8l11.5-50.2c1.3-5.9 4.3-11.2 8.6-15.5l123-123z"
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
                  d="M128 8c0-4.4-3.6-8-8-8s-8 3.6-8 8v56H64C28.7 64 0 92.7 0 128v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64h-48V8c0-4.4-3.6-8-8-8s-8 3.6-8 8v56H128zM16 192h416v256c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48zm96-112v40c0 4.4 3.6 8 8 8s8-3.6 8-8V80h192v40c0 4.4 3.6 8 8 8s8-3.6 8-8V80h48c26.5 0 48 21.5 48 48v48H16v-48c0-26.5 21.5-48 48-48zm189.3 172.3 6.4 6.4c9.4 9.4 9.4 24.6 0 33.9l-17.9 17.9-40.4-40.4 17.9-17.9c9.4-9.4 24.6-9.4 33.9 0zm-157 123 93.9-93.9 40.4 40.4-93.9 93.9q-1.65 1.65-3.9 2.1l-50.2 11.5 11.5-50.2c.3-1.5 1.1-2.8 2.1-3.9zM256 241 133 364c-3.2 3.2-5.4 7.2-6.4 11.6l-11.5 50.2c-2.6 11.5 7.7 21.8 19.2 19.2l50.2-11.5c4.4-1 8.4-3.2 11.6-6.4L319 304c15.6-15.6 15.6-40.9 0-56.6l-6.4-6.4c-15.6-15.6-40.9-15.6-56.6 0"
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
                  d="M448 192H0v272c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48zm-139.2 75c14.7 14.7 14.7 38.6 0 53.3l-14.9 14.9-53.3-53.2 14.9-15c14.7-14.7 38.6-14.7 53.3 0M146.1 376.5l71.9-71.9 53.3 53.3-71.9 71.9c-4.1 4.1-9.2 7-14.9 8.4l-36.6 9.2c-5.5 1.4-11.2-.2-15.2-4.2s-5.6-9.7-4.2-15.2l9.2-36.6c1.4-5.6 4.3-10.8 8.4-14.9"
                />
                <path
                  className="aps-icon-foreground"
                  d="M128 0c-17.7 0-32 14.3-32 32v32H48C21.5 64 0 85.5 0 112v80h448v-80c0-26.5-21.5-48-48-48h-48V32c0-17.7-14.3-32-32-32s-32 14.3-32 32v32H160V32c0-17.7-14.3-32-32-32m180.8 267c-14.7-14.7-38.6-14.7-53.3 0l-14.9 15 53.3 53.3 14.9-14.9c14.7-14.7 14.7-38.6 0-53.3zM146.1 376.5c-4.1 4.1-7 9.2-8.4 14.9l-9.2 36.6c-1.4 5.5.2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l36.6-9.2c5.6-1.4 10.8-4.3 14.9-8.4l71.9-71.9-53.3-53.3z"
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
