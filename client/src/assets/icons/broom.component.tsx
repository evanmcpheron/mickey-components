import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BroomIcon: React.FC<
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
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6-12.5 0-22.6 10.1-22.6 22.6v29.1L364.3 320h29.1c12.5 0 22.6-10.1 22.6-22.6 0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4 222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8c-22.3 22.3-34.8 52.5-34.8 84 0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9 0 502.1 9.9 512 22.1 512h173.3c38.8 0 75.9-15.4 103.4-42.8 30.6-30.6 45.9-73.1 42.3-115.8"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M569 41c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L335 207l-39-39c-5.1-5.1-12.1-8-19.4-8-12.2 0-23 8.1-26.3 19.9l-15.9 55.6-.6-.1c-46.4-7.1-93.5 8.3-126.7 41.5L97 287c-18.4 18.4-29.7 42.4-32.4 68-.4 3.8-.6 7.7-.6 11.6 0 9.6 7.8 17.3 17.3 17.3H104l-22.7 21-24.2 22.4-49.9 46.1C2.6 477.6 0 483.5 0 489.7 0 502 10 512 22.3 512H195c39.1 0 76.6-15.5 104.2-43.2 33.2-33.2 48.6-80.2 41.5-126.7l-.1-.6 55.6-15.9c11.8-3.4 19.9-14.1 19.9-26.3 0-7.3-2.9-14.2-8-19.4l-39-39zM278.8 254.8l8-28.1 62.4 62.4-28.1 8zm-52.3 28 9.8 1.5 55.4 55.4 1.5 9.8c4.8 31.3-5.6 63-28 85.4-18.6 18.6-43.9 29.1-70.3 29.1H88.1l48.5-44.7c14.5-13.4 19.3-34.3 12.1-52.7-5.4-13.7-16.6-23.9-30.1-28.3 3.1-6.4 7.3-12.2 12.4-17.3l10.2-10.2c22.4-22.4 54.1-32.8 85.4-28z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M571.3 27.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-208 208-45.3-45.3c-4.8-4.8-11.2-7.4-17.9-7.4-12.4 0-23 9-25 21.2l-9.1 54.7-9.8-1.4c-46.3-6.6-93 9-126 42L97 287c-21.1 21.1-33 49.8-33 79.7 0 1.3.1 2.5.4 3.7 1.7 7.8 8.6 13.6 16.9 13.6H96l-14.7 14.7-15 15-59.7 59.7c-4.2 4.2-6.6 10-6.6 16C0 501.9 10.1 512 22.6 512h171.9c39.4 0 77.2-15.6 105-43.5 33.1-33.1 48.6-79.7 42-126l-1.4-9.8 54.7-9.1c12.2-2 21.2-12.6 21.2-25 0-6.7-2.7-13.2-7.4-17.9l-45.3-45.3 208-208zM274.7 242.7l7.2-43.5 94.9 94.9-43.5 7.2-58.7-58.7zM229 266.2l24.7 3.5 52.6 52.6 3.5 24.7c5.2 36.3-7 72.9-33 98.9-21.8 21.8-51.4 34.1-82.3 34.1H45.3l73.4-73.4c9.2-9.2 11.9-22.9 6.9-34.9-4.8-11.5-15.8-19.2-28.2-19.7 2.9-16 10.7-30.8 22.3-42.4l10.5-10.5c25.9-25.9 62.6-38.1 98.9-33z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M573.7 13.7c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L332 232.7 289.3 190c-3.8-3.8-9-6-14.4-6-10.3 0-18.9 7.6-20.2 17.8l-4.7 37.7-32.7-2.5c-41.4-3.2-82.2 11.9-111.6 41.3L97 287c-21.1 21.1-33 49.8-33 79.7 0 9.6 7.8 17.3 17.3 17.3H112l-18.7 16-85.6 73.4C2.8 477.6 0 483.7 0 490.1 0 502.2 9.8 512 21.9 512H197c37.8 0 74-15 100.7-41.7 29.4-29.4 44.5-70.2 41.3-111.6l-2.5-32.7 37.7-4.7c10.2-1.3 17.8-9.9 17.8-20.2 0-5.4-2.1-10.6-6-14.4L343.3 244zM274.9 200c1.2 0 2.3.5 3.1 1.3l96.7 96.7c.8.8 1.3 1.9 1.3 3.1 0 2.2-1.6 4-3.8 4.3l-45.1 5.6-62.1-62.1 5.6-45.1c.3-2.2 2.1-3.8 4.3-3.8m-26 55.5 71.6 71.6 2.5 32.8c2.8 36.8-10.6 73-36.6 99-23.7 23.7-55.8 37-89.4 37l-175.1.1c-3.3 0-5.9-2.6-5.9-5.9 0-1.7.8-3.4 2.1-4.5l104.3-89.4c5.1-4.4 6.9-11.4 4.6-17.7s-8.3-10.4-15-10.4H81.3c-.7 0-1.3-.6-1.3-1.3 0-25.6 10.2-50.2 28.3-68.4l8.7-8.7c26.1-26.1 62.3-39.5 99-36.6l32.8 2.5z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M566.6 9.4c12.5 12.5 12.5 32.8 0 45.3l-192 192-45.3-45.3 192-192c12.5-12.5 32.8-12.5 45.3 0"
                />
                <path
                  className="aps-icon-foreground"
                  d="M409.4 281.4 294.6 166.6c-4.2-4.2-10-6.6-16-6.6-12.5 0-22.6 10.1-22.6 22.6v29.1L364.3 320h29.1c12.5 0 22.6-10.1 22.6-22.6 0-6-2.4-11.8-6.6-16m-68.3 72L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8c-22.3 22.3-34.8 52.5-34.8 84 0 6.8 7.1 11.2 13.2 8.2l29.9-15c8.3-4.2 15.9 6.9 8.9 13.1L7.3 473.4C2.7 477.6 0 483.6 0 489.9 0 502.1 9.9 512 22.1 512h173.3c38.8 0 75.9-15.4 103.4-42.8 30.6-30.6 45.9-73.1 42.3-115.8"
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
