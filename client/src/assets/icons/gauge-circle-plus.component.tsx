import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const GaugeCirclePlusIcon: React.FC<
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
                  d="M496 192c2.7 0 5.3.1 8 .2C475.6 81.7 375.4 0 256 0 114.6 0 0 114.6 0 256s114.6 256 256 256c39.5 0 77-9 110.4-25-28.8-31.3-46.4-73.1-46.4-119 0-97.2 78.8-176 176-176M320 352c0 35.3-28.7 64-64 64s-64-28.7-64-64c0-26.9 16.5-49.9 40-59.3V88c0-13.3 10.7-24 24-24s24 10.7 24 24v204.7c23.5 9.5 40 32.5 40 59.3M144 112a32 32 0 1 1 0 64 32 32 0 1 1 0-64M64 256a32 32 0 1 1 64 0 32 32 0 1 1-64 0m272-112a32 32 0 1 1 64 0 32 32 0 1 1-64 0m160 368a144 144 0 1 0 0-288 144 144 0 1 0 0 288m16-208v48h48c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48h-48c-8.8 0-16-7.2-16-16s7.2-16 16-16h48v-48c0-8.8 7.2-16 16-16s16 7.2 16 16"
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
                  d="M256 464c29.4 0 57.3-6.1 82.6-17.1 7.4 14.7 16.7 28.2 27.7 40.1-33.3 16-70.8 25-110.3 25C114.6 512 0 397.4 0 256S114.6 0 256 0c119.4 0 219.6 81.7 248 192.2-2.6-.1-5.3-.2-8-.2-14 0-27.5 1.6-40.6 4.7C429.9 110.7 350.3 48 256 48 141.1 48 48 141.1 48 256s93.1 208 208 208m0-56c-30.9 0-56-25.1-56-56 0-22.3 13.1-41.6 32-50.6V120c0-13.3 10.7-24 24-24s24 10.7 24 24v181.4c18.9 9 32 28.3 32 50.6 0 30.9-25.1 56-56 56M128 160a32 32 0 1 1 64 0 32 32 0 1 1-64 0m-16 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64m208-64a32 32 0 1 1 64 0 32 32 0 1 1-64 0m176 64a144 144 0 1 1 0 288 144 144 0 1 1 0-288m16 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v48h-48c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48z"
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
                  d="M256 480c32.2 0 62.8-6.8 90.5-19 5.8 9.3 12.5 18 19.8 26.1C333 503 295.5 512 256 512 114.6 512 0 397.4 0 256S114.6 0 256 0c119.4 0 219.6 81.7 248 192.2-2.6-.1-5.3-.2-8-.2-8.4 0-16.7.6-24.8 1.7C444.3 100.3 358.1 32 256 32 132.3 32 32 132.3 32 256s100.3 224 224 224m0-96a32 32 0 1 0 0-64 32 32 0 1 0 0 64m0 32c-35.3 0-64-28.7-64-64 0-29.8 20.4-54.9 48-62V96c0-8.8 7.2-16 16-16s16 7.2 16 16v194c27.6 7.1 48 32.2 48 62 0 35.3-28.7 64-64 64M144 120a24 24 0 1 1 0 48 24 24 0 1 1 0-48M72 256a24 24 0 1 1 48 0 24 24 0 1 1-48 0m272-112a24 24 0 1 1 48 0 24 24 0 1 1-48 0m264 224a112 112 0 1 0-224 0 112 112 0 1 0 224 0m-256 0a144 144 0 1 1 288 0 144 144 0 1 1-288 0m160-64v48h48c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48h-48c-8.8 0-16-7.2-16-16s7.2-16 16-16h48v-48c0-8.8 7.2-16 16-16s16 7.2 16 16"
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
                  d="M256 496c35.6 0 69.4-7.7 99.8-21.6 3.3 4.4 6.9 8.6 10.6 12.7C333 503 295.5 512 256 512 114.6 512 0 397.4 0 256S114.6 0 256 0c119.4 0 219.6 81.7 248 192.2-2.6-.1-5.3-.2-8-.2-2.9 0-5.7.1-8.6.2C459.5 90.6 366.5 16 256 16 123.5 16 16 123.5 16 256s107.5 240 240 240m0-96a48 48 0 1 0 0-96 48 48 0 1 0 0 96m0 16c-35.3 0-64-28.7-64-64 0-32.6 24.4-59.6 56-63.5V80c0-4.4 3.6-8 8-8s8 3.6 8 8v208.5c31.6 3.9 56 30.9 56 63.5 0 35.3-28.7 64-64 64M144 112a16 16 0 1 1 0 32 16 16 0 1 1 0-32M80 240a16 16 0 1 1 32 0 16 16 0 1 1-32 0m272-112a16 16 0 1 1 32 0 16 16 0 1 1-32 0m272 240a128 128 0 1 0-256 0 128 128 0 1 0 256 0m-272 0a144 144 0 1 1 288 0 144 144 0 1 1-288 0m152-72v64h64c4.4 0 8 3.6 8 8s-3.6 8-8 8h-64v64c0 4.4-3.6 8-8 8s-8-3.6-8-8v-64h-64c-4.4 0-8-3.6-8-8s3.6-8 8-8h64v-64c0-4.4 3.6-8 8-8s8 3.6 8 8"
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
                  d="M504 192.2c-2.6-.1-5.3-.2-8-.2-97.2 0-176 78.8-176 176 0 45.9 17.6 87.7 46.4 119-33.4 16-70.9 25-110.4 25C114.6 512 0 397.4 0 256S114.6 0 256 0c119.4 0 219.6 81.7 248 192.2M256 416c35.3 0 64-28.7 64-64 0-26.9-16.5-49.9-40-59.3V88c0-13.3-10.7-24-24-24s-24 10.7-24 24v204.7c-23.5 9.5-40 32.5-40 59.3 0 35.3 28.7 64 64 64m-80-272a32 32 0 1 0-64 0 32 32 0 1 0 64 0M96 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64m272-112a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
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
