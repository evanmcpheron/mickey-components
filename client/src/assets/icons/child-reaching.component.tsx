import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ChildReachingIcon: React.FC<
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
                  d="M256 64a64 64 0 1 0-128 0 64 64 0 1 0 128 0M152.9 169.3c-23.7-8.4-44.5-24.3-58.8-45.8L74.6 94.2C64.8 79.5 45 75.6 30.2 85.4s-18.7 29.7-8.9 44.4L40.9 159c18.1 27.1 42.8 48.4 71.1 62.4V480c0 17.7 14.3 32 32 32s32-14.3 32-32v-96h32v96c0 17.7 14.3 32 32 32s32-14.3 32-32V221.6c29.1-14.2 54.4-36.2 72.7-64.2l18.2-27.9c9.6-14.8 5.4-34.6-9.4-44.3s-34.6-5.5-44.3 9.4L291 122.4c-21.8 33.4-58.9 53.6-98.8 53.6-12.6 0-24.9-2-36.6-5.8-.9-.3-1.8-.7-2.7-.9"
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
                  d="M192 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48m0 96a72 72 0 1 0 0-144 72 72 0 1 0 0 144m-.2 32c-41.6 0-80-22.4-100.6-58.5L76.9 92.2c-6.5-11.5-21.2-15.6-32.7-9s-15.6 21.2-9 32.7l14.4 25.3c15 26.5 36.8 47.7 62.5 62.1V488c0 13.3 10.7 24 24 24s24-10.7 24-24V384h64v104c0 13.3 10.7 24 24 24s24-10.7 24-24V203c25-14 46.2-34.6 61.1-60.2l15.6-26.7c6.7-11.4 2.8-26.1-8.6-32.8s-26.1-2.8-32.8 8.6l-15.6 26.7c-20.8 35.6-58.9 57.4-100 57.4M224 336h-64V220.9c10.4 2.1 21 3.1 31.8 3.1 10.9 0 21.7-1.1 32.2-3.2z"
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
                  d="M224 64a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-96 0a64 64 0 1 1 128 0 64 64 0 1 1-128 0m-16 124c-27.8-14.9-51.4-37.4-67.5-65.8l-10.4-18.3c-4.4-7.7-1.7-17.5 6-21.8s17.5-1.7 21.8 6l10.4 18.3c24.4 43 70.1 69.6 119.5 69.6 48.9 0 94.1-26 118.7-68.2l11.6-19.9c4.5-7.6 14.2-10.2 21.9-5.8s10.2 14.2 5.8 21.9l-11.6 19.9c-16 27.5-39.1 49.4-66.2 63.9V496c0 8.8-7.2 16-16 16s-16-7.2-16-16V384h-96v112c0 8.8-7.2 16-16 16s-16-7.2-16-16zm32 13.1V352h96V201c-15.4 4.6-31.6 7-48.1 7-16.4 0-32.5-2.4-47.9-6.9"
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
                  d="M192 16a48 48 0 1 1 0 96 48 48 0 1 1 0-96m0 112a64 64 0 1 0 0-128 64 64 0 1 0 0 128m0 48c-49.6 0-96.1-23.9-125-64.2L46.5 83.3c-2.6-3.6-7.6-4.4-11.2-1.8s-4.4 7.6-1.8 11.2L54 121.2c31.9 44.4 83.3 70.8 138 70.8s106.1-26.4 138-70.8l20.5-28.5c2.6-3.6 1.8-8.6-1.8-11.2s-8.6-1.8-11.2 1.8L317 111.8c-28.9 40.3-75.4 64.2-125 64.2m-64 56c0-4.4-3.6-8-8-8s-8 3.6-8 8v248c0 17.7 14.3 32 32 32s32-14.3 32-32v-80c0-8.8 7.2-16 16-16s16 7.2 16 16v80c0 17.7 14.3 32 32 32s32-14.3 32-32V232c0-4.4-3.6-8-8-8s-8 3.6-8 8v248c0 8.8-7.2 16-16 16s-16-7.2-16-16v-80c0-17.7-14.3-32-32-32s-32 14.3-32 32v80c0 8.8-7.2 16-16 16s-16-7.2-16-16z"
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
                  d="M128 64a64 64 0 1 1 128 0 64 64 0 1 1-128 0"
                />
                <path
                  className="aps-icon-foreground"
                  d="M155.7 170.2c11.7 3.8 24 5.8 36.6 5.8 39.9 0 77.1-20.2 98.8-53.6l18.1-27.9c9.6-14.8 29.5-19 44.3-9.4s19 29.5 9.4 44.3l-18.2 27.9c-18.2 28-43.5 50-72.7 64.2V480c0 17.7-14.3 32-32 32s-32-14.3-32-32v-96h-32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V221.4c-28.4-14-53.1-35.3-71.1-62.4l-19.5-29.2c-9.8-14.7-5.8-34.6 8.9-44.4s34.6-5.8 44.4 8.9l19.5 29.2c14.3 21.5 35.1 37.4 58.8 45.8z"
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
