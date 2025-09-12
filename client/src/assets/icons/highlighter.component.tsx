import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const HighlighterIcon: React.FC<
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
                  d="m315 315 158.4-215-29.3-29.4L229 229zm-187 5v-71.7c0-15.3 7.2-29.6 19.5-38.6L420.6 8.4C428 2.9 437 0 446.2 0c11.4 0 22.4 4.5 30.5 12.6l54.8 54.8c8.1 8.1 12.6 19 12.6 30.5 0 9.2-2.9 18.2-8.4 25.6l-201.3 273c-9 12.3-23.4 19.5-38.6 19.5H224l-25.4 25.4c-12.5 12.5-32.8 12.5-45.3 0l-50.7-50.7c-12.5-12.5-12.5-32.8 0-45.3zM7 466.3l63-63 70.6 70.6-31 31c-4.5 4.5-10.6 7-17 7H24c-13.3 0-24-10.7-24-24v-4.7c0-6.4 2.5-12.5 7-17z"
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
                  d="M184 296.6v-48l22.5-16.2 113 113-16.1 22.6h-48c-12.7 0-24.9 5.1-33.9 14.1l-38.1 38.1-51.5-51.5 38.1-38.1c9-9 14.1-21.2 14.1-33.9zM502.8 90.2 347.9 306 246 204.1 461.8 49.2c1.1-.8 2.4-1.2 3.7-1.2 1.7 0 3.3.7 4.5 1.9L502.1 82c1.2 1.2 1.9 2.8 1.9 4.5 0 1.3-.4 2.6-1.2 3.7M255.4 416h48c15.5 0 30-7.4 39-20l199.4-277.8c6.6-9.2 10.2-20.3 10.2-31.7 0-14.4-5.7-28.2-15.9-38.4l-32.2-32.2C493.7 5.7 479.9 0 465.5 0c-11.4 0-22.5 3.6-31.7 10.2L156 209.6c-12.6 9-20 23.5-20 39v48l-43.7 43.7c-10.7 10.7-14.1 26-10.1 39.5L9.4 452.7c-6 6-9.4 14.1-9.4 22.6v4.7c0 17.7 14.3 32 32 32h84.7c8.5 0 16.6-3.4 22.6-9.4l32.8-32.8c13.6 4 28.8.6 39.5-10.1zm-120.7 23.3L110.1 464H65.9l46.7-46.7 22.1 22.1z"
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
                  d="M176 296.6v-48c0-5.2 2.5-10 6.7-13l27-19.4 134 134.2-19.4 27c-3 4.2-7.8 6.7-13 6.7h-48c-8.5 0-16.6 3.4-22.6 9.4L197 437.1c-3.1 3.1-8.2 3.1-11.3 0l-62.8-62.8c-3.1-3.1-3.1-8.2 0-11.3l43.7-43.7c6-6 9.4-14.1 9.4-22.6zM523.8 99.5 362.6 324 236 197.4 460.5 36.2c3.8-2.7 8.4-4.2 13-4.2 5.9 0 11.6 2.4 15.8 6.5l32.2 32.2c4.2 4.2 6.5 9.9 6.5 15.8 0 4.7-1.5 9.2-4.2 13M263.4 416h48c15.5 0 30-7.4 39-20l199.4-277.8c6.6-9.2 10.2-20.3 10.2-31.7 0-14.4-5.7-28.2-15.9-38.4l-32.2-32.2C501.7 5.7 487.9 0 473.5 0c-11.4 0-22.5 3.6-31.7 10.2L164 209.6c-12.6 9-20 23.5-20 39v48l-43.7 43.7a39.88 39.88 0 0 0-9.3 42l-84 84c-4.5 4.5-7 10.6-7 17v4.7c0 13.3 10.7 24 24 24h100.7c6.4 0 12.5-2.5 17-7l36-36c14.2 5.2 30.7 2.1 42-9.3zm-111 33-31 31H38.6l72.4-72.4z"
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
                  d="M144 312.6v-64c0-10.3 5-20 13.3-26l31.4-22.6 155.2 155.2-22.6 31.4c-6 8.4-15.7 13.3-26 13.3h-64c-4.2 0-8.3 1.7-11.3 4.7l-35.7 35.7c-9.4 9.4-24.6 9.4-33.9 0l-46.8-46.8c-9.4-9.4-9.4-24.6 0-33.9l35.7-35.7c3-3 4.7-7.1 4.7-11.3m376.8-203.7L353.4 342.1 201.9 190.6 435.1 23.2c6.5-4.7 14.3-7.2 22.4-7.2 10.2 0 19.9 4 27.1 11.2l32.2 32.2C524 66.6 528 76.3 528 86.5c0 8-2.5 15.8-7.2 22.4M231.4 416h64c15.5 0 30-7.4 39-20l199.4-277.8c6.6-9.2 10.2-20.3 10.2-31.7 0-14.4-5.7-28.2-15.9-38.4l-32.2-32.2C485.7 5.7 471.9 0 457.5 0c-11.4 0-22.5 3.6-31.7 10.2L148 209.6c-12.6 9-20 23.5-20 39v64l-35.7 35.7c-15.6 15.6-15.6 41 0 56.6l46.8 46.8c15.6 15.6 40.9 15.6 56.6 0zm-172 1.3L7.3 469.4C2.6 474.1 0 480.4 0 487c0 13.8 11.2 25 25 25h57.7c10.6 0 20.8-4.2 28.3-11.7l15.7-15.7c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L99.7 489c-4.5 4.5-10.6 7-17 7H25c-5 0-9-4-9-9 0-2.4.9-4.7 2.6-6.3l52.1-52.1c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0"
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
                  d="M360.7 360.7 183.3 183.3l-35.7 26.3c-12.3 9-19.5 23.4-19.5 38.6V320l-57.5 57.4c-12.5 12.5-12.5 32.8 0 45.3l50.7 50.7c12.5 12.5 32.8 12.5 45.3 0L224 416h71.7c15.3 0 29.6-7.2 38.6-19.5l26.3-35.7z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M360.7 360.7 183.3 183.3 420.6 8.4C428 2.9 437 0 446.2 0c11.4 0 22.4 4.5 30.5 12.6l54.8 54.8c8.1 8.1 12.6 19 12.6 30.5 0 9.2-2.9 18.2-8.4 25.6zM7 466.3l56-56c1.5 4.5 4.1 8.7 7.6 12.2l50.7 50.7c3.6 3.6 7.8 6.1 12.2 7.6l-24 24c-4.5 4.5-10.6 7-17 7H24c-13.3 0-24-10.7-24-24v-4.7c0-6.4 2.5-12.5 7-17z"
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
