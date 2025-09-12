import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BaguetteIcon: React.FC<
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
                  d="M583 234.5c58.8-39.2 74.7-118.7 35.5-177.5S499.8-17.7 441 21.5l-84.5 56.3 70.8 70.8c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-75.4-75.3-88 58.7 74 74c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-78.6-78.6-88 58.7 77.2 77.2c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-81.8-81.6-41.9 28C-1.8 316.7-17.7 396.2 21.5 455s118.7 74.7 177.5 35.5z"
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
                  d="M578.6 83.6c-24.5-36.8-74.2-46.7-110.9-22.2L398 107.9l35 35.1c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L357.2 135l-74.5 49.6L321 223c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L242 211.8l-74.5 49.6L209 303c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48.3-48.3-43.2 28.8c-36.8 24.5-46.7 74.2-22.2 110.9s74.2 46.7 110.9 22.2l384-256c36.8-24.5 46.7-74.2 22.2-110.9zM618.5 57c39.2 58.8 23.3 138.3-35.5 177.5l-384 256C140.2 529.7 60.7 513.8 21.5 455S-1.8 316.7 57 277.5l384-256C499.8-17.7 579.3-1.8 618.5 57"
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
                  d="M591.9 74.8c-29.4-44.1-89-56-133.1-26.6L379.6 101l47.8 47.8c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L352.4 119l-88 58.7 51 51c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-55.5-55.5-88 58.7 54.2 54.2c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L122 272.6l-47.3 31.5c-44.1 29.4-56 89-26.6 133.1s89 56 133.1 26.6l384-256c44.1-29.4 56-89 26.6-133.1zM618.5 57c39.2 58.8 23.3 138.3-35.5 177.5l-384 256C140.2 529.7 60.7 513.8 21.5 455S-1.8 316.7 57 277.5l384-256C499.8-17.7 579.3-1.8 618.5 57"
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
                  d="M605.2 65.9C570.9 14.4 501.3.5 449.9 34.8l-88.7 59.1 60.4 60.4c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0L347.6 103 246 170.7l63.6 63.6c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0l-65.9-65.9-101.6 67.8 66.8 66.8c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0l-69.1-69.1-51.3 34.3C14.4 325.1.5 394.7 34.8 446.1s103.8 65.4 155.3 31.1l384-256c51.5-34.3 65.4-103.8 31.1-155.3m13.3-8.9c39.2 58.8 23.3 138.3-35.5 177.5l-384 256C140.2 529.7 60.7 513.8 21.5 455S-1.8 316.7 57 277.5l384-256C499.8-17.7 579.3-1.8 618.5 57"
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
                  d="M583 234.5c58.8-39.2 74.7-118.7 35.5-177.5S499.8-17.7 441 21.5l-84.5 56.3 70.8 70.8c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L329.3 96l-88 58.7 74 74c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-78.6-78.6-88 58.7 77.2 77.2c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-81.8-81.6L57 277.5C-1.8 316.7-17.7 396.2 21.5 455s118.7 74.7 177.5 35.5z"
                />
                <path
                  className="aps-icon-foreground"
                  d="m356.5 77.8-27.2 18.1 75.4 75.4c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6zM126.1 231.4l-27.2 18.1 81.8 81.8c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-77.2-77.2zm115.2-76.8-27.2 18.1 78.6 78.6c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-74-74z"
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
