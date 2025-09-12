import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const Icon5: React.FC<
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
                  d="M32.5 58.3C35.3 43.1 48.5 32 64 32h192c17.7 0 32 14.3 32 32s-14.3 32-32 32H90.7L70.3 208H184c75.1 0 136 60.9 136 136s-60.9 136-136 136h-83.5c-39.4 0-75.4-22.3-93-57.5l-4.1-8.2c-7.9-15.8-1.5-35 14.3-42.9s35-1.5 42.9 14.3l4.1 8.2c6.8 13.6 20.6 22.1 35.8 22.1H184c39.8 0 72-32.2 72-72s-32.2-72-72-72H32c-9.5 0-18.5-4.2-24.6-11.5s-8.6-16.9-6.9-26.2z"
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
                  d="M32.4 51.9C34.4 40.4 44.3 32 56 32h208c13.3 0 24 10.7 24 24s-10.7 24-24 24H76.2L52.5 216H188c72.9 0 132 59.1 132 132s-59.1 132-132 132H92.5c-36.4 0-69.6-20.5-85.9-53.1l-4.1-8.2c-5.9-11.9-1.1-26.3 10.7-32.2s26.3-1.1 32.2 10.7l4.1 8.2c8.2 16.3 24.8 26.6 43 26.6H188c46.4 0 84-37.6 84-84s-37.6-84-84-84H24c-7.1 0-13.8-3.1-18.4-8.6S-.9 242.9.4 235.9z"
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
                  d="M48.5 44.1C50.3 37 56.7 32 64 32h208c8.8 0 16 7.2 16 16s-7.2 16-16 16H76.5l-40 160H192c70.7 0 128 57.3 128 128s-57.3 128-128 128H84.5c-33.3 0-63.8-18.8-78.7-48.6l-4.1-8.2c-4-7.9-.7-17.5 7.2-21.5s17.5-.7 21.5 7.2l4.1 8.2c9.5 19 28.9 31 50.1 31H192c53 0 96-43 96-96s-43-96-96-96H16c-4.9 0-9.6-2.3-12.6-6.2S-.7 241 .5 236.2l48-192z"
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
                  d="M48.2 38.1c.9-3.6 4.1-6.1 7.8-6.1h224c4.4 0 8 3.6 8 8s-3.6 8-8 8H62.2l-44 176H192c70.7 0 128 57.3 128 128s-57.3 128-128 128H95.7c-37.3 0-71.8-20-90.3-52.4L1.1 420c-2.2-3.8-.9-8.7 3-10.9s8.7-.9 10.9 3l4.4 7.6C35 447.1 64.1 464 95.7 464H192c61.9 0 112-50.1 112-112s-50.1-112-112-112H8c-2.5 0-4.8-1.1-6.3-3.1s-2.1-4.5-1.5-6.8z"
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
                  d="M32.5 58.3C35.3 43.1 48.5 32 64 32h192c17.7 0 32 14.3 32 32s-14.3 32-32 32H90.7L70.3 208H184c75.1 0 136 60.9 136 136s-60.9 136-136 136h-83.5c-39.4 0-75.4-22.3-93-57.5l-4.1-8.2c-7.9-15.8-1.5-35 14.3-42.9s35-1.5 42.9 14.3l4.1 8.2c6.8 13.6 20.6 22.1 35.8 22.1H184c39.8 0 72-32.2 72-72s-32.2-72-72-72H32c-9.5 0-18.5-4.2-24.6-11.5s-8.6-16.9-6.9-26.2z"
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
