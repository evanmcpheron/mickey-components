import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CrutchIcon: React.FC<
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
                  d="M297.4 9.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0m-96 144-34.8 34.8c-12.9 12.9-21.9 29.2-25.8 47.1l-24 107.6c-1.3 5.9-4.3 11.4-8.6 15.7L9.4 457.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l98.8-98.8c4.3-4.3 9.7-7.3 15.7-8.6l107.6-23.9c17.8-4 34.1-12.9 47.1-25.8l34.7-34.7.1-.1.1-.1 74.6-74.6-45.3-45.3-52.1 51.9-66.7-66.7 52.1-52.1-45.3-45.3-74.7 74.7zm22.6 67.9 66.7 66.7-12.2 12.2c-4.3 4.3-9.7 7.3-15.7 8.6l-76.7 17 17-76.7c1.3-5.9 4.3-11.4 8.6-15.7z"
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
                  d="m329 7 176 176c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L295 41c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0zM164.2 201.9 287.4 78.6l33.9 33.9-71.4 71.5 78.1 78.1 71.4-71.4 33.9 33.9-123.2 123.2c-11.8 11.8-26.8 20-43.1 23.7l-107.6 23.9c-7.4 1.7-14.2 5.4-19.6 10.8L41 505c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l98.8-98.8c5.4-5.4 9.1-12.2 10.8-19.6L140.5 245c3.6-16.3 11.8-31.3 23.7-43.1m51.8 16-17.9 17.9c-5.4 5.4-9.1 12.2-10.8 19.6l-19.8 89 89-19.8c7.4-1.7 14.2-5.4 19.6-10.8l18-17.8z"
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
                  d="M292.7 4.7c-6.2 6.2-6.2 16.4 0 22.6l192 192c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-192-192c-6.2-6.2-16.4-6.2-22.6 0m-96.1 160.1L162.4 199a79.96 79.96 0 0 0-21.9 40.9l-24.4 122c-1.9 9.3-6.4 17.8-13.1 24.5L4.7 484.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l98.3-98.3c6.7-6.7 15.2-11.3 24.5-13.1l122-24.4c15.5-3.1 29.7-10.7 40.9-21.9l34.3-34.3 94.1-94.1-22.6-22.6-82.8 82.8L230.6 176l82.7-82.7-22.6-22.7-94 94-.1.1-.1.1zm11.4 33.8L313.4 304l-23 23c-6.7 6.7-15.2 11.3-24.5 13.1l-117.5 23.5 23.5-117.5c1.9-9.3 6.4-17.8 13.1-24.5z"
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
                  d="M308.7 20.7c-6.2 6.2-6.2 16.4 0 22.6l160 160c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-160-160c-6.2-6.2-16.4-6.2-22.6 0M297.4 9.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3m-95 160.9 82.7-82.7 11.3 11.3-77.1 77.1L336 292.7l77.1-77.1 11.3 11.3-82.7 82.7-34.3 34.4c-10.1 10.1-22.9 16.9-36.8 19.7l-122 24.3c-10.8 2.2-20.8 7.5-28.6 15.3l-98.3 98.4-8 8c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l8-8 98.2-98.4c7.8-7.8 13.1-17.8 15.3-28.6l24.4-122c2.8-13.9 9.6-26.7 19.7-36.8l34.2-34.2.1-.1.1-.1zm5.6 17L179.4 216c-7.8 7.8-13.1 17.8-15.3 28.6l-24.4 122c-.5 2.6-1.2 5.3-2 7.8 2.6-.8 5.2-1.5 7.8-2l122-24.4c10.8-2.2 20.8-7.5 28.6-15.3l28.6-28.7z"
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
                  d="M297.4 9.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3"
                />
                <path
                  className="aps-icon-foreground"
                  d="M201.4 153.4 298.7 56l45.3 45.3-74.7 74.7 66.7 66.7 74.7-74.7 45.3 45.3-97.3 97.3-.1.1-.1.1-34.7 34.7c-12.9 12.9-29.2 21.9-47.1 25.8l-107.6 23.9c-5.9 1.3-11.4 4.3-15.7 8.6l-98.8 98.8c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l98.8-98.8c4.3-4.3 7.3-9.7 8.6-15.7l23.9-107.6c4-17.8 12.9-34.1 25.8-47.1l34.8-34.8zm22.6 67.9-12.2 12.2c-4.3 4.3-7.3 9.7-8.6 15.7l-17 76.7 76.7-17c5.9-1.3 11.4-4.3 15.7-8.6l12.1-12.3z"
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
