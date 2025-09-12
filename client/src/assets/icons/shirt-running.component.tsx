import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ShirtRunningIcon: React.FC<
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
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M80 0c17.7 0 32 14.3 32 32v48c0 44.2 35.8 80 80 80s80-35.8 80-80V32c0-17.7 14.3-32 32-32s32 14.3 32 32v32c0 33.3 2.6 61.5 6.5 85.2L0 393.8V282.5c0-17 6.7-33.5 14.7-48.4C28.8 207.6 48 155 48 64V32C48 14.3 62.3 0 80 0M3.8 469.8 360.4 215c3 7.5 6 13.8 8.9 19 8 15 14.7 31.5 14.7 48.4V448c0 35.3-28.7 64-64 64H64c-27.7 0-51.3-17.6-60.2-42.2"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M88 0c13.3 0 24 10.7 24 24v48c0 44.2 35.8 80 80 80s80-35.8 80-80V24c0-13.3 10.7-24 24-24s24 10.7 24 24c0 127.9 26.8 181 41.5 200.5 9.6 12.8 22.5 32.8 22.5 56.3V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V280.7c0-23.5 12.9-43.5 22.5-56.3C37.2 205 64 151.9 64 24 64 10.7 74.7 0 88 0M60.8 253.4C52.2 264.8 48 273.9 48 280.7v110.1l251.3-181.5c-5.4-13.6-10.4-29.8-14.6-49.1-23.3 24.5-56.2 39.8-92.7 39.8s-69.4-15.3-92.7-39.8c-10.3 46.7-25.2 75.5-38.5 93.2M48.1 450c1 7.9 7.7 14 15.9 14h256c8.8 0 16-7.2 16-16V280.7c0-6.8-4.2-15.9-12.8-27.3-.3-.4-.7-.9-1-1.4z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M80 0c8.8 0 16 7.2 16 16v48c0 53 43 96 96 96s96-43 96-96V16c0-8.8 7.2-16 16-16s16 7.2 16 16c0 134.3 29.3 192.6 45.6 214.6 8.9 12 18.4 28.6 18.4 47.6V456c0 30.9-25.1 56-56 56H56c-30.9 0-56-25.1-56-56V278.2c0-19 9.5-35.7 18.4-47.6C34.7 208.6 64 150.3 64 16c0-8.8 7.2-16 16-16M44.1 249.6c-7.6 10.2-12.1 20-12.1 28.6v118.1L310.6 195l1.4-1c-5.5-15.9-10.5-34.9-14.6-57.5C274.4 170 235.8 192 192 192s-82.4-22-105.5-55.5c-10.7 59.8-28.4 94.1-42.4 113.1M32 435.7V456c0 13.3 10.7 24 24 24h272c13.3 0 24-10.7 24-24V278.2c0-8.6-4.6-18.4-12.1-28.6-4.8-6.5-10-14.7-15.2-25.2L41.4 429z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M63.9 24.2C64 19.6 67.7 16 72 16h16c4.4 0 8 3.6 8 8v56c0 53 43 96 96 96s96-43 96-96V24c0-4.4 3.6-8 8-8h16c4.3 0 8 3.6 8.1 8.2.6 64.2 5.1 111.1 11.2 145.4L16 406V290.6c0-8.9 2.6-18.6 6.4-28.8 2.7-7.1 5.8-13.9 8.9-20.7l4.2-9.3c13.2-30.1 27.3-89.7 28.4-207.7zM16 426l4.8-3.6L334.7 187c3.6 16.4 7.6 29.3 11.6 39.3L18.4 476.1c-1.5-3.7-2.4-7.8-2.4-12.1zm336.8-184.6c3 6.7 6.1 13.4 8.7 20.4 3.9 10.2 6.4 19.9 6.4 28.8V464c0 17.7-14.3 32-32 32H48c-7.6 0-14.6-2.6-20-7.1zM72 0C58.7 0 48.1 10.9 47.9 24c-1.2 117.2-15.1 174.2-27.1 201.5-1.2 2.7-2.5 5.5-3.8 8.5-3.2 7-6.6 14.6-9.5 22.2C3.4 267 0 278.8 0 290.6V464c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V290.6c0-11.8-3.4-23.6-7.5-34.5-2.9-7.6-6.3-15.2-9.5-22.2-1.3-3-2.6-5.8-3.8-8.5-11.9-27.2-25.9-84.2-27.1-201.4-.2-13.1-10.7-24-24.1-24h-16c-13.3 0-24 10.7-24 24v56c0 44.2-35.8 80-80 80s-80-35.8-80-80V24c0-13.3-10.7-24-24-24z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M80 0c17.7 0 32 14.3 32 32v48c0 44.2 35.8 80 80 80s80-35.8 80-80V32c0-17.7 14.3-32 32-32s32 14.3 32 32v32c0 33.3 2.6 61.5 6.5 85.2L0 393.8V282.5c0-17 6.7-33.5 14.7-48.4C28.8 207.6 48 155 48 64V32C48 14.3 62.3 0 80 0M3.8 469.8 360.4 215c3 7.5 6 13.8 8.9 19 8 15 14.7 31.5 14.7 48.4V448c0 35.3-28.7 64-64 64H64c-27.7 0-51.3-17.6-60.2-42.2"
                />
                <path
                  className="aps-icon-foreground"
                  d="M342.5 149.2 0 393.8V448c0 7.6 1.3 15 3.8 21.8L360.4 215c-6.6-16.2-13.2-37.9-17.9-65.9z"
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
