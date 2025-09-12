import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const LightbulbSlashIcon: React.FC<
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
                  d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-195-152.8c4.4-6.2 8.9-12.4 13.4-18.6 5.2-7.1 10.4-14.2 15.4-21.4 19.8-28.5 31.4-63 31.4-100.3C496 78.8 417.2 0 320 0c-70.3 0-130.9 41.2-159.2 100.8zm174.5 136.8C227.7 96.7 270 64 320 64c8.8 0 16 7.2 16 16s-7.2 16-16 16c-40 0-73.1 29.3-79 67.6zm-60.9 87.9c5.4 16.8 13.2 32.4 23 46.6 5 7.2 10.2 14.3 15.4 21.4 19.8 27.1 39.7 54.4 49.2 86.2h108.1zM240 416v16c0 44.2 35.8 80 80 80s80-35.8 80-80v-7.1l-11.3-8.9z"
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
                  d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-195-152.8c4.4-6.2 8.9-12.4 13.4-18.6 5.2-7.1 10.4-14.2 15.4-21.4 19.8-28.5 31.4-63 31.4-100.3C496 78.8 417.2 0 320 0c-70.3 0-130.9 41.2-159.2 100.8zM200 131.4C218.1 82.7 265 48 320 48c70.7 0 128 57.3 128 128 0 27.2-8.4 52.3-22.8 72.9-3.7 5.3-8.1 11.3-12.7 17.7-4.6 6.3-9.5 13-14.4 20L268.9 185.5c1.9-2.6 3.1-5.9 3.1-9.5 0-26.5 21.5-48 48-48 8.8 0 16-7.2 16-16s-7.2-16-16-16c-40 0-73.1 29.3-79 67.6l-41-32.1zm200 293.5-11.3-8.9H240v16c0 44.2 35.8 80 80 80s80-35.8 80-80zM152.4 229.8c5.4 16.8 13.2 32.4 23 46.6 5 7.2 10.2 14.3 15.4 21.4 12.3 16.8 24.6 33.7 34.5 51.8 5.9 10.8 9.6 22.5 11.8 34.5h48.6c-2.6-18.7-7.9-38.6-18.3-57.5-2-3.7-4.2-7.5-6.5-11.2z"
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
                  d="M438.3 258.1c-3.3 4.7-6.9 9.7-10.7 15l25.2 19.9c4-5.5 8-11 11.8-16.6 19.8-28.5 31.4-63 31.4-100.3C496 78.8 417.2 0 320 0c-59.4 0-112 29.4-143.8 74.5l25.2 19.9C227.3 56.7 270.8 32 320 32c79.5 0 144 64.5 144 144 0 30.6-9.5 58.8-25.7 82.1M226.5 114.3l25.2 19.9C265.8 111.3 291.1 96 320 96c8.8 0 16-7.2 16-16s-7.2-16-16-16c-39 0-73.4 20-93.5 50.3m-25.4 143-52.6-41.6c5.1 22.1 14.3 42.5 26.9 60.5 5 7.2 10.2 14.3 15.4 21.4 12.3 16.8 24.6 33.7 34.5 51.8 5.9 10.8 9.6 22.5 11.8 34.5h32.4c-2.5-16.6-7.3-33.7-16.2-49.9-10.9-20-25.3-39.7-38-57.1-4.9-6.7-9.5-13-13.6-19l-.5-.7zM274.7 448h90.5c-6.6 18.6-24.4 32-45.3 32s-38.7-13.4-45.3-32zM240 432c0 44.2 35.8 80 80 80s80-35.8 80-80v-5.3c0-5.9-4.8-10.7-10.7-10.7H250.7c-5.9 0-10.7 4.8-10.7 10.7zM25.9 3.4C19-2 8.9-.8 3.4 6.1s-4.2 17 2.7 22.5l608 480c6.9 5.5 17 4.3 22.5-2.6s4.3-17-2.6-22.5z"
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
                  d="M451.5 267.2q-3.15 4.65-6.6 9.3l12.6 9.9c2.4-3.4 4.8-6.7 7.2-10.1 19.8-28.5 31.4-63 31.4-100.3C496 78.8 417.2 0 320 0c-56.5 0-106.9 26.7-139.1 68.1l12.6 9.9c29.3-37.7 75-62 126.5-62 88.4 0 160 71.6 160 160 0 33.9-10.5 65.3-28.5 91.2M228.7 105.8l12.6 9.9C257.3 94 283 80 312 80c4.4 0 8-3.6 8-8s-3.6-8-8-8c-34.1 0-64.4 16.4-83.3 41.8m171 318.5-10.5-8.3H250.7c-5.9 0-10.7 4.8-10.7 10.7v5.3c0 44.2 35.8 80 80 80s80-35.8 80-80v-5.3q0-1.2-.3-2.4M152 228.8c5.4 17.1 13.3 33.1 23.3 47.6 5 7.2 10.2 14.3 15.4 21.4 12.3 16.8 24.6 33.7 34.5 51.8 5.9 10.8 9.6 22.5 11.8 34.5h16.2c-2.4-14.4-6.6-28.7-14-42.2-10.4-19-23.7-37.3-36.3-54.4-5-6.9-10-13.7-14.5-20.2-4.1-5.8-7.7-12-11-18.3zM256 432h128c0 35.3-28.7 64-64 64s-64-28.7-64-64M13 1.7C9.5-1 4.5-.4 1.7 3S-.4 11.5 3 14.3l624 496c3.5 2.7 8.5 2.2 11.2-1.3s2.2-8.5-1.3-11.2z"
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
                  d="M435.9 316.3c4.4-6.2 8.9-12.4 13.4-18.6 5.2-7.1 10.4-14.2 15.4-21.4 19.8-28.5 31.4-63 31.4-100.3C496 78.8 417.2 0 320 0c-70.3 0-130.9 41.2-159.2 100.8l52.4 41.1C227.7 96.7 270 64 320 64c8.8 0 16 7.2 16 16s-7.2 16-16 16c-40 0-73.1 29.3-79 67.6zm-283.5-86.5c5.4 16.8 13.2 32.4 23 46.6 5 7.2 10.2 14.3 15.4 21.4 19.8 27.1 39.7 54.4 49.2 86.2h108.1zM240 416v16c0 44.2 35.8 80 80 80s80-35.8 80-80v-7.1l-11.3-8.9z"
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
