import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SwordIcon: React.FC<
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
                  d="M511.8 18.6c.8-5.1-.8-10.3-4.5-13.9S498.5-.6 493.4.2l-75.8 12.6c-16.4 2.7-31.6 10.6-43.4 22.3L166.6 242.7l102.7 102.7 207.5-207.6c11.8-11.8 19.6-27 22.3-43.4l12.6-75.8zM84.7 228.7l-16 16c-5.4 5.4-6.2 13.8-2 20.2l53.1 79.6c2.1 3.2 1.7 7.4-1 10.1l-39.6 39.6c-2.1 2.1-5.3 2.9-8.2 1.9l-33.9-11.3c-5.7-1.9-12.1-.4-16.4 3.9l-16 16c-6.2 6.2-6.2 16.4 0 22.6l80 80c6.2 6.2 16.4 6.2 22.6 0l16-16c4.3-4.3 5.8-10.6 3.9-16.4L115.9 441c-1-2.9-.2-6 1.9-8.2l39.6-39.6c2.7-2.7 6.9-3.1 10.1-1l79.6 53.1c6.3 4.2 14.8 3.4 20.2-2l16-16c6.2-6.2 6.2-16.4 0-22.6l-176-176c-6.2-6.2-16.4-6.2-22.6 0"
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
                  d="M507.3 4.7C503.7 1 498.5-.6 493.4.2l-75.8 12.6c-16.4 2.7-31.6 10.6-43.4 22.3L166.6 242.7l33.9 33.9L408.1 69.1c4.7-4.7 10.8-7.8 17.4-8.9l31.6-5.3-5.3 31.6c-1.1 6.6-4.2 12.7-8.9 17.4L235.3 311.4l33.9 33.9 207.6-207.5c11.8-11.8 19.6-27 22.3-43.4l12.6-75.8c.8-5.1-.8-10.3-4.5-13.9zm-422.6 224-16 16c-5.4 5.4-6.2 13.8-2 20.2l53.1 79.6c2.1 3.2 1.7 7.4-1 10.1l-39.6 39.6c-2.1 2.1-5.3 2.9-8.2 1.9l-33.9-11.3c-5.7-1.9-12.1-.4-16.4 3.9l-16 16c-6.2 6.2-6.2 16.4 0 22.6l80 80c6.2 6.2 16.4 6.2 22.6 0l16-16c4.3-4.3 5.8-10.6 3.9-16.4L115.9 441c-1-2.9-.2-6 1.9-8.2l39.6-39.6c2.7-2.7 6.9-3.1 10.1-1l79.6 53.1c6.3 4.2 14.8 3.4 20.2-2l16-16c6.2-6.2 6.2-16.4 0-22.6l-176-176c-6.2-6.2-16.4-6.2-22.6 0"
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
                  d="M507.3 4.7C503.7 1 498.5-.6 493.4.2l-75.8 12.6c-16.4 2.7-31.6 10.6-43.4 22.3L174.6 234.7l22.6 22.6L396.8 57.8c7.1-7.1 16.2-11.8 26.1-13.4l53.7-8.9-8.9 53.7c-1.6 9.9-6.3 19-13.4 26L254.6 314.7l22.6 22.6 199.6-199.5c11.8-11.8 19.6-27 22.3-43.4l12.6-75.8c.8-5.1-.8-10.3-4.5-13.9zm-392 216c-6.2-6.2-16.4-6.2-22.6 0l-32 32c-5.3 5.3-6.2 13.6-2.2 19.9l49.1 77.2-32.9 32.8-31.6-6.3c-5.2-1-10.7.6-14.5 4.4l-24 24c-6.2 6.2-6.2 16.4 0 22.6l80 80c6.2 6.2 16.4 6.2 22.6 0l24-24c3.8-3.8 5.4-9.2 4.4-14.5l-6.3-31.6 32.9-32.9 77.2 49.1c6.3 4 14.6 3.1 19.9-2.2l32-32c6.2-6.2 6.2-16.4 0-22.6l-176-176zm26.2 122.7-49.1-77.2 11.6-11.6L257.4 408l-11.6 11.6-77.2-49.1c-6.3-4-14.6-3.1-19.9 2.2l-48 48c-3.8 3.8-5.4 9.2-4.4 14.5l6.3 31.6-6.6 6.6L38.6 416l6.6-6.6 31.6 6.3c5.2 1 10.7-.6 14.5-4.4l48-48c5.3-5.3 6.2-13.6 2.2-19.9"
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
                  d="M509.7 2.3c1.8 1.8 2.7 4.4 2.2 7l-12.6 75.8c-2.5 14.8-9.5 28.5-20.1 39.1L271.6 331.7l-11.3-11.3 207.5-207.6c8.3-8.3 13.7-18.9 15.6-30.4l10.8-64.7-64.7 10.8c-11.5 1.9-22.1 7.4-30.4 15.6L191.6 251.7l-11.3-11.3L387.8 32.8c10.6-10.6 24.3-17.6 39.1-20.1L502.7.1c2.6-.4 5.1.4 7 2.2M121 237.7 274.3 391c9.4 9.4 9.4 24.6 0 33.9l-11.9 11.9c-7.8 7.8-19.9 9.3-29.3 3.6L169.2 402 128 443.3v30.1c0 6.4-2.5 12.5-7 17l-8 8c-9.4 9.4-24.6 9.4-33.9 0L13.7 433c-9.4-9.4-9.4-24.6 0-33.9l8-8c4.5-4.5 10.6-7 17-7h30l41.2-41.2-38.3-64.1c-5.7-9.4-4.2-21.5 3.6-29.3L87 237.7c9.4-9.4 24.6-9.4 33.9 0zM98.3 249l-11.8 11.8c-2.6 2.6-3.1 6.6-1.2 9.8l41.6 69.3c1.9 3.1 1.4 7.2-1.2 9.8l-48 48c-1.5 1.5-3.5 2.3-5.7 2.3H38.6c-2.1 0-4.2.8-5.7 2.3l-8 8c-3.1 3.1-3.1 8.2 0 11.3L90.3 487c3.1 3.1 8.2 3.1 11.3 0l8-8c1.5-1.5 2.3-3.5 2.3-5.7V440c0-2.1.8-4.2 2.3-5.7l48-48c2.6-2.6 6.6-3.1 9.8-1.2l69.3 41.6c3.1 1.9 7.2 1.4 9.8-1.2l11.9-11.8c3.1-3.1 3.1-8.2 0-11.3L109.7 249c-3.1-3.1-8.2-3.1-11.3 0z"
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
                  d="M507.3 4.7c3.7 3.7 5.3 8.8 4.5 13.9l-12.6 75.8c-2.7 16.4-10.6 31.6-22.3 43.4L246.6 368 144 265.4 374.2 35.2c11.8-11.8 27-19.6 43.4-22.3L493.4.2c5.1-.8 10.3.8 13.9 4.5"
                />
                <path
                  className="aps-icon-foreground"
                  d="M107.3 228.7c-6.2-6.2-16.4-6.2-22.6 0l-16 16c-5.4 5.4-6.2 13.8-2 20.2l53.1 79.6c2.1 3.2 1.7 7.4-1 10.1l-39.6 39.6c-2.1 2.1-5.3 2.9-8.2 1.9l-33.9-11.3c-5.7-1.9-12.1-.4-16.4 3.9l-16 16c-6.2 6.2-6.2 16.4 0 22.6l80 80c6.2 6.2 16.4 6.2 22.6 0l16-16c4.3-4.3 5.8-10.6 3.9-16.4L115.9 441c-1-2.9-.2-6 1.9-8.2l39.6-39.6c2.7-2.7 6.9-3.1 10.1-1l79.6 53.1c6.3 4.2 14.8 3.4 20.2-2l16-16c6.2-6.2 6.2-16.4 0-22.6z"
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
