import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const UserVneckIcon: React.FC<
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
                  d="M224 0a128 128 0 1 0 0 256 128 128 0 1 0 0-256m-66.7 327.1c-3.2-4.3-8.4-6.7-13.7-6.2C62.9 329.7 0 398.2 0 481.3c0 17 13.8 30.7 30.7 30.7h386.6c17 0 30.7-13.8 30.7-30.7 0-83.1-62.9-151.5-143.7-160.3-5.3-.6-10.5 1.9-13.7 6.2L236.7 399c-6.4 8.5-19.2 8.5-25.6 0l-53.9-71.8z"
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
                  d="M224 208a80 80 0 1 0 0-160 80 80 0 1 0 0 160m128-80a128 128 0 1 1-256 0 128 128 0 1 1 256 0M48.3 464h351.4c-3.1-47.3-33.7-87.3-76-103.8L274 422.4c-25.6 32-74.3 32-100 0l-49.7-62.2C82 376.7 51.4 416.7 48.3 464m85-156.4c5.6-1.2 11.3 1.1 14.9 5.6l63.4 79.2c6.4 8 18.6 8 25 0l63.4-79.2c3.6-4.5 9.3-6.7 14.9-5.6 76 16 133.1 83.5 133.1 164.4v8c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32v-8c0-80.9 57.1-148.4 133.3-164.4"
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
                  d="M224 224a96 96 0 1 0 0-192 96 96 0 1 0 0 192m128-96a128 128 0 1 1-256 0 128 128 0 1 1 256 0M185.6 418.1l-57.2-76.3C72.6 358.8 32 410.7 32 472v8h384v-8c0-61.3-40.6-113.2-96.4-130.1l-57.2 76.3c-19.2 25.6-57.6 25.6-76.8 0zm-53.5-110.3c5.8-1.3 11.7 1.2 15.3 5.9l63.9 85.2c6.4 8.5 19.2 8.5 25.6 0l63.9-85.2c3.6-4.7 9.5-7.2 15.3-5.9C391.4 324.3 448 391.5 448 472v8c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32v-8c0-80.5 56.6-147.7 132.1-164.1z"
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
                  d="M224 240a112 112 0 1 0 0-224 112 112 0 1 0 0 224m128-112a128 128 0 1 1-256 0 128 128 0 1 1 256 0M198.4 408.5l-63.7-84.9C66.8 338.8 16 399.5 16 472v8c0 8.8 7.2 16 16 16h384c8.8 0 16-7.2 16-16v-8c0-72.5-50.8-133.2-118.7-148.4l-63.7 84.9c-12.8 17.1-38.4 17.1-51.2 0m-66.3-100.7c5.8-1.3 11.7 1.2 15.3 5.9l63.9 85.2c6.4 8.5 19.2 8.5 25.6 0l63.9-85.2c3.6-4.7 9.5-7.2 15.3-5.9C391.4 324.3 448 391.5 448 472v8c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32v-8c0-80.5 56.6-147.7 132.1-164.1z"
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
                  d="M352 128a128 128 0 1 1-256 0 128 128 0 1 1 256 0"
                />
                <path
                  className="aps-icon-foreground"
                  d="M130 308.3c6.1-1.4 12.4 1.4 15.9 6.6l64.8 97.1c6.3 9.5 20.3 9.5 26.6 0l64.8-97.1c3.5-5.2 9.8-8 15.9-6.6 74.5 17.2 130 84 130 163.7v8c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32v-8c0-79.7 55.5-146.5 130-163.7"
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
