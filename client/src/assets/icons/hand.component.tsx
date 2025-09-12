import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const HandIcon: React.FC<
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
                  d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32v208c0 8.8-7.2 16-16 16s-16-7.2-16-16V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v272c0 1.5 0 3.1.1 4.6L67.6 283c-16-15.2-41.3-14.6-56.6 1.4s-14.6 41.3 1.4 56.6l112.4 107c43.1 41.1 100.4 64 160 64H304c97.2 0 176-78.8 176-176V128c0-17.7-14.3-32-32-32s-32 14.3-32 32v112c0 8.8-7.2 16-16 16s-16-7.2-16-16V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v176c0 8.8-7.2 16-16 16s-16-7.2-16-16z"
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
                  d="M256 0c-25.3 0-47.2 14.7-57.6 36-7-2.6-14.5-4-22.4-4-35.3 0-64 28.7-64 64v165.5l-2.7-2.7c-25-25-65.5-25-90.5 0s-25 65.5 0 90.5l87.7 87.7c48 48 113.1 75 181 75H304c1.5 0 3-.1 4.5-.4 91.7-6.2 165-79.4 171.1-171.1.3-1.5.4-3 .4-4.5V160c0-35.3-28.7-64-64-64-5.5 0-10.9.7-16 2v-2c0-35.3-28.7-64-64-64-7.9 0-15.4 1.4-22.4 4C303.2 14.7 281.3 0 256 0m-16 96.1V64c0-8.8 7.2-16 16-16s16 7.2 16 16v168c0 13.3 10.7 24 24 24s24-10.7 24-24V95.9c0-8.8 7.2-16 16-16s16 7.2 16 16v136c0 13.3 10.7 24 24 24s24-10.7 24-24V160c0-8.8 7.2-16 16-16s16 7.2 16 16v172.9c-.1.6-.1 1.3-.2 1.9-3.4 69.7-59.3 125.6-129 129-.6 0-1.3.1-1.9.2h-13.4c-55.2 0-108.1-21.9-147.1-60.9l-87.7-87.8c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l43.7 43.7c6.9 6.9 17.2 8.9 26.2 5.2s14.8-12.5 14.8-22.2V96c0-8.8 7.2-16 16-16s16 7.1 16 15.9V232c0 13.3 10.7 24 24 24s24-10.7 24-24z"
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
                  d="M264 0c-24.9 0-46 16.3-53.3 38.8-7.9-4.3-17-6.8-26.7-6.8-30.9 0-56 25.1-56 56v200.8l-32.4-32.4c-21.9-21.9-57.3-21.9-79.2 0s-21.9 57.3 0 79.2l103.8 103.8c46.5 46.5 109.6 72.6 175.3 72.6h8.5c97.2 0 176-78.8 176-176V152c0-30.9-25.1-56-56-56-8.6 0-16.7 1.9-24 5.4V88c0-30.9-25.1-56-56-56-9.7 0-18.8 2.5-26.7 6.8C310 16.3 288.9 0 264 0m-80 64c13.3 0 24 10.7 24 24v152c0 8.8 7.2 16 16 16s16-7.2 16-16V56c0-13.3 10.7-24 24-24s24 10.7 24 24v184c0 8.8 7.2 16 16 16s16-7.2 16-16V87.9c0-13.2 10.8-23.9 24-23.9 13.3 0 24 10.7 24 24v152c0 8.8 7.2 16 16 16s16-7.2 16-16v-88.1c0-13.2 10.8-23.9 24-23.9 13.3 0 24 10.7 24 24v184c0 79.5-64.5 144-144 144h-8.5c-57.3 0-112.2-22.8-152.7-63.3L39 313c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l59.7 59.7c4.6 4.6 11.5 5.9 17.4 3.5s9.9-8.3 9.9-14.8V88c0-13.3 10.7-24 24-24z"
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
                  d="M232 48v200c0 4.4-3.6 8-8 8s-8-3.6-8-8V80c0-17.7-14.3-32-32-32s-32 14.3-32 32v255.4c0 3.2-1.9 6.2-4.9 7.4s-6.4.6-8.7-1.7l-67.8-67.7c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l111.8 111.7c42 42 99 65.6 158.4 65.6h8.5c83.9 0 152-68.1 152-152V144c0-17.7-14.3-32-32-32s-32 14.3-32 32v104c0 4.4-3.6 8-8 8s-8-3.6-8-8V80c0-17.7-14.3-32-32-32s-32 14.3-32 32v168c0 4.4-3.6 8-8 8s-8-3.6-8-8V48c0-17.7-14.3-32-32-32s-32 14.3-32 32m32-48c25.3 0 46 19.5 47.9 44.3C320.4 36.7 331.6 32 344 32c26.5 0 48 21.5 48 48v28.2c8.5-7.6 19.7-12.2 32-12.2 26.5 0 48 21.5 48 48v200c0 92.8-75.2 168-168 168h-8.5c-63.7 0-124.7-25.3-169.7-70.3L14.1 329.9c-18.7-18.7-18.7-49.1 0-67.9s49.1-18.7 67.9 0l54 54.1V80c0-26.5 21.5-48 48-48 12.4 0 23.6 4.7 32.1 12.3C218 19.5 238.7 0 264 0"
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
                  d="M256 0c17.7 0 32 14.3 32 32v208c0 8.8 7.2 16 16 16s16-7.2 16-16V64c0-17.7 14.3-32 32-32s32 14.3 32 32v176c0 8.8 7.2 16 16 16s16-7.2 16-16V128c0-17.7 14.3-32 32-32s32 14.3 32 32v208c0 97.2-78.8 176-176 176h-19.2c-59.6 0-116.9-22.9-160-64L12.4 341c-16-15.2-16.6-40.6-1.4-56.6s40.6-16.6 56.6-1.4l60.5 57.6c0-1.5-.1-3.1-.1-4.6V64c0-17.7 14.3-32 32-32s32 14.3 32 32v176c0 8.8 7.2 16 16 16s16-7.2 16-16V32c0-17.7 14.3-32 32-32m-64 336c0 8.8 7.2 16 16 16h8c39.8 0 72 32.2 72 72v8c0 8.8 7.2 16 16 16s16-7.2 16-16v-8c0-27.9-11-53.3-29-72h77c8.8 0 16-7.2 16-16s-7.2-16-16-16H208c-8.8 0-16 7.2-16 16"
                />
                <path
                  className="aps-icon-foreground"
                  d="M208 320c-8.8 0-16 7.2-16 16s7.2 16 16 16h8c39.8 0 72 32.2 72 72v8c0 8.8 7.2 16 16 16s16-7.2 16-16v-8c0-27.9-11-53.3-29-72h77c8.8 0 16-7.2 16-16s-7.2-16-16-16H208"
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
