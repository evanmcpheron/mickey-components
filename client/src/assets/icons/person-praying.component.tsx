import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const PersonPrayingIcon: React.FC<
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
                  d="M352 64a64 64 0 1 0-128 0 64 64 0 1 0 128 0M232.7 264l22.9 31.5c6.5 8.9 16.3 14.7 27.2 16.1s21.9-1.7 30.4-8.7l88-72c17.1-14 19.6-39.2 5.6-56.3s-39.2-19.6-56.3-5.6l-55.2 45.2-26.2-36C253.6 156.7 228.6 144 202 144c-30.9 0-59.2 17.1-73.6 44.4l-48.6 92.5c-20.2 38.5-9.4 85.9 25.6 111.8l53.2 39.3H72c-22.1 0-40 17.9-40 40s17.9 40 40 40h208c17.3 0 32.6-11.1 38-27.5s-.3-34.4-14.2-44.7L187.7 354z"
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
                  d="M352 64a64 64 0 1 0-128 0 64 64 0 1 0 128 0M202.1 192c5.3 0 10.2 2.7 12.9 7.2l4.3 7.1-67.1 161.2-9.4-6c-9.8-6.3-13.7-18.7-9.2-29.4l54.5-130.7c2.4-5.7 7.9-9.3 14-9.3zm48.3 64.7 7.4 12.1c12.8 20.9 41.2 25.4 59.9 9.6l89.8-76c10.1-8.6 11.4-23.7 2.8-33.8s-23.7-11.4-33.8-2.8l-82.7 70-37.9-61.6C244.4 155.4 224 144 202.1 144c-25.5 0-48.5 15.3-58.3 38.9L89.3 313.6c-13.4 32.3-1.8 69.5 27.6 88.3L214 464H56c-13.3 0-24 10.7-24 24s10.7 24 24 24h240c10.7 0 20-7 23-17.3s-1.1-21.2-10.1-27l-115.7-74 57.1-137.1z"
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
                  d="M256 64a32 32 0 1 1 64 0 32 32 0 1 1-64 0m96 0a64 64 0 1 0-128 0 64 64 0 1 0 128 0M200.5 176h.9c12.4 0 23.7 7.2 29 18.5l3.1 6.7c-.1.2-.2.5-.3.7l-76.1 182.7-26.7-16.8c-13.1-8.2-18.4-24.6-12.7-39l53.1-132.7c4.9-12.1 16.6-20.1 29.7-20.1m112 306.5-128-80.6 67.3-161.5 12.4 26.5c9.2 19.7 34.9 24.7 50.8 9.9l95.9-89.1c6.5-6 6.9-16.1.8-22.6s-16.1-6.9-22.6-.8l-95.9 89.1-33.8-72.4c-10.5-22.5-33.1-36.9-58-36.9h-.9c-26.2 0-49.7 15.9-59.4 40.2L88 316.9c-11.5 28.7-.8 61.5 25.3 77.9L248.6 480H48c-8.8 0-16 7.2-16 16s7.2 16 16 16h256c7.1 0 13.4-4.7 15.4-11.6s-.8-14.2-6.8-18z"
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
                  d="M288 16a48 48 0 1 0 0 96 48 48 0 1 0 0-96m64 48a64 64 0 1 1-128 0 64 64 0 1 1 128 0m-150 96c-24.9 0-47.8 13.8-59.4 35.9L94 288.4c-16.6 31.5-7.7 70.3 20.9 91.4l72.8 53.8c2.8 2.1 3.9 5.7 2.8 8.9s-4.1 5.5-7.6 5.5H72c-13.3 0-24 10.7-24 24s10.7 24 24 24h208c10.4 0 19.6-6.6 22.8-16.5s-.2-20.7-8.5-26.8l-121.5-89.8c-3.1-2.3-4.1-6.5-2.4-10l53.9-107.8c1.2-2.5 3.7-4.2 6.5-4.4s5.5 1 7.1 3.3l30.7 42.2c3.9 5.3 9.8 8.8 16.3 9.7s13.2-1 18.3-5.2l88-72c10.3-8.4 11.8-23.5 3.4-33.8s-23.5-11.8-33.8-3.4L299 232c-1.7 1.4-3.9 2-6.1 1.7s-4.2-1.4-5.4-3.2l-31.2-42.8C243.7 170.3 223.5 160 202 160m-73.6 28.4c14.5-27.3 42.8-44.4 73.6-44.4 26.6 0 51.6 12.7 67.2 34.2l26.2 36 55.3-45.2c17.1-14 42.3-11.5 56.3 5.6s11.5 42.3-5.6 56.3l-88 72c-8.5 7-19.5 10.1-30.4 8.7s-20.8-7.2-27.2-16.1L232.7 264l-45 90 116.1 85.8c13.9 10.3 19.6 28.3 14.2 44.7S297.3 512 280 512H72c-22.1 0-40-17.9-40-40s17.9-40 40-40h86.6l-53.2-39.3c-34.9-25.8-45.8-73.3-25.6-111.8l48.7-92.5z"
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
                  d="M320 64a64 64 0 1 1 128 0 64 64 0 1 1-128 0"
                />
                <path
                  className="aps-icon-foreground"
                  d="m283.7 354 116.1 85.8c13.9 10.3 19.6 28.3 14.2 44.7S393.3 512 376 512H168c-22.1 0-40-17.9-40-40s17.9-40 40-40h86.6l-53.2-39.3c-34.9-25.8-45.8-73.3-25.6-111.8l48.7-92.5c14.4-27.3 42.7-44.4 73.5-44.4 26.6 0 51.6 12.7 67.2 34.2l26.2 36 55.3-45.2c17.1-14 42.3-11.5 56.3 5.6s11.5 42.3-5.6 56.3l-88 72c-8.5 7-19.5 10.1-30.4 8.7s-20.8-7.2-27.2-16.1L328.7 264z"
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
