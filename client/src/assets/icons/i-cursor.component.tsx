import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ICursorIcon: React.FC<
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
                viewBox="0 0 256 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M.1 29.3C-1.4 47 11.7 62.4 29.3 63.9l8 .7C70.5 67.3 96 95 96 128.3V224H64c-17.7 0-32 14.3-32 32s14.3 32 32 32h32v95.7c0 33.3-25.5 61-58.7 63.8l-8 .7C11.7 449.6-1.4 465 .1 482.7s16.9 30.7 34.5 29.2l8-.7c34.1-2.8 64.2-18.9 85.4-42.9 21.2 24 51.2 40.1 85.4 42.9l8 .7c17.6 1.5 33.1-11.6 34.5-29.2s-11.6-33.1-29.2-34.5l-8-.7c-33.2-2.8-58.7-30.5-58.7-63.8V288h32c17.7 0 32-14.3 32-32s-14.3-32-32-32h-32v-95.7c0-33.3 25.5-61 58.7-63.8l8-.7c17.6-1.5 30.7-16.9 29.2-34.5S239-1.4 221.3.1l-8 .7c-34.1 2.8-64.1 18.9-85.3 42.9-21.2-24-51.2-40-85.4-42.9l-8-.7C17-1.4 1.6 11.7.1 29.3"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M.1 22.2C-.9 35.4 9 47 22.2 48l15.4 1.2C75 52 104 83.3 104 120.9V232H64c-13.3 0-24 10.7-24 24s10.7 24 24 24h40v111.1c0 37.6-29 68.9-66.5 71.8l-15.4 1.2c-13.2 1-23 12.5-22 25.7s12.6 23.1 25.8 22.1l15.4-1.2c35.7-2.7 66.7-20.9 86.8-47.6 20.1 26.7 51.1 44.9 86.8 47.6l15.4 1.2c13.2 1 24.8-8.9 25.8-22.1S247.2 465 234 464l-15.4-1.2C181 460 152 428.7 152 391.1V280h40c13.3 0 24-10.7 24-24s-10.7-24-24-24h-40V120.9c0-37.6 29-68.9 66.5-71.8l15.4-1.2c13.2-1 23.1-12.6 22.1-25.8s-12.6-23-25.8-22l-15.4 1.2C179.1 4 148.1 22.2 128 48.9 107.9 22.2 76.9 4 41.2 1.3L25.8.1C12.6-.9 1.1 8.9.1 22.2"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M0 14.9C-.6 23.7 6 31.3 14.9 32l8 .6c50.2 3.5 89.1 45.3 89.1 95.7V240H64c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v111.7c0 50.4-38.9 92.2-89.2 95.8l-8 .6c-8.8.6-15.4 8.2-14.8 17s8.3 15.5 17.1 14.9l8-.6c44.6-3.2 82.5-29 102.9-65.7 20.4 36.7 58.3 62.5 102.9 65.7l8 .6c8.8.6 16.5-6 17.1-14.8s-6-16.5-14.8-17.1l-8-.6c-50.2-3.6-89.2-45.4-89.2-95.8V272h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48V128.3c0-50.4 38.9-92.2 89.2-95.8l8-.6c8.8-.6 15.4-8.3 14.8-17.1S247.7-.6 238.9 0l-8 .6c-44.6 3.2-82.5 29-102.9 65.7C107.6 29.6 69.7 3.8 25.1.6l-8-.6C8.3-.6.7 6 0 14.9"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M0 7.5c-.3 4.4 3 8.2 7.5 8.5L23 17c54.5 3.7 97 49 97 103.8V248H64c-4.4 0-8 3.6-8 8s3.6 8 8 8h56v127.2C120 446 77.5 491.3 22.9 495l-15.4 1c-4.4.3-7.7 4.1-7.5 8.5s4.1 7.7 8.5 7.5l15.5-1c47.9-3.2 87.7-34.2 104-76.6 16.4 42.4 56.1 73.4 104 76.6l15.5 1c4.4.3 8.2-3 8.5-7.5s-3-8.2-7.5-8.5l-15.5-1c-54.6-3.6-97.1-49-97.1-103.8V264h56c4.4 0 8-3.6 8-8s-3.6-8-8-8H136V120.8C136 66 178.5 20.7 233.1 17l15.5-1c4.4-.3 7.7-4.1 7.5-8.5S252-.2 247.6 0L232 1c-47.9 3.2-87.7 34.2-104 76.6C111.6 35.2 71.9 4.2 24 1L8.5 0C4.1-.3.3 3.1 0 7.5"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M96 224H64c-17.7 0-32 14.3-32 32s14.3 32 32 32h32zm64 64h32c17.7 0 32-14.3 32-32s-14.3-32-32-32h-32z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M29.3 63.9C11.7 62.4-1.4 47 .1 29.3S17-1.4 34.7.1l8 .7c34.1 2.8 64.1 18.9 85.3 42.9 21.2-24 51.2-40 85.4-42.9l8-.7c17.6-1.5 33.1 11.6 34.5 29.2s-11.6 33.1-29.2 34.5l-8 .7C185.5 67.3 160 95 160 128.3v255.4c0 33.3 25.5 61 58.7 63.8l8 .7c17.6 1.5 30.7 16.9 29.2 34.5s-16.9 30.7-34.5 29.2l-8-.7c-34.1-2.8-64.2-18.9-85.4-42.9-21.2 24-51.2 40.1-85.4 42.9l-8 .7C17 513.4 1.6 500.3.1 482.7s11.6-33.1 29.2-34.5l8-.7C70.5 444.7 96 417 96 383.7V128.3c0-33.3-25.5-61-58.7-63.8l-8-.7z"
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
