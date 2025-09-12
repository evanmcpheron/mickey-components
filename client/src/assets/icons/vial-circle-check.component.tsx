import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const VialCircleCheckIcon: React.FC<
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
                  d="M0 64c0-17.7 14.3-32 32-32h192c17.7 0 32 14.3 32 32s-14.3 32-32 32v170.8c-20.2 28.6-32 63.5-32 101.2 0 25.2 5.3 49.1 14.8 70.8-17.3 24.9-46.2 41.2-78.8 41.2-53 0-96-43-96-96V96C14.3 96 0 81.7 0 64m96 32v96h64V96zm128 272a144 144 0 1 1 288 0 144 144 0 1 1-288 0m211.3-43.3c-6.2-6.2-16.4-6.2-22.6 0L352 385.4l-28.7-28.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l40 40c6.2 6.2 16.4 6.2 22.6 0l72-72c6.2-6.2 6.2-16.4 0-22.6"
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
                  d="M0 56c0-13.3 10.7-24 24-24h208c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8v186.8c-20.2 28.6-32 63.5-32 101.2 0 25.2 5.3 49.1 14.8 70.8-17.3 24.9-46.2 41.2-78.8 41.2-53 0-96-43-96-96V80h-8C10.7 80 0 69.3 0 56m80 24v112h96V80zm0 160v144c0 26.5 21.5 48 48 48s48-21.5 48-48V240zm144 128a144 144 0 1 1 288 0 144 144 0 1 1-288 0m211.3-43.3c-6.2-6.2-16.4-6.2-22.6 0L352 385.4l-28.7-28.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l40 40c6.2 6.2 16.4 6.2 22.6 0l72-72c6.2-6.2 6.2-16.4 0-22.6"
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
                  d="M0 48c0-8.8 7.2-16 16-16h224c8.8 0 16 7.2 16 16s-7.2 16-16 16h-16v202.8c-20.2 28.6-32 63.5-32 101.2V224H64v160c0 35.3 28.7 64 64 64s64-28.7 64-64v-16c0 25.2 5.3 49.1 14.8 70.8-17.3 24.9-46.2 41.2-78.8 41.2-53 0-96-43-96-96V64H16C7.2 64 0 56.8 0 48m64 16v128h128V64zm304 416a112 112 0 1 0 0-224 112 112 0 1 0 0 224m0-256a144 144 0 1 1 0 288 144 144 0 1 1 0-288m67.3 100.7c6.2 6.2 6.2 16.4 0 22.6l-72 72c-6.2 6.2-16.4 6.2-22.6 0l-40-40c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l28.7 28.7 60.7-60.7c6.2-6.2 16.4-6.2 22.6 0"
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
                  d="M0 40c0-4.4 3.6-8 8-8h240c4.4 0 8 3.6 8 8s-3.6 8-8 8h-24v218.8c-6.1 8.7-11.5 18-16 27.8V208H48v176c0 44.2 35.8 80 80 80 31.4 0 58.6-18.1 71.7-44.4 2 6.6 4.4 13 7.1 19.2-17.3 24.9-46.2 41.2-78.8 41.2-53 0-96-43-96-96V48H8c-4.4 0-8-3.6-8-8m48 8v144h160V48zm320 448a128 128 0 1 0 0-256 128 128 0 1 0 0 256m0-272a144 144 0 1 1 0 288 144 144 0 1 1 0-288m69.7 98.3c3.1 3.1 3.1 8.2 0 11.3l-80 80c-3.1 3.1-8.2 3.1-11.3 0l-48-48c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0l42.3 42.4 74.3-74.3c3.1-3.1 8.2-3.1 11.3 0z"
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
                  d="M32 32C14.3 32 0 46.3 0 64s14.3 32 32 32v288c0 53 43 96 96 96 32.6 0 61.5-16.3 78.8-41.2-9.5-21.7-14.8-45.6-14.8-70.8 0-37.7 11.8-72.6 32-101.2V96c17.7 0 32-14.3 32-32s-14.3-32-32-32H32m128 64v96H96V96z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M368 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288m67.3-164.7-72 72c-6.2 6.2-16.4 6.2-22.6 0l-40-40c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l28.7 28.7 60.7-60.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6"
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
