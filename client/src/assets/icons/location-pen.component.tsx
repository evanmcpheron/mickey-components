import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const LocationPenIcon: React.FC<
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
                  d="M215.7 499.2C267 435 384 279.4 384 192 384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2 12.3 15.3 35.1 15.3 47.4 0M276.8 107c14.7 14.7 14.7 38.6 0 53.3l-14.9 14.9-53.3-53.2 14.9-15c14.7-14.7 38.6-14.7 53.3 0M114.1 216.5l71.9-71.9 53.3 53.3-71.9 71.9c-4.1 4.1-9.2 7-14.9 8.4l-36.6 9.2c-5.5 1.4-11.2-.2-15.2-4.2s-5.6-9.7-4.2-15.2l9.2-36.7c1.4-5.6 4.3-10.8 8.4-14.9z"
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
                  d="M336 192c0-79.5-64.5-144-144-144S48 112.5 48 192c0 12.4 4.5 31.6 15.3 57.2 10.5 24.8 25.4 52.2 42.5 79.9 28.5 46.2 61.5 90.8 86.2 122.6 24.8-31.8 57.8-76.4 86.2-122.6 17.1-27.7 32-55.1 42.5-79.9 10.8-25.6 15.3-44.8 15.3-57.2m48 0c0 87.4-117 243-168.3 307.2-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192 0 86 86 0 192 0s192 86 192 192m-107.2-85c14.7 14.7 14.7 38.6 0 53.3l-14.9 14.9-53.3-53.2 14.9-15c14.7-14.7 38.6-14.7 53.3 0M114.1 216.5l71.9-71.9 53.3 53.3-71.9 71.9c-4.1 4.1-9.2 7-14.9 8.4l-36.6 9.2c-5.5 1.4-11.2-.2-15.2-4.2s-5.6-9.7-4.2-15.2l9.2-36.7c1.4-5.6 4.3-10.8 8.4-14.9z"
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
                  d="M352 192c0-88.4-71.6-160-160-160S32 103.6 32 192c0 15.6 5.4 37 16.6 63.4 10.9 25.9 26.2 54 43.6 82.1 34.1 55.3 74.4 108.2 99.9 140 25.4-31.8 65.8-84.7 99.9-140 17.3-28.1 32.7-56.3 43.6-82.1 11-26.4 16.4-47.8 16.4-63.4m32 0c0 87.4-117 243-168.3 307.2-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192 0 86 86 0 192 0s192 86 192 192m-131.7-60.3c-4.9-4.9-12.9-4.9-17.8 0l-8.1 8.1 17.8 17.8 8.1-8.1c4.9-4.9 4.9-12.9 0-17.8m-109.2 91.4c-2 2.1-3.5 4.6-4.2 7.4L134 250l19.4-4.9c2.8-.7 5.4-2.2 7.4-4.2l60.7-60.7-17.8-17.8-60.7 60.7zM211.8 109c17.4-17.4 45.7-17.4 63.1 0s17.4 45.6 0 63l-91.4 91.5c-6.2 6.2-13.9 10.5-22.3 12.6l-45.3 11.3c-5.5 1.4-11.2-.2-15.2-4.2s-5.6-9.7-4.2-15.2l11.3-45.3c2.1-8.4 6.5-16.1 12.6-22.3z"
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
                  d="M368 192c0-97.2-78.8-176-176-176S16 94.8 16 192c0 18.7 6.4 42.5 17.8 69.6 11.3 26.9 27.1 55.8 44.7 84.3 35.2 57 76.8 111.4 102.3 143.2 5.9 7.3 16.6 7.3 22.4 0 25.5-31.8 67.1-86.2 102.3-143.2 17.6-28.5 33.4-57.4 44.7-84.3 11.4-27.1 17.8-50.9 17.8-69.6m16 0c0 87.4-117 243-168.3 307.2-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192 0 86 86 0 192 0s192 86 192 192m-283.4 91.4c-4-4-5.6-9.7-4.2-15.2l9.2-36.7c1.4-5.6 4.3-10.8 8.4-14.9L223.6 107c14.7-14.7 38.6-14.7 53.4 0s14.7 38.6 0 53.4L167.4 270c-4.1 4.1-9.2 7-14.9 8.4l-36.7 9.2c-5.5 1.4-11.2-.2-15.2-4.2m15.7-28.9-4.4 17.6 17.6-4.4 19.1-4.8c2.8-.7 5.4-2.2 7.4-4.2l85.7-85.7-30.7-30.7-85.7 85.7c-2.1 2.1-3.5 4.6-4.2 7.4zm149.4-105.4c8.5-8.5 8.5-22.3 0-30.7s-22.3-8.5-30.7 0L222.3 131l30.7 30.7 12.6-12.6z"
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
                  d="M215.7 499.2C267 435 384 279.4 384 192 384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2 12.3 15.3 35.1 15.3 47.4 0M276.8 107c14.7 14.7 14.7 38.6 0 53.3l-14.9 14.9-53.3-53.2 14.9-15c14.7-14.7 38.6-14.7 53.3 0M114.1 216.5l71.9-71.9 53.3 53.3-71.9 71.9c-4.1 4.1-9.2 7-14.9 8.4l-36.6 9.2c-5.5 1.4-11.2-.2-15.2-4.2s-5.6-9.7-4.2-15.2l9.2-36.7c1.4-5.6 4.3-10.8 8.4-14.9z"
                />
                <path
                  className="aps-icon-foreground"
                  d="m223.5 107-14.9 15 53.3 53.3 14.9-14.9c14.7-14.7 14.7-38.6 0-53.3s-38.6-14.7-53.3 0zM186 144.6l-71.9 71.9c-4.1 4.1-7 9.2-8.4 14.9L96.5 268c-1.4 5.5.2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l36.6-9.2c5.6-1.4 10.8-4.3 14.9-8.4l71.9-71.9z"
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
