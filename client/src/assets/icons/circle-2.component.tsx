import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const Circle2Icon: React.FC<
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
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-33.3-327.3-24.2 18.4c-10.5 8-25.6 6-33.6-4.5s-6-25.6 4.5-33.6l24.2-18.4c15.8-12 35.2-18.4 55.1-18.1l3.4.1c46.5.7 83.8 38.6 83.8 85.1 0 23.5-9.7 46-26.9 62.1L244.7 336H328c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-9.8 0-18.7-6-22.3-15.2s-1.3-19.6 5.9-26.3l108.7-101.9c7.5-7 11.7-16.8 11.7-27.1 0-20.3-16.3-36.8-36.6-37.1l-3.4-.1c-9.1-.1-18 2.8-25.3 8.3z"
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
                  d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-33.3-327.3c7.2-5.5 16.1-8.4 25.3-8.3l3.4.1c20.3.3 36.6 16.8 36.6 37.1 0 10.3-4.2 20.1-11.7 27.1L167.6 342.5c-7.2 6.7-9.5 17.2-5.9 26.3S174.2 384 184 384h144c13.3 0 24-10.7 24-24s-10.7-24-24-24h-83.3l64.4-60.4c17.2-16.1 26.9-38.6 26.9-62.1 0-46.5-37.3-84.4-83.8-85.1l-3.4-.1c-19.9-.3-39.3 6.1-55.1 18.1l-24.2 18.4c-10.5 8-12.6 23.1-4.5 33.6s23.1 12.6 33.6 4.5l24.2-18.4z"
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
                  d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-39-337.6c9.8-9.2 22.7-14.2 36.1-14 28.2.4 50.9 23.4 50.9 51.6 0 13.7-5.4 26.8-15.1 36.5L180.7 356.7c-4.6 4.6-5.9 11.5-3.5 17.4s8.3 9.9 14.8 9.9h144c8.8 0 16-7.2 16-16s-7.2-16-16-16H230.6l80.9-80.9c15.7-15.7 24.5-37 24.5-59.1 0-45.7-36.7-83-82.4-83.6-21.7-.3-42.7 7.8-58.5 22.7L181 164.3c-6.4 6.1-6.7 16.2-.7 22.6s16.2 6.7 22.6.7z"
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
                  d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-36.6-354.1c11.2-9 25.2-13.8 39.6-13.6h2.3c32.6.5 58.8 27 58.8 59.6 0 15.8-6.3 31-17.5 42.2L178.3 370.3c-2.3 2.3-3 5.7-1.7 8.7s4.2 4.9 7.4 4.9h160c4.4 0 8-3.6 8-8s-3.6-8-8-8H203.3l110.6-110.4C328 243.3 336 224 336 204c0-41.3-33.2-75-74.5-75.6h-2.3c-18.1-.3-35.7 5.8-49.8 17.1L179 169.8c-3.5 2.8-4 7.8-1.2 11.2s7.8 4 11.2 1.2z"
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
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-33.3-343.3-24.2 18.4c-10.5 8-25.6 6-33.6-4.5s-6-25.6 4.5-33.6l24.2-18.4c15.8-12 35.2-18.4 55.1-18.1l3.4.1c46.5.7 83.8 38.6 83.8 85.1 0 23.5-9.7 46-26.9 62.1L244.7 320H328c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-9.8 0-18.7-6-22.3-15.2s-1.3-19.6 5.9-26.3l108.7-101.9c7.5-7 11.7-16.8 11.7-27.1 0-20.3-16.3-36.8-36.6-37.1l-3.4-.1c-9.1-.1-18 2.8-25.3 8.3z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M248 160.3c-9.1-.1-18 2.8-25.3 8.3L198.5 187c-10.5 8-25.6 6-33.6-4.5s-6-25.6 4.5-33.6l24.2-18.4c15.8-12 35.2-18.4 55.1-18.1l3.4.1c46.5.7 83.8 38.6 83.8 85.1 0 23.5-9.7 46-26.9 62.1L244.7 320H328c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-9.8 0-18.7-6-22.3-15.2s-1.3-19.6 5.9-26.3l108.7-101.9c7.5-7 11.7-16.8 11.7-27.1 0-20.3-16.3-36.8-36.5-37.1l-3.4-.1z"
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
