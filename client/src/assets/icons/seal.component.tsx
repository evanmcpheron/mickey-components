import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SealIcon: React.FC<
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
                  d="M289.9 18.4C271.2-.3 240.8-.3 222 18.4L176.5 64H112c-26.5 0-48 21.5-48 48v64.5l-45.6 45.6c-18.7 18.7-18.7 49.1 0 67.9L64 335.5V400c0 26.5 21.5 48 48 48h64.5l45.6 45.6c18.7 18.7 49.1 18.7 67.9 0l45.5-45.6H400c26.5 0 48-21.5 48-48v-64.5l45.6-45.6c18.7-18.7 18.7-49.1 0-67.9L448 176.5V112c0-26.5-21.5-48-48-48h-64.5z"
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
                  d="M210.4 97.9c-9 9-21.2 14.1-33.9 14.1H112v64.5c0 12.7-5.1 24.9-14.1 33.9L52.4 256 98 301.6c9 9 14.1 21.2 14.1 33.9V400h64.5c12.7 0 24.9 5.1 33.9 14.1l45.5 45.5 45.6-45.6c9-9 21.2-14.1 33.9-14.1H400v-64.4c0-12.7 5.1-24.9 14.1-33.9l45.5-45.6-45.6-45.6c-9-9-14.1-21.2-14.1-33.9V112h-64.4c-12.7 0-24.9-5.1-33.9-14.1L256 52.4zM222 18.4c18.7-18.7 49.1-18.7 67.9 0L335.5 64H400c26.5 0 48 21.5 48 48v64.5l45.6 45.6c18.7 18.7 18.7 49.1 0 67.9L448 335.5V400c0 26.5-21.5 48-48 48h-64.5l-45.6 45.6c-18.7 18.7-49.1 18.7-67.9 0L176.5 448H112c-26.5 0-48-21.5-48-48v-64.5l-45.6-45.6c-18.7-18.7-18.7-49.1 0-67.9L64 176.5V112c0-26.5 21.5-48 48-48h64.5l45.6-45.6z"
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
                  d="M199.1 86.6c-6 6-14.1 9.4-22.6 9.4H112c-8.8 0-16 7.2-16 16v64.5c0 8.5-3.4 16.6-9.4 22.6L41 244.7c-6.2 6.2-6.2 16.4 0 22.6l-22.6 22.6c-18.7-18.7-18.7-49.1 0-67.9L64 176.5V112c0-26.5 21.5-48 48-48h64.5l45.6-45.6c18.7-18.7 49.1-18.7 67.9 0L335.5 64H400c26.5 0 48 21.5 48 48v64.5l45.6 45.6c18.7 18.7 18.7 49.1 0 67.9L448 335.5V400c0 26.5-21.5 48-48 48h-64.5l-45.6 45.6c-18.7 18.7-49.1 18.7-67.9 0L176.5 448H112c-26.5 0-48-21.5-48-48v-64.5l-45.6-45.6L41 267.3l45.6 45.6c6 6 9.4 14.1 9.4 22.6V400c0 8.8 7.2 16 16 16h64.5c8.5 0 16.6 3.4 22.6 9.4l45.6 45.6c6.2 6.2 16.4 6.2 22.6 0l45.6-45.6c6-6 14.1-9.4 22.6-9.4H400c8.8 0 16-7.2 16-16v-64.5c0-8.5 3.4-16.6 9.4-22.6l45.6-45.6c6.2-6.2 6.2-16.4 0-22.6l-45.6-45.6c-6-6-9.4-14.1-9.4-22.6V112c0-8.8-7.2-16-16-16h-64.5c-8.5 0-16.6-3.4-22.6-9.4L267.3 41c-6.2-6.2-16.4-6.2-22.6 0z"
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
                  d="M187.8 75.3c-3 3-7.1 4.7-11.3 4.7H112c-17.7 0-32 14.3-32 32v64.5c0 4.2-1.7 8.3-4.7 11.3l-45.6 45.6c-12.5 12.5-12.5 32.8 0 45.3l45.6 45.6c3 3 4.7 7.1 4.7 11.3V400c0 17.7 14.3 32 32 32h64.5c4.2 0 8.3 1.7 11.3 4.7l45.6 45.6c12.5 12.5 32.8 12.5 45.3 0l45.6-45.6c3-3 7.1-4.7 11.3-4.7H400c17.7 0 32-14.3 32-32v-64.5c0-4.2 1.7-8.3 4.7-11.3l45.6-45.6c12.5-12.5 12.5-32.8 0-45.3l-45.6-45.6c-3-3-4.7-7.1-4.7-11.3V112c0-17.7-14.3-32-32-32h-64.5c-4.2 0-8.3-1.7-11.3-4.7l-45.6-45.6 11.3-11.3L335.5 64H400c26.5 0 48 21.5 48 48v64.5l45.6 45.6c18.7 18.7 18.7 49.1 0 67.9L448 335.5V400c0 26.5-21.5 48-48 48h-64.5l-45.6 45.6c-18.7 18.7-49.1 18.7-67.9 0L176.5 448H112c-26.5 0-48-21.5-48-48v-64.5l-45.6-45.6c-18.7-18.7-18.7-49.1 0-67.9L64 176.5V112c0-26.5 21.5-48 48-48h64.5l45.6-45.6c18.7-18.7 49.1-18.7 67.9 0l-11.4 11.3c-12.5-12.5-32.8-12.5-45.3 0z"
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
                  d="M289.9 18.4C271.2-.3 240.8-.3 222 18.4L176.5 64H112c-26.5 0-48 21.5-48 48v64.5l-45.6 45.6c-18.7 18.7-18.7 49.1 0 67.9L64 335.5V400c0 26.5 21.5 48 48 48h64.5l45.6 45.6c18.7 18.7 49.1 18.7 67.9 0l45.5-45.6H400c26.5 0 48-21.5 48-48v-64.5l45.6-45.6c18.7-18.7 18.7-49.1 0-67.9L448 176.5V112c0-26.5-21.5-48-48-48h-64.5z"
                />
                <path className="aps-icon-foreground" d="" />
              </svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
