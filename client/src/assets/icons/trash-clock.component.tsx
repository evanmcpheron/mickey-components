import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const TrashClockIcon: React.FC<
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
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M135.2 17.7 128 32H32C14.3 32 0 46.3 0 64s14.3 32 32 32h384c17.7 0 32-14.3 32-32s-14.3-32-32-32h-96l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7M416 128H32l21.2 339c1.6 25.3 22.6 45 47.9 45h229.7c-45.2-31.9-74.8-84.5-74.8-144 0-90.4 68.2-164.9 155.9-174.9zm160 240a144 144 0 1 0-288 0 144 144 0 1 0 288 0m-144-80c8.8 0 16 7.2 16 16v48h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M177.1 48h93.7c2.7 0 5.2 1.3 6.7 3.6l19 28.4h-145l19-28.4c1.5-2.2 4-3.6 6.7-3.6zm177.1 32-36.7-55.1C307.1 9.4 289.6 0 270.9 0h-93.8c-18.7 0-36.2 9.4-46.6 24.9L93.8 80H24C10.7 80 0 90.7 0 104s10.7 24 24 24h11.6l24 324.7c2.5 33.4 30.3 59.3 63.8 59.3h201.2c2 0 3.9-.1 5.8-.3-18.2-12.9-33.8-29.1-45.9-47.7h-161c-8.4 0-15.3-6.5-16-14.8L83.7 128h280.6l-5.9 80.1c15.3-7.1 31.9-12 49.2-14.4l4.9-65.7H424c13.3 0 24-10.7 24-24s-10.7-24-24-24h-69.8M576 368a144 144 0 1 0-288 0 144 144 0 1 0 288 0m-144-80c8.8 0 16 7.2 16 16v48h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M177.7 32h92.5c5.5 0 10.6 2.8 13.6 7.5L299.1 64H148.9l15.3-24.5c2.9-4.7 8.1-7.5 13.6-7.5zm159.2 32L311 22.6A47.98 47.98 0 0 0 270.3 0h-92.6c-16.5 0-31.9 8.5-40.7 22.6L111.1 64H16C7.2 64 0 71.2 0 80s7.2 16 16 16h18.3l25.5 356.6C62.1 486.1 90 512 123.6 512h200.8q3 0 6-.3c-12.7-9-24.2-19.7-34.2-31.7H123.6c-16.8 0-30.7-13-31.9-29.7L66.4 96h315.2L374 201.8c10.5-3.6 21.4-6.3 32.6-8l7-97.8H432c8.8 0 16-7.2 16-16s-7.2-16-16-16h-95.1M432 256a112 112 0 1 1 0 224 112 112 0 1 1 0-224m0 256a144 144 0 1 0 0-288 144 144 0 1 0 0 288m0-224c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-32v-48c0-8.8-7.2-16-16-16"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M177.7 16h92.5c8.3 0 16 4.3 20.4 11.3l23 36.7H134.4l23-36.7c4.4-7 12.1-11.3 20.4-11.3zm-33.9 2.8L115.6 64H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h432c4.4 0 8-3.6 8-8s-3.6-8-8-8H332.4l-28.2-45.2C296.9 7.1 284.1 0 270.3 0h-92.6c-13.8 0-26.6 7.1-33.9 18.8M48 119.3c-.4-4.4-4.2-7.7-8.6-7.3s-7.7 4.2-7.3 8.6l28.3 340c2.4 29 26.7 51.4 55.8 51.4h214.6c-6.9-4.9-13.5-10.2-19.6-16h-195c-20.8 0-38.1-15.9-39.9-36.7zm368 1.3c.4-4.4-2.9-8.3-7.3-8.6s-8.3 2.9-8.6 7.3l-6.4 76.9c5.3-1.2 10.8-2.1 16.3-2.8l6.1-72.7zM432 240a128 128 0 1 1 0 256 128 128 0 1 1 0-256m0 272a144 144 0 1 0 0-288 144 144 0 1 0 0 288m0-224c-4.4 0-8 3.6-8 8v72c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8s-3.6-8-8-8h-48v-64c0-4.4-3.6-8-8-8"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M416 96H32l21.4 370.8c1.5 25.4 22.5 45.2 47.9 45.2h229.5c-45.2-31.9-74.8-84.5-74.8-144 0-89.9 67.4-164 154.4-174.7z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0h120.4c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64s14.3-32 32-32h96zM288 368a144 144 0 1 1 288 0 144 144 0 1 1-288 0m144-80c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-32v-48c0-8.8-7.2-16-16-16"
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
