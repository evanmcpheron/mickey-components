import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const PillsIcon: React.FC<
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
                  d="M112 96c-26.5 0-48 21.5-48 48v112h96V144c0-26.5-21.5-48-48-48M0 144C0 82.1 50.1 32 112 32s112 50.1 112 112v224c0 61.9-50.1 112-112 112S0 429.9 0 368zm554.9 255.4c-7.1 12.3-23.7 13.1-33.8 3.1L333.5 214.9c-10-10-9.3-26.7 3.1-33.8C360 167.7 387.1 160 416 160c88.4 0 160 71.6 160 160 0 28.9-7.7 56-21.1 79.4m-59.5 59.5C472 472.3 444.9 480 416 480c-88.4 0-160-71.6-160-160 0-28.9 7.7-56 21.1-79.4 7.1-12.3 23.7-13.1 33.8-3.1l187.6 187.6c10 10 9.3 26.7-3.1 33.8"
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
                  d="M112 80c35.3 0 64 28.7 64 64v112H48V144c0-35.3 28.7-64 64-64M0 144v224c0 61.9 50.1 112 112 112s112-50.1 112-112V144c0-61.9-50.1-112-112-112S0 82.1 0 144m416 288c-61.9 0-112-50.1-112-112 0-22.2 6.5-43 17.7-60.4l154.7 154.7C459 425.5 438.2 432 416 432m-60.4-206.3C373 214.5 393.8 208 416 208c61.9 0 112 50.1 112 112 0 22.2-6.5 43-17.7 60.4zM416 480a160 160 0 1 0 0-320 160 160 0 1 0 0 320"
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
                  d="M112 64c44.2 0 80 35.8 80 80v112H32V144c0-44.2 35.8-80 80-80M32 368v-80h160v80c0 44.2-35.8 80-80 80s-80-35.8-80-80M0 144v224c0 61.9 50.1 112 112 112s112-50.1 112-112V144c0-61.9-50.1-112-112-112S0 82.1 0 144m416 304c-70.7 0-128-57.3-128-128 0-29.6 10-56.8 26.9-78.5l179.6 179.6C472.8 438 445.6 448 416 448m-78.5-229.1C359.2 202 386.4 192 416 192c70.7 0 128 57.3 128 128 0 29.6-10 56.8-26.9 78.5zM416 480a160 160 0 1 0 0-320 160 160 0 1 0 0 320"
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
                  d="M112 48c53 0 96 43 96 96v112H16V144c0-53 43-96 96-96M16 368v-96h192v96c0 53-43 96-96 96s-96-43-96-96M0 144v224c0 61.9 50.1 112 112 112s112-50.1 112-112V144c0-61.9-50.1-112-112-112S0 82.1 0 144m416 320c-79.5 0-144-64.5-144-144 0-36.9 13.9-70.5 36.7-96L512 427.3c-25.5 22.8-59.1 36.7-96 36.7m-96-251.3c25.5-22.8 59.1-36.7 96-36.7 79.5 0 144 64.5 144 144 0 36.9-13.9 70.5-36.7 96zM416 480a160 160 0 1 0 0-320 160 160 0 1 0 0 320"
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
                  d="M224 256V144c0-61.9-50.1-112-112-112S0 82.1 0 144v112h224m330.9 143.4C568.3 376 576 348.9 576 320c0-88.4-71.6-160-160-160-28.9 0-56 7.7-79.4 21.1-12.3 7.1-13.1 23.7-3.1 33.8l187.6 187.6c10 10 26.7 9.3 33.8-3.1m-59.5 59.5c12.3-7.1 13.1-23.7 3.1-33.8L310.9 237.5c-10-10-26.7-9.3-33.8 3.1C263.7 264 256 291.1 256 320c0 88.4 71.6 160 160 160 28.9 0 56-7.7 79.4-21.1"
                />
                <path
                  className="aps-icon-foreground"
                  d="M32 256H0v112c0 61.9 50.1 112 112 112s112-50.1 112-112V256H32"
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
