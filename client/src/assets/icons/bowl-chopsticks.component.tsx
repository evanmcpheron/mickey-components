import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BowlChopsticksIcon: React.FC<
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
                  d="m18.5 125.1 473.8-74c11.3-1.8 19.7-11.5 19.7-23 0-14.6-13.3-25.6-27.6-22.9L13.1 93.6C5.5 95 0 101.6 0 109.3c0 9.8 8.8 17.3 18.5 15.8M0 159.8c0 9 7.3 16.2 16.2 16.2h472.2c13 0 23.6-10.6 23.6-23.6 0-13.3-11-24-24.4-23.6L15.7 143.5C7 143.8 0 151 0 159.8M33.6 224C15.4 224 .9 239.3 2 257.5c5.4 91.7 59.7 169.7 136.4 209.7l1.2 9.7c2.5 20 19.5 35 39.7 35h153.4c20.2 0 37.2-15 39.7-35l1.2-9.7c76.8-40 131-118 136.4-209.7 1.1-18.2-13.4-33.5-31.6-33.5z"
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
                  d="M18.5 125.1c-9.7 1.5-18.5-6-18.5-15.8 0-7.7 5.5-14.3 13.1-15.7L484.4 5.2c14.3-2.7 27.6 8.3 27.6 22.9 0 11.5-8.4 21.2-19.7 23zM0 159.8c0-8.8 7-16 15.7-16.2l471.9-14.7c13.4-.6 24.4 10.1 24.4 23.5 0 13-10.6 23.6-23.6 23.6H16.2C7.3 176 0 168.7 0 159.8m151.5 272.7c11.5 5.2 20.4 14.7 25 26.4 1.2 3.1 4.2 5.1 7.5 5.1h144c3.3 0 6.3-2 7.5-5.1 4.5-11.7 13.5-21.2 25-26.4C421.6 404.8 464 343.3 464 272H48c0 71.3 42.4 132.8 103.5 160.5M0 272c0-26.5 21.5-48 48-48h416c26.5 0 48 21.5 48 48 0 90.8-54.1 169-131.7 204.2-8.1 21-28.4 35.8-52.3 35.8H184c-23.8 0-44.2-14.9-52.3-35.8C54.1 441 0 362.8 0 272"
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
                  d="m499.1 31.7-480 96C10.5 129.4 2 123.8.3 115.1S4.2 98 12.9 96.3l480-96c8.7-1.7 17.1 3.9 18.8 12.6s-3.9 17.1-12.6 18.8M512 142.9c.6 8.8-6.1 16.4-14.9 17l-480 32c-8.8.6-16.4-6.1-17-14.9s6.1-16.4 14.9-17l480-32c8.8-.6 16.4 6.1 17 14.9M144.8 445.5c7.7 3.7 13.7 10.3 16.5 18.4 3.3 9.4 12.2 16.1 22.7 16.1h144c10.4 0 19.4-6.7 22.7-16.1 2.8-8.1 8.7-14.7 16.5-18.4 61.4-29.2 105-90.1 109.3-162.2l.6-10.3c.5-9.2-6.8-16.9-16-16.9H50.9c-9.2 0-16.5 7.7-16 16.9l.6 10.3c4.2 72.1 47.8 133 109.3 162.2M3 274.8C1.4 247.2 23.3 224 50.9 224h410.2c27.6 0 49.5 23.2 47.9 50.8l-.6 10.3c-4.9 84.1-55.9 155.1-127.5 189.2-7.6 22-28.4 37.7-52.9 37.7H184c-24.5 0-45.3-15.7-52.9-37.6C59.5 440.3 8.5 369.3 3.6 285.2z"
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
                  d="m505.6 15.8-496 104c-4.3.9-8.6-1.9-9.5-6.2s1.9-8.6 6.2-9.5l496-104c4.3-.9 8.6 1.9 9.5 6.2s-1.9 8.6-6.2 9.5m6.4 111.7c.3 4.4-3.1 8.2-7.5 8.5l-496 32c-4.4.3-8.2-3.1-8.5-7.5s3.1-8.2 7.5-8.5l496-32c4.4-.3 8.2 3.1 8.5 7.5M136 459c4.5 2.2 7.7 6.4 8.7 11.3 2.9 14.7 15.9 25.8 31.4 25.8H336c15.5 0 28.5-11.1 31.4-25.8 1-4.9 4.2-9.1 8.7-11.3 65.5-32 111.8-97.4 116.4-174.7l1.6-27.3c.5-9.2-6.8-16.9-16-16.9H33.9c-9.2 0-16.5 7.7-16 16.9l1.6 27.3C24 361.6 70.4 427 135.9 459zM2 257.9C.9 239.5 15.5 224 33.9 224h444.2c18.4 0 33 15.5 31.9 33.9l-1.6 27.3c-4.9 83.3-54.8 153.7-125.3 188.2-4.3 22-23.8 38.7-47.1 38.7H176c-23.3 0-42.8-16.6-47.1-38.7C58.4 438.9 8.5 368.4 3.6 285.2z"
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
                  d="m18.5 125.1 473.8-74c11.3-1.8 19.7-11.5 19.7-23 0-14.6-13.3-25.6-27.6-22.9L13.1 93.6C5.5 95 0 101.6 0 109.3c0 9.8 8.8 17.3 18.5 15.8m-2.7 18.4C7 143.8 0 151 0 159.7c0 9 7.3 16.2 16.2 16.2h472.2c13 0 23.6-10.6 23.6-23.6 0-13.3-11-24-24.4-23.6L15.7 143.5z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M33.6 224C15.4 224 .9 239.3 2 257.5c5.4 91.7 59.7 169.7 136.4 209.7l1.2 9.7c2.5 20 19.5 35 39.7 35h153.4c20.2 0 37.2-15 39.7-35l1.2-9.7c76.8-40 131-118 136.4-209.7 1.1-18.2-13.4-33.5-31.6-33.5z"
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
