import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const DiamondTurnRightIcon: React.FC<
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
                  d="M227.7 11.7c15.6-15.6 40.9-15.6 56.6 0l216 216c15.6 15.6 15.6 40.9 0 56.6l-216 216c-15.6 15.6-40.9 15.6-56.6 0l-216-216c-15.6-15.6-15.6-40.9 0-56.6zm87.6 137c-4.6-4.6-11.5-5.9-17.4-3.5s-9.9 8.3-9.9 14.8v56h-64c-35.3 0-64 28.7-64 64v48c0 13.3 10.7 24 24 24s24-10.7 24-24v-48c0-8.8 7.2-16 16-16h64v56c0 6.5 3.9 12.3 9.9 14.8s12.9 1.1 17.4-3.5l80-80c6.2-6.2 6.2-16.4 0-22.6z"
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
                  d="M50.9 249 249 50.9c1.9-1.9 4.4-2.9 7-2.9s5.2 1 7 2.9L461.1 249c1.9 1.9 2.9 4.4 2.9 7s-1 5.2-2.9 7L263 461.1c-1.9 1.9-4.4 2.9-7 2.9s-5.2-1-7-2.9L50.9 263c-1.9-1.9-2.9-4.4-2.9-7s1-5.2 2.9-7M215 17 17 215C6.1 225.9 0 240.6 0 256s6.1 30.1 17 41l198 198c10.9 10.9 25.6 17 41 17s30.1-6.1 41-17l198-198c10.9-10.9 17-25.6 17-41s-6.1-30.1-17-41L297 17C286.1 6.1 271.4 0 256 0s-30.1 6.1-41 17m100.3 131.7c-4.6-4.6-11.5-5.9-17.4-3.5s-9.9 8.3-9.9 14.8v40h-48c-35.3 0-64 28.7-64 64v48c0 13.3 10.7 24 24 24s24-10.7 24-24v-48c0-8.8 7.2-16 16-16h48v40c0 6.5 3.9 12.3 9.9 14.8s12.9 1.1 17.4-3.5l64-64c6.2-6.2 6.2-16.4 0-22.6z"
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
                  d="M261.7 34.3c-3.1-3.1-8.2-3.1-11.3 0l-216 216c-3.1 3.1-3.1 8.2 0 11.3l216 216c3.1 3.1 8.2 3.1 11.3 0l216-216c3.1-3.1 3.1-8.2 0-11.3zm-34-22.6c15.6-15.6 40.9-15.6 56.6 0l216 216c15.6 15.6 15.6 40.9 0 56.6l-216 216c-15.6 15.6-40.9 15.6-56.6 0l-216-216c-15.6-15.6-15.6-40.9 0-56.6zm65 137c6.2-6.2 16.4-6.2 22.6 0l64 64c6.2 6.2 6.2 16.4 0 22.6l-64 64c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l36.7-36.7H232c-13.3 0-24 10.7-24 24v56c0 8.8-7.2 16-16 16s-16-7.2-16-16v-56c0-30.9 25.1-56 56-56h97.4l-36.7-36.7c-6.2-6.2-6.2-16.4 0-22.6"
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
                  d="M273 23c-9.4-9.4-24.6-9.4-33.9 0L23 239c-9.4 9.4-9.4 24.6 0 33.9L239 489c9.4 9.4 24.6 9.4 33.9 0L489 273c9.4-9.4 9.4-24.6 0-33.9zm-45.3-11.3c15.6-15.6 40.9-15.6 56.6 0l216 216c15.6 15.6 15.6 40.9 0 56.6l-216 216c-15.6 15.6-40.9 15.6-56.6 0l-216-216c-15.6-15.6-15.6-40.9 0-56.6zm81.9 134.6 72 72c3.1 3.1 3.1 8.2 0 11.3l-72 72c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l58.4-58.3H232c-17.7 0-32 14.3-32 32v64c0 4.4-3.6 8-8 8s-8-3.6-8-8v-64c0-26.5 21.5-48 48-48h124.7l-58.3-58.3c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0z"
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
                  d="M227.7 11.7c15.6-15.6 40.9-15.6 56.6 0l216 216c15.6 15.6 15.6 40.9 0 56.6l-216 216c-15.6 15.6-40.9 15.6-56.6 0l-216-216c-15.6-15.6-15.6-40.9 0-56.6zm87.6 137c-4.6-4.6-11.5-5.9-17.4-3.5s-9.9 8.3-9.9 14.8v56h-64c-35.3 0-64 28.7-64 64v48c0 13.3 10.7 24 24 24s24-10.7 24-24v-48c0-8.8 7.2-16 16-16h64v56c0 6.5 3.9 12.3 9.9 14.8s12.9 1.1 17.4-3.5l80-80c6.2-6.2 6.2-16.4 0-22.6z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M297.9 145.2c6-2.5 12.9-1.1 17.4 3.5l80 80c6.2 6.2 6.2 16.4 0 22.6l-80 80c-4.6 4.6-11.5 5.9-17.4 3.5s-9.9-8.3-9.9-14.8v-56h-64c-8.8 0-16 7.2-16 16v48c0 13.3-10.7 24-24 24s-24-10.7-24-24v-48c0-35.3 28.7-64 64-64h64v-56c0-6.5 3.9-12.3 9.9-14.8"
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
