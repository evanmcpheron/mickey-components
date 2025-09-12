import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const FieldHockeyStickBallIcon: React.FC<
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
                  d="M491.2 8.5c21.8 15.1 27.3 45 12.2 66.8l-52.2 75.5-79.9-53.3 53.1-76.8c15.1-21.8 45-27.3 66.8-12.2M353.1 123.9l79.9 53.3-192 277.7c-24.6 35.5-64.9 56.8-108.1 56.9C59.5 512 .1 452.3.6 378.9v-2.2c.2-25.7 7.8-50.8 21.8-72.4l17.3-26.5c14.5-22.2 44.2-28.4 66.4-13.9s28.4 44.2 13.9 66.4l-17.3 26.5c-4 6.1-6.2 13.3-6.2 20.6v2.2c-.1 20 16 36.2 36 36.1 11.7 0 22.7-5.8 29.4-15.5zM432 352a80 80 0 1 1 0 160 80 80 0 1 1 0-160"
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
                  d="M500.3 100.9C520.7 72 513.7 32 484.9 11.7S416-1.8 395.7 27.1L147.6 379.4c-2 2.8-5.1 4.4-8.5 4.4-5.3 0-10.5-4.7-10.5-11 0-1.6.4-3.1.9-4.4l17-38.5c14.3-32.3-.3-70.1-32.7-84.4s-70.1.3-84.4 32.7l-17 38.5C4.8 334 .7 352.9.6 371.8 0 448.3 61.9 512 139.4 511.8c44.9-.1 86.9-22 112.8-58.7zm-102.2 61.7L213 425.4c-16.9 24-44.4 38.3-73.7 38.4-50.5.1-91.1-41.4-90.7-91.6.1-12.4 2.7-24.8 7.8-36.1l17-38.5c3.6-8.1 13-11.7 21.1-8.2s11.7 13 8.2 21.1l-17 38.5c-3.2 7.3-5 15.4-5 23.5-.3 32.7 26.2 59.5 58.6 59.4 19-.1 36.7-9.3 47.6-24.8l185.6-263.7zM432 400a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0 112a80 80 0 1 0 0-160 80 80 0 1 0 0 160"
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
                  d="M500.3 100.9C520.7 72 513.7 32 484.9 11.7S416-1.8 395.7 27.1L147.6 379.4c-2 2.8-5.1 4.4-8.5 4.4-5.3 0-10.5-4.7-10.5-11 0-1.6.4-3.1.9-4.4l17-38.5c14.3-32.3-.3-70.1-32.7-84.4s-70.1.3-84.4 32.7l-17 38.5C4.8 334 .7 352.9.6 371.8 0 448.3 61.9 512 139.4 511.8c44.9-.1 86.9-22 112.8-58.7zm-26.1-18.5-54 76.7-51.2-38.4 52.9-75.1c10.1-14.5 30.1-17.9 44.5-7.8s17.9 30.2 7.8 44.6m-72.5 102.9L226.1 434.6c-19.9 28.2-52.2 45-86.7 45.1C79.9 480 32.1 431 32.6 372c.1-14.6 3.2-29.1 9.1-42.5l17-38.5c7.1-16.2 26-23.5 42.2-16.3s23.5 26 16.3 42.2l-17 38.5c-2.4 5.3-3.6 11.2-3.7 17.1-.2 23.9 19.2 43.3 42.6 43.2 13.8 0 26.7-6.8 34.6-18l176.8-250.8zM432 384a48 48 0 1 1 0 96 48 48 0 1 1 0-96m0 128a80 80 0 1 0 0-160 80 80 0 1 0 0 160"
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
                  d="M502.8 76.2c15.6-21.4 10.8-51.5-10.6-67.1s-51.4-10.8-67 10.7L145.3 404.7c-5 6.9-13.1 11.1-21.7 11.1-14.9 0-27.1-12.2-27-27.2 0-3.7.8-7.3 2.3-10.7l17-38.5c10.7-24.2-.3-52.6-24.5-63.3s-52.6.3-63.3 24.5l-17 38.5C4.3 354.4.7 371 .6 387.8c-.5 68.4 54.8 124.2 123.3 124 39.2-.1 76-18.9 99.1-50.6zm-12.9-9.4-70.3 96.6-53.3-35.5 71.8-98.7c10.4-14.3 30.4-17.5 44.7-7.1s17.5 30.4 7.1 44.7m-79.7 109.6L210 451.7c-20.1 27.6-52.1 43.9-86.2 44C64.3 496 16.1 447.4 16.6 388c.1-14.6 3.2-29 9.1-42.4l17-38.5c7.1-16.2 26-23.5 42.2-16.3s23.5 26 16.3 42.2l-17 38.5c-2.4 5.4-3.6 11.2-3.7 17-.2 23.9 19.2 43.4 43 43.3 13.7 0 26.5-6.6 34.6-17.7l198.8-273.2zM432 368a64 64 0 1 1 0 128 64 64 0 1 1 0-128m0 144a80 80 0 1 0 0-160 80 80 0 1 0 0 160"
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
                  d="M491.2 8.5c21.8 15.1 27.3 45 12.2 66.8L442.1 164l-79.9-53.3 62.2-90c15.1-21.8 45-27.3 66.8-12.2M432 352a80 80 0 1 1 0 160 80 80 0 1 1 0-160"
                />
                <path
                  className="aps-icon-foreground"
                  d="m442.1 164-79.9-53.3L162 400.3c-6.7 9.7-17.7 15.4-29.4 15.5-20 .1-36.1-16.2-36-36.1v-2.2c.1-7.3 2.2-14.4 6.2-20.6l17.3-26.5c14.5-22.2 8.3-51.9-13.9-66.4s-51.9-8.3-66.4 13.9l-17.3 26.4C8.4 325.8.8 350.9.6 376.7v2.2C.1 452.3 59.5 512 132.9 511.8c43.2-.1 83.5-21.4 108.1-56.9z"
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
