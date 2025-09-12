import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BluetoothIcon: React.FC<
  IconProps & {
    type:
      | "solid"
      | "regular"
      | "light"
      | "thin"
      | "duotone"
      | "brands"
      | Dimensions;
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
                  d="M178.8 2.9c11.4-5.2 24.8-3.2 34.3 5.1l128 112c6.9 6 10.9 14.8 10.9 24s-4 18-10.9 24.1L240.6 256l100.5 87.9C348 350 352 358.8 352 368s-4 18-10.9 24.1l-128 112c-9.4 8.3-22.9 10.2-34.3 5.1S160 492.6 160 480V326.5l-74.9 65.6c-13.3 11.6-33.5 10.3-45.2-3s-10.3-33.5 3-45.2L143.4 256 42.9 168.1c-13.3-11.6-14.6-31.9-3-45.2s31.9-14.6 45.2-3l74.9 65.6V32c0-12.6 7.3-24 18.8-29.1M224 326.5v83l47.4-41.5zm0-141 47.4-41.5-47.4-41.5z"
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
                  d="M182.1 2.1c8.6-3.9 18.7-2.4 25.8 3.9l136 120c5.3 4.7 8.2 11.4 8.1 18.4s-3.3 13.6-8.7 18.1L229.8 256l113.5 93.5c5.4 4.5 8.6 11.1 8.7 18.1s-2.8 13.8-8.1 18.4l-136 120c-7.1 6.2-17.2 7.8-25.8 3.9S168 497.4 168 488V306.9l-96.7 79.6c-10.2 8.4-25.4 7-33.8-3.3s-7-25.4 3.3-33.8L154.2 256 40.7 162.5c-10.2-8.4-11.7-23.5-3.2-33.8s23.6-11.7 33.8-3.3l96.7 79.7V24c0-9.4 5.5-18 14.1-21.9M216 306.9v128l75-66.2zm0-101.7 75-61.8-75-66.2z"
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
                  d="M185.4 1.4c5.7-2.6 12.5-1.5 17.2 2.6l144 128c3.6 3.2 5.5 7.7 5.4 12.5s-2.4 9.2-6.2 12.1L218.1 256l127.8 99.4c3.8 2.9 6 7.4 6.2 12.1s-1.8 9.3-5.4 12.5l-144 128c-4.7 4.2-11.4 5.2-17.2 2.6s-9.4-8.3-9.4-14.6V288.7L57.8 380.6c-7 5.4-17 4.2-22.5-2.8s-4.2-17 2.8-22.5L165.9 256 38.2 156.6c-7-5.4-8.2-15.5-2.8-22.5s15.5-8.2 22.5-2.8l118.1 92V16c0-6.3 3.7-12 9.4-14.6M208 288.7v171.7l103-91.6zm0-65.4 103-80.1-103-91.6z"
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
                  d="M188.6.7c2.8-1.3 6.1-.9 8.5 1.1l152 128c1.8 1.5 2.9 3.8 2.8 6.2s-1.2 4.7-3 6.2L202.3 258.1l146.8 119.7c1.9 1.5 3 3.8 2.9 6.3s-1.1 4.7-3 6.2l-152 120c-2.4 1.9-5.7 2.3-8.4.9s-4.5-4.1-4.5-7.2V272.5L45 382.3c-3.5 2.7-8.5 2.1-11.2-1.3s-2.1-8.5 1.3-11.2l141.6-111.9L34.9 142.2c-3.4-2.8-3.9-7.8-1.1-11.3s7.8-3.9 11.3-1.1L184 243.1V8c0-3.1 1.8-5.9 4.6-7.3M200 276.9v210.6l131.2-103.6zm0-37.4 131.3-103.7L200 25.2z"
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
                  d="M178.8 2.9c11.4-5.2 24.8-3.2 34.3 5.1l128 112c6.9 6 10.9 14.8 10.9 24s-4 18-10.9 24.1L240.6 256l100.5 87.9C348 350 352 358.8 352 368s-4 18-10.9 24.1l-128 112c-9.4 8.3-22.9 10.2-34.3 5.1S160 492.6 160 480V326.5l-74.9 65.6c-13.3 11.6-33.5 10.3-45.2-3s-10.3-33.5 3-45.2L143.4 256 42.9 168.1c-13.3-11.6-14.6-31.9-3-45.2s31.9-14.6 45.2-3l74.9 65.6V32c0-12.6 7.3-24 18.8-29.1M224 326.5v83l47.4-41.5zm0-141 47.4-41.5-47.4-41.5z"
                />
                <path className="aps-icon-foreground" d="" />
              </svg>
            );

          case "brands":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M292.6 171.1 249.7 214l-.3-86zm-43.2 219.8 43.1-43.1-42.9-42.9zM416 259.4C416 465 344.1 512 230.9 512S32 465 32 259.4 115.4 0 228.6 0 416 53.9 416 259.4m-158.5 0 79.4-88.6L211.8 36.5v176.9L138 139.6l-27 26.9 92.7 93-92.7 93 26.9 26.9 73.8-73.8 2.3 170 127.4-127.5z"
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
