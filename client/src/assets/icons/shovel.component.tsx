import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ShovelIcon: React.FC<
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
                  d="M361.4 9.4c12.5-12.5 32.8-12.5 45.3 0l96 96c12.5 12.5 12.5 32.8 0 45.3l-44.1 44.1c-18.7 18.7-44.1 29.3-70.6 29.3-15.9 0-30.9-3.7-44.3-10.3l-97 97 50.7 50.7c12.5 12.5 12.5 32.8 0 45.3l-58.5 58.5c-30 30-70.7 46.9-113.1 46.9H32c-17.7 0-32-14.3-32-32v-93.9c0-42.4 16.9-83.1 46.9-113.1l58.5-58.5c12.5-12.5 32.8-12.5 45.3 0l50.7 50.7 97-97c-6.7-13.3-10.4-28.4-10.4-44.3 0-26.5 10.5-51.9 29.3-70.6zM384 77.3l-21.5 21.4c-6.7 6.7-10.5 15.9-10.5 25.4 0 19.8 16.1 35.9 35.9 35.9 9.5 0 18.6-3.8 25.4-10.5l21.4-21.5z"
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
                  d="M375 7c9.4-9.4 24.6-9.4 33.9 0l96 96c9.4 9.4 9.4 24.6 0 33.9L460.8 181c-17.2 17.2-40.6 26.9-65 26.9-16.7 0-32.3-4.4-45.8-12.2L241 305l56.4 56.4c12.5 12.5 12.5 32.8 0 45.3l-58.5 58.5c-30 30-70.7 46.9-113.1 46.9H32c-17.7 0-32-14.3-32-32v-93.8c0-42.4 16.9-83.1 46.9-113.1l58.5-58.5c12.5-12.5 32.8-12.5 45.3 0L207 271l109.2-109.1c-7.8-13.5-12.2-29.1-12.2-45.8 0-24.4 9.7-47.7 26.9-65zm17 50.9-27.1 27.2c-8.2 8.2-12.9 19.4-12.9 31 0 24.2 19.6 43.9 43.9 43.9 11.6 0 22.8-4.6 31-12.9l27.2-27.1zM125.7 464c29.7 0 58.2-11.8 79.2-32.8l47.2-47.2L128 259.9l-47.2 47.2c-21 21-32.8 49.5-32.8 79.2V464z"
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
                  d="m396 34.6-43.1 43.2c-10.8 10.8-16.9 25.4-16.9 40.7 0 31.8 25.8 57.5 57.5 57.5 15.3 0 29.9-6.1 40.7-16.9l43.2-43.1zM377.9 7.5C382.7 2.7 389.2 0 396 0s13.3 2.7 18.1 7.5l90.3 90.3c4.8 4.8 7.5 11.3 7.5 18.1s-2.7 13.3-7.5 18.1l-47.6 47.6c-16.8 16.8-39.6 26.2-63.3 26.2-18.9 0-36.5-5.9-51-15.9L235.3 299.3l62.1 62.1c12.5 12.5 12.5 32.8 0 45.3l-58.5 58.5c-30 30-70.7 46.9-113.1 46.9H32c-17.7 0-32-14.3-32-32v-93.8c0-42.4 16.9-83.1 46.9-113.1l58.5-58.5c12.5-12.5 32.8-12.5 45.3 0l62.1 62.1 107.1-107.4c-10-14.5-15.9-32-15.9-51 0-23.7 9.4-46.5 26.2-63.3zM32 480h93.7c33.9 0 66.5-13.5 90.5-37.5l58.5-58.5L128 237.3l-58.5 58.5c-24 24-37.5 56.6-37.5 90.5z"
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
                  d="M410.3 2.3c3.1-3.1 8.2-3.1 11.3 0l88 88c3.1 3.1 3.1 8.2 0 11.3l-37.8 37.8c-13.2 13.2-31 20.6-49.7 20.6-16.5 0-31.7-5.7-43.7-15.2L229.7 293.7l67.7 67.7c12.5 12.5 12.5 32.8 0 45.3l-58.5 58.5c-30 30-70.7 46.9-113.1 46.9H32c-17.7 0-32-14.3-32-32v-93.8c0-42.4 16.9-83.1 46.9-113.1l58.5-58.5c12.5-12.5 32.8-12.5 45.3 0l67.7 67.7 148.8-148.9c-9.5-12-15.2-27.2-15.2-43.7 0-18.6 7.4-36.5 20.6-49.7zm5.7 17-32.1 32.1c-10.2 10.2-15.9 24-15.9 38.4 0 29.9 24.3 54.2 54.2 54.2 14.4 0 28.2-5.7 38.3-15.9L492.7 96zM16 480c0 8.8 7.2 16 16 16h93.7c38.2 0 74.8-15.2 101.8-42.2l58.5-58.5c6.2-6.2 6.2-16.4 0-22.6L139.3 225.9c-6.2-6.2-16.4-6.2-22.6 0l-58.5 58.6c-27 27-42.2 63.6-42.2 101.8z"
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
                  d="M406.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-44 44.1C298.5 72.2 288 97.6 288 124.1c0 15.9 3.7 30.9 10.3 44.3l-97 97 45.3 45.3 97-97C357 220.3 372 224 387.9 224c26.5 0 51.9-10.5 70.6-29.3l44.1-44.1c12.5-12.5 12.5-32.8 0-45.3l-96-96zm-44.1 89.3L384 77.3l50.7 50.7-21.5 21.5c-6.7 6.7-15.9 10.5-25.4 10.5-19.8 0-35.9-16.1-35.9-35.9 0-9.5 3.8-18.6 10.5-25.4z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M0 386.3V480c0 17.7 14.3 32 32 32h93.7c42.4 0 83.1-16.9 113.1-46.9l58.5-58.5c12.5-12.5 12.5-32.8 0-45.3L150.6 214.6c-12.5-12.5-32.8-12.5-45.3 0l-58.4 58.5C16.9 303.1 0 343.8 0 386.3"
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
