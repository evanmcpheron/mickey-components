import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const LocationCheckIcon: React.FC<
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
                  d="M215.7 499.2C267 435 384 279.4 384 192 384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2 12.3 15.3 35.1 15.3 47.4 0M289 155.6 182.3 262.3c-9.4 9.4-24.6 9.4-33.9 0L95 209c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l36.4 36.4 89.7-89.8c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
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
                  d="M336 192c0-79.5-64.5-144-144-144S48 112.5 48 192c0 12.4 4.5 31.6 15.3 57.2 10.5 24.8 25.4 52.2 42.5 79.9 28.5 46.2 61.5 90.8 86.2 122.6 24.8-31.8 57.8-76.4 86.2-122.6 17.1-27.7 32-55.1 42.5-79.9 10.8-25.6 15.3-44.8 15.3-57.2m48 0c0 87.4-117 243-168.3 307.2-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192 0 86 86 0 192 0s192 86 192 192m-95-20.4L182.3 278.3c-9.4 9.4-24.6 9.4-33.9 0L95 225c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l36.4 36.4 89.7-89.8c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
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
                  d="M352 192c0-88.4-71.6-160-160-160S32 103.6 32 192c0 15.6 5.4 37 16.6 63.4 10.9 25.9 26.2 54 43.6 82.1 34.1 55.3 74.4 108.2 99.9 140 25.4-31.8 65.8-84.7 99.9-140 17.3-28.1 32.7-56.3 43.6-82.1 11-26.4 16.4-47.8 16.4-63.4m32 0c0 87.4-117 243-168.3 307.2-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192 0 86 86 0 192 0s192 86 192 192m-100.7-42L176.6 256.6c-6.2 6.2-16.4 6.2-22.6 0l-53.3-53.3c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l42 42 95.4-95.4c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"
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
                  d="M368 192c0-97.2-78.8-176-176-176S16 94.8 16 192c0 18.7 6.4 42.5 17.8 69.6 11.3 26.9 27.1 55.8 44.7 84.3 35.2 57 76.8 111.4 102.3 143.2 5.9 7.3 16.6 7.3 22.4 0 25.5-31.8 67.1-86.2 102.3-143.2 17.6-28.5 33.4-57.4 44.7-84.3 11.4-27.1 17.8-50.9 17.8-69.6m16 0c0 87.4-117 243-168.3 307.2-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192 0 86 86 0 192 0s192 86 192 192m-106.3-47.7L171 251c-3.1 3.1-8.2 3.1-11.3 0l-53.3-53.3c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0l47.6 47.6 101-101c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3z"
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
                  d="M0 192c0 87.4 117 243 168.3 307.2 6.1 7.7 14.9 11.5 23.7 11.5s17.6-3.8 23.7-11.5C267 435 384 279.4 384 192 384 86 298 0 192 0S0 86 0 192m88 0c0 6.1 2.3 12.3 7 17l53.3 53.3c4.7 4.7 10.8 7 17 7s12.3-2.3 17-7L289 155.6c4.7-4.7 7-10.8 7-17s-2.3-12.3-7-17-10.8-7-17-7-12.3 2.3-17 7l-89.7 89.7-36.4-36.4c-9.4-9.4-24.6-9.4-33.9 0-4.7 4.7-7 10.8-7 17z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M289 121.7c9.4 9.4 9.4 24.6 0 33.9L182.3 262.3c-9.4 9.4-24.6 9.4-33.9 0L95 209c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l36.4 36.4 89.7-89.8c9.4-9.4 24.6-9.4 33.9 0z"
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
