import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SquareQIcon: React.FC<
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
                  d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm80 224c0 44.2 35.8 80 80 80 13.4 0 25.9-3.3 37-9.1l-30-30c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l30 30c5.8-11.1 9.1-23.7 9.1-37 0-44.2-35.8-80-80-80s-80 35.8-80 80m208 0c0 26.7-8.2 51.4-22.1 71.9L345 343c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L296 361.8c-20.5 14-45.3 22.1-71.9 22.1-70.7 0-128-57.3-128-128s57.3-128 128-128 128 57.3 128 128z"
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
                  d="M64 80c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm144 160c0 44.2 35.8 80 80 80 13.4 0 25.9-3.3 37-9.1l-30-30c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l30 30c5.8-11.1 9.1-23.7 9.1-37 0-44.2-35.8-80-80-80s-80 35.8-80 80m208 0c0 26.7-8.2 51.4-22.1 71.9L345 343c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L296 361.8c-20.5 14-45.3 22.1-71.9 22.1-70.7 0-128-57.3-128-128s57.3-128 128-128 128 57.3 128 128z"
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
                  d="M64 64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm128 160c0 53 43 96 96 96 20.7 0 39.9-6.6 55.6-17.7l-50.9-50.9c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l50.9 50.9c11.2-15.8 17.8-35 17.8-55.7 0-53-43-96-96-96s-96 43-96 96m224 0c0 29.6-10 56.8-26.9 78.5l22.2 22.2c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-22.2-22.2C280.8 374 253.6 384 224 384c-70.7 0-128-57.3-128-128s57.3-128 128-128 128 57.3 128 128"
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
                  d="M64 48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm112 160c0 61.9 50.1 112 112 112 28 0 53.7-10.3 73.3-27.3l-61.9-61.9c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0l61.9 61.9C325.7 309.7 336 284 336 256c0-61.9-50.1-112-112-112s-112 50.1-112 112m240 0c0 32.5-12.1 62.1-32 84.7l29.7 29.7c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0L308.7 352c-22.6 19.9-52.2 32-84.7 32-70.7 0-128-57.3-128-128s57.3-128 128-128 128 57.3 128 128"
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
                  d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm80 224c0 44.2 35.8 80 80 80 13.4 0 25.9-3.3 37-9.1l-30-30c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l30 30c5.8-11.1 9.1-23.7 9.1-37 0-44.2-35.8-80-80-80s-80 35.8-80 80m208 0c0 26.7-8.2 51.4-22.1 71.9L345 343c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L296 361.8c-20.5 14-45.3 22.1-71.9 22.1-70.7 0-128-57.3-128-128s57.3-128 128-128 128 57.3 128 128z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M224 176c44.2 0 80 35.8 80 80 0 13.4-3.3 25.9-9.1 37l-30-30c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l30 30c-11.1 5.8-23.7 9.1-37 9.1-44.2 0-80-35.8-80-80s35.8-80 80-80m105.9 151.9c14-20.5 22.1-45.3 22.1-71.9 0-70.7-57.3-128-128-128S96 185.3 96 256s57.3 128 128 128c26.7 0 51.4-8.2 71.9-22.1L311 377c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L329.8 328z"
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
