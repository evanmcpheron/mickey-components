import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const MugTeaSaucerIcon: React.FC<
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
                  d="M208 82.7V32h-80c-17.7 0-32 14.3-32 32v224c0 53 43 96 96 96h192c53 0 96-43 96-96h32c70.7 0 128-57.3 128-128S582.7 32 512 32H240v50.7c0 8.5 3.4 16.6 9.4 22.6l29.3 29.3c6 6 9.4 14.1 9.4 22.6V224c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32v-66.7c0-8.5 3.4-16.6 9.4-22.6l29.3-29.3c6-6 9.4-14.1 9.4-22.6zM480 96h32c35.3 0 64 28.7 64 64s-28.7 64-64 64h-32zM32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32h512c17.7 0 32-14.3 32-32s-14.3-32-32-32z"
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
                  d="M144 288c0 26.5 21.5 48 48 48h192c26.5 0 48-21.5 48-48V80H248v10.7c0 8.5 3.4 16.6 9.4 22.6l21.3 21.3c6 6 9.4 14.1 9.4 22.6V224c0 17.7-14.3 32-32 32H208c-17.7 0-32-14.3-32-32v-66.7c0-8.5 3.4-16.6 9.4-22.6l21.3-21.3c6-6 9.4-14.1 9.4-22.6V80H144zM96 64c0-17.7 14.3-32 32-32h384c70.7 0 128 57.3 128 128s-57.3 128-128 128h-32c0 53-43 96-96 96H192c-53 0-96-43-96-96zm384 176h32c44.2 0 80-35.8 80-80s-35.8-80-80-80h-32zM24 432h528c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24"
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
                  d="M240 64h208v224c0 35.3-28.7 64-64 64H192c-35.3 0-64-28.7-64-64V64h80v40.5l-36.5 30.4C164.2 141 160 150 160 159.5V224c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32v-64.5c0-9.5-4.2-18.5-11.5-24.6L240 104.5zm-16-32h-96c-17.7 0-32 14.3-32 32v224c0 53 43 96 96 96h192c53 0 96-43 96-96v-32h48c61.9 0 112-50.1 112-112S589.9 32 528 32H224m256 192V64h48c44.2 0 80 35.8 80 80s-35.8 80-80 80zM0 464c0 8.8 7.2 16 16 16h544c8.8 0 16-7.2 16-16s-7.2-16-16-16H16c-8.8 0-16 7.2-16 16m192-240v-64.5l32-26.7 32 26.7V224z"
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
                  d="M232 48v37l46.1 52.7c6.4 7.3 9.9 16.7 9.9 26.3v52c0 22.1-17.9 40-40 40h-48c-22.1 0-40-17.9-40-40v-52c0-9.7 3.5-19 9.9-26.3L216 85V48h-88c-8.8 0-16 7.2-16 16v224c0 44.2 35.8 80 80 80h192c44.2 0 80-35.8 80-80V48H232m248 0v176h24c48.6 0 88-39.4 88-88s-39.4-88-88-88zm0 192v48c0 53-43 96-96 96H192c-53 0-96-43-96-96V64c0-17.7 14.3-32 32-32h376c57.4 0 104 46.6 104 104s-46.6 104-104 104zM0 472c0-4.4 3.6-8 8-8h560c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.4 0-8-3.6-8-8m181.9-323.8c-3.8 4.4-5.9 10-5.9 15.8v52c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24v-52c0-5.8-2.1-11.4-5.9-15.8L224 100.1z"
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
                  d="M208 32v50.7c0 8.5-3.4 16.6-9.4 22.6l-29.3 29.3c-6 6-9.4 14.1-9.4 22.6V224c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32v-66.7c0-8.5-3.4-16.6-9.4-22.6l-29.3-29.3c-6-6-9.4-14.1-9.4-22.6V32zM32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32h512c17.7 0 32-14.3 32-32s-14.3-32-32-32z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M208 32v50.7c0 8.5-3.4 16.6-9.4 22.6l-29.3 29.3c-6 6-9.4 14.1-9.4 22.6V224c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32v-66.7c0-8.5-3.4-16.6-9.4-22.6l-29.3-29.3c-6-6-9.4-14.1-9.4-22.6V32H512c70.7 0 128 57.3 128 128s-57.3 128-128 128h-32c0 53-43 96-96 96H192c-53 0-96-43-96-96V64c0-17.7 14.3-32 32-32zm272 192h32c35.3 0 64-28.7 64-64s-28.7-64-64-64h-32z"
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
