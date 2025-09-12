import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CartFlatbedIcon: React.FC<
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
                  d="M32 0C14.3 0 0 14.3 0 32s14.3 32 32 32h16c8.8 0 16 7.2 16 16v288c0 44.2 35.8 80 80 80h18.7c-1.8 5-2.7 10.4-2.7 16 0 26.5 21.5 48 48 48s48-21.5 48-48c0-5.6-1-11-2.7-16h197.4c-1.8 5-2.7 10.4-2.7 16 0 26.5 21.5 48 48 48s48-21.5 48-48c0-5.6-1-11-2.7-16H608c17.7 0 32-14.3 32-32s-14.3-32-32-32H144c-8.8 0-16-7.2-16-16V80c0-44.2-35.8-80-80-80zm160 80v192c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48h-96v144c0 5.9-3.2 11.3-8.5 14.1s-11.5 2.5-16.4-.8L400 163.2l-39.1 26.1c-4.9 3.3-11.2 3.6-16.4.8s-8.5-8.2-8.5-14.1V32h-96c-26.5 0-48 21.5-48 48"
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
                  d="M24 0C10.7 0 0 10.7 0 24s10.7 24 24 24h48c4.4 0 8 3.6 8 8v352c0 30.9 25.1 56 56 56h24c0 26.5 21.5 48 48 48s48-21.5 48-48h192c0 26.5 21.5 48 48 48s48-21.5 48-48h72c13.3 0 24-10.7 24-24s-10.7-24-24-24H136c-4.4 0-8-3.6-8-8V56c0-30.9-25.1-56-56-56zm216 80h96v96c0 5.9 3.2 11.3 8.5 14.1s11.5 2.5 16.4-.8l39.1-26.1 39.1 26.1c4.9 3.3 11.2 3.6 16.4.8s8.5-8.2 8.5-14.1V80h96v224H240zm-48 0v224c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48H240c-26.5 0-48 21.5-48 48"
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
                  d="M0 16C0 7.2 7.2 0 16 0h64c26.5 0 48 21.5 48 48v320c0 8.8 7.2 16 16 16h480c8.8 0 16 7.2 16 16s-7.2 16-16 16h-56.6c5.4 9.4 8.6 20.3 8.6 32 0 35.3-28.7 64-64 64s-64-28.7-64-64c0-11.7 3.1-22.6 8.6-32H279.4c5.4 9.4 8.6 20.3 8.6 32 0 35.3-28.7 64-64 64s-64-28.7-64-64c0-11.7 3.1-22.6 8.6-32H144c-26.5 0-48-21.5-48-48V48c0-8.8-7.2-16-16-16H16C7.2 32 0 24.8 0 16m512 400a32 32 0 1 0 0 64 32 32 0 1 0 0-64m-320 32a32 32 0 1 0 64 0 32 32 0 1 0-64 0M320 64h-80c-8.8 0-16 7.2-16 16v192c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16h-80v128c0 6.1-3.4 11.6-8.8 14.3s-11.9 2.1-16.8-1.5L400 164l-54.4 40.8c-4.8 3.6-11.3 4.2-16.8 1.5S320 198 320 192zm32 0v96l38.4-28.8a15.9 15.9 0 0 1 19.2 0L448 160V64zM240 32h320c26.5 0 48 21.5 48 48v192c0 26.5-21.5 48-48 48H240c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48"
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
                  d="M0 8c0-4.4 3.6-8 8-8h80c22.1 0 40 17.9 40 40v352c0 13.3 10.7 24 24 24h480c4.4 0 8 3.6 8 8s-3.6 8-8 8h-84.2c7.6 8.5 12.2 19.7 12.2 32 0 26.5-21.5 48-48 48s-48-21.5-48-48c0-12.3 4.6-23.5 12.2-32H259.8c7.6 8.5 12.2 19.7 12.2 32 0 26.5-21.5 48-48 48s-48-21.5-48-48c0-12.3 4.6-23.5 12.2-32H152c-22.1 0-40-17.9-40-40V40c0-13.3-10.7-24-24-24H8c-4.4 0-8-3.6-8-8m512 424a32 32 0 1 0 0 64 32 32 0 1 0 0-64m-320 32a32 32 0 1 0 64 0 32 32 0 1 0-64 0M336 80h-96c-17.7 0-32 14.3-32 32v192c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V112c0-17.7-14.3-32-32-32h-96v136c0 3.1-1.8 6-4.7 7.3s-6.2.8-8.6-1.2L400 178.5 349.2 222c-2.4 2-5.7 2.5-8.6 1.2s-4.7-4.1-4.7-7.3V80zm16 0v118.6l42.8-36.7c3-2.6 7.4-2.6 10.4 0l42.8 36.7V80zM240 64h320c26.5 0 48 21.5 48 48v192c0 26.5-21.5 48-48 48H240c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48"
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
                  d="M192 80c0-26.5 21.5-48 48-48h96v144c0 5.9 3.2 11.3 8.5 14.1s11.5 2.5 16.4-.8l39.1-26.1 39.1 26.1c4.9 3.3 11.2 3.6 16.4.8s8.5-8.2 8.5-14.1V32h96c26.5 0 48 21.5 48 48v192c0 26.5-21.5 48-48 48H240c-26.5 0-48-21.5-48-48zm-32 384c0-5.6 1-11 2.7-16h90.5c1.8 5 2.7 10.4 2.7 16 0 26.5-21.5 48-48 48s-48-21.5-48-48zm288 0c0-5.6 1-11 2.7-16h90.5c1.8 5 2.7 10.4 2.7 16 0 26.5-21.5 48-48 48s-48-21.5-48-48z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M32 0C14.3 0 0 14.3 0 32s14.3 32 32 32h16c8.8 0 16 7.2 16 16v288c0 44.2 35.8 80 80 80h464c17.7 0 32-14.3 32-32s-14.3-32-32-32H144c-8.8 0-16-7.2-16-16V80c0-44.2-35.8-80-80-80zm304 176c0 5.9 3.2 11.3 8.5 14.1s11.5 2.5 16.4-.8l39.1-26.1 39.1 26.1c4.9 3.3 11.2 3.6 16.4.8s8.5-8.2 8.5-14.1V32H336z"
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
