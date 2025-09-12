import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SlidersIcon: React.FC<
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
                  d="M0 416c0 17.7 14.3 32 32 32h54.7c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H233.3c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48H32c-17.7 0-32 14.3-32 32m128 0a32 32 0 1 1 64 0 32 32 0 1 1-64 0m192-160a32 32 0 1 1 64 0 32 32 0 1 1-64 0m32-80c-32.8 0-61 19.7-73.3 48H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h246.7c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48H480c17.7 0 32-14.3 32-32s-14.3-32-32-32h-54.7c-12.3-28.3-40.5-48-73.3-48m-160-48a32 32 0 1 1 0-64 32 32 0 1 1 0 64m73.3-64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48H32C14.3 64 0 78.3 0 96s14.3 32 32 32h86.7c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48H480c17.7 0 32-14.3 32-32s-14.3-32-32-32z"
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
                  d="M0 416c0 13.3 10.7 24 24 24h59.7c10.2 32.5 40.5 56 76.3 56s66.1-23.5 76.3-56H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H236.3c-10.2-32.5-40.5-56-76.3-56s-66.1 23.5-76.3 56H24c-13.3 0-24 10.7-24 24m128 0a32 32 0 1 1 64 0 32 32 0 1 1-64 0m192-160a32 32 0 1 1 64 0 32 32 0 1 1-64 0m32-80c-35.8 0-66.1 23.5-76.3 56H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h251.7c10.2 32.5 40.5 56 76.3 56s66.1-23.5 76.3-56H488c13.3 0 24-10.7 24-24s-10.7-24-24-24h-59.7c-10.2-32.5-40.5-56-76.3-56m-160-48a32 32 0 1 1 0-64 32 32 0 1 1 0 64m76.3-56c-10.2-32.5-40.5-56-76.3-56s-66.1 23.5-76.3 56H24C10.7 72 0 82.7 0 96s10.7 24 24 24h91.7c10.2 32.5 40.5 56 76.3 56s66.1-23.5 76.3-56H488c13.3 0 24-10.7 24-24s-10.7-24-24-24z"
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
                  d="M0 416c0 8.8 7.2 16 16 16h65.6c7.4 36.5 39.7 64 78.4 64s71-27.5 78.4-64H496c8.8 0 16-7.2 16-16s-7.2-16-16-16H238.4c-7.4-36.5-39.7-64-78.4-64s-71 27.5-78.4 64H16c-8.8 0-16 7.2-16 16m112 0a48 48 0 1 1 96 0 48 48 0 1 1-96 0m192-160a48 48 0 1 1 96 0 48 48 0 1 1-96 0m48-80c-38.7 0-71 27.5-78.4 64H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h257.6c7.4 36.5 39.7 64 78.4 64s71-27.5 78.4-64H496c8.8 0 16-7.2 16-16s-7.2-16-16-16h-65.6c-7.4-36.5-39.7-64-78.4-64m-160-32a48 48 0 1 1 0-96 48 48 0 1 1 0 96m78.4-64C263 43.5 230.7 16 192 16s-71 27.5-78.4 64H16C7.2 80 0 87.2 0 96s7.2 16 16 16h97.6c7.4 36.5 39.7 64 78.4 64s71-27.5 78.4-64H496c8.8 0 16-7.2 16-16s-7.2-16-16-16z"
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
                  d="M0 416c0 4.4 3.6 8 8 8h88.5c3.9 31.6 30.9 56 63.5 56s59.6-24.4 63.5-56H504c4.4 0 8-3.6 8-8s-3.6-8-8-8H223.5c-3.9-31.6-30.9-56-63.5-56s-59.6 24.4-63.5 56H8c-4.4 0-8 3.6-8 8m112 0a48 48 0 1 1 96 0 48 48 0 1 1-96 0m192-160a48 48 0 1 1 96 0 48 48 0 1 1-96 0m48-64c-32.6 0-59.6 24.4-63.5 56H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h280.5c3.9 31.6 30.9 56 63.5 56s59.6-24.4 63.5-56H504c4.4 0 8-3.6 8-8s-3.6-8-8-8h-88.5c-3.9-31.6-30.9-56-63.5-56m-160-48a48 48 0 1 1 0-96 48 48 0 1 1 0 96m63.5-56c-3.9-31.6-30.9-56-63.5-56s-59.6 24.4-63.5 56H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h120.5c3.9 31.6 30.9 56 63.5 56s59.6-24.4 63.5-56H504c4.4 0 8-3.6 8-8s-3.6-8-8-8z"
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
                  d="M0 416c0-17.7 14.3-32 32-32h54.7c-4.3 9.8-6.7 20.6-6.7 32s2.4 22.2 6.7 32H32c-17.7 0-32-14.3-32-32m233.3 32c4.3-9.8 6.7-20.6 6.7-32s-2.4-22.2-6.7-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32zM0 256c0-17.7 14.3-32 32-32h246.7c-4.3 9.8-6.7 20.6-6.7 32s2.4 22.2 6.7 32H32c-17.7 0-32-14.3-32-32m425.3 32c4.3-9.8 6.7-20.6 6.7-32s-2.4-22.2-6.7-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32zM32 64h86.7c-4.3 9.8-6.7 20.6-6.7 32s2.4 22.2 6.7 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32m233.3 64c4.3-9.8 6.7-20.6 6.7-32s-2.4-22.2-6.7-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M128 416a32 32 0 1 1 64 0 32 32 0 1 1-64 0m112 0a80 80 0 1 0-160 0 80 80 0 1 0 160 0m80-160a32 32 0 1 1 64 0 32 32 0 1 1-64 0m112 0a80 80 0 1 0-160 0 80 80 0 1 0 160 0M192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64m0-112a80 80 0 1 0 0 160 80 80 0 1 0 0-160"
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
