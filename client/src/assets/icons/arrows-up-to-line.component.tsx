import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ArrowsUpToLineIcon: React.FC<
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
                  d="M32 96h512c17.7 0 32-14.3 32-32s-14.3-32-32-32H32C14.3 32 0 46.3 0 64s14.3 32 32 32M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L96 237.3V448c0 17.7 14.3 32 32 32s32-14.3 32-32V237.3l41.4 41.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0zm320 45.3c12.5 12.5 32.8 12.5 45.3 0l41.3-41.4V448c0 17.7 14.3 32 32 32s32-14.3 32-32V237.3l41.4 41.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3"
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
                  d="M24 80h528c13.3 0 24-10.7 24-24s-10.7-24-24-24H24C10.7 32 0 42.7 0 56s10.7 24 24 24M7 239c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l63-63L104 456c0 13.3 10.7 24 24 24s24-10.7 24-24V209.9l63 63c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L145 135c-4.5-4.5-10.6-7-17-7s-12.5 2.5-17 7zm320 34c9.4 9.4 24.6 9.4 33.9 0l63-63 .1 246c0 13.3 10.7 24 24 24s24-10.7 24-24V209.9l63 63c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L465 135c-9.4-9.4-24.6-9.4-33.9 0L327 239c-9.4 9.4-9.4 24.6 0 33.9z"
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
                  d="M16 64h544c8.8 0 16-7.2 16-16s-7.2-16-16-16H16C7.2 32 0 39.2 0 48s7.2 16 16 16M4.7 228.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l84.7-84.7V464c0 8.8 7.2 16 16 16s16-7.2 16-16V166.6l84.7 84.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-112-112c-6.2-6.2-16.4-6.2-22.6 0zm320 22.6c6.2 6.2 16.4 6.2 22.6 0l84.7-84.7V464c0 8.8 7.2 16 16 16s16-7.2 16-16V166.6l84.7 84.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-112-112c-6.2-6.2-16.4-6.2-22.6 0l-112 112c-6.2 6.2-6.2 16.4 0 22.6"
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
                  d="M8 48h560c4.4 0 8-3.6 8-8s-3.6-8-8-8H8c-4.4 0-8 3.6-8 8s3.6 8 8 8M2.3 242.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L120 147.3V472c0 4.4 3.6 8 8 8s8-3.6 8-8V147.3l106.3 106.4c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-120-120c-3.1-3.1-8.2-3.1-11.3 0l-120 120zm320 11.3c3.1 3.1 8.2 3.1 11.3 0L440 147.3V472c0 4.4 3.6 8 8 8s8-3.6 8-8V147.3l106.3 106.4c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-120-120c-3.1-3.1-8.2-3.1-11.3 0l-120 120c-3.1 3.1-3.1 8.2 0 11.3z"
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
                  d="M0 64c0 17.7 14.3 32 32 32h512c17.7 0 32-14.3 32-32s-14.3-32-32-32H32C14.3 32 0 46.3 0 64"
                />
                <path
                  className="aps-icon-foreground"
                  d="M54.6 278.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l96-96c12.5-12.5 32.8-12.5 45.3 0l96 96c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L160 237.3V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V237.3zm320 0c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l96-96c12.5-12.5 32.8-12.5 45.3 0l96 96c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L480 237.3V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V237.3l-41.4 41.4z"
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
