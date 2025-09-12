import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const StarExclamationIcon: React.FC<
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
                  d="M288.1 0c12.2 0 23.4 7 28.8 18l64.3 132.3 143.6 21.2c12 1.8 22 10.2 25.7 21.7s.7 24.2-7.9 32.7L438.5 329l24.6 145.7c2 12-3 24.2-12.9 31.3s-23 8-33.8 2.3l-128.3-68.5-128.3 68.5c-10.8 5.7-23.9 4.8-33.8-2.3s-14.9-19.3-12.9-31.3L137.8 329 33.6 225.9c-8.6-8.5-11.7-21.2-7.9-32.7s13.7-19.9 25.7-21.7L195 150.3 259.4 18c5.4-11 16.5-18 28.8-18zm-.1 128c-13.3 0-24 10.7-24 24v112c0 13.3 10.7 24 24 24s24-10.7 24-24V152c0-13.3-10.7-24-24-24m32 224a32 32 0 1 0-64 0 32 32 0 1 0 64 0"
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
                  d="M309.5 13.5C305.5 5.2 297.1 0 287.9 0s-17.6 5.2-21.6 13.5l-68.6 141.3-153.2 22.7c-9 1.3-16.5 7.6-19.3 16.3s-.5 18.1 5.9 24.5l111.1 110.1L116 483.9c-1.5 9 2.2 18.1 9.7 23.5s17.3 6 25.3 1.7l137-73.2 137 73.2c8.1 4.3 17.9 3.7 25.3-1.7s11.2-14.5 9.7-23.5l-26.4-155.5 111.2-110.2c6.5-6.4 8.7-15.9 5.9-24.5s-10.3-14.9-19.3-16.3l-153.3-22.6zm-74.1 173.7L287.9 79l52.6 108.2c3.5 7.1 10.2 12.1 18.1 13.3L476.9 218 391 303c-5.5 5.5-8.1 13.3-6.8 21l20.2 119.6-105.2-56.1c-7.1-3.8-15.6-3.8-22.6 0l-105.2 56.2 20.2-119.6c1.3-7.7-1.2-15.5-6.8-21L99 217.9l118.3-17.5c7.8-1.2 14.6-6.1 18.1-13.3zM288 168c-13.3 0-24 10.7-24 24v64c0 13.3 10.7 24 24 24s24-10.7 24-24v-64c0-13.3-10.7-24-24-24m32 168a32 32 0 1 0-64 0 32 32 0 1 0 64 0"
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
                  d="M202.4 186.5 65 206.8l99.8 98.8c7.4 7.3 10.8 17.8 9 28.1l-23.6 139.5 122.6-65.5c9.4-5 20.7-5 30.2 0l122.6 65.5-23.5-139.5c-1.7-10.3 1.6-20.7 9-28.1l99.8-98.8-137.5-20.3c-10.5-1.5-19.5-8.2-24.1-17.7L287.9 42.3l-61.4 126.5c-4.6 9.5-13.6 16.1-24.1 17.7m247.8 320.9c-7.4 5.3-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6 68.6-141.3C270.4 5.2 278.7 0 287.9 0s17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4 459.8 484c1.5 9-2.2 18.1-9.7 23.5zM288 128c8.8 0 16 7.2 16 16v128c0 8.8-7.2 16-16 16s-16-7.2-16-16V144c0-8.8 7.2-16 16-16m-24 224a24 24 0 1 1 48 0 24 24 0 1 1-48 0"
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
                  d="M200.1 170.7 46.8 193.3c-3 .4-5.5 2.5-6.4 5.4s-.2 6 2 8.2l-11.2 11.2 11.2-11.3L153.5 317c3.7 3.7 5.4 8.9 4.5 14l-26.2 155.6c-.5 3 .7 6 3.2 7.8s5.8 2 8.4.6l137-73.2c4.7-2.5 10.4-2.5 15.1 0l137 73.2c2.7 1.4 6 1.2 8.4-.6s3.7-4.8 3.2-7.8L417.9 331c-.9-5.1.8-10.4 4.5-14l111.1-110.1c2.2-2.1 2.9-5.3 2-8.2s-3.4-5-6.4-5.4l-153.3-22.6c-5.2-.8-9.7-4.1-12.1-8.8L295.1 20.5c-1.3-2.8-4.1-4.5-7.2-4.5s-5.9 1.7-7.2 4.5l-68.6 141.3c-2.3 4.8-6.8 8.1-12.1 8.8zm250.1 336.7c-7.4 5.3-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6 68.6-141.3C270.4 5.2 278.7 0 287.9 0s17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4 459.8 484c1.5 9-2.2 18.1-9.7 23.5zM288 128c4.4 0 8 3.6 8 8v160c0 4.4-3.6 8-8 8s-8-3.6-8-8V136c0-4.4 3.6-8 8-8m-16 224a16 16 0 1 1 32 0 16 16 0 1 1-32 0"
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
                  d="M288.1 0c12.2 0 23.4 7 28.8 18l64.3 132.3 143.6 21.2c12 1.8 22 10.2 25.7 21.7s.7 24.2-7.9 32.7L438.5 329l24.6 145.7c2 12-3 24.2-12.9 31.3s-23 8-33.8 2.3l-128.3-68.5-128.3 68.5c-10.8 5.7-23.9 4.8-33.8-2.3s-14.9-19.3-12.9-31.3L137.8 329 33.6 225.9c-8.6-8.5-11.7-21.2-7.9-32.7s13.7-19.9 25.7-21.7L195 150.3 259.4 18c5.4-11 16.5-18 28.8-18zm-.1 128c-13.3 0-24 10.7-24 24v112c0 13.3 10.7 24 24 24s24-10.7 24-24V152c0-13.3-10.7-24-24-24m32 224a32 32 0 1 0-64 0 32 32 0 1 0 64 0"
                />
                <path
                  className="aps-icon-foreground"
                  d="M312 152c0-13.3-10.7-24-24-24s-24 10.7-24 24v112c0 13.3 10.7 24 24 24s24-10.7 24-24zm-24 232a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
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
