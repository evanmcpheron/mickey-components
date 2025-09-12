import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CheckToSlotIcon: React.FC<
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
                  d="M96 80c0-26.5 21.5-48 48-48h288c26.5 0 48 21.5 48 48v304H96zm313 47c-9.4-9.4-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L409 161c9.4-9.4 9.4-24.6 0-33.9zM0 336c0-26.5 21.5-48 48-48h16v128h448V288h16c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48z"
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
                  d="M144 80v280h288V80zM96 360V80c0-26.5 21.5-48 48-48h288c26.5 0 48 21.5 48 48v280c13.3 0 24 10.7 24 24s-10.7 24-24 24H96c-13.3 0-24-10.7-24-24s10.7-24 24-24m-32-72v48H48v96h480v-96h-16v-48h16c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48v-96c0-26.5 21.5-48 48-48zm321-108.4L278.3 286.3c-9.4 9.4-24.6 9.4-33.9 0L191 233c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l36.4 36.4 89.7-89.8c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
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
                  d="M144 64c-8.8 0-16 7.2-16 16v304h320V80c0-8.8-7.2-16-16-16zm336 16v304h16c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h16V80c0-26.5 21.5-48 48-48h288c26.5 0 48 21.5 48 48M48 320h16v32H48c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16h-16v-32h16c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48v-64c0-26.5 21.5-48 48-48m331.3-146L272.6 280.6c-6.2 6.2-16.4 6.2-22.6 0l-53.3-53.3c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l42 42 95.4-95.4c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"
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
                  d="M144 48c-17.7 0-32 14.3-32 32v328h352V80c0-17.7-14.3-32-32-32zm336 32v328h32c4.4 0 8 3.6 8 8s-3.6 8-8 8H64c-4.4 0-8-3.6-8-8s3.6-8 8-8h32V80c0-26.5 21.5-48 48-48h288c26.5 0 48 21.5 48 48M48 352h16v16H48c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h480c17.7 0 32-14.3 32-32v-32c0-17.7-14.3-32-32-32h-16v-16h16c26.5 0 48 21.5 48 48v32c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48v-32c0-26.5 21.5-48 48-48m325.7-175.7L267 283c-3.1 3.1-8.2 3.1-11.3 0l-53.3-53.3c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0l47.6 47.6 101-101c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3z"
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
                  d="M144 32c-26.5 0-48 21.5-48 48v320h384V80c0-26.5-21.5-48-48-48zm265 129L281 289c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L375 127c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M409 161 281 289c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L375 127c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM48 288h48v80H80c-8.8 0-16 7.2-16 16s7.2 16 16 16h416c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16v-80h48c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48v-96c0-26.5 21.5-48 48-48"
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
