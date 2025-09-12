import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CupStrawSwooshIcon: React.FC<
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
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="m194.8 43.2-20 84.8H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h320c17.7 0 32-14.3 32-32s-14.3-32-32-32H224.2l17.4-73.8c.9-3.6 4.1-6.2 7.8-6.2H280c13.3 0 24-10.7 24-24S293.3 0 280 0h-30.7c-26 0-48.6 17.9-54.5 43.2M40 224l20.3 244c2.1 24.9 22.9 44 47.8 44h167.7c25 0 45.8-19.1 47.8-44L344 224zm194.4 78.9c18.8-10.1 42-17.2 72.7-20.6l-4.1 48.9c-20.8 3.1-35.2 8.2-45.8 13.9-17.2 9.3-26.9 21.2-39.9 37.2l-.7.8c-13.3 16.4-29.5 35.9-58.7 50.4-17.7 8.8-39.3 15.2-66.7 18.9l-4-47.9c22.1-3.2 37.7-8.3 49.4-14.1 19.3-9.5 30.1-22 42.8-37.6l1.9-2.3c12.3-15.2 27.4-33.8 53.1-47.7z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M249.3 0H280c13.3 0 24 10.7 24 24s-10.7 24-24 24h-30.7c-3.7 0-6.9 2.6-7.8 6.2L224.2 128H360c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h150.9l20-84.8C200.8 17.9 223.4 0 249.3 0m-189 468L38.7 208h48.1l12.9 154.4c15.7-3.1 27.5-7.3 36.9-11.9 19.3-9.5 30.1-22 42.8-37.6l1.9-2.3c12.3-15.2 27.4-33.8 53.1-47.7 16-8.6 35.4-15.1 59.8-18.9l3-36h48.2l-21.7 260c-2.1 24.9-22.9 44-47.8 44H108.2c-25 0-45.8-19.1-47.8-44zM290 293.5c-14.1 3.1-24.6 7.1-32.9 11.6-17.2 9.3-26.9 21.2-39.9 37.2l-.7.8c-13.3 16.4-29.5 35.9-58.7 50.4-14.9 7.4-32.6 13.1-54.2 17l4.5 53.5h167.7z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M202.4 36.4C207.8 15 227 0 249 0h23c8.8 0 16 7.2 16 16s-7.2 16-16 16h-23c-7.3 0-13.7 5-15.5 12.1l-21 83.9H368c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16-7.2-16-16s7.2-16 16-16h163.5zM60.3 468l-23-276h32.1l14.5 173.1c29-3.7 48.3-10.6 62.3-18.6 17.1-9.8 27.6-22 39.1-36.1l2-2.5c10.8-13.4 23.2-28.6 42.5-41 19.3-12.3 44.4-21.2 80.6-24.9l4.2-50h32.1l-23 276c-2.1 24.9-22.9 44-47.8 44H108.2c-25 0-45.8-19.1-47.8-44zm247.4-193.5c-29 3.6-47.5 10.9-60.7 19.4-14.8 9.5-24.2 21.1-35.5 35l-1.4 1.7c-11.8 14.5-25.4 30.7-48 43.7-18.7 10.7-42.7 18.6-75.6 22.7l5.7 68.3c.7 8.3 7.6 14.7 15.9 14.7h167.7c8.3 0 15.3-6.4 15.9-14.7l15.9-190.9z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M210.2 30.3C214.6 12.5 230.6 0 249 0h31c4.4 0 8 3.6 8 8s-3.6 8-8 8h-31c-11 0-20.6 7.5-23.3 18.2L202.2 128H376c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h177.8zM60.3 468 36 176h16.1l16.6 199.8c40.3-2.1 66.6-10.2 85.5-20.8 19.7-11 32.2-25.2 44.6-40.2l2.9-3.5c11.4-13.9 23.4-28.5 41.3-40.1 19.3-12.5 44.8-21.2 82.9-23.1l6-72.1H348l-24.3 292c-2.1 24.9-22.9 44-47.8 44H108.2c-25 0-45.8-19.1-47.8-44zm264.3-203.8c-34.7 2-56.8 10-72.9 20.4-15.7 10.2-26.2 23-37.9 37.1l-2.7 3.3c-12.6 15.3-26.6 31.4-49.1 44-21.5 12-50.2 20.5-92 22.7l6.2 74.9c1.4 16.6 15.2 29.3 31.9 29.3h167.7c16.6 0 30.5-12.8 31.9-29.3l16.9-202.5z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="m55.9 431.5 3.7 37.3c2.5 24.5 23.1 43.2 47.8 43.2h169.2c24.7 0 45.3-18.7 47.8-43.2l16.5-164.6c-42.8 1.1-67.5 8.3-83.6 17-17.2 9.3-26.9 21.2-39.9 37.2l-.7.8c-13.3 16.4-29.5 35.9-58.7 50.4-24.6 12.2-56.8 20-101.9 22zm-4.8-47.8c42.3-1.6 68.2-8.6 85.4-17.2 19.3-9.6 30.1-22 42.8-37.6l1.9-2.3c12.3-15.2 27.4-33.8 53.1-47.7 25.9-14 60.5-22.2 111.2-22.8l6.4-64H32l19.2 191.5z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M249.3 0c-26 0-48.6 17.9-54.5 43.2l-20 84.8H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h320c17.7 0 32-14.3 32-32s-14.3-32-32-32H224.2l17.4-73.8c.9-3.6 4.1-6.2 7.8-6.2H280c13.3 0 24-10.7 24-24S293.3 0 280 0z"
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
