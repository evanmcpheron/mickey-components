import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ShareAllIcon: React.FC<
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
                  d="M366.6 39.5c9.1-9.6 24.3-10 33.9-.9l141.7 134.6c19.9 18.9 19.9 50.7 0 69.6L400.5 377.4c-9.6 9.1-24.8 8.7-33.9-.9s-8.7-24.8.9-33.9L509.2 208 367.5 73.4c-9.6-9.1-10-24.3-.9-33.9M224 64c0-12.6 7.4-24.1 19-29.2s25-3 34.4 5.4l160 144c6.7 6.1 10.6 14.7 10.6 23.8s-3.8 17.7-10.6 23.8l-160 144c-9.4 8.5-22.9 10.6-34.4 5.4s-19-16.6-19-29.2v-64h-32c-53 0-96 43-96 96 0 30.4 12.8 47.9 22.2 56.7 5.5 5.1 9.8 12 9.8 19.5 0 10.9-8.8 19.7-19.7 19.7-2.8 0-5.6-.6-8.1-1.9C81.5 467.9 0 417.3 0 304c0-97.2 78.8-176 176-176h48z"
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
                  d="M367.5 73.4c-9.6-9.1-10-24.3-.9-33.9s24.3-10 33.9-.9l141.7 134.6c19.9 18.9 19.9 50.7 0 69.6L400.5 377.4c-9.6 9.1-24.8 8.7-33.9-.9s-8.7-24.8.9-33.9L509.2 208zM224 240h24c13.3 0 24 10.7 24 24v52.1L392.1 208 272 99.9V152c0 13.3-10.7 24-24 24h-72c-70.7 0-128 57.3-128 128 0 15.3 1.9 29.1 5.2 41.5C70 284.7 125.8 240 192 240zm0 96v-48h-32c-5.5 0-10.8.5-16 1.3-45.4 7.6-80 47.1-80 94.7 0 17.3 4.2 30.5 9.5 40.2 1.6 2.9 3.3 5.5 5 7.9 2.6 3.5 5.3 6.4 7.7 8.6.5.5 1 .9 1.4 1.4 4.8 4.9 8.3 11.3 8.3 18.1 0 10.9-8.8 19.7-19.7 19.7-2.8 0-5.6-.6-8.1-1.9-2.6-1.4-6.3-3.5-10.8-6.5-2.7-1.8-5.7-3.8-8.9-6.2q-5.55-4.05-11.7-9.3C38.6 430.2 0 382 0 304c0-97.2 78.8-176 176-176h48V64c0-12.6 7.4-24.1 19-29.2s25-3 34.4 5.4l160 144c6.7 6.1 10.6 14.7 10.6 23.8s-3.8 17.7-10.6 23.8l-160 144c-9.4 8.5-22.9 10.6-34.4 5.4s-19-16.6-19-29.2z"
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
                  d="M373.2 59.8c-6.5-5.9-7-16.1-1.1-22.6s16.1-7 22.6-1.1l156.5 142.3c17.5 15.9 17.5 43.3 0 59.2L394.8 379.8c-6.5 5.9-16.7 5.5-22.6-1.1s-5.5-16.7 1.1-22.6l156.4-142.2c3.5-3.2 3.5-8.7 0-11.8zM256 160h-80c-79.5 0-144 64.5-144 144 0 46.1 15.9 79.7 34 103.2-1.3-7.1-2-14.8-2-23.2 0-70.7 57.3-128 128-128h72c13.3 0 24 10.7 24 24v72l160-144L288 64v72c0 13.3-10.7 24-24 24zm0 160v-32h-64c-53 0-96 43-96 96 0 30.4 12.8 47.9 22.2 56.7 5.5 5.1 9.8 12 9.8 19.5 0 10.9-8.8 19.7-19.7 19.7-2.8 0-5.6-.6-8.1-1.9C81.5 467.9 0 417.3 0 304c0-97.2 78.8-176 176-176h80V64c0-12.6 7.4-24.1 19-29.2s25-3 34.4 5.4l160 144c6.7 6.1 10.6 14.7 10.6 23.8s-3.8 17.7-10.6 23.8l-160 144c-9.4 8.5-22.9 10.6-34.4 5.4s-19-16.6-19-29.2z"
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
                  d="M272 128c0 8.8-7.2 16-16 16h-80c-88.4 0-160 71.6-160 160 0 104.2 74.6 150.7 91.8 160h.6c2 0 3.7-1.6 3.7-3.7 0-1.4-1-4.4-4.7-7.8C95.2 441.1 80 419.5 80 384c0-61.9 50.1-112 112-112h64c8.8 0 16 7.2 16 16v64c0 6.3 3.7 12 9.5 14.6s12.5 1.5 17.2-2.7l160-144c3.4-3 5.3-7.4 5.3-11.9s-1.9-8.9-5.3-11.9l-160-144c-4.7-4.2-11.4-5.3-17.2-2.7S272 57.7 272 64zm-16 224v-64h-64c-53 0-96 43-96 96 0 30.4 12.8 47.9 22.2 56.7 5.5 5.1 9.8 12 9.8 19.5 0 10.9-8.8 19.7-19.7 19.7-2.8 0-5.6-.6-8.1-1.9C81.5 467.9 0 417.3 0 304c0-97.2 78.8-176 176-176h80V64c0-12.6 7.4-24.1 19-29.2s25-3 34.4 5.4l160 144c6.7 6.1 10.6 14.7 10.6 23.8s-3.8 17.7-10.6 23.8l-160 144c-9.4 8.5-22.9 10.6-34.4 5.4s-19-16.6-19-29.2M378.6 53.9c-3.3-3-3.5-8-.5-11.3s8-3.5 11.3-.5l156.4 142.2c14 12.7 14 34.7 0 47.4L389.4 373.9c-3.3 3-8.3 2.7-11.3-.5s-2.7-8.3.5-11.3l156.5-142.3c7-6.3 7-17.3 0-23.7z"
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
                  d="M371 34.8c-11.5 5.1-19 16.6-19 29.2v43.3l85.4 76.9c6.7 6.1 10.6 14.7 10.6 23.8s-3.8 17.7-10.6 23.8L352 308.7V352c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144a31.76 31.76 0 0 0-34.4-5.4"
                />
                <path
                  className="aps-icon-foreground"
                  d="M243 34.8c-11.5 5.1-19 16.6-19 29.2v64h-48C78.8 128 0 206.8 0 304c0 113.3 81.5 163.9 100.2 174.1 2.5 1.4 5.3 1.9 8.1 1.9 10.9 0 19.7-8.9 19.7-19.7 0-7.5-4.3-14.4-9.8-19.5-9.4-8.9-22.2-26.4-22.2-56.8 0-53 43-96 96-96h32v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144a31.76 31.76 0 0 0-34.4-5.4"
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
