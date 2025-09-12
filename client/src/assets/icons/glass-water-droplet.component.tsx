import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const GlassWaterDropletIcon: React.FC<
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
                  d="M32 0C23.1 0 14.6 3.7 8.6 10.2S-.6 25.4.1 34.3l28.8 403.4c3 41.9 37.8 74.3 79.8 74.3h166.6c42 0 76.8-32.4 79.8-74.3l28.8-403.4c.6-8.9-2.4-17.6-8.5-24.1S360.9 0 352 0zm51 297.5L66.4 64h251.2L301 297.5l-13 6.5c-20.1 10.1-43.9 10.1-64 0s-43.9-10.1-64 0-43.9 10.1-64 0zM256 196c0-24-33.7-70.1-52.2-93.5-6.1-7.7-17.5-7.7-23.6 0C161.7 125.9 128 172 128 196c0 33.1 28.7 60 64 60s64-26.9 64-60"
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
                  d="M24 0C17.3 0 10.9 2.8 6.3 7.8S-.5 19.4.1 26.1l36.2 420.1C39.5 483.4 70.7 512 108 512h168c37.4 0 68.5-28.6 71.7-65.8l36.2-420.1c.6-6.7-1.7-13.3-6.2-18.3S366.7 0 360 0zm49.5 319.2L50.2 48h283.6l-23.3 271.2-9.3 5.2c-16.2 9-36.2 7.3-50.7-4.3-34.2-27.4-82.8-27.4-117 0-14.5 11.5-34.5 13.2-50.7 4.2l-9.3-5.2zm4.7 55c29 8.6 60.9 2.8 85.2-16.6 16.7-13.3 40.4-13.3 57 0 24.3 19.4 56.2 25.3 85.2 16.6l-5.9 67.9c-.9 12.4-11.3 21.9-23.7 21.9H108c-12.5 0-22.8-9.5-23.9-21.9zM256 196c0-24-33.7-70.1-52.2-93.5-6.1-7.7-17.5-7.7-23.6 0C161.7 125.9 128 172 128 196c0 33.1 28.7 60 64 60s64-26.9 64-60"
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
                  d="M32.1 40.7c-.4-4.7 3.3-8.7 8-8.7h303.7c4.7 0 8.4 4 8 8.7l-22.3 264.7-23.9 12c-19.2 9.6-42.3 7.2-59.1-6.3-31.8-25.5-77.1-25.5-108.9 0-16.8 13.4-39.9 15.9-59.1 6.3l-24-12zm25.4 302 6.6 3.3c30.4 15.2 66.9 11.3 93.4-9.9 20.1-16.1 48.8-16.1 68.9 0 26.5 21.2 63 25.1 93.4 9.9l6.5-3.2-9.1 108c-1.4 16.5-15.2 29.2-31.8 29.2H98.6c-16.6 0-30.5-12.7-31.9-29.3l-9.1-108zM40.1 0C16.7 0-1.7 20 .2 43.4l34.6 410c2.8 33.1 30.5 58.6 63.8 58.6h186.8c33.3 0 61-25.5 63.8-58.6l34.6-410C385.6 20 367.2 0 343.8 0zM192 216c-19.6 0-32-14.5-32-28v-.1c.1-.6.6-3.3 2.9-8.8 2.6-6.1 6.5-13.4 11.4-21.3 5.4-8.8 11.6-17.8 17.6-26 6 8.2 12.1 17.1 17.6 26 4.9 8 8.8 15.2 11.4 21.3 2.3 5.5 2.8 8.2 2.9 8.8v.1c0 13.5-12.4 28-32 28zm0 32c35.3 0 64-26.9 64-60 0-24-33.7-70.1-52.2-93.5-6.1-7.7-17.5-7.7-23.6 0C161.7 117.9 128 164 128 188c0 33.1 28.7 60 64 60"
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
                  d="M16.1 33.3C15.4 24 22.7 16 32.1 16H352c9.4 0 16.7 8 15.9 17.3l-22.2 272.8-24.9 11.1c-24.6 10.9-53.2 7.9-75-7.9-32.1-23.3-75.5-23.3-107.5 0-21.8 15.8-50.4 18.9-75 7.9l-24.9-11.1zm23.8 290.9 16.9 7.5c29.8 13.3 64.5 9.6 90.9-9.6s62.3-19.2 88.7 0 61.1 22.9 90.9 9.6l16.9-7.5-11 135c-1.7 20.8-19 36.8-39.9 36.8H90.7c-20.8 0-38.2-16-39.9-36.8l-11-135zM32.1 0C13.4 0-1.3 16 .2 34.6l34.7 426c2.4 29 26.7 51.4 55.8 51.4h202.6c29.2 0 53.4-22.4 55.8-51.4l34.7-426C385.4 16 370.7 0 352 0zM192 224c-27.5 0-48-20.7-48-44 0-2.8 1.1-7.8 4.3-15.2 3-7.1 7.4-15.1 12.5-23.4 10-16.2 22.2-32.6 31.2-44 9 11.5 21.2 27.8 31.2 44 5.1 8.3 9.5 16.4 12.5 23.4 3.2 7.4 4.3 12.4 4.3 15.2 0 23.3-20.5 44-48 44m0 16c35.3 0 64-26.9 64-60 0-24-33.7-70.1-52.2-93.5-6.1-7.7-17.5-7.7-23.6 0C161.7 109.9 128 156 128 180c0 33.1 28.7 60 64 60"
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
                  d="M8.6 10.2C14.6 3.7 23.1 0 32 0h320c8.9 0 17.4 3.7 23.4 10.2s9.1 15.2 8.5 24.1l-28.8 403.4c-3 41.9-37.8 74.3-79.8 74.3H108.7c-42 0-76.8-32.4-79.8-74.3L.1 34.3c-.6-8.9 2.4-17.6 8.5-24.1M66.4 64l26.3 369.1c.6 8.4 7.6 14.9 16 14.9h166.6c8.4 0 15.4-6.5 16-14.9L317.6 64z"
                />
                <path
                  className="aps-icon-foreground"
                  d="m301 297.5-13 6.5c-20.1 10.1-43.9 10.1-64 0s-43.9-10.1-64 0-43.9 10.1-64 0l-13-6.5 9.7 135.6c.6 8.4 7.6 14.9 16 14.9h166.6c8.4 0 15.4-6.5 16-14.9zM256 196c0-24-33.7-70.1-52.2-93.5-6.1-7.7-17.5-7.7-23.6 0C161.7 125.9 128 172 128 196c0 33.1 28.7 60 64 60s64-26.9 64-60"
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
