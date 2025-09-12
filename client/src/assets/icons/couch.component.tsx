import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CouchIcon: React.FC<
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
                  d="M64 160c0-70.7 57.3-128 128-128h256c70.7 0 128 57.3 128 128v33.6c-36.5 7.4-64 39.7-64 78.4v48H128v-48c0-38.7-27.5-71-64-78.4zm480 112c0-20.9 13.4-38.7 32-45.3 5-1.8 10.4-2.7 16-2.7 26.5 0 48 21.5 48 48v176c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32H96c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V272c0-26.5 21.5-48 48-48 5.6 0 11 1 16 2.7 18.6 6.6 32 24.4 32 45.3v80h448v-80"
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
                  d="M448 80H192c-44.2 0-80 35.8-80 80v40c-12.3-5.1-25.8-8-40-8-2.7 0-5.4.1-8 .3V160c0-70.7 57.3-128 128-128h256c70.7 0 128 57.3 128 128v32.3c-2.6-.2-5.3-.3-8-.3-14.2 0-27.7 2.8-40 8v-40c0-44.2-35.8-80-80-80m120 144c2.7 0 5.4.1 8 .4 36 4 64 34.5 64 71.6v136c0 26.5-21.5 48-48 48h-48c-20.9 0-38.7-13.4-45.3-32H141.3c-6.6 18.6-24.4 32-45.3 32H48c-26.5 0-48-21.5-48-48V296c0-37.1 28-67.6 64-71.6 2.6-.3 5.3-.4 8-.4 15.2 0 29.4 4.7 41 12.8 16.7 11.6 28.2 30 30.5 51.2h352.9c2.3-21.2 13.9-39.6 30.5-51.2 11.6-8.1 25.8-12.8 41-12.8zm-24 72v136h48V296c0-13.3-10.7-24-24-24s-24 10.7-24 24m-48 104v-64H144v64zm-400 0V296c0-13.3-10.7-24-24-24s-24 10.7-24 24v136h48z"
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
                  d="M448 64c53 0 96 43 96 96v37.5c10-3.5 20.8-5.5 32-5.5v-32c0-70.7-57.3-128-128-128H192C121.3 32 64 89.3 64 160v32c11.2 0 22 1.9 32 5.5V160c0-53 43-96 96-96zM96 320v112c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V288c0-17.7 14.3-32 32-32s32 14.3 32 32zM80 480c20.9 0 38.7-13.4 45.3-32h389.4c6.6 18.6 24.4 32 45.3 32h32c26.5 0 48-21.5 48-48V288c0-35.3-28.7-64-64-64s-64 28.7-64 64H128c0-35.3-28.7-64-64-64S0 252.7 0 288v144c0 26.5 21.5 48 48 48zm48-64v-96h384v96zm416 16V288c0-17.7 14.3-32 32-32s32 14.3 32 32v144c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16"
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
                  d="M448 48H192C130.1 48 80 98.1 80 160v33.3c-5.2-.9-10.5-1.3-16-1.3v-32c0-70.7 57.3-128 128-128h256c70.7 0 128 57.3 128 128v32c-5.5 0-10.8.5-16 1.3V160c0-61.9-50.1-112-112-112M112 288c0-26.5-21.5-48-48-48s-48 21.5-48 48v144c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32zM0 288c0-35.3 28.7-64 64-64s64 28.7 64 64h384c0-35.3 28.7-64 64-64s64 28.7 64 64v144c0 26.5-21.5 48-48 48h-32c-26.5 0-48-21.5-48-48H128c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48zm128 128h384V304H128zm496-128c0-26.5-21.5-48-48-48s-48 21.5-48 48v144c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32z"
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
                  d="M192 32C121.3 32 64 89.3 64 160v66.7c18.6 6.6 32 24.4 32 45.3v80h448v-80c0-20.9 13.4-38.7 32-45.3V160c0-70.7-57.3-128-128-128z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M48 224c-26.5 0-48 21.5-48 48v176c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32h448c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V272c0-26.5-21.5-48-48-48s-48 21.5-48 48v80H96v-80c0-26.5-21.5-48-48-48"
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
