import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const AngleIcon: React.FC<
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
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M252.6 78.3c7.9-15.8 1.5-35-14.3-42.9s-35-1.5-42.9 14.3l-192 384c-5 9.9-4.4 21.7 1.4 31.1S20.9 480 32 480h384c17.7 0 32-14.3 32-32s-14.3-32-32-32H83.8zm-12.2 96-21.9 43.8c21.4 17.4 40.4 37.7 56.2 60.4l40.8-25.3c-20.7-30.1-46.1-56.7-75.1-78.9M321.1 384h49c-7-37-19.8-71.9-37.6-103.7l-40.8 25.3c13.3 24.2 23.3 50.5 29.5 78.3z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M253.3 67.1c6.1-11.8 1.5-26.3-10.2-32.4s-26.3-1.5-32.4 10.2l-208 400c-3.9 7.4-3.6 16.4.8 23.5S15.6 480 24 480h400c13.3 0 24-10.7 24-24s-10.7-24-24-24H63.5zM242 175.5l-22.6 43.4c19.3 15.8 36.5 34 51.3 54.1l40.8-25.6c-19.6-27.2-43-51.4-69.5-71.9M322.7 392h48.8c-6-36.9-18-71.8-34.7-103.8L296 313.8c12.4 24.3 21.5 50.6 26.8 78.2z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M238.3 55.2c4-7.9.7-17.5-7.2-21.5s-17.5-.7-21.5 7.2l-208 416c-2.5 5-2.2 10.8.7 15.6s8.1 7.6 13.6 7.6H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H41.9zM295 238.9c-16.3-20.5-35-39.1-55.6-55.2-7.7-6.1-19-3.2-23.4 5.6-3.5 7.1-1.4 15.6 4.8 20.5 17.8 14.1 34 30.2 48.2 47.9 5.3 6.6 14.7 8.4 21.9 3.9 7.8-4.9 9.9-15.4 4.1-22.7m14.5 84.9c9.9 22.2 17.3 45.7 21.7 70.3 1.4 8 8.2 14 16.3 14 9.6 0 17.2-8.4 15.5-17.9-4.9-28.4-13.4-55.5-25-81-3.9-8.6-14.5-11.4-22.5-6.4-7 4.4-9.4 13.5-6 21"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M231.2 43.6c2-4 .4-8.8-3.6-10.7s-8.8-.4-10.7 3.6L.8 468.4c-1.2 2.5-1.1 5.4.4 7.8s4 3.8 6.8 3.8h432c4.4 0 8-3.6 8-8s-3.6-8-8-8H20.9zM294 250.7c-19.4-25.8-42.6-48.6-68.7-67.7-3.9-2.9-9.5-1.4-11.7 2.9-1.8 3.6-.7 7.9 2.5 10.2 24.6 18 46.4 39.5 64.8 63.8 2.6 3.4 7.3 4.3 10.9 2 3.9-2.5 4.9-7.7 2.1-11.3zm19.6 63c14.1 29.5 23.7 61.5 27.9 95.2.5 4.1 3.9 7.2 8.1 7.2 4.7 0 8.4-4.1 7.9-8.8-4.4-35.7-14.6-69.7-29.6-100.9-2-4.3-7.4-5.7-11.3-3.1-3.5 2.2-4.7 6.7-2.9 10.4z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M315.5 253.2c-20.7-30.1-46.1-56.7-75.1-78.9l-21.9 43.8c21.4 17.4 40.4 37.7 56.2 60.4zm-23.9 52.5c13.3 24.2 23.3 50.5 29.5 78.3h49c-7-37-19.8-71.9-37.6-103.7l-40.8 25.3z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M238.3 35.4c15.8 7.9 22.2 27.1 14.3 42.9L83.8 416H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-11.1 0-21.4-5.7-27.2-15.2s-6.4-21.2-1.4-31.1l192-384c7.9-15.8 27.1-22.2 42.9-14.3"
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
