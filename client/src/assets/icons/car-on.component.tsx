import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CarOnIcon: React.FC<
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
                  d="M280 24c0-13.3-10.7-24-24-24s-24 10.7-24 24v80c0 13.3 10.7 24 24 24s24-10.7 24-24zm-94.2 200h140.4c6.8 0 12.8 4.3 15.1 10.6l19 53.4H151.7l19.1-53.4c2.3-6.4 8.3-10.6 15.1-10.6zm-75.3-10.9-28.3 79.3C62.1 300.9 48 320.8 48 344v136c0 17.7 14.3 32 32 32h16c17.7 0 32-14.3 32-32v-32h256v32c0 17.7 14.3 32 32 32h16c17.7 0 32-14.3 32-32V344c0-23.2-14.1-43.1-34.2-51.6l-28.3-79.3C390.1 181.3 360 160 326.2 160H185.8c-33.8 0-64 21.3-75.3 53.1M128 344a24 24 0 1 1 0 48 24 24 0 1 1 0-48m232 24a24 24 0 1 1 48 0 24 24 0 1 1-48 0M39 39c-9.4 9.4-9.4 24.6 0 33.9l48 48c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L73 39c-9.4-9.4-24.6-9.4-33.9 0zm400 0-48 48c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l48-48c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0"
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
                  d="M280 24c0-13.3-10.7-24-24-24s-24 10.7-24 24v80c0 13.3 10.7 24 24 24s24-10.7 24-24zm-94.2 184h140.4c10.1 0 19.2 6.4 22.6 15.9l17.1 48.1H146.1l17.2-48.1c3.4-9.6 12.5-15.9 22.6-15.9zm-96.4 79.9c-.2.5-.3.9-.5 1.4C64.2 306.7 48 335.5 48 368v120c0 13.3 10.7 24 24 24s24-10.7 24-24v-40h320v40c0 13.3 10.7 24 24 24s24-10.7 24-24V368c0-32.5-16.2-61.3-40.9-78.7-.1-.5-.3-.9-.5-1.4L394 207.8c-10.2-28.7-37.4-47.8-67.8-47.8H185.8c-30.4 0-57.6 19.1-67.8 47.8zM416 368v32H96v-32c0-26.5 21.5-48 48-48h224c26.5 0 48 21.5 48 48m-256 16a24 24 0 1 0 0-48 24 24 0 1 0 0 48m216-24a24 24 0 1 0-48 0 24 24 0 1 0 48 0M39 39c-9.4 9.4-9.4 24.6 0 33.9l48 48c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L73 39c-9.4-9.4-24.6-9.4-33.9 0zm400 0-48 48c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l48-48c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0"
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
                  d="M272 24c0-8.8-7.2-16-16-16s-16 7.2-16 16v80c0 8.8 7.2 16 16 16s16-7.2 16-16zm-83.8 184h135.6c14.3 0 26.8 9.5 30.8 23.2l16.2 56.8H141.2l16.2-56.8c3.9-13.7 16.5-23.2 30.8-23.2m-61.5 14.4L105 298.1C80.6 311.8 64 338 64 368v128c0 8.8 7.2 16 16 16s16-7.2 16-16v-32h320v32c0 8.8 7.2 16 16 16s16-7.2 16-16V368c0-30-16.6-56.2-41-69.9l-21.6-75.7c-7.8-27.5-33-46.4-61.5-46.4H188.2c-28.6 0-53.7 18.9-61.5 46.4M416 416v16H96v-64c0-26.5 21.5-48 48-48h224c26.5 0 48 21.5 48 48zm-272-16a24 24 0 1 0 0-48 24 24 0 1 0 0 48m248-24a24 24 0 1 0-48 0 24 24 0 1 0 48 0M44.7 44.7c-6.2 6.2-6.2 16.4 0 22.6l48 48c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-48-48c-6.2-6.2-16.4-6.2-22.6 0m400 0-48 48c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l48-48c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0"
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
                  d="M264 8c0-4.4-3.6-8-8-8s-8 3.6-8 8v112c0 4.4 3.6 8 8 8s8-3.6 8-8zm-75.8 184h135.6c17.9 0 33.6 11.8 38.5 29l19.5 68.2c-4.5-.8-9-1.2-13.7-1.2H144c-4.7 0-9.3.4-13.7 1.2l19.4-68.2c4.9-17.2 20.6-29 38.5-29m-75.9 101.8-.2.8C83.8 307 64 335.2 64 368v112c0 17.7 14.3 32 32 32h16c17.7 0 32-14.3 32-32v-32h224v32c0 17.7 14.3 32 32 32h16c17.7 0 32-14.3 32-32V368c0-32.8-19.8-61-48.1-73.4l-.2-.8-22.1-77.2c-6.9-24-28.8-40.6-53.8-40.6H188.2c-25 0-47 16.6-53.8 40.6zM432 432H80v-64c0-35.3 28.7-64 64-64h224c35.3 0 64 28.7 64 64zm-48 16h48v32c0 8.8-7.2 16-16 16h-16c-8.8 0-16-7.2-16-16zm-304 0h48v32c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16zm80-80a16 16 0 1 1-32 0 16 16 0 1 1 32 0m-16-32a32 32 0 1 0 0 64 32 32 0 1 0 0-64m224 48a16 16 0 1 1 0-32 16 16 0 1 1 0 32m-32-16a32 32 0 1 0 64 0 32 32 0 1 0-64 0M34.3 34.3c-3.1 3.1-3.1 8.2 0 11.3l80 80c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-80-80c-3.1-3.1-8.2-3.1-11.3 0m432 0-80 80c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l80-80c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0"
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
                  d="M256 0c13.3 0 24 10.7 24 24v80c0 13.3-10.7 24-24 24s-24-10.7-24-24V24c0-13.3 10.7-24 24-24M39 39c9.4-9.4 24.6-9.4 33.9 0l48 48c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L39 73c-9.4-9.4-9.4-24.6 0-33.9zm400 0c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M170.8 234.6 151.7 288h208.6l-19.1-53.4c-2.3-6.4-8.3-10.6-15.1-10.6H185.8c-6.8 0-12.8 4.3-15.1 10.6zm-88.6 57.8 28.3-79.3c11.4-31.8 41.5-53.1 75.3-53.1h140.4c33.8 0 64 21.3 75.3 53.1l28.3 79.3c20.1 8.5 34.2 28.4 34.2 51.6v136c0 17.7-14.3 32-32 32h-16c-17.7 0-32-14.3-32-32v-32H128v32c0 17.7-14.3 32-32 32H80c-17.7 0-32-14.3-32-32V344c0-23.2 14.1-43.1 34.2-51.6M152 368a24 24 0 1 0-48 0 24 24 0 1 0 48 0m232 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48"
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
