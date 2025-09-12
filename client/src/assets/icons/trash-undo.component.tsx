import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const TrashUndoIcon: React.FC<
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
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M135.2 17.7 128 32H32C14.3 32 0 46.3 0 64s14.3 32 32 32h384c17.7 0 32-14.3 32-32s-14.3-32-32-32h-96l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7M416 128H32l21.2 339c1.6 25.3 22.6 45 47.9 45h245.8c25.3 0 46.3-19.7 47.9-45zm-198.2 71.9c8.9 9.9 8.1 25-1.8 33.9L182.5 264H240c48.6 0 88 39.4 88 88v40c0 13.3-10.7 24-24 24s-24-10.7-24-24v-40c0-22.1-17.9-40-40-40h-57.5l33.5 30.2c9.9 8.9 10.7 24 1.8 33.9s-24 10.7-33.9 1.8l-80-72c-5.1-4.6-7.9-11-7.9-17.8s2.9-13.3 7.9-17.8l80-72c9.9-8.9 25-8.1 33.9 1.8z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M177.1 48h93.7c2.7 0 5.2 1.3 6.7 3.6l19 28.4h-145l19-28.4c1.5-2.2 4-3.6 6.7-3.6zm177.1 32-36.7-55.1C307.1 9.4 289.6 0 270.9 0h-93.8c-18.7 0-36.2 9.4-46.6 24.9L93.8 80H24C10.7 80 0 90.7 0 104s10.7 24 24 24h11.6l24 324.7c2.5 33.4 30.3 59.3 63.8 59.3h201.2c33.5 0 61.3-25.9 63.8-59.3l24-324.7H424c13.3 0 24-10.7 24-24s-10.7-24-24-24h-69.8m10.1 48-23.8 321.2c-.6 8.4-7.6 14.8-16 14.8H123.4c-8.4 0-15.3-6.5-16-14.8L83.7 128zm-141.4 66.7c-7.3-8.3-20-9-28.2-1.7l-72 64c-4.3 3.8-6.7 9.2-6.7 14.9s2.4 11.2 6.7 14.9l72 64c8.3 7.3 20.9 6.6 28.2-1.7s6.6-20.9-1.7-28.2L188.6 292H240c24.3 0 44 19.7 44 44v24c0 11 9 20 20 20s20-9 20-20v-24c0-46.4-37.6-84-84-84h-51.4l32.7-29.1c8.3-7.3 9-20 1.7-28.2z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M177.7 32h92.5c5.5 0 10.6 2.8 13.6 7.5L299.1 64H148.9l15.3-24.5c2.9-4.7 8.1-7.5 13.6-7.5zm159.2 32L311 22.6A47.98 47.98 0 0 0 270.3 0h-92.6c-16.5 0-31.9 8.5-40.7 22.6L111.1 64H16C7.2 64 0 71.2 0 80s7.2 16 16 16h18.3l25.5 356.6C62.1 486.1 90 512 123.6 512h200.8c33.6 0 61.4-25.9 63.8-59.4L413.7 96H432c8.8 0 16-7.2 16-16s-7.2-16-16-16h-95.1m44.8 32-25.4 354.3c-1.2 16.7-15.1 29.7-31.9 29.7H123.6c-16.8 0-30.7-13-31.9-29.7L66.4 96h315.2zm-161.8 93.3c-5.9-6.6-16-7.1-22.6-1.2l-80 72c-3.4 3-5.3 7.4-5.3 11.9s1.9 8.9 5.3 11.9l80 72c6.6 5.9 16.7 5.4 22.6-1.2s5.4-16.7-1.2-22.6l-49-44.1H240c26.5 0 48 21.5 48 48v40c0 8.8 7.2 16 16 16s16-7.2 16-16v-40c0-44.2-35.8-80-80-80h-70.3l49-44.1c6.6-5.9 7.1-16 1.2-22.6"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M177.7 16h92.5c8.3 0 16 4.3 20.4 11.3l23 36.7H134.4l23-36.7c4.4-7 12.1-11.3 20.4-11.3zm-33.9 2.8L115.6 64H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h432c4.4 0 8-3.6 8-8s-3.6-8-8-8H332.4l-28.2-45.2C296.9 7.1 284.1 0 270.3 0h-92.6c-13.8 0-26.6 7.1-33.9 18.8M48 119.3c-.4-4.4-4.2-7.7-8.6-7.3s-7.7 4.2-7.3 8.6l28.3 340c2.4 29 26.7 51.4 55.8 51.4h215.6c29.1 0 53.4-22.3 55.8-51.4l28.3-340c.4-4.4-2.9-8.3-7.3-8.6s-8.3 2.9-8.6 7.3l-28.3 340c-1.7 20.8-19.1 36.7-39.9 36.7H116.2c-20.8 0-38.1-15.9-39.9-36.7zm165.9 67.3c-3-3.3-8-3.5-11.3-.5l-88 80c-1.7 1.5-2.6 3.7-2.6 5.9s1 4.4 2.6 5.9l88 80c3.3 3 8.3 2.7 11.3-.5s2.7-8.3-.5-11.3L140.7 280H248c30.9 0 56 25.1 56 56v40c0 4.4 3.6 8 8 8s8-3.6 8-8v-40c0-39.8-32.2-72-72-72H140.7l72.7-66.1c3.3-3 3.5-8 .5-11.3"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M32 96h384l-21.4 370.8c-1.5 25.4-22.5 45.2-47.9 45.2H101.3c-25.4 0-46.5-19.8-47.9-45.2zm185.8 71.9c-8.9-9.9-24-10.7-33.9-1.8l-80 72c-5.1 4.6-7.9 11-7.9 17.8s2.9 13.3 7.9 17.8l80 72c9.9 8.9 25 8.1 33.9-1.8s8.1-25-1.8-33.9l-33.5-30H240c22.1 0 40 17.9 40 40v40c0 13.3 10.7 24 24 24s24-10.7 24-24v-40c0-48.6-39.4-88-88-88h-57.5l33.5-30.2c9.9-8.9 10.7-24 1.8-33.9"
                />
                <path
                  className="aps-icon-foreground"
                  d="M163.8 0h120.4c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64s14.3-32 32-32h96l7.2-14.3C140.6 6.8 151.7 0 163.8 0m54.1 167.9c8.9 9.9 8.1 25-1.8 33.9L182.5 232H240c48.6 0 88 39.4 88 88v40c0 13.3-10.7 24-24 24s-24-10.7-24-24v-40c0-22.1-17.9-40-40-40h-57.5l33.5 30.2c9.9 8.9 10.7 24 1.8 33.9s-24 10.7-33.9 1.8l-80-72c-5.1-4.6-7.9-11-7.9-17.8s2.9-13.3 7.9-17.8l80-72c9.9-8.9 25-8.1 33.9 1.8z"
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
