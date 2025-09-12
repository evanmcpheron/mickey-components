import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CartCircleCheckIcon: React.FC<
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
                  d="M0 24C0 10.7 10.7 0 24 0h45.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-30.9 114.8c-13.7-3.4-28.1-5.2-42.8-5.2-68.4 0-127.7 39-156.8 96H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5h123.2c-1.9 10.4-2.9 21.1-2.9 32 0 5.4.2 10.7.7 16h-121c-34.6 0-64.3-24.6-70.7-58.5l-51.6-271c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24m128 440a48 48 0 1 1 96 0 48 48 0 1 1-96 0m224-96a144 144 0 1 1 288 0 144 144 0 1 1-288 0m188.7-43.3L480 385.4l-28.7-28.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l40 40c6.2 6.2 16.4 6.2 22.6 0l72-72c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0"
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
                  d="M24 0C10.7 0 0 10.7 0 24s10.7 24 24 24h45.5c3.8 0 7.1 2.7 7.9 6.5l51.6 271c6.5 34 36.2 58.5 70.7 58.5h121c-.5-5.3-.7-10.6-.7-16 0-10.9 1-21.6 2.9-32H199.7c-11.5 0-21.4-8.2-23.6-19.5l-5.4-28.5h168.5c9.2-18 21.4-34.2 36-48H161.6L131.1 80h389.6l-30.2 112.1c1.8-.1 3.7-.1 5.5-.1 14.8 0 29.1 1.8 42.8 5.2l30.9-114.8C576.6 57 557.4 32 531.1 32h-411C111 12.8 91.6 0 69.5 0zm152 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96m464-144a144 144 0 1 0-288 0 144 144 0 1 0 288 0m-99.3-43.3c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6l-72 72c-6.2 6.2-16.4 6.2-22.6 0l-40-40c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l28.7 28.7z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M16 0C7.2 0 0 7.2 0 16s7.2 16 16 16h37.9c7.6 0 14.2 5.3 15.7 12.8l58.9 288c6.1 29.8 32.3 51.2 62.7 51.2h129.5c-.5-5.3-.7-10.6-.7-16s.2-10.7.7-16H191.2c-15.2 0-28.3-10.7-31.4-25.6L152 288h187.2c5.9-11.4 12.9-22.2 21-32H145.4L106.1 64h433.4l-32.1 128.4c10.9.7 21.5 2.4 31.7 5l31.5-125.6c5-20.2-10.2-39.8-31-39.8H99.1C92.5 13 74.4 0 53.9 0zm152 456a24 24 0 1 1 48 0 24 24 0 1 1-48 0m80 0a56 56 0 1 0-112 0 56 56 0 1 0 112 0m248-200a112 112 0 1 1 0 224 112 112 0 1 1 0-224m0 256a144 144 0 1 0 0-288 144 144 0 1 0 0 288m67.3-187.3c-6.2-6.2-16.4-6.2-22.6 0L480 385.4l-28.7-28.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l40 40c6.2 6.2 16.4 6.2 22.6 0l72-72c6.2-6.2 6.2-16.4 0-22.6"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8h37.7c11.4 0 21.3 8.1 23.5 19.4l59.4 303.4c5.1 26.3 28.2 45.2 55 45.2h137.1c-.5-5.3-.7-10.6-.7-16H183.5c-19.1 0-35.6-13.5-39.3-32.3l-9.3-47.7h204.3c2.8-5.5 5.9-10.8 9.3-16H131.8L88 48h439.7c15.5 0 26.9 14.4 23.4 29.5l-27.3 116.7c5.3.8 10.5 1.9 15.7 3.2l27.1-116.3C572.5 56 553.4 32 527.7 32H84.8C81 13.4 64.7 0 45.7 0zm136 464a32 32 0 1 1 64 0 32 32 0 1 1-64 0m80 0a48 48 0 1 0-96 0 48 48 0 1 0 96 0m272-224a128 128 0 1 1 0 256 128 128 0 1 1 0-256m0 272a144 144 0 1 0 0-288 144 144 0 1 0 0 288m69.7-189.7c-3.1-3.1-8.2-3.1-11.3 0L480 396.7l-42.3-42.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l48 48c3.1 3.1 8.2 3.1 11.3 0l80-80c3.1-3.1 3.1-8.2 0-11.3z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M24 0C10.7 0 0 10.7 0 24s10.7 24 24 24h45.5c3.8 0 7.1 2.7 7.9 6.5l51.6 271c6.5 34 36.2 58.5 70.7 58.5h121c-.5-5.3-.7-10.6-.7-16 0-10.9 1-21.6 2.9-32H199.7c-11.5 0-21.4-8.2-23.6-19.5l-5.4-28.5h168.5c29.1-57 88.4-96 156.8-96 14.8 0 29.1 1.8 42.8 5.2l30.9-114.8C576.6 57 557.4 32 531.1 32h-411C111 12.8 91.6 0 69.5 0zm152 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96"
                />
                <path
                  className="aps-icon-foreground"
                  d="M496 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288m67.3-164.7-72 72c-6.2 6.2-16.4 6.2-22.6 0l-40-40c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l28.7 28.7 60.7-60.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6"
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
