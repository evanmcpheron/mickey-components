import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const WalkerIcon: React.FC<
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
                  d="M194 64h126c17.7 0 32 14.3 32 32v64H145l17.9-71.8C166.5 74 179.3 64 194 64m158 160v168.6c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-23.7-12.9-44.4-32-55.4V96c0-53-43-96-96-96H194c-44.1 0-82.4 30-93.1 72.7L1 472.2c-4.3 17.1 6.1 34.5 23.3 38.8s34.5-6.1 38.8-23.3L129 224zm32 208a16 16 0 1 1 0 32 16 16 0 1 1 0-32"
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
                  d="M186.4 48H320c22.1 0 40 17.9 40 40v88H124l23.5-97.4c4.3-18 20.4-30.6 38.9-30.6M360 224v164.7c-23.5 9.5-40 32.5-40 59.3 0 35.3 28.7 64 64 64s64-28.7 64-64c0-26.9-16.5-49.9-40-59.3V88c0-48.6-39.4-88-88-88H186.4c-40.6 0-76 27.8-85.5 67.4L.7 482.4c-3.1 12.9 4.8 25.9 17.7 29s25.9-4.8 29-17.7l65-269.7zm24 208a16 16 0 1 1 0 32 16 16 0 1 1 0-32"
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
                  d="M178.8 32H320c26.5 0 48 21.5 48 48v112H103.4L132 69.1c5.1-21.7 24.5-37.1 46.8-37.1M368 224v162c-27.6 7.1-48 32.2-48 62 0 35.3 28.7 64 64 64s64-28.7 64-64c0-29.8-20.4-54.9-48-62V80c0-44.2-35.8-80-80-80H178.8c-37.2 0-69.5 25.6-77.9 61.8L.4 492.4c-2 8.6 3.3 17.2 11.9 19.2s17.2-3.3 19.2-11.9L96 223.6v.4zm48 224a32 32 0 1 1-64 0 32 32 0 1 1 64 0"
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
                  d="M185.6 16H328c30.9 0 56 25.1 56 56v120H96.8l34.6-134c6.4-24.7 28.7-42 54.2-42M384 208v210.7c-18.6 6.6-32 24.4-32 45.3 0 26.5 21.5 48 48 48s48-21.5 48-48-21.5-48-48-48V72c0-39.8-32.2-72-72-72H185.6c-32.8 0-61.5 22.2-69.7 54L.3 502c-1.1 4.3 1.5 8.6 5.7 9.7s8.6-1.5 9.7-5.7l77-298zm16 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64"
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
                  d="M320 448a64 64 0 1 1 128 0 64 64 0 1 1-128 0"
                />
                <path
                  className="aps-icon-foreground"
                  d="M194 64h126c17.7 0 32 14.3 32 32v64H145l17.9-71.8C166.5 74 179.3 64 194 64M63 487.8 129 224h223v168.6c9.4-5.4 20.3-8.6 32-8.6s22.6 3.1 32 8.6V96c0-53-43-96-96-96H194c-44.1 0-82.4 30-93.1 72.7L1 472.2c-4.3 17.1 6.1 34.5 23.3 38.8s34.5-6.1 38.8-23.3z"
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
