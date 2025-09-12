import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const DropletDegreeIcon: React.FC<
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
                  d="M192 512C86 512 0 426 0 320 0 228.8 130.2 57.7 166.6 11.7c6-7.5 14.9-11.7 24.5-11.7h1.8c9.6 0 18.5 4.2 24.5 11.7C253.8 57.7 384 228.8 384 320c0 106-86 192-192 192m272-400a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-112 0a80 80 0 1 1 160 0 80 80 0 1 1-160 0"
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
                  d="M192 464c-79.5 0-144-64.5-144-144 0-13 5.1-33.5 17-61.1 11.5-26.6 27.6-55.8 45.5-84.7 29-46.8 61-90.2 81.5-117 20.5 26.7 52.6 70.2 81.5 117 17.9 28.9 34 58 45.5 84.7 11.9 27.6 17 48.2 17 61.1 0 79.5-64.5 144-144 144M0 320c0 106 86 192 192 192s192-86 192-192c0-91.2-130.2-262.3-166.6-308.3-6-7.5-14.9-11.7-24.5-11.7h-1.8c-9.6 0-18.5 4.2-24.5 11.7C130.2 57.7 0 228.8 0 320m400-208a32 32 0 1 1 64 0 32 32 0 1 1-64 0m112 0a80 80 0 1 0-160 0 80 80 0 1 0 160 0"
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
                  d="M192 480c-88.4 0-160-71.6-160-160 0-16.2 6.1-39.2 18.3-67.5 11.9-27.6 28.5-57.5 46.6-86.8 35.9-58 76.4-110.9 94.5-133.7h1.3c18.1 22.9 58.6 75.7 94.5 133.7 18.1 29.2 34.6 59.1 46.6 86.8 12.1 28.3 18.2 51.3 18.2 67.5 0 88.4-71.6 160-160 160M0 320c0 106 86 192 192 192s192-86 192-192c0-91.2-130.2-262.3-166.6-308.3-6-7.5-14.9-11.7-24.5-11.7h-1.8c-9.6 0-18.5 4.2-24.5 11.7C130.2 57.7 0 228.8 0 320m384-208a48 48 0 1 1 96 0 48 48 0 1 1-96 0m128 0a80 80 0 1 0-160 0 80 80 0 1 0 160 0"
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
                  d="M192 496c-97.2 0-176-78.8-176-176 0-19.5 7.1-44.9 19.6-73.8C48 217.6 64.9 187 83.3 157.4c36.6-59.2 77.9-112.9 95.9-135.7 2.8-3.5 7-5.6 11.9-5.6h1.8c4.9 0 9.1 2.1 11.9 5.6 18.1 22.8 59.3 76.6 95.9 135.7 18.3 29.6 35.3 60.2 47.7 88.8 12.5 28.9 19.6 54.3 19.6 73.8 0 97.2-78.8 176-176 176M0 320c0 106 86 192 192 192s192-86 192-192c0-91.2-130.2-262.3-166.6-308.3-6-7.5-14.9-11.7-24.5-11.7h-1.8c-9.6 0-18.5 4.2-24.5 11.7C130.2 57.7 0 228.8 0 320M400 96a48 48 0 1 1 96 0 48 48 0 1 1-96 0m112 0a64 64 0 1 0-128 0 64 64 0 1 0 128 0"
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
                  d="M432 80a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0 112a80 80 0 1 0 0-160 80 80 0 1 0 0 160"
                />
                <path
                  className="aps-icon-foreground"
                  d="M0 320c0 106 86 192 192 192s192-86 192-192c0-91.2-130.2-262.3-166.6-308.3-6-7.5-14.9-11.7-24.5-11.7h-1.8c-9.6 0-18.5 4.2-24.5 11.7C130.2 57.7 0 228.8 0 320"
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
