import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const PipeCircleCheckIcon: React.FC<
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
                  d="M32 96c17.7 0 32 14.3 32 32v256c0 17.7-14.3 32-32 32S0 401.7 0 384V128c0-17.7 14.3-32 32-32m448 0c17.7 0 32 14.3 32 32v64.7c-5.3-.5-10.6-.7-16-.7-16.6 0-32.7 2.3-48 6.6V128c0-17.7 14.3-32 32-32M320 368c0 5.4.2 10.7.7 16H96V128h320v83.2c-57 29.1-96 88.4-96 156.8m32 0a144 144 0 1 1 288 0 144 144 0 1 1-288 0m211.3-43.3c-6.2-6.2-16.4-6.2-22.6 0L480 385.4l-28.7-28.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l40 40c6.2 6.2 16.4 6.2 22.6 0l72-72c6.2-6.2 6.2-16.4 0-22.6"
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
                  d="M24 96c13.3 0 24 10.7 24 24v8h416v-8c0-13.3 10.7-24 24-24s24 10.7 24 24v72.7c-5.3-.5-10.6-.7-16-.7-10.9 0-21.6 1-32 2.9V176H48v160h274.9c-1.9 10.4-2.9 21.1-2.9 32 0 5.4.2 10.7.7 16H48v8c0 13.3-10.7 24-24 24S0 405.3 0 392V120c0-13.3 10.7-24 24-24m328 272a144 144 0 1 1 288 0 144 144 0 1 1-288 0m188.7-43.3L480 385.4l-28.7-28.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l40 40c6.2 6.2 16.4 6.2 22.6 0l72-72c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0"
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
                  d="M16 96c8.8 0 16 7.2 16 16v16h416v-16c0-8.8 7.2-16 16-16s16 7.2 16 16v80.7c-11 1-21.7 3-32 5.9V160H32v192h288.7c-.5 5.3-.7 10.6-.7 16s.2 10.7.7 16H32v16c0 8.8-7.2 16-16 16s-16-7.2-16-16V112c0-8.8 7.2-16 16-16m480 384a112 112 0 1 0 0-224 112 112 0 1 0 0 224m0-256a144 144 0 1 1 0 288 144 144 0 1 1 0-288m67.3 100.7c6.2 6.2 6.2 16.4 0 22.6l-72 72c-6.2 6.2-16.4 6.2-22.6 0l-40-40c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l28.7 28.7 60.7-60.7c6.2-6.2 16.4-6.2 22.6 0"
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
                  d="M48 384c0 8.8-7.2 16-16 16s-16-7.2-16-16V128c0-8.8 7.2-16 16-16s16 7.2 16 16zM32 96c-17.7 0-32 14.3-32 32v256c0 17.7 14.3 32 32 32s32-14.3 32-32h256.7c-.5-5.3-.7-10.6-.7-16H64V144h384v54.6c5.2-1.5 10.6-2.7 16-3.7V128c0-8.8 7.2-16 16-16s16 7.2 16 16v64c5.4 0 10.7.2 16 .7V128c0-17.7-14.3-32-32-32s-32 14.3-32 32H64c0-17.7-14.3-32-32-32m464 144a128 128 0 1 1 0 256 128 128 0 1 1 0-256m0 272a144 144 0 1 0 0-288 144 144 0 1 0 0 288m69.7-189.7c-3.1-3.1-8.2-3.1-11.3 0L480 396.7l-42.3-42.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l48 48c3.1 3.1 8.2 3.1 11.3 0l80-80c3.1-3.1 3.1-8.2 0-11.3z"
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
                  d="M64 128v256c0 17.7-14.3 32-32 32S0 401.7 0 384V128c0-17.7 14.3-32 32-32s32 14.3 32 32m448 0v64.7c-5.3-.5-10.6-.7-16-.7-16.6 0-32.7 2.3-48 6.6V128c0-17.7 14.3-32 32-32s32 14.3 32 32m-96 83.2c-57 29.1-96 88.4-96 156.8 0 5.4.2 10.7.7 16H96V128h320z"
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
