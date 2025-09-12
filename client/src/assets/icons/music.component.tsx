import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const MusicIcon: React.FC<
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
                  d="M499.1 6.3c8.1 6 12.9 15.6 12.9 25.7v336c0 44.2-43 80-96 80s-96-35.8-96-80 43-80 96-80c11.2 0 22 1.6 32 4.6V147l-256 76.8V432c0 44.2-43 80-96 80S0 476.2 0 432s43-80 96-80c11.2 0 22 1.6 32 4.6V128c0-14.1 9.3-26.6 22.8-30.7l320-96c9.7-2.9 20.2-1.1 28.3 5"
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
                  d="M512 31c0-17.1-13.9-31-31-31-3.1 0-6.2.5-9.1 1.4l-311 95.7c-10 3.1-16.9 12.4-16.9 22.9v242.7c-14.1-6.8-30.5-10.7-48-10.7-53 0-96 35.8-96 80s43 80 96 80 96-35.8 96-80V260.2l272-83.7v122.2c-14.1-6.8-30.5-10.7-48-10.7-53 0-96 35.8-96 80s43 80 96 80 96-35.8 96-80V31m-48 337c0 9.8-12.9 32-48 32s-48-22.2-48-32 12.9-32 48-32 48 22.2 48 32m-320 64c0 9.8-12.9 32-48 32s-48-22.2-48-32 12.9-32 48-32 48 22.2 48 32m320-305.7L192 210v-72.3L464 54v72.2z"
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
                  d="M512 23c0-12.7-10.3-23-23-23-2.3 0-4.6.3-6.8 1l-311 95.7C164.6 98.8 160 105 160 112v260.4c-17-12.7-39.4-20.4-64-20.4-53 0-96 35.8-96 80s43 80 96 80 96-35.8 96-80V246.3l288-88.6v150.7c-17-12.7-39.4-20.4-64-20.4-53 0-96 35.8-96 80s43 80 96 80 96-35.8 96-80V23m-32 345c0 21.3-22.9 48-64 48s-64-26.7-64-48 22.9-48 64-48 64 26.7 64 48m-320 64c0 21.3-22.9 48-64 48s-64-26.7-64-48 22.9-48 64-48 64 26.7 64 48m320-307.8-288 88.6v-89l288-88.6z"
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
                  d="M197.6 108.2c-3.4 1-5.6 4.1-5.6 7.6v99.8l304-93.5V16.4zM512 15v353c0 44.2-43 80-96 80s-96-35.8-96-80 43-80 96-80c33.4 0 62.8 14.2 80 35.8v-185l-301.6 92.8c-.8.2-1.6.4-2.4.4v200c0 44.2-43 80-96 80S0 476.2 0 432s43-80 96-80c33.4 0 62.8 14.2 80 35.8v-272c0-10.5 6.9-19.8 16.9-22.9L492.6.7c1.4-.4 2.9-.7 4.4-.7 8.3 0 15 6.7 15 15M176 432c0-32.7-33-64-80-64s-80 31.3-80 64 33 64 80 64 80-31.3 80-64m320-64c0-32.7-33-64-80-64s-80 31.3-80 64 33 64 80 64 80-31.3 80-64"
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
                  d="M499.1 6.3c8.1 6 12.9 15.6 12.9 25.7v336c0-34.8-26.7-64.5-64-75.4V147l-256 76.8V432c0-34.8-26.7-64.5-64-75.4V128c0-14.1 9.3-26.6 22.8-30.7l320-96c9.7-2.9 20.2-1.1 28.3 5"
                />
                <path
                  className="aps-icon-foreground"
                  d="M416 448c53 0 96-35.8 96-80s-43-80-96-80-96 35.8-96 80 43 80 96 80M96 512c53 0 96-35.8 96-80s-43-80-96-80-96 35.8-96 80 43 80 96 80"
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
