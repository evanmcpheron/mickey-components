import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const MittenIcon: React.FC<
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
                  d="M352 384H64L5.4 178.9C1.8 166.4 0 153.4 0 140.3 0 62.8 62.8 0 140.3 0h3.4c66 0 123.5 44.9 139.5 108.9l31.4 125.8 17.6-20.1c12.6-14.4 30.7-22.6 49.8-22.6h2.8c34.9 0 63.3 28.3 63.3 63.3 0 15.9-6 31.2-16.8 42.9zM32 448c0-17.7 14.3-32 32-32h288c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32z"
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
                  d="M0 142.6C0 63.8 63.8 0 142.6 0c63.7 0 119.6 42.2 137.1 103.4l21.4 75c15.7-11.8 35-18.4 55.2-18.4h4.5c48.2 0 87.3 39.1 87.3 87.3 0 21.9-8.3 43.1-23.1 59.2L353.3 384H304v-8c0-6 2.3-11.8 6.4-16.3l79.2-85.8c6.7-7.3 10.4-16.8 10.4-26.6 0-21.7-17.6-39.3-39.3-39.3h-4.5c-14.6 0-28.3 7.3-36.4 19.5l-9.5 14.2c-5.2 7.8-14.4 11.8-23.7 10.4s-16.8-8.1-19.4-17.1l-33.7-118.4C221.9 76 184.8 48 142.6 48 90.3 48 48 90.3 48 142.6v2.5c0 7.9 1 15.8 2.9 23.5l52.4 209.5c.5 1.9.7 3.9.7 5.8H55.3l-51-203.6C1.5 168.8 0 157 0 145.1zM64 416h288c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32v-32c0-17.7 14.3-32 32-32"
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
                  d="M0 144.2C0 64.6 65.1 0 144.6 0 208 0 264.4 41.5 282.8 102.3l24.6 81.3c15.3-15 36-23.6 57.9-23.6h1.8c44.7 0 80.9 36.2 80.9 80.9 0 18.6-6.4 36.6-18.1 51l-61.8 76H328c.6-1.7 1.5-3.3 2.6-4.7l74.4-91.4c7.1-8.7 11-19.6 11-30.9 0-27-21.9-48.9-48.9-48.9h-1.8c-17.6 0-34 9.1-43.2 24.1l-7 11.4c-3.3 5.4-9.4 8.3-15.7 7.5s-11.4-5.2-13.3-11.2l-33.9-112.2C237.9 64.4 194 32 144.6 32 82.6 32 32 82.4 32 144.2c0 9.2 1.1 18.3 3.3 27.2L84.5 368h-33L4.3 179.2C1.4 167.7 0 156 0 144.2M64 432v48h288v-48zm-32 0c0-17.7 14.3-32 32-32h288c17.7 0 32 14.3 32 32v48c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32z"
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
                  d="M0 136C0 60.9 60.9 0 136 0h16.3c60.3 0 113.3 39.7 130.4 97.5L316 210.3l2.5-3.7c13.4-19.2 35.2-30.6 58.5-30.6 39.2 0 71 31.8 71 71v1c0 17.4-6.3 34.3-17.8 47.4L366.6 368h-21.2l72.8-83.2c8.9-10.2 13.8-23.3 13.8-36.9v-1c0-30.4-24.6-55-55-55-18 0-34.9 8.9-45.2 23.7L319.7 233c-1.8 2.5-4.8 3.8-7.8 3.3s-5.5-2.7-6.4-5.6L267.4 102c-15.1-51-61.9-86-115.1-86H136C69.7 16 16 69.7 16 136v8.2c0 9.8 1.2 19.6 3.6 29.1L68.2 368H51.8L4.1 177.2c-2.7-10.8-4.1-21.8-4.1-33zm64 280c-8.8 0-16 7.2-16 16v48c0 8.8 7.2 16 16 16h288c8.8 0 16-7.2 16-16v-48c0-8.8-7.2-16-16-16zm-32 16c0-17.7 14.3-32 32-32h288c17.7 0 32 14.3 32 32v48c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32z"
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
                  d="M64 384c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h288c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32z"
                />
                <path
                  className="aps-icon-foreground"
                  d="m314.7 234.7-31.5-125.8C267.2 44.9 209.7 0 143.8 0h-3.4C62.8 0 0 62.8 0 140.3c0 13 1.8 26 5.4 38.6L64 384h288l79.2-85.8c10.8-11.7 16.8-27 16.8-42.9 0-34.9-28.3-63.3-63.3-63.3H382c-19 0-37.2 8.2-49.7 22.6z"
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
