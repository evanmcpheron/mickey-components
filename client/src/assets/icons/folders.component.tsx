import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const FoldersIcon: React.FC<
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
                  d="M512 384c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H394.5c-17 0-33.3-6.7-45.3-18.7l-26.5-26.6c-12-12-28.3-18.7-45.3-18.7H160c-35.3 0-64 28.7-64 64v224c0 35.3 28.7 64 64 64zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120v224c0 75.1 60.9 136 136 136h320c13.3 0 24-10.7 24-24s-10.7-24-24-24H136c-48.6 0-88-39.4-88-88z"
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
                  d="M512 336H160c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16h117.5c4.2 0 8.3 1.7 11.3 4.7l26.5 26.5c21 21 49.5 32.8 79.2 32.8H512c8.8 0 16 7.2 16 16v160c0 8.8-7.2 16-16 16m-352 48h352c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H394.5c-17 0-33.3-6.7-45.3-18.7l-26.5-26.6c-12-12-28.3-18.7-45.3-18.7H160c-35.3 0-64 28.7-64 64v224c0 35.3 28.7 64 64 64M48 120c0-13.3-10.7-24-24-24S0 106.7 0 120v224c0 75.1 60.9 136 136 136h320c13.3 0 24-10.7 24-24s-10.7-24-24-24H136c-48.6 0-88-39.4-88-88z"
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
                  d="M512 352H160c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h117.5c8.5 0 16.6 3.4 22.6 9.4l26.5 26.5c18 18 42.4 28.1 67.9 28.1H512c17.7 0 32 14.3 32 32v160c0 17.7-14.3 32-32 32M349.3 77.3l-26.6-26.6c-12-12-28.3-18.7-45.3-18.7H160c-35.3 0-64 28.7-64 64v224c0 35.3 28.7 64 64 64h352c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H394.5c-17 0-33.3-6.7-45.3-18.7zM32 112c0-8.8-7.2-16-16-16s-16 7.2-16 16v240c0 70.7 57.3 128 128 128h336c8.8 0 16-7.2 16-16s-7.2-16-16-16H128c-53 0-96-43-96-96z"
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
                  d="M512 368H160c-26.5 0-48-21.5-48-48V96c0-26.5 21.5-48 48-48h117.5c12.7 0 24.9 5.1 33.9 14.1l26.5 26.5c15 15 35.4 23.4 56.6 23.4H512c26.5 0 48 21.5 48 48v160c0 26.5-21.5 48-48 48m-352 16h352c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H394.5c-17 0-33.3-6.7-45.3-18.7l-26.5-26.6c-12-12-28.3-18.7-45.3-18.7H160c-35.3 0-64 28.7-64 64v224c0 35.3 28.7 64 64 64M0 192v224c0 35.3 28.7 64 64 64h352c35.3 0 64-28.7 64-64h-16c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V192c0-26.5 21.5-48 48-48v-16c-35.3 0-64 28.7-64 64"
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
                  d="M24 96c13.3 0 24 10.7 24 24v224c0 48.6 39.4 88 88 88h320c13.3 0 24 10.7 24 24s-10.7 24-24 24H136C60.9 480 0 419.1 0 344V120c0-13.3 10.7-24 24-24"
                />
                <path
                  className="aps-icon-foreground"
                  d="M160 384h352c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H394.5c-17 0-33.3-6.7-45.3-18.7l-26.5-26.6c-12-12-28.3-18.7-45.3-18.7H160c-35.3 0-64 28.7-64 64v224c0 35.3 28.7 64 64 64"
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
