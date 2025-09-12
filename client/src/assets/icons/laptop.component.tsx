import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const LaptopIcon: React.FC<
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
                  d="M128 32c-35.3 0-64 28.7-64 64v256h64V96h384v256h64V96c0-35.3-28.7-64-64-64zM19.2 384C8.6 384 0 392.6 0 403.2 0 445.6 34.4 480 76.8 480h486.4c42.4 0 76.8-34.4 76.8-76.8 0-10.6-8.6-19.2-19.2-19.2z"
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
                  d="M512 80H128c-8.8 0-16 7.2-16 16v224H64V96c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v224h-48V96c0-8.8-7.2-16-16-16M96 432h448c20.9 0 38.7-13.4 45.3-32H50.7c6.6 18.6 24.4 32 45.3 32M0 384c0-17.7 14.3-32 32-32h576c17.7 0 32 14.3 32 32 0 53-43 96-96 96H96c-53 0-96-43-96-96"
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
                  d="M512 64H128c-17.7 0-32 14.3-32 32v256H64V96c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v256h-32V96c0-17.7-14.3-32-32-32M76.8 448h486.4c20.3 0 37.4-13.5 42.9-32H33.9c5.5 18.5 22.7 32 42.9 32M0 403.2C0 392.6 8.6 384 19.2 384h601.6c10.6 0 19.2 8.6 19.2 19.2 0 42.4-34.4 76.8-76.8 76.8H76.8C34.4 480 0 445.6 0 403.2"
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
                  d="M512 48H128c-26.5 0-48 21.5-48 48v256H64V96c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v256h-16V96c0-26.5-21.5-48-48-48M19.2 400c-1.8 0-3.2 1.4-3.2 3.2 0 33.6 27.2 60.8 60.8 60.8h486.4c33.6 0 60.8-27.2 60.8-60.8 0-1.8-1.4-3.2-3.2-3.2zM0 403.2C0 392.6 8.6 384 19.2 384h601.6c10.6 0 19.2 8.6 19.2 19.2 0 42.4-34.4 76.8-76.8 76.8H76.8C34.4 480 0 445.6 0 403.2"
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
                  d="M128 32c-35.3 0-64 28.7-64 64v256h64V96h384v256h64V96c0-35.3-28.7-64-64-64zM19.2 384C8.6 384 0 392.6 0 403.2 0 445.6 34.4 480 76.8 480h486.4c42.4 0 76.8-34.4 76.8-76.8 0-10.6-8.6-19.2-19.2-19.2z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M128 96h384v256H128z"
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
