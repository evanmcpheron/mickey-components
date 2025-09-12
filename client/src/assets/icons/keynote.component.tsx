import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const KeynoteIcon: React.FC<
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
                  d="M184 72h14.4c8.3 14.3 23.8 24 41.6 24h64c26.5 0 48-21.5 48-48S330.5 0 304 0h-64c-17.8 0-33.3 9.7-41.6 24H184c-48.6 0-88 39.4-88 88v48H80c-12.1 0-23.2 6.8-28.6 17.7l-48 96C1.2 278.1 0 283 0 288v32c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32v-32c0-5-1.2-9.9-3.4-14.3l-48-96c-5.4-10.9-16.5-17.7-28.6-17.7H144v-48c0-22.1 17.9-40 40-40m-24 376c-17.7 0-32 14.3-32 32s14.3 32 32 32h192c17.7 0 32-14.3 32-32s-14.3-32-32-32h-64v-64h-64v64z"
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
                  d="M198.4 72H184c-22.1 0-40 17.9-40 40v48h278.3c16.1 0 31 8 39.9 21.4l41.7 62.5c5.3 7.9 8.1 17.1 8.1 26.6V320c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32v-49.5c0-9.5 2.8-18.7 8.1-26.6l41.7-62.5C58.7 168 73.6 160 89.7 160H96v-48c0-48.6 39.4-88 88-88h14.4C206.7 9.7 222.2 0 240 0h64c26.5 0 48 21.5 48 48s-21.5 48-48 48h-64c-17.8 0-33.3-9.7-41.6-24M48 304h416v-33.5L422.3 208H89.7L48 270.5zm80 184c0-13.3 10.7-24 24-24h80v-80h48v80h80c13.3 0 24 10.7 24 24s-10.7 24-24 24H152c-13.3 0-24-10.7-24-24"
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
                  d="M304 32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16s7.2-16 16-16zM240 0c-20.9 0-38.7 13.4-45.3 32H184c-44.2 0-80 35.8-80 80v48H93.7c-18.2 0-34.8 10.3-42.9 26.5L5.1 277.9c-3.3 6.7-5.1 14-5.1 21.5V352c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32v-52.7c0-7.5-1.7-14.8-5.1-21.5l-45.7-91.3c-8.1-16.3-24.8-26.5-42.9-26.5H136v-48c0-26.5 21.5-48 48-48h10.7c6.6 18.6 24.4 32 45.3 32h64c26.5 0 48-21.5 48-48S330.5 0 304 0zM32 352v-32h448v32zm3.8-64 43.6-87.2c2.7-5.4 8.3-8.8 14.3-8.8h324.6c6.1 0 11.6 3.4 14.3 8.8l43.6 87.2zM144 480c-8.8 0-16 7.2-16 16s7.2 16 16 16h224c8.8 0 16-7.2 16-16s-7.2-16-16-16h-96v-64h-32v64z"
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
                  d="M312 16c13.3 0 24 10.7 24 24s-10.7 24-24 24h-80c-13.3 0-24-10.7-24-24s10.7-24 24-24zM232 0c-19.4 0-35.5 13.7-39.2 32H184c-39.8 0-72 32.2-72 72v40H93.7c-18.2 0-34.8 10.3-42.9 26.5L5.1 261.9c-3.3 6.7-5.1 14-5.1 21.5V336c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32v-52.7c0-7.5-1.7-14.8-5.1-21.5l-45.7-91.3c-8.1-16.3-24.8-26.5-42.9-26.5H128v-40c0-30.9 25.1-56 56-56h8.8c3.7 18.3 19.8 32 39.2 32h80c22.1 0 40-17.9 40-40S334.1 0 312 0zM16 336v-32h480v32c0 8.8-7.2 16-16 16H32c-8.8 0-16-7.2-16-16m0-48v-4.7c0-5 1.2-9.9 3.4-14.3L65 177.7c5.5-10.9 16.5-17.7 28.7-17.7h324.6c12.1 0 23.2 6.8 28.6 17.7l45.7 91.3c2.2 4.4 3.4 9.3 3.4 14.3v4.7zm120 208c-4.4 0-8 3.6-8 8s3.6 8 8 8h240c4.4 0 8-3.6 8-8s-3.6-8-8-8H264v-96h-16v96z"
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
                  d="M184 72h14.4c8.3 14.3 23.8 24 41.6 24h64c26.5 0 48-21.5 48-48S330.5 0 304 0h-64c-17.8 0-33.3 9.7-41.6 24H184c-48.6 0-88 39.4-88 88v48h48v-48c0-22.1 17.9-40 40-40m-24 376c-17.7 0-32 14.3-32 32s14.3 32 32 32h192c17.7 0 32-14.3 32-32s-14.3-32-32-32h-64v-96h-64v96z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M80 160c-12.1 0-23.2 6.8-28.6 17.7l-48 96C1.2 278.1 0 283 0 288v32c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32v-32c0-5-1.2-9.9-3.4-14.3l-48-96c-5.4-10.9-16.5-17.7-28.6-17.7z"
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
