import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const PhoneArrowUpRightIcon: React.FC<
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
                  d="M295 183 430 48h-46c-13.3 0-24-10.7-24-24s10.7-24 24-24h104c13.3 0 24 10.7 24 24v104c0 13.3-10.7 24-24 24s-24-10.7-24-24V81.9L329 217c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7l40.3-49.3c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512 200.6 512 0 311.4 0 64c0-18 12.1-33.8 29.5-38.6z"
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
                  d="M295 183 430 48h-54c-13.3 0-24-10.7-24-24s10.7-24 24-24h112c13.3 0 24 10.7 24 24v112c0 13.3-10.7 24-24 24s-24-10.7-24-24V81.9L329 217c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9zm34 103.6c11.3-13.8 30.3-18.5 46.7-11.4l112 48c17.6 7.5 27.4 26.5 23.4 45.1l-24 112c-4 18.4-20.3 31.6-39.1 31.6-6.1 0-12.2-.1-18.2-.4h-.1c-10-.4-19.8-1.1-29.6-2.2C175.2 485.6 0 295.2 0 64c0-18.9 13.2-35.2 31.6-39.1l112-24c18.7-4 37.6 5.8 45.1 23.4l48 112c7 16.4 2.4 35.4-11.4 46.7l-40.6 33.2c26.7 46 65.1 84.4 111.1 111.1l33.2-40.6zm133.8 78.1-100.4-43-29.4 35.9c-14.9 18.2-40.8 22.9-61.2 11.1-53.3-30.9-97.7-75.3-128.6-128.6-11.8-20.4-7.1-46.3 11.1-61.2l35.9-29.4-43-100.4-99.1 21.4c3.4 215.7 177.7 390 393.4 393.5l21.3-99.2z"
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
                  d="M292.7 196.7 457.4 32H368c-8.8 0-16-7.2-16-16s7.2-16 16-16h128c8.8 0 16 7.2 16 16v128c0 8.8-7.2 16-16 16s-16-7.2-16-16V54.6L315.3 219.3c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6m36.4 90c11.3-13.8 30.3-18.5 46.7-11.4l112 48c17.6 7.5 27.4 26.5 23.4 45.1l-24 112c-4 18.4-20.3 31.6-39.1 31.6-6.1 0-12.2-.1-18.3-.4h-.1c-4.6-.2-9.1-.4-13.7-.8C183.5 494.5 0 300.7 0 64c0-18.9 13.2-35.2 31.6-39.1l112-24c18.7-4 37.6 5.8 45.1 23.4l48 112c7 16.4 2.4 35.4-11.4 46.7l-40.6 33.2c26.7 46 65.1 84.4 111.1 111.1l33.2-40.6zM448 480c3.8 0 7-2.6 7.8-6.3l24-112c.8-3.7-1.2-7.5-4.7-9l-112-48c-3.3-1.4-7.1-.5-9.3 2.3l-33.2 40.6c-9.9 12.1-27.2 15.3-40.8 7.4-50.9-29.5-93.3-71.9-122.7-122.7-7.9-13.6-4.7-30.9 7.4-40.8l40.6-33.2c2.8-2.3 3.7-6.1 2.3-9.3l-48-112c-1.5-3.5-5.3-5.5-9-4.7l-112 24C34.6 57 32 60.2 32 64c0 229.6 186.1 415.8 415.7 416z"
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
                  d="M290.3 210.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L496 27.3V152c0 4.4 3.6 8 8 8s8-3.6 8-8V8c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8s3.6 8 8 8h124.7zm7.5 172.1c6.6 3.1 14.6 1.3 19.2-4.3l40.4-49.3c6.7-8.2 18-11 27.8-7l96 40c11.1 4.6 17.1 16.8 13.9 28.5l-24 88c-2.8 10.5-12.3 17.7-23.1 17.7C209.4 496 16 302.6 16 64c0-10.8 7.2-20.3 17.7-23.2l88-24c11.6-3.2 23.8 2.8 28.5 13.9l40 96c4.1 9.8 1.3 21.1-7 27.8l-49.3 40.4c-5.7 4.7-7.5 12.6-4.3 19.2 34.8 73.8 94.5 133.5 168.3 168.3zm47.2-63.7L304.7 368c-70.5-33.3-127.5-90.3-160.7-160.7l49.3-40.3c13.7-11.2 18.4-30 11.6-46.3l-40-96c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64c0 247.4 200.6 448 448 448 18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6z"
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
                  d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64c0 247.4 200.6 448 448 448 18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368c-70.4-33.3-127.4-90.3-160.7-160.7l49.3-40.3c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M295 217c-9.4-9.4-9.4-24.6 0-33.9l135-135h-46c-13.3 0-24-10.7-24-24s10.7-24 24-24h104c13.3 0 24 10.7 24 24V128c0 13.3-10.7 24-24 24s-24-10.7-24-24V81.9L329 217c-9.4 9.4-24.6 9.4-33.9 0z"
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
