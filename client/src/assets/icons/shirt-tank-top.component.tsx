import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ShirtTankTopIcon: React.FC<
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
                  d="M112 32c0-17.7-14.3-32-32-32S48 14.3 48 32v32c0 91-19.2 143.6-33.3 170.1-8 15-14.7 31.4-14.7 48.4V448c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V282.5c0-17-6.7-33.5-14.7-48.4C355.2 207.6 336 155 336 64V32c0-17.7-14.3-32-32-32s-32 14.3-32 32v48c0 44.2-35.8 80-80 80s-80-35.8-80-80z"
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
                  d="M112 24c0-13.3-10.7-24-24-24S64 10.7 64 24c0 127.9-26.8 181-41.5 200.5C12.9 237.2 0 257.2 0 280.7V448c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V280.7c0-23.5-12.9-43.5-22.5-56.3C346.8 205 320 151.9 320 24c0-13.3-10.7-24-24-24s-24 10.7-24 24v48c0 44.2-35.8 80-80 80s-80-35.8-80-80zM99.3 160.2c23.3 24.5 56.2 39.8 92.7 39.8s69.4-15.3 92.7-39.8c10.3 46.7 25.2 75.5 38.5 93.1 8.6 11.4 12.8 20.5 12.8 27.3V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V280.7c0-6.8 4.2-15.9 12.8-27.3 13.3-17.6 28.2-46.5 38.5-93.1z"
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
                  d="M96 16c0-8.8-7.2-16-16-16S64 7.2 64 16c0 134.3-29.3 192.6-45.6 214.6C9.5 242.5 0 259.2 0 278.2V456c0 30.9 25.1 56 56 56h272c30.9 0 56-25.1 56-56V278.2c0-19-9.5-35.7-18.4-47.6-16.3-22-45.6-80.3-45.6-214.6 0-8.8-7.2-16-16-16s-16 7.2-16 16v48c0 53-43 96-96 96s-96-43-96-96zm-9.5 120.5C109.6 170 148.2 192 192 192s82.4-22 105.5-55.5c10.7 59.8 28.4 94.1 42.4 113.1 7.6 10.2 12.1 20 12.1 28.6V456c0 13.3-10.7 24-24 24H56c-13.3 0-24-10.7-24-24V278.2c0-8.6 4.6-18.4 12.1-28.6 14-19 31.7-53.3 42.4-113.1"
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
                  d="M72 16c-4.3 0-8 3.6-8.1 8.2-1.2 118-15.2 177.5-28.4 207.7l-4.2 9.3c-3.1 6.8-6.2 13.6-8.9 20.7-3.8 10.1-6.4 19.8-6.4 28.7V464c0 17.7 14.3 32 32 32h288c17.7 0 32-14.3 32-32V290.6c0-8.9-2.6-18.6-6.4-28.8-2.7-7.1-5.8-13.9-8.9-20.7l-4.2-9.3c-13.2-30.1-27.3-89.7-28.4-207.7 0-4.6-3.8-8.2-8.1-8.2h-16c-4.4 0-8 3.6-8 8V80c0 53-43 96-96 96s-96-43-96-96V24c0-4.4-3.6-8-8-8zm-24.1 8C48.1 10.9 58.7 0 72 0h16c13.3 0 24 10.7 24 24v56c0 44.2 35.8 80 80 80s80-35.8 80-80V24c0-13.3 10.7-24 24-24h16c13.4 0 23.9 10.9 24.1 24 1.2 117.2 15.2 174.2 27.1 201.4 1.2 2.7 2.5 5.5 3.8 8.5 3.2 7 6.6 14.6 9.5 22.2 4.1 10.9 7.5 22.7 7.5 34.5V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V290.6c0-11.8 3.4-23.6 7.5-34.5 2.9-7.6 6.3-15.2 9.5-22.2 1.3-3 2.6-5.8 3.8-8.5 12-27.2 25.9-84.2 27.1-201.4"
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
                  d="M112 32c0-17.7-14.3-32-32-32S48 14.3 48 32v32c0 91-19.2 143.6-33.3 170.1-8 15-14.7 31.4-14.7 48.4V448c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V282.5c0-17-6.7-33.5-14.7-48.4C355.2 207.6 336 155 336 64V32c0-17.7-14.3-32-32-32s-32 14.3-32 32v48c0 44.2-35.8 80-80 80s-80-35.8-80-80z"
                />
                <path className="aps-icon-foreground" d="" />
              </svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
