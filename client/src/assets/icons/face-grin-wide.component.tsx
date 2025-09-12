import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const FaceGrinWideIcon: React.FC<
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
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m132.1-199.2c12.3-3.8 24.3 6.9 19.3 18.7-25 59.1-83.2 100.5-151.1 100.5s-126.2-41.4-151.1-100.5c-5-11.8 7-22.5 19.3-18.7 39.7 12.2 84.5 19 131.8 19s92.1-6.8 131.8-19M208 192c0 35.3-14.3 64-32 64s-32-28.7-32-64 14.3-64 32-64 32 28.7 32 64m128 64c-17.7 0-32-28.7-32-64s14.3-64 32-64 32 28.7 32 64-14.3 64-32 64"
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
                  d="M464 256a208 208 0 1 0-416 0 208 208 0 1 0 416 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m349.5 52.4c18.7-4.4 35.9 12 25.5 28.1-24.6 38.1-68.7 63.5-119.1 63.5s-94.5-25.4-119.1-63.5c-10.4-16.1 6.8-32.5 25.5-28.1 28.9 6.8 60.5 10.5 93.6 10.5s64.7-3.7 93.6-10.5M224 192c0 35.3-14.3 64-32 64s-32-28.7-32-64 14.3-64 32-64 32 28.7 32 64m96 64c-17.7 0-32-28.7-32-64s14.3-64 32-64 32 28.7 32 64-14.3 64-32 64"
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
                  d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m90-166.2c-22.6 23.6-54.5 38.3-89.9 38.3s-67.3-14.7-89.9-38.3c28.5 5.4 58.7 8.3 89.9 8.3s61.4-2.9 89.9-8.3m33.8-41.1c-37.3 11.1-79.3 17.4-123.8 17.4s-86.4-6.3-123.8-17.4c-12.3-3.7-24.2 7-19.1 18.7 24.1 54.6 79 92.7 142.8 92.7s118.7-38.1 142.8-92.7c5.2-11.7-6.8-22.4-19.1-18.7zM192 144c0-8.8-7.2-16-16-16s-16 7.2-16 16v96c0 8.8 7.2 16 16 16s16-7.2 16-16zm160 0c0-8.8-7.2-16-16-16s-16 7.2-16 16v96c0 8.8 7.2 16 16 16s16-7.2 16-16z"
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
                  d="M496 256a240 240 0 1 0-480 0 240 240 0 1 0 480 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m256.3 91.8c-43 0-84.1-5.5-121.5-15.4-3.9-1-7.1.3-8.7 1.8-.7.7-.9 1.2-.9 1.4 0 .1-.1.7.5 1.9 25 46.8 74.1 78.5 130.5 78.5s105.5-31.7 130.5-78.5c.7-1.2.6-1.8.5-1.9 0-.2-.2-.7-.9-1.4-1.6-1.5-4.8-2.8-8.7-1.8-37.4 9.9-78.4 15.4-121.5 15.4zm144.6-2.7c-27.7 51.7-82.1 86.9-144.6 86.9s-116.9-35.2-144.6-86.9c-9.1-17 8.7-33.1 27.3-28.2 36 9.6 75.6 14.9 117.3 14.9s81.4-5.3 117.3-14.9c18.6-4.9 36.4 11.2 27.3 28.2M160.5 150.3c-5.1 10.3-8.5 25-8.5 41.7s3.4 31.4 8.5 41.7c5.4 10.7 11.3 14.3 15.5 14.3s10.1-3.6 15.5-14.3c5.1-10.3 8.5-25 8.5-41.7s-3.4-31.4-8.5-41.7c-5.4-10.7-11.3-14.3-15.5-14.3s-10.1 3.6-15.5 14.3m-14.3-7.2c6.2-12.4 16.3-23.2 29.8-23.2s23.6 10.7 29.8 23.2c6.5 12.9 10.2 30.2 10.2 48.8s-3.8 35.9-10.2 48.8c-6.2 12.6-16.3 23.3-29.8 23.3s-23.6-10.7-29.8-23.2c-6.4-12.9-10.2-30.2-10.2-48.8s3.8-35.9 10.2-48.8zM312 192c0 16.7 3.4 31.4 8.5 41.7 5.4 10.7 11.3 14.3 15.5 14.3s10.1-3.6 15.5-14.3c5.1-10.3 8.5-25 8.5-41.7s-3.4-31.4-8.5-41.7c-5.4-10.7-11.3-14.3-15.5-14.3s-10.1 3.6-15.5 14.3c-5.1 10.3-8.5 25-8.5 41.7m24-72c13.5 0 23.6 10.7 29.8 23.2 6.5 12.9 10.2 30.2 10.2 48.8s-3.8 35.9-10.2 48.8c-6.2 12.5-16.3 23.2-29.8 23.2s-23.6-10.7-29.8-23.2c-6.4-12.9-10.2-30.2-10.2-48.8s3.8-35.9 10.2-48.8c6.2-12.4 16.3-23.2 29.8-23.2"
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
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m132.1-199.2c12.3-3.8 24.3 6.9 19.3 18.7-25 59.1-83.2 100.5-151.1 100.5s-126.2-41.4-151.1-100.5c-5-11.8 7-22.5 19.3-18.7 39.7 12.2 84.5 19 131.8 19s92.1-6.8 131.8-19M208 192c0 35.3-14.3 64-32 64s-32-28.7-32-64 14.3-64 32-64 32 28.7 32 64m128 64c-17.7 0-32-28.7-32-64s14.3-64 32-64 32 28.7 32 64-14.3 64-32 64"
                />
                <path
                  className="aps-icon-foreground"
                  d="M176 256c17.7 0 32-28.7 32-64s-14.3-64-32-64-32 28.7-32 64 14.3 64 32 64m160 0c17.7 0 32-28.7 32-64s-14.3-64-32-64-32 28.7-32 64 14.3 64 32 64"
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
