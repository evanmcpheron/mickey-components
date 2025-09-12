import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const TagsIcon: React.FC<
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
                  d="m345 39.1 127.8 129.3c52.4 53 52.4 138.2 0 191.2l-112 113.3c-9.3 9.4-24.5 9.5-33.9.2s-9.5-24.5-.2-33.9l111.9-113.3c33.9-34.3 33.9-89.4 0-123.7L310.9 72.9c-9.3-9.4-9.2-24.6.2-33.9s24.6-9.2 33.9.2zM0 229.5V80c0-26.5 21.5-48 48-48h149.5c17 0 33.3 6.7 45.3 18.7l168 168c25 25 25 65.5 0 90.5L277.3 442.7c-25 25-65.5 25-90.5 0l-168-168C6.7 262.7 0 246.5 0 229.5M144 144a32 32 0 1 0-64 0 32 32 0 1 0 64 0"
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
                  d="M345 39.1c-9.3-9.4-24.5-9.5-33.9-.2s-9.5 24.5-.2 33.9l127.7 129.3c33.9 34.3 33.9 89.4 0 123.7L326.7 439.1c-9.3 9.4-9.2 24.6.2 33.9s24.6 9.2 33.9-.2l112-113.2c52.4-53 52.4-138.2 0-191.2zM242.7 50.7c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80v149.5c0 17 6.7 33.3 18.7 45.3l168 168c25 25 65.5 25 90.5 0l133.5-133.5c25-25 25-65.5 0-90.5l-168-168zM48 80h149.5c4.2 0 8.3 1.7 11.3 4.7l168 168c6.2 6.2 6.2 16.4 0 22.6L243.3 408.8c-6.2 6.2-16.4 6.2-22.6 0l-168-168c-3-3-4.7-7.1-4.7-11.3zm96 64a32 32 0 1 0-64 0 32 32 0 1 0 64 0"
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
                  d="M204.1 32c12.7 0 24.9 5.1 33.9 14.1l172.7 172.6c25 25 25 65.5 0 90.5L277.3 442.7c-25 25-65.5 25-90.5 0L14.1 270.1c-9-9-14.1-21.2-14.1-33.9V80c0-26.5 21.5-48 48-48zM36.7 247.4l172.7 172.7c12.5 12.5 32.8 12.5 45.3 0l133.4-133.5c12.5-12.5 12.5-32.8 0-45.3L215.4 68.7c-3-3-7.1-4.7-11.3-4.7H48c-8.8 0-16 7.2-16 16v156.1c0 4.2 1.7 8.3 4.7 11.3M308.4 36.9c6.1-6.4 16.2-6.6 22.6-.5l141.3 135c52.8 50.4 52.8 134.7 0 185.1l-124.6 119c-6.4 6.1-16.5 5.9-22.6-.5s-5.9-16.5.5-22.6l124.6-119c39.6-37.8 39.6-101 0-138.8l-141.3-135c-6.4-6.1-6.6-16.2-.5-22.6zM104 112a24 24 0 1 1 0 48 24 24 0 1 1 0-48"
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
                  d="M322.3 34.3c-3.1 3.1-3.2 8.2-.1 11.3L466 190.8c40.1 40.5 40.1 105.8 0 146.3L338.1 466.4c-3.1 3.1-3.1 8.2.1 11.3s8.2 3.1 11.3-.1l127.8-129.2c46.3-46.8 46.3-122.1 0-168.8L333.6 34.4c-3.1-3.1-8.2-3.2-11.3-.1M16 80c0-17.7 14.3-32 32-32h149.5c12.7 0 24.9 5.1 33.9 14.1l168 168c18.7 18.7 18.7 49.1 0 67.9L265.9 431.4c-18.7 18.7-49.1 18.7-67.9 0l-168-168c-9-9-14.1-21.2-14.1-33.9V80zM0 80v149.5c0 17 6.7 33.3 18.7 45.3l168 168c25 25 65.5 25 90.5 0l133.5-133.5c25-25 25-65.5 0-90.5l-168-168c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80m112 40a24 24 0 1 1 0 48 24 24 0 1 1 0-48m0 64a40 40 0 1 0 0-80 40 40 0 1 0 0 80"
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
                  d="M311.1 38.9c9.4-9.3 24.6-9.2 33.9.2l127.8 129.3c52.4 53 52.4 138.2 0 191.2l-112 113.3c-9.3 9.4-24.5 9.5-33.9.2s-9.5-24.5-.2-33.9l111.9-113.3c33.9-34.3 33.9-89.4 0-123.7L310.9 72.9c-9.3-9.4-9.2-24.6.2-33.9z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M0 80v149.5c0 17 6.7 33.3 18.7 45.3l168 168c25 25 65.5 25 90.5 0l133.5-133.5c25-25 25-65.5 0-90.5l-168-168c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80m112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64"
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
