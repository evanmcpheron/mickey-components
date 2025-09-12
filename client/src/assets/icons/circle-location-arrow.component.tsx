import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CircleLocationArrowIcon: React.FC<
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
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m102.2-329.3-84 196c-3.5 8.1-11.4 13.3-20.2 13.3-1.4 0-2.9-.1-4.4-.4-10.2-2.1-17.6-11.2-17.6-21.6v-90h-90c-10.4 0-19.5-7.4-21.5-17.6-2.1-10.2 3.3-20.5 12.9-24.6l196-84c8.5-3.5 18-1.7 24.2 4.7 6.4 6.3 8.2 15.9 4.7 24.2z"
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
                  d="M464 256a208 208 0 1 0-416 0 208 208 0 1 0 416 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m358.2-73.3-84 196c-3.5 8.1-11.4 13.3-20.2 13.3-1.4 0-2.9-.1-4.4-.4-10.2-2.1-17.6-11.2-17.6-21.6v-90h-90c-10.4 0-19.5-7.4-21.5-17.6-2.1-10.2 3.3-20.5 12.9-24.6l196-84c8.5-3.5 18-1.7 24.2 4.7 6.4 6.3 8.2 15.9 4.7 24.2z"
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
                  d="M480 256a224 224 0 1 0-448 0 224 224 0 1 0 448 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m127.7 27c-11.7 0-21.9-8.3-24.2-19.8-2.4-11.4 3.7-23.1 14.5-27.7L338.5 141c9.5-3.9 20.2-1.9 27.3 5.3 7.2 7.1 9.2 17.8 5.2 27.2L276.5 394c-3.9 9.1-12.9 15-22.8 15-1.6 0-3.3-.1-4.9-.5-11.5-2.3-19.8-12.5-19.8-24.3V283H127.7m35.3-32h66c17.7 0 32 14.3 32 32v66l73.5-171.4L163.1 251z"
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
                  d="M496 256a240 240 0 1 0-480 0 240 240 0 1 0 480 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m127.7 27c-11.7 0-21.9-8.3-24.2-19.8-2.4-11.4 3.7-23.1 14.5-27.7L338.5 141c9.5-3.9 20.2-1.9 27.3 5.3 7.2 7.1 9.2 17.8 5.2 27.2L276.5 394c-3.9 9.1-12.9 15-22.8 15-1.6 0-3.3-.1-4.9-.5-11.5-2.3-19.8-12.5-19.8-24.3V283H127.7m-3.4-32.8c-3.8 1.6-5.9 5.8-5.1 9.8.8 4.1 4.5 7 8.6 7H229c8.8 0 16 7.2 16 16v101.2c0 4.1 2.9 7.7 6.9 8.6.5.1 1.1.2 1.8.2 3.5 0 6.7-2.1 8.1-5.3l94.5-220.5c1.4-3.4.7-7.1-1.8-9.6l-.1-.1c-2.3-2.4-6-3.3-9.7-1.8z"
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
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m102.2-329.3-84 196c-3.5 8.1-11.4 13.3-20.2 13.3-1.4 0-2.9-.1-4.4-.4-10.2-2.1-17.6-11.2-17.6-21.6v-90h-90c-10.4 0-19.5-7.4-21.5-17.6-2.1-10.2 3.3-20.5 12.9-24.6l196-84c8.5-3.5 18-1.7 24.2 4.7 6.4 6.3 8.2 15.9 4.7 24.2z"
                />
                <path
                  className="aps-icon-foreground"
                  d="m274.2 378.7 84-196c3.6-8.3 1.7-17.9-4.7-24.2-6.3-6.3-15.8-8.2-24.2-4.7l-196 84c-9.6 4.1-15 14.5-12.9 24.6 2.1 10.2 11.1 17.6 21.5 17.6h90v90c0 10.4 7.4 19.5 17.6 21.6 1.5.3 2.9.4 4.4.4 8.8 0 16.7-5.2 20.2-13.3z"
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
