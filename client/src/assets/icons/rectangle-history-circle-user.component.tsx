import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const RectangleHistoryCircleUserIcon: React.FC<
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
                  d="M320 368c0 59.5 29.5 112.1 74.8 144H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h384c23.8 0 44.5 12.9 55.5 32.2-2.5-.1-5-.2-7.5-.2-97.2 0-176 78.8-176 176M440 80c13.3 0 24 10.7 24 24s-10.7 24-24 24H72c-13.3 0-24-10.7-24-24s10.7-24 24-24zM392 0c13.3 0 24 10.7 24 24s-10.7 24-24 24H120c-13.3 0-24-10.7-24-24s10.7-24 24-24zm-40 368a144 144 0 1 1 288 0 144 144 0 1 1-288 0m221.7 80.7c-6.2-19-24-32.7-45.1-32.7h-65.2c-21 0-38.9 13.7-45.1 32.7 20.2 19.4 47.5 31.3 77.7 31.3s57.5-11.9 77.7-31.3M544 336a48 48 0 1 0-96 0 48 48 0 1 0 96 0"
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
                  d="M64 464h284.5c12.3 18.8 28 35.1 46.3 48H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h384c23.8 0 44.5 12.9 55.5 32.2-2.5-.1-5-.2-7.5-.2-26.2 0-51.1 5.7-73.4 16H64c-8.8 0-16 7.2-16 16v224c0 8.8 7.2 16 16 16M440 80c13.3 0 24 10.7 24 24s-10.7 24-24 24H72c-13.3 0-24-10.7-24-24s10.7-24 24-24zM392 0c13.3 0 24 10.7 24 24s-10.7 24-24 24H120c-13.3 0-24-10.7-24-24s10.7-24 24-24zm-40 368a144 144 0 1 1 288 0 144 144 0 1 1-288 0m221.7 80.7c-6.2-19-24-32.7-45.1-32.7h-65.2c-21 0-38.9 13.7-45.1 32.7 20.2 19.4 47.5 31.3 77.7 31.3s57.5-11.9 77.7-31.3M544 336a48 48 0 1 0-96 0 48 48 0 1 0 96 0"
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
                  d="M480 192v.7c5.3-.5 10.6-.7 16-.7s10.7.2 16 .7v-.7c0-35.3-28.7-64-64-64H64c-35.3 0-64 28.7-64 64v256c0 35.3 28.7 64 64 64h330.8c-12.9-9.1-24.5-19.9-34.6-32H64c-17.7 0-32-14.3-32-32V192c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32M448 64H64c-8.8 0-16 7.2-16 16s7.2 16 16 16h384c8.8 0 16-7.2 16-16s-7.2-16-16-16M400 0H112c-8.8 0-16 7.2-16 16s7.2 16 16 16h288c8.8 0 16-7.2 16-16s-7.2-16-16-16m156 462.6c-17.3 11-37.9 17.4-60 17.4s-42.7-6.4-60-17.4c7.8-9.1 19.4-14.6 31.8-14.6h56.4c12.4 0 23.9 5.5 31.8 14.6m24.3-20.8c-13.8-16.1-34.2-25.8-56.1-25.8h-56.4c-21.8 0-42.2 9.6-56.1 25.8-17.2-19.7-27.7-45.6-27.7-73.8 0-61.9 50.1-112 112-112s112 50.1 112 112c0 28.2-10.5 54.1-27.7 73.8M640 368a144 144 0 1 0-288 0 144 144 0 1 0 288 0m-144-48a24 24 0 1 1 0 48 24 24 0 1 1 0-48m0 80a56 56 0 1 0 0-112 56 56 0 1 0 0 112"
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
                  d="M448 144c26.5 0 48 21.5 48 48 5.4 0 10.7.2 16 .7v-.7c0-35.3-28.7-64-64-64H64c-35.3 0-64 28.7-64 64v256c0 35.3 28.7 64 64 64h330.8c-6.9-4.9-13.4-10.2-19.6-16H64c-26.5 0-48-21.5-48-48V192c0-26.5 21.5-48 48-48zm8-80H56c-4.4 0-8 3.6-8 8s3.6 8 8 8h400c4.4 0 8-3.6 8-8s-3.6-8-8-8M408 0H104c-4.4 0-8 3.6-8 8s3.6 8 8 8h304c4.4 0 8-3.6 8-8s-3.6-8-8-8m165.9 469.6C552.3 486.2 525.3 496 496 496s-56.3-9.8-77.9-26.4l3.3-6.6c9.5-19 28.9-31 50.1-31h48.9c21.2 0 40.6 12 50.1 31l3.3 6.6zm12.4-10.9-1.5-2.9a71.96 71.96 0 0 0-64.4-39.8h-48.8c-27.3 0-52.2 15.4-64.4 39.8l-1.5 2.9C382.4 435.5 368 403.5 368 368c0-70.7 57.3-128 128-128s128 57.3 128 128c0 35.5-14.4 67.5-37.7 90.7M640 368a144 144 0 1 0-288 0 144 144 0 1 0 288 0m-144-64a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0 80a48 48 0 1 0 0-96 48 48 0 1 0 0 96"
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
                  d="M496 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288m0-32c-30.2 0-57.5-11.9-77.7-31.3 6.2-19 24-32.7 45.1-32.7h65.2c21 0 38.9 13.7 45.1 32.7-20.2 19.4-47.5 31.3-77.7 31.3m0-192a48 48 0 1 1 0 96 48 48 0 1 1 0-96"
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
