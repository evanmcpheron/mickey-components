import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const GlassWaterIcon: React.FC<
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
                  d="M32 0C23.1 0 14.6 3.7 8.6 10.2S-.6 25.4.1 34.3l28.8 403.4c3 41.9 37.8 74.3 79.8 74.3h166.6c42 0 76.8-32.4 79.8-74.3l28.8-403.4c.6-8.9-2.4-17.6-8.5-24.1S360.9 0 352 0zm41 156.5L66.4 64h251.2l-6.6 92.5-24.2 12.1c-19.4 9.7-42.2 9.7-61.6 0a74.56 74.56 0 0 0-66.4 0c-19.4 9.7-42.2 9.7-61.6 0z"
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
                  d="M24 0C17.3 0 10.9 2.8 6.3 7.8S-.5 19.4.1 26.1l36.2 420.1C39.5 483.4 70.7 512 108 512h168c37.4 0 68.5-28.6 71.7-65.8l36.2-420.1c.6-6.7-1.7-13.3-6.2-18.3S366.7 0 360 0zm33.6 134.3L50.2 48h283.6l-7.4 86.3-25.2 14c-16.2 9-36.2 7.3-50.7-4.3-34.2-27.4-82.8-27.4-117 0-14.5 11.6-34.5 13.3-50.7 4.3zm5 57.6c32.7 16.6 72.1 12.6 100.9-10.4 16.7-13.3 40.4-13.3 57 0 28.8 23 68.3 27 100.9 10.4l-21.5 250.2c-1.1 12.4-11.5 21.9-23.9 21.9H108c-12.5 0-22.8-9.5-23.9-21.9z"
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
                  d="M32.1 40.7c-.4-4.7 3.3-8.7 8-8.7h303.7c4.7 0 8.4 4 8 8.7l-8.2 97.7-38 19c-19.2 9.6-42.3 7.2-59.1-6.3-31.8-25.5-77.1-25.5-108.9 0-16.8 13.4-39.9 15.9-59.1 6.3l-38.1-19zm11.4 135L64.1 186c30.4 15.2 66.9 11.3 93.4-9.9 20.1-16.1 48.8-16.1 68.9 0 26.5 21.2 63 25.1 93.4 9.9l20.5-10.3-23.2 275c-1.3 16.6-15.1 29.3-31.7 29.3H98.6c-16.6 0-30.5-12.7-31.9-29.3L43.5 175.6zM40.1 0C16.7 0-1.7 20 .2 43.4l34.6 410c2.8 33.1 30.5 58.6 63.8 58.6h186.8c33.3 0 61-25.5 63.8-58.6l34.6-410C385.6 20 367.2 0 343.8 0z"
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
                  d="M16.1 33.3C15.4 24 22.7 16 32.1 16H352c9.4 0 16.7 8 15.9 17.3l-9.3 114.2-37.8 17.2c-24.6 11.2-53.3 8.3-75.2-7.6-31.9-23.2-75.2-23.2-107.1 0-21.9 15.9-50.6 18.8-75.2 7.6l-37.9-17.2zm10.8 132.5 29.7 13.5c29.9 13.6 64.7 10 91.2-9.3 26.3-19.1 62-19.1 88.3 0 26.5 19.3 61.4 22.8 91.2 9.3l29.7-13.5-23.8 293.4c-1.7 20.8-19 36.8-39.9 36.8H90.7c-20.8 0-38.2-16-39.9-36.8zM32.1 0C13.4 0-1.3 16 .2 34.6l34.7 426c2.4 29 26.7 51.4 55.8 51.4h202.6c29.2 0 53.4-22.4 55.8-51.4l34.7-426C385.4 16 370.7 0 352 0z"
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
                  d="m311 156.5-24.2 12.1c-19.4 9.7-42.2 9.7-61.6 0a74.56 74.56 0 0 0-66.4 0c-19.4 9.7-42.2 9.7-61.6 0L73 156.5l19.7 276.6c.6 8.4 7.6 14.9 16 14.9h166.6c8.4 0 15.4-6.5 16-14.9z"
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
