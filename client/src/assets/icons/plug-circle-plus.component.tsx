import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const PlugCirclePlusIcon: React.FC<
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
                  d="M96 0C78.3 0 64 14.3 64 32v96h64V32c0-17.7-14.3-32-32-32m192 0c-17.7 0-32 14.3-32 32v96h64V32c0-17.7-14.3-32-32-32M32 160c-17.7 0-32 14.3-32 32s14.3 32 32 32v32c0 77.4 55 142 128 156.8V480c0 17.7 14.3 32 32 32s32-14.3 32-32v-67.2c12.3-2.5 24.1-6.4 35.1-11.5-2.1-10.8-3.1-21.9-3.1-33.3 0-80.3 53.8-148 127.3-169.2.5-2.2.7-4.5.7-6.8 0-17.7-14.3-32-32-32zm400 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288m16-208v48h48c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48h-48c-8.8 0-16-7.2-16-16s7.2-16 16-16h48v-48c0-8.8 7.2-16 16-16s16 7.2 16 16"
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
                  d="M288 368a144 144 0 1 1 288 0 144 144 0 1 1-288 0m144-80c-8.8 0-16 7.2-16 16v48h-48c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48v-48c0-8.8-7.2-16-16-16M104 0c13.3 0 24 10.7 24 24v88H80V24c0-13.3 10.7-24 24-24m176 0c13.3 0 24 10.7 24 24v88h-48V24c0-13.3 10.7-24 24-24M0 168c0-13.3 10.7-24 24-24h336c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8v19.2c-18 9.2-34.2 21.4-48 36V192H80v64c0 61.9 50.1 112 112 112 24.3 0 46.9-7.8 65.2-20.9-.8 6.9-1.2 13.9-1.2 20.9 0 11.4 1.1 22.5 3.1 33.3-13.5 6.2-28 10.7-43.1 12.9V488c0 13.3-10.7 24-24 24s-24-10.7-24-24v-73.8C91 402.6 32 336.2 32 256v-64h-8c-13.3 0-24-10.7-24-24"
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
                  d="M432 256a112 112 0 1 1 0 224 112 112 0 1 1 0-224m0 256a144 144 0 1 0 0-288 144 144 0 1 0 0 288m0-224c-8.8 0-16 7.2-16 16v48h-48c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48v-48c0-8.8-7.2-16-16-16M112 0c8.8 0 16 7.2 16 16v96H96V16c0-8.8 7.2-16 16-16m160 0c8.8 0 16 7.2 16 16v96h-32V16c0-8.8 7.2-16 16-16M0 160c0-8.8 7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16h-16v35.2c-11.4 5.9-22.2 12.9-32 21V176H64v64c0 70.7 57.3 128 128 128 23.7 0 45.8-6.4 64.9-17.6-.6 5.8-.9 11.7-.9 17.6q0 9.3.9 18.3c-15.2 6.8-31.7 11.2-48.9 12.9V496c0 8.8-7.2 16-16 16s-16-7.2-16-16v-96.8C95.1 391.2 32 323 32 240v-64H16c-8.8 0-16-7.2-16-16"
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
                  d="M432 240a128 128 0 1 1 0 256 128 128 0 1 1 0-256m0 272a144 144 0 1 0 0-288 144 144 0 1 0 0 288m0-224c-4.4 0-8 3.6-8 8v64h-64c-4.4 0-8 3.6-8 8s3.6 8 8 8h64v64c0 4.4 3.6 8 8 8s8-3.6 8-8v-64h64c4.4 0 8-3.6 8-8s-3.6-8-8-8h-64v-64c0-4.4-3.6-8-8-8M104 0c4.4 0 8 3.6 8 8v104H96V8c0-4.4 3.6-8 8-8m176 0c4.4 0 8 3.6 8 8v104h-16V8c0-4.4 3.6-8 8-8M0 152c0-4.4 3.6-8 8-8h368c4.4 0 8 3.6 8 8s-3.6 8-8 8h-32v55.5c-5.5 3.2-10.9 6.7-16 10.5v-66H56v80c0 75.1 60.9 136 136 136 23.2 0 45.1-5.8 64.2-16.1-.1 2.7-.2 5.4-.2 8.1 0 3.3.1 6.5.3 9.8-17.2 8.1-36.2 13-56.3 14V504c0 4.4-3.6 8-8 8s-8-3.6-8-8V391.8C103.8 387.6 40 321.3 40 240v-80H8c-4.4 0-8-3.6-8-8"
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
                  d="M128 32v96H64V32C64 14.3 78.3 0 96 0s32 14.3 32 32m192 0v96h-64V32c0-17.7 14.3-32 32-32s32 14.3 32 32M0 192c0-17.7 14.3-32 32-32h320c17.7 0 32 14.3 32 32 0 2.3-.3 4.6-.7 6.8C309.8 220 256 287.7 256 368c0 11.4 1.1 22.5 3.1 33.3-11.1 5.1-22.9 9-35.1 11.5V480c0 17.7-14.3 32-32 32s-32-14.3-32-32v-67.2C87 398 32 333.4 32 256v-32c-17.7 0-32-14.3-32-32"
                />
                <path
                  className="aps-icon-foreground"
                  d="M288 368a144 144 0 1 1 288 0 144 144 0 1 1-288 0m144-80c-8.8 0-16 7.2-16 16v48h-48c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48v-48c0-8.8-7.2-16-16-16"
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
