import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const IciclesIcon: React.FC<
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
                  d="M75.8 304.8 1 35.7c-.7-2.5-1-5-1-7.5C0 12.6 12.6 0 28.2 0h454.2C498.8 0 512 13.2 512 29.6c0 1.6-.1 3.3-.4 4.9l-77 461.6c-1.5 9.2-9.5 15.9-18.8 15.9-9.2 0-17.1-6.6-18.7-15.6L336 160l-28.8 143.9c-1.9 9.3-10.1 16.1-19.6 16.1-9.2 0-17.2-6.2-19.4-15.1L240 192l-29.4 176.2c-1.5 9.1-9.4 15.8-18.6 15.8s-17.1-6.7-18.6-15.8L144 192l-28.1 112.3c-2.3 9.2-10.6 15.7-20.1 15.7-9.3 0-17.5-6.2-20-15.2"
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
                  d="M5.2 9.1C9.7 3.4 16.7 0 24 0h464c6.9 0 13.5 3 18.1 8.2s6.6 12.2 5.7 19L448.9 483c-2.3 16.6-16.5 29-33.2 29-15.8 0-29.4-11-32.8-26.4l-50.3-229.1-11.2 38.2c-4.4 15-18.1 25.2-33.7 25.2-14.5 0-27.6-9-32.8-22.5l-9.4-24.6-20.2 84.9c-3.8 15.4-17.5 26.3-33.3 26.3s-29.5-10.9-33.2-26.2l-20.2-84.9-9.5 24.8C123.9 311.1 111 320 96.6 320c-16.2 0-30.2-11.1-33.9-26.8L.6 29.5C-1 22.4.6 14.8 5.2 9.1M54.3 48l45.3 192.6 22-57.2c3.8-9.8 13.5-16 24-15.3s19.3 8.2 21.7 18.4L192 290l24.7-103.5c2.4-10.2 11.3-17.7 21.7-18.4s20.2 5.5 24 15.3l23.6 61.4 27-91.6c3.1-10.5 12.9-17.6 23.9-17.2s20.3 8.1 22.6 18.8l53 241.4 48-348.2z"
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
                  d="M0 36.6C0 16.4 16.4 0 36.6 0h437.5C495 0 512 17 512 37.9c0 2.4-.2 4.8-.7 7.2L423.7 499c-1.5 7.5-8.1 13-15.8 13s-14.3-5.5-15.7-13.1l-58.5-312-30.2 121c-1.8 7-8.1 12-15.3 12.1s-13.7-4.7-15.6-11.7l-22-79.4-34.9 174.2c-1.5 7.5-8.1 12.9-15.7 12.9s-14.2-5.4-15.7-12.9l-36.2-180.9-28.9 86.8c-2.2 6.6-8.3 11-15.2 11s-13-4.4-15.2-10.9L1.9 48.2C.6 44.5 0 40.6 0 36.6M36.6 32C34 32 32 34.1 32 36.6c0 .5.1 1 .2 1.5L104 253.4l32.8-98.5c2.3-6.9 8.9-11.4 16.2-10.9s13.3 5.7 14.7 12.8L200 318.4l32.3-161.6c1.5-7.3 7.7-12.6 15.1-12.9s14 4.6 16 11.7l23.8 85.6L320.5 108c1.8-7.3 8.5-12.3 16-12.1s13.9 5.7 15.2 13l56.5 301.3L479.9 39c.1-.4.1-.7.1-1.1 0-3.3-2.6-5.9-5.9-5.9z"
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
                  d="M0 28.8C0 12.9 12.9 0 28.8 0H482c16.6 0 30 13.4 30 30 0 1.8-.2 3.7-.5 5.5l-87.6 470c-.7 3.8-4 6.5-7.9 6.5s-7.2-2.7-7.9-6.5l-65.8-351.1-46.6 159.8c-1 3.4-4 5.7-7.5 5.8s-6.6-2.1-7.7-5.5l-39-117-41.7 180.3c-.8 3.6-4.1 6.2-7.8 6.2s-7-2.6-7.8-6.2l-41.6-180.3-39 117c-1.1 3.3-4.2 5.5-7.7 5.5s-6.5-2.3-7.6-5.6l-87-277C.4 34.6 0 31.7 0 28.8M28.8 16C21.7 16 16 21.7 16 28.8c0 1.3.2 2.6.6 3.8L96.2 286l40.2-120.6c1.1-3.4 4.4-5.6 8-5.5s6.6 2.7 7.4 6.2L192 340.4l40.2-174.2c.8-3.5 3.8-6 7.4-6.2s6.8 2.1 8 5.5l39.9 119.7 48.8-167.4c1-3.6 4.4-5.9 8.1-5.8s6.8 2.9 7.5 6.5l64.1 342 79.8-428c.2-.8.2-1.7.2-2.6 0-7.7-6.3-14-14-14H28.8z"
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
                  d="m336 160 61.2 336.4c1.6 9 9.5 15.6 18.7 15.6 9.3 0 17.2-6.7 18.8-15.9l76.9-461.7c.3-1.6.4-3.2.4-4.9C512 13.2 498.8 0 482.4 0H342.1c-1.6 0-3.2.1-4.8.4 13.8 2.3 24.3 14.3 24.3 28.7q0 2.85-.6 5.7z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M75.8 304.8 1 35.7c-.7-2.5-1-5-1-7.5C0 12.6 12.6 0 28.2 0h304.3c16.1 0 29.1 13 29.1 29.1q0 2.85-.6 5.7L336 160l-28.8 143.9c-1.9 9.3-10.1 16.1-19.6 16.1-9.2 0-17.2-6.2-19.4-15.1L240 192l-29.4 176.2c-1.5 9.1-9.4 15.8-18.6 15.8s-17.1-6.7-18.6-15.8L144 192l-28.1 112.3c-2.3 9.2-10.6 15.7-20.1 15.7-9.3 0-17.5-6.2-20-15.2"
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
