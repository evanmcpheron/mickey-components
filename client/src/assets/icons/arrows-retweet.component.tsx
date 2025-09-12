import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ArrowsRetweetIcon: React.FC<
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
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M150.6 73.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L96 173.3V320c0 53 43 96 96 96h112c17.7 0 32-14.3 32-32s-14.3-32-32-32H192c-17.7 0-32-14.3-32-32V173.3l41.4 41.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-96-96zM336 96c-17.7 0-32 14.3-32 32s14.3 32 32 32h112c17.7 0 32 14.3 32 32v146.7l-41.4-41.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L544 338.7V192c0-53-43-96-96-96z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M145 71c-9.4-9.4-24.6-9.4-33.9 0L23 159c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47V328c0 48.6 39.4 88 88 88H328c13.3 0 24-10.7 24-24s-10.7-24-24-24H192c-22.1 0-40-17.9-40-40V145.9l47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9zm167 25c-13.3 0-24 10.7-24 24s10.7 24 24 24h136c22.1 0 40 17.9 40 40v182.1l-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l88 88c9.4 9.4 24.6 9.4 33.9 0l88-88c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47V184c0-48.6-39.4-88-88-88z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M116.7 68.7c6.2-6.2 16.4-6.2 22.6 0l88 88c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L144 118.6V336c0 26.5 21.5 48 48 48h144c8.8 0 16 7.2 16 16s-7.2 16-16 16H192c-44.2 0-80-35.8-80-80V118.6l-60.7 60.7c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6zM528 393.4l60.7-60.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6l-88 88c-6.2 6.2-16.4 6.2-22.6 0l-88-88c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l60.7 60.7V176c0-26.5-21.5-48-48-48H304c-8.8 0-16-7.2-16-16s7.2-16 16-16h144c44.2 0 80 35.8 80 80z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M133.7 66.3c-3.1-3.1-8.2-3.1-11.3 0l-96 96c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L120 91.3V344c0 39.8 32.2 72 72 72h152c4.4 0 8-3.6 8-8s-3.6-8-8-8H192c-30.9 0-56-25.1-56-56V91.3l82.3 82.3c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-96-96zm364.6 379.4c3.1 3.1 8.2 3.1 11.3 0l96-96c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L512 420.7V168c0-39.8-32.2-72-72-72H288c-4.4 0-8 3.6-8 8s3.6 8 8 8h152c30.9 0 56 25.1 56 56v252.7l-82.3-82.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l96 96z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M304 128c0-17.7 14.3-32 32-32h112c53 0 96 43 96 96v146.7l41.4-41.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-96 96c-12.5 12.5-32.8 12.5-45.3 0l-96-96c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l41.3 41.4V192c0-17.7-14.3-32-32-32H336c-17.7 0-32-14.3-32-32"
                />
                <path
                  className="aps-icon-foreground"
                  d="M105.4 73.4c12.5-12.5 32.8-12.5 45.3 0l96 96c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L160 173.3V320c0 17.7 14.3 32 32 32h112c17.7 0 32 14.3 32 32s-14.3 32-32 32H192c-53 0-96-43-96-96V173.3l-41.4 41.3c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l96-96z"
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
