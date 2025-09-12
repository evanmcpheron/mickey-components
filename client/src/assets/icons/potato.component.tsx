import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const PotatoIcon: React.FC<
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
                  d="M466.3 249.2C494.4 222.9 512 185.5 512 144 512 64.5 447.5 0 368 0c-39.8 0-75.9 16.2-102 42.3-27.4 27.5-61 52.7-95.1 71.3-24.1 13.2-44 33.1-57.3 57.3C95 205 69.8 238.6 42.3 266 16.2 292.1 0 328.2 0 368c0 79.5 64.5 144 144 144 30.3 0 58.4-9.3 81.5-25.3 28.1-19.3 60.2-35.3 92.5-46.2 44.1-14.9 80.1-50.9 93.1-99.2 9.2-34.2 29.4-67.9 55.2-92.1M384 168a24 24 0 1 1 0 48 24 24 0 1 1 0-48m-192 32a24 24 0 1 1 0 48 24 24 0 1 1 0-48m-56 216a24 24 0 1 1 48 0 24 24 0 1 1-48 0"
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
                  d="M464 144c0-53-43-96-96-96-26.6 0-50.5 10.7-68 28.2-30.7 30.8-68 58.7-106 79.5-16.1 8.8-29.4 22.1-38.2 38.2C134.9 232 107 269.3 76.2 300 58.7 317.5 48 341.4 48 368c0 53 43 96 96 96 20.2 0 38.9-6.2 54.3-16.8 31.8-21.9 67.9-39.9 104.3-52.2 29.5-10 53.5-34 62.1-66.1 11.5-42.8 36.5-84.4 68.8-114.7 18.9-17.6 30.5-42.5 30.5-70.2m48 0c0 41.5-17.6 78.9-45.7 105.2-25.8 24.2-46.1 57.9-55.2 92.1-12.9 48.3-49 84.3-93.1 99.2-32.3 10.9-64.4 26.9-92.5 46.2-23.1 16-51.2 25.3-81.5 25.3C64.5 512 0 447.5 0 368c0-39.8 16.2-75.9 42.3-102 27.5-27.4 52.7-61 71.3-95.1 13.2-24.1 33.1-44 57.3-57.3C205 95 238.6 69.8 266 42.3 292.1 16.2 328.2 0 368 0c79.5 0 144 64.5 144 144m-160 24a24 24 0 1 1 0 48 24 24 0 1 1 0-48m-184 88a24 24 0 1 1 48 0 24 24 0 1 1-48 0m-8 104a24 24 0 1 1 0 48 24 24 0 1 1 0-48"
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
                  d="M480 144c0-61.9-50.1-112-112-112-31 0-59 12.5-79.3 32.9-29.6 29.7-65.7 56.7-102.4 76.8-18.8 10.3-34.3 25.8-44.6 44.6-20.1 36.7-47.1 72.8-76.8 102.4C44.5 309 32 337 32 368c0 61.9 50.1 112 112 112 23.6 0 45.4-7.3 63.4-19.6 30.5-21 65.4-38.4 100.4-50.2 34.4-11.6 62.4-39.6 72.4-77.2 10.7-39.9 34.1-78.9 64.3-107.2 21.9-20.5 35.5-49.5 35.5-81.8m32 0c0 41.5-17.6 78.9-45.7 105.2-25.8 24.2-46.1 57.9-55.2 92.1-12.9 48.3-49 84.3-93.1 99.2-32.3 10.9-64.4 26.9-92.5 46.2-23.1 16-51.2 25.3-81.5 25.3C64.5 512 0 447.5 0 368c0-39.8 16.2-75.9 42.3-102 27.5-27.4 52.7-61 71.3-95.1 13.2-24.1 33.1-44 57.3-57.3C205 95 238.6 69.8 266 42.3 292.1 16.2 328.2 0 368 0c79.5 0 144 64.5 144 144M180 264a20 20 0 1 1 0-40 20 20 0 1 1 0 40m-12 132a20 20 0 1 1-40 0 20 20 0 1 1 40 0m196-196a20 20 0 1 1 0-40 20 20 0 1 1 0 40"
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
                  d="M496 144c0-70.7-57.3-128-128-128-35.4 0-67.5 14.4-90.6 37.6-28.5 28.6-63.4 54.7-98.8 74-21.4 11.8-39.2 29.5-50.9 50.9-19.4 35.4-45.4 70.2-74 98.8C30.4 300.5 16 332.6 16 368c0 70.7 57.3 128 128 128 26.9 0 51.9-8.3 72.5-22.5 29.3-20.2 62.8-36.8 96.4-48.2 39.2-13.3 71.2-45.2 82.7-88.2 9.9-37.1 31.8-73.4 59.8-99.6 25-23.4 40.6-56.6 40.6-93.5m16 0c0 41.5-17.6 78.9-45.7 105.2-25.8 24.2-46.1 57.9-55.2 92.1-12.9 48.3-49 84.3-93.1 99.2-32.3 10.9-64.4 26.9-92.5 46.2-23.1 16-51.2 25.3-81.5 25.3C64.5 512 0 447.5 0 368c0-39.8 16.2-75.9 42.3-102 27.5-27.4 52.7-61 71.3-95.1 13.2-24.1 33.1-44 57.3-57.3C205 95 238.6 69.8 266 42.3 292.1 16.2 328.2 0 368 0c79.5 0 144 64.5 144 144M176 256a16 16 0 1 1 0-32 16 16 0 1 1 0 32m-16 144a16 16 0 1 1-32 0 16 16 0 1 1 32 0m208-208a16 16 0 1 1 0-32 16 16 0 1 1 0 32"
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
                  d="M512 144c0 41.5-17.6 78.9-45.7 105.2-25.8 24.2-46.1 57.9-55.2 92.1-12.9 48.3-49 84.3-93.1 99.2-32.3 10.9-64.4 26.9-92.5 46.2-23.1 16-51.2 25.3-81.5 25.3C64.5 512 0 447.5 0 368c0-39.8 16.2-75.9 42.3-102 27.5-27.4 52.7-61 71.3-95.1 13.2-24.1 33.1-44 57.3-57.3C205 95 238.6 69.8 266 42.3 292.1 16.2 328.2 0 368 0c79.5 0 144 64.5 144 144"
                />
                <path
                  className="aps-icon-foreground"
                  d="M360 192a24 24 0 1 1 48 0 24 24 0 1 1-48 0m-192 32a24 24 0 1 1 48 0 24 24 0 1 1-48 0m-8 168a24 24 0 1 1 0 48 24 24 0 1 1 0-48"
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
