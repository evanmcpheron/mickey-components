import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const IceSkateIcon: React.FC<
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
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M512 336c0 26.5-21.5 48-48 48H80c-26.5 0-48-21.5-48-48V132.2c0-21.4 14.2-40.3 34.8-46.2L256 32c0-17.7 14.3-32 32-32s32 14.3 32 32v64h-48c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v32h-48c-8.8 0-16 7.2-16 16s7.2 16 16 16h48l119.3 29.8C482 232.5 512 270.9 512 315zm40 72c13.3 0 24 10.7 24 24v8c0 39.8-32.2 72-72 72H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h72v-48h48v48h240v-48h48v48h72c13.3 0 24-10.7 24-24v-8c0-13.3 10.7-24 24-24"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M296 0c13.3 0 24 10.7 24 24v158l128.6 37.5c37.5 11 63.4 45.4 63.4 84.5v24c0 30.9-25.1 56-56 56H88c-30.9 0-56-25.1-56-56V136.4c0-25.2 16.8-47.3 41.1-54L272 27.5V24c0-13.3 10.7-24 24-24m-24 128V77.3L85.9 128.7c-3.5 1-5.9 4.1-5.9 7.7V328c0 4.4 3.6 8 8 8h368c4.4 0 8-3.6 8-8v-24c0-17.8-11.7-33.4-28.8-38.4L292.6 224H240c-8.8 0-16-7.2-16-16s7.2-16 16-16h32v-32h-32c-8.8 0-16-7.2-16-16s7.2-16 16-16zm280 280c13.3 0 24 10.7 24 24v8c0 39.8-32.2 72-72 72H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h72v-48h48v48h240v-48h48v48h72c13.3 0 24-10.7 24-24v-8c0-13.3 10.7-24 24-24"
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
                  d="M320 16c0-8.8-7.2-16-16-16s-16 7.2-16 16v7.4l-4.1 1.1L67.6 82.2c-21 5.6-35.6 24.6-35.6 46.4V336c0 26.5 21.5 48 48 48h384c26.5 0 48-21.5 48-48v-30c0-36.7-25-68.7-60.6-77.6L320 195.5V16M75.9 113.1 288 56.6V128h-48c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v32h-48c-8.8 0-16 7.2-16 16s7.2 16 16 16h62l141.6 35.4C465 264.7 480 283.9 480 306v30c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V128.6c0-7.2 4.9-13.6 11.9-15.5M128 432v-16H96v64H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h480c44.2 0 80-35.8 80-80 0-8.8-7.2-16-16-16s-16 7.2-16 16c0 26.5-21.5 48-48 48h-80v-64h-32v64H128z"
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
                  d="M320 8c0-4.4-3.6-8-8-8s-8 3.6-8 8v15.7l-2.1.6L73.3 86.6C48.9 93.3 32 115.4 32 140.7V344c0 22.1 17.9 40 40 40h400c22.1 0 40-17.9 40-40v-46c0-33-22.5-61.8-54.5-69.9L320 193.8V8M77.5 102.1 304 40.3V128h-56c-4.4 0-8 3.6-8 8s3.6 8 8 8h56v48h-56c-4.4 0-8 3.6-8 8s3.6 8 8 8h63l142.6 35.6c24.9 6.2 42.4 28.6 42.4 54.3v46c0 13.3-10.7 24-24 24H72c-13.3 0-24-10.7-24-24V140.7c0-18 12.1-33.8 29.5-38.6M128 424v-8h-16v80H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h496c39.8 0 72-32.2 72-72 0-4.4-3.6-8-8-8s-8 3.6-8 8c0 30.9-25.1 56-56 56h-88v-80h-16v80H128z"
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
                  d="M528 440c0 13.3-10.7 24-24 24h-72v-80h-48v80H144v-80H96v80H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h480c39.8 0 72-32.2 72-72v-8c0-13.3-10.7-24-24-24s-24 10.7-24 24z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M32 336c0 26.5 21.5 48 48 48h384c26.5 0 48-21.5 48-48v-21c0-44.1-30-82.4-72.7-93.1L320 192h-48c-8.8 0-16-7.2-16-16s7.2-16 16-16h48v-32h-48c-8.8 0-16-7.2-16-16s7.2-16 16-16h48V32c0-17.7-14.3-32-32-32s-32 14.3-32 32L66.8 86.1C46.2 91.9 32 110.8 32 132.2z"
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
