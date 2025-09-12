import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const WheelchairMoveIcon: React.FC<
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
                  d="M320 48a48 48 0 1 1 96 0 48 48 0 1 1-96 0m-115.5 73.3c-5.4-2.5-11.7-1.9-16.4 1.7l-40.9 30.7c-14.1 10.6-34.2 7.7-44.8-6.4s-7.7-34.2 6.4-44.8l40.9-30.7c23.7-17.8 55.3-21 82.1-8.4l90.4 42.5c29.1 13.7 36.8 51.6 15.2 75.5L299.1 224h97.4c30.3 0 53 27.7 47.1 57.4l-28.2 140.9c-3.5 17.3-20.3 28.6-37.7 25.1s-28.6-20.3-25.1-37.7L377 288h-70.3c8.6 19.6 13.3 41.2 13.3 64 0 88.4-71.6 160-160 160S0 440.4 0 352s71.6-160 160-160c11.1 0 22 1.1 32.4 3.3l54.2-54.2zM160 448a96 96 0 1 0 0-192 96 96 0 1 0 0 192"
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
                  d="M320 48a48 48 0 1 1 96 0 48 48 0 1 1-96 0m-111.4 65c-8-3.4-17.2-2.2-24 3.2l-49.8 38.7c-10.5 8.1-25.5 6.3-33.7-4.2s-6.3-25.5 4.2-33.7l49.8-38.7c20.6-16 48.1-19.6 72.1-9.5l84.2 35.5c35.7 15 45.7 60.9 19.5 89.5L288.6 240h113.9c26.8 0 46 25.8 38.3 51.5L399 430.9c-3.8 12.7-17.2 19.9-29.9 16.1s-19.9-17.2-16.1-29.9L391.7 288h-85c8.6 19.6 13.3 41.2 13.3 64 0 88.4-71.6 160-160 160S0 440.4 0 352s71.6-160 160-160h3.7l68.9-68.9zm87 48.2c3.7-4.1 2.3-10.6-2.8-12.8l-20.4-8.6-60.7 60.7c11.8 4 22.9 9.4 33.3 15.9zM160 464a112 112 0 1 0 0-224 112 112 0 1 0 0 224"
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
                  d="M368 80a24 24 0 1 0 0-48 24 24 0 1 0 0 48m0-80a56 56 0 1 1 0 112 56 56 0 1 1 0-112M199.5 106.9c-11.9-4.9-25.6-2.1-34.7 7l-41.4 41.4c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l41.4-41.4c18.2-18.2 45.6-23.7 69.5-14L313.5 119c31.7 13 40 54.1 15.8 78.4l-49.1 49.1c6.9 7.9 13.1 16.4 18.4 25.6h113.5c20.5 0 35.7 19 31.2 38.9l-27.7 124.5c-1.9 8.6-10.5 14.1-19.1 12.1s-14.1-10.5-12.1-19.1L412.1 304h-99.4c4.8 15.2 7.3 31.3 7.3 48 0 88.4-71.6 160-160 160S0 440.4 0 352s71.6-160 160-160c5.6 0 11.1.3 16.5.8l67.7-67.7-44.7-18.3zm107.2 67.8c8.1-8.1 5.3-21.8-5.3-26.1l-25.1-10.3-62.8 62.8c15.7 5.6 30.3 13.5 43.3 23.4l49.9-49.9zM160 480a128 128 0 1 0 0-256 128 128 0 1 0 0 256"
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
                  d="M400 52a36 36 0 1 0-72 0 36 36 0 1 0 72 0m-88 0a52 52 0 1 1 104 0 52 52 0 1 1-104 0m-8 300a144 144 0 1 0-288 0 144 144 0 1 0 288 0M0 352a160 160 0 1 1 320 0 160 160 0 1 1-320 0m160-88a88 88 0 1 0 0 176 88 88 0 1 0 0-176m104 88a104 104 0 1 1-208 0 104 104 0 1 1 208 0m112.1-64c4.9 0 9.4 2.2 12.5 6s4.2 8.7 3.1 13.5l-23.3 105c-1.9 8.6 3.5 17.2 12.1 19.1s17.2-3.5 19.1-12.1l32-144c1.1-4.7-.1-9.7-3.1-13.5s-7.6-6-12.5-6h-89.7c-3.2-5.5-6.6-10.9-10.3-16h100c9.7 0 18.9 4.4 25 12s8.4 17.5 6.3 27l-32 144c-3.8 17.3-20.9 28.1-38.2 24.3s-28.1-20.9-24.3-38.2l19.8-89.1 3.6-16H346c-1.4-5.4-3-10.8-4.9-16zm-38.7-106.6-36.3 40.3c-3.6-3.9-7.4-7.7-11.3-11.3l35.8-39.7c14.4-15.9 9.3-41.2-10.2-50.4L198.8 65.5c-5.4-2.5-11.7-1.9-16.4 1.7l-64 48c-7.1 5.3-8.5 15.3-3.2 22.4s15.3 8.5 22.4 3.2l48.6-36.4c4.7-3.6 11.1-4.2 16.4-1.7l50.8 23.9c4.7 2.2 8.1 6.6 8.9 11.7s-.8 10.4-4.4 14.1L235 175.3c-5.4-2.3-10.9-4.3-16.5-6.1l16-16 12-12-15.4-7.2-35.5-16.7-48.6 36.4c-14.1 10.6-34.2 7.7-44.8-6.4s-7.7-34.2 6.4-44.8l64-48c9.5-7.1 22.1-8.4 32.8-3.4l116.5 54.8c29.1 13.7 36.8 51.6 15.2 75.5z"
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
                  d="M160 512a160 160 0 1 0 0-320 160 160 0 1 0 0 320m0-256a96 96 0 1 1 0 192 96 96 0 1 1 0-192"
                />
                <path
                  className="aps-icon-foreground"
                  d="M320 48a48 48 0 1 1 96 0 48 48 0 1 1-96 0m-147.2 6.4c9.5-7.1 22.1-8.4 32.8-3.4l116.5 54.8c29.1 13.7 36.8 51.6 15.2 75.5L299.1 224h97.4c30.3 0 53 27.7 47.1 57.4l-28.2 140.9c-3.5 17.3-20.3 28.6-37.7 25.1s-28.6-20.3-25.1-37.7L377 288h-70.3c-20.5-46.9-62.9-82.1-114.3-92.7l54.2-54.2-50.8-23.9-48.6 36.4c-14.1 10.6-34.2 7.7-44.8-6.4s-7.7-34.2 6.4-44.8z"
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
