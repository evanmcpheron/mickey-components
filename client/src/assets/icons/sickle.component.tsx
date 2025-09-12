import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SickleIcon: React.FC<
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
                  d="M212.7 340.7 181 309c-33.9-33.9-53-80-53-128C128 81 209 0 309 0h11c90.1 0 165.8 62.1 186.4 145.8 1.8 7.3-4 14.2-11.5 14.2-3.9 0-7.5-1.9-9.9-4.9-26.1-32.2-65.5-51.1-107.2-51.1-76.1 0-137.8 61.7-137.8 137.8v9.8c0 20.7 5.2 39.7 12.2 58.6 2.2 6 .9 12.8-3.7 17.3l-13.2 13.2c-6.2 6.2-16.4 6.2-22.6 0M121 311l24 24 32 32 24 24c9.4 9.4 9.4 24.6 0 33.9l-16 16c-9.4 9.4-24.6 9.4-33.9 0l-7-7L73 505c-9.4 9.4-24.6 9.4-33.9 0L7 473c-9.4-9.4-9.4-24.6 0-33.9l71-71-7-7c-9.4-9.4-9.4-24.6 0-33.9l16-16c9.4-9.4 24.6-9.4 33.9 0z"
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
                  d="M218.2 90.2c56.2-56.2 147.4-56.2 203.6 0 2.3 2.3 4.5 4.7 6.7 7.1-16.4-6-34-9.3-52.5-9.3-83.9 0-152 68.1-152 152 0 17.8 3.1 35 8.7 50.9l-8.7 8.7-5.8-5.8c-56.2-56.2-56.2-147.4 0-203.6m237.6-34c-75-75-196.5-75-271.5 0s-75 196.5 0 271.5l22.7 22.9c9.4 9.4 24.6 9.4 33.9 0l37.1-37.1c7.3-7.3 9.1-18.4 4.6-27.6-6.8-13.8-10.6-29.4-10.6-45.9 0-57.4 46.6-104 104-104 38.7 0 72.5 21.1 90.5 52.6 5.6 9.8 17.3 14.4 28 11s17.7-13.8 16.7-25.1c-3.9-43.2-22.4-85.3-55.4-118.4zM121 311c-9.4-9.4-24.6-9.4-33.9 0L71 327c-9.4 9.4-9.4 24.6 0 33.9l7 7L7 439c-9.4 9.4-9.4 24.6 0 33.9l32 32c9.4 9.4 24.6 9.4 33.9 0l71-71 7 7c9.4 9.4 24.6 9.4 33.9 0l16-16c9.4-9.4 9.4-24.6 0-33.9l-24-24-32-32-24-24z"
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
                  d="M320 0C214 0 128 86 128 192c0 71 38.5 132.9 95.7 166.1 6.3 3.6 14.2 2.6 19.4-2.5l36-36c5.3-5.3 6.2-13.5 2.2-19.9-11-17.2-17.3-37.7-17.3-59.7 0-61.9 50.1-112 112-112 48.1 0 89.1 30.3 105 72.9 2.7 7.2 10.1 11.5 17.7 10.2s13.2-7.8 13.3-15.5V192C512 86 426 0 320 0M160 192c0-88.4 71.6-160 160-160 65.7 0 122.1 39.6 146.8 96.2C442 108.1 410.4 96 376 96c-79.5 0-144 64.5-144 144 0 23.6 5.7 45.9 15.8 65.6l-18.3 18.3c-42-28.8-69.5-77.2-69.5-131.9m-44.7 108.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l4.7 4.7-84.2 84.2C4.7 420.6 0 432.1 0 444s4.7 23.4 13.2 31.8l23 23C44.6 507.3 56.1 512 68 512s23.4-4.7 31.8-13.2l84.2-84.2 4.7 4.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-16-16-64-64zM35.8 434.8l84.2-84.2 41.4 41.4-84.2 84.2c-2.4 2.4-5.7 3.8-9.2 3.8s-6.7-1.4-9.2-3.8l-23-23c-2.4-2.4-3.8-5.7-3.8-9.2s1.4-6.7 3.8-9.2"
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
                  d="M320 0C214 0 128 86 128 192c0 68 35.3 127.7 88.6 161.8 3.2 2 7.3 1.6 10-1.1l37.9-37.9c2.6-2.6 3.1-6.6 1.2-9.7C254.5 286 248 263.8 248 240c0-70.7 57.3-128 128-128 55.5 0 102.7 35.3 120.5 84.6 1.3 3.6 5 5.8 8.9 5.2s6.6-3.9 6.7-7.8v-2C512 86 426 0 320 0M144 192c0-97.2 78.8-176 176-176 84.4 0 154.9 59.4 172 138.7C465.8 119.1 423.6 96 376 96c-79.5 0-144 64.5-144 144 0 24.5 6.1 47.6 16.9 67.8l-29 29C174 305 144 252 144 192m-26.3 106.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l10.3 10.4L10.8 425.9a36.937 36.937 0 0 0 0 52.2l23 23c7 7 16.4 10.9 26.2 10.9s19.2-3.9 26.1-10.8L192 395.3l10.3 10.3c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-16-16-64-64-16-16zM22.1 437.2 128 331.3l52.7 52.7L74.8 489.9c-3.9 3.9-9.3 6.1-14.8 6.1s-10.9-2.2-14.8-6.1l-23-23c-3.9-3.9-6.1-9.3-6.1-14.8s2.2-10.9 6.1-14.8z"
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
                  d="M128 181c0 38 11.9 74.7 33.7 105.2L137 311l16 16 32 32 16 16 23-23 24.5-24.5c4.5-4.5 5.9-11.3 3.7-17.3-7-18.9-12.2-37.9-12.2-58.6v-9.8c0-76.1 61.7-137.8 137.8-137.8 41.7 0 81 18.9 107.1 51.1 2.4 3 6.1 4.9 9.9 4.9 7.6 0 13.3-6.8 11.5-14.2C485.8 62.1 410.1 0 320 0h-11C209 0 128 81 128 181"
                />
                <path
                  className="aps-icon-foreground"
                  d="M129 303c-9.4-9.4-24.6-9.4-33.9 0L79 319c-9.4 9.4-9.4 24.6 0 33.9l7 7L7 439c-9.4 9.4-9.4 24.6 0 33.9l32 32c9.4 9.4 24.6 9.4 33.9 0l79-79 7 7c9.4 9.4 24.6 9.4 33.9 0l16-16c9.4-9.4 9.4-24.6 0-33.9l-24-24-32-32-24-24z"
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
