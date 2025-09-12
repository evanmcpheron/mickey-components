import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BoxTissueIcon: React.FC<
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
                  d="M92.5 0H208c40 0 52 24 64 48s24 48 64 48h85.2c14.8 0 26.8 12 26.8 26.8 0 3.4-.7 6.8-1.9 10L409.6 224 384 288H128l-16-64L64.9 35.4q-.9-3.45-.9-6.9C64 12.8 76.8 0 92.5 0M79 224l16 64H80c-8.8 0-16 7.2-16 16s7.2 16 16 16h352c8.8 0 16-7.2 16-16s-7.2-16-16-16h-13.5l25.6-64H464c26.5 0 48 21.5 48 48v112H0V272c0-26.5 21.5-48 48-48zM0 416h512v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48z"
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
                  d="M208 48h-90.5l57.1 228.4 2.9 11.6h154.8l7.1-17.8L389.9 144H336c-31.1 0-56.2-9.9-75.5-28.2-15.8-15-25.1-33.7-30.5-44.6l-.9-1.8c-6.8-13.4-9.3-17.4-11.6-19.6-.5-.5-.8-.6-1.3-.8-.7-.3-3-1-8.2-1m176 240h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H120c-13.3 0-24-10.7-24-24s10.7-24 24-24h8l-8-32-12-48L64.9 35.4q-.9-3.45-.9-6.9C64 12.8 76.8 0 92.5 0H208c40 0 52 24 64 48s24 48 64 48h85.2c14.8 0 26.8 12 26.8 26.8 0 3.4-.7 6.8-1.9 10L416 208l-19.2 48zM75 208l12 48H48v112h416V256h-32.7l19.2-48H464c26.5 0 48 21.5 48 48v208c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V256c0-26.5 21.5-48 48-48zM48 416v48h416v-48z"
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
                  d="M208 32c12.6 0 17.5 3.4 20.5 6.2 4.7 4.4 8.4 11.1 14.9 24.1l.7 1.5c5.5 11 13.7 27.5 27.4 40.4 16 15.2 37.1 23.8 64.5 23.8h77.5l-70.4 176H165L97 32zm-88 224 12 48h-20c-8.8 0-16 7.2-16 16s7.2 16 16 16h288c8.8 0 16-7.2 16-16s-7.2-16-16-16h-22.4l19.2-48 12.8-32 36.5-91.2c1.3-3.2 1.9-6.6 1.9-10C448 108 436 96 421.2 96H336c-40 0-52-24-64-48S248 0 208 0H92.5C76.8 0 64 12.8 64 28.5c0 2.3.3 4.7.9 6.9L112 224zm-33 0-8-32H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48h-19.9l-12.8 32H464c8.8 0 16 7.2 16 16v112H32V272c0-8.8 7.2-16 16-16zM32 416h448v48c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16z"
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
                  d="M92.5 16H208c16.3 0 25.3 4.7 31.5 10.6 7.1 6.7 11.9 16 18.2 28.5l.5 1c5.7 11.3 12.8 25.5 24.3 36.5 12.8 12.1 29.8 19.4 53.5 19.4h85.2c6 0 10.8 4.8 10.8 10.8 0 1.4-.3 2.7-.8 4l-62.1 155.3-8.7 21.9H148.5l-5-19.9L80.4 31.5c-.2-1-.4-2-.4-3C80 21.6 85.6 16 92.5 16M408 304h-30.4l6.4-16 62.1-155.2c1.3-3.2 1.9-6.6 1.9-10C448 108 436 96 421.2 96H336c-40 0-52-24-64-48S248 0 208 0H92.5C76.8 0 64 12.8 64 28.5c0 2.3.3 4.7.9 6.9L128 288l4 16h-28c-4.4 0-8 3.6-8 8s3.6 8 8 8h304c4.4 0 8-3.6 8-8s-3.6-8-8-8m29.7-64H464c17.7 0 32 14.3 32 32v112H16V272c0-17.7 14.3-32 32-32h35l-4-16H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48h-19.9zM16 400h480v64c0 17.7-14.3 32-32 32H48c-17.7 0-32-14.3-32-32z"
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
                  d="M113.8 224H48c-26.5 0-48 21.5-48 48v112h512V272c0-26.5-21.5-48-48-48h-58.7L384 288h48c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h48z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M103.9 0H208c40 0 52 24 64 48s24 48 64 48h67.6c21.8 0 37.3 21.4 30.4 42.1L373.3 320H135.1L72.7 38.9C68.2 19 83.4 0 103.9 0M512 384v80c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48v-80z"
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
