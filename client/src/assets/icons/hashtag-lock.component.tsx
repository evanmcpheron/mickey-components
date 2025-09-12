import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const HashtagLockIcon: React.FC<
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
                  d="M181.3 32.4c17.4 2.9 29.2 19.4 26.3 36.8l-9.8 58.8h95.1l11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3s29.2 19.4 26.3 36.8l-9.7 58.8H416c17.7 0 32 14.3 32 32v1.1c-24.1 3.5-45.8 14.6-62.4 30.9h-38.5l-21.3 128h2.8c-5.4 9.4-8.6 20.3-8.6 32v32h-4.9l-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8l9.8-58.7h-95.2l-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8l9.7-58.9H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h68.9l21.3-128H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h68.9l11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3zm5.8 159.6-21.3 128h95.1l21.3-128zM464 240c-17.7 0-32 14.3-32 32v48h64v-48c0-17.7-14.3-32-32-32m-80 32c0-44.2 35.8-80 80-80s80 35.8 80 80v48c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H384c-17.7 0-32-14.3-32-32V352c0-17.7 14.3-32 32-32z"
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
                  d="M188.7 32.5c13 2.6 21.4 15.2 18.8 28.2l-15 75.3h111l16.9-84.7c2.6-13 15.2-21.4 28.2-18.8s21.4 15.2 18.8 28.2L352.5 136H424c13.3 0 24 10.7 24 24v1.1c-19.9 2.9-38.2 11-53.3 22.9h-51.8l-55.4 276.7c-2.6 13-15.2 21.4-28.2 18.8s-21.4-15.2-18.8-28.2l15-75.3h-111l-16.9 84.7c-2.6 13-15.2 21.4-28.2 18.8S78 464.3 80.6 451.3L95.5 376H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h81.1l28.8-144H56c-13.3 0-24-10.7-24-24s10.7-24 24-24h87.5l16.9-84.7c2.6-13 15.2-21.4 28.2-18.8zM182.9 184l-28.8 144h111l28.8-144zM464 240c-17.7 0-32 14.3-32 32v48h64v-48c0-17.7-14.3-32-32-32m-80 32c0-44.2 35.8-80 80-80s80 35.8 80 80v48c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H384c-17.7 0-32-14.3-32-32V352c0-17.7 14.3-32 32-32z"
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
                  d="M195.6 32.4c8.6 2 14 10.6 12 19.2L186.3 144h127.1l23-99.6c2-8.6 10.6-14 19.2-12s14 10.6 12 19.2L346.3 144H432c8.8 0 16 7.2 16 16v1.1c-15.1 2.2-29.2 7.3-41.7 14.9h-67.4l-67.3 291.6c-2 8.6-10.6 14-19.2 12s-14-10.6-12-19.2l21.3-92.4H134.6l-23 99.6c-2 8.6-10.6 14-19.2 12s-14-10.6-12-19.2l21.3-92.4H16c-8.8 0-16-7.2-16-16s7.2-16 16-16h93.1L146 176H48c-8.8 0-16-7.2-16-16s7.2-16 16-16h105.4l23-99.6c2-8.6 10.6-14 19.2-12M178.9 176 142 336h127.1L306 176zM464 224c-26.5 0-48 21.5-48 48v48h96v-48c0-26.5-21.5-48-48-48m-80 48c0-44.2 35.8-80 80-80s80 35.8 80 80v48c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H384c-17.7 0-32-14.3-32-32V352c0-17.7 14.3-32 32-32zm0 80v128h160V352z"
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
                  d="M169.7 32.2c4.3 1 7 5.2 6.1 9.5L153.1 144h175.6l23.5-105.7c1-4.3 5.2-7 9.5-6.1s7 5.2 6.1 9.5L345.1 144H440c4.4 0 8 3.6 8 8s-3.6 8-8 8h-98.5l-42.6 192H320v16h-24.7l-23.5 105.7c-1 4.3-5.2 7-9.5 6.1s-7-5.2-6.1-9.5L278.9 368H103.3L79.8 473.7c-1 4.3-5.2 7-9.5 6.1s-7-5.2-6.1-9.5L86.9 368H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h82.5l42.7-192H40c-4.4 0-8-3.6-8-8s3.6-8 8-8h96.7l23.5-105.7c1-4.3 5.2-7 9.5-6.1M149.5 160l-42.6 192h175.6l42.7-192zM464 208c-26.5 0-48 21.5-48 48v64h96v-64c0-26.5-21.5-48-48-48m-64 48c0-35.3 28.7-64 64-64s64 28.7 64 64v64h16c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H384c-17.7 0-32-14.3-32-32V352c0-17.7 14.3-32 32-32h16zm-16 80c-8.8 0-16 7.2-16 16v128c0 8.8 7.2 16 16 16h160c8.8 0 16-7.2 16-16V352c0-8.8-7.2-16-16-16H384"
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
                  d="M207.6 69.3c2.9-17.4-8.9-33.9-26.3-36.8s-33.9 8.9-36.8 26.3L132.9 128H64c-17.7 0-32 14.3-32 32s14.3 32 32 32h58.2l-21.3 128H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h58.2l-9.8 58.7c-2.9 17.4 8.9 33.9 26.3 36.8s33.9-8.9 36.8-26.3l11.6-69.2h95.1l-9.8 58.7c-2.9 17.4 8.9 33.9 26.3 36.8s33.9-8.9 36.8-26.3l16.5-98.5V352c0-8.1 1.5-15.9 4.3-23.1L347.1 192h38.5c16.6-16.3 38.2-27.4 62.4-30.9V160c0-17.7-14.3-32-32-32h-58.2l9.8-58.7c2.9-17.4-8.9-33.9-26.3-36.8s-33.9 8.9-36.8 26.3L292.9 128h-95.1zM165.8 320l21.3-128h95.1l-21.3 128z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M432 272v48h64v-48c0-17.7-14.3-32-32-32s-32 14.3-32 32m-48 48v-48c0-44.2 35.8-80 80-80s80 35.8 80 80v48c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H384c-17.7 0-32-14.3-32-32V352c0-17.7 14.3-32 32-32"
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
