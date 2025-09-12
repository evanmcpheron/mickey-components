import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ClothesHangerIcon: React.FC<
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
                  d="M209.8 84.8C222.3 35 267.1 0 318.5 0h1.5c61.9 0 112 50.1 112 112v6.3c0 36.5-17.8 70.8-47.8 91.8l-8.3 5.8 232.3 161.3C628.1 391 640 413.7 640 438c0 40.9-33.1 74-74 74H74c-40.9 0-74-33.1-74-74 0-24.2 11.9-47 31.8-60.8l269.8-187.4.1-.1 45.8-32c12.8-9 20.5-23.7 20.5-39.3V112c0-26.5-21.5-48-48-48h-1.5c-22 0-41.2 15-46.6 36.4l-.9 3.4c-4.3 17.1-21.7 27.6-38.8 23.3s-27.6-21.7-23.3-38.8l.9-3.4zM320 255 68.3 429.7c-2.7 1.9-4.3 4.9-4.3 8.2 0 5.5 4.5 10 10 10h492c5.5 0 10-4.5 10-10 0-3.3-1.6-6.4-4.3-8.2z"
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
                  d="M211.4 91.3C221 38.4 267 0 320.8 0 382.2 0 432 49.8 432 111.2v2.9c0 36.5-17.5 70.8-47 92.3l-23.2 16.9L611 391.7c18.1 12.2 29 32.7 29 54.5 0 36.3-29.5 65.8-65.8 65.8H65.8C29.5 512 0 482.5 0 446.2c0-21.9 10.9-42.3 29-54.5l277.2-187.4 50.6-36.8c17.1-12.4 27.2-32.3 27.2-53.5v-2.9c0-34.8-28.3-63.1-63.2-63.1-30.6 0-56.7 21.8-62.2 51.9l-3 16.4c-2.4 13-14.9 21.7-27.9 19.3s-21.7-14.9-19.3-27.9zM320 253 55.8 431.5c-4.9 3.3-7.8 8.8-7.8 14.7 0 9.8 8 17.8 17.8 17.8h508.4c9.8 0 17.8-8 17.8-17.8 0-5.9-2.9-11.4-7.8-14.7z"
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
                  d="M212.2 85.8C220.4 36.3 263.2 0 313.4 0 370.1 0 416 45.9 416 102.6v8.1c0 36.1-17.6 70-47.2 90.7l-20.7 14.5 264.4 180.9c17.2 11.7 27.5 31.2 27.5 52.1 0 34.9-28.3 63.1-63.1 63.1H63.1C28.3 512 0 483.7 0 448.9c0-20.8 10.3-40.3 27.5-52.1l283.4-194 39.5-27.7c21-14.7 33.6-38.8 33.6-64.5v-8.1c0-39-31.6-70.6-70.6-70.6-34.5 0-64 25-69.7 59l-3.9 23.6c-1.5 8.7-9.7 14.6-18.4 13.2s-14.6-9.7-13.2-18.4l3.9-23.6zM320 235.4 45.6 423.2C37.1 429 32 438.6 32 448.9c0 17.2 13.9 31.1 31.1 31.1h513.8c17.2 0 31.1-13.9 31.1-31.1 0-10.3-5.1-19.9-13.6-25.7z"
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
                  d="M224.8 87.1C229.3 37.7 271.4 0 320.9 0c52 0 95.1 42.1 95.1 94.3 0 38.8-18.6 75.3-49.9 98.1L334 215.7l279.2 186.2c16.8 11.1 26.8 29.9 26.8 50 0 33.2-26.9 60.1-60.1 60.1H60.1C26.9 512 0 485.1 0 451.9c0-20.1 10-38.9 26.8-50l288.6-192.5 41.2-30C383.9 159.6 400 128 400 94.3c0-43.1-35.7-78.3-79.1-78.3-41.4 0-76.5 31.6-80.2 72.6l-.7 8.1c-.4 4.4-4.3 7.6-8.7 7.2s-7.6-4.3-7.2-8.7zM320 225.6 35.6 415.2c-12.3 8.2-19.6 22-19.6 36.7 0 24.3 19.7 44.1 44.1 44.1h519.8c24.4 0 44.1-19.8 44.1-44.1 0-14.7-7.4-28.5-19.6-36.7z"
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
                  d="M209.8 84.8C222.3 35 267.1 0 318.5 0h1.5c61.9 0 112 50.1 112 112v6.3c0 36.5-17.8 70.8-47.8 91.8l-8.3 5.8 232.3 161.3C628.1 391 640 413.7 640 438c0 40.9-33.1 74-74 74H74c-40.9 0-74-33.1-74-74 0-24.2 11.9-47 31.8-60.8l269.8-187.4.1-.1 45.8-32c12.8-9 20.5-23.7 20.5-39.3V112c0-26.5-21.5-48-48-48h-1.5c-22 0-41.2 15-46.6 36.4l-.9 3.4c-4.3 17.1-21.7 27.6-38.8 23.3s-27.6-21.7-23.3-38.8l.9-3.4zM320 255 68.3 429.7c-2.7 1.9-4.3 4.9-4.3 8.2 0 5.5 4.5 10 10 10h492c5.5 0 10-4.5 10-10 0-3.3-1.6-6.4-4.3-8.2z"
                />
                <path className="aps-icon-foreground" d="" />
              </svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
