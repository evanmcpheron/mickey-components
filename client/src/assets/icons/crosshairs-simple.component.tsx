import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CrosshairsSimpleIcon: React.FC<
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
                  d="M445.3 224H384c-17.7 0-32 14.3-32 32s14.3 32 32 32h61.3c-13.4 80.4-76.9 143.9-157.3 157.3V384c0-17.7-14.3-32-32-32s-32 14.3-32 32v61.3C143.6 431.9 80.1 368.4 66.7 288H128c17.7 0 32-14.3 32-32s-14.3-32-32-32H66.7C80.1 143.6 143.6 80.1 224 66.7V128c0 17.7 14.3 32 32 32s32-14.3 32-32V66.7c80.4 13.4 143.9 76.9 157.3 157.3M0 256a256 256 0 1 0 512 0 256 256 0 1 0-512 0"
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
                  d="M462.6 232H392c-13.3 0-24 10.7-24 24s10.7 24 24 24h70.6c-11 95.7-86.9 171.6-182.6 182.6V392c0-13.3-10.7-24-24-24s-24 10.7-24 24v70.6c-95.7-11-171.6-86.9-182.6-182.6H120c13.3 0 24-10.7 24-24s-10.7-24-24-24H49.4c11-95.7 86.9-171.6 182.6-182.6V120c0 13.3 10.7 24 24 24s24-10.7 24-24V49.4c95.7 11 171.6 86.9 182.6 182.6M0 256a256 256 0 1 0 512 0 256 256 0 1 0-512 0"
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
                  d="M479.4 240H384c-8.8 0-16 7.2-16 16s7.2 16 16 16h95.4C471.6 383 383 471.6 272 479.4V384c0-8.8-7.2-16-16-16s-16 7.2-16 16v95.4C129 471.6 40.4 383 32.6 272H128c8.8 0 16-7.2 16-16s-7.2-16-16-16H32.6C40.4 129 129 40.4 240 32.6V128c0 8.8 7.2 16 16 16s16-7.2 16-16V32.6C383 40.4 471.6 129 479.4 240M0 256a256 256 0 1 0 512 0 256 256 0 1 0-512 0"
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
                  d="M495.9 248H392c-4.4 0-8 3.6-8 8s3.6 8 8 8h103.9C491.7 390.2 390.2 491.7 264 495.9V392c0-4.4-3.6-8-8-8s-8 3.6-8 8v103.9C121.8 491.7 20.3 390.2 16.1 264H120c4.4 0 8-3.6 8-8s-3.6-8-8-8H16.1C20.3 121.8 121.8 20.3 248 16.1V120c0 4.4 3.6 8 8 8s8-3.6 8-8V16.1C390.2 20.3 491.7 121.8 495.9 248M0 256a256 256 0 1 0 512 0 256 256 0 1 0-512 0"
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
                  d="M256 64a192 192 0 1 1 0 384 192 192 0 1 1 0-384m0 448a256 256 0 1 0 0-512 256 256 0 1 0 0 512"
                />
                <path
                  className="aps-icon-foreground"
                  d="M288 66.7C277.6 65 266.9 64 256 64s-21.6.9-32 2.7V128c0 17.7 14.3 32 32 32s32-14.3 32-32zM66.7 288H128c17.7 0 32-14.3 32-32s-14.3-32-32-32H66.7C65 234.4 64 245.1 64 256s.9 21.6 2.7 32M224 445.3c10.4 1.7 21.1 2.7 32 2.7s21.6-.9 32-2.7V384c0-17.7-14.3-32-32-32s-32 14.3-32 32zM445.3 224H384c-17.7 0-32 14.3-32 32s14.3 32 32 32h61.3c1.7-10.4 2.7-21.1 2.7-32s-.9-21.6-2.7-32"
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
