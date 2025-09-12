import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const PersonSkiJumpingIcon: React.FC<
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
                  d="M352 48a48 48 0 1 1 96 0 48 48 0 1 1-96 0m-224 80c0-17.7 14.3-32 32-32h144.5c46 0 65.7 58.4 29 86.2l-103.4 78.6-6.4 7.5c-2.4 2.8-4.4 6.1-5.7 9.6l-38.5 102.7 254.2-131.5c18.6-9.6 30.3-28.8 30.3-49.7V192c0-13.3 10.7-24 24-24s24 10.7 24 24v7.3c0 38.9-21.7 74.5-56.2 92.4L35 509.3c-11.7 6.1-26.2 1.5-32.3-10.3S1.2 472.7 13 466.7l111.2-57.5c-10.7-8.4-15.2-23-10.2-36.4l44-117.4c3.9-10.5 9.7-20.2 17-28.8l57.1-66.6H160c-17.7 0-32-14.3-32-32"
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
                  d="M352 48a48 48 0 1 1 96 0 48 48 0 1 1-96 0m-240 72c0-13.3 10.7-24 24-24h165.2c37 0 54.2 45.9 26.3 70.2L202.4 275 171 385l262.7-135.9c18.6-9.6 30.3-28.8 30.3-49.7V192c0-13.3 10.7-24 24-24s24 10.7 24 24v7.3c0 38.9-21.7 74.5-56.2 92.4L35 509.3c-11.7 6.1-26.2 1.5-32.3-10.3S1.2 472.7 13 466.7l113.2-58.6c-5.4-5.9-7.6-14.4-5.3-22.7l37.2-130.1c.1-.2.1-.5.2-.7l8.3-29c2.7-9.4 7.8-18 14.9-24.9 11.1-10.7 36.2-34.6 60.8-56.8H136c-13.3 0-24-10.7-24-24z"
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
                  d="M432 56a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-80 0a56 56 0 1 1 112 0 56 56 0 1 1-112 0m-240 56c0-8.8 7.2-16 16-16h179.2c24.8 0 44.8 20.1 44.8 44.8 0 18.1-10.8 34.3-27.5 41.3L207 231.5q-2.4 3.6-4.2 7.5l-60.2 135.5c-3.6 8.1-13 11.7-21.1 8.1s-11.7-13-8.1-21.1l60.2-135.4c2.6-5.9 6-11.5 9.9-16.6.5-.7 1-1.3 1.5-1.9.3-.4.6-.7.9-1.1l67.3-78.5H128c-8.8 0-16-7.2-16-16m183.4 16-42.5 49.6 59.3-24.9c4.8-2 7.9-6.7 7.9-11.8 0-7.1-5.7-12.8-12.8-12.8h-11.9zM496 176c8.8 0 16 7.2 16 16v7.3c0 35.9-20 68.8-51.9 85.3L23.3 510.2c-7.9 4.1-17.5 1-21.6-6.9s-1-17.5 6.9-21.6l436.8-225.6c21.3-11 34.6-32.9 34.6-56.9V192c0-8.8 7.2-16 16-16"
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
                  d="m244.3 170.4-56.8 66.3c-6.3 7.4-11.2 15.8-14.5 24.9l-52 144.2c-3 8.3 1.3 17.5 9.6 20.5s17.5-1.3 20.5-9.6l52-144.2c2-5.5 4.9-10.5 8.7-14.9l6.1-7.2 1.1-1.4 1.4-1 103.4-78.5c24.4-18.5 11.3-57.5-19.4-57.5H160c-8.8 0-16 7.2-16 16s7.2 16 16 16h106.9zM432 48a32 32 0 1 0-64 0 32 32 0 1 0 64 0M175.3 226.3l43.1-50.3 13.7-16H160c-17.7 0-32-14.3-32-32s14.3-32 32-32h144.5c46 0 65.7 58.4 29 86.2l-103.4 78.6-6.1 7.2c-2.5 2.9-4.5 6.3-5.8 10l-49.4 136.7L456.2 271a71.96 71.96 0 0 0 39.8-64.4V184c0-4.4 3.6-8 8-8s8 3.6 8 8v22.6c0 33.3-18.8 63.8-48.6 78.7L11.6 511.2c-4 2-8.8.4-10.7-3.6s-.4-8.8 3.6-10.7L120.1 439c-13.3-7.6-19.6-23.8-14.2-38.7l52-144.2c3.9-10.9 9.8-21.1 17.4-29.9zM400 0a48 48 0 1 1 0 96 48 48 0 1 1 0-96"
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
                  d="M488 168c13.3 0 24 10.7 24 24v7.3c0 38.9-21.7 74.5-56.2 92.4L35 509.3c-11.7 6.1-26.2 1.5-32.3-10.3S1.2 472.7 13 466.7l420.7-217.6c18.6-9.6 30.3-28.8 30.3-49.7V192c0-13.3 10.7-24 24-24"
                />
                <path
                  className="aps-icon-foreground"
                  d="M352 48a48 48 0 1 1 96 0 48 48 0 1 1-96 0m-224 80c0-17.7 14.3-32 32-32h144.5c46 0 65.7 58.4 29 86.2l-103.4 78.6-6.4 7.5c-2.4 2.8-4.4 6.1-5.7 9.6l-38.5 102.7-55.3 28.6c-10.7-8.4-15.2-23-10.2-36.4l44-117.4c3.9-10.5 9.7-20.2 17-28.8l57.1-66.6H160c-17.7 0-32-14.3-32-32"
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
