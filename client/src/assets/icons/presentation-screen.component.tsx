import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const PresentationScreenIcon: React.FC<
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
                  d="M32 0C14.3 0 0 14.3 0 32s14.3 32 32 32v224c0 35.3 28.7 64 64 64h160v34.7l-70.6 70.6c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l57.3-57.3 57.4 57.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L320 386.7V352h160c35.3 0 64-28.7 64-64V64c17.7 0 32-14.3 32-32S561.7 0 544 0H32m64 64h384v224H96z"
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
                  d="M24 0C10.7 0 0 10.7 0 24s10.7 24 24 24h528c13.3 0 24-10.7 24-24S565.3 0 552 0zm8 80v216c0 30.9 25.1 56 56 56h176v46.1l-73 73c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l63-63 63 63c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-73-73V352H488c30.9 0 56-25.1 56-56V80h-48v216c0 4.4-3.6 8-8 8H88c-4.4 0-8-3.6-8-8V80z"
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
                  d="M16 0C7.2 0 0 7.2 0 16s7.2 16 16 16h544c8.8 0 16-7.2 16-16s-7.2-16-16-16zm16 64v224c0 35.3 28.7 64 64 64h176v41.4l-91.3 91.3c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l84.7-84.7 84.7 84.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L304 393.4V352h176c35.3 0 64-28.7 64-64V64h-32v224c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V64z"
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
                  d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8h560c4.4 0 8-3.6 8-8s-3.6-8-8-8zm24 48v240c0 35.3 28.7 64 64 64h184v52.7l-93.7 93.7c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l90.4-90.4 90.3 90.3c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L296 404.7V352h184c35.3 0 64-28.7 64-64V48h-16v240c0 26.5-21.5 48-48 48H96c-26.5 0-48-21.5-48-48V48z"
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
                  d="M32 288V64h64v224h384V64h64v224c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64"
                />
                <path
                  className="aps-icon-foreground"
                  d="M0 32C0 14.3 14.3 0 32 0h512c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 64 0 49.7 0 32m256 354.7V352h64v34.7l70.6 70.6c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L288 445.3l-57.4 57.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3z"
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
