import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CircleEuroIcon: React.FC<
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
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512M128 272h16c-.6-5-.9-10.1-.9-15.2 0-5.7.4-11.3 1.1-16.8H128c-8.8 0-16-7.2-16-16s7.2-16 16-16h24.7c19.2-46.9 65.4-80 119.2-80H313c13.3 0 24 10.7 24 24s-10.7 24-24 24h-41.1c-26.3 0-49.6 12.6-64.4 32H288c8.8 0 16 7.2 16 16s-7.2 16-16 16h-95.1c-1.1 5.4-1.7 11-1.7 16.8 0 5.2.5 10.3 1.4 15.2H288c8.8 0 16 7.2 16 16s-7.2 16-16 16h-81.6c14.7 20.3 38.5 33.5 65.5 33.5H313c13.3 0 24 10.7 24 24s-10.7 24-24 24h-41.1c-54.4 0-101-33.8-119.8-81.5H128c-8.8 0-16-7.2-16-16s7.2-16 16-16"
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
                  d="M464 256a208 208 0 1 0-416 0 208 208 0 1 0 416 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m128 16h16c-.6-5-.9-10.1-.9-15.2 0-5.7.4-11.3 1.1-16.8H128c-8.8 0-16-7.2-16-16s7.2-16 16-16h24.7c19.2-46.9 65.4-80 119.2-80H313c13.3 0 24 10.7 24 24s-10.7 24-24 24h-41.1c-26.3 0-49.6 12.6-64.4 32H288c8.8 0 16 7.2 16 16s-7.2 16-16 16h-95.1c-1.1 5.4-1.7 11-1.7 16.8 0 5.2.5 10.3 1.4 15.2H288c8.8 0 16 7.2 16 16s-7.2 16-16 16h-81.6c14.7 20.3 38.5 33.5 65.5 33.5H313c13.3 0 24 10.7 24 24s-10.7 24-24 24h-41.1c-54.4 0-101-33.8-119.8-81.5H128c-8.8 0-16-7.2-16-16s7.2-16 16-16"
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
                  d="M480 256a224 224 0 1 0-448 0 224 224 0 1 0 448 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m128 16h24.2c-.7-5-1-10.1-1-15.2q0-8.55 1.2-16.8H128c-8.8 0-16-7.2-16-16s7.2-16 16-16h34.2c18.2-37.9 56.9-64 101.7-64H305c8.8 0 16 7.2 16 16s-7.2 16-16 16h-41.1c-26.3 0-49.6 12.6-64.4 32H288c8.8 0 16 7.2 16 16s-7.2 16-16 16H184.9c-1.1 5.4-1.7 11-1.7 16.8 0 5.2.5 10.3 1.4 15.2H288c8.8 0 16 7.2 16 16s-7.2 16-16 16h-89.6c14.7 20.3 38.5 33.5 65.5 33.5H305c8.8 0 16 7.2 16 16s-7.2 16-16 16h-41.1c-45.4 0-84.5-26.8-102.4-65.5H128c-8.8 0-16-7.2-16-16s7.2-16 16-16"
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
                  d="M496 256a240 240 0 1 0-480 0 240 240 0 1 0 480 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m128 24h33.5c-1.6-7.5-2.4-15.3-2.4-23.2 0-8.5.9-16.8 2.7-24.8H128c-4.4 0-8-3.6-8-8s3.6-8 8-8h38.7c16.3-42.1 57.3-72 105.2-72H313c4.4 0 8 3.6 8 8s-3.6 8-8 8h-41.1c-38.9 0-72.4 22.9-87.8 56H304c4.4 0 8 3.6 8 8s-3.6 8-8 8H178.3c-2.1 7.9-3.2 16.2-3.2 24.8 0 8 1 15.8 2.8 23.2H304c4.4 0 8 3.6 8 8s-3.6 8-8 8H183.4c15.1 33.9 49 57.5 88.5 57.5H313c4.4 0 8 3.6 8 8s-3.6 8-8 8h-41.1c-48.5 0-89.8-30.6-105.7-73.5H128c-4.4 0-8-3.6-8-8s3.6-8 8-8"
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
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512M128 272h16c-.6-5-.9-10.1-.9-15.2 0-5.7.4-11.3 1.1-16.8H128c-8.8 0-16-7.2-16-16s7.2-16 16-16h24.7c19.2-46.9 65.4-80 119.2-80H313c13.3 0 24 10.7 24 24s-10.7 24-24 24h-41.1c-26.3 0-49.6 12.6-64.4 32H288c8.8 0 16 7.2 16 16s-7.2 16-16 16h-95.1c-1.1 5.4-1.7 11-1.7 16.8 0 5.2.5 10.3 1.4 15.2H288c8.8 0 16 7.2 16 16s-7.2 16-16 16h-81.6c14.7 20.3 38.5 33.5 65.5 33.5H313c13.3 0 24 10.7 24 24s-10.7 24-24 24h-41.1c-54.4 0-101-33.8-119.8-81.5H128c-8.8 0-16-7.2-16-16s7.2-16 16-16"
                />
                <path
                  className="aps-icon-foreground"
                  d="M144.2 240c-.7 5.5-1.1 11.1-1.1 16.8 0 5.2.3 10.2.9 15.2h-16c-8.8 0-16 7.2-16 16s7.2 16 16 16h24.1c18.8 47.7 65.4 81.5 119.8 81.5H313c13.3 0 24-10.7 24-24s-10.7-24-24-24h-41.1c-27 0-50.8-13.2-65.5-33.5H288c8.8 0 16-7.2 16-16s-7.2-16-16-16h-95.4c-.9-4.9-1.4-10-1.4-15.2 0-5.7.6-11.4 1.7-16.8H288c8.8 0 16-7.2 16-16s-7.2-16-16-16h-80.5c14.7-19.4 38.1-32 64.4-32H313c13.3 0 24-10.7 24-24s-10.7-24-24-24h-41.1c-53.9 0-100 33.1-119.2 80H128c-8.8 0-16 7.2-16 16s7.2 16 16 16z"
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
