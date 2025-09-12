import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const LandMineOnIcon: React.FC<
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
                  d="M344 24v144c0 13.3-10.7 24-24 24s-24-10.7-24-24V24c0-13.3 10.7-24 24-24s24 10.7 24 24M192 320c0-17.7 14.3-32 32-32h192c17.7 0 32 14.3 32 32v32H192zm-77.3 90.5c8.1-16.3 24.8-26.5 42.9-26.5h324.7c18.2 0 34.8 10.3 42.9 26.5l27.6 55.2C563.5 487 548 512 524.2 512H115.8c-23.8 0-39.3-25-28.6-46.3l27.6-55.2zM36.3 138.3c7.5-10.9 22.5-13.6 33.4-6.1l104 72c10.9 7.5 13.6 22.5 6.1 33.4s-22.5 13.6-33.4 6.1l-104-72c-10.9-7.5-13.6-22.5-6.1-33.4m534.1-6.1c10.9-7.5 25.8-4.8 33.4 6.1s4.8 25.8-6.1 33.4l-104 72c-10.9 7.5-25.8 4.8-33.4-6.1s-4.8-25.8 6.1-33.4z"
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
                  d="M344 24v144c0 13.3-10.7 24-24 24s-24-10.7-24-24V24c0-13.3 10.7-24 24-24s24 10.7 24 24M192 336c0-26.5 21.5-48 48-48h160c26.5 0 48 21.5 48 48v16h31.5c19.6 0 37.3 11.9 44.6 30.2l34.4 85.9c8.4 21-7.1 43.9-29.7 43.9H111.3c-22.6 0-38.1-22.9-29.7-43.9l34.4-85.9c7.3-18.2 24.9-30.2 44.6-30.2H192zm313.1 128-25.6-64h-319l-25.6 64zM36.3 138.3c7.5-10.9 22.5-13.6 33.4-6.1l104 72c10.9 7.5 13.6 22.5 6.1 33.4s-22.5 13.6-33.4 6.1l-104-72c-10.9-7.5-13.6-22.5-6.1-33.4m534.1-6.1c10.9-7.5 25.8-4.8 33.4 6.1s4.8 25.8-6.1 33.4l-104 72c-10.9 7.5-25.8 4.8-33.4-6.1s-4.8-25.8 6.1-33.4z"
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
                  d="M320 0c-8.8 0-16 7.2-16 16v160c0 8.8 7.2 16 16 16s16-7.2 16-16V16c0-8.8-7.2-16-16-16M192 400h288.8c6.3 0 12.1 3.7 14.6 9.5l31.4 70.5H113.2l31.3-70.5c2.6-5.8 8.3-9.5 14.6-9.5zm32-32v-32c0-8.8 7.2-16 16-16h160c8.8 0 16 7.2 16 16v32zm224 0v-32c0-26.5-21.5-48-48-48H240c-26.5 0-48 21.5-48 48v32h-32.8c-19 0-36.2 11.2-43.9 28.5L84 467c-9.4 21.2 6.1 45 29.2 45h413.6c23.2 0 38.6-23.8 29.2-45l-31.3-70.5c-7.7-17.3-24.9-28.5-43.9-28.5H448M57.6 131.2c-7.1-5.3-17.1-3.9-22.4 3.2s-3.9 17.1 3.2 22.4l128 96c7.1 5.3 17.1 3.9 22.4-3.2s3.9-17.1-3.2-22.4zm547.2 3.2c-5.3-7.1-15.3-8.5-22.4-3.2l-128 96c-7.1 5.3-8.5 15.3-3.2 22.4s15.3 8.5 22.4 3.2l128-96c7.1-5.3 8.5-15.3 3.2-22.4"
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
                  d="M320 0c4.4 0 8 3.6 8 8v176c0 4.4-3.6 8-8 8s-8-3.6-8-8V8c0-4.4 3.6-8 8-8M192 384h-32.8c-12.6 0-24.1 7.4-29.2 19l-31.4 70.5c-4.7 10.6 3 22.5 14.6 22.5h413.6c11.6 0 19.3-11.9 14.6-22.5L510 403c-5.1-11.6-16.6-19-29.2-19H192m16-16h224v-48c0-8.8-7.2-16-16-16H224c-8.8 0-16 7.2-16 16zm240 0h32.8c19 0 36.2 11.2 43.9 28.5L556 467c9.4 21.2-6.1 45-29.2 45H113.2C90 512 74.6 488.2 84 467l31.3-70.5c7.7-17.3 24.9-28.5 43.9-28.5H192v-48c0-17.7 14.3-32 32-32h192c17.7 0 32 14.3 32 32v48M44.9 129.6l136 104c3.5 2.7 4.2 7.7 1.5 11.2s-7.7 4.2-11.2 1.5l-136-104c-3.5-2.7-4.2-7.7-1.5-11.2s7.7-4.2 11.2-1.5m561.5 1.5c2.7 3.5 2 8.5-1.5 11.2l-136 104c-3.5 2.7-8.5 2-11.2-1.5s-2-8.5 1.5-11.2l136-104c3.5-2.7 8.5-2 11.2 1.5"
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
                  d="M224 288c-17.7 0-32 14.3-32 32v32h256v-32c0-17.7-14.3-32-32-32zm-66.3 96c-18.2 0-34.8 10.3-42.9 26.5l-27.6 55.2C76.5 487 92 512 115.8 512h408.4c23.8 0 39.3-25 28.6-46.3l-27.6-55.2c-8.1-16.3-24.8-26.5-42.9-26.5z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M320 0c13.3 0 24 10.7 24 24v144c0 13.3-10.7 24-24 24s-24-10.7-24-24V24c0-13.3 10.7-24 24-24M36.3 138.3c7.5-10.9 22.5-13.6 33.4-6.1l104 72c10.9 7.5 13.6 22.5 6.1 33.4s-22.5 13.6-33.4 6.1l-104-72c-10.9-7.5-13.6-22.5-6.1-33.4m534.1-6.1c10.9-7.5 25.8-4.8 33.4 6.1s4.8 25.8-6.1 33.4l-104 72c-10.9 7.5-25.8 4.8-33.4-6.1s-4.8-25.8 6.1-33.4z"
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
