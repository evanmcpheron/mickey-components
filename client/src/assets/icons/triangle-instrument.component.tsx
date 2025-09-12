import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const TriangleInstrumentIcon: React.FC<
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
                  d="M320 32c0-17.7-14.3-32-32-32s-32 14.3-32 32v37.9c-18 6.8-33.6 19.4-44.1 36.1L46.5 367.7C37 382.8 32 400.2 32 418c0 51.9 42.1 94 94 94h324c51.9 0 94-42.1 94-94 0-17.8-5-35.2-14.5-50.2L448.2 239l-46.4 46.4 73.6 116.5c3 4.8 4.6 10.4 4.6 16 0 16.6-13.5 30-30 30H126c-16.6 0-30-13.5-30-30 0-5.7 1.6-11.2 4.6-16L266 140.1c4.8-7.6 13.1-12.1 22-12.1s17.3 4.6 22 12.1l48 75.9-51.2 51.2c-5.9-2.1-12.2-3.2-18.8-3.2-30.9 0-56 25.1-56 56s25.1 56 56 56 56-25.1 56-56c0-6.6-1.1-12.9-3.2-18.8l43.5-43.5 46.4-46.4L537 105c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-98.6 98.6-40.4-63.7C353.6 89.2 338 76.7 320 69.9z"
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
                  d="M312 24c0-13.3-10.7-24-24-24s-24 10.7-24 24v43.3c-21.3 5.9-40 19.5-52.1 38.7L46.5 367.7C37 382.8 32 400.2 32 418c0 51.9 42.1 94 94 94h324c51.9 0 94-42.1 94-94 0-17.8-5-35.2-14.5-50.2L448.2 239l-34.8 34.8 75.5 119.5c4.6 7.4 7.1 15.9 7.1 24.6 0 25.4-20.6 46-46 46H126c-25.4 0-46-20.6-46-46 0-8.7 2.5-17.2 7.1-24.6l165.3-261.7c7.7-12.2 21.1-19.6 35.6-19.6s27.9 7.4 35.6 19.6l46 72.9-62.8 62.8c-5.9-2.1-12.2-3.2-18.8-3.2-30.9 0-56 25.1-56 56s25.1 56 56 56 56-25.1 56-56c0-6.6-1.1-12.9-3.2-18.8l55.1-55.1 34.8-34.8L537 105c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-98.6 98.6-40.4-63.7C352 86.8 333.3 73.2 312 67.3z"
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
                  d="M304 16c0-8.8-7.2-16-16-16s-16 7.2-16 16v49.4c-24.6 4.4-46.5 19-60.1 40.5L46.5 367.7C37 382.8 32 400.2 32 418c0 51.9 42.1 94 94 94h324c51.9 0 94-42.1 94-94 0-17.8-5-35.2-14.5-50.2l-85.7-135.7-23.2 23.2 81.8 129.5c6.3 9.9 9.6 21.4 9.6 33.1 0 34.3-27.8 62-62 62H126c-34.3 0-62-27.8-62-62 0-11.7 3.3-23.2 9.6-33.1l165.3-261.7C249.5 106.2 268.1 96 288 96s38.5 10.2 49.1 27.1l48.5 76.8-65.1 65.1c-9.5-5.6-20.6-8.9-32.5-8.9-35.3 0-64 28.7-64 64s28.7 64 64 64 64-28.7 64-64c0-11.9-3.2-23-8.9-32.5l59.9-59.9 23.2-23.2 113-113c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L408.8 176.6 364.1 106c-13.6-21.6-35.5-36.1-60.1-40.6zm16 304a32 32 0 1 1-64 0 32 32 0 1 1 64 0"
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
                  d="M296 8c0-4.4-3.6-8-8-8s-8 3.6-8 8v56.4c-27.8 2.5-53.1 17.8-68.1 41.6L46.5 367.7C37 382.8 32 400.2 32 418c0 51.9 42.1 94 94 94h324c51.9 0 94-42.1 94-94 0-17.8-5-35.2-14.5-50.2l-90.1-142.6-11.6 11.6 88.1 139.5c7.9 12.5 12.1 26.9 12.1 41.7 0 43.1-34.9 78-78 78H126c-43.1 0-78-34.9-78-78 0-14.8 4.2-29.2 12.1-41.7l165.3-261.8C239 93 262.6 80 288 80s49 13 62.6 34.5l50.9 80.6-74.3 74.3C316.4 261 302.8 256 288 256c-35.3 0-64 28.7-64 64s28.7 64 64 64 64-28.7 64-64c0-14.8-5-28.4-13.4-39.2l71.7-71.8 11.6-11.6L541.7 77.7c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L413.1 183.5l-49-77.6c-15-23.8-40.3-39.1-68.1-41.5zm40 312a48 48 0 1 1-96 0 48 48 0 1 1 96 0"
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
                  d="M320 32c0-17.7-14.3-32-32-32s-32 14.3-32 32v37.9c-18 6.8-33.6 19.4-44.1 36.1L46.5 367.7C37 382.8 32 400.2 32 418c0 51.9 42.1 94 94 94h324c51.9 0 94-42.1 94-94 0-17.8-5-35.2-14.5-50.2l-98.8-156.5-46.4 46.4 91.1 144.2c3 4.8 4.6 10.4 4.6 16 0 16.6-13.5 30-30 30H126c-16.6 0-30-13.5-30-30 0-5.7 1.6-11.2 4.6-16L266 140.1c4.8-7.6 13.1-12.1 22-12.1s17.3 4.6 22 12.1l48 75.9 46.4-46.4-40.3-63.6C353.6 89.2 338 76.7 320 69.9z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M537 105c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L306.8 267.2c-5.9-2.1-12.2-3.2-18.8-3.2-30.9 0-56 25.1-56 56s25.1 56 56 56 56-25.1 56-56c0-6.6-1.1-12.9-3.2-18.8z"
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
