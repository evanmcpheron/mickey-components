import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const GaugeSimpleMinIcon: React.FC<
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
                  d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m320 96c0-35.3-28.7-64-64-64-14.1 0-27.2 4.6-37.8 12.4l-117.6-72.8c-11.3-7-26.1-3.5-33 7.8s-3.5 26.1 7.8 33l117.5 72.8q-.9 5.25-.9 10.8c0 35.3 28.7 64 64 64s64-28.7 64-64"
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
                  d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512m56-160c0-30.9-25.1-56-56-56-10.3 0-19.9 2.8-28.2 7.6l-110.2-75.4c-10.9-7.5-25.9-4.7-33.4 6.3s-4.7 25.9 6.3 33.4l110.2 75.4c-.4 2.9-.7 5.8-.7 8.8 0 30.9 25.1 56 56 56s56-25.1 56-56z"
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
                  d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m0-192a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0 96c35.3 0 64-28.7 64-64s-28.7-64-64-64c-17.5 0-33.4 7-44.9 18.4l-106.9-64.1c-7.6-4.5-17.4-2.1-22 5.5s-2.1 17.4 5.5 22l106.8 64.1c-1.7 5.8-2.6 11.9-2.6 18.2 0 35.3 28.7 64 64 64z"
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
                  d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m0-208a48 48 0 1 1 0 96 48 48 0 1 1 0-96m0 112c35.3 0 64-28.7 64-64s-28.7-64-64-64c-18.8 0-35.7 8.1-47.4 21l-108-75.6c-3.6-2.5-8.6-1.7-11.1 2s-1.7 8.6 2 11.1l108 75.6c-4.7 8.9-7.4 19.1-7.4 29.9 0 35.3 28.7 64 64 64z"
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
                  d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m320 96c0-35.3-28.7-64-64-64-14.1 0-27.2 4.6-37.8 12.4l-117.6-72.8c-11.3-7-26.1-3.5-33 7.8s-3.5 26.1 7.8 33l117.5 72.8q-.9 5.25-.9 10.8c0 35.3 28.7 64 64 64s64-28.7 64-64"
                />
                <path
                  className="aps-icon-foreground"
                  d="M100.6 227.6c-11.3-7-26.1-3.5-33 7.8s-3.5 26.1 7.8 33l117.5 72.8q-.9 5.25-.9 10.8c0 35.3 28.7 64 64 64s64-28.7 64-64-28.7-64-64-64c-14.1 0-27.2 4.6-37.8 12.4z"
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
