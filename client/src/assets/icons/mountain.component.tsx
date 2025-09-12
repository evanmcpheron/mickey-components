import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const MountainIcon: React.FC<
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
                  d="M256 32c12.5 0 24.1 6.4 30.8 17l216.6 345.4c5.6 8.9 8.6 19.2 8.6 29.7 0 30.9-25 55.9-55.9 55.9H55.9C25 480 0 455 0 424.1c0-10.5 3-20.8 8.6-29.7L225.2 49c6.6-10.6 18.3-17 30.8-17m65 192-65-103.6-79.1 126.1 18.3 24.4c6.4 8.5 19.2 8.5 25.6 0l25.6-34.1c6-8.1 15.5-12.8 25.6-12.8z"
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
                  d="M464 424.1c0 4.4-3.5 7.9-7.9 7.9H55.9c-4.4 0-7.9-3.5-7.9-7.9q0-2.25 1.2-4.2L149.6 260l39.5 50.8c4.6 5.9 11.7 9.3 19.2 9.3s14.5-3.6 19-9.6L268 256h92l102.8 163.9q1.2 1.95 1.2 4.2M329.8 208H256c-7.6 0-14.7 3.6-19.2 9.6l-29.1 38.9-30.9-39.8L256 90.3zM55.9 480h400.2c30.9 0 55.9-25 55.9-55.9 0-10.5-3-20.8-8.6-29.7L286.8 49c-6.6-10.6-18.3-17-30.8-17s-24.1 6.4-30.8 17L8.6 394.4C3 403.3 0 413.6 0 424.1 0 455 25 480 55.9 480"
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
                  d="M480 424.1c0 13.2-10.7 23.9-23.9 23.9H55.9C42.7 448 32 437.3 32 424.1c0-4.5 1.3-8.9 3.7-12.7l104.5-166.6 55.3 69.2c3.1 3.9 7.8 6.1 12.7 6s9.6-2.4 12.6-6.4L264 256h114.9l97.5 155.4c2.4 3.8 3.7 8.2 3.7 12.7zM358.8 224H256c-5 0-9.8 2.4-12.8 6.4l-35.6 47.5-49.4-61.8L252.4 66c.8-1.3 2.2-2 3.6-2s2.9.8 3.6 2l99.1 158zM55.9 480h400.2c30.9 0 55.9-25 55.9-55.9 0-10.5-3-20.8-8.6-29.7L286.8 49c-6.6-10.6-18.3-17-30.8-17s-24.1 6.4-30.8 17L8.6 394.4C3 403.3 0 413.6 0 424.1 0 455 25 480 55.9 480"
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
                  d="M496 424.1c0 22-17.9 39.9-39.9 39.9H55.9c-22 0-39.9-17.9-39.9-39.9 0-7.5 2.1-14.9 6.1-21.2l108.5-173 55.7 55.7c3.1 3.1 8.2 3.1 11.3 0l61.7-61.6h118.4l112.2 178.9c4 6.4 6.1 13.7 6.1 21.2M367.6 208H256c-2.1 0-4.2.8-5.7 2.3L192 268.7l-50.3-50.3-2.3-2.3 99.4-158.6C242.5 51.6 249 48 256 48s13.5 3.6 17.2 9.5zM55.9 480h400.2c30.9 0 55.9-25 55.9-55.9 0-10.5-3-20.8-8.6-29.7L286.8 49c-6.6-10.6-18.3-17-30.8-17s-24.1 6.4-30.8 17L8.6 394.4C3 403.3 0 413.6 0 424.1 0 455 25 480 55.9 480"
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
                  d="M396.6 224H272c-10.1 0-19.6 4.7-25.6 12.8l-25.6 34.1c-6.4 8.5-19.2 8.5-25.6 0l-59.5-79.3L225.2 49c6.6-10.6 18.3-17 30.8-17s24.1 6.4 30.8 17z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M396.6 224H272c-10.1 0-19.6 4.7-25.6 12.8l-25.6 34.1c-6.4 8.5-19.2 8.5-25.6 0l-59.5-79.3L8.6 394.4C3 403.3 0 413.6 0 424.1 0 455 25 480 55.9 480h400.2c30.9 0 55.9-25 55.9-55.9 0-10.5-3-20.8-8.6-29.7z"
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
