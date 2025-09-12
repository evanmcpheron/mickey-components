import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BallPileIcon: React.FC<
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
                  d="M320 160a80 80 0 1 0 0-160 80 80 0 1 0 0 160M208 328a80 80 0 1 0 0-160 80 80 0 1 0 0 160m-16 104a80 80 0 1 0-160 0 80 80 0 1 0 160 0m128 80a80 80 0 1 0 0-160 80 80 0 1 0 0 160m288-80a80 80 0 1 0-160 0 80 80 0 1 0 160 0M432 328a80 80 0 1 0 0-160 80 80 0 1 0 0 160"
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
                  d="M368 96a48 48 0 1 0-96 0 48 48 0 1 0 96 0m48 0c0 26.7-10.9 50.9-28.6 68.3 9-2.8 18.6-4.3 28.6-4.3 53 0 96 43 96 96 0 26.7-10.9 50.9-28.6 68.3 9-2.8 18.6-4.3 28.6-4.3 53 0 96 43 96 96s-43 96-96 96-96-43-96-96c0-26.7 10.9-50.9 28.6-68.3-9 2.8-18.6 4.3-28.6 4.3s-19.5-1.5-28.6-4.3c17.7 17.4 28.6 41.6 28.6 68.3 0 53-43 96-96 96s-96-43-96-96c0-26.7 10.9-50.9 28.6-68.3-9 2.8-18.6 4.3-28.6 4.3s-19.5-1.5-28.6-4.3c17.7 17.4 28.6 41.6 28.6 68.3 0 53-43 96-96 96s-96-43-96-96 43-96 96-96c9.9 0 19.5 1.5 28.6 4.3-17.7-17.4-28.6-41.6-28.6-68.3 0-53 43-96 96-96 9.9 0 19.5 1.5 28.6 4.3C234.9 146.9 224 122.7 224 96c0-53 43-96 96-96s96 43 96 96m-96 96c-9.9 0-19.5-1.5-28.6-4.3 17.7 17.4 28.6 41.6 28.6 68.3 0-26.7 10.9-50.9 28.6-68.3-9 2.8-18.6 4.3-28.6 4.3m0 64c0 26.7-10.9 50.9-28.6 68.3 9-2.8 18.6-4.3 28.6-4.3s19.5 1.5 28.6 4.3C330.9 306.9 320 282.7 320 256M176 416a48 48 0 1 0-96 0 48 48 0 1 0 96 0m48-112a48 48 0 1 0 0-96 48 48 0 1 0 0 96m144 112a48 48 0 1 0-96 0 48 48 0 1 0 96 0m48-112a48 48 0 1 0 0-96 48 48 0 1 0 0 96m144 112a48 48 0 1 0-96 0 48 48 0 1 0 96 0"
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
                  d="M352 96a64 64 0 1 0-128 0 64 64 0 1 0 128 0m-35.4 91.7c-9 2.8-18.6 4.3-28.6 4.3s-19.5-1.5-28.6-4.3c17.7 17.4 28.6 41.6 28.6 68.3s-10.9 50.9-28.6 68.3c9-2.8 18.6-4.3 28.6-4.3s19.5 1.5 28.6 4.3C298.9 306.9 288 282.7 288 256s10.9-50.9 28.6-68.3M384 352c-9.9 0-19.5-1.5-28.6-4.3 17.7 17.4 28.6 41.6 28.6 68.3 0 53-43 96-96 96s-96-43-96-96c0-26.7 10.9-50.9 28.6-68.3-9 2.8-18.6 4.3-28.6 4.3s-19.5-1.5-28.6-4.3c17.7 17.4 28.6 41.6 28.6 68.3 0 53-43 96-96 96S0 469 0 416s43-96 96-96c9.9 0 19.5 1.5 28.6 4.3C106.9 306.9 96 282.7 96 256c0-53 43-96 96-96 9.9 0 19.5 1.5 28.6 4.3C202.9 146.9 192 122.7 192 96c0-53 43-96 96-96s96 43 96 96c0 26.7-10.9 50.9-28.6 68.3 9-2.8 18.6-4.3 28.6-4.3 53 0 96 43 96 96 0 26.7-10.9 50.9-28.6 68.3 9-2.8 18.6-4.3 28.6-4.3 53 0 96 43 96 96s-43 96-96 96-96-43-96-96c0-26.7 10.9-50.9 28.6-68.3-9 2.8-18.6 4.3-28.6 4.3m-128-96a64 64 0 1 0-128 0 64 64 0 1 0 128 0m-96 160a64 64 0 1 0-128 0 64 64 0 1 0 128 0m224-96a64 64 0 1 0 0-128 64 64 0 1 0 0 128m-96 160a64 64 0 1 0 0-128 64 64 0 1 0 0 128m256-64a64 64 0 1 0-128 0 64 64 0 1 0 128 0"
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
                  d="M368 96a80 80 0 1 0-160 0 80 80 0 1 0 160 0m-51.4 91.7c-9 2.8-18.6 4.3-28.6 4.3s-19.5-1.5-28.6-4.3c17.7 17.4 28.6 41.6 28.6 68.3s-10.9 50.9-28.6 68.3c9-2.8 18.6-4.3 28.6-4.3s19.5 1.5 28.6 4.3C298.9 306.9 288 282.7 288 256s10.9-50.9 28.6-68.3M384 352c-9.9 0-19.5-1.5-28.6-4.3 17.7 17.4 28.6 41.6 28.6 68.3 0 53-43 96-96 96s-96-43-96-96c0-26.7 10.9-50.9 28.6-68.3-9 2.8-18.6 4.3-28.6 4.3s-19.5-1.5-28.6-4.3c17.7 17.4 28.6 41.6 28.6 68.3 0 53-43 96-96 96S0 469 0 416s43-96 96-96c9.9 0 19.5 1.5 28.6 4.3C106.9 306.9 96 282.7 96 256c0-53 43-96 96-96 9.9 0 19.5 1.5 28.6 4.3C202.9 146.9 192 122.7 192 96c0-53 43-96 96-96s96 43 96 96c0 26.7-10.9 50.9-28.6 68.3 9-2.8 18.6-4.3 28.6-4.3 53 0 96 43 96 96 0 26.7-10.9 50.9-28.6 68.3 9-2.8 18.6-4.3 28.6-4.3 53 0 96 43 96 96s-43 96-96 96-96-43-96-96c0-26.7 10.9-50.9 28.6-68.3-9 2.8-18.6 4.3-28.6 4.3m-112-96a80 80 0 1 0-160 0 80 80 0 1 0 160 0m-96 160a80 80 0 1 0-160 0 80 80 0 1 0 160 0m208-80a80 80 0 1 0 0-160 80 80 0 1 0 0 160m-96 160a80 80 0 1 0 0-160 80 80 0 1 0 0 160m272-80a80 80 0 1 0-160 0 80 80 0 1 0 160 0"
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
                  d="M288 160a80 80 0 1 0 0-160 80 80 0 1 0 0 160M80 512a80 80 0 1 0 0-160 80 80 0 1 0 0 160m288-80a80 80 0 1 0-160 0 80 80 0 1 0 160 0m128 80a80 80 0 1 0 0-160 80 80 0 1 0 0 160"
                />
                <path
                  className="aps-icon-foreground"
                  d="M176 328a80 80 0 1 0 0-160 80 80 0 1 0 0 160m224 0a80 80 0 1 0 0-160 80 80 0 1 0 0 160"
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
