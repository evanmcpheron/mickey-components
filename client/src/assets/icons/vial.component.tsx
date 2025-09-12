import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const VialIcon: React.FC<
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
                  d="M342.6 9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l9.4 9.4L28.1 342.6C10.1 360.6 0 385 0 410.5v5.5c0 53 43 96 96 96h5.5c25.5 0 49.9-10.1 67.9-28.1L448 205.3l9.4 9.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-32-32-96-96-32-32zM205.3 256 352 109.3l50.7 50.7-96 96z"
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
                  d="M329 7c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l15 15L30.2 335.8C10.9 355.2 0 381.4 0 408.8 0 465.8 46.2 512 103.2 512c27.4 0 53.6-10.9 73-30.2L456 201.9l15 15c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-32-32L361 39zM178 256 344 89.9l78.1 78.1-88 88H177.9z"
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
                  d="M292.7 4.7c6.2-6.2 16.4-6.2 22.6 0l32 32 128 128 32 32c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L464 198.6l-84.7 84.7-197.5 197.5c-20 20-47.1 31.2-75.3 31.2C47.7 512 0 464.3 0 405.5c0-28.2 11.2-55.3 31.2-75.3l69.5-69.5L313.4 48l-20.7-20.7c-6.2-6.2-6.2-16.4 0-22.6M336 70.6 150.6 256h210.8l80-80zM329.4 288H118.6l-64.8 64.8c-14 14-21.8 32.9-21.8 52.7 0 41.1 33.4 74.5 74.5 74.5 19.8 0 38.7-7.8 52.7-21.8z"
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
                  d="M322.3 2.3c3.1-3.1 8.2-3.1 11.3 0l24 24 128 128 24 24c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0L480 171.3l-98.3 98.3-213.5 213.5c-18.5 18.5-43.6 28.9-69.7 28.9C44.1 512 0 467.9 0 413.5c0-26.1 10.4-51.2 28.9-69.7l85.5-85.5L340.7 32l-18.4-18.3c-3.1-3.1-3.1-8.2 0-11.3zm29.7 41L139.3 256h233.4l96-96zm4.7 228.7H123.3l-83.1 83.1A82.58 82.58 0 0 0 16 413.5c0 45.6 36.9 82.5 82.5 82.5 21.9 0 42.9-8.7 58.3-24.2z"
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
                  d="M297.4 9.4c12.5-12.5 32.8-12.5 45.3 0l32 32 96 96 32 32c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-9.4-9.4-278.6 278.6c-18 18-42.4 28.1-67.9 28.1H96c-53 0-96-43-96-96v-5.5c0-25.5 10.1-49.9 28.1-67.9L306.7 64l-9.4-9.4c-12.5-12.5-12.5-32.8 0-45.3zm54.6 99.9L73.4 387.9c-6 6-9.4 14.1-9.4 22.6v5.5c0 17.7 14.3 32 32 32h5.5c8.5 0 16.6-3.4 22.6-9.4L402.7 160z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M306.7 256H205.3L73.4 387.9c-6 6-9.4 14.1-9.4 22.6v5.5c0 17.7 14.3 32 32 32h5.5c8.5 0 16.6-3.4 22.6-9.4z"
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
