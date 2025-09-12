import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const PenFancyIcon: React.FC<
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
                  d="M373.5 27.1C388.5 9.9 410.2 0 433 0c43.6 0 79 35.4 79 79 0 22.8-9.9 44.6-27.1 59.6L277.7 319l-10.3-10.3-64-64-10.4-10.4zM170.3 256.9l10.4 10.4 64 64 10.4 10.4-19.2 83.4c-3.9 17.1-16.9 30.7-33.8 35.4L24.4 510.3l95.4-95.4c2.6.7 5.4 1.1 8.3 1.1 17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32c0 2.9.4 5.6 1.1 8.3L1.7 487.6 51.5 310c4.7-16.9 18.3-29.9 35.4-33.8l83.4-19.2z"
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
                  d="M399.4 59.9c7.1-7.6 17-11.9 27.3-11.9 20.6 0 37.3 16.7 37.3 37.3 0 10.4-4.3 20.2-11.9 27.3l-195.5 182-39.2-39.2zM426.7 0c-23.7 0-46.3 9.8-62.5 27.2L170.8 234.9l-73.6 22.7c-22.8 7-40.6 24.9-47.6 47.6L1.9 460.1c-9.4 30.7 19.3 59.4 50 50l154.8-47.6c22.8-7 40.6-24.9 47.6-47.6l22.6-73.6 207.9-193.5A85.3 85.3 0 0 0 512 85.3C512 38.2 473.8 0 426.7 0M228.8 334.8l-20.3 65.9c-2.3 7.6-8.3 13.5-15.9 15.9L85 449.7l49.7-49.7h1.3c13.3 0 24-10.7 24-24s-10.7-24-24-24-24 10.7-24 24v1.3L62.3 427l33.2-107.7c2.3-7.6 8.3-13.5 15.9-15.9l65.9-20.3 51.6 51.6z"
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
                  d="M392.1 48.7c9.6-10.6 23.2-16.7 37.5-16.7 27.8 0 50.4 22.6 50.4 50.4 0 14.3-6.1 27.9-16.7 37.5L256.6 306 206 255.4zM429.6 0c-23.4 0-45.6 9.9-61.3 27.3L175.1 242l-76.2 23.4c-19.8 6.1-35.4 21.3-41.9 40.9L2.9 468.6c-8.3 25 15.5 48.8 40.5 40.5L205.6 455c19.6-6.5 34.9-22.1 40.9-41.9l23.5-76.2 214.7-193.2c17.4-15.6 27.3-37.9 27.3-61.3C512 36.9 475.1 0 429.6 0M237.9 332.5 216 403.7c-3 9.9-10.7 17.7-20.5 20.9L67.2 467.4l67.5-67.4h1.3c13.3 0 24-10.7 24-24s-10.7-24-24-24-24 10.7-24 24v1.3l-67.4 67.5 42.8-128.3c3.3-9.8 11.1-17.4 20.9-20.5l71.2-21.9z"
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
                  d="M384.7 37.8c12-13.9 29.5-21.8 47.8-21.8 35.1 0 63.5 28.4 63.5 63.5 0 18.4-7.9 35.8-21.8 47.9L256.4 317.1 195 255.7zM432.5 0c-23 0-44.8 9.9-59.9 27.3L179.5 249l-85 24.3c-18 5.1-32.2 18.9-37.9 36.7L2.3 478.7c-6.1 18.9 12.2 36.6 30.9 29.9l170.8-61c16.6-5.9 29.5-19.4 34.7-36.3l24.3-78.8 221.7-193.1C502 124.3 512 102.5 512 79.5 512 35.6 476.4 0 432.5 0M246.9 330.2l-23.5 76.4c-3.7 12.1-12.9 21.7-24.8 25.9l-167.8 60 75.1-75.1c6.3 4.2 13.9 6.6 22.1 6.6 22.1 0 40-17.9 40-40s-17.9-40-40-40-40 17.9-40 40c0 8.2 2.4 15.7 6.6 22.1l-76.9 76.8 54-168.1c4.1-12.7 14.3-22.6 27.1-26.2l82.9-23.6 65.3 65.3zM104 384a24 24 0 1 1 48 0 24 24 0 1 1-48 0"
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
                  d="m174.1 256-1.7.4-94.7 21.9c-11.4 2.6-20.5 11.3-23.6 22.6L1.7 487.7l95.4-95.4c-.7-2.6-1.1-5.4-1.1-8.3 0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32c-2.9 0-5.6-.4-8.3-1.1l-95.3 95.4L211.2 458a32.18 32.18 0 0 0 22.6-23.6l21.9-94.7.4-1.7zM512 79.3v-.8.7z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M373.5 27.1C388.5 9.9 410.2 0 433 0c43.6 0 79 35.4 79 79 0 22.8-9.9 44.6-27.1 59.6L256 337.9 174.1 256z"
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
