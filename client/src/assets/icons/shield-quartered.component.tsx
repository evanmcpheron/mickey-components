import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ShieldQuarteredIcon: React.FC<
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
                  d="M269.4 2.9C265.2 1 260.7 0 256 0s-9.2 1-13.4 2.9L54.3 82.8c-22 9.3-38.4 31-38.3 57.2.5 99.2 41.3 280.7 213.6 363.2 16.7 8 36.1 8 52.8 0C454.7 420.7 495.5 239.2 496 140c.1-26.2-16.3-47.9-38.3-57.2zM80 141.4l176-74.6V224H90.1c-6.9-30-9.8-58.5-10.1-82.6m176 303.4V224h166c-18.5 80.5-65.5 172.2-166 220.8"
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
                  d="M73 127c-5.9 2.5-9.1 7.8-9 12.8.1 17.9 1.6 38.4 5.1 60.3H232V59.6zm6.7 121c20.9 73.9 65.9 153.7 152.3 202.3V248zm200.3 0v202.4C366.4 401.8 411.4 322 432.3 248zm162.9-48c3.5-21.9 5-42.3 5.1-60.3 0-5-3.1-10.2-9-12.8L280 59.6V200zM269.4 2.9l188.3 79.9c22 9.3 38.4 31 38.3 57.2-.5 99.2-41.3 280.7-213.6 363.2-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0s9.2 1 13.4 2.9"
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
                  d="M66.8 112.3C55.5 117 47.9 127.7 48 139.8c.1 20 1.9 43.2 6.3 68.2H240V38.8zM61.1 240c21.2 84.6 72.2 180.1 178.9 232.6V240zm210.9 0v232.6c106.7-52.5 157.7-148 179-232.6zm185.8-32c4.3-24.9 6.2-48.2 6.3-68.2.1-12.1-7.5-22.8-18.8-27.6L272 38.8V208zM231 7.8c16-6.8 34-6.8 50 0l176.7 75c22 9.3 38.4 31 38.3 57.2-.5 99.2-41.3 280.7-213.6 363.2-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2z"
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
                  d="M274.8 22.6c-3.5-1.5-7.1-2.5-10.8-3.1V216h208.6c5.2-28 7.4-54.1 7.5-76.1.1-19.1-11.9-35.3-28.5-42.4l-176.7-75zM469.3 232H264v260.4c3.9-.7 7.8-1.9 11.5-3.7C395.2 431.4 448.8 323.6 469.3 232M248 216V19.4c-3.6.6-7.2 1.7-10.7 3.1l-176.8 75c-16.6 7.1-28.6 23.2-28.5 42.4.1 22 2.3 48.1 7.5 76.1zM42.8 232c20.5 91.6 74.1 199.4 193.8 256.7 3.7 1.8 7.5 3 11.4 3.7V232zM231 7.8c16-6.8 34-6.8 50 0l176.7 75c22 9.3 38.4 31 38.3 57.2-.5 99.2-41.3 280.7-213.6 363.2-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2z"
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
                  d="M256.7 0h-.7c-4.6 0-9.2 1-13.4 2.9L54.3 82.8c-22 9.3-38.4 31-38.3 57.2.1 24 2.6 52.9 8.7 84H256V0zM488 224H256.7v285.1c9 0 18.1-2 26.4-6C413.7 440.7 468.8 321.3 488 224"
                />
                <path
                  className="aps-icon-foreground"
                  d="M256.4 0h.3c4.6 0 9.2 1 13.4 2.9l188.3 79.9c22 9.3 38.4 31 38.3 57.2-.1 24-2.6 52.9-8.7 84H256.7V0h-1.4 1zm-26.8 503.2C99 440.7 44 321.3 24.7 224H256v285.1c-9 0-18.1-2-26.4-6z"
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
