import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const GunSquirtIcon: React.FC<
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
                  d="M128 56c0-13.3-10.7-24-24-24S80 42.7 80 56v9.3C34.6 72.9 0 112.4 0 160c0 47.3 34.3 86.7 79.4 94.6L33 440.2c-2.4 9.6-.2 19.7 5.8 27.5S54.1 480 64 480h104c14.7 0 27.5-10 31-24.2l20-79.8h53v16c0 13.3 10.7 24 24 24s24-10.7 24-24v-80c0-13.3-10.7-24-24-24s-24 10.7-24 24v16h-41l18-72h199c41.8 0 77.4-26.7 90.5-64H552c13.3 0 24-10.7 24-24v-16c0-13.3-10.7-24-24-24h-13.5c-13.1-37.3-48.7-64-90.5-64H128zm-32 72h352c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32s14.3-32 32-32"
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
                  d="M104 32c13.3 0 24 10.7 24 24v8h320c41.8 0 77.4 26.7 90.5 64H552c13.3 0 24 10.7 24 24v16c0 13.3-10.7 24-24 24h-13.5c-13.2 37.3-48.7 64-90.5 64H249l-18 72h41v-16c0-13.3 10.7-24 24-24s24 10.7 24 24v80c0 13.3-10.7 24-24 24s-24-10.7-24-24v-16h-53l-20 79.8c-3.5 14.2-16.3 24.2-31 24.2H64c-9.9 0-19.2-4.5-25.2-12.3s-8.2-17.9-5.8-27.5l46.4-185.6C34.3 246.7 0 207.3 0 160c0-47.6 34.6-87.1 80-94.7V56c0-13.3 10.7-24 24-24m24.5 224-44 176h71l44-176zM448 208c26.5 0 48-21.5 48-48s-21.5-48-48-48H96c-26.5 0-48 21.5-48 48s21.5 48 48 48h352M96 144h352c8.8 0 16 7.2 16 16s-7.2 16-16 16H96c-8.8 0-16-7.2-16-16s7.2-16 16-16"
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
                  d="M128 48c0-8.8-7.2-16-16-16s-16 7.2-16 16v16c-53 0-96 43-96 96 0 47.3 34.3 86.7 79.4 94.6L33 440.2c-2.4 9.6-.2 19.7 5.8 27.5S54.1 480 64 480h104c14.7 0 27.5-10 31-24.2L225 352h63v16c0 8.8 7.2 16 16 16s16-7.2 16-16v-64c0-8.8-7.2-16-16-16s-16 7.2-16 16v16h-55l16-64h199c35.6 0 66.6-19.3 83.2-48h4.8c22.1 0 40-17.9 40-40v-16c0-22.1-17.9-40-40-40h-4.8c-16.6-28.7-47.6-48-83.2-48H128zm-16 48h336c26.2 0 48.8 15.8 58.7 38.4 2.5 5.8 8.3 9.6 14.7 9.6H536c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8h-14.7c-6.4 0-12.1 3.8-14.7 9.6-9.8 22.6-32.4 38.4-58.6 38.4H96c-35.3 0-64-28.7-64-64s28.7-64 64-64zm-16 48c-8.8 0-16 7.2-16 16s7.2 16 16 16h352c8.8 0 16-7.2 16-16s-7.2-16-16-16zM64 448l48-192h104l-48 192z"
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
                  d="M104 32c4.4 0 8 3.6 8 8v24h336c38.8 0 72.1 23 87.3 56H552c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24h-16.7c-15.2 33-48.5 56-87.3 56H249l-16 64h55v-24c0-4.4 3.6-8 8-8s8 3.6 8 8v64c0 4.4-3.6 8-8 8s-8-3.6-8-8v-24h-59l-30 119.8c-3.5 14.2-16.3 24.2-31 24.2H64c-9.9 0-19.2-4.5-25.2-12.3s-8.2-17.9-5.8-27.5l46.4-185.6C34.3 246.7 0 207.3 0 160c0-53 43-96 96-96V40c0-4.4 3.6-8 8-8M16 160c0 44.2 35.8 80 80 80h352c33.9 0 62.9-21.1 74.6-50.9 1.2-3.1 4.2-5.1 7.4-5.1h22c4.4 0 8-3.6 8-8v-32c0-4.4-3.6-8-8-8h-22c-3.3 0-6.3-2-7.4-5.1C510.9 101.1 481.9 80 448 80H96c-44.2 0-80 35.8-80 80m216.5 96h-137l-47 188.1c-1.2 4.8-.1 9.8 2.9 13.7S59.1 464 64 464h104c7.3 0 13.7-5 15.5-12.1zM96 144c-8.8 0-16 7.2-16 16s7.2 16 16 16h352c8.8 0 16-7.2 16-16s-7.2-16-16-16zm-32 16c0-17.7 14.3-32 32-32h352c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32"
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
                  d="M96 192c-17.7 0-32-14.3-32-32h416c0 17.7-14.3 32-32 32zm176 184h-53l12-48h41v-16c0-13.3 10.7-24 24-24s24 10.7 24 24v80c0 13.3-10.7 24-24 24s-24-10.7-24-24z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M104 32c13.3 0 24 10.7 24 24v8h320c41.8 0 77.4 26.7 90.5 64H552c13.3 0 24 10.7 24 24v16c0 13.3-10.7 24-24 24h-13.5c-13.2 37.3-48.7 64-90.5 64H249l-50 199.8c-3.5 14.2-16.3 24.2-31 24.2H64c-9.9 0-19.2-4.5-25.2-12.3s-8.2-17.9-5.8-27.5l46.4-185.6C34.3 246.7 0 207.3 0 160c0-47.6 34.6-87.1 80-94.7V56c0-13.3 10.7-24 24-24m-8 96c-17.7 0-32 14.3-32 32s14.3 32 32 32h352c17.7 0 32-14.3 32-32s-14.3-32-32-32z"
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
