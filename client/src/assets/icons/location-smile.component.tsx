import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const LocationSmileIcon: React.FC<
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
                  d="M215.7 499.2C267 435 384 279.4 384 192 384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2 12.3 15.3 35.1 15.3 47.4 0M128 128a32 32 0 1 1 0 64 32 32 0 1 1 0-64m96 32a32 32 0 1 1 64 0 32 32 0 1 1-64 0m-95.4 84.9c6.2 9.4 29.1 31.1 63.4 31.1s57.1-21.7 63.4-31.1c6.1-9.2 18.5-11.7 27.7-5.5s11.7 18.5 5.5 27.7C277.1 284.4 243.1 316 192 316s-85.1-31.6-96.6-48.9c-6.1-9.2-3.6-21.6 5.5-27.7s21.6-3.6 27.7 5.5"
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
                  d="M336 192c0-79.5-64.5-144-144-144S48 112.5 48 192c0 12.4 4.5 31.6 15.3 57.2 10.5 24.8 25.4 52.2 42.5 79.9 28.5 46.2 61.5 90.8 86.2 122.6 24.8-31.8 57.8-76.4 86.2-122.6 17.1-27.7 32-55.1 42.5-79.9 10.8-25.6 15.3-44.8 15.3-57.2m48 0c0 87.4-117 243-168.3 307.2-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192 0 86 86 0 192 0s192 86 192 192m-248-64a24 24 0 1 1 0 48 24 24 0 1 1 0-48m88 24a24 24 0 1 1 48 0 24 24 0 1 1-48 0m-79.4 76.9c4.5 6.7 21.6 23.1 47.4 23.1s42.9-16.4 47.4-23.1c6.1-9.2 18.5-11.7 27.7-5.5s11.7 18.5 5.5 27.7c-9.7 14.6-38.1 40.9-80.6 40.9s-70.9-26.3-80.6-40.9c-6.1-9.2-3.6-21.6 5.5-27.7s21.6-3.6 27.7 5.5"
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
                  d="M352 192c0-88.4-71.6-160-160-160S32 103.6 32 192c0 15.6 5.4 37 16.6 63.4 10.9 25.9 26.2 54 43.6 82.1 34.1 55.3 74.4 108.2 99.9 140 25.4-31.8 65.8-84.7 99.9-140 17.3-28.1 32.7-56.3 43.6-82.1 11-26.4 16.4-47.8 16.4-63.4m32 0c0 87.4-117 243-168.3 307.2-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192 0 86 86 0 192 0s192 86 192 192m-256-56a24 24 0 1 1 0 48 24 24 0 1 1 0-48m104 24a24 24 0 1 1 48 0 24 24 0 1 1-48 0m-106.7 87.1C132.1 257.3 156 280 192 280s59.9-22.7 66.7-32.9c4.9-7.4 14.8-9.3 22.2-4.4s9.3 14.8 4.4 22.2c-11 16.5-43.9 47.1-93.3 47.1s-82.3-30.6-93.3-47.1c-4.9-7.4-2.9-17.3 4.4-22.2s17.3-2.9 22.2 4.4"
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
                  d="M368 192c0-97.2-78.8-176-176-176S16 94.8 16 192c0 18.7 6.4 42.5 17.8 69.6 11.3 26.9 27.1 55.8 44.7 84.3 35.2 57 76.8 111.4 102.3 143.2 5.9 7.3 16.6 7.3 22.4 0 25.5-31.8 67.1-86.2 102.3-143.2 17.6-28.5 33.4-57.4 44.7-84.3 11.4-27.1 17.8-50.9 17.8-69.6m16 0c0 87.4-117 243-168.3 307.2-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192 0 86 86 0 192 0s192 86 192 192m-256-48a16 16 0 1 1 0 32 16 16 0 1 1 0-32m112 16a16 16 0 1 1 32 0 16 16 0 1 1-32 0m-137.3 99.6C112.3 274 144.2 304 192 304s79.7-30 89.3-44.4c2.5-3.7 7.4-4.7 11.1-2.2s4.7 7.4 2.2 11.1C282.9 286 246.6 320 192 320s-90.9-34-102.7-51.6c-2.5-3.7-1.5-8.6 2.2-11.1s8.6-1.5 11.1 2.2z"
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
                  d="M215.7 499.2C267 435 384 279.4 384 192 384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2 12.3 15.3 35.1 15.3 47.4 0M128 128a32 32 0 1 1 0 64 32 32 0 1 1 0-64m96 32a32 32 0 1 1 64 0 32 32 0 1 1-64 0m-95.4 84.9c6.2 9.4 29.1 31.1 63.4 31.1s57.1-21.7 63.4-31.1c6.1-9.2 18.5-11.7 27.7-5.5s11.7 18.5 5.5 27.7C277.1 284.4 243.1 316 192 316s-85.1-31.6-96.6-48.9c-6.1-9.2-3.6-21.6 5.5-27.7s21.6-3.6 27.7 5.5"
                />
                <path
                  className="aps-icon-foreground"
                  d="M160 160a32 32 0 1 0-64 0 32 32 0 1 0 64 0m128 0a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-159.4 84.9c-6.1-9.2-18.5-11.7-27.7-5.5s-11.7 18.5-5.5 27.7c11.5 17.3 45.5 48.9 96.6 48.9s85.1-31.6 96.6-48.9c6.1-9.2 3.6-21.6-5.5-27.7s-21.6-3.6-27.7 5.5c-6.2 9.4-29.1 31.1-63.4 31.1s-57.1-21.7-63.4-31.1"
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
