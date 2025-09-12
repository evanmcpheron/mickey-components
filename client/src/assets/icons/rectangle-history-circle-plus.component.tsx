import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const RectangleHistoryCirclePlusIcon: React.FC<
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
                  d="M320 368c0 59.5 29.5 112.1 74.8 144H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h384c23.8 0 44.5 12.9 55.5 32.2-2.5-.1-5-.2-7.5-.2-97.2 0-176 78.8-176 176M440 80c13.3 0 24 10.7 24 24s-10.7 24-24 24H72c-13.3 0-24-10.7-24-24s10.7-24 24-24zM392 0c13.3 0 24 10.7 24 24s-10.7 24-24 24H120c-13.3 0-24-10.7-24-24s10.7-24 24-24zm104 224a144 144 0 1 1 0 288 144 144 0 1 1 0-288m16 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v48h-48c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48z"
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
                  d="M64 464h284.5c12.3 18.8 28 35.1 46.3 48H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h384c23.8 0 44.5 12.9 55.5 32.2-2.5-.1-5-.2-7.5-.2-26.2 0-51.1 5.7-73.4 16H64c-8.8 0-16 7.2-16 16v224c0 8.8 7.2 16 16 16M440 80c13.3 0 24 10.7 24 24s-10.7 24-24 24H72c-13.3 0-24-10.7-24-24s10.7-24 24-24zM392 0c13.3 0 24 10.7 24 24s-10.7 24-24 24H120c-13.3 0-24-10.7-24-24s10.7-24 24-24zm104 224a144 144 0 1 1 0 288 144 144 0 1 1 0-288m16 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v48h-48c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48z"
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
                  d="M480 192v.7c5.3-.5 10.6-.7 16-.7s10.7.2 16 .7v-.7c0-35.3-28.7-64-64-64H64c-35.3 0-64 28.7-64 64v256c0 35.3 28.7 64 64 64h330.8c-12.9-9.1-24.5-19.9-34.6-32H64c-17.7 0-32-14.3-32-32V192c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32M448 64H64c-8.8 0-16 7.2-16 16s7.2 16 16 16h384c8.8 0 16-7.2 16-16s-7.2-16-16-16M400 0H112c-8.8 0-16 7.2-16 16s7.2 16 16 16h288c8.8 0 16-7.2 16-16s-7.2-16-16-16m-16 368a112 112 0 1 1 224 0 112 112 0 1 1-224 0m256 0a144 144 0 1 0-288 0 144 144 0 1 0 288 0m-128-64c0-8.8-7.2-16-16-16s-16 7.2-16 16v48h-48c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48z"
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
                  d="M448 144c26.5 0 48 21.5 48 48 5.4 0 10.7.2 16 .7v-.7c0-35.3-28.7-64-64-64H64c-35.3 0-64 28.7-64 64v256c0 35.3 28.7 64 64 64h330.8c-6.9-4.9-13.4-10.2-19.6-16H64c-26.5 0-48-21.5-48-48V192c0-26.5 21.5-48 48-48zm8-80H56c-4.4 0-8 3.6-8 8s3.6 8 8 8h400c4.4 0 8-3.6 8-8s-3.6-8-8-8M408 0H104c-4.4 0-8 3.6-8 8s3.6 8 8 8h304c4.4 0 8-3.6 8-8s-3.6-8-8-8m-40 368a128 128 0 1 1 256 0 128 128 0 1 1-256 0m272 0a144 144 0 1 0-288 0 144 144 0 1 0 288 0m-136-72c0-4.4-3.6-8-8-8s-8 3.6-8 8v64h-64c-4.4 0-8 3.6-8 8s3.6 8 8 8h64v64c0 4.4 3.6 8 8 8s8-3.6 8-8v-64h64c4.4 0 8-3.6 8-8s-3.6-8-8-8h-64z"
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
                  d="M394.8 512c-45.3-31.9-74.8-84.5-74.8-144 0-97.2 78.8-176 176-176 2.5 0 5 .1 7.5.2-11-19.2-31.8-32.2-55.5-32.2H64c-35.3 0-64 28.7-64 64v224c0 35.3 28.7 64 64 64zM464 104c0-13.3-10.7-24-24-24H72c-13.3 0-24 10.7-24 24s10.7 24 24 24h368c13.3 0 24-10.7 24-24m-48-80c0-13.3-10.7-24-24-24H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24"
                />
                <path
                  className="aps-icon-foreground"
                  d="M352 368a144 144 0 1 1 288 0 144 144 0 1 1-288 0m144-80c-8.8 0-16 7.2-16 16v48h-48c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48v-48c0-8.8-7.2-16-16-16"
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
