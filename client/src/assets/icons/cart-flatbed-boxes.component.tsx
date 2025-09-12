import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CartFlatbedBoxesIcon: React.FC<
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
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M32 0C14.3 0 0 14.3 0 32s14.3 32 32 32h16c8.8 0 16 7.2 16 16v288c0 44.2 35.8 80 80 80h18.7c-1.8 5-2.7 10.4-2.7 16 0 26.5 21.5 48 48 48s48-21.5 48-48c0-5.6-1-11-2.7-16h197.4c-1.8 5-2.7 10.4-2.7 16 0 26.5 21.5 48 48 48s48-21.5 48-48c0-5.6-1-11-2.7-16H608c17.7 0 32-14.3 32-32s-14.3-32-32-32H144c-8.8 0-16-7.2-16-16V80c0-44.2-35.8-80-80-80zm192 32c-17.7 0-32 14.3-32 32v224c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32zm192 32v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32m32 128c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M24 0C10.7 0 0 10.7 0 24s10.7 24 24 24h48c4.4 0 8 3.6 8 8v352c0 30.9 25.1 56 56 56h24c0 26.5 21.5 48 48 48s48-21.5 48-48h192c0 26.5 21.5 48 48 48s48-21.5 48-48h72c13.3 0 24-10.7 24-24s-10.7-24-24-24H136c-4.4 0-8-3.6-8-8V56c0-30.9-25.1-56-56-56zm216 80h128v224H240zm-48 0v224c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48H240c-26.5 0-48 21.5-48 48m368 0v64h-64V80zm-64-48c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h64c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 240h96v32h-96zm-48 0v32c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48v-32c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M16 0C7.2 0 0 7.2 0 16s7.2 16 16 16h64c8.8 0 16 7.2 16 16v320c0 26.5 21.5 48 48 48h24.6c-5.4 9.4-8.6 20.3-8.6 32 0 35.3 28.7 64 64 64s64-28.7 64-64c0-11.7-3.1-22.6-8.6-32h177.2c-5.4 9.4-8.6 20.3-8.6 32 0 35.3 28.7 64 64 64s64-28.7 64-64c0-11.7-3.1-22.6-8.6-32H624c8.8 0 16-7.2 16-16s-7.2-16-16-16H144c-8.8 0-16-7.2-16-16V48c0-26.5-21.5-48-48-48zm528 448a32 32 0 1 1-64 0 32 32 0 1 1 64 0m-320 32a32 32 0 1 1 0-64 32 32 0 1 1 0 64m0-416h128v224H224zm-32 0v224c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H224c-17.7 0-32 14.3-32 32m320 0v64h-64V64zm-64-32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32zm0 192h128v64H448zm-32 0v64c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32H448c-17.7 0-32 14.3-32 32"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8h80c13.3 0 24 10.7 24 24v352c0 22.1 17.9 40 40 40h36.2c-7.6 8.5-12.2 19.7-12.2 32 0 26.5 21.5 48 48 48s48-21.5 48-48c0-12.3-4.6-23.5-12.2-32h216.4c-7.6 8.5-12.2 19.7-12.2 32 0 26.5 21.5 48 48 48s48-21.5 48-48c0-12.3-4.6-23.5-12.2-32H632c4.4 0 8-3.6 8-8s-3.6-8-8-8H152c-13.3 0-24-10.7-24-24V40c0-22.1-17.9-40-40-40zm536 464a32 32 0 1 1-64 0 32 32 0 1 1 64 0m-320 32a32 32 0 1 1 0-64 32 32 0 1 1 0 64m0-416h128c8.8 0 16 7.2 16 16v224c0 8.8-7.2 16-16 16H224c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16m-32 16v224c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32H224c-17.7 0-32 14.3-32 32m320-16c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16zm-64-16c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm0 176h128c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H448c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16m-32 16v64c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32H448c-17.7 0-32 14.3-32 32"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M224 32c-17.7 0-32 14.3-32 32v224c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32zm224 0c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32zm-32 192v64c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32H448c-17.7 0-32 14.3-32 32M160 464c0 26.5 21.5 48 48 48s48-21.5 48-48c0-5.6-1-11-2.7-16h-90.6c-1.8 5-2.7 10.4-2.7 16m288 0c0 26.5 21.5 48 48 48s48-21.5 48-48c0-5.6-1-11-2.7-16h-90.6c-1.8 5-2.7 10.4-2.7 16"
                />
                <path
                  className="aps-icon-foreground"
                  d="M0 32C0 14.3 14.3 0 32 0h16c44.2 0 80 35.8 80 80v288c0 8.8 7.2 16 16 16h464c17.7 0 32 14.3 32 32s-14.3 32-32 32H144c-44.2 0-80-35.8-80-80V80c0-8.8-7.2-16-16-16H32C14.3 64 0 49.7 0 32"
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
