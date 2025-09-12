import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const StarShootingIcon: React.FC<
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
                  d="m313 41-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L279 7c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM170.4 157.4c8.8-17.9 34.3-17.9 43.1 0l46.3 94 103.5 15.1c19.7 2.9 27.5 27 13.3 40.9l-74.9 73.2 17.7 103.3c3.4 19.6-17.2 34.6-34.8 25.3L192 460.4l-92.7 48.8c-17.6 9.3-38.2-5.7-34.8-25.3l17.7-103.3-75-73.2C-7 293.5.9 269.3 20.5 266.5L124 251.4l46.3-94zM505 199c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0m0-158L361 185c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L471 7c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
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
                  d="m313 41-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L279 7c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM129.5 388.7 120 444l49.5-26.1c14-7.4 30.7-7.4 44.7 0l49.6 26.1-9.5-55.4c-2.7-15.6 2.5-31.4 13.8-42.4l40.2-39.2-55.5-8.1c-15.6-2.3-29.2-12.1-36.1-26.3l-24.8-50.3-24.8 50.3c-7 14.2-20.5 24-36.1 26.3L75.5 307l40.2 39.2c11.3 11 16.4 26.9 13.8 42.4zm-5.4-137.3 46.3-94c8.8-17.9 34.3-17.9 43.1 0l46.3 94 103.5 15.1c19.7 2.9 27.5 27 13.3 40.9l-74.9 73.2 17.7 103.3c3.4 19.6-17.2 34.6-34.8 25.3L192 460.4l-92.7 48.8c-17.6 9.3-38.2-5.7-34.8-25.3l17.7-103.3-75-73.2C-7 293.5.9 269.3 20.5 266.5L124 251.4zM505 199c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0m0-158L361 185c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L471 7c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
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
                  d="M315.3 27.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-64 64c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0zm192 0c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-160 160c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0zm0 192c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-64 64c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0zm-378.6 63.8c10.4-1.5 19.4-8.1 24.1-17.5l39.1-79.4 39.1 79.3c4.7 9.5 13.7 16 24.1 17.5l87.5 12.7-63.4 61.9c-7.5 7.3-11 17.9-9.2 28.3l15 87.3-78.2-41.2c-9.3-4.9-20.5-4.9-29.8 0l-78.2 41.3 15-87.3c1.8-10.4-1.7-20.9-9.2-28.3l-63.4-61.9zm84.7-125.6c-8.8-17.9-34.3-17.9-43.1 0l-46.3 94-103.5 15C.9 269.3-7 293.5 7.2 307.4l74.9 73.2-17.6 103.3c-3.4 19.6 17.2 34.6 34.8 25.3l92.6-48.8 92.6 48.8c17.6 9.3 38.2-5.7 34.8-25.3l-17.7-103.3 74.9-73.2c14.2-13.9 6.4-38.1-13.3-40.9l-103.5-15.1-46.3-94z"
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
                  d="M317.7 13.7c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0l-80 80c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0zm192 0c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0l-176 176c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0zm0 192c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0l-80 80c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0zm-383.3 61.5c5.2-.8 9.7-4 12-8.8l46.3-94c2.9-6 11.4-6 14.4 0l46.3 94c2.3 4.7 6.8 8 12 8.8L361 282.3c6.6 1 9.2 9 4.4 13.6l-74.9 73.2c-3.8 3.7-5.5 9-4.6 14.1l17.7 103.3c1.1 6.5-5.7 11.5-11.6 8.4l-92.6-48.8c-4.7-2.5-10.2-2.5-14.9 0L91.9 495c-5.9 3.1-12.7-1.9-11.6-8.4L98 383.3c.9-5.2-.8-10.5-4.6-14.1l-75-73.3c-4.7-4.6-2.1-12.7 4.4-13.6l103.5-15.1zm-105.8-.8C.9 269.3-7 293.5 7.2 307.4l74.9 73.2-17.6 103.3c-3.4 19.6 17.2 34.6 34.8 25.3l92.6-48.8 92.6 48.8c17.6 9.3 38.2-5.7 34.8-25.3l-17.7-103.3 74.9-73.2c14.2-13.9 6.4-38.1-13.3-40.9l-103.5-15.1-46.3-94c-8.8-17.9-34.3-17.9-43.1 0l-46.3 94-103.5 15.1z"
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
                  d="M313 7c-9.4-9.4-24.6-9.4-33.9 0L231 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l48-48c9.4-9.4 9.4-24.6 0-33.9zm192 192c-9.4-9.4-24.6-9.4-33.9 0l-48 48c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l48-48c9.4-9.4 9.4-24.6 0-33.9m0-158c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L327 151c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M213.4 157.4c-8.8-17.9-34.3-17.9-43.1 0l-46.3 94-103.5 15.1C.9 269.3-7 293.5 7.2 307.4l74.9 73.2-17.6 103.3c-3.4 19.6 17.2 34.6 34.8 25.3l92.6-48.8 92.6 48.8c17.6 9.3 38.2-5.7 34.8-25.3l-17.7-103.3 74.9-73.2c14.2-13.9 6.4-38.1-13.3-40.9l-103.5-15.1z"
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
