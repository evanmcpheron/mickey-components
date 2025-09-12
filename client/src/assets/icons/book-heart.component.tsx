import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BookHeartIcon: React.FC<
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
                  d="M0 96C0 43 43 0 96 0h320c17.7 0 32 14.3 32 32v320c0 17.7-14.3 32-32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-53 0-96-43-96-96zm64 320c0 17.7 14.3 32 32 32h256v-64H96c-17.7 0-32 14.3-32 32m64-258.7c0 16.2 6.5 31.8 17.9 43.3l82.7 82.7c6.2 6.2 16.4 6.2 22.6 0l82.7-82.7c11.5-11.5 17.9-27.1 17.9-43.3 0-33.8-27.4-61.3-61.3-61.3-16.2 0-31.8 6.5-43.3 17.9l-7.4 7.4-7.4-7.4C221.1 102.5 205.5 96 189.3 96c-33.8 0-61.3 27.4-61.3 61.3"
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
                  d="M0 88C0 39.4 39.4 0 88 0h304c30.9 0 56 25.1 56 56v288c0 22.3-13.1 41.6-32 50.6V464h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H80c-44.2 0-80-35.8-80-80 0-2.7.1-5.4.4-8H0zm80 312c-17.7 0-32 14.3-32 32s14.3 32 32 32h288v-64zm-32-41.3c9.8-4.3 20.6-6.7 32-6.7h312c4.4 0 8-3.6 8-8V56c0-4.4-3.6-8-8-8H88c-22.1 0-40 17.9-40 40zm80-185.4c0-33.8 27.4-61.3 61.3-61.3 16.2 0 31.8 6.5 43.3 17.9l7.4 7.4 7.4-7.4c11.5-11.5 27.1-17.9 43.3-17.9 33.8 0 61.3 27.4 61.3 61.3 0 16.2-6.5 31.8-17.9 43.3l-82.7 82.7c-6.2 6.2-16.4 6.2-22.6 0l-82.7-82.7c-11.5-11.5-17.9-27.1-17.9-43.3z"
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
                  d="M0 64C0 28.7 28.7 0 64 0h336c26.5 0 48 21.5 48 48v320c0 20.9-13.4 38.7-32 45.3V480h16c8.8 0 16 7.2 16 16s-7.2 16-16 16H64c-35.3 0-64-28.7-64-64zm64 352c-17.7 0-32 14.3-32 32s14.3 32 32 32h320v-64zm-32-23.4c9.4-5.4 20.3-8.6 32-8.6h336c8.8 0 16-7.2 16-16V48c0-8.8-7.2-16-16-16H64c-17.7 0-32 14.3-32 32zm128-219.3c0 7.8 3.1 15.2 8.6 20.7l71.4 71.4 71.4-71.4c5.5-5.5 8.6-12.9 8.6-20.7 0-16.2-13.1-29.3-29.3-29.3-7.8 0-15.2 3.1-20.7 8.6l-18.7 18.7c-6.2 6.2-16.4 6.2-22.6 0L210 152.6c-5.5-5.5-12.9-8.6-20.7-8.6-16.2 0-29.3 13.1-29.3 29.3m29.3-61.3c16.2 0 31.8 6.5 43.3 17.9l7.4 7.4 7.4-7.4c11.5-11.5 27.1-17.9 43.3-17.9 33.8 0 61.3 27.4 61.3 61.3 0 16.2-6.5 31.8-17.9 43.3l-82.7 82.7c-6.2 6.2-16.4 6.2-22.6 0l-82.7-82.7c-11.5-11.5-17.9-27.1-17.9-43.3 0-33.8 27.4-61.3 61.3-61.3z"
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
                  d="M0 56C0 25.1 25.1 0 56 0h352c22.1 0 40 17.9 40 40v336c0 19.4-13.7 35.5-32 39.2V496h24c4.4 0 8 3.6 8 8s-3.6 8-8 8H56c-30.9 0-56-25.1-56-56zm56 360c-22.1 0-40 17.9-40 40s17.9 40 40 40h344v-80zm-40 .8C26.2 406.4 40.3 400 56 400h352c13.3 0 24-10.7 24-24V40c0-13.3-10.7-24-24-24H56c-22.1 0-40 17.9-40 40zm128-246.9v.6c0 10.6 4 20.9 11.2 28.8l78.9 86.1c1.5 1.7 3.7 2.6 5.9 2.6s4.4-.9 5.9-2.6l78.9-86.1c7.2-7.8 11.2-18.1 11.2-28.8v-.6c0-23.2-18.8-41.9-41.9-41.9-11.1 0-21.8 4.4-29.7 12.3L245.7 159c-1.5 1.5-3.5 2.3-5.7 2.3s-4.2-.8-5.7-2.3l-18.7-18.7c-7.9-7.9-18.5-12.3-29.7-12.3-23.2 0-41.9 18.8-41.9 41.9m41.9-57.9c15.4 0 30.1 6.1 41 17l13.1 13.1 13.1-13.1c10.9-10.9 25.6-17 41-17 32 0 57.9 25.9 57.9 57.9v.6c0 14.7-5.5 28.8-15.4 39.6l-78.9 86.1c-4.5 5-11 7.8-17.7 7.8s-13.1-2.8-17.7-7.8l-78.9-86.1a58.55 58.55 0 0 1-15.4-39.6v-.6c0-32 25.9-57.9 57.9-57.9"
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
                  d="M64 416c0-17.7 14.3-32 32-32h320v64H96c-17.7 0-32-14.3-32-32"
                />
                <path
                  className="aps-icon-foreground"
                  d="M96 0C43 0 0 43 0 96v320c0 53 43 96 96 96h320c17.7 0 32-14.3 32-32s-14.3-32-32-32H96c-17.7 0-32-14.3-32-32s14.3-32 32-32h320c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H96m32 157.3c0-33.8 27.4-61.3 61.3-61.3 16.2 0 31.8 6.5 43.3 17.9l7.4 7.4 7.4-7.4c11.5-11.4 27.1-17.9 43.3-17.9 33.8 0 61.3 27.4 61.3 61.3 0 16.2-6.5 31.8-17.9 43.3l-82.7 82.7c-6.2 6.2-16.4 6.2-22.6 0l-82.7-82.7c-11.5-11.5-17.9-27.1-17.9-43.3z"
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
