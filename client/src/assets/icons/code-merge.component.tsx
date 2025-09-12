import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CodeMergeIcon: React.FC<
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
                  d="M80 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48m32.4 97.2c28-12.4 47.6-40.5 47.6-73.2 0-44.2-35.8-80-80-80S0 35.8 0 80c0 32.8 19.7 61 48 73.3v205.4C19.7 371 0 399.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-32.8-19.7-61-48-73.3V272c26.7 20.1 60 32 96 32h86.7c12.3 28.3 40.5 48 73.3 48 44.2 0 80-35.8 80-80s-35.8-80-80-80c-32.8 0-61 19.7-73.3 48H208c-49.9 0-91-38.1-95.6-86.8M80 408a24 24 0 1 1 0 48 24 24 0 1 1 0-48m264-136a24 24 0 1 1 48 0 24 24 0 1 1-48 0"
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
                  d="M80 48a32 32 0 1 1 0 64 32 32 0 1 1 0-64m24.7 108.1C136.8 145.7 160 115.6 160 80c0-44.2-35.8-80-80-80S0 35.8 0 80c0 35.8 23.5 66.1 56 76.3v199.4C23.5 365.9 0 396.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-35.8-23.5-66.1-56-76.3V254.9c27.2 25.5 63.8 41.1 104 41.1h83.7c10.2 32.5 40.5 56 76.3 56 44.2 0 80-35.8 80-80s-35.8-80-80-80c-35.8 0-66.1 23.5-76.3 56H208c-53.3 0-97.3-40.2-103.3-91.9M80 400a32 32 0 1 1 0 64 32 32 0 1 1 0-64m256-128a32 32 0 1 1 64 0 32 32 0 1 1-64 0"
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
                  d="M80 32a48 48 0 1 1 0 96 48 48 0 1 1 0-96m16.9 126.2C133 150.5 160 118.4 160 80c0-44.2-35.8-80-80-80S0 35.8 0 80c0 38.7 27.5 71 64 78.4v195.2C27.5 361 0 393.3 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-38.7-27.5-71-64-78.4V234.5c26.4 32.6 66.8 53.5 112 53.5h81.6c7.4 36.5 39.7 64 78.4 64 44.2 0 80-35.8 80-80s-35.8-80-80-80c-38.7 0-71 27.5-78.4 64H208c-57 0-104.1-42.6-111.1-97.8M416 272a48 48 0 1 1-96 0 48 48 0 1 1 96 0M128 432a48 48 0 1 1-96 0 48 48 0 1 1 96 0"
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
                  d="M80 16a48 48 0 1 1 0 96 48 48 0 1 1 0-96m8 111.5c31.6-3.9 56-30.9 56-63.5 0-35.3-28.7-64-64-64S16 28.7 16 64c0 32.6 24.4 59.6 56 63.5v257c-31.6 3.9-56 30.9-56 63.5 0 35.3 28.7 64 64 64s64-28.7 64-64c0-32.6-24.4-59.6-56-63.5V208.1c22.9 42.8 68 71.9 120 71.9h112.5c3.9 31.6 30.9 56 63.5 56 35.3 0 64-28.7 64-64s-28.7-64-64-64c-32.6 0-59.6 24.4-63.5 56H208c-66.3 0-120-53.7-120-120zM80 400a48 48 0 1 1 0 96 48 48 0 1 1 0-96m256-128a48 48 0 1 1 96 0 48 48 0 1 1-96 0"
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
                  d="M112.4 153.2c-9.9 4.4-20.9 6.8-32.4 6.8-11.4 0-22.2-2.4-32-6.7v205.4c9.8-4.3 20.6-6.7 32-6.7s22.2 2.4 32 6.7V272c26.7 20.1 60 32 96 32h86.7c-4.3-9.8-6.7-20.6-6.7-32s2.4-22.2 6.7-32H208c-49.9 0-91-38.1-95.6-86.8"
                />
                <path
                  className="aps-icon-foreground"
                  d="M80 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48m0 104A80 80 0 1 0 80 0a80 80 0 1 0 0 160m0 248a24 24 0 1 1 0 48 24 24 0 1 1 0-48m0 104a80 80 0 1 0 0-160 80 80 0 1 0 0 160m264-240a24 24 0 1 1 48 0 24 24 0 1 1-48 0m104 0a80 80 0 1 0-160 0 80 80 0 1 0 160 0"
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
