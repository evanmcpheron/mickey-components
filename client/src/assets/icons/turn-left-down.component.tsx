import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const TurnLeftDownIcon: React.FC<
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
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M42 334.5c-3.8 8.8-2 19 4.6 26l136 144c4.5 4.8 10.8 7.5 17.4 7.5s12.9-2.7 17.4-7.5l136-144c6.6-7 8.4-17.2 4.6-26S345.5 320 336 320h-88V128c0-17.7 14.3-32 32-32h80c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32h-80c-70.7 0-128 57.3-128 128v192H64c-9.6 0-18.2 5.7-22 14.5"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M208.4 505.5c-9.2 8.7-23.7 8.7-32.9 0L46.6 384.1c-9.3-8.8-14.6-21-14.6-33.7 0-25.7 20.7-46.4 46.3-46.4H120V160C120 71.6 191.6 0 280 0h48c30.9 0 56 25.1 56 56v32c0 30.9-25.1 56-56 56h-56c-4.4 0-8 3.6-8 8v152h41.7c25.6 0 46.3 20.7 46.3 46.3 0 12.8-5.3 25-14.6 33.7l-129 121.4zm93-153.5H240c-13.3 0-24-10.7-24-24V152c0-30.9 25.1-56 56-56h56c4.4 0 8-3.6 8-8V56c0-4.4-3.6-8-8-8h-48c-61.9 0-112 50.1-112 112v168c0 13.3-10.7 24-24 24H82.5L192 455l109.5-103z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M256 352h57.3c3.7 0 6.7 3 6.7 6.7 0 1.9-.8 3.7-2.2 5L192 476.2 66.2 363.7c-1.4-1.3-2.2-3.1-2.2-5 0-3.7 3-6.7 6.7-6.7H128c17.7 0 32-14.3 32-32V144c0-61.9 50.1-112 112-112h64c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-64c-26.5 0-48 21.5-48 48v176c0 17.7 14.3 32 32 32m-78 154.7c3.8 3.4 8.8 5.3 14 5.3s10.1-1.9 14-5.3l133.1-119.2c8.2-7.3 12.9-17.8 12.9-28.8 0-21.4-17.3-38.7-38.7-38.7H256V144c0-8.8 7.2-16 16-16h64c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48h-64c-79.5 0-144 64.5-144 144v176H70.7C49.3 320 32 337.3 32 358.7c0 11 4.7 21.5 12.9 28.8z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M240 336h89.1c3.8 0 6.9 3.1 6.9 6.9 0 1.8-.7 3.5-1.9 4.7L193.9 495.2c-.5.5-1.2.8-1.9.8s-1.4-.3-1.9-.8L49.9 347.6c-1.2-1.3-1.9-3-1.9-4.7 0-3.8 3.1-6.9 6.9-6.9H144c8.8 0 16-7.2 16-16V112c0-53 43-96 96-96h88c13.3 0 24 10.7 24 24v16c0 13.3-10.7 24-24 24h-88c-17.7 0-32 14.3-32 32v208c0 8.8 7.2 16 16 16m-34.5 170.2 140.2-147.6c4-4.2 6.3-9.9 6.3-15.8 0-12.6-10.2-22.9-22.9-22.9H240V112c0-8.8 7.2-16 16-16h88c22.1 0 40-17.9 40-40V40c0-22.1-17.9-40-40-40h-88c-61.9 0-112 50.1-112 112v208H54.9C42.2 320 32 330.2 32 342.9c0 5.9 2.3 11.5 6.3 15.8l140.2 147.5c3.5 3.7 8.4 5.8 13.5 5.8s10-2.1 13.5-5.8"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M280 0c-70.7 0-128 57.3-128 128v192h96V128c0-17.7 14.3-32 32-32h80c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M46.5 360.5c-6.6-7-8.4-17.2-4.6-26s12.5-14.5 22-14.5h272c9.6 0 18.2 5.7 22 14.5s2 19-4.6 26l-136 144c-4.5 4.8-10.8 7.5-17.4 7.5s-12.9-2.7-17.4-7.5z"
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
