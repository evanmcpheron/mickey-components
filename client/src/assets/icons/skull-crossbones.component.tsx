import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SkullCrossbonesIcon: React.FC<
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
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M368 128c0 44.4-25.4 83.5-64 106.4V256c0 17.7-14.3 32-32 32h-96c-17.7 0-32-14.3-32-32v-21.6c-38.6-23-64-62.1-64-106.4C80 57.3 144.5 0 224 0s144 57.3 144 128m-200 48a32 32 0 1 0 0-64 32 32 0 1 0 0 64m144-32a32 32 0 1 0-64 0 32 32 0 1 0 64 0M3.4 273.7c7.9-15.8 27.1-22.2 42.9-14.3L224 348.2l177.7-88.8c15.8-7.9 35-1.5 42.9 14.3s1.5 35-14.3 42.9L295.6 384l134.8 67.4c15.8 7.9 22.2 27.1 14.3 42.9s-27.1 22.2-42.9 14.3L224 419.8 46.3 508.6c-15.8 7.9-35 1.5-42.9-14.3s-1.5-35 14.3-42.9L152.4 384 17.7 316.6c-15.8-7.9-22.2-27.1-14.3-42.9"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M290.1 185.8c19.5-15.4 29.9-36.3 29.9-57.8 0-39-37.5-80-96-80s-96 41-96 80c0 21.5 10.4 42.4 29.9 57.8 11.4 9.1 18.1 22.9 18.1 37.6v8.6c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8v-8.6c0-14.6 6.7-28.5 18.1-37.6M320 232c0 30.9-25.1 56-56 56h-80c-30.9 0-56-25.1-56-56v-8.6C98.5 200 80 165.9 80 128 80 57.3 144.5 0 224 0s144 57.3 144 128c0 37.9-18.5 72-48 95.4zM2.7 268.9c6.1-11.8 20.6-16.3 32.4-10.2L224 357l188.9-98.2c11.8-6.1 26.2-1.5 32.4 10.2s1.5 26.3-10.2 32.4L276 384l159.1 82.7c11.8 6.1 16.3 20.6 10.2 32.4s-20.6 16.3-32.4 10.2L224 411 35.1 509.3c-11.8 6.1-26.3 1.5-32.4-10.2s-1.5-26.2 10.2-32.4L172 384 12.9 301.3c-11.7-6.1-16.3-20.6-10.2-32.4M160 136a24 24 0 1 1 48 0 24 24 0 1 1-48 0m104-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M300.1 198.4c-7.6 6.1-12.1 15.3-12.1 25V240c0 8.8-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16v-16.6c0-9.8-4.4-19-12.1-25C125.1 180.2 112 155 112 128c0-49.6 46.5-96 112-96s112 46.4 112 96c0 27-13.1 52.2-35.9 70.4M320 240v-16.6c29.5-23.4 48-57.5 48-95.4C368 57.3 303.5 0 224 0S80 57.3 80 128c0 37.9 18.5 72 48 95.4V240c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48m126.5 57.3c-3.7-8-13.2-11.5-21.2-7.8L224 382.4 22.7 289.5c-8-3.7-17.5-.2-21.2 7.8s-.2 17.5 7.8 21.2L185.8 400 9.3 481.5c-8 3.7-11.5 13.2-7.8 21.2s13.2 11.5 21.2 7.8L224 417.6l201.3 92.9c8 3.7 17.5.2 21.2-7.8s.2-17.5-7.8-21.2L262.2 400l176.5-81.5c8-3.7 11.5-13.2 7.8-21.2M208 136a24 24 0 1 0-48 0 24 24 0 1 0 48 0m56 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M295.8 220.7c34.5-20.5 56.2-54.8 56.2-92.7 0-60.1-55.5-112-128-112S96 67.9 96 128c0 37.9 21.7 72.2 56.2 92.7 4.8 2.9 7.8 8.1 7.8 13.8V256c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16v-21.6c0-5.6 3-10.9 7.8-13.8zM304 256c0 17.7-14.3 32-32 32h-96c-17.7 0-32-14.3-32-32v-21.6c-38.6-23-64-62.1-64-106.4C80 57.3 144.5 0 224 0s144 57.3 144 128c0 44.4-25.4 83.5-64 106.4zM176 112a32 32 0 1 1 0 64 32 32 0 1 1 0-64m96 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64m-80 32a16 16 0 1 0-32 0 16 16 0 1 0 32 0m80 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32M1 260.1c2.1-3.9 7-5.3 10.9-3.1L224 374.8 436.1 257c3.9-2.1 8.7-.8 10.9 3.1s.8 8.7-3.1 10.9L240.5 384l203.4 113c3.9 2.1 5.3 7 3.1 10.9s-7 5.3-10.9 3.1L224 393.2 11.9 511c-3.9 2.1-8.7.8-10.9-3.1s-.8-8.7 3.1-10.9l203.4-113L4.1 271c-3.9-2.1-5.3-7-3.1-10.9"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M46.3 259.4c-15.8-7.9-35-1.5-42.9 14.3s-1.5 35 14.3 42.9L152.4 384 17.7 451.4c-15.8 7.9-22.2 27.1-14.3 42.9s27.1 22.2 42.9 14.3L224 419.8l177.7 88.8c15.8 7.9 35 1.5 42.9-14.3s1.5-35-14.3-42.9L295.6 384l134.8-67.4c15.8-7.9 22.2-27.1 14.3-42.9s-27.1-22.2-42.9-14.3L224 348.2z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M304 234.4c38.6-23 64-62.1 64-106.4C368 57.3 303.5 0 224 0S80 57.3 80 128c0 44.4 25.4 83.5 64 106.4V256c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32zM136 144a32 32 0 1 1 64 0 32 32 0 1 1-64 0m144-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64"
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
