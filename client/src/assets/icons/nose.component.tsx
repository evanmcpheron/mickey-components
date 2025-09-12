import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const NoseIcon: React.FC<
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
                  d="M324.2 231.9 421 338.3c17.4 19.1 27 44 27 69.9 0 57.3-46.5 103.8-103.9 103.8h-9.4c-32.3 0-63.6-11.3-88.4-32l-6.4-5.3c-20.7-17.2-46.7-26.7-73.6-26.7-21.2 0-38.3 17.2-38.3 38.3v5.7q0 2.55.3 5.1c.8 7.1-4 14.9-11.2 14.9H112C50.8 512 1.1 462.9 0 401.9 1 345.3 44.3 298 100.9 292.4l44.7-4.5c8.8-.9 15.2-8.7 14.3-17.5s-8.7-15.2-17.5-14.3l-44.7 4.5q-10.65 1.05-20.7 3.6c-6.4 1.6-13-3-13-9.7V32C64 14.3 78.3 0 96 0h61.6c11.4 0 21.9 6 27.6 15.9l75.6 129.6c18.1 30.9 39.3 59.9 63.4 86.4"
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
                  d="M205.3 12.9c-6.1-11.7-20.6-16.3-32.4-10.2s-16.3 20.6-10.2 32.4C237 178 327.3 280.7 374.8 329.6c16 16.4 25.2 37.6 25.2 59.2 0 41.5-33.7 75.2-75.2 75.2h-10.9l-17-17-30.1-30.1c-21.1-21.1-49.7-32.9-79.5-32.9-32.8 0-59.4 26.6-59.4 59.4v4.6c0 35.3 28.7 64 64 64h132.9c68 0 123.2-55.2 123.2-123.2 0-35.4-15.1-68.3-38.8-92.7-45.5-46.7-132.4-145.7-203.9-283.2m27.6 437.9 13.2 13.2H192c-8.8 0-16-7.2-16-16v-4.6c0-6.3 5.1-11.4 11.4-11.4 17.1 0 33.5 6.8 45.6 18.9zM141 303.5c13-2.8 21.2-15.5 18.4-28.5s-15.5-21.2-28.5-18.4l-22.8 4.9C45.1 274.9 0 330.7 0 395.2c0 40.6 18 79.1 49.2 105.1l7.4 6.2c10.2 8.5 25.3 7.1 33.8-3.1s7.1-25.3-3.1-33.8l-7.4-6.2C59.7 446.5 48 421.5 48 395.2c0-41.9 29.2-78 70.2-86.8z"
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
                  d="M190.2 8.6c-4.1-7.8-13.7-10.9-21.6-6.8s-10.9 13.7-6.8 21.6c74 142.4 171.9 248.6 223.7 299.3 19.1 18.7 30.5 43.7 30.5 69.6 0 48.5-39.3 87.7-87.7 87.7h-34l-2.3-2.6-38.7-43.5c-19.1-21.5-46.5-33.8-75.3-33.8-27.6 0-49.9 22.3-49.9 49.9v6c0 30.9 25.1 56 56 56h144.2c66.1 0 119.7-53.6 119.7-119.7 0-35.3-15.5-68.3-40.1-92.4-50.5-49.5-145.8-153-217.7-291.2zm39.1 446.5 22.2 24.9H184c-13.3 0-24-10.7-24-24v-6.1c0-9.9 8-17.9 17.9-17.9 19.7 0 38.4 8.4 51.4 23.1m-98-151.4c8.6-1.9 14.1-10.4 12.3-19s-10.4-14.1-19-12.3l-22.8 4.9C42.4 290 0 342.4 0 403.2c0 38.2 17 74.5 46.3 98.9l7.4 6.2c6.8 5.7 16.9 4.7 22.5-2s4.7-16.9-2-22.5l-7.4-6.2c-22-18.5-34.8-45.7-34.8-74.4 0-45.6 31.9-85.1 76.5-94.6z"
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
                  d="M183.1 4.3c-2-3.9-6.9-5.4-10.8-3.4s-5.4 6.9-3.4 10.8c71.9 138.2 170.2 242.2 224.9 293.9 23.6 22.4 38.2 52.9 38.2 84.9 0 58.3-47.2 105.5-105.5 105.5h-35.2l-5.7-5.7-46.1-46.1c-18.1-18.1-42.6-28.2-68.2-28.2-24 0-43.4 19.4-43.4 43.4v4.6c0 26.5 21.5 48 48 48h150.6c67.1 0 121.5-54.4 121.5-121.5 0-36.9-16.8-71.5-43.2-96.6-54-51.1-150.9-153.6-221.7-289.7zm45.1 451.2 40.5 40.5H176c-17.7 0-32-14.3-32-32v-4.6c0-15.1 12.3-27.4 27.4-27.4 21.3 0 41.8 8.5 56.9 23.6zM121.7 303.8c4.3-.9 7.1-5.2 6.1-9.5s-5.2-7.1-9.5-6.1l-22.8 4.9C39.8 305 0 354.2 0 411.2 0 447 15.9 481 43.5 504l7.4 6.2c3.4 2.8 8.4 2.4 11.3-1s2.4-8.4-1-11.3l-7.4-6.2c-24-19.9-37.8-49.4-37.8-80.5 0-49.4 34.5-92.1 82.8-102.5l22.8-4.9z"
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
                  d="M88 0C74.7 0 64 10.7 64 24v230.5c0 6.6 6.6 11.3 13 9.7q10.05-2.55 20.7-3.6l44.7-4.5c8.8-.9 16.6 5.5 17.5 14.3s-5.5 16.6-14.3 17.5l-44.7 4.5C44.3 298 1 345.3 0 401.9 1 462.9 50.8 512 112 512h12c-7.5-10-12-22.5-12-36 0-33.1 26.9-60 60-60h4.8c19.7 0 38.3 9 50.6 24.3l15.4 19.2c25.8 32.3 64.6 51.4 105.8 52.4 55.2-1.6 99.4-46.8 99.4-102.3 0-28.1-11.4-54.4-30.4-74.1C369.9 286 259.3 163 181.3 12.9 177.2 5 169 0 160 0z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M124 512c-7.5-10-12-22.5-12-36 0-33.1 26.9-60 60-60h4.8c19.7 0 38.3 9 50.6 24.3l15.4 19.2c25.8 32.3 64.6 51.4 105.8 52.4z"
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
