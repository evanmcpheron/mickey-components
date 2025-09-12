import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const Icon6: React.FC<
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
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M232.4 84.7c11.4-13.5 9.7-33.7-3.8-45.1s-33.7-9.7-45.1 3.8L38.6 214.7C14.7 242.9 1.1 278.4.1 315.2c0 1.4-.1 2.9-.1 4.3v.5c0 88.4 71.6 160 160 160s160-71.6 160-160c0-85.5-67.1-155.4-151.5-159.8l63.9-75.6zM256 320a96 96 0 1 1-192 0 96 96 0 1 1 192 0"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M272 320c0-61.9-50.1-112-112-112-32.3 0-61.5 13.7-81.9 35.6l-5.1 6.3c-16.2 19.8-25 44.6-25 70.1 0 61.9 50.1 112 112 112s112-50.1 112-112M145.7 160.6c4.7-.4 9.5-.6 14.3-.6 88.4 0 160 71.6 160 160s-71.6 160-160 160S0 408.4 0 320c0-41.5 15.8-79.4 41.8-107.8L181.4 40.8c8.4-10.3 23.5-11.8 33.8-3.4s11.8 23.5 3.4 33.8l-72.9 89.5z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M288 320c0-70.7-57.3-128-128-128-69.7 0-126.3 55.7-128 124.9v3.1c0 70.7 57.3 128 128 128s128-57.3 128-128M126.8 163.5c10.7-2.3 21.8-3.5 33.2-3.5 88.4 0 160 71.6 160 160s-71.6 160-160 160S0 408.4 0 320c0-2 0-3.9.1-5.9 1.4-37.9 15.9-74.2 41.1-102.6L196 37.4c5.9-6.6 16-7.2 22.6-1.3s7.2 16 1.3 22.6z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M16 320a144 144 0 1 1 288 0 144 144 0 1 1-288 0m84.6-148.6L221.8 45.5c3.1-3.2 3-8.2-.2-11.3s-8.2-3-11.3.2l-163.7 170C16.7 235.4 0 276.9 0 320c0 88.4 71.6 160 160 160s160-71.6 160-160-71.6-160-160-160c-21 0-41.1 4-59.4 11.4"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M232.4 84.7c11.4-13.5 9.7-33.7-3.8-45.1s-33.7-9.7-45.1 3.8L38.6 214.7C14.7 242.9 1.1 278.4.1 315.2c0 1.4-.1 2.9-.1 4.3v.5c0 88.4 71.6 160 160 160s160-71.6 160-160c0-85.5-67.1-155.4-151.5-159.8l63.9-75.6zM256 320a96 96 0 1 1-192 0 96 96 0 1 1 192 0"
                />
                <path className="aps-icon-foreground" d="" />
              </svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
