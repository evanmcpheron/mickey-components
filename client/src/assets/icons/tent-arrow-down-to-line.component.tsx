import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const TentArrowDownToLineIcon: React.FC<
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
                  d="M241.8 111.9c8.9 9.9 8.1 25-1.8 33.9l-80 72c-9.1 8.2-23 8.2-32.1 0l-80-72c-9.9-8.9-10.7-24-1.8-33.9s24-10.7 33.9-1.8l39.9 36L120 24c0-13.3 10.7-24 24-24s24 10.7 24 24v122.1l39.9-36c9.9-8.9 25-8.1 33.9 1.8m122.8 22.6c11.5-8.7 27.3-8.7 38.8 0l168 128c6.6 5 11 12.5 12.3 20.7l24 160 .7 4.7c17.5.2 31.6 14.4 31.6 32 0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h127.6l.7-4.7 24-160c1.2-8.2 5.6-15.7 12.3-20.7zM384 448h80l-61.3-122.5c-1.7-3.4-5.1-5.5-8.8-5.5-5.5 0-9.9 4.4-9.9 9.9z"
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
                  d="M241.8 111.9c8.9 9.9 8.1 25-1.8 33.9l-80 72c-9.1 8.2-23 8.2-32.1 0l-80-72c-9.9-8.9-10.7-24-1.8-33.9s24-10.7 33.9-1.8l39.9 36L120 24c0-13.3 10.7-24 24-24s24 10.7 24 24v122.1l39.9-36c9.9-8.9 25-8.1 33.9 1.8M369.3 133c8.6-6.7 20.7-6.7 29.4 0l166.5 128.7c10.7 8.3 18 20.1 20.7 33.3l33.9 169.3C631.2 466.1 640 476 640 488c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h124.3l33.8-169c2.6-13.2 10-25.1 20.7-33.3zm-172 331H360V200.9l-127.9 98.8c-1.5 1.2-2.6 2.9-3 4.8zm274.7 0h98.7l-31.9-159.6c-.4-1.9-1.4-3.6-3-4.8L408 200.9V336z"
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
                  d="M243.8 117.2c-5.9-6.5-16.1-7-22.6-1.1L160 171.8V16c0-8.8-7.2-16-16-16s-16 7.2-16 16v155.8l-61.2-55.6c-6.5-5.9-16.7-5.5-22.6 1.1s-5.5 16.7 1.1 22.6l88 80c6.1 5.5 15.4 5.5 21.5 0l88-80c6.5-5.9 7-16.1 1.1-22.6zM0 496c0 8.8 7.2 16 16 16h608c8.8 0 16-7.2 16-16s-7.2-16-16-16H16c-8.8 0-16 7.2-16 16m393.5-364.9c-5.7-4.2-13.4-4.2-19 0L201 259.3c-10.1 7.5-16.9 18.7-18.9 31.1l-22 139c-1.4 8.7 4.6 16.9 13.3 18.3s16.9-4.6 18.3-13.3l22-139.1c.7-4.1 2.9-7.9 6.3-10.4l148-109.2V432c0 8.8 7.2 16 16 16s16-7.2 16-16v-91.2l66.7 100c4.9 7.4 14.8 9.3 22.2 4.4s9.3-14.8 4.4-22.2L400 283.2V175.7l147.9 109.4c3.4 2.5 5.6 6.2 6.3 10.4l22 139.1c1.4 8.7 9.6 14.7 18.3 13.3s14.7-9.6 13.3-18.3l-22-139c-2-12.4-8.7-23.6-18.9-31.1z"
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
                  d="M245.9 122.6c-3-3.3-8-3.5-11.3-.5L152 197.8V8c0-4.4-3.6-8-8-8s-8 3.6-8 8v189.8l-82.6-75.7c-3.3-3-8.3-2.8-11.3.5s-2.8 8.3.5 11.3l96 88c3.1 2.8 7.8 2.8 10.8 0l96-88c3.3-3 3.5-8 .5-11.3M0 504c0 4.4 3.6 8 8 8h624c4.4 0 8-3.6 8-8s-3.6-8-8-8H8c-4.4 0-8 3.6-8 8m388.6-374.5c-2.8-2-6.5-2-9.2 0L198.8 257.4c-9.1 6.4-15.1 16.4-16.5 27.5L160.1 455c-.6 4.4 2.5 8.4 6.9 9s8.4-2.5 9-6.9L198.2 287c.9-6.6 4.5-12.6 9.9-16.5l168-119V456c0 4.4 3.6 8 8 8s8-3.6 8-8V316.1l89.2 144.1c2.3 3.8 7.3 4.9 11 2.6s4.9-7.3 2.6-11L392 285.7V151.5l168 119c5.5 3.9 9.1 9.8 9.9 16.5l22.2 170c.6 4.4 4.6 7.5 9 6.9s7.5-4.6 6.9-9l-22.3-170.1c-1.4-11.1-7.4-21-16.5-27.5z"
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
                  d="M403.4 134.5c-11.5-8.7-27.3-8.7-38.8 0l-168 128c-6.6 5-11 12.5-12.3 20.7l-24 160-.7 4.7H384v-118c0-5.5 4.4-9.9 9.9-9.9 3.7 0 7.2 2.1 8.8 5.5L464 448h144.4l-.7-4.7-24-160c-1.2-8.2-5.6-15.7-12.3-20.7l-168-128z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M240.1 145.8c9.9-8.9 10.7-24 1.8-33.9s-24-10.7-33.9-1.8l-39.9 36L168 24c0-13.3-10.7-24-24-24s-24 10.7-24 24v122.1l-39.9-36c-9.9-8.9-25-8.1-33.9 1.8s-8.1 25 1.8 33.9l80 72c9.1 8.2 23 8.2 32.1 0zM32 448c-17.7 0-32 14.3-32 32s14.3 32 32 32h576c17.7 0 32-14.3 32-32s-14.3-32-32-32z"
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
