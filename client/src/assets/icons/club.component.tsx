import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ClubIcon: React.FC<
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
                  d="M380 160.1c2.6-10.2 4-21 4-32.1C384 57.3 326.7 0 256 0S128 57.3 128 128c0 11.1 1.4 21.8 4 32.1-1.3 0-2.7-.1-4-.1C57.3 160 0 217.3 0 288s57.3 128 128 128c38.2 0 72.5-16.8 96-43.3V448h-32c-17.7 0-32 14.3-32 32s14.3 32 32 32h128c17.7 0 32-14.3 32-32s-14.3-32-32-32h-32v-75.3c23.5 26.6 57.8 43.3 96 43.3 70.7 0 128-57.3 128-128s-57.3-128-128-128c-1.4 0-2.7 0-4 .1"
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
                  d="M352 146.4V144c0-53-43-96-96-96s-96 43-96 96v2.4c.6 22.9-15.1 42.9-37.4 48-42.7 9.7-74.6 48-74.6 93.6 0 53 43 96 96 96 30.1 0 57-13.8 74.7-35.7 9.1-11.3 22.8-17.8 37.3-17.8s28.2 6.5 37.3 17.8C311 370.2 337.9 384 368 384c53 0 96-43 96-96 0-45.6-31.9-83.9-74.6-93.6-22.3-5.1-37.9-25.1-37.4-48M368 432c-27.9 0-53.9-7.9-76-21.7-4.1-2.6-8.1-5.4-12-8.3v62h48c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-13.3 0-24-10.7-24-24s10.7-24 24-24h48v-62c-3.8 3-7.8 5.8-12 8.3-22.1 13.7-48.1 21.7-76 21.7C64.5 432 0 367.5 0 288c0-68.5 47.9-125.9 112-140.4V144C112 64.5 176.5 0 256 0s144 64.5 144 144v3.6c64.1 14.5 112 71.9 112 140.4 0 79.5-64.5 144-144 144"
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
                  d="M358.3 154.9c1.1-6.1 1.7-12.4 1.7-18.9 0-57.4-46.6-104-104-104S152 78.6 152 136c0 6.5.6 12.8 1.7 18.9 1.6 8.8-.5 17.9-5.9 25s-13.5 11.7-22.4 12.6C73 197.8 32 242.1 32 296c0 57.4 46.6 104 104 104 39.7 0 74.2-22.2 91.8-55 5.6-10.4 16.4-16.9 28.2-16.9s22.6 6.5 28.2 16.9c17.6 32.8 52.1 55 91.8 55 57.4 0 104-46.6 104-104 0-53.9-41-98.2-93.4-103.5-8.9-.9-17-5.5-22.4-12.6s-7.5-16.2-5.9-25m31.5 5.8c7.4.7 14.7 2.1 21.7 4C469.4 180.3 512 233.1 512 296c0 75.1-60.9 136-136 136-39.4 0-74.9-16.8-99.7-43.5-1.5-1.6-2.9-3.2-4.3-4.8V480h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16h64v-96.4c-1.4 1.6-2.8 3.3-4.3 4.8-24.8 26.8-60.3 43.6-99.7 43.6C60.9 432 0 371.1 0 296c0-62.9 42.6-115.8 100.6-131.3 7-1.9 14.3-3.2 21.7-4-1.3-7.1-2.1-14.5-2.2-22V136C120 60.9 180.9 0 256 0s136 60.9 136 136v2.7c-.1 7.5-.9 14.8-2.2 22"
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
                  d="M372.5 164.7c-1.1 4.5-.2 9.3 2.5 13.1s7 6.2 11.6 6.6C447.9 189.9 496 241.3 496 304c0 66.3-53.7 120-120 120-45.8 0-85.7-25.7-105.9-63.5-2.8-5.2-8.2-8.5-14.1-8.5s-11.3 3.2-14.1 8.5C221.7 398.3 181.8 424 136 424c-66.3 0-120-53.7-120-120 0-62.7 48.1-114.1 109.3-119.5 4.7-.4 8.9-2.8 11.6-6.6s3.6-8.6 2.5-13.1c-2.3-9.2-3.5-18.8-3.5-28.7 0-66.3 53.7-120 120-120s120 53.7 120 120c0 9.9-1.2 19.5-3.5 28.7zm31.4 6.2q-7.8-1.65-15.9-2.4c1.3-5.2 2.2-10.4 2.9-15.8.7-5.5 1-11.1 1-16.7C392 60.9 331.1 0 256 0S120 60.9 120 136c0 5.7.3 11.2 1 16.7.7 5.4 1.6 10.6 2.9 15.8q-8.1.75-15.9 2.4C46.3 183.8 0 238.5 0 304c0 75.1 60.9 136 136 136 45.5 0 85.7-22.3 110.4-56.6.5-.8 1.1-1.5 1.6-2.3V496h-80c-4.4 0-8 3.6-8 8s3.6 8 8 8h176c4.4 0 8-3.6 8-8s-3.6-8-8-8h-80V381.2c.5.8 1.1 1.5 1.6 2.3C290.3 417.7 330.5 440 376 440c75.1 0 136-60.9 136-136 0-65.5-46.3-120.2-108-133.1z"
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
                  d="M288 372.7V256c0-17.7-14.3-32-32-32s-32 14.3-32 32v116.7c-23.5 26.6-57.8 43.3-96 43.3C57.3 416 0 358.7 0 288s57.3-128 128-128c1.4 0 2.7 0 4 .1-2.6-10.2-4-21-4-32.1C128 57.3 185.3 0 256 0s128 57.3 128 128c0 11.1-1.4 21.8-4 32.1 1.3 0 2.7-.1 4-.1 70.7 0 128 57.3 128 128s-57.3 128-128 128c-38.2 0-72.5-16.8-96-43.3"
                />
                <path
                  className="aps-icon-foreground"
                  d="M256 224c17.7 0 32 14.3 32 32v192h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H192c-17.7 0-32-14.3-32-32s14.3-32 32-32h32V256c0-17.7 14.3-32 32-32"
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
