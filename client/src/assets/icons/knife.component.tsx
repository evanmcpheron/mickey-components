import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const KnifeIcon: React.FC<
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
                  d="m217.5 249.3 242-242c4.7-4.7 11-7.3 17.6-7.3 11.2 0 21 7.5 23.5 18.4C505.3 38.6 512 71.5 512 96c0 83.3-48.2 130.5-128.9 209.4-6.5 6.4-13.3 13-20.3 19.9-12.1 11.9-28.4 18.7-45.3 18.7h-11c-17 0-33.3-6.7-45.3-18.7l-14.6-14.6-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192 16-16 .1-.1z"
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
                  d="M451.4 10.8C458.1 3.9 467.2 0 476.8 0 496.2 0 512 15.8 512 35.2v48.4c0 65.5-25.9 128.4-72.1 174.9l-70.2 70.6c-31.2 31.4-82 31.5-113.3.2L233.1 306 41.3 504.7c-9.2 9.5-24.4 9.8-33.9.6s-9.8-24.4-.6-33.9l208.7-216.3zm-185 260.7 23.8 23.8c12.5 12.5 32.8 12.5 45.3-.1l70.2-70.6c37.3-37.5 58.2-88.2 58.2-141V66.8z"
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
                  d="M448 9.7c5.8-6.2 13.8-9.7 22.3-9.7 12.3 0 24.1 7.6 28.2 20.4 5 15.9 13.6 49.2 13.6 91.6 0 49.1-15.6 86.8-42.9 123.7-22.7 30.6-54 61.2-91 97.4-6.5 6.4-13.2 12.9-20 19.6l-9.8 9.8c-13.9 13.9-32.7 21.7-52.3 21.7s-38.4-7.8-52.3-21.7l-42-42L27.7 506.9c-6 6.5-16.2 6.8-22.6.8s-6.8-16.2-.8-22.6l185.3-198.6zM223.5 297.1l42.8 42.8c7.9 7.9 18.5 12.3 29.7 12.3s21.8-4.4 29.7-12.3l9.9-9.9.1-.1c7.1-7 13.9-13.7 20.5-20.1 37.2-36.4 66.3-64.9 87.3-93.2C467.4 184.2 480 153 480 112c0-34.9-6.5-63-10.9-78z"
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
                  d="M460.7 7.3C465 2.6 471.1 0 477.4 0c9.3 0 18 5.7 21 15.1 5 15.8 13.6 49.4 13.6 92.1 0 48.6-15.3 85.8-42.7 122.7-23 31-54.7 62.1-93 99.5-6.7 6.6-13.7 13.4-20.8 20.4L345.3 360c-12.7 12.7-30 19.9-48 19.9s-35.3-7.1-48-19.9l-49.7-49.7L13.8 509.5c-3 3.2-8.1 3.4-11.3.4s-3.4-8.1-.4-11.3l191.5-205.2zM210.6 298.6l50 50c9.7 9.7 22.9 15.2 36.7 15.2s27-5.5 36.7-15.2l10.2-10.2c7.3-7.1 14.3-14 21.1-20.7 38.4-37.5 69-67.6 91.2-97.4 25.7-34.7 39.5-68.7 39.5-113.2 0-40.7-8.2-72.5-12.9-87.3-.7-2.2-2.8-3.9-5.7-3.9-1.9 0-3.8.8-5.1 2.2z"
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
                  d="M459.5 7.3 201.4 265.4l59.9 59.9c12 12 28.3 18.7 45.3 18.7h11c17 0 33.2-6.8 45.3-18.7C455.7 233.9 512 186.1 512 96c0-24.5-6.7-57.4-11.4-77.6C498.1 7.5 488.2 0 477.1 0c-6.6 0-12.9 2.6-17.6 7.3"
                />
                <path
                  className="aps-icon-foreground"
                  d="m217.4 249.4-16 16 45.3 45.3-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3z"
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
