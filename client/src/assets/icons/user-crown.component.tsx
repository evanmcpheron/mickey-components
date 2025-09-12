import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const UserCrownIcon: React.FC<
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
                  d="M144 128v16c0 44.2 35.8 80 80 80s80-35.8 80-80v-16zm0-108.8c10.2 7.5 23.8 8.3 34.9 2L209.1 4c4.6-2.6 9.7-4 14.9-4s10.4 1.4 14.9 4l30.2 17.2c11 6.3 24.7 5.5 34.9-2l.1-.1c.3-.2.6-.4.8-.6l3-2.4 15.7-12.6c2.8-2.3 6.4-3.5 10-3.5h2.4c8.8 0 16 7.2 16 16v128c0 70.7-57.3 128-128 128S96 214.7 96 144V16c0-8.8 7.2-16 16-16h2.4c3.6 0 7.2 1.2 10 3.5L140 16l3 2.4c.3.2.6.4.8.6l.1.1zM0 472c0-92.8 75.2-168 168-168h112c92.8 0 168 75.2 168 168v8c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32z"
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
                  d="M144 128h160v16c0 44.2-35.8 80-80 80s-80-35.8-80-80zm0-108.8-.1-.1c-.3-.2-.6-.4-.8-.6L140 16 124.4 3.5c-2.9-2.3-6.4-3.5-10-3.5H112c-8.8 0-16 7.2-16 16v128c0 70.7 57.3 128 128 128s128-57.3 128-128V16c0-8.8-7.2-16-16-16h-2.4c-3.6 0-7.2 1.2-10 3.5L308 16l-3 2.4c-.3.2-.6.4-.8.6l-.1.1c-10.2 7.5-23.8 8.3-34.9 2L238.9 4c-4.6-2.6-9.7-4-14.9-4s-10.4 1.4-14.9 4l-30.2 17.2c-11 6.3-24.7 5.5-34.9-2M168 352h112c63.6 0 115.6 49.5 119.7 112H48.3c4.1-62.5 56.2-112 119.7-112m0-48C75.2 304 0 379.2 0 472v8c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32v-8c0-92.8-75.2-168-168-168z"
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
                  d="M238.7 4.4C234.3 1.5 229.2 0 224 0s-10.3 1.5-14.7 4.4l-32.4 21.7c-5.4 3.6-12.4 3.6-17.8 0L124 2.7C121.4.9 118.3 0 115.2 0H112c-8.8 0-16 7.2-16 16v128c0 70.7 57.3 128 128 128s128-57.3 128-128V16c0-8.8-7.2-16-16-16h-3.2c-3.2 0-6.2.9-8.9 2.7l-35 23.4c-5.4 3.6-12.4 3.6-17.8 0zM320 112H128V43.8l13.4 8.9c16.1 10.7 37.1 10.7 53.3 0L224 33.1l29.4 19.6c16.1 10.7 37.1 10.7 53.3 0l13.3-8.9zm-192 32h192c0 53-43 96-96 96s-96-43-96-96m40 192h112c75.1 0 136 60.9 136 136v8H32v-8c0-75.1 60.9-136 136-136m0-32C75.2 304 0 379.2 0 472v8c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32v-8c0-92.8-75.2-168-168-168z"
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
                  d="m176.9 45.3 41.3-27.6c1.7-1.1 3.7-1.8 5.8-1.8s4.1.6 5.8 1.8l41.3 27.6c5 3.4 11.6 3.6 16.8.6L336 18.4V112H112V18.4l48.1 27.5c5.3 3 11.8 2.8 16.8-.6M336 128v16c0 61.9-50.1 112-112 112s-112-50.1-112-112v-16zm-56-96L238.7 4.4C234.3 1.5 229.2 0 224 0s-10.3 1.5-14.7 4.4L168 32 114.9 1.7C113 .6 110.8 0 108.6 0 101.7 0 96 5.7 96 12.6V144c0 70.7 57.3 128 128 128s128-57.3 128-128V12.6c0-7-5.7-12.6-12.6-12.6-2.2 0-4.4.6-6.3 1.7zM168 320h112c83.9 0 152 68.1 152 152v8c0 8.8-7.2 16-16 16H32c-8.8 0-16-7.2-16-16v-8c0-83.9 68.1-152 152-152m0-16C75.2 304 0 379.2 0 472v8c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32v-8c0-92.8-75.2-168-168-168z"
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
                  d="M96 128h256c0 70.7-57.3 128-128 128S96 198.7 96 128"
                />
                <path
                  className="aps-icon-foreground"
                  d="M352 80v48H96V16c0-8.8 7.2-16 16-16h2.4c3.6 0 7.2 1.2 10 3.5L140 16l3 2.4c.3.2.6.4.8.6l.1.1c10.2 7.5 23.8 8.3 34.9 2L209.1 4c4.6-2.6 9.7-4 14.9-4s10.4 1.4 14.9 4l30.2 17.2c11 6.3 24.7 5.5 34.9-2l.1-.1c.3-.2.6-.4.8-.6l3-2.4 15.7-12.6c2.8-2.3 6.4-3.5 10-3.5h2.4c8.8 0 16 7.2 16 16v64M0 472c0-92.8 75.2-168 168-168h112c92.8 0 168 75.2 168 168v8c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32z"
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
