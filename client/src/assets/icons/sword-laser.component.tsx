import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SwordLaserIcon: React.FC<
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
                  d="M505 7c9.1 9.1 9.4 23.7.7 33.2L285.2 281.3l-54.4-54.4 241-220.6c9.5-8.7 24.1-8.3 33.2.7M195.3 236.7l80 80c6.2 6.2 6.2 16.4 0 22.6-6.1 6.1-15.8 6.2-22.1.5l-81-81c-5.8-6.3-5.6-16 .5-22.1 6.2-6.2 16.4-6.2 22.6 0m-57.7 57.7 23.7-23.7 80 80-23.7 23.7zm-11.3 11.3 80 80-20.7 20.7-80-80zM87 330.3l94.7 94.7-2.3 2.3-74.4 74.4c-6.7 6.6-15.6 10.3-25 10.3s-18.3-3.7-25-10.3L10.3 457C3.7 450.3 0 441.4 0 432s3.7-18.3 10.3-25l74.3-74.3 2.3-2.3z"
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
                  d="M505.7 40.2c8.7-9.5 8.3-24.1-.7-33.2s-23.7-9.4-33.2-.7L230.7 226.8l54.4 54.4zM185 231c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l.7.7-59 59L10.3 407C3.7 413.7 0 422.6 0 432s3.7 18.3 10.3 25L55 501.7c6.6 6.6 15.6 10.3 25 10.3s18.3-3.7 25-10.3l82.3-82.3 59-59 .7.7c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96-96zm-20.3 143L138 347.3l12.4-12.4 26.7 26.7zm-49.4-4.1 26.7 26.7-62 62.1L53.3 432l62.1-62.1zm57.7-57.6 12.7-12.7 26.7 26.7-12.7 12.7z"
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
                  d="m503.8 57.1-210 232.7-22.7-22.7L480 35.7V32h-3.7L244.8 240.9l-22.7-22.7 232.8-210c5.8-5.3 13.5-8.2 21.4-8.2h3.7c17.7 0 32 14.3 32 32v3.7c0 7.9-2.9 15.6-8.2 21.4M187.3 228.7l16 16 64 64 16 16c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-4.7-4.7-57.9 57.9c1.2 2.3 1.9 4.9 1.9 7.5 0 4.2-1.7 8.3-4.7 11.3L118.6 496c-10.2 10.2-24.1 16-38.6 16s-28.4-5.8-38.6-16L16 470.6C5.8 460.4 0 446.5 0 432s5.8-28.4 16-38.6l76.7-76.7c5.1-5.1 12.8-6 18.8-2.8l57.9-57.9-4.7-4.7c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0M152 318.6 134.6 336l41.4 41.4 17.4-17.4zm22.6-22.6 41.4 41.4 17.4-17.4-41.4-41.4zm-136 120c-4.2 4.2-6.6 10-6.6 16s2.4 11.8 6.6 16L64 473.4c4.2 4.2 10 6.6 16 6.6s11.8-2.4 16-6.6l65.4-65.4-57.4-57.4z"
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
                  d="M287.5 294.9 504.8 48.2c4.7-5.3 7.2-12.1 7.2-19.2 0-16-13-29-29-29-7.1 0-13.9 2.6-19.2 7.2L217.1 224.5l11.3 11.3L474.3 19.3c2.4-2.1 5.4-3.3 8.6-3.3 7.2 0 13 5.8 13 13 0 3.2-1.2 6.2-3.3 8.6l-216.5 246 11.3 11.3zm-105.8-60.6c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l10.3 10.4-68.7 68.7-2.3-2.3c-3.1-3.1-8.2-3.1-11.3 0L13.7 407C4.9 415.8 0 427.6 0 440s4.9 24.2 13.7 33L39 498.3C47.7 507 59.6 512 72 512s24.2-4.9 33-13.7l84.7-84.7c3.1-3.1 3.1-8.2 0-11.3l-2.3-2.3 68.6-68.7 10.3 10.3c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-16-16-64-64-16-16zm10.3 33 52.7 52.7-28.7 28.7-2.3-2.3-48-48-2.3-2.3zM123.3 336l28.7-28.7 2.3 2.3 48 48 2.3 2.3-28.6 28.8zM25 418.3l79-79 2.3 2.3 64 64 2.3 2.3-79 79c-5.7 5.7-13.5 9-21.7 9s-15.9-3.2-21.7-9L25 461.7c-5.7-5.7-9-13.5-9-21.7s3.2-15.9 9-21.7"
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
                  d="M505.7 40.2c8.7-9.5 8.3-24.1-.7-33.2s-23.7-9.4-33.2-.7L207.1 248.5l56.4 56.4z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M172.7 236.7c-6.1 6.1-6.2 15.8-.5 22.1l81 81c6.3 5.8 16 5.6 22.1-.5 6.2-6.2 6.2-16.4 0-22.6l-80-80c-6.2-6.2-16.4-6.2-22.6 0m-11.3 33.9-23.7 23.7 80 80 23.7-23.7zm45 115-80-80-20.7 20.7 80 80zM181.7 425 87 330.3l-2.3 2.3L10.3 407C3.7 413.7 0 422.6 0 432s3.7 18.3 10.3 25L55 501.7c6.6 6.6 15.6 10.3 25 10.3s18.3-3.7 25-10.3l74.3-74.3 2.3-2.3z"
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
