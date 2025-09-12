import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BabyCarriageIcon: React.FC<
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
                  d="M256 192H.1C2.7 117.9 41.3 52.9 99 14.1c13.3-8.9 30.8-4.3 39.9 8.8zm128-32c0-35.3 28.7-64 64-64h32c17.7 0 32 14.3 32 32s-14.3 32-32 32h-32v64c0 25.2-5.8 50.2-17 73.5s-27.8 44.5-48.6 62.3-45.5 32-72.7 41.6S253.4 416 224 416s-58.5-5-85.7-14.6-51.9-23.8-72.7-41.6-37.3-39-48.6-62.3S0 249.2 0 224h384zM80 416a48 48 0 1 1 0 96 48 48 0 1 1 0-96m240 48a48 48 0 1 1 96 0 48 48 0 1 1-96 0"
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
                  d="M138.9 22.9 256 192h144v-40c0-30.9 25.1-56 56-56h32c13.3 0 24 10.7 24 24s-10.7 24-24 24h-32c-4.4 0-8 3.6-8 8v72c0 28-6.1 55.6-17.7 81.1s-28.6 48.4-49.5 67.5c-21 19.1-45.6 34-72.5 44.1S252.8 432 224 432s-57.4-5.2-84.3-15.3-51.5-25-72.5-44.1-37.9-42-49.5-67.5S0 252 0 224v-32h.1C2.7 117.9 41.3 52.9 99 14.1c13.3-8.9 30.8-4.3 39.9 8.8M80 416a48 48 0 1 1 0 96 48 48 0 1 1 0-96m240 48a48 48 0 1 1 96 0 48 48 0 1 1-96 0M56.1 272c1.5 4.5 3.3 8.9 5.3 13.2 8.8 19.4 21.8 37 38.2 51.9s35.7 26.6 57.1 34.7 44.2 12.2 67.4 12.2 46-4.1 67.4-12.2 40.8-19.8 57.1-34.7 29.3-32.5 38.2-51.9c2-4.3 3.7-8.8 5.3-13.2 3.6-10.4 6-21.1 7.2-32H48.9c1.2 10.9 3.6 21.6 7.2 32"
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
                  d="M.7 224c-.2-2.9-.4-5.7-.5-8.6-.2-2.5-.2-4.9-.2-7.4v-16h.1C2.7 117.9 41.3 52.9 99 14.1c13.3-8.9 30.8-4.3 39.9 8.8L256 192h160v-48c0-26.5 21.5-48 48-48h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32c-8.8 0-16 7.2-16 16v72h-.2c-.1 2.7-.3 5.3-.5 8-1.8 22.2-7.5 44-16.8 64.5-11.5 25.4-28.2 48.3-49.2 67.5-20.9 19.2-45.6 34.2-72.6 44.5S253 416 224 416s-57.9-5.2-84.8-15.5-51.6-25.3-72.6-44.5c-20.9-19.1-37.7-42-49.1-67.5C8.2 268 2.5 246.2.7 224m216.4-32L113.7 42.8c-47.4 33.4-79 87.6-81.5 149.2zM32.8 224c1.8 17.6 6.4 34.9 13.8 51.4 9.6 21.4 23.8 40.8 41.6 57.1s39 29.3 62.3 38.2 48.3 13.4 73.5 13.4 50.2-4.6 73.5-13.4 44.5-21.8 62.3-38.2 32-35.7 41.6-57.1c7.4-16.4 12.1-33.7 13.8-51.4H32.8M80 480a16 16 0 1 0 0-32 16 16 0 1 0 0 32m0-64a48 48 0 1 1 0 96 48 48 0 1 1 0-96m304 48a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-64 0a48 48 0 1 1 96 0 48 48 0 1 1-96 0"
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
                  d="M122.1 24c-2.4-3.4-6.5-4.2-9.5-2.4-51.7 30.7-88.1 84.4-95.3 147-.5 4.2-3.9 7.4-8.1 7.4-4.7 0-8.3-4-7.8-8.6C8.9 99.5 48.4 41.2 104.5 7.8c10.8-6.4 24.1-2.7 30.8 7.1l102.9 148.5c3.7 5.3-.1 12.6-6.6 12.6-2.6 0-5.1-1.3-6.6-3.4zM80 496a32 32 0 1 0 0-64 32 32 0 1 0 0 64m0-80a48 48 0 1 1 0 96 48 48 0 1 1 0-96m288 80a32 32 0 1 0 0-64 32 32 0 1 0 0 64m0-80a48 48 0 1 1 0 96 48 48 0 1 1 0-96m96-288c-8.8 0-16 7.2-16 16v64c0 5.3-.2 10.7-.7 16-4.2 49-27.4 96.2-64.9 131.1C340.8 393.7 282.8 416 224 416s-116.8-22.3-158.4-60.9C28.1 320.2 4.9 273 .7 224c-.8-8.8 6.5-16 15.3-16h416v-64c0-17.7 14.3-32 32-32h40c4.4 0 8 3.6 8 8s-3.6 8-8 8zM76.5 343.4C115 379.1 169 400 224 400s109-20.9 147.5-56.6c34.4-31.9 55.6-74.9 59.8-119.4H16.7c4.1 44.5 25.4 87.5 59.7 119.4z"
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
                  d="M256 192H.1C2.7 117.9 41.3 52.9 99 14.1c13.3-8.9 30.8-4.3 39.9 8.8zM80 416a48 48 0 1 1 0 96 48 48 0 1 1 0-96m240 48a48 48 0 1 1 96 0 48 48 0 1 1-96 0"
                />
                <path
                  className="aps-icon-foreground"
                  d="M448 96c-35.3 0-64 28.7-64 64v64H0c0 25.2 5.8 50.2 17.1 73.5s27.8 44.5 48.6 62.3 45.5 32 72.7 41.6S194.6 416 224 416s58.5-5 85.7-14.6 51.9-23.8 72.7-41.6 37.3-39 48.6-62.3 17-48.3 17-73.5v-64h32c17.7 0 32-14.3 32-32s-14.3-32-32-32z"
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
