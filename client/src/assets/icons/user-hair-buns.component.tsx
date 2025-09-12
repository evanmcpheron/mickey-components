import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const UserHairBunsIcon: React.FC<
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
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M304 128v16c0 44.2-35.8 80-80 80s-80-35.8-80-80v-16c0-5.5.6-10.8 1.6-16H160c26.2 0 49.4-12.6 64-32 14.6 19.4 37.8 32 64 32h14.4c1 5.2 1.6 10.5 1.6 16M84 192c7 0 13.7-1.6 19.6-4.6 17.8 49.3 65 84.6 120.4 84.6s102.7-35.3 120.4-84.6c5.9 2.9 12.5 4.6 19.6 4.6 24.3 0 44-19.7 44-44v-40c0-24.3-19.7-44-44-44-9.3 0-17.9 2.9-25 7.8C318.2 29.3 274.5 0 224 0s-94.2 29.3-115 71.8c-7.1-4.9-15.7-7.8-25-7.8-24.3 0-44 19.7-44 44v40c0 24.3 19.7 44 44 44m77.3 128C72.2 320 0 392.2 0 481.3c0 17 13.8 30.7 30.7 30.7h386.6c17 0 30.7-13.8 30.7-30.7 0-89.1-72.2-161.3-161.3-161.3z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M304 128v16c0 44.2-35.8 80-80 80s-80-35.8-80-80v-16c0-5.5.6-10.8 1.6-16H160c26.2 0 49.4-12.6 64-32 14.6 19.4 37.8 32 64 32h14.4c1 5.2 1.6 10.5 1.6 16M84 192c7 0 13.7-1.6 19.6-4.6 17.8 49.3 65 84.6 120.4 84.6s102.7-35.3 120.4-84.6c5.9 2.9 12.5 4.6 19.6 4.6 24.3 0 44-19.7 44-44v-40c0-24.3-19.7-44-44-44-9.3 0-17.9 2.9-25 7.8C318.2 29.3 274.5 0 224 0s-94.2 29.3-115 71.8c-7.1-4.9-15.7-7.8-25-7.8-24.3 0-44 19.7-44 44v40c0 24.3 19.7 44 44 44M49.3 464c8.3-54.4 55.3-96 112-96h125.4c56.7 0 103.7 41.6 112 96zM0 481.3c0 17 13.8 30.7 30.7 30.7h386.6c17 0 30.7-13.8 30.7-30.7 0-89.1-72.2-161.3-161.3-161.3H161.3C72.2 320 0 392.2 0 481.3"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M314.5 96h-32c-12.7 0-24.9-5.1-33.9-14.1l-13.3-13.2c-6.2-6.2-16.4-6.2-22.6 0l-13.3 13.2c-9 9-21.2 14.1-33.9 14.1h-32c13.2-37.3 48.7-64 90.5-64s77.4 26.7 90.5 64m5.5 32v16c0 53-43 96-96 96s-96-43-96-96v-16h37.5c21.2 0 41.6-8.4 56.6-23.4l1.9-1.9 1.9 1.9c15 15 35.4 23.4 56.6 23.4zm-96 144c46.7 0 87.5-25 109.9-62.3 8.7 8.8 20.8 14.3 34.1 14.3 26.5 0 48-21.5 48-48v-64c0-26.5-21.5-48-48-48-10.6 0-20.4 3.4-28.3 9.2C319.2 29.9 275.1 0 224 0s-95.2 29.9-115.7 73.2C100.4 67.4 90.6 64 80 64c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48 13.4 0 25.4-5.5 34.1-14.3C136.5 247 177.3 272 224 272m128-96v-64c0-8.8 7.2-16 16-16s16 7.2 16 16v64c0 8.8-7.2 16-16 16s-16-7.2-16-16M168 336h112c75.1 0 136 60.9 136 136v8H32v-8c0-75.1 60.9-136 136-136m0-32C75.2 304 0 379.2 0 472v8c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32v-8c0-92.8-75.2-168-168-168zM96 144v32c0 8.8-7.2 16-16 16s-16-7.2-16-16v-64c0-8.8 7.2-16 16-16s16 7.2 16 16v32"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M333.4 104h-50.9c-14.9 0-29.1-5.9-39.6-16.4l-13.2-13.3c-3.1-3.1-8.2-3.1-11.3 0l-13.3 13.3a56.1 56.1 0 0 1-39.6 16.4h-50.9c11-50.3 55.8-88 109.4-88s98.4 37.7 109.4 88m2.3 16c.2 2.6.3 5.3.3 8v16c0 61.9-50.1 112-112 112s-112-50.1-112-112v-16c0-2.7.1-5.4.3-8h53.2c19.1 0 37.4-7.6 50.9-21.1l7.6-7.6 7.6 7.6c13.5 13.5 31.8 21.1 50.9 21.1zM224 272c50.7 0 94.5-29.5 115.2-72.2C345.4 214 359.5 224 376 224c22.1 0 40-17.9 40-40v-80c0-22.1-17.9-40-40-40-13.6 0-25.6 6.8-32.8 17.2C324.5 33.6 278.2 0 224 0S123.5 33.6 104.8 81.2C97.6 70.8 85.6 64 72 64c-22.1 0-40 17.9-40 40v80c0 22.1 17.9 40 40 40 16.5 0 30.6-10 36.8-24.2C129.5 242.5 173.3 272 224 272m128-88v-80c0-13.3 10.7-24 24-24s24 10.7 24 24v80c0 13.3-10.7 24-24 24s-24-10.7-24-24M168 320h112c83.9 0 152 68.1 152 152v8c0 8.8-7.2 16-16 16H32c-8.8 0-16-7.2-16-16v-8c0-83.9 68.1-152 152-152m0-16C75.2 304 0 379.2 0 472v8c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32v-8c0-92.8-75.2-168-168-168zM96 144v40c0 13.3-10.7 24-24 24s-24-10.7-24-24v-80c0-13.3 10.7-24 24-24s24 10.7 24 24v40"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M224 80c14.6 19.4 37.8 32 64 32h32v64c0 53-43 96-96 96s-96-43-96-96v-64h32c26.2 0 49.4-12.6 64-32"
                />
                <path
                  className="aps-icon-foreground"
                  d="M109.8 70.1C131 28.5 174.1 0 224 0s93 28.5 114.2 70.1c6.8-3.9 14.7-6.1 23.1-6.1 25.8 0 46.7 20.9 46.7 46.7V136c0 30.9-25.1 56-56 56h-33.3c.9-5.2 1.3-10.5 1.3-16v-64h-32c-26.2 0-49.4-12.6-64-32-14.6 19.4-37.8 32-64 32h-32v64c0 5.5.5 10.8 1.3 16H96c-30.9 0-56-25.1-56-56v-25.3C40 84.9 60.9 64 86.7 64c8.4 0 16.2 2.2 23.1 6.1M0 481.3C0 392.2 72.2 320 161.3 320h125.4c89.1 0 161.3 72.2 161.3 161.3 0 17-13.8 30.7-30.7 30.7H30.7C13.8 512 0 498.2 0 481.3"
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
