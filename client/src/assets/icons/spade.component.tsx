import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SpadeIcon: React.FC<
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
                  d="M278 12.5C265.7.8 246.3.8 234 12.5l-66 62.6L40 196.3c-51.3 48.6-53.5 129.6-4.9 181s129.6 53.5 181 4.9l8-7.6V448H192c-17.7 0-32 14.3-32 32s14.3 32 32 32h128c17.7 0 32-14.3 32-32s-14.3-32-32-32h-32v-73.4l8 7.6c51.3 48.6 132.3 46.4 181-4.9s46.4-132.3-4.9-181L344 75.1z"
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
                  d="M437.7 242.9 256.4 55 74.2 242.9c-37 38.4-34.9 102.3 6.7 138l.3.2c32 27.9 86 25.1 120.8-10.2l19.7-20.7c9.2-9.7 22-15.1 35.4-14.9s26 5.9 35 15.8l18.3 20.2c34.3 34.4 87.3 38 121.7 9.5 40.6-35.7 42.6-99.6 5.7-138zM233.5 9.7c12-13 33-13 45.9 0l192.8 199.8c55.9 57.9 52.9 153.8-9 207.8-50.7 42.6-122.8 39.2-173 .2q-5.25-4.05-10.2-8.7V464h48c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-13.3 0-24-10.7-24-24s10.7-24 24-24h48v-55.3c-3.1 2.9-6.4 5.7-9.8 8.4-50.4 39.4-123.4 43-172.5.3-62.9-53.9-65.9-149.8-10-207.8z"
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
                  d="M449.2 231.8c43.3 44.9 41 119.4-6.8 161.2-41.5 34.7-104.2 29.3-143.7-10.6l-18.5-20.5c-6-6.6-14.4-10.4-23.3-10.5s-17.4 3.5-23.6 9.9l-19.8 20.8c-39.9 40.5-103.5 45.3-142.8 11.1l-.2-.2c-48.7-41.8-51.1-116.3-7.8-161.2L256.4 32.1c.1 0 .2.1.3.2zm23-22.2L279.4 9.7c-13-13-34-13-45.9 0L39.7 209.5c-55.9 57.9-52.9 153.8 10 207.8 53.1 46.3 134.4 38.2 184.6-10.8l2.2-2.2 3.5-3.7V480h-64c-8.8 0-16 7.2-16 16s7.2 16 16 16h160c8.8 0 16-7.2 16-16s-7.2-16-16-16h-64v-79.4l3.4 3.8 2.7 2.7c50.2 48.6 130.1 56.4 185.1 10.3 61.9-53.9 64.9-149.8 9-207.8"
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
                  d="M460.7 220.6 268 21c-7-6.9-17.4-6.2-22.8-.4l-.3.3L51.2 220.6C1.6 272.1 4.3 357.3 60.1 405.2l.1.1c46.6 40.6 119.9 33.7 164.8-12l19.9-20.9c3.1-3.2 7.3-5 11.8-5s8.7 2 11.7 5.3l18.8 20.7c44.7 45.4 117 52.6 165.7 11.8 54.8-47.9 57.5-133.1 7.9-184.5zM233.5 9.7c12-13 33-13 45.9 0l192.8 199.8c55.9 57.9 52.9 153.8-9 207.8-55.9 47-137.8 38-187.8-13l-8.2-9.1-3.2-3.5V496h80c4.4 0 8 3.6 8 8s-3.6 8-8 8H168c-4.4 0-8-3.6-8-8s3.6-8 8-8h80V392.2l-2.6 2.7-8.9 9.4c-49.9 51-132.8 59.9-186.8 13-62.9-53.9-65.9-149.8-10-207.8z"
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
                  d="M278 12.5C265.7.8 246.3.8 234 12.5l-66 62.6L40 196.3c-51.3 48.6-53.5 129.6-4.9 181s129.6 53.5 181 4.9l8-7.6V256c0-17.7 14.3-32 32-32s32 14.3 32 32v118.6l8 7.6c51.3 48.6 132.3 46.4 181-4.9s46.4-132.3-4.9-181L344 75.1z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M256 224c17.7 0 32 14.3 32 32v192h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H192c-17.7 0-32-14.3-32-32s14.3-32 32-32h32V256c0-17.7 14.3-32 32-32"
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
