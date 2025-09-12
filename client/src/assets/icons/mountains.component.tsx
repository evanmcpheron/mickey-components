import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const MountainsIcon: React.FC<
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
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M381.1 480H55.9C25 480 0 455 0 424.1c0-10.5 3-20.8 8.6-29.7L225.2 49c6.6-10.6 18.3-17 30.8-17s24.1 6.4 30.8 17l126 200.7 48.2-79c4-6.6 11.2-10.7 19-10.7s15 4.1 19.1 10.7l132 216.3c5.8 9.6 8.9 20.6 8.9 31.8 0 33.8-27.4 61.1-61.1 61.1H381.1z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M464 424.1c0 4.4-3.5 7.9-7.9 7.9H55.9c-4.4 0-7.9-3.5-7.9-7.9q0-2.25 1.2-4.2L256 90.3l206.8 329.6q1.2 1.95 1.2 4.2m-464 0C0 455 25 480 55.9 480h523c33.8 0 61.1-27.4 61.1-61.1 0-11.2-3.1-22.2-8.9-31.8l-132-216.3C495 164.1 487.8 160 480 160s-15 4.1-19.1 10.7l-48.2 79L286.8 49c-6.6-10.6-18.3-17-30.8-17s-24.1 6.4-30.8 17L8.6 394.4C3 403.3 0 413.6 0 424.1"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M480 424.1c0 13.2-10.7 23.9-23.9 23.9H55.9C42.7 448 32 437.3 32 424.1c0-4.5 1.3-8.9 3.7-12.7L252.4 66c.8-1.3 2.2-2 3.6-2s2.9.8 3.6 2l216.7 345.4c2.4 3.8 3.7 8.2 3.7 12.7m-480 0C0 455 25 480 55.9 480h523c33.8 0 61.1-27.4 61.1-61.1 0-11.2-3.1-22.2-8.9-31.8l-132-216.3C495 164.1 487.8 160 480 160s-15 4.1-19.1 10.7l-48.2 79L286.8 49c-6.6-10.6-18.3-17-30.8-17s-24.1 6.4-30.8 17L8.6 394.4C3 403.3 0 413.6 0 424.1M431.7 280l48.3-79.1 123.7 202.8c2.8 4.6 4.3 9.8 4.3 15.2 0 16.1-13 29.1-29.1 29.1h-72.3c3.4-7.3 5.4-15.4 5.4-23.9 0-10.5-3-20.8-8.6-29.7z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M496 424.1c0 22-17.9 39.9-39.9 39.9H55.9c-22 0-39.9-17.9-39.9-39.9 0-7.5 2.1-14.9 6.1-21.2L238.8 57.5C242.5 51.6 249 48 256 48s13.5 3.6 17.2 9.5l216.7 345.4c4 6.4 6.1 13.7 6.1 21.2m-496 0C0 455 25 480 55.9 480h523c33.8 0 61.1-27.4 61.1-61.1 0-11.2-3.1-22.2-8.9-31.8l-132-216.3C495 164.1 487.8 160 480 160s-15 4.1-19.1 10.7l-48.2 79L286.8 49c-6.6-10.6-18.3-17-30.8-17s-24.1 6.4-30.8 17L8.6 394.4C3 403.3 0 413.6 0 424.1m422.2-159.2 52.4-85.9c1.2-1.9 3.2-3 5.4-3s4.3 1.2 5.4 3l132 216.3c4.3 7.1 6.6 15.2 6.6 23.5 0 24.9-20.2 45.1-45.1 45.1h-83.7c10.3-10.1 16.8-24.3 16.8-39.9 0-10.5-3-20.8-8.6-29.7z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="m412.7 249.7 48.2-79c4.1-6.6 11.3-10.7 19.1-10.7s15 4.1 19.1 10.7l132 216.3c5.8 9.6 8.9 20.6 8.9 31.8 0 33.8-27.4 61.1-61.1 61.1H456.1c30.9 0 55.9-25 55.9-55.9 0-10.5-3-20.8-8.6-29.7z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M55.9 480h400.2c30.9 0 55.9-25 55.9-55.9 0-10.5-3-20.8-8.6-29.7L286.8 49c-6.6-10.6-18.3-17-30.8-17s-24.1 6.4-30.8 17L8.6 394.4C3 403.3 0 413.6 0 424.1 0 455 25 480 55.9 480"
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
