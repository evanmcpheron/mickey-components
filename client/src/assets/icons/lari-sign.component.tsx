import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const LariSignIcon: React.FC<
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
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M144 32c17.7 0 32 14.3 32 32v32.7c5.3-.4 10.6-.7 16-.7s10.7.2 16 .7V64c0-17.7 14.3-32 32-32s32 14.3 32 32v49.4c54.9 25.2 95.8 75.5 108.2 136.2 3.5 17.3-7.7 34.2-25 37.7s-34.2-7.7-37.7-25c-6.1-29.9-22.5-55.9-45.4-74.3v68c0 17.7-14.3 32-32 32s-32-14.3-32-32v-95c-5.2-.7-10.6-1-16-1s-10.8.3-16 1v95c0 17.7-14.3 32-32 32s-32-14.3-32-32v-67.9C82.7 211.5 64 247.6 64 288c0 70.7 57.3 128 128 128h160c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h16.9C18.5 382 0 337.2 0 288c0-77.5 45.9-144.3 112-174.6V64c0-17.7 14.3-32 32-32"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M144 32c13.3 0 24 10.7 24 24v41.5q11.85-1.5 24-1.5c12.15 0 16.1.5 24 1.5V56c0-13.3 10.7-24 24-24s24 10.7 24 24v54c58.9 23.8 103.2 76 116.2 139.7 2.6 13-5.8 25.7-18.7 28.3s-25.7-5.8-28.3-18.7c-8.3-41-34-75.6-69.1-95.9V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V146c-7.8-1.3-15.8-2-24-2s-16.2.7-24 2v118c0 13.3-10.7 24-24 24s-24-10.7-24-24V163.3C77 188.2 48 234.7 48 288c0 79.5 64.5 144 144 144h168c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h41C25.1 396.8 0 345.3 0 288c0-80.6 49.6-149.6 120-178V56c0-13.3 10.7-24 24-24"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M144 32c8.8 0 16 7.2 16 16v50.7c10.4-1.7 21.1-2.7 32-2.7s21.6.9 32 2.7V48c0-8.8 7.2-16 16-16s16 7.2 16 16v58.9c62.8 22.2 110.7 76.2 124.2 142.7 1.8 8.7-3.8 17.1-12.5 18.9s-17.1-3.8-18.9-12.5c-10.5-51.6-45.7-94.1-92.8-114.7V272c0 8.8-7.2 16-16 16s-16-7.2-16-16V131.2c-10.3-2.1-21-3.2-32-3.2s-21.7 1.1-32 3.2V272c0 8.8-7.2 16-16 16s-16-7.2-16-16V141.3C71.5 166 32 222.4 32 288c0 88.4 71.6 160 160 160h176c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16-7.2-16-16s7.2-16 16-16h69.8C34.1 413.6 0 354.8 0 288c0-83.6 53.4-154.7 128-181.1V48c0-8.8 7.2-16 16-16"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M136 32c4.4 0 8 3.6 8 8v62.4c15.9-4.2 32.6-6.4 49.9-6.4 10.3 0 20.3.8 30.1 2.3V40c0-4.4 3.6-8 8-8s8 3.6 8 8v61.5c72.4 17.5 128.9 75.3 143.8 148.1.9 4.3-1.9 8.6-6.2 9.4s-8.6-1.9-9.4-6.2C354.8 187.4 304.7 135.1 240 118v162c0 4.4-3.6 8-8 8s-8-3.6-8-8V114.5c-9.8-1.7-19.9-2.5-30.1-2.5-17.3 0-34 2.4-49.9 7v161c0 4.4-3.6 8-8 8s-8-3.6-8-8V124.5C62.3 150.4 16 213.9 16 288c0 97.1 79.6 176 177.9 176H376c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h108.3C47.9 434.4 0 366.8 0 288c0-83.2 53.4-153.9 128-180.6V40c0-4.4 3.6-8 8-8"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M144 32c-17.7 0-32 14.3-32 32v49.4c19.8-9.1 41.3-14.9 64-16.8V64c0-17.7-14.3-32-32-32m-32 156.1V256c0 17.7 14.3 32 32 32s32-14.3 32-32v-95c-24 3-46 12.7-64 27.1m96-27.1v95c0 17.7 14.3 32 32 32s32-14.3 32-32v-67.9c-18-14.4-40-24.1-64-27.1m64-47.6V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v32.7c22.7 1.9 44.2 7.7 64 16.8z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M64 288c0-70.7 57.3-128 128-128 61.9 0 113.6 44 125.4 102.4 3.5 17.3 20.4 28.5 37.7 25s28.5-20.4 25-37.7C362.4 162 284.9 96 192 96 86 96 0 182 0 288c0 49.2 18.5 94 48.9 128H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h320c17.7 0 32-14.3 32-32s-14.3-32-32-32H192c-70.7 0-128-57.3-128-128"
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
