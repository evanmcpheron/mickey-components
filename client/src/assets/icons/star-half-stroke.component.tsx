import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const StarHalfStrokeIcon: React.FC<
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
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="m288 376.4.1-.1 26.4 14.1 85.2 45.5-16.5-97.6-4.8-28.7 20.7-20.5 70.1-69.3-96.1-14.2-29.3-4.3-12.9-26.6-42.8-87.8-.1.3zm175.1 98.3c2 12-3 24.2-12.9 31.3s-23 8-33.8 2.3l-128.3-68.5-128.3 68.5c-10.8 5.7-23.9 4.8-33.8-2.3s-14.9-19.3-12.9-31.3L137.8 329 33.6 225.9c-8.6-8.5-11.7-21.2-7.9-32.7s13.7-19.9 25.7-21.7L195 150.3 259.4 18c5.4-11 16.5-18 28.8-18s23.4 7 28.8 18l64.3 132.3 143.6 21.2c12 1.8 22 10.2 25.7 21.7s.7 24.2-7.9 32.7L438.5 329z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M309.5 13.5C305.5 5.2 297.1 0 287.9 0s-17.6 5.2-21.6 13.5l-68.6 141.3-153.2 22.7c-9 1.3-16.5 7.6-19.3 16.3s-.5 18.1 5.9 24.5l111.1 110.1L116 483.9c-1.5 9 2.2 18.1 9.7 23.5s17.3 6 25.3 1.7l137-73.2 137 73.2c8.1 4.3 17.9 3.7 25.3-1.7s11.2-14.5 9.7-23.5l-26.4-155.5 111.2-110.2c6.5-6.4 8.7-15.9 5.9-24.5s-10.3-14.9-19.3-16.3l-153.3-22.6zM288 384.7V79.1l52.5 108.1c3.5 7.1 10.2 12.1 18.1 13.3L476.9 218 391 303c-5.5 5.5-8.1 13.3-6.8 21l20.2 119.6-105.2-56.1c-3.5-1.9-7.4-2.8-11.2-2.8"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M202.4 186.5 65 206.8l99.8 98.8c7.4 7.3 10.8 17.8 9 28.1l-23.6 139.5L272 408.1v-333l-45.5 93.7c-4.6 9.5-13.6 16.1-24.1 17.7M304 408.2l121.6 65-23.5-139.5c-1.7-10.3 1.6-20.7 9-28.1l99.8-98.8-137.5-20.3c-10.5-1.5-19.5-8.2-24.1-17.7L304 75.4zm146.2 99.2c-7.4 5.3-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6 68.6-141.3C270.4 5.2 278.7 0 287.9 0s17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4 459.8 484c1.5 9-2.2 18.1-9.7 23.5z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M200.1 170.7 46.8 193.3c-3 .4-5.5 2.5-6.4 5.4s-.2 6 2 8.2l-11.2 11.2 11.2-11.3L153.5 317c3.7 3.7 5.4 8.9 4.5 14l-26.2 155.6c-.5 3 .7 6 3.2 7.8s5.8 2 8.4.6L280 422V22l-67.9 139.8c-2.3 4.8-6.8 8.1-12.1 8.8zM296 422.1 432.4 495c2.7 1.4 6 1.2 8.4-.6s3.7-4.8 3.2-7.8L417.9 331c-.9-5.1.8-10.4 4.5-14l111.1-110.1c2.2-2.1 2.9-5.3 2-8.2s-3.4-5-6.4-5.4l-153.3-22.6c-5.2-.8-9.7-4.1-12.1-8.8L296 22.3zm154.2 85.3c-7.4 5.3-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6 68.6-141.3C270.4 5.2 278.7 0 287.9 0s17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4 459.8 484c1.5 9-2.2 18.1-9.7 23.5z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="m288.1 376.3-.1.1v63.5l.1-.1 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329l104.2-103.1c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7l-143.7-21.2L316.9 18c-5.3-11-16.5-18-28.8-18h-1.6 1.5v87.1l.1-.3 42.7 87.9 12.9 26.6 29.3 4.3 96.1 14.2-70.1 69.3-20.7 20.5 4.8 28.7 16.5 97.6-85.2-45.5-26.4-14.1zM146.3 512c-1.1.1-2.1.1-3.2 0z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M289.7 0H288v439.9l-128.2 68.4c-10.8 5.7-23.9 4.8-33.8-2.3s-14.9-19.3-12.9-31.3L137.8 329 33.6 225.9c-8.6-8.5-11.7-21.2-7.9-32.7s13.7-19.9 25.7-21.7L195 150.3 259.4 18c5.4-11 16.5-18 28.8-18h1.6zm143.5 512c-1.1.1-2.1.1-3.2 0z"
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
