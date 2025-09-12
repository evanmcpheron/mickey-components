import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const TimelineArrowIcon: React.FC<
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
                  d="M128 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48m32 97.3c28.3-12.3 48-40.5 48-73.3 0-44.2-35.8-80-80-80S48 51.8 48 96c0 32.8 19.7 61 48 73.3V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h160v54.7c-28.3 12.3-48 40.5-48 73.3 0 44.2 35.8 80 80 80s80-35.8 80-80c0-32.8-19.7-61-48-73.3V288h274.7l-41.4 41.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l41.4 41.3H384v-54.7c28.3-12.3 48-40.5 48-73.3 0-44.2-35.8-80-80-80s-80 35.8-80 80c0 32.8 19.7 61 48 73.3V224H160zM328 96a24 24 0 1 1 48 0 24 24 0 1 1-48 0M224 392a24 24 0 1 1 0 48 24 24 0 1 1 0-48"
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
                  d="M160 96a32 32 0 1 0-64 0 32 32 0 1 0 64 0m48 0c0 35.8-23.5 66.1-56 76.3V232h176v-59.7c-32.5-10.2-56-40.5-56-76.3 0-44.2 35.8-80 80-80s80 35.8 80 80c0 35.8-23.5 66.1-56 76.3V232h178.6l-58.9-54.4c-9.7-9-10.3-24.2-1.4-33.9s24.2-10.3 33.9-1.4l103.9 95.9.4.4.9.9c4 4.3 6.5 10.1 6.5 16.4s-2.5 12.1-6.5 16.4l-.9.9-.4.4-103.8 96c-9.7 9-24.9 8.4-33.9-1.4s-8.4-24.9 1.4-33.9l58.8-54.3H248v59.7c32.5 10.2 56 40.5 56 76.3 0 44.2-35.8 80-80 80s-80-35.8-80-80c0-35.8 23.5-66.1 56-76.3V280H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h80v-59.7C71.5 162.1 48 131.8 48 96c0-44.2 35.8-80 80-80s80 35.8 80 80m-16 320a32 32 0 1 0 64 0 32 32 0 1 0-64 0m160-288a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
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
                  d="M144 80a32 32 0 1 0-64 0 32 32 0 1 0 64 0m32 0c0 29.8-20.4 54.9-48 62v114h224V142c-27.6-7.1-48-32.2-48-62 0-35.3 28.7-64 64-64s64 28.7 64 64c0 29.8-20.4 54.9-48 62v114h195.8l-62.1-51.7c-6.8-5.7-7.7-15.7-2-22.5s15.7-7.7 22.5-2l95.9 79.9c.6.5 1.1 1 1.6 1.5 2.6 2.8 4.2 6.7 4.2 10.8v1c-.2 3.5-1.5 6.7-3.6 9.2q-.9 1.2-2.1 2.1l-.1.1-95.9 79.9c-6.8 5.7-16.9 4.7-22.5-2s-4.7-16.9 2-22.5l62.1-51.8H256v82c27.6 7.1 48 32.2 48 62 0 35.3-28.7 64-64 64s-64-28.7-64-64c0-29.8 20.4-54.9 48-62v-82H16c-8.8 0-16-7.2-16-16s7.2-16 16-16h80V142c-27.6-7.1-48-32.2-48-62 0-35.3 28.7-64 64-64s64 28.7 64 64m32 352a32 32 0 1 0 64 0 32 32 0 1 0-64 0M400 80a32 32 0 1 0-64 0 32 32 0 1 0 64 0"
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
                  d="M128 32a48 48 0 1 1 0 96 48 48 0 1 1 0-96m8 111.5c31.6-3.9 56-30.9 56-63.5 0-35.3-28.7-64-64-64S64 44.7 64 80c0 32.6 24.4 59.6 56 63.5V248H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h208v104.5c-31.6 3.9-56 30.9-56 63.5 0 35.3 28.7 64 64 64s64-28.7 64-64c0-32.6-24.4-59.6-56-63.5V264h379.3l-72.7 66.1c-3.3 3-3.5 8-.5 11.3s8 3.5 11.3.5l88-80c1.7-1.5 2.6-3.7 2.6-5.9s-1-4.4-2.6-5.9l-88-80c-3.3-3-8.3-2.7-11.3.5s-2.7 8.3.5 11.3l72.7 66.1H360V143.5c31.6-3.9 56-30.9 56-63.5 0-35.3-28.7-64-64-64s-64 28.7-64 64c0 32.6 24.4 59.6 56 63.5V248H136zM304 80a48 48 0 1 1 96 0 48 48 0 1 1-96 0M176 432a48 48 0 1 1 96 0 48 48 0 1 1-96 0"
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
                  d="M352 176c11.4 0 22.2-2.4 32-6.7V224h146.7l-41.4-41.4c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l96 96c12.5 12.5 12.5 32.8 0 45.3l-96 96c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l41.4-41.3H256v54.7c-9.8-4.3-20.6-6.7-32-6.7s-22.2 2.4-32 6.7V288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h64v-54.7c9.8 4.3 20.6 6.7 32 6.7s22.2-2.4 32-6.7V224h160v-54.7c9.8 4.3 20.6 6.7 32 6.7"
                />
                <path
                  className="aps-icon-foreground"
                  d="M128 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48m0 104a80 80 0 1 0 0-160 80 80 0 1 0 0 160M352 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48m0 104a80 80 0 1 0 0-160 80 80 0 1 0 0 160M200 416a24 24 0 1 1 48 0 24 24 0 1 1-48 0m104 0a80 80 0 1 0-160 0 80 80 0 1 0 160 0"
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
