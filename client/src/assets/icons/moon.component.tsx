import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const MoonIcon: React.FC<
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
                  d="M223.5 32C100 32 0 132.3 0 256s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"
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
                  d="M144.7 98.7c-21 34.1-33.1 74.3-33.1 117.3 0 98 62.8 181.4 150.4 211.7-12.4 2.8-25.3 4.3-38.6 4.3C126.6 432 48 353.3 48 256c0-68.9 39.4-128.4 96.8-157.3zm62.1-66C91.1 41.2 0 137.9 0 256c0 123.7 100 224 223.5 224 47.8 0 92-15 128.4-40.6 1.9-1.3 3.7-2.7 5.5-4 4.8-3.6 9.4-7.4 13.9-11.4 2.7-2.4 5.3-4.8 7.9-7.3 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-3.7.6-7.4 1.2-11.1 1.6-5 .5-10.1.9-15.3 1h-4c-96.8-.2-175.2-78.9-175.2-176 0-54.8 24.9-103.7 64.1-136 1-.9 2.1-1.7 3.2-2.6 4-3.2 8.2-6.2 12.5-9 3.1-2 6.3-4 9.6-5.8 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-3.6-.3-7.1-.5-10.7-.6-2.7-.1-5.5-.1-8.2-.1-3.3 0-6.5.1-9.8.2-2.3.1-4.6.2-6.9.4z"
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
                  d="M190.6 66.8c-38.8 37.8-62.9 90.7-62.9 149.2 0 108.9 83.5 198.3 189.9 207.3-27.8 15.7-59.9 24.7-94.1 24.7C117.7 448 32 362.1 32 256c0-94.8 68.5-173.5 158.6-189.2m66.1-21.5c-1.5-6.9-7.3-11.9-14.3-12.5-6.3-.5-12.6-.8-19-.8C100 32 0 132.3 0 256s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3z"
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
                  d="M223.5 48C108.9 48 16 141.1 16 256s92.9 208 207.5 208c56.2 0 107.2-22.4 144.6-58.8-10.7 1.9-21.7 2.8-32.9 2.8-105.8 0-191.5-86-191.5-192 0-71.7 39.3-134.3 97.4-167.3-5.8-.5-11.7-.7-17.6-.7M0 256C0 132.3 100 32 223.5 32c6.4 0 12.7.3 19 .8 7 .6 12.8 5.7 14.3 12.5s-1.6 13.9-7.7 17.3c-53.3 30.2-89.3 87.6-89.3 153.3 0 97.2 78.6 176 175.5 176 10.3 0 20.4-.9 30.1-2.6 6.9-1.2 13.8 2.2 17 8.5s1.9 13.8-3.1 18.7C339 455.8 284 480 223.5 480 100 480 0 379.7 0 256"
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
                <path className="aps-icon-background" d="" />
                <path
                  className="aps-icon-foreground"
                  d="M223.5 32C100 32 0 132.3 0 256s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"
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
