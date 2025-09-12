import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const LayerMinusIcon: React.FC<
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
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M408 56c-13.3 0-24 10.7-24 24s10.7 24 24 24h112c13.3 0 24-10.7 24-24s-10.7-24-24-24zm-96.5 77.2c-14.9-6.9-32.1-6.9-47 0l-218.6 101C37.4 238.1 32 246.6 32 256s5.4 17.9 13.9 21.8l218.6 101c14.9 6.9 32.1 6.9 47 0l218.6-101c8.5-3.9 13.9-12.4 13.9-21.8s-5.4-17.9-13.9-21.8zm13.4 274.7a88.1 88.1 0 0 1-73.8 0l-152-70.2-53.2 24.5C37.4 366.1 32 374.6 32 384s5.4 17.9 13.9 21.8l218.6 101c14.9 6.9 32.1 6.9 47 0l218.6-101c8.5-3.9 13.9-12.4 13.9-21.8s-5.4-17.9-13.9-21.8l-53.2-24.6-152 70.2z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M408 60h112c11 0 20 9 20 20s-9 20-20 20H408c-11 0-20-9-20-20s9-20 20-20m-144.8 73.1c7.8-3.4 16.3-5.1 24.8-5.1s17 1.7 24.8 5.1l209.3 89.7c13.3 5.7 21.9 18.8 21.9 33.2s-8.6 27.5-21.9 33.2l-209.3 89.7c-7.8 3.4-16.3 5.1-24.8 5.1s-17-1.7-24.8-5.1L53.9 289.2C40.6 283.5 32 270.5 32 256s8.6-27.5 21.9-33.2zM288 176c-2 0-4 .4-5.9 1.2L98.3 256l183.8 78.8c1.9.8 3.9 1.2 5.9 1.2s4-.4 5.9-1.2L477.7 256l-183.8-78.8c-1.9-.8-3.9-1.2-5.9-1.2M53.9 350.8l31.2-13.4 60.9 26.1L98.3 384l183.8 78.8c1.9.8 3.9 1.2 5.9 1.2s4-.4 5.9-1.2L477.7 384 430 363.5l60.9-26.1 31.2 13.4c13.3 5.7 21.9 18.8 21.9 33.2s-8.6 27.5-21.9 33.2l-209.3 89.7c-7.8 3.4-16.3 5.1-24.8 5.1s-17-1.7-24.8-5.1L53.9 417.2C40.6 411.5 32 398.5 32 384s8.6-27.5 21.9-33.2"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M408 64h112c8.8 0 16 7.2 16 16s-7.2 16-16 16H408c-8.8 0-16-7.2-16-16s7.2-16 16-16m-141.8 68.7c6.9-3.1 14.3-4.7 21.8-4.7s15 1.6 21.8 4.7l217.4 97.5c10.2 4.6 16.8 14.7 16.8 25.9s-6.6 21.3-16.8 25.9l-217.4 97.3c-6.9 3.1-14.3 4.7-21.8 4.7s-15-1.6-21.8-4.7L48.8 281.9C38.6 277.3 32 267.2 32 256s6.6-21.3 16.8-25.9l217.4-97.5zM288 160c-3 0-6 .6-8.8 1.9L69.3 256l210 94.1c2.8 1.2 5.7 1.9 8.8 1.9s6-.6 8.8-1.9l210-94.1-210-94.1c-2.8-1.2-5.7-1.9-8.8-1.9zM48.8 358.1l45.9-20.6 39.1 17.5-64.5 29 210 94.1c2.8 1.2 5.7 1.9 8.8 1.9s6-.6 8.8-1.9l210-94.1-64.5-28.9 39.1-17.5 45.9 20.6c10.2 4.6 16.8 14.7 16.8 25.9s-6.6 21.3-16.8 25.9l-217.6 97.3c-6.9 3.1-14.3 4.7-21.8 4.7s-15-1.6-21.8-4.7L48.8 409.9C38.6 405.3 32 395.2 32 384s6.6-21.3 16.8-25.9"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M408 72h112c4.4 0 8 3.6 8 8s-3.6 8-8 8H408c-4.4 0-8-3.6-8-8s3.6-8 8-8m-138.6 60.1c5.8-2.7 12.2-4.1 18.6-4.1s12.8 1.4 18.6 4.1l225.5 105.3c7.3 3.3 11.9 10.6 11.9 18.6s-4.6 15.3-11.9 18.6L306.6 379.9c-5.8 2.7-12.2 4.1-18.6 4.1s-12.8-1.4-18.6-4.1L43.9 274.6C36.6 271.3 32 264 32 256s4.6-15.3 11.9-18.6zM288 144c-4.1 0-8.2.9-11.9 2.6L50.6 251.9c-1.6.7-2.6 2.4-2.6 4.1s1 3.4 2.6 4.1l225.5 105.3c3.7 1.7 7.8 2.6 11.9 2.6s8.2-.9 11.9-2.6l225.5-105.3c1.6-.7 2.6-2.4 2.6-4.1s-1-3.4-2.6-4.1L299.9 146.6c-3.7-1.7-7.8-2.6-11.9-2.6M43.9 365.4l59.4-27.7 18.9 8.8-71.6 33.4c-1.6.7-2.6 2.4-2.6 4.1s1 3.4 2.6 4.1l225.5 105.3c3.7 1.7 7.8 2.6 11.9 2.6s8.2-.9 11.9-2.6l225.5-105.3c1.6-.7 2.6-2.4 2.6-4.1s-1-3.4-2.6-4.1l-71.5-33.4 18.9-8.8 59.4 27.7c7.2 3.3 11.8 10.6 11.8 18.6s-4.6 15.3-11.9 18.6L306.6 507.9c-5.8 2.7-12.2 4.1-18.6 4.1s-12.8-1.4-18.6-4.1L43.9 402.6C36.6 399.3 32 392 32 384s4.6-15.3 11.9-18.6"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M264.5 133.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0l-218.6-101c-8.5-4-13.9-12.5-13.9-21.8s5.4-17.9 13.9-21.8zm212.4 204.4 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0l-218.6-101c-8.5-4-13.9-12.5-13.9-21.8s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2a88.1 88.1 0 0 0 73.8 0z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M384 80c0-13.3 10.7-24 24-24h112c13.3 0 24 10.7 24 24s-10.7 24-24 24H408c-13.3 0-24-10.7-24-24"
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
