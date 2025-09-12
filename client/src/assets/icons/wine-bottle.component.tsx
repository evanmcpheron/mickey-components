import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const WineBottleIcon: React.FC<
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
                  d="M393.4 9.4c12.5-12.5 32.8-12.5 45.3 0l64 64c12.5 12.5 12.5 32.8 0 45.3-11.8 11.8-30.7 12.5-43.2 1.9l-9.5 9.5-48.8 48.8c-9.2 9.2-11.5 22.9-8.6 35.6 9.4 40.9-1.9 85.6-33.8 117.5L197.3 493.3c-25 25-65.5 25-90.5 0l-88-88c-25-25-25-65.5 0-90.5l161.4-161.5c31.9-31.9 76.6-43.1 117.5-33.8 12.6 2.9 26.4.5 35.5-8.6L382 62.1l9.5-9.5c-10.6-12.6-10-31.4 1.9-43.2M99.3 347.3l65.4 65.4c6.2 6.2 16.4 6.2 22.6 0l97.4-97.4c6.2-6.2 6.2-16.4 0-22.6l-65.4-65.4c-6.2-6.2-16.4-6.2-22.6 0l-97.4 97.4c-6.2 6.2-6.2 16.4 0 22.6"
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
                  d="M391 7c9.4-9.4 24.6-9.4 33.9 0l80 80c9.4 9.4 9.4 24.6 0 33.9-7.5 7.5-18.8 9-27.9 4.4l-72.5 72.5c-8 8-10.9 19.6-9.6 30.9 4 36.7-8.1 74.8-36.2 103L197.3 493.3c-25 25-65.5 25-90.5 0l-88-88c-25-25-25-65.5 0-90.5l33.9 33.9c-6.2 6.2-6.2 16.4 0 22.6l88 88c6.2 6.2 16.4 6.2 22.6 0l36-36L88.7 312.7l-36 36-34-34 161.5-161.4c28.1-28.1 66.3-40.2 103-36.2 11.3 1.2 22.9-1.6 30.9-9.6L386.6 35c-4.6-9-3.1-20.3 4.4-27.9zM200.7 200.7l110.6 110.6 13.5-13.5c17.4-17.4 24.9-41 22.5-63.8-2.4-21.8 2.6-49.3 23.4-70l70.7-70.7-22.7-22.7-70.7 70.7c-20.8 20.8-48.2 25.8-70 23.4-22.9-2.5-46.4 5-63.8 22.4l-13.5 13.5z"
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
                  d="M404.7 4.7c6.2-6.2 16.4-6.2 22.6 0l80 80c6.2 6.2 6.2 16.4 0 22.6-4.4 4.4-10.6 5.7-16.1 4l-86.6 86.6c-8 8-10.9 19.6-9.6 30.9 4 36.7-8.1 74.8-36.2 103L197.3 493.3c-25 25-65.5 25-90.5 0l-88-88c-25-25-25-65.5 0-90.5l22.6 22.6c-12.5 12.5-12.5 32.8 0 45.3l88 88c12.5 12.5 32.8 12.5 45.3 0l24.7-24.7L66.1 312.7l-24.7 24.7-22.7-22.7 161.5-161.4c28.1-28.1 66.3-40.2 103-36.2 11.3 1.2 22.9-1.6 30.9-9.6l86.6-86.6c-1.7-5.5-.4-11.7 4-16.1zm-316 285.4 133.2 133.2 89.4-89.4-133.2-133.2zm112-112 133.2 133.2 2.2-2.2c21-21 30-49.4 27-76.9-2-18.3 2.3-40.5 18.8-57l13.3-13.3-45.3-45.3-13.2 13.4c-16.5 16.5-38.7 20.8-57 18.8-27.5-3-55.9 6-76.9 27l-2.2 2.2zm172-84 45.3 45.3L467.4 90l-45.3-45.3z"
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
                  d="M402.3 2.3c3.1-3.1 8.2-3.1 11.3 0l96 96c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0l-14-14-83.1 83.1c-9.2 9.2-11.5 22.9-8.6 35.6 9.4 40.9-1.9 85.6-33.8 117.5L197.3 493.3c-25 25-65.5 25-90.5 0l-88-88c-25-25-25-65.5 0-90.5l11.3 11.3c-18.7 18.7-18.7 49.1 0 67.9l88 88c18.7 18.7 49.1 18.7 67.9 0l30.3-30.3-155.9-156-30.3 30.4-11.4-11.4 161.5-161.4c31.9-31.9 76.6-43.1 117.5-33.8 12.6 2.9 26.4.5 35.5-8.6l83.1-83.1-14-14.1c-3.1-3.1-3.1-8.2 0-11.3zM71.7 284.4l155.9 155.9 100.7-100.7-155.9-155.9zm112-112 155.9 155.9 7.8-7.8c27.8-27.8 37.7-66.8 29.5-102.6-3.8-16.5-1.1-36.4 12.9-50.4l11.2-11.2-45.3-45.3-11.1 11.1c-14.1 14.1-34 16.7-50.4 12.9-35.8-8.2-74.8 1.7-102.6 29.5l-7.8 7.8zM367 99.7l45.3 45.3L473 84.3 427.7 39z"
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
                  d="m417.9 161.9-67.8-67.8 32-32 9.5-9.5c-10.6-12.6-10-31.4 1.9-43.2 12.5-12.5 32.8-12.5 45.3 0l64 64c12.5 12.5 12.5 32.8 0 45.3-11.8 11.8-30.7 12.5-43.2 1.9l-9.5 9.5-32 32zM54.7 278.7l125.5-125.4 2.5-2.5 82.6 82.6c12.5 12.5 12.5 32.8 0 45.3l-82.7 82.7c-12.5 12.5-32.8 12.5-45.3 0z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M350.1 94.1 418 162l-16.8 16.8c-9.2 9.2-11.5 22.9-8.6 35.6 9.4 40.9-1.9 85.6-33.8 117.5L197.3 493.3c-25 25-65.5 25-90.5 0l-88-88c-25-25-25-65.5 0-90.5l36-36 82.6 82.6c12.5 12.5 32.8 12.5 45.3 0l82.7-82.7c12.5-12.5 12.5-32.8 0-45.3l-82.6-82.6c31.7-30 75.1-40.4 115-31.3 12.6 2.9 26.4.5 35.5-8.6z"
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
