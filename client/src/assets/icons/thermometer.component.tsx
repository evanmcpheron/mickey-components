import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ThermometerIcon: React.FC<
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
                  d="M96 382.1v-88.8c0-14.9 5.9-29.1 16.4-39.6l27.3-27.3 57 57c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-57-57 41.4-41.4 57 57c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-57-57 41.4-41.4 57 57c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-57-57 45.5-45.5C355.2 10.9 381.4 0 408.8 0 465.8 0 512 46.2 512 103.2c0 27.4-10.9 53.6-30.2 73L258.3 399.6a55.92 55.92 0 0 1-39.6 16.4h-88.8L41 505c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l89-89z"
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
                  d="M369.8 64.2c10.3-10.4 24.4-16.2 39-16.2 30.5 0 55.2 24.7 55.2 55.2 0 14.6-5.8 28.7-16.2 39L224.4 365.7c-1.5 1.5-3.5 2.3-5.7 2.3H144v-74.7c0-2.1.8-4.2 2.3-5.7l27.3-27.3 31 31c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-31-31 41.4-41.4 31 31c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-31-31 41.4-41.4 31 31c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-31-31 45.5-45.5zM96 293.3v88.8L7 471c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l89-89h88.8c14.9 0 29.1-5.9 39.6-16.4l223.5-223.3c19.4-19.4 30.2-45.6 30.2-73C512 46.2 465.8 0 408.8 0c-27.4 0-53.6 10.9-73 30.2L112.4 253.7A55.92 55.92 0 0 0 96 293.3"
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
                  d="M352.8 53.8 310.6 96l36.7 36.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L288 118.6 246.6 160l36.7 36.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L224 182.6 182.6 224l36.7 36.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L160 246.6l-22.6 22.6c-6 6-9.4 14.1-9.4 22.6V384h92.1c8.5 0 16.6-3.4 22.6-9.4l215.5-215.4c14-14 21.8-32.9 21.8-52.7 0-41.1-33.4-74.5-74.5-74.5-19.8 0-38.7 7.8-52.7 21.8m-76.1 30.9 53.5-53.5c20-20 47.1-31.2 75.3-31.2C464.3 0 512 47.7 512 106.5c0 28.2-11.2 55.3-31.2 75.3L265.4 397.3c-12 12-28.3 18.7-45.3 18.7H118.6l-91.3 91.3c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L96 393.4V291.9c0-17 6.7-33.3 18.7-45.3l33.9-33.9 64-64 64-64z"
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
                  d="M355.1 40.2 299.3 96l50.3 50.3c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0L288 107.3 235.3 160l50.3 50.3c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0L224 171.3 171.3 224l50.3 50.3c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0L160 235.3l-36.3 36.3c-7.5 7.5-11.7 17.7-11.7 28.3V400h100.1c10.6 0 20.8-4.2 28.3-11.7l231.4-231.4c15.5-15.5 24.2-36.5 24.2-58.3 0-45.7-36.9-82.6-82.5-82.6-21.9 0-42.9 8.7-58.3 24.2zm-72.7 50.1 61.5-61.5C362.3 10.4 387.4 0 413.5 0 467.9 0 512 44.1 512 98.5c0 26.1-10.4 51.2-28.9 69.7L251.7 399.6a55.92 55.92 0 0 1-39.6 16.4H107.3l-93.6 93.7c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3L96 404.7V299.9c0-14.9 5.9-29.1 16.4-39.6l41.9-41.9 64-64 64-64z"
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
                  d="M96 382.1v-88.8c0-14.9 5.9-29.1 16.4-39.6l27.3-27.3 57 57c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-57-57 41.4-41.4 57 57c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-57-57 41.4-41.4 57 57c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-57-57 45.5-45.5C355.2 10.9 381.4 0 408.8 0 465.8 0 512 46.2 512 103.2c0 27.4-10.9 53.6-30.2 73L258.3 399.6a55.92 55.92 0 0 1-39.6 16.4h-88.8L41 505c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l89-89z"
                />
                <path
                  className="aps-icon-foreground"
                  d="m139.7 226.3 57 57c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-57-57zm64-64 57 57c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-57-57zm64-64 57 57c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-57-57z"
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
