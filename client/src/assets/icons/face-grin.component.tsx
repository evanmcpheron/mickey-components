import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const FaceGrinIcon: React.FC<
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
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m132.1-199.2c12.3-3.8 24.3 6.9 19.3 18.7-25 59.1-83.2 100.5-151.1 100.5s-126.2-41.4-151.1-100.5c-5-11.8 7-22.5 19.3-18.7 39.7 12.2 84.5 19 131.8 19s92.1-6.8 131.8-19M144.4 208a32 32 0 1 1 64 0 32 32 0 1 1-64 0m192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64"
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
                  d="M464 256a208 208 0 1 0-416 0 208 208 0 1 0 416 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m349.5 52.4c18.7-4.4 35.9 12 25.5 28.1-24.6 38.1-68.7 63.5-119.1 63.5s-94.5-25.4-119.1-63.5c-10.4-16.1 6.8-32.5 25.5-28.1 28.9 6.8 60.5 10.5 93.6 10.5s64.7-3.7 93.6-10.5M144.4 208a32 32 0 1 1 64 0 32 32 0 1 1-64 0m192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64"
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
                  d="M480 256a224 224 0 1 0-448 0 224 224 0 1 0 448 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m256 98.1c-31.2 0-61.4-2.9-89.9-8.3 22.6 23.6 54.5 38.3 89.9 38.3s67.3-14.7 89.9-38.3c-28.5 5.4-58.7 8.3-89.9 8.3m142.8-30.7c-24.1 54.6-79 92.7-142.8 92.7S137.3 378 113.2 323.4c-5.2-11.7 6.8-22.4 19.1-18.7 37.3 11.1 79.3 17.4 123.8 17.4s86.4-6.3 123.8-17.4c12.3-3.7 24.2 7 19.1 18.7zM152.4 208a24 24 0 1 1 48 0 24 24 0 1 1-48 0m184-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48"
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
                  d="M496 256a240 240 0 1 0-480 0 240 240 0 1 0 480 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m256.3 91.8c-43 0-84.1-5.5-121.5-15.4-3.9-1-7.1.3-8.7 1.8-.7.7-.9 1.2-.9 1.4 0 .1-.1.7.5 1.9 25 46.8 74.1 78.5 130.5 78.5s105.5-31.7 130.5-78.5c.7-1.2.6-1.8.5-1.9 0-.2-.2-.7-.9-1.4-1.6-1.5-4.8-2.8-8.7-1.8-37.4 9.9-78.4 15.4-121.5 15.4zm144.6-2.7c-27.7 51.7-82.1 86.9-144.6 86.9s-116.9-35.2-144.6-86.9c-9.1-17 8.7-33.1 27.3-28.2 36 9.6 75.6 14.9 117.3 14.9s81.4-5.3 117.3-14.9c18.6-4.9 36.4 11.2 27.3 28.2M160.4 208a16 16 0 1 1 32 0 16 16 0 1 1-32 0m176-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32"
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
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m132.1-199.2c12.3-3.8 24.3 6.9 19.3 18.7-25 59.1-83.2 100.5-151.1 100.5s-126.2-41.4-151.1-100.5c-5-11.8 7-22.5 19.3-18.7 39.7 12.2 84.5 19 131.8 19s92.1-6.8 131.8-19M144.4 208a32 32 0 1 1 64 0 32 32 0 1 1-64 0m192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64"
                />
                <path
                  className="aps-icon-foreground"
                  d="M176.4 240a32 32 0 1 0 0-64 32 32 0 1 0 0 64m160 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
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
