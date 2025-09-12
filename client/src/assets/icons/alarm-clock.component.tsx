import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const AlarmClockIcon: React.FC<
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
                  d="M160 25.4C143 9.6 120.2 0 95.2 0 42.6 0 0 42.6 0 95.2c0 18.8 5.5 36.3 14.9 51.1zM256 512c50.3 0 96.8-16.6 134.2-44.6l35.2 35.2c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-35.2-35.2c28-37.4 44.6-83.8 44.6-134.2C480 164.3 379.7 64 256 64S32 164.3 32 288c0 50.3 16.6 96.8 44.6 134.2l-35.2 35.2c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l35.2-35.2c37.4 28 83.8 44.6 134.1 44.6zm241.1-365.6c9.4-14.8 14.9-32.4 14.9-51.2C512 42.6 469.4 0 416.8 0c-25 0-47.8 9.6-64.8 25.4zM280 184v94.1l41 41c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-4.5-4.5-7-10.6-7-17V184c0-13.3 10.7-24 24-24s24 10.7 24 24z"
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
                  d="M160 25.4C143 9.6 120.2 0 95.2 0 42.6 0 0 42.6 0 95.2c0 18.8 5.5 36.3 14.9 51.1zm96 86.6a176 176 0 1 1 0 352 176 176 0 1 1 0-352m0 400c53.2 0 102.1-18.6 140.5-49.5L439 505c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-42.5-42.5c31-38.4 49.5-87.3 49.5-140.5C480 164.3 379.7 64 256 64S32 164.3 32 288c0 53.2 18.6 102.1 49.5 140.5L39 471c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l42.5-42.5c38.4 31 87.3 49.5 140.5 49.5zm241.1-365.6c9.4-14.8 14.9-32.4 14.9-51.2C512 42.6 469.4 0 416.8 0c-25 0-47.8 9.6-64.8 25.4zM280 184c0-13.3-10.7-24-24-24s-24 10.7-24 24v104c0 6.4 2.5 12.5 7 17l48 48c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-41-41V184z"
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
                  d="M92.2 0C41.3 0 0 41.3 0 92.2c0 18.2 5.3 35.2 14.4 49.5 4.7 7.5 14.6 9.6 22.1 4.9s9.6-14.6 4.9-22.1c-5.9-9.3-9.4-20.4-9.4-32.3C32 58.9 58.9 32 92.2 32c15.8 0 30.2 6.1 40.9 16.1 6.5 6 16.6 5.6 22.6-.8s5.6-16.6-.8-22.6C138.4 9.3 116.4 0 92.2 0m264.9 24.6c-6.5 6-6.9 16.1-.8 22.6s16.1 6.9 22.6.8c10.7-9.9 25.1-16 40.9-16C453 32 480 58.9 480 92.2c0 11.9-3.4 23-9.4 32.3-4.7 7.5-2.6 17.3 4.9 22.1s17.3 2.6 22.1-4.9c9.1-14.3 14.4-31.3 14.4-49.5C512 41.3 470.7 0 419.8 0c-24.2 0-46.3 9.3-62.7 24.6M59.3 507.3l50-50C148.6 491.4 199.9 512 256 512s107.4-20.6 146.7-54.7l50 50c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-50-50C459.4 395.4 480 344.1 480 288c0-123.7-100.3-224-224-224S32 164.3 32 288c0 56.1 20.6 107.4 54.7 146.7l-50 50c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0M256 96a192 192 0 1 1 0 384 192 192 0 1 1 0-384m16 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v128c0 5 2.4 9.8 6.4 12.8l64 48c7.1 5.3 17.1 3.9 22.4-3.2s3.9-17.1-3.2-22.4L272 296z"
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
                  d="M93.7 0C42 0 0 42 0 93.7c0 18.5 5.4 35.8 14.6 50.3 2.4 3.7 7.3 4.8 11 2.4s4.8-7.3 2.4-11c-7.6-12-12-26.3-12-41.7C16 50.8 50.8 16 93.7 16c20.4 0 39 7.9 52.8 20.7 3.2 3 8.3 2.8 11.3-.4s2.8-8.3-.4-11.3C140.7 9.5 118.3 0 93.7 0m-48 509.7 57.7-57.7c40 37.2 93.6 60 152.6 60s112.6-22.8 152.6-60.1l57.7 57.7c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-57.7-57.7C457.2 400.6 480 347 480 288c0-123.7-100.3-224-224-224S32 164.3 32 288c0 59 22.8 112.6 60.1 152.6l-57.8 57.7c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0zM256 80a208 208 0 1 1 0 416 208 208 0 1 1 0-416m8 88c0-4.4-3.6-8-8-8s-8 3.6-8 8v136c0 2.4 1.1 4.7 3 6.2l80 64c3.4 2.8 8.5 2.2 11.2-1.2s2.2-8.5-1.2-11.2l-77-61.6zm90.6-143c-3.2 3-3.4 8.1-.4 11.3s8.1 3.4 11.3.4C379.3 23.9 397.9 16 418.3 16c42.9 0 77.7 34.8 77.7 77.7 0 15.4-4.4 29.7-12.1 41.7-2.4 3.7-1.3 8.7 2.4 11s8.7 1.3 11-2.4c9.3-14.5 14.6-31.8 14.6-50.3C512 42 470 0 418.3 0c-24.6 0-47 9.5-63.7 25"
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
                  d="M256 512c50.3 0 96.8-16.6 134.2-44.6l35.2 35.2c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-35.2-35.2c28-37.4 44.6-83.8 44.6-134.2C480 164.3 379.7 64 256 64S32 164.3 32 288c0 50.3 16.6 96.8 44.6 134.2l-35.2 35.2c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l35.2-35.2c37.4 28 83.8 44.6 134.1 44.6zm24-328v94.1l41 41c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-4.5-4.5-7-10.6-7-17V184c0-13.3 10.7-24 24-24s24 10.7 24 24z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M14.9 146.4 160 25.4C143 9.6 120.2 0 95.2 0 42.6 0 0 42.6 0 95.2c0 18.8 5.5 36.3 14.9 51.1zM256 160c-13.3 0-24 10.7-24 24v104c0 6.4 2.5 12.5 7 17l48 48c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-41-41V184c0-13.3-10.7-24-24-24zm96-134.6 145.1 121c9.4-14.8 14.9-32.4 14.9-51.2C512 42.6 469.4 0 416.8 0c-25 0-47.8 9.6-64.8 25.4"
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
