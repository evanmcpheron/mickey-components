import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const TvRetroIcon: React.FC<
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
                  d="M169 7c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l55 55H80C35.8 96 0 131.8 0 176v256c0 44.2 35.8 80 80 80h352c44.2 0 80-35.8 80-80V176c0-44.2-35.8-80-80-80H321.9l55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-87 87zm255 225a24 24 0 1 1 48 0 24 24 0 1 1-48 0m24 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48M64 224c0-35.3 28.7-64 64-64h192c35.3 0 64 28.7 64 64v160c0 35.3-28.7 64-64 64H128c-35.3 0-64-28.7-64-64z"
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
                  d="M135 7c9.4-9.4 24.6-9.4 33.9 0l87 87L343 7c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55H432c44.2 0 80 35.8 80 80V432c0 44.2-35.8 80-80 80H80c-44.2 0-80-35.8-80-80V176c0-44.2 35.8-80 80-80h110.1L135 41c-9.4-9.4-9.4-24.6 0-33.9zM80 144c-17.7 0-32 14.3-32 32v256c0 17.7 14.3 32 32 32h352c17.7 0 32-14.3 32-32V176c0-17.7-14.3-32-32-32zm336 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48m-24 104a24 24 0 1 1 48 0 24 24 0 1 1-48 0M144 192h160c26.5 0 48 21.5 48 48v128c0 26.5-21.5 48-48 48H144c-26.5 0-48-21.5-48-48V240c0-26.5 21.5-48 48-48"
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
                  d="M154.4 3.9c-6.7-5.8-16.8-5-22.6 1.7s-5 16.8 1.7 22.6L212.7 96H80c-44.2 0-80 35.8-80 80v256c0 44.2 35.8 80 80 80h352c44.2 0 80-35.8 80-80V176c0-44.2-35.8-80-80-80H299.3l79.2-67.9c6.7-5.8 7.5-15.9 1.7-22.6S364.4-2 357.6 3.8L256 90.9zM256 128h176c26.5 0 48 21.5 48 48v256c0 26.5-21.5 48-48 48H80c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48zm80 64c8.8 0 16 7.2 16 16v192c0 8.8-7.2 16-16 16H112c-8.8 0-16-7.2-16-16V208c0-8.8 7.2-16 16-16zm-224-32c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V208c0-26.5-21.5-48-48-48zm320 72a24 24 0 1 0 0-48 24 24 0 1 0 0 48m24 40a24 24 0 1 0-48 0 24 24 0 1 0 48 0"
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
                  d="M141 1.8C137.5-1 132.5-.4 129.8 3s-2.2 8.5 1.2 11.2L233.2 96H80c-44.2 0-80 35.8-80 80v256c0 44.2 35.8 80 80 80h352c44.2 0 80-35.8 80-80V176c0-44.2-35.8-80-80-80H278.8L381 14.2c3.4-2.8 4-7.8 1.2-11.2s-7.8-4-11.2-1.2l-115 92zM256 112h176c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V176c0-35.3 28.7-64 64-64zm80 64c17.7 0 32 14.3 32 32v192c0 17.7-14.3 32-32 32H112c-17.7 0-32-14.3-32-32V208c0-17.7 14.3-32 32-32zm-224-16c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V208c0-26.5-21.5-48-48-48zm312 48a8 8 0 1 1 16 0 8 8 0 1 1-16 0m32 0a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-24 56a8 8 0 1 1 0 16 8 8 0 1 1 0-16m0 32a24 24 0 1 0 0-48 24 24 0 1 0 0 48"
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
                  d="M169 7c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l55 55H80C35.8 96 0 131.8 0 176v256c0 44.2 35.8 80 80 80h352c44.2 0 80-35.8 80-80V176c0-44.2-35.8-80-80-80H321.9l55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-87 87zm255 225a24 24 0 1 1 48 0 24 24 0 1 1-48 0m24 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48M64 224c0-35.3 28.7-64 64-64h192c35.3 0 64 28.7 64 64v160c0 35.3-28.7 64-64 64H128c-35.3 0-64-28.7-64-64z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M64 224c0-35.3 28.7-64 64-64h192c35.3 0 64 28.7 64 64v160c0 35.3-28.7 64-64 64H128c-35.3 0-64-28.7-64-64z"
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
