import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const JugIcon: React.FC<
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
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M160 0h128c17.7 0 32 14.3 32 32s-14.3 32-32 32H160c-17.7 0-32-14.3-32-32s14.3-32 32-32m240 168c0-13.3-10.7-24-24-24-10.3 0-19.1 6.5-22.5 15.6l25.1 32.2c12.1-1.3 21.4-11.5 21.4-23.9zm-89.3-63.3 11.8 15.1C335.7 105.2 354.8 96 376 96c39.8 0 72 32.2 72 72 0 29.2-17.4 54.3-42.3 65.6 6.8 15.8 10.3 32.9 10.3 50.3V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V283.9c0-28.5 9.5-56.1 27-78.6l78.3-100.7c2.1-2.6 3.7-5.6 4.8-8.7h163.8q1.65 4.65 4.8 8.7zM128 288c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h192c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M192 77.5c0 17.1-5.5 33.7-15.6 47.5L95.6 234.6C85.5 248.4 80 265 80 282.1v5.9h288v-5.9c0-17.1-5.5-33.7-15.6-47.5l-80.8-109.7A79.9 79.9 0 0 1 256 77.5V48h-64zM80 416v32c0 8.8 7.2 16 16 16h256c8.8 0 16-7.2 16-16v-32zM304 48v29.5c0 6.8 2.2 13.5 6.2 19l15 20.4C338.3 104 356.2 96 376 96c39.8 0 72 32.2 72 72 0 28.9-17.1 53.9-41.6 65.3 6.3 15.4 9.6 31.9 9.6 48.8V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V282.1c0-27.3 8.7-53.9 25-75.9l80.8-109.7c4.1-5.5 6.2-12.2 6.2-19V48c-13.3 0-24-10.7-24-24s10.7-24 24-24h160c13.3 0 24 10.7 24 24s-10.7 24-24 24m50.7 108.9 25.6 34.8c11.2-2 19.7-11.8 19.7-23.6 0-13.3-10.7-24-24-24-9.2 0-17.2 5.2-21.3 12.9z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M176 85V32h96v53c0 14.2 4.7 28.1 13.5 39.3L363.8 225c13.1 16.9 20.2 37.6 20.2 58.9v4.1H64v-4.1c0-21.3 7.1-42.1 20.2-58.9l78.3-100.7c8.8-11.2 13.5-25 13.5-39.3m-48-69c0 8.8 7.2 16 16 16v53c0 7.1-2.4 14-6.7 19.6L59 205.3c-17.5 22.5-27 50.1-27 78.6V448c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V283.9c0-21.8-5.6-43.1-16-61.9 27.6-7.1 48-32.2 48-62 0-35.3-28.7-64-64-64-23.6 0-44.2 12.8-55.3 31.8l-18-23.1C306.4 99 304 92.1 304 85V32c8.8 0 16-7.2 16-16s-7.2-16-16-16H144c-8.8 0-16 7.2-16 16m250.3 175.5-26.2-33.7c1.1-16.7 15-29.8 31.9-29.8 17.7 0 32 14.3 32 32s-14.3 32-32 32c-2 0-3.9-.2-5.7-.5M64 384v-64h320v64zm0 32h320v32c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M288 16c8.8 0 16 7.2 16 16s-7.2 16-16 16H160c-8.8 0-16-7.2-16-16s7.2-16 16-16zM128 32c0 11.8 6.4 22.2 16 27.7V85c0 7.1-2.4 14-6.7 19.6L59 205.3c-17.5 22.5-27 50.1-27 78.6V448c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V283.9c0-21.8-5.6-43.1-16-61.9 27.6-7.1 48-32.2 48-62 0-35.3-28.7-64-64-64-23.6 0-44.2 12.8-55.3 31.8l-18-23.1C306.4 99 304 92.1 304 85V59.7c9.6-5.5 16-15.9 16-27.7 0-17.7-14.3-32-32-32H160c-17.7 0-32 14.3-32 32m32 32h128v21c0 10.7 3.6 21 10.1 29.5l78.3 100.7c15.3 19.6 23.6 43.8 23.6 68.7V448c0 26.5-21.5 48-48 48H96c-26.5 0-48-21.5-48-48V283.9c0-24.9 8.3-49.1 23.6-68.8l78.3-100.7c6.5-8.3 10.1-18.7 10.1-29.4zm230.7 143.5c-.5-.7-1.1-1.5-1.7-2.2l-49.4-63.6c7.2-17.5 24.4-29.8 44.4-29.8 26.5 0 48 21.5 48 48 0 24.2-18 44.3-41.3 47.5zM128 304h192c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H128c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16m-32 16v64c0 17.7 14.3 32 32 32h192c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32H128c-17.7 0-32 14.3-32 32"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h128c17.7 0 32-14.3 32-32S305.7 0 288 0zm256 288H32v128h384z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M144 59.7V85c0 7.1-2.4 14-6.7 19.6L59 205.3c-17.5 22.5-27 50.1-27 78.6v4.1h384v-4.1c0-17.4-3.5-34.5-10.3-50.3 24.9-11.3 42.3-36.4 42.3-65.6 0-39.8-32.2-72-72-72-21.2 0-40.3 9.2-53.5 23.8l-11.8-15.1C306.4 99 304 92.1 304 85V59.7c-4.7 2.7-10.2 4.3-16 4.3H160c-5.8 0-11.3-1.6-16-4.3M32 448c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64v-32H32zm346.6-256.1-25.1-32.2c3.4-9.1 12.2-15.6 22.5-15.6 13.3 0 24 10.7 24 24 0 12.4-9.4 22.6-21.4 23.9z"
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
