import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ArrowsRepeatIcon: React.FC<
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
                  d="M1.6 213.9c-5.6 16.8 3.5 34.9 20.2 40.5s34.9-3.5 40.5-20.2c14.8-44.3 56.2-74.2 102.9-74.2h173.5l-41.4 41.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.7 96H165.2C91 96 25.1 143.5 1.6 213.9m508.7 84.2c5.6-16.8-3.5-34.9-20.2-40.5s-34.9 3.5-40.5 20.2c-14.7 44.3-56.1 74.2-102.8 74.2H173.3l41.4-41.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L173.3 416h173.5c74.2 0 140.1-47.5 163.6-117.9z"
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
                  d="M0 254.5c-.8 13.2 9.2 24.6 22.5 25.5s24.6-9.2 25.5-22.5l.5-8c3.4-54.8 48.8-97.5 103.7-97.5h213.9l-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l96-96c9.4-9.4 9.4-24.6 0-33.9l-96-96c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l55 55H152.2C72 104 5.6 166.4.5 246.5zm511.9 3c.8-13.2-9.2-24.6-22.5-25.5s-24.6 9.2-25.4 22.5l-.5 8c-3.4 54.8-48.9 97.5-103.8 97.5H145.9l55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L71 367c-9.4 9.4-9.4 24.6 0 33.9l96 96c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55h213.9c80.3 0 146.7-62.4 151.7-142.5l.5-8z"
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
                  d="M15.2 272c-8.8-.5-15.6-8-15.2-16.8l.4-8C5.1 153.5 82.4 80 176.2 80h214.4l-57.4-52.2c-6.5-5.9-7-16.1-1.1-22.6s16.1-7 22.6-1.1l88 80c3.3 3 5.2 7.3 5.2 11.8s-1.9 8.8-5.2 11.8l-88 80c-6.5 5.9-16.7 5.5-22.6-1.1s-5.5-16.7 1.1-22.6l57.4-52H176.2c-76.7 0-140 60.2-143.8 136.8l-.4 8c-.4 8.8-8 15.6-16.8 15.2m481.6-32c8.8.4 15.6 8 15.2 16.8l-.4 8c-4.7 93.7-82 167.2-175.8 167.2H121.4l57.4 52.2c6.5 5.9 7 16.1 1.1 22.6s-16.1 7-22.6 1.1l-88-80c-3.3-3-5.2-7.3-5.2-11.8s1.9-8.8 5.2-11.8l88-80c6.5-5.9 16.7-5.5 22.6 1.1s5.5 16.7-1.1 22.6l-57.4 52h214.4c76.7 0 140-60.2 143.8-136.8l.4-8c.4-8.8 8-15.6 16.8-15.2"
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
                  d="M0 264c0 4.4 3.6 8 8 8s8-3.6 8-8v-8c0-83.9 68.1-152 152-152h251.4l-80.8 74.1c-3.3 3-3.5 8-.5 11.3s8 3.5 11.3.5l96-88c1.7-1.5 2.6-3.7 2.6-5.9s-.9-4.4-2.6-5.9l-96-88c-3.3-3-8.3-2.8-11.3.5s-2.8 8.3.5 11.3L419.4 88H168C75.2 88 0 163.2 0 256zm512-16c0-4.4-3.6-8-8-8s-8 3.6-8 8v8c0 83.9-68.1 152-152 152H92.6l80.8-74.1c3.3-3 3.5-8 .5-11.3s-8-3.5-11.3-.5l-96 88c-1.7 1.5-2.6 3.7-2.6 5.9s.9 4.4 2.6 5.9l96 88c3.3 3 8.3 2.8 11.3-.5s2.8-8.3-.5-11.3L92.6 424H344c92.8 0 168-75.2 168-168z"
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
                  d="M490.1 257.6c16.8 5.6 25.8 23.7 20.2 40.5C486.9 368.5 421 416 346.8 416H173.3l41.4 41.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-96-96c-12.5-12.5-12.5-32.8 0-45.3l96-96c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L173.3 352h173.5c46.7 0 88.1-29.9 102.8-74.1 5.6-16.8 23.7-25.8 40.5-20.2z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M21.9 254.4c-16.8-5.6-25.8-23.8-20.3-40.5C25.1 143.5 91 96 165.2 96h173.5l-41.3-41.4c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l96 96c12.5 12.5 12.5 32.8 0 45.3l-96 96c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l41.3-41.3H165.2c-46.7 0-88.1 29.9-102.8 74.1-5.6 16.8-23.7 25.8-40.5 20.2z"
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
