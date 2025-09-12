import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const TurnRightIcon: React.FC<
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
                  d="M334.5 66c8.8-3.8 19-2 26 4.6l144 136c4.8 4.5 7.5 10.8 7.5 17.4s-2.7 12.9-7.5 17.4l-144 136c-7 6.6-17.2 8.4-26 4.6S320 369.5 320 360v-88H128c-17.7 0-32 14.3-32 32v144c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V304c0-70.7 57.3-128 128-128h192V88c0-9.6 5.7-18.2 14.5-22"
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
                  d="M505.5 240.4c8.7-9.2 8.7-23.7 0-32.9L384.1 78.6c-8.8-9.3-21-14.6-33.7-14.6-25.7 0-46.4 20.7-46.4 46.3V152H160C71.6 152 0 223.6 0 312v112c0 30.9 25.1 56 56 56h32c30.9 0 56-25.1 56-56V304c0-4.4 3.6-8 8-8h152v41.7c0 25.6 20.7 46.3 46.3 46.3 12.8 0 25-5.3 33.7-14.6l121.4-129zM352 333.5V272c0-13.3-10.7-24-24-24H152c-30.9 0-56 25.1-56 56v120c0 4.4-3.6 8-8 8H56c-4.4 0-8-3.6-8-8V312c0-61.9 50.1-112 112-112h168c13.3 0 24-10.7 24-24v-61.5L455 224z"
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
                  d="M352 304v57.3c0 3.7 3 6.7 6.7 6.7 1.9 0 3.7-.8 5-2.2L476.2 240 363.7 114.2c-1.3-1.4-3.1-2.2-5-2.2-3.7 0-6.7 3-6.7 6.7V176c0 17.7-14.3 32-32 32H144c-61.9 0-112 50.1-112 112v112c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V320c0-26.5 21.5-48 48-48h176c17.7 0 32 14.3 32 32m154.7-78c3.4 3.8 5.3 8.8 5.3 14s-1.9 10.1-5.3 14L387.5 387.1c-7.3 8.2-17.8 12.9-28.8 12.9-21.4 0-38.7-17.3-38.7-38.7V304H144c-8.8 0-16 7.2-16 16v112c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V320c0-79.5 64.5-144 144-144h176v-57.3c0-21.4 17.3-38.7 38.7-38.7 11 0 21.5 4.7 28.8 12.9z"
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
                  d="M336 272v89.1c0 3.8 3.1 6.9 6.9 6.9 1.8 0 3.5-.7 4.7-1.9l147.6-140.2c.5-.5.8-1.2.8-1.9s-.3-1.4-.8-1.9L347.6 81.9c-1.3-1.2-3-1.9-4.7-1.9-3.8 0-6.9 3.1-6.9 6.9V176c0 8.8-7.2 16-16 16H112c-53 0-96 43-96 96v152c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V288c0-17.7 14.3-32 32-32h208c8.8 0 16 7.2 16 16m170.2-34.5L358.6 377.7c-4.2 4-9.9 6.3-15.8 6.3-12.6 0-22.9-10.2-22.9-22.9V272h-208c-8.8 0-16 7.2-16 16v152c0 22.1-17.9 40-40 40h-16c-22.1 0-40-17.9-40-40L0 288c0-61.9 50.1-112 112-112h208V86.9c0-12.7 10.2-22.9 22.9-22.9 5.9 0 11.5 2.3 15.8 6.3l147.5 140.2c3.7 3.5 5.8 8.4 5.8 13.5s-2.1 10-5.8 13.5"
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
                  d="M0 304c0-70.7 57.3-128 128-128h192v96H128c-17.7 0-32 14.3-32 32v144c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M360.5 70.6c-7-6.6-17.2-8.4-26-4.6S320 78.4 320 88v272c0 9.6 5.7 18.2 14.5 22s19 2 26-4.6l144-136c4.8-4.5 7.5-10.8 7.5-17.4s-2.7-12.9-7.5-17.4z"
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
