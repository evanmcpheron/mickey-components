import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const TurnDownIcon: React.FC<
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
                  d="M350 334.5c3.8 8.8 2 19-4.6 26l-136 144c-4.5 4.8-10.8 7.5-17.4 7.5s-12.9-2.7-17.4-7.5l-136-144c-6.6-7-8.4-17.2-4.6-26S46.5 320 56 320h88V128c0-17.7-14.3-32-32-32H32C14.3 96 0 81.7 0 64V32C0 14.3 14.3 0 32 0h80c70.7 0 128 57.3 128 128v192h88c9.6 0 18.2 5.7 22 14.5"
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
                  d="M175.6 505.5c9.2 8.7 23.7 8.7 32.9 0l129-121.4c9.3-8.8 14.6-21 14.6-33.7 0-25.6-20.7-46.3-46.3-46.3H264V160C264 71.6 192.4 0 104 0H56C25.1 0 0 25.1 0 56v32c0 30.9 25.1 56 56 56h56c4.4 0 8 3.6 8 8v152H78.3C52.7 304 32 324.7 32 350.3c0 12.8 5.3 25 14.6 33.7l129 121.4zM82.5 352H144c13.3 0 24-10.7 24-24V152c0-30.9-25.1-56-56-56H56c-4.4 0-8-3.6-8-8V56c0-4.4 3.6-8 8-8h48c61.9 0 112 50.1 112 112v168c0 13.3 10.7 24 24 24h61.5L192 455z"
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
                  d="M128 352H70.7c-3.7 0-6.7 3-6.7 6.7 0 1.9.8 3.7 2.2 5L192 476.2l125.8-112.5c1.4-1.3 2.2-3.1 2.2-5 0-3.7-3-6.7-6.7-6.7H256c-17.7 0-32-14.3-32-32V144c0-61.9-50.1-112-112-112H48c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64c26.5 0 48 21.5 48 48v176c0 17.7-14.3 32-32 32m78 154.7c-3.8 3.4-8.8 5.3-14 5.3s-10.1-1.9-14-5.3L44.9 387.5c-8.2-7.3-12.9-17.8-12.9-28.8 0-21.4 17.3-38.7 38.7-38.7H128V144c0-8.8-7.2-16-16-16H48c-26.5 0-48-21.5-48-48V48C0 21.5 21.5 0 48 0h64c79.5 0 144 64.5 144 144v176h57.3c21.4 0 38.7 17.3 38.7 38.7 0 11-4.7 21.5-12.9 28.8z"
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
                  d="M144 336H54.9c-3.8 0-6.9 3.1-6.9 6.9 0 1.8.7 3.5 1.9 4.7l140.2 147.6c.5.5 1.2.8 1.9.8s1.4-.3 1.9-.8l140.2-147.6c1.2-1.3 1.9-3 1.9-4.7 0-3.8-3.1-6.9-6.9-6.9H240c-8.8 0-16-7.2-16-16V112c0-53-43-96-96-96H40c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h88c17.7 0 32 14.3 32 32v208c0 8.8-7.2 16-16 16m34.5 170.2L38.3 358.6c-4-4.2-6.3-9.9-6.3-15.8 0-12.6 10.2-22.8 22.9-22.8H144V112c0-8.8-7.2-16-16-16H40C17.9 96 0 78.1 0 56V40C0 17.9 17.9 0 40 0h88c61.9 0 112 50.1 112 112v208h89.1c12.6 0 22.9 10.2 22.9 22.9 0 5.9-2.3 11.5-6.3 15.8L205.5 506.2c-3.5 3.7-8.4 5.8-13.5 5.8s-10-2.1-13.5-5.8"
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
                  d="M144 320h96V112C240 50.1 189.9 0 128 0H32C14.3 0 0 14.3 0 32v32c0 17.7 14.3 32 32 32h96c8.8 0 16 7.2 16 16z"
                />
                <path
                  className="aps-icon-foreground"
                  d="m40.3 368.3 138 138c3.6 3.6 8.5 5.7 13.7 5.7s10-2 13.7-5.7l138-138c5.3-5.3 8.3-12.5 8.3-20 0-15.6-12.7-28.3-28.3-28.3H60.3C44.7 320 32 332.7 32 348.3c0 7.5 3 14.7 8.3 20"
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
