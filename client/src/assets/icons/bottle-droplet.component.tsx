import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BottleDropletIcon: React.FC<
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
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M96 0C82.7 0 72 10.7 72 24s10.7 24 24 24c4.4 0 8 3.6 8 8v64.9c0 12.2-7.2 23.1-17.2 30.1C53.7 174.1 32 212.5 32 256v192c0 35.3 28.7 64 64 64h128c35.3 0 64-28.7 64-64V256c0-43.5-21.7-81.9-54.8-105-10-7-17.2-17.9-17.2-30.1V56c0-4.4 3.6-8 8-8 13.3 0 24-10.7 24-24S237.3 0 224 0H96m64 382c-26.5 0-48-20.1-48-45 0-16.8 22.1-48.1 36.3-66.4 6-7.8 17.5-7.8 23.5 0 14.1 18.3 36.2 49.6 36.2 66.4 0 24.9-21.5 45-48 45"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M128 48v104.2c0 16-8 31-21.3 39.9C80.9 209.4 64 238.8 64 272v176c0 8.8 7.2 16 16 16h160c8.8 0 16-7.2 16-16V272c0-33.2-16.9-62.6-42.7-79.9-13.3-8.9-21.3-23.8-21.3-39.9V48zm128-24c0 10.4-6.7 19.3-16 22.6v105.6C278.6 178 304 222 304 272v176c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V272c0-49.9 25.4-93.9 64-119.8V46.6C70.7 43.3 64 34.5 64 24 64 10.7 74.7 0 88 0h144c13.3 0 24 10.7 24 24m-96 360c-26.5 0-48-21.5-48-48 0-22.2 23-52 37.2-68.2 5.8-6.7 15.9-6.7 21.7 0C185 284 208 313.8 208 336c0 32-21.5 48-48 48"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M72 16c0-8.8 7.2-16 16-16h144c8.8 0 16 7.2 16 16s-7.2 16-16 16h-8v113.1c38.3 22.1 64 63.5 64 110.9v192c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V256c0-47.4 25.7-88.7 64-110.9V32h-8c-8.8 0-16-7.2-16-16m120 16h-64v113.1c0 11.4-6.1 22-16 27.7-28.8 16.7-48 47.7-48 83.2v192c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32V256c0-35.5-19.2-66.5-48-83.2-9.9-5.7-16-16.3-16-27.7zm0 305c0-5.6-4-17.2-14.6-33.5-5.4-8.3-11.5-16.5-17.4-23.6-5.9 7.2-12 15.3-17.4 23.6C132 319.8 128 331.4 128 337c0 16.6 13.8 31 32 31 11.5 0 19.3-3.4 23.8-7.5 4-3.6 8.2-10.3 8.2-23.5m32 0c0 42-28.7 63-64 63s-64-28.2-64-63c0-31 34.9-73.5 53.2-93.6 5.9-6.5 15.8-6.5 21.6 0C189.1 263.5 224 306 224 337"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M88 8c0-4.4 3.6-8 8-8h128c4.4 0 8 3.6 8 8s-3.6 8-8 8h-8v124.9c42.6 20.8 72 64.5 72 115.1v192c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V256c0-50.6 29.4-94.4 72-115.1V16h-8c-4.4 0-8-3.6-8-8m112 8h-80v124.9c0 6.1-3.5 11.7-9 14.4-37.3 18.1-63 56.4-63 100.7v192c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V256c0-44.3-25.7-82.6-63-100.7-5.5-2.7-9-8.3-9-14.4zm8 321c0-10.5-6.4-25.5-17.2-42.2-10-15.4-22-29.8-30.8-39.5-8.8 9.7-20.9 24.1-30.8 39.5-10.8 16.7-17.2 31.7-17.2 42.2 0 25.7 21.3 47 48 47 14.6 0 26.5-4.3 34.5-11.6 7.8-7.1 13.5-18.3 13.5-35.4m16 0c0 42-28.7 63-64 63s-64-28.2-64-63c0-31 34.9-73.5 53.2-93.6 5.9-6.5 15.8-6.5 21.6 0C189.1 263.5 224 306 224 337"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M104 120.9V48h112v72.9c0 12.2 7.2 23.1 17.2 30.1 33.1 23.1 54.8 61.5 54.8 105v192c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V256c0-43.5 21.7-81.9 54.8-105 10-7 17.2-17.9 17.2-30.1M160 384c26.5 0 48-16 48-48 0-22.2-23-52-37.2-68.2-5.8-6.7-15.9-6.7-21.7 0C135 284 112 313.8 112 336c0 26.5 21.5 48 48 48"
                />
                <path
                  className="aps-icon-foreground"
                  d="M96 0C82.7 0 72 10.7 72 24s10.7 24 24 24h128c13.3 0 24-10.7 24-24S237.3 0 224 0zm64 384c26.5 0 48-16 48-48 0-22.2-23-52-37.2-68.2-5.8-6.7-15.9-6.7-21.7 0C135 284 112 313.8 112 336c0 26.5 21.5 48 48 48"
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
