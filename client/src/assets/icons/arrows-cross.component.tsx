import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ArrowsCrossIcon: React.FC<
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
                  d="M288 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h50.7L9.4 425.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L384 141.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32zM54.6 41.4c-12.5-12.5-32.8-12.5-45.3 0s-12.4 32.7.1 45.2l146.7 146.8 45.3-45.3zM338.7 416H288c-17.7 0-32 14.3-32 32s14.3 32 32 32h128c17.7 0 32-14.3 32-32V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v50.7l-92.1-92.1-45.3 45.3z"
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
                  d="M296 32c-13.3 0-24 10.7-24 24s10.7 24 24 24h70.1L7 439c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l359-359V184c0 13.3 10.7 24 24 24s24-10.7 24-24V56c0-13.3-10.7-24-24-24zM41 39c-9.4-9.3-24.6-9.3-34 0s-9.3 24.6 0 34l160.4 160.4 33.9-33.9zm205.6 273.6L366.1 432H296c-13.3 0-24 10.7-24 24s10.7 24 24 24h128c13.3 0 24-10.7 24-24V328c0-13.3-10.7-24-24-24s-24 10.7-24 24v70.1L280.6 278.6l-33.9 33.9z"
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
                  d="M288 32c-8.8 0-16 7.2-16 16s7.2 16 16 16h105.4L4.7 452.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L416 86.6V192c0 8.8 7.2 16 16 16s16-7.2 16-16V48c0-8.8-7.2-16-16-16zM27.3 36.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l168.4 168.4 22.6-22.6zm225 270.2L393.4 448H288c-8.8 0-16 7.2-16 16s7.2 16 16 16h144c8.8 0 16-7.2 16-16V320c0-8.8-7.2-16-16-16s-16 7.2-16 16v105.4L274.9 284.3z"
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
                  d="M280 32c-4.4 0-8 3.6-8 8s3.6 8 8 8h140.7L2.3 466.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L432 59.3V200c0 4.4 3.6 8 8 8s8-3.6 8-8V40c0-4.4-3.6-8-8-8zM13.7 34.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l187.7 187.8 11.3-11.3zm407 429.7H280c-4.4 0-8 3.6-8 8s3.6 8 8 8h160c4.4 0 8-3.6 8-8V312c0-4.4-3.6-8-8-8s-8 3.6-8 8v140.7L257.9 278.6l-11.3 11.3z"
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
                  d="M288 480h128c17.7 0 32-14.3 32-32V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v50.7L269.3 256 224 301.3 338.7 416H288c-17.7 0-32 14.3-32 32s14.3 32 32 32M178.7 256l45.3-45.3L54.6 41.4c-12.5-12.5-32.8-12.5-45.3 0s-12.4 32.7.1 45.2z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M256 64c0-17.7 14.3-32 32-32h128c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32s-32-14.3-32-32v-50.7L54.6 470.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L338.7 96H288c-17.7 0-32-14.3-32-32"
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
