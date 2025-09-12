import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BracketCurlyIcon: React.FC<
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
                viewBox="0 0 256 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M64 128c0-53 43-96 96-96h32c17.7 0 32 14.3 32 32s-14.3 32-32 32h-32c-17.7 0-32 14.3-32 32v37.5c0 25.5-10.1 49.9-28.1 67.9L77.3 256l22.6 22.6c18 18 28.1 42.4 28.1 67.9V384c0 17.7 14.3 32 32 32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32h-32c-53 0-96-43-96-96v-37.5c0-8.5-3.4-16.6-9.4-22.6L9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3L54.7 188c6-6 9.4-14.1 9.4-22.6V128z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M64 120c0-48.6 39.4-88 88-88h48c13.3 0 24 10.7 24 24s-10.7 24-24 24h-48c-22.1 0-40 17.9-40 40v45.5c0 23.3-9.3 45.7-25.8 62.2L57.9 256l28.3 28.3c16.5 16.5 25.8 38.9 25.8 62.2V392c0 22.1 17.9 40 40 40h48c13.3 0 24 10.7 24 24s-10.7 24-24 24h-48c-48.6 0-88-39.4-88-88v-45.5c0-10.6-4.2-20.8-11.7-28.3L7 273c-9.4-9.4-9.4-24.6 0-33.9l45.3-45.3c7.5-7.5 11.7-17.7 11.7-28.3z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M64 112c0-44.2 35.8-80 80-80h64c8.8 0 16 7.2 16 16s-7.2 16-16 16h-64c-26.5 0-48 21.5-48 48v53.5c0 21.2-8.4 41.6-23.4 56.6l-34 33.9 33.9 33.9c15 15 23.4 35.4 23.4 56.6V400c0 26.5 21.5 48 48 48h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-44.2 0-80-35.8-80-80v-53.5c0-12.7-5.1-24.9-14.1-33.9L4.7 267.3c-3-3-4.7-7.1-4.7-11.3s1.7-8.3 4.7-11.3L50 199.4c9-9 14.1-21.2 14.1-33.9V112z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M64 88c0-30.9 25.1-56 56-56h80c4.4 0 8 3.6 8 8s-3.6 8-8 8h-80c-22.1 0-40 17.9-40 40v77.5c0 19.1-7.6 37.4-21.1 50.9L19.3 256l39.6 39.6C72.4 309.1 80 327.4 80 346.5V424c0 22.1 17.9 40 40 40h80c4.4 0 8 3.6 8 8s-3.6 8-8 8h-80c-30.9 0-56-25.1-56-56v-77.5c0-14.9-5.9-29.1-16.4-39.6L2.3 261.7c-3.1-3.1-3.1-8.2 0-11.3l45.3-45.3C58.1 194.6 64 180.3 64 165.5z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M64 128c0-53 43-96 96-96h32c17.7 0 32 14.3 32 32s-14.3 32-32 32h-32c-17.7 0-32 14.3-32 32v37.5c0 25.5-10.1 49.9-28.1 67.9L77.3 256l22.6 22.6c18 18 28.1 42.4 28.1 67.9V384c0 17.7 14.3 32 32 32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32h-32c-53 0-96-43-96-96v-37.5c0-8.5-3.4-16.6-9.4-22.6L9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3L54.7 188c6-6 9.4-14.1 9.4-22.6V128z"
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
