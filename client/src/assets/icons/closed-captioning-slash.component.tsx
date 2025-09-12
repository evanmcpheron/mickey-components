import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ClosedCaptioningSlashIcon: React.FC<
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
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-30-23.5c4.6-8.8 7.2-18.9 7.2-29.6V96c0-35.3-28.7-64-64-64H96c-6.7 0-13.1 1-19.2 2.9zm197.8 155c26.6 1.2 50.4 13.3 67 31.9 6.1 6.8 7.6 16.2 4.7 24.3l-71.6-56.2zm94 73.7c10-42.3 48-73.8 93.4-73.8 28.4 0 54 12.4 71.5 32 8.8 9.9 8 25-1.9 33.9s-25 8-33.9-1.9c-8.8-9.9-21.6-16-35.8-16-26.5 0-48 21.5-48 48 0 5.4.9 10.5 2.5 15.4l-47.9-37.6zm89.4 70c1.3.1 2.7.2 4.1.2 14.2 0 27-6.1 35.8-16s24-10.7 33.9-1.9 10.7 24 1.9 33.9c-7.8 8.7-17.2 16-27.7 21.4l-47.9-37.6zM32 121.2V416c0 35.3 28.7 64 64 64h391.4L295 328.4c-16.8 14.7-38.9 23.6-63 23.6-53 0-96-43-96-96 0-16 3.9-31.1 10.8-44.3zM232 304c8.7 0 16.9-2.3 23.9-6.4l-70-55.1c-1.3 4.3-1.9 8.8-1.9 13.5 0 26.5 21.5 48 48 48"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-30-23.5c4.6-8.8 7.2-18.9 7.2-29.6V96c0-35.3-28.7-64-64-64H96c-6.7 0-13.1 1-19.2 2.9zM134.4 80H544c8.8 0 16 7.2 16 16v317.6l-92.1-72.2c10.5-5.4 19.9-12.7 27.7-21.4 8.8-9.9 8-25-1.9-33.9s-25-8-33.9 1.9c-8.8 9.9-21.6 16-35.8 16-1.4 0-2.7-.1-4.1-.2l-41.4-32.5c-1.6-4.8-2.5-10-2.5-15.4 0-26.5 21.5-48 48-48 14.2 0 27 6.1 35.8 16s24 10.7 33.9 1.9 10.7-24 1.9-33.9c-17.5-19.6-43.1-32-71.5-32-45.4 0-83.4 31.5-93.4 73.8l-22.4-17.5c2.9-8.1 1.5-17.4-4.7-24.3-16.6-18.5-40.4-30.6-67-31.9zm353 400-60.9-48H96c-8.8 0-16-7.2-16-16V159l-48-37.8V416c0 35.3 28.7 64 64 64zM295 328.4l-39.1-30.8c-7 4.1-15.2 6.4-23.9 6.4-26.5 0-48-21.5-48-48 0-4.7.7-9.2 1.9-13.5l-39.1-30.8C139.9 224.9 136 240 136 256c0 53 43 96 96 96 24.1 0 46.2-8.9 63-23.6"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M25.9 3.4C19-2 8.9-.8 3.4 6.1s-4.2 17 2.7 22.5l608 480c6.9 5.5 17 4.3 22.5-2.6s4.3-17-2.6-22.5zM500.4 480l-40.5-32H96c-17.7 0-32-14.3-32-32V135.4l-32-25.2V416c0 35.3 28.7 64 64 64zM139.6 32l40.5 32H544c17.7 0 32 14.3 32 32v280.6l32 25.3V96c0-35.3-28.7-64-64-64zm233.9 184.7c11.7-15 30-24.7 50.5-24.7 17.4 0 33.2 7 44.8 18.3 6.3 6.2 16.4 6.1 22.6-.2s6.1-16.4-.2-22.6c-17.3-17-41-27.4-67.2-27.4-30.7 0-58.1 14.4-75.6 36.9l25.1 19.8zm-222.4-12.5c-9.5 15-15.1 32.7-15.1 51.8 0 53 43 96 96 96 26.2 0 49.9-10.5 67.2-27.4.7-.6 1.2-1.3 1.8-2l-25.2-19.9C264.3 313.4 249 320 232 320c-35.3 0-64-28.7-64-64 0-11.6 3.1-22.4 8.4-31.8z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M13 1.7C9.5-1 4.5-.4 1.7 3S-.4 11.5 3 14.3l624 496c3.5 2.7 8.5 2.2 11.2-1.3s2.2-8.5-1.3-11.2zm595 389.9V96c0-35.3-28.7-64-64-64H152.5l20.3 16H544c26.5 0 48 21.5 48 48v283zM370.9 204.4C385.5 187 407.5 176 432 176c24.8 0 47 11.3 61.6 29 2.8 3.4 7.9 3.9 11.3 1.1s3.9-7.9 1.1-11.3c-17.6-21.2-44.2-34.8-74-34.8-29.6 0-56.1 13.4-73.7 34.5zM48 133l-16-12.6V416c0 35.3 28.7 64 64 64h391.5l-20.3-16H96c-26.5 0-48-21.5-48-48zm230.3 181.8C264 328 244.9 336 224 336c-44.2 0-80-35.8-80-80 0-14.2 3.7-27.6 10.2-39.1l-12.7-10C132.9 221.2 128 238 128 256c0 53 43 96 96 96 26 0 49.7-10.4 67-27.2z"
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
                  d="M32 121.2V416c0 35.3 28.7 64 64 64h391.4L295 328.4c-16.8 14.7-38.9 23.6-63 23.6-53 0-96-43-96-96 0-16 3.9-31.1 10.8-44.3zm223.9 176.4-70-55.1c-1.3 4.3-1.9 8.8-1.9 13.5 0 26.5 21.5 48 48 48 8.7 0 16.9-2.3 23.9-6.4M303.5 192c6.1 6.8 7.6 16.2 4.7 24.3l22.4 17.5c10-42.3 48-73.8 93.4-73.8 28.4 0 54 12.4 71.5 32 8.8 9.9 8 25-1.9 33.9s-25 8-33.9-1.9c-8.8-9.9-21.6-16-35.8-16-26.5 0-48 21.5-48 48 0 5.4.9 10.5 2.5 15.4l41.4 32.5c1.3.1 2.7.2 4.1.2 14.2 0 27-6.1 35.8-16s24-10.7 33.9-1.9 10.7 24 1.9 33.9c-7.8 8.7-17.2 16-27.7 21.4l133 104.1c4.6-8.8 7.2-18.9 7.2-29.6V96c0-35.3-28.7-64-64-64H96c-6.7 0-13.1 1-19.2 2.9l159.8 125.2c26.6 1.2 50.4 13.3 67 31.9z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1l-592-464C-1.2 34.7-3.1 19.6 5.1 9.2"
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
