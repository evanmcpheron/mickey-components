import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ScrollOldIcon: React.FC<
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
                  d="M48 32c26.5 0 48 21.5 48 48v80H32c-17.7 0-32-14.3-32-32V80c0-26.5 21.5-48 48-48m80 48c0-18-6-34.6-16-48h272c51.4 0 93.4 40.5 95.9 91.3-.4 3.5-2 6.9-4.6 9.4l-21.7 21.7c-3.1 3.1-3.1 8.2 0 11.3l21.7 21.7c3 3 4.7 7.1 4.7 11.3v18.7c0 4.2-1.7 8.3-4.7 11.3l-21.7 21.7c-3.1 3.1-3.1 8.2 0 11.3l21.7 21.7c3 3 4.7 7.1 4.7 11.3V320H314.7c-32.4 0-58.7 26.3-58.7 58.7v5.3c0 35.3-28.7 64-64 64s-64-28.7-64-64V262.6c0-4.2 1.7-8.3 4.7-11.3l21.7-21.7c3.1-3.1 3.1-8.2 0-11.3l-21.7-21.7c-3-3-4.7-7.1-4.7-11.3V80m448 288c0 61.9-50.1 112-112 112H192c53 0 96-43 96-96v-5.3c0-14.7 11.9-26.7 26.7-26.7h30.7c4.2 0 8.3 1.7 11.3 4.7l21.7 21.7c3.1 3.1 8.2 3.1 11.3 0l21.7-21.7c3-3 7.1-4.7 11.3-4.7H560c8.8 0 16 7.2 16 16"
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
                  d="M80 80c-17.7 0-32 14.3-32 32v48h32v48H48c-26.5 0-48-21.5-48-48v-48c0-44.2 35.8-80 80-80h320c44.2 0 80 35.8 80 80v160h-80c-8.8 0-16-7.2-16-16s7.2-16 16-16h32v-80h-32c-8.8 0-16-7.2-16-16s7.2-16 16-16h32v-16c0-17.7-14.3-32-32-32H153.3c4.3 9.8 6.7 20.6 6.7 32v112h48c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48v144c0 17.7 14.3 32 32 32s32-14.3 32-32v-48c0-26.5 21.5-48 48-48h260.2c26.5 0 48 21.5 48 48v48c0 44.2-35.8 80-80 80H192c-44.2 0-80-35.8-80-80V112c0-17.7-14.3-32-32-32m185.3 352H496c17.7 0 32-14.3 32-32v-48H400v32c0 8.8-7.2 16-16 16s-16-7.2-16-16v-32h-96v48c0 11.4-2.4 22.2-6.7 32"
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
                  d="M80 64c-26.5 0-48 21.5-48 48v72c0 4.4 3.6 8 8 8h56v32H40c-22.1 0-40-17.9-40-40v-72c0-44.2 35.8-80 80-80h320c44.2 0 80 35.8 80 80v176h-32v-32h-48c-8.8 0-16-7.2-16-16s7.2-16 16-16h48v-64h-48c-8.8 0-16-7.2-16-16s7.2-16 16-16h48v-16c0-26.5-21.5-48-48-48H144c10 13.4 16 30 16 48v112h48c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48v144c0 26.5 21.5 48 48 48s48-21.5 48-48v-48c0-22.1 18-40 40-40h234.8c22.1 0 40 17.9 40 40v56c0 39.8-32.2 72-72 72H208c-44.2 0-80-35.8-80-80V112c0-26.5-21.5-48-48-48m192 384h232c22.1 0 40-17.9 40-40v-56c0-4.4-3.6-8-8-8H400v40c0 8.8-7.2 16-16 16s-16-7.2-16-16v-40h-72c-4.4 0-8 3.6-8 8v48c0 18-6 34.6-16 48"
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
                  d="M16 104c0-30.9 25.1-56 56-56s56 25.1 56 56v81.4c0 6.4 2.5 12.5 7 17l16 16c3.1 3.1 3.1 8.2 0 11.3l-16 16c-4.5 4.5-7 10.6-7 17V400c0 44.2 35.8 80 80 80h288c44.2 0 80-35.8 80-80v-32c0-17.7-14.3-32-32-32H423.7c-7.3 0-14.2 3.3-18.7 9l-14.7 18.4c-3.2 4-9.3 4-12.5 0L363 345c-4.6-5.7-11.4-9-18.7-9H304c-17.7 0-32 14.3-32 32v32c0 35.3-28.7 64-64 64s-64-28.7-64-64V262.6c0-2.1.8-4.2 2.3-5.7l16-16c9.4-9.4 9.4-24.6 0-33.9l-16-16c-1.5-1.5-2.3-3.5-2.3-5.7V104c0-22.6-10.4-42.8-26.7-56H408c30.9 0 56 25.1 56 56v17.4c0 2.1-.8 4.2-2.3 5.7l-16 16c-9.4 9.4-9.4 24.6 0 33.9l16 16c1.5 1.5 2.3 3.5 2.3 5.7v18.7c0 2.1-.8 4.2-2.3 5.7l-16 16c-9.4 9.4-9.4 24.6 0 33.9l16 16c1.5 1.5 2.3 3.5 2.3 5.7v9.3h16v-9.4c0-6.4-2.5-12.5-7-17l-16-16c-3.1-3.1-3.1-8.2 0-11.3l16-16c4.5-4.5 7-10.6 7-17v-18.7c0-6.4-2.5-12.5-7-17l-16-16c-3.1-3.1-3.1-8.2 0-11.3l16-16c4.5-4.5 7-10.6 7-17V104c0-39.8-32.2-72-72-72H72C32.2 32 0 64.2 0 104v72c0 17.7 14.3 32 32 32h64v-16H32c-8.8 0-16-7.2-16-16zm480 360H256c19.4-14.6 32-37.8 32-64v-32c0-8.8 7.2-16 16-16h40.3c2.4 0 4.7 1.1 6.2 3l14.7 18.4c9.6 12 27.9 12 37.5 0l14.7-18.4c1.5-1.9 3.8-3 6.2-3H544c8.8 0 16 7.2 16 16v32c0 35.3-28.7 64-64 64"
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
                  d="M128 96v89.4c0 4.2 1.7 8.3 4.7 11.3l21.7 21.7c3.1 3.1 3.1 8.2 0 11.3l-21.7 21.7c-3 3-4.7 7.1-4.7 11.3V400c0 44.2 35.8 80 80 80s80-35.8 80-80v-16c0-17.7 14.3-32 32-32h25.4c4.2 0 8.3 1.7 11.3 4.7l21.7 21.7c3.1 3.1 8.2 3.1 11.3 0l21.7-21.7c3-3 7.1-4.7 11.3-4.7H480v-57.4c0-4.2-1.7-8.3-4.7-11.3l-21.7-21.7c-3.1-3.1-3.1-8.2 0-11.3l21.7-21.7c3-3 4.7-7.1 4.7-11.3v-18.7c0-4.2-1.7-8.3-4.7-11.3l-21.7-21.7c-3.1-3.1-3.1-8.2 0-11.3l21.7-21.7c3-3 4.7-7.1 4.7-11.3V96c0-35.3-28.7-64-64-64H64c35.3 0 64 28.7 64 64"
                />
                <path
                  className="aps-icon-foreground"
                  d="M32 160h96V96c0-35.3-28.7-64-64-64S0 60.7 0 96v32c0 17.7 14.3 32 32 32m256 224v16c0 44.2-35.8 80-80 80h272c53 0 96-43 96-96 0-17.7-14.3-32-32-32H422.6c-4.2 0-8.3 1.7-11.3 4.7l-21.7 21.7c-3.1 3.1-8.2 3.1-11.3 0l-21.7-21.7c-3-3-7.1-4.7-11.3-4.7H320c-17.7 0-32 14.3-32 32"
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
