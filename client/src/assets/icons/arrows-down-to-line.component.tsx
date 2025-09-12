import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ArrowsDownToLineIcon: React.FC<
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
                  d="M544 416H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h512c17.7 0 32-14.3 32-32s-14.3-32-32-32m22.6-137.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L480 274.7V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v210.7l-41.4-41.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0zm-320-45.3c-12.5-12.5-32.8-12.5-45.3 0L160 274.7V64c0-17.7-14.3-32-32-32S96 46.3 96 64v210.7l-41.4-41.3c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3z"
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
                  d="M552 432H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h528c13.3 0 24-10.7 24-24s-10.7-24-24-24m17-159c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-63 63L472 56c0-13.3-10.7-24-24-24s-24 10.7-24 24v246.1l-63-63c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9L431 377c4.5 4.5 10.6 7 17 7s12.5-2.5 17-7zm-320-34c-9.4-9.4-24.6-9.4-33.9 0l-63 63-.1-246c0-13.3-10.7-24-24-24s-24 10.7-24 24v246.1L41 239c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9L111 377c9.4 9.4 24.6 9.4 33.9 0L249 273c9.4-9.4 9.4-24.6 0-33.9z"
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
                  d="M560 448H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h544c8.8 0 16-7.2 16-16s-7.2-16-16-16m11.3-164.7c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L464 345.4V48c0-8.8-7.2-16-16-16s-16 7.2-16 16v297.4l-84.7-84.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l112 112c6.2 6.2 16.4 6.2 22.6 0zm-320-22.6c-6.2-6.2-16.4-6.2-22.6 0L144 345.4V48c0-8.8-7.2-16-16-16s-16 7.2-16 16v297.4l-84.7-84.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l112 112c6.2 6.2 16.4 6.2 22.6 0l112-112c6.2-6.2 6.2-16.4 0-22.6"
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
                  d="M568 464H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h560c4.4 0 8-3.6 8-8s-3.6-8-8-8m5.7-194.3c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L456 364.7V40c0-4.4-3.6-8-8-8s-8 3.6-8 8v324.7L333.7 258.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l120 120c3.1 3.1 8.2 3.1 11.3 0l120-120zm-320-11.3c-3.1-3.1-8.2-3.1-11.3 0L136 364.7V40c0-4.4-3.6-8-8-8s-8 3.6-8 8v324.7L13.7 258.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l120 120c3.1 3.1 8.2 3.1 11.3 0l120-120c3.1-3.1 3.1-8.2 0-11.3z"
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
                  d="M576 448c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h512c17.7 0 32-14.3 32-32"
                />
                <path
                  className="aps-icon-foreground"
                  d="M521.4 233.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-96 96c-12.5 12.5-32.8 12.5-45.3 0l-96-96c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l41.3 41.3V64c0-17.7 14.3-32 32-32s32 14.3 32 32v210.7l41.4-41.4zm-320 0c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-96 96c-12.5 12.5-32.8 12.5-45.3 0l-96-96c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L96 274.7V64c0-17.7 14.3-32 32-32s32 14.3 32 32v210.7l41.4-41.4z"
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
