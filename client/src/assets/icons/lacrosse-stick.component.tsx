import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const LacrosseStickIcon: React.FC<
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
                  d="M336 64h.3c19.9 0 48.1 13.6 73.1 38.6s38.6 53.2 38.6 73.1v.3c0 33.1-21.9 62.1-53.7 71.2l-11.5 3.3c-19.6 5.6-37.9 15.1-53.9 27.8L294 306.2c-11.1 8.9-25 13.8-39.2 13.8-34.7 0-62.8-28.1-62.8-62.8 0-14.3 4.9-28.1 13.8-39.2l27.9-34.9c12.8-15.9 22.2-34.3 27.8-53.9l3.3-11.5C273.9 85.9 302.9 64 336 64m0-64c-61.6 0-115.8 40.9-132.7 100.1l-3.3 11.6c-3.3 11.5-8.8 22.2-16.2 31.5l-27.9 34.9c-18 22.5-27.8 50.4-27.8 79.2 0 23.4 6.3 45.3 17.4 64.1l-136 136C-3 469.9-3 490.2 9.5 502.7s32.8 12.5 45.3 0l136-136c18.8 11.1 40.7 17.4 64.1 17.4 28.8 0 56.7-9.8 79.2-27.8l34.9-27.9c9.3-7.4 20-13 31.5-16.2l11.5-3.3c59.1-17.1 100-71.3 100-132.9v-.3c0-43.8-26.4-87.4-57.3-118.4S380.1 0 336.3 0z"
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
                  d="m261.5 107.5-6.6 19.7c-6.3 18.9-16 36.5-28.6 51.9l-34.4 42c-10.3 12.6-15.9 28.3-15.9 44.5 0 38.8 31.5 70.3 70.3 70.3 16.2 0 32-5.6 44.5-15.9l42-34.4c15.4-12.6 33-22.3 51.9-28.6l19.7-6.6c35.6-11.7 59.6-45 59.6-82.4v-.3c0-22.9-15.2-53-40.9-78.8S367.2 48 344.3 48h-.3c-37.4 0-70.7 24-82.5 59.5M344 0h.3c40.8 0 82.5 24.8 112.7 55s55 71.9 55 112.7v.3c0 58.1-37.2 109.7-92.3 128.1l-19.7 6.5c-13.4 4.5-25.8 11.3-36.7 20.2l-42 34.4c-21.1 17.3-47.6 26.7-74.9 26.7-24 0-46.3-7.1-65-19.4L41 505c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l140.3-140.5c-12.3-18.6-19.4-41-19.4-65 0-27.3 9.5-53.8 26.7-74.9l34.4-42c8.9-10.9 15.8-23.3 20.2-36.7l6.6-19.7C234.3 37.2 285.9 0 344 0"
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
                  d="M344 32h.4c28.8 0 62.8 18.4 90 45.6s45.6 61.2 45.6 90.1v.4c0 44.3-28.4 83.6-70.4 97.6l-.8.3-1.8.6c-18.7 6.2-42.9 14.3-64 31.5l-42 34.4c-15.4 12.6-34.7 19.5-54.7 19.5-47.7 0-86.3-38.7-86.3-86.3 0-19.9 6.9-39.2 19.5-54.7l34.4-42c17.3-21.1 25.4-45.4 31.6-64.2l.8-2.4c14-42 53.4-70.4 97.7-70.4m113 23C426.8 24.8 385.1 0 344.3 0h-.3c-58.1 0-109.7 37.2-128.1 92.3l-.3.8c-6.6 19.8-13 39.1-26.5 55.6l-34.4 42c-17.3 21.1-26.7 47.6-26.7 74.9 0 26.9 9 51.7 24.1 71.6L4.7 484.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l147.4-147.4c19.9 15.1 44.7 24.1 71.6 24.1 27.3 0 53.8-9.4 74.9-26.7l42-34.4c16.5-13.5 35.8-19.9 55.6-26.5l.8-.3c55.1-18.4 92.3-70 92.3-128.1v-.3c0-40.8-24.8-82.5-55-112.7z"
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
                  d="M344 16c-51.2 0-96.7 32.8-112.9 81.4l-.6 1.8c-6.4 19.2-13.6 40.9-29 59.7l-34.4 42c-15 18.3-23.1 41.2-23.1 64.8 0 56.5 45.8 102.3 102.3 102.3 23.6 0 46.5-8.2 64.8-23.1l42-34.4c18.8-15.4 40.5-22.6 59.6-29l1.1-.4.8-.3C463.2 264.7 496 219.2 496 168v-.3c0-34.8-21.6-72.7-50.3-101.4S379.2 16 344.4 16h-.4m0-16h.3c40.8 0 82.5 24.8 112.7 55s55 71.9 55 112.7v.3c0 58.1-37.2 109.7-92.3 128.1l-.8.3c-19.8 6.6-39.1 13-55.6 26.5l-42 34.4c-21.1 17.3-47.6 26.7-74.9 26.7-29.8 0-57-11-77.8-29.2L13.7 509.7c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l154.8-154.9c-18.2-20.8-29.2-48-29.2-77.8 0-27.3 9.5-53.8 26.7-74.9l34.4-42c13.5-16.5 19.9-35.8 26.5-55.6l.3-.8C234.3 37.2 285.9 0 344 0"
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
                  d="m145.4 321.4-136 136c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l136-136c-18.7-11-34.3-26.6-45.3-45.3"
                />
                <path
                  className="aps-icon-foreground"
                  d="m264.8 117.7-3.3 11.5c-5.6 19.6-15.1 37.9-27.8 53.9L205.8 218c-8.9 11.1-13.8 25-13.8 39.2 0 34.7 28.1 62.8 62.8 62.8 14.3 0 28.1-4.9 39.2-13.8l34.9-27.9c15.9-12.8 34.3-22.2 53.9-27.8l11.5-3.3c31.8-9.1 53.7-38.1 53.7-71.2v-.3c0-19.9-13.6-48.1-38.6-73.1S356.2 64 336.3 64h-.3c-33.1 0-62.1 21.9-71.2 53.7M512 176c0 61.6-40.9 115.8-100.1 132.7l-11.6 3.3c-11.5 3.3-22.2 8.8-31.5 16.2l-34.9 27.9c-22.5 18-50.4 27.8-79.2 27.8-70 0-126.8-56.8-126.8-126.8 0-28.8 9.8-56.7 27.8-79.2l27.9-34.9c7.4-9.3 13-20 16.2-31.5l3.3-11.5C220.2 40.9 274.4 0 336 0h.3c43.8 0 87.4 26.4 118.4 57.3S512 131.8 512 175.7z"
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
