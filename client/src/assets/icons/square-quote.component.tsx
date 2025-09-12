import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SquareQuoteIcon: React.FC<
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
                  d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm64 128h48c17.7 0 32 14.3 32 32v87.3c0 35.2-25.4 65.2-60.2 71l-7.9 1.3c-13.1 2.2-25.4-6.7-27.6-19.7s6.7-25.4 19.7-27.6l7.9-1.3c11.6-1.9 20.1-11.9 20.1-23.7V272h-32c-17.7 0-32-14.3-32-32v-48c0-17.7 14.3-32 32-32m224 80v39.3c0 35.2-25.4 65.2-60.2 71l-7.9 1.3c-13.1 2.2-25.4-6.7-27.6-19.7s6.7-25.4 19.7-27.6l7.9-1.3c11.6-1.9 20.1-11.9 20.1-23.7V272h-32c-17.7 0-32-14.3-32-32v-48c0-17.7 14.3-32 32-32h48c17.7 0 32 14.3 32 32v48"
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
                  d="M384 80c8.8 0 16 7.2 16 16v320c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16zM64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm144 208v-48c0-17.7-14.3-32-32-32h-48c-17.7 0-32 14.3-32 32v48c0 17.7 14.3 32 32 32h32v7.3c0 11.7-8.5 21.7-20.1 23.7l-7.9 1.3c-13.1 2.2-21.9 14.5-19.7 27.6s14.5 21.9 27.6 19.7l7.9-1.3c34.7-5.8 60.2-35.8 60.2-71zm144 39.3V192c0-17.7-14.3-32-32-32h-48c-17.7 0-32 14.3-32 32v48c0 17.7 14.3 32 32 32h32v7.3c0 11.7-8.5 21.7-20.1 23.7l-7.9 1.3c-13.1 2.2-21.9 14.5-19.7 27.6s14.5 21.9 27.6 19.7l7.9-1.3c34.7-5.8 60.2-35.8 60.2-71"
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
                  d="M384 64c17.7 0 32 14.3 32 32v320c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32zM64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm144 254.4V200c0-22.1-17.9-40-40-40h-32c-22.1 0-40 17.9-40 40v32c0 22.1 17.9 40 40 40h32c2.7 0 5.4-.3 8-.8v15.2c0 15.9-11.7 29.4-27.5 31.7l-14.8 2.1c-8.7 1.3-14.8 9.4-13.6 18.1s9.4 14.8 18.1 13.6l14.8-2.1c31.5-4.5 54.9-31.5 54.9-63.4zM176 232c0 4.4-3.6 8-8 8h-32c-4.4 0-8-3.6-8-8v-32c0-4.4 3.6-8 8-8h32c4.4 0 8 3.6 8 8v32m176 0v-32c0-22.1-17.9-40-40-40h-32c-22.1 0-40 17.9-40 40v32c0 22.1 17.9 40 40 40h32c2.7 0 5.4-.3 8-.8v15.2c0 15.9-11.7 29.4-27.5 31.7l-14.8 2.1c-8.7 1.3-14.8 9.4-13.6 18.1s9.4 14.8 18.1 13.6l14.8-2.1c31.5-4.5 54.9-31.5 54.9-63.4V232zm-32-16v16c0 4.4-3.6 8-8 8h-32c-4.4 0-8-3.6-8-8v-32c0-4.4 3.6-8 8-8h32c4.4 0 8 3.6 8 8z"
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
                  d="M384 48c26.5 0 48 21.5 48 48v320c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V96c0-26.5 21.5-48 48-48zM64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm80 224c-17.7 0-32-14.3-32-32v-16c0-17.7 14.3-32 32-32h16c17.7 0 32 14.3 32 32v16c0 17.7-14.3 32-32 32zm64-40v-8c0-26.5-21.5-48-48-48h-16c-26.5 0-48 21.5-48 48v16c0 26.5 21.5 48 48 48h16c12.3 0 23.5-4.6 32-12.2v26.6c0 19.9-14.6 36.8-34.3 39.6l-14.8 2.1c-4.4.6-7.4 4.7-6.8 9s4.7 7.4 9.1 6.8l14.8-2.1c27.6-3.9 48.1-27.6 48.1-55.4V216zm80 40c-17.7 0-32-14.3-32-32v-16c0-17.7 14.3-32 32-32h16c17.7 0 32 14.3 32 32v16c0 17.7-14.3 32-32 32zm64-40v-8c0-26.5-21.5-48-48-48h-16c-26.5 0-48 21.5-48 48v16c0 26.5 21.5 48 48 48h16c12.3 0 23.5-4.6 32-12.2v26.6c0 19.9-14.6 36.8-34.3 39.6l-14.8 2.1c-4.4.6-7.4 4.7-6.8 9s4.7 7.4 9.1 6.8l14.8-2.1c27.6-3.9 48.1-27.6 48.1-55.4V216z"
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
                  d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm64 128h48c17.7 0 32 14.3 32 32v87.3c0 35.2-25.4 65.2-60.2 71l-7.9 1.3c-13.1 2.2-25.4-6.7-27.6-19.7s6.7-25.4 19.7-27.6l7.9-1.3c11.6-1.9 20.1-11.9 20.1-23.7V272h-32c-17.7 0-32-14.3-32-32v-48c0-17.7 14.3-32 32-32m224 80v39.3c0 35.2-25.4 65.2-60.2 71l-7.9 1.3c-13.1 2.2-25.4-6.7-27.6-19.7s6.7-25.4 19.7-27.6l7.9-1.3c11.6-1.9 20.1-11.9 20.1-23.7V272h-32c-17.7 0-32-14.3-32-32v-48c0-17.7 14.3-32 32-32h48c17.7 0 32 14.3 32 32v48"
                />
                <path
                  className="aps-icon-foreground"
                  d="M96 192c0-17.7 14.3-32 32-32h48c17.7 0 32 14.3 32 32v87.3c0 35.2-25.4 65.2-60.2 71l-7.9 1.3c-13.1 2.2-25.4-6.7-27.6-19.7s6.7-25.4 19.7-27.6l7.9-1.3c11.6-1.9 20.1-11.9 20.1-23.7V272h-32c-17.7 0-32-14.3-32-32zm256 87.3c0 35.2-25.4 65.2-60.2 71l-7.9 1.3c-13.1 2.2-25.4-6.7-27.6-19.7s6.7-25.4 19.7-27.6l7.9-1.3c11.6-1.9 20.1-11.9 20.1-23.7V272h-32c-17.7 0-32-14.3-32-32v-48c0-17.7 14.3-32 32-32h48c17.7 0 32 14.3 32 32v87.3"
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
