import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CalendarCircleUserIcon: React.FC<
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
                  d="M128 0c-17.7 0-32 14.3-32 32v32H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48h-48V32c0-17.7-14.3-32-32-32s-32 14.3-32 32v32H160V32c0-17.7-14.3-32-32-32m128 368c0-91.8 70.3-167.2 160-175.3v-.7H0v272c0 26.5 21.5 48 48 48h282.8c-45.2-31.9-74.8-84.5-74.8-144m320 0a144 144 0 1 0-288 0 144 144 0 1 0 288 0m-66.3 80.7C489.5 468.1 462.2 480 432 480s-57.5-11.9-77.7-31.3c6.2-19 24-32.7 45.1-32.7h65.2c21 0 38.9 13.7 45.1 32.7M384 336a48 48 0 1 1 96 0 48 48 0 1 1-96 0"
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
                  d="M128 0c13.3 0 24 10.7 24 24v40h144V24c0-13.3 10.7-24 24-24s24 10.7 24 24v40h40c35.3 0 64 28.7 64 64v64H48v256c0 8.8 7.2 16 16 16h220.5c12.3 18.8 28 35.1 46.3 48H64c-35.3 0-64-28.7-64-64V128c0-35.3 28.7-64 64-64h40V24c0-13.3 10.7-24 24-24m160 368a144 144 0 1 1 288 0 144 144 0 1 1-288 0m221.7 80.7c-6.2-19-24-32.7-45.1-32.7h-65.2c-21 0-38.9 13.7-45.1 32.7 20.2 19.4 47.5 31.3 77.7 31.3s57.5-11.9 77.7-31.3M480 336a48 48 0 1 0-96 0 48 48 0 1 0 96 0"
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
                  d="M128 16c0-8.8-7.2-16-16-16S96 7.2 96 16v48H64C28.7 64 0 92.7 0 128v320c0 35.3 28.7 64 64 64h266.8c-12.9-9.1-24.5-19.9-34.6-32H64c-17.7 0-32-14.3-32-32V192h416v-64c0-35.3-28.7-64-64-64h-32V16c0-8.8-7.2-16-16-16s-16 7.2-16 16v48H128zM64 96h320c17.7 0 32 14.3 32 32v32H32v-32c0-17.7 14.3-32 32-32m428 366.6c-17.3 11-37.9 17.4-60 17.4s-42.7-6.4-60-17.4c7.8-9.1 19.4-14.6 31.8-14.6h56.4c12.4 0 23.9 5.5 31.8 14.6m24.3-20.8c-13.8-16.1-34.2-25.8-56.1-25.8h-56.4c-21.8 0-42.2 9.6-56.1 25.8-17.2-19.7-27.7-45.6-27.7-73.8 0-61.9 50.1-112 112-112s112 50.1 112 112c0 28.2-10.5 54.1-27.7 73.8M576 368a144 144 0 1 0-288 0 144 144 0 1 0 288 0m-144-48a24 24 0 1 1 0 48 24 24 0 1 1 0-48m0 80a56 56 0 1 0 0-112 56 56 0 1 0 0 112"
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
                  d="M128 8c0-4.4-3.6-8-8-8s-8 3.6-8 8v56H64C28.7 64 0 92.7 0 128v320c0 35.3 28.7 64 64 64h266.8c-6.9-4.9-13.5-10.2-19.6-16H64c-26.5 0-48-21.5-48-48V192h432v-64c0-35.3-28.7-64-64-64h-48V8c0-4.4-3.6-8-8-8s-8 3.6-8 8v56H128zm-16 72v40c0 4.4 3.6 8 8 8s8-3.6 8-8V80h192v40c0 4.4 3.6 8 8 8s8-3.6 8-8V80h48c26.5 0 48 21.5 48 48v48H16v-48c0-26.5 21.5-48 48-48zm397.9 389.6C488.3 486.2 461.3 496 432 496s-56.3-9.8-77.9-26.4l3.3-6.6c9.5-19 28.9-31 50.1-31h48.9c21.2 0 40.6 12 50.1 31l3.3 6.6zm12.4-10.9-1.5-2.9a71.96 71.96 0 0 0-64.4-39.8h-48.8c-27.3 0-52.2 15.4-64.4 39.8l-1.5 2.9C318.4 435.5 304 403.5 304 368c0-70.7 57.3-128 128-128s128 57.3 128 128c0 35.5-14.4 67.5-37.7 90.7M576 368a144 144 0 1 0-288 0 144 144 0 1 0 288 0m-144-64a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0 80a48 48 0 1 0 0-96 48 48 0 1 0 0 96"
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
                  d="M96 32c0-17.7 14.3-32 32-32s32 14.3 32 32v32h128V32c0-17.7 14.3-32 32-32s32 14.3 32 32v32h48c26.5 0 48 21.5 48 48v48H0v-48c0-26.5 21.5-48 48-48h48zm320 160.7c-89.7 8.1-160 83.5-160 175.3 0 59.5 29.6 112.1 74.8 144H48c-26.5 0-48-21.5-48-48V192h416z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M432 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288m0-32c-30.2 0-57.5-11.9-77.7-31.3 6.2-19 24-32.7 45.1-32.7h65.2c21 0 38.9 13.7 45.1 32.7-20.2 19.4-47.5 31.3-77.7 31.3m0-192a48 48 0 1 1 0 96 48 48 0 1 1 0-96"
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
