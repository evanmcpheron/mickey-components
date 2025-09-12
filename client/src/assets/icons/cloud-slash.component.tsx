import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CloudSlashIcon: React.FC<
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
                  d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L600 445c24.6-23.3 40-56.3 40-93 0-61.9-44-113.6-102.4-125.4 4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-46.4 0-88.2 19.8-117.4 51.3zM487.4 480 97.2 172.6C96.4 179 96 185.5 96 192c0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144z"
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
                  d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-33.4-26.2C623.6 418.1 640 383 640 344c0-55.7-33.5-103.7-81.5-124.7 1-6.3 1.5-12.8 1.5-19.3 0-66.3-53.7-120-120-120-17.4 0-33.8 3.7-48.7 10.3C360.4 54.6 314.9 32 264 32c-48.5 0-92.1 20.5-122.8 53.4zm140.4 110C200.9 93.4 230.9 80 264 80c36.3 0 68.8 16.1 90.9 41.7 13.8 16 36.5 21.1 55.9 12.5 8.9-3.9 18.7-6.2 29.2-6.2 39.8 0 72 32.2 72 72q0 6-.9 11.7c-3.5 21.6 8.1 42.9 28.1 51.7C570.4 276.9 592 308 592 344c0 27.8-12.9 52.6-33.1 68.8zM487.4 480l-60.9-48H144c-53 0-96-43-96-96 0-41.7 26.6-77.3 64-90.5 16.4-5.8 28.2-19.9 31.2-36.6l-45.1-35.6Q96 186.35 96 200v.2C40.1 220 0 273.3 0 336c0 79.5 64.5 144 144 144h343.4"
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
                  d="M25.9 3.4C19-2 8.9-.8 3.4 6.1s-4.2 17 2.7 22.5l608 480c6.9 5.5 17 4.3 22.5-2.6s4.3-17-2.6-22.5zM640 352c0-49.1-27.7-91.8-68.3-113.2 2.8-9.8 4.3-20.1 4.3-30.8 0-61.9-50.1-112-112-112-17.2 0-33.5 3.9-48 10.8C384.1 61.5 331.5 32 272 32c-35.5 0-68.6 10.5-96.2 28.6l26.8 21.2C223.2 70.5 246.8 64 272 64c48.7 0 91.7 24.1 117.8 61.2 9 12.7 25.8 17.2 39.9 10.5 10.3-4.9 21.9-7.7 34.3-7.7 44.2 0 80 35.8 80 80 0 7.7-1.1 15-3 22-4.1 14.5 2.5 30 15.8 37.1 30.5 16.1 51.2 48.1 51.2 84.9 0 15.1-3.5 29.4-9.7 42.2l25.6 20.2c10.2-18.5 16.1-39.8 16.1-62.4M101.3 164.9c-2.9 11.3-4.6 23.1-5.1 35.2C40.2 219.9 0 273.2 0 336c0 79.5 64.5 144 144 144h356.4l-40.5-32H144c-61.9 0-112-50.1-112-112 0-48.8 31.2-90.3 74.8-105.7 12.3-4.3 20.8-15.7 21.3-28.8.2-4.9.7-9.7 1.4-14.4z"
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
                  d="M13 1.7C9.5-1 4.5-.4 1.7 3S-.4 11.5 3 14.3l624 496c3.5 2.7 8.5 2.2 11.2-1.3s2.2-8.5-1.3-11.2zM640 352c0-56.3-36.4-104.1-86.9-121.3-5-1.7-10.2-3.1-15.5-4.2 1.9-5 3.4-10.1 4.5-15.4 1.3-6.2 1.9-12.6 1.9-19.2 0-53-43-96-96-96-15.2 0-29.5 3.5-42.3 9.8-3.8 1.9-7.5 4-11 6.4-2.7-4.6-5.6-9.1-8.7-13.4C357 58.3 309.6 32 256 32c-28.3 0-54.9 7.3-77.9 20.2L191.8 63c19.3-9.6 41.1-15 64.2-15 53.3 0 99.9 29 124.8 72.2 2.2 3.8 5.9 6.6 10.2 7.6s8.8.2 12.5-2.3c12.7-8.5 28-13.5 44.4-13.5 44.2 0 80 35.8 80 80 0 10.2-1.9 19.9-5.3 28.8-1.7 4.4-1.4 9.3.9 13.4s6.2 7.1 10.9 8C585.5 252.6 624 297.8 624 352c0 16-3.3 31.1-9.4 44.9l12.9 10.2c8-16.7 12.4-35.4 12.4-55.1zM97.3 171.9c-.8 6.6-1.3 13.3-1.3 20.1 0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h343.5l-20.3-16H144c-70.7 0-128-57.3-128-128 0-55.8 35.7-103.3 85.5-120.8 6.7-2.4 11-8.8 10.7-15.9-.1-2.4-.2-4.9-.2-7.3 0-2.8.1-5.5.2-8.3l-15-11.8z"
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
                  d="M97.2 172.6 487.4 480H144C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9-.1-2.7-.2-5.4-.2-8.1 0-6.6.4-13.1 1.2-19.4M640 352c0 36.6-15.4 69.6-40 93L138.6 83.3C167.8 51.8 209.6 32 256 32c59.3 0 111 32.2 138.7 80.2A95.5 95.5 0 0 1 448 96c53 0 96 43 96 96 0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352"
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
