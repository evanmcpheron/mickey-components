import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const TurnUpIcon: React.FC<
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
                  d="M350 177.5c3.8-8.8 2-19-4.6-26l-136-144C204.9 2.7 198.6 0 192 0s-12.9 2.7-17.4 7.5l-136 144c-6.6 7-8.4 17.2-4.6 26S46.5 192 56 192h88v192c0 17.7-14.3 32-32 32H32c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h80c70.7 0 128-57.3 128-128V192h88c9.6 0 18.2-5.7 22-14.5"
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
                  d="M175.6 6.5c9.2-8.7 23.7-8.7 32.9 0l129 121.4c9.3 8.8 14.6 21 14.6 33.7 0 25.6-20.7 46.3-46.3 46.3H264V352c0 88.4-71.6 160-160 160H56c-30.9 0-56-25.1-56-56v-32c0-30.9 25.1-56 56-56h56c4.4 0 8-3.6 8-8V208H78.3C52.7 208 32 187.3 32 161.7c0-12.8 5.3-25 14.6-33.7zM82.5 160H144c13.3 0 24 10.7 24 24v176c0 30.9-25.1 56-56 56H56c-4.4 0-8 3.6-8 8v32c0 4.4 3.6 8 8 8h48c61.9 0 112-50.1 112-112V184c0-13.3 10.7-24 24-24h61.5L192 57z"
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
                  d="M128 160H70.7c-3.7 0-6.7-3-6.7-6.7 0-1.9.8-3.7 2.2-5L192 35.8l125.8 112.5c1.4 1.3 2.2 3.1 2.2 5 0 3.7-3 6.7-6.7 6.7H256c-17.7 0-32 14.3-32 32v176c0 61.9-50.1 112-112 112H48c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h64c26.5 0 48-21.5 48-48V192c0-17.7-14.3-32-32-32M206 5.3c-3.9-3.4-8.8-5.3-14-5.3s-10.1 1.9-14 5.3L44.9 124.5c-8.2 7.3-12.9 17.8-12.9 28.8 0 21.4 17.3 38.7 38.7 38.7H128v176c0 8.8-7.2 16-16 16H48c-26.5 0-48 21.5-48 48v32c0 26.5 21.5 48 48 48h64c79.5 0 144-64.5 144-144V192h57.3c21.4 0 38.7-17.3 38.7-38.7 0-11-4.7-21.5-12.9-28.8z"
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
                  d="M144 176H54.9c-3.8 0-6.9-3.1-6.9-6.9 0-1.8.7-3.5 1.9-4.7L190.1 16.8c.5-.5 1.2-.8 1.9-.8s1.4.3 1.9.8l140.2 147.6c1.2 1.3 1.9 3 1.9 4.7 0 3.8-3.1 6.9-6.9 6.9H240c-8.8 0-16 7.2-16 16v208c0 53-43 96-96 96H40c-13.3 0-24-10.7-24-24v-16c0-13.3 10.7-24 24-24h88c17.7 0 32-14.3 32-32V192c0-8.8-7.2-16-16-16M178.5 5.8 38.3 153.4c-4 4.3-6.3 9.9-6.3 15.8 0 12.6 10.2 22.8 22.9 22.8H144v208c0 8.8-7.2 16-16 16H40c-22.1 0-40 17.9-40 40v16c0 22.1 17.9 40 40 40h88c61.9 0 112-50.1 112-112V192h89.1c12.6 0 22.9-10.2 22.9-22.9 0-5.9-2.3-11.5-6.3-15.8L205.5 5.8C202 2.1 197.1 0 192 0s-10 2.1-13.5 5.8"
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
                  d="M144 192h96v208c0 61.9-50.1 112-112 112H32c-17.7 0-32-14.3-32-32v-32c0-17.7 14.3-32 32-32h96c8.8 0 16-7.2 16-16z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M345.4 151.5c6.6 7 8.4 17.2 4.6 26S337.5 192 328 192H56c-9.6 0-18.2-5.7-22-14.5s-2-19 4.6-26l136-144C179.1 2.7 185.4 0 192 0s12.9 2.7 17.4 7.5z"
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
