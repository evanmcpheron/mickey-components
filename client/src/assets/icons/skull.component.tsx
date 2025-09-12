import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SkullIcon: React.FC<
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
                  d="M416 398.9c58.5-41.1 96-104.1 96-174.9C512 100.3 397.4 0 256 0S0 100.3 0 224c0 70.7 37.5 133.8 96 174.9V464c0 26.5 21.5 48 48 48h48v-48c0-8.8 7.2-16 16-16s16 7.2 16 16v48h64v-48c0-8.8 7.2-16 16-16s16 7.2 16 16v48h48c26.5 0 48-21.5 48-48v-65.1M96 256a64 64 0 1 1 128 0 64 64 0 1 1-128 0m256-64a64 64 0 1 1 0 128 64 64 0 1 1 0-128"
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
                  d="M368 400c-.4-16 7.3-31.2 20.4-40.4C436.1 326.2 464 276.9 464 224c0-91.4-86.9-176-208-176S48 132.6 48 224c0 52.9 27.9 102.2 75.6 135.6 13.1 9.2 20.8 24.4 20.4 40.4v64h48v-24c0-13.3 10.7-24 24-24s24 10.7 24 24v24h32v-24c0-13.3 10.7-24 24-24s24 10.7 24 24v24h48zm48-1.1V464c0 26.5-21.5 48-48 48H144c-26.5 0-48-21.5-48-48v-65.1C37.5 357.8 0 294.7 0 224 0 100.3 114.6 0 256 0s256 100.3 256 224c0 70.7-37.5 133.8-96 174.9M112 256a56 56 0 1 1 112 0 56 56 0 1 1-112 0m232-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112"
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
                  d="M384 399.6c-.2-10.7 4.9-20.8 13.6-26.9 51.3-36 82.4-89.8 82.4-148.7 0-102.2-96.1-192-224-192S32 121.8 32 224c0 58.8 31.1 112.7 82.4 148.7 8.8 6.1 13.9 16.2 13.6 26.9V464c0 8.8 7.2 16 16 16h48v-48c0-8.8 7.2-16 16-16s16 7.2 16 16v48h64v-48c0-8.8 7.2-16 16-16s16 7.2 16 16v48h48c8.8 0 16-7.2 16-16v-64.4m32-.7V464c0 26.5-21.5 48-48 48H144c-26.5 0-48-21.5-48-48v-65.1C37.5 357.8 0 294.7 0 224 0 100.3 114.6 0 256 0s256 100.3 256 224c0 70.7-37.5 133.8-96 174.9M160 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64m0-96a64 64 0 1 1 0 128 64 64 0 1 1 0-128m224 64a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-96 0a64 64 0 1 1 128 0 64 64 0 1 1-128 0"
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
                  d="M406.8 385.8c54.9-38.5 89.2-97 89.2-161.8 0-112.9-105.4-208-240-208S16 111.1 16 224c0 64.8 34.3 123.3 89.2 161.8 4.4 3.1 6.9 8.1 6.8 13.5v64.8c0 17.7 14.3 32 32 32h40V448c0-4.4 3.6-8 8-8s8 3.6 8 8v48h48v-48c0-4.4 3.6-8 8-8s8 3.6 8 8v48h48v-48c0-4.4 3.6-8 8-8s8 3.6 8 8v48h40c17.7 0 32-14.3 32-32v-64.8c-.1-5.3 2.4-10.4 6.8-13.5zM312 512H144c-26.5 0-48-21.5-48-48v-65.1C37.5 357.8 0 294.7 0 224 0 100.3 114.6 0 256 0s256 100.3 256 224c0 70.7-37.5 133.8-96 174.9V464c0 26.5-21.5 48-48 48h-56M208 256a48 48 0 1 0-96 0 48 48 0 1 0 96 0m-112 0a64 64 0 1 1 128 0 64 64 0 1 1-128 0m256 48a48 48 0 1 0 0-96 48 48 0 1 0 0 96m0-112a64 64 0 1 1 0 128 64 64 0 1 1 0-128"
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
                  d="M416 398.9c58.5-41.1 96-104.1 96-174.9C512 100.3 397.4 0 256 0S0 100.3 0 224c0 70.7 37.5 133.8 96 174.9V464c0 26.5 21.5 48 48 48h48v-48c0-8.8 7.2-16 16-16s16 7.2 16 16v48h64v-48c0-8.8 7.2-16 16-16s16 7.2 16 16v48h48c26.5 0 48-21.5 48-48v-65.1M96 256a64 64 0 1 1 128 0 64 64 0 1 1-128 0m256-64a64 64 0 1 1 0 128 64 64 0 1 1 0-128"
                />
                <path
                  className="aps-icon-foreground"
                  d="M160 320a64 64 0 1 0 0-128 64 64 0 1 0 0 128m192 0a64 64 0 1 0 0-128 64 64 0 1 0 0 128"
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
