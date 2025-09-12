import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const FlaskIcon: React.FC<
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
                  d="M288 0H128c-17.7 0-32 14.3-32 32s14.3 32 32 32v132.8c0 11.8-3.3 23.5-9.5 33.5L10.3 406.2C3.6 417.2 0 429.7 0 442.6 0 480.9 31.1 512 69.4 512h309.2c38.3 0 69.4-31.1 69.4-69.4 0-12.8-3.6-25.4-10.3-36.4L329.5 230.4c-6.2-10.1-9.5-21.7-9.5-33.5V64c17.7 0 32-14.3 32-32S337.7 0 320 0zm-96 196.8V64h64v132.8c0 23.7 6.6 46.9 19 67.1l34.5 56.1h-171l34.5-56.1c12.4-20.2 19-43.4 19-67.1"
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
                  d="M176 196.8c0 20.7-5.8 41-16.6 58.7L119.7 320h208.6l-39.7-64.5c-10.9-17.7-16.6-38-16.6-58.7V48h-96zM320 48v148.8c0 11.8 3.3 23.5 9.5 33.5l108.2 175.9a69.54 69.54 0 0 1 10.3 36.4c0 38.3-31.1 69.4-69.4 69.4H69.4C31.1 512 0 480.9 0 442.6c0-12.8 3.6-25.4 10.3-36.4l108.2-175.8c6.2-10.1 9.5-21.7 9.5-33.5V48h-8c-13.3 0-24-10.7-24-24s10.7-24 24-24h208c13.3 0 24 10.7 24 24s-10.7 24-24 24z"
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
                  d="M288 196.8V32H160v164.8c0 17.8-4.9 35.2-14.2 50.3L100.9 320h246.2l-44.8-72.9c-9.4-15.1-14.3-32.5-14.3-50.3M128 32h-16c-8.8 0-16-7.2-16-16s7.2-16 16-16h224c8.8 0 16 7.2 16 16s-7.2 16-16 16h-16v164.8c0 11.8 3.3 23.5 9.5 33.5l108.2 175.9a69.54 69.54 0 0 1 10.3 36.4c0 38.3-31.1 69.4-69.4 69.4H69.4C31.1 512 0 480.9 0 442.6c0-12.8 3.6-25.4 10.3-36.4l108.2-175.8c6.2-10.1 9.5-21.7 9.5-33.5zM37.5 423c-3.6 5.9-5.5 12.7-5.5 19.6 0 20.7 16.7 37.4 37.4 37.4h309.2c20.7 0 37.4-16.7 37.4-37.4 0-6.9-1.9-13.7-5.5-19.6l-43.7-71H81.2z"
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
                  d="M313.5 230.4c-6.2-10.1-9.5-21.7-9.5-33.5V16h24c4.4 0 8-3.6 8-8s-3.6-8-8-8H120c-4.4 0-8 3.6-8 8s3.6 8 8 8h24v180.8c0 11.8-3.3 23.5-9.5 33.5L10.3 406.2C3.6 417.2 0 429.7 0 442.6 0 480.9 31.1 512 69.4 512h309.2c38.3 0 69.4-31.1 69.4-69.4 0-12.8-3.6-25.4-10.3-36.4zM160 16h128v180.8c0 14.8 4.1 29.3 11.9 41.9.2.3.4.6.6.8l56.7 80.5H90.8l56.8-80.4c.2-.3.4-.6.6-.8 7.8-12.6 11.9-27.1 11.9-41.9V16zm264.3 399c5 8.3 7.7 17.9 7.7 27.6 0 29.5-23.9 53.4-53.4 53.4H69.4C39.9 496 16 472.1 16 442.6c0-9.7 2.7-19.3 7.7-27.6l55.8-79h289z"
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
                  d="M160 0h160c17.7 0 32 14.3 32 32s-14.3 32-32 32v132.8c0 11.8 3.3 23.5 9.5 33.5l108.2 175.9a69.54 69.54 0 0 1 10.3 36.4c0 38.3-31.1 69.4-69.4 69.4H69.4C31.1 512 0 480.9 0 442.6c0-12.8 3.6-25.4 10.3-36.4l108.2-175.8c6.2-10.1 9.5-21.7 9.5-33.5V64c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32 64v132.8c0 23.7-6.6 46.9-19 67.1L64.8 439.8c-.5.9-.8 1.8-.8 2.8 0 3 2.4 5.4 5.4 5.4h309.2a5.378 5.378 0 0 0 4.6-8.2L275 263.9c-12.4-20.2-19-43.4-19-67.1V64z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M309.5 320h-171L64.8 439.8c-.5.9-.8 1.8-.8 2.8 0 3 2.4 5.4 5.4 5.4h309.2a5.378 5.378 0 0 0 4.6-8.2z"
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
