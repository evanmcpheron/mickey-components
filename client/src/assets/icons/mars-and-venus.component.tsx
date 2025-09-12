import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const MarsAndVenusIcon: React.FC<
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
                  d="M337.8 14.8C341.5 5.8 350.3 0 360 0h112c13.3 0 24 10.7 24 24v112c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-39-39-24.7 24.7C407 163.3 416 192.6 416 224c0 80.2-59 146.6-136 158.2V408h24c13.3 0 24 10.7 24 24s-10.7 24-24 24h-24v32c0 13.3-10.7 24-24 24s-24-10.7-24-24v-32h-24c-13.3 0-24-10.7-24-24s10.7-24 24-24h24v-25.8c-77-11.6-136-78-136-158.2 0-88.4 71.6-160 160-160 39.6 0 75.9 14.4 103.8 38.2L382.1 80 343 41c-6.9-6.9-8.9-17.2-5.2-26.2M352 224a96 96 0 1 0-192 0 96 96 0 1 0 192 0"
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
                  d="M352 24c0 13.3 10.7 24 24 24h38.1l-42.9 42.9C340.3 64.2 300 48 256 48c-97.2 0-176 78.8-176 176 0 89.1 66.2 162.7 152 174.4V416h-24c-13.3 0-24 10.7-24 24s10.7 24 24 24h24v24c0 13.3 10.7 24 24 24s24-10.7 24-24v-24h24c13.3 0 24-10.7 24-24s-10.7-24-24-24h-24v-17.6c85.8-11.7 152-85.3 152-174.4 0-35.8-10.7-69.2-29.1-97L448 81.9V120c0 13.3 10.7 24 24 24s24-10.7 24-24V24c0-13.3-10.7-24-24-24h-96c-13.3 0-24 10.7-24 24m-96 72a128 128 0 1 1 0 256 128 128 0 1 1 0-256"
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
                  d="M352 16c0 8.8 7.2 16 16 16h73.4l-75.6 75.6C337.1 80.6 298.5 64 256 64c-88.4 0-160 71.6-160 160 0 83 63.1 151.2 144 159.2V416h-32c-8.8 0-16 7.2-16 16s7.2 16 16 16h32v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h32c8.8 0 16-7.2 16-16s-7.2-16-16-16h-32v-32.8c80.9-8 144-76.2 144-159.2 0-34.3-10.8-66.1-29.2-92.2L464 54.6V128c0 8.8 7.2 16 16 16s16-7.2 16-16V16c0-8.8-7.2-16-16-16H368c-8.8 0-16 7.2-16 16m-96 80a128 128 0 1 1 0 256 128 128 0 1 1 0-256"
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
                  d="M368 8c0 4.4 3.6 8 8 8h92.7l-97.2 97.2C342.3 82.9 301.4 64 256 64c-88.4 0-160 71.6-160 160 0 85.7 67.4 155.6 152 159.8V432h-48c-4.4 0-8 3.6-8 8s3.6 8 8 8h48v56c0 4.4 3.6 8 8 8s8-3.6 8-8v-56h48c4.4 0 8-3.6 8-8s-3.6-8-8-8h-48v-48.2c84.6-4.2 152-74.1 152-159.8 0-37.2-12.7-71.5-34-98.7l98-98V120c0 4.4 3.6 8 8 8s8-3.6 8-8V8c0-4.4-3.6-8-8-8H376c-4.4 0-8 3.6-8 8M256 80a144 144 0 1 1 0 288 144 144 0 1 1 0-288"
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
                  d="M192 224a64 64 0 1 1 128 0 64 64 0 1 1-128 0"
                />
                <path
                  className="aps-icon-foreground"
                  d="M337.8 14.8C341.5 5.8 350.3 0 360 0h112c13.3 0 24 10.7 24 24v112c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-39-39-24.7 24.7C407 163.3 416 192.6 416 224c0 80.2-59 146.6-136 158.2V408h24c13.3 0 24 10.7 24 24s-10.7 24-24 24h-24v32c0 13.3-10.7 24-24 24s-24-10.7-24-24v-32h-24c-13.3 0-24-10.7-24-24s10.7-24 24-24h24v-25.8c-77-11.6-136-78-136-158.2 0-88.4 71.6-160 160-160 39.6 0 75.9 14.4 103.8 38.2L382.1 80 343 41c-6.9-6.9-8.9-17.2-5.2-26.2M352 224a96 96 0 1 0-192 0 96 96 0 1 0 192 0"
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
