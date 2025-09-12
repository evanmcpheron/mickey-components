import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const AlarmExclamationIcon: React.FC<
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
                  d="M14.9 146.4C5.5 131.6 0 114 0 95.2 0 42.6 42.6 0 95.2 0c25 0 47.8 9.6 64.8 25.4zm375.3 321c-37.4 28-83.9 44.6-134.2 44.6s-96.8-16.6-134.1-44.6l-35.3 35.2c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l35.2-35.2C48.6 384.8 32 338.3 32 288 32 164.3 132.3 64 256 64s224 100.3 224 224c0 50.3-16.6 96.8-44.6 134.2l35.2 35.2c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-35.2-35.2zM352 25.4C369 9.6 391.8 0 416.8 0 469.4 0 512 42.6 512 95.2c0 18.8-5.5 36.3-14.9 51.1zM288 384a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-8-200c0-13.3-10.7-24-24-24s-24 10.7-24 24v112c0 13.3 10.7 24 24 24s24-10.7 24-24z"
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
                  d="M14.9 146.4C5.5 131.6 0 114 0 95.2 0 42.6 42.6 0 95.2 0c25 0 47.8 9.6 64.8 25.4zM432 288a176 176 0 1 0-352 0 176 176 0 1 0 352 0m-35.5 174.5C358.1 493.4 309.2 512 256 512s-102.1-18.6-140.5-49.5L73 505c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l42.5-42.5C50.6 390.1 32 341.2 32 288 32 164.3 132.3 64 256 64s224 100.3 224 224c0 53.2-18.6 102.1-49.5 140.5L473 471c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-42.5-42.5zM352 25.4C369 9.6 391.8 0 416.8 0 469.4 0 512 42.6 512 95.2c0 18.8-5.5 36.3-14.9 51.1zM256 352a32 32 0 1 1 0 64 32 32 0 1 1 0-64m24-168v112c0 13.3-10.7 24-24 24s-24-10.7-24-24V184c0-13.3 10.7-24 24-24s24 10.7 24 24"
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
                  d="M92.2 0C41.3 0 0 41.3 0 92.2c0 18.2 5.3 35.2 14.4 49.5 4.7 7.5 14.6 9.6 22.1 4.9s9.6-14.6 4.9-22.1c-5.9-9.3-9.4-20.4-9.4-32.3C32 58.9 58.9 32 92.2 32c15.8 0 30.2 6.1 40.9 16.1 6.5 6 16.6 5.6 22.6-.8s5.6-16.6-.8-22.6C138.4 9.3 116.4 0 92.2 0m264.9 24.6c-6.5 6-6.9 16.1-.8 22.6s16.1 6.9 22.6.8c10.7-9.9 25.1-16 40.9-16C453 32 480 58.9 480 92.2c0 11.9-3.4 23-9.4 32.3-4.7 7.5-2.6 17.3 4.9 22.1s17.3 2.6 22.1-4.9c9.1-14.3 14.4-31.3 14.4-49.5C512 41.3 470.7 0 419.8 0c-24.2 0-46.3 9.3-62.7 24.6M59.3 507.3l50-50C148.6 491.4 199.9 512 256 512s107.4-20.6 146.7-54.7l50 50c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-50-50C459.4 395.4 480 344.1 480 288c0-123.7-100.3-224-224-224S32 164.3 32 288c0 56.1 20.6 107.4 54.7 146.7l-50 50c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0M256 96a192 192 0 1 1 0 384 192 192 0 1 1 0-384m0 64c-8.8 0-16 7.2-16 16v144c0 8.8 7.2 16 16 16s16-7.2 16-16V176c0-8.8-7.2-16-16-16m24 224a24 24 0 1 0-48 0 24 24 0 1 0 48 0"
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
                  d="M93.7 0C42 0 0 42 0 93.7c0 18.5 5.4 35.8 14.6 50.3 2.4 3.7 7.3 4.8 11 2.4s4.8-7.3 2.4-11c-7.6-12-12-26.3-12-41.7C16 50.8 50.8 16 93.7 16c20.4 0 39 7.9 52.8 20.7 3.2 3 8.3 2.8 11.3-.4s2.8-8.3-.4-11.3C140.7 9.5 118.3 0 93.7 0m-48 509.7 57.7-57.7c40 37.2 93.6 60 152.6 60s112.6-22.8 152.6-60.1l57.7 57.7c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-57.7-57.7C457.2 400.6 480 347 480 288c0-123.7-100.3-224-224-224S32 164.3 32 288c0 59 22.8 112.6 60.1 152.6l-57.8 57.7c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0zM256 80a208 208 0 1 1 0 416 208 208 0 1 1 0-416M418.3 0c-24.6 0-47 9.5-63.7 25-3.2 3-3.4 8.1-.4 11.3s8.1 3.4 11.3.4C379.3 23.9 397.9 16 418.3 16c42.9 0 77.7 34.8 77.7 77.7 0 15.4-4.4 29.7-12.1 41.7-2.4 3.7-1.3 8.7 2.4 11s8.7 1.3 11-2.4c9.3-14.5 14.6-31.8 14.6-50.3C512 42 470 0 418.3 0M272 384a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-8-216c0-4.4-3.6-8-8-8s-8 3.6-8 8v160c0 4.4 3.6 8 8 8s8-3.6 8-8z"
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
                  d="M390.2 467.4c-37.4 28-83.9 44.6-134.2 44.6s-96.8-16.6-134.1-44.6l-35.3 35.2c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l35.2-35.2C48.6 384.8 32 338.3 32 288 32 164.3 132.3 64 256 64s224 100.3 224 224c0 50.3-16.6 96.8-44.6 134.2l35.2 35.2c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-35.2-35.2zM288 384a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-8-200c0-13.3-10.7-24-24-24s-24 10.7-24 24v112c0 13.3 10.7 24 24 24s24-10.7 24-24z"
                />
                <path
                  className="aps-icon-foreground"
                  d="m160 25.4-145.1 121C5.5 131.6 0 114 0 95.2 0 42.6 42.6 0 95.2 0c25 0 47.8 9.6 64.8 25.4m192 0C369 9.6 391.8 0 416.8 0 469.4 0 512 42.6 512 95.2c0 18.8-5.5 36.3-14.9 51.1zM224 384a32 32 0 1 1 64 0 32 32 0 1 1-64 0m56-200v112c0 13.3-10.7 24-24 24s-24-10.7-24-24V184c0-13.3 10.7-24 24-24s24 10.7 24 24"
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
