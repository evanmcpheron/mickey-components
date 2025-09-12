import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SplitIcon: React.FC<
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
                  d="M403.8 34.4c12-5 25.7-2.2 34.9 6.9l64 64c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-64 64c-9.2 9.2-22.9 11.9-34.9 6.9S384 204.8 384 191.8V160h-37.5c-8.5 0-16.6 3.4-22.6 9.4L237.3 256l86.6 86.6c6 6 14.1 9.4 22.6 9.4H384v-32c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l64 64c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-64 64c-9.2 9.2-22.9 11.9-34.9 6.9S384 460.8 384 447.8V416h-37.5c-25.5 0-49.9-10.1-67.9-28.1L178.7 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h146.7l99.9-99.9c18-18 42.4-28.1 67.9-28.1H384V64c0-12.9 7.8-24.6 19.8-29.6"
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
                  d="M391 31c9.4-9.4 24.6-9.4 33.9 0l80 80c9.4 9.4 9.4 24.6 0 33.9l-80 80c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l39-39h-83.5c-10.6 0-20.8 4.2-28.3 11.7L225.9 256l92.3 92.3c7.5 7.5 17.7 11.7 28.3 11.7H430l-39-39c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l80 80c9.4 9.4 9.4 24.6 0 33.9l-80 80c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l39-39h-83.5c-23.3 0-45.7-9.3-62.2-25.8L182.1 280H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h158.1l102.2-102.2c16.5-16.5 38.9-25.8 62.2-25.8H430l-39-39c-9.4-9.4-9.4-24.6 0-33.9z"
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
                  d="M404.7 36.7c6.2-6.2 16.4-6.2 22.6 0l80 80c6.2 6.2 6.2 16.4 0 22.6l-80 80c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l52.7-52.7H339.9c-8.5 0-16.6 3.4-22.6 9.4L214.6 256l102.7 102.6c6 6 14.1 9.4 22.6 9.4h117.5l-52.7-52.7c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l80 80c6.2 6.2 6.2 16.4 0 22.6l-80 80c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l52.7-52.7H339.9c-17 0-33.3-6.7-45.3-18.7L190.1 276.7c-3-3-7.1-4.7-11.3-4.7H16c-8.8 0-16-7.2-16-16s7.2-16 16-16h162.7c4.2 0 8.3-1.7 11.3-4.7l104.6-104.6c12-12 28.3-18.7 45.3-18.7h117.5l-52.7-52.7c-6.2-6.2-6.2-16.4 0-22.6"
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
                  d="M410.3 45.7c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0l88 88c3.1 3.1 3.1 8.2 0 11.3l-88 88c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l74.4-74.4H339.9c-10.6 0-20.8 4.2-28.3 11.7L207 252.3c-1.3 1.3-2.8 2.6-4.3 3.7 1.5 1.1 2.9 2.4 4.3 3.7l104.6 104.6c7.5 7.5 17.7 11.7 28.3 11.7h144.8l-74.3-74.3c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0l88 88c3.1 3.1 3.1 8.2 0 11.3l-88 88c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l74.3-74.4H339.9c-14.9 0-29.1-5.9-39.6-16.4L195.7 271c-4.5-4.5-10.6-7-17-7H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h170.7c6.4 0 12.5-2.5 17-7l104.6-104.6c10.5-10.5 24.7-16.4 39.6-16.4h144.8z"
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
                  d="M165.5 288c8.5 0 16.6 3.4 22.6 9.4l90.5 90.5c18 18 42.4 28.1 67.9 28.1H384v32c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l64-64c6-6 9.4-14.1 9.4-22.6s-3.4-16.6-9.4-22.6l-64-64c-9.2-9.2-22.9-11.9-34.9-6.9S384 307.2 384 320.2v32h-37.5c-8.5 0-16.6-3.4-22.6-9.4L237.3 256l-3.9 3.9c-18 18-42.4 28.1-67.9 28.1"
                />
                <path
                  className="aps-icon-foreground"
                  d="M438.6 41.4c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6V96h-37.4c-25.5 0-49.9 10.1-67.9 28.1l-90.5 90.5c-6 6-14.1 9.4-22.6 9.4H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h133.5c25.5 0 49.9-10.1 67.9-28.1l90.5-90.5c6-6 14.1-9.4 22.6-9.4H384v32c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l64-64c6-6 9.4-14.1 9.4-22.6s-3.4-16.6-9.4-22.6l-64-64z"
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
