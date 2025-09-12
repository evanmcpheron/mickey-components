import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const PompebledIcon: React.FC<
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
                  d="M460.3 172c-46.2-33.2-117-14.1-165.1 44.3-5.9 8.6-17.2 10.6-25.6 4.5s-10.3-17.6-4.4-26.2c36.9-66.9 29-141.3-17.7-173.5C188.6-20.6 103.1 1.5 56.9 70.4c-85.5 126.3-77.6 313.4 44.2 400.4 121.4 87 296.3 27.7 381.8-98.6 46.2-68.4 36.4-158.5-22.6-200.2"
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
                  d="M254.4 22.8c45.2 31.3 55.3 91.3 38 147.2 45.1-35.6 103.5-47.2 148.3-15 64.6 45.8 71.6 140.2 25.7 208.1C386.7 480.8 219.2 542 98.5 455.5-21.8 369.5-25.9 190 53.9 72.2c46-68.6 135.3-95.4 200.5-49.4m-27.7 39.3c-38-26.9-98.3-15-133 36.9l-.1.1c-69.9 103.1-60.2 251 32.8 317.4 91.7 65.7 230.3 23 300.2-80.2 34.9-51.7 24.7-114.9-13.8-142.1l-.1-.1c-25.6-18.4-73.5-11.7-111.5 33.9-12.9 17.5-37.4 21.8-55.4 8.7-17.6-12.7-21.9-36.7-10.4-54.7 28.6-52.7 17.8-101.6-8.5-119.7z"
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
                  d="M257.2 22.7c53.3 36.8 58 117.1 21.4 183.5l-.4.7-.5.7c-.6.9-.4 2 .3 2.5.2.2.4.2.4.2h.2s.2 0 .3-.1.3-.2.4-.5l.4-.6.4-.5c47.8-58 123.3-82.4 176.4-44.3 64 45.3 72.1 140.1 25.2 209.7-83.4 123.2-257.1 185-380.5 96.5l9.3-13-9.3 13C-21.9 382.3-27.4 196.3 56.1 73.1L69.3 82l-13.2-9c47-70.1 136.8-95.8 201.1-50.3m-18.4 26.1C192.6 16.1 122.2 31.9 82.6 90.9v.1C5.7 204.5 15 369.3 120.1 444.4 224.2 519 378.6 469.5 455.5 356c39.6-58.7 29.4-132.7-17.2-165.7l-.1-.1c-33.4-24-90.3-12.8-132.7 38.3-10.7 14.7-31 18.3-46 7.5-14.7-10.6-18.2-30.8-8.5-45.8 32.1-58.8 22.1-117.8-12-141.2l-.2-.1z"
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
                  d="M252.4 21.9c50 34.5 56.3 111.9 19.6 178.5l-.2.4-.2.3c-3.3 4.7-2.1 11 2.4 14.3 4.4 3.2 10.3 2.2 13.5-2.4l.2-.3.2-.3c48-58.2 121.1-80 170.8-44.3 61.5 43.5 70.5 136 23.9 204.9-84.6 124.8-258.9 185.4-381.3 97.6l4.7-6.5-4.6 6.5C-21.3 383-28 196.5 56.5 71.7l6.6 4.5-6.6-4.5c46.6-69.5 134.3-93.4 195.9-49.8M243.2 35C190.6-2.3 112.6 16.7 69.8 80.7c-81.2 119.9-72.7 295.8 40.8 376.9C223.4 538.4 388 484 469.2 364.1c42.9-63.6 32.9-145.6-19.9-182.9-39.8-28.6-103.6-13.5-148.9 41.2-8.3 11.7-24.1 14.5-35.8 6-11.5-8.3-14.3-24.2-6.4-36 34.4-62.9 25.4-129.5-14.9-157.4l-.1-.1z"
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
                  d="M460.3 172c-46.2-33.2-117-14.1-165.1 44.3-5.9 8.6-17.2 10.6-25.6 4.5s-10.3-17.6-4.4-26.2c36.9-66.9 29-141.3-17.7-173.5C188.6-20.6 103.1 1.5 56.9 70.4c-85.5 126.3-77.6 313.4 44.2 400.4 121.4 87 296.3 27.7 381.8-98.6 46.2-68.4 36.4-158.5-22.6-200.2"
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
