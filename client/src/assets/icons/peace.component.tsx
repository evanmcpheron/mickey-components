import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const PeaceIcon: React.FC<
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
                  d="M224 445.3V323.5l-94.3 77.1c26.1 22.8 58.5 38.7 94.3 44.7M89.2 351.1 224 240.8V66.7C133.2 81.9 64 160.9 64 256c0 34.6 9.2 67.1 25.2 95.1m293.1 49.5L288 323.5v121.8c35.7-6 68.1-21.9 94.3-44.7m40.6-49.5c16-28 25.2-60.5 25.2-95.1 0-95.1-69.2-174.1-160-189.3v174.1l134.7 110.3zM0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0"
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
                  d="M232 462.6v-156l-120.7 98.8c32 31 74 51.9 120.7 57.2M80.9 368.3 232 244.6V49.4C128.4 61.3 48 149.2 48 256c0 41.4 12.1 79.9 32.9 112.3m319.8 37.1L280 306.6v156c46.7-5.4 88.7-26.2 120.7-57.2m30.4-37.1C451.9 335.9 464 297.4 464 256c0-106.8-80.4-194.7-184-206.6v195.2zM0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0"
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
                  d="M240 479.4V289.8L93.2 409.9c37.4 39.6 89.1 65.5 146.8 69.6zM72.9 385.1 240 248.4V32.6C123.8 40.8 32 137.7 32 256c0 48.1 15.1 92.6 40.9 129.1M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512m16-32.6c57.7-4.1 109.4-30 146.8-69.6L272 289.8zm167.1-94.3c25.8-36.5 40.9-81 40.9-129.1 0-118.3-91.8-215.2-208-223.4v215.8z"
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
                  d="M248 495.9V273.1L76.8 415.7c42.4 47.4 103.2 77.9 171.2 80.2M66.6 403.4 248 252.3V16.1C119.2 20.4 16 126.1 16 256c0 55.6 18.9 106.7 50.6 147.4M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512m179.2-96.3L264 273.1v222.8c68-2.2 128.8-32.7 171.2-80.2m10.2-12.3C477.1 362.7 496 311.6 496 256c0-129.9-103.2-235.6-232-239.9v236.2z"
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
                  d="M288 445.3c-10.4 1.7-21.1 2.7-32 2.7s-21.6-.9-32-2.7V323.5l-94.3 77.1c-16.1-14.1-29.9-30.8-40.6-49.5L224 240.8V66.7c10.4-1.7 21.1-2.7 32-2.7s21.6.9 32 2.7v174.1l134.8 110.3c-10.7 18.7-24.4 35.4-40.6 49.5L288 323.5z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M256 64a192 192 0 1 1 0 384 192 192 0 1 1 0-384m0 448a256 256 0 1 0 0-512 256 256 0 1 0 0 512"
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
