import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BrowsersIcon: React.FC<
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
                  d="M160 0c-35.3 0-64 28.7-64 64v288c0 35.3 28.7 64 64 64h352c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm120 72h208c13.3 0 24 10.7 24 24s-10.7 24-24 24H280c-13.3 0-24-10.7-24-24s10.7-24 24-24m-56 24a32 32 0 1 1-64 0 32 32 0 1 1 64 0M48 120c0-13.3-10.7-24-24-24S0 106.7 0 120v256c0 75.1 60.9 136 136 136h320c13.3 0 24-10.7 24-24s-10.7-24-24-24H136c-48.6 0-88-39.4-88-88z"
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
                  d="M144 352V128h384v224c0 8.8-7.2 16-16 16H160c-8.8 0-16-7.2-16-16M160 0c-35.3 0-64 28.7-64 64v288c0 35.3 28.7 64 64 64h352c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120v256c0 75.1 60.9 136 136 136h320c13.3 0 24-10.7 24-24s-10.7-24-24-24H136c-48.6 0-88-39.4-88-88z"
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
                  d="M512 32c17.7 0 32 14.3 32 32v32H256V32zm-352 0h64v64h-96V64c0-17.7 14.3-32 32-32m-32 320V128h416v224c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32M160 0c-35.3 0-64 28.7-64 64v288c0 35.3 28.7 64 64 64h352c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zM32 112c0-8.8-7.2-16-16-16s-16 7.2-16 16v272c0 70.7 57.3 128 128 128h336c8.8 0 16-7.2 16-16s-7.2-16-16-16H128c-53 0-96-43-96-96z"
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
                  d="M512 16c26.5 0 48 21.5 48 48v32H200V16zm-352 0h24v80h-72V64c0-26.5 21.5-48 48-48m-48 336V112h448v240c0 26.5-21.5 48-48 48H160c-26.5 0-48-21.5-48-48M160 0c-35.3 0-64 28.7-64 64v288c0 35.3 28.7 64 64 64h352c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zM16 104c0-4.4-3.6-8-8-8s-8 3.6-8 8v288c0 66.3 53.7 120 120 120h352c4.4 0 8-3.6 8-8s-3.6-8-8-8H120c-57.4 0-104-46.6-104-104z"
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
                  d="M192 64a32 32 0 1 0 0 64 32 32 0 1 0 0-64m320 352c35.3 0 64-28.7 64-64V192H96v160c0 35.3 28.7 64 64 64z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M160 0c-35.3 0-64 28.7-64 64v128h480V64c0-35.3-28.7-64-64-64zm32 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64m64-32c0-13.3 10.7-24 24-24h208c13.3 0 24 10.7 24 24s-10.7 24-24 24H280c-13.3 0-24-10.7-24-24M48 120c0-13.3-10.7-24-24-24S0 106.7 0 120v256c0 75.1 60.9 136 136 136h320c13.3 0 24-10.7 24-24s-10.7-24-24-24H136c-48.6 0-88-39.4-88-88z"
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
