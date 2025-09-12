import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const JoystickIcon: React.FC<
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
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M336 112c0 50.7-33.7 93.6-80 107.4V320h-64V219.4c-46.3-13.8-80-56.6-80-107.4C112 50.1 162.1 0 224 0s112 50.1 112 112M200 96a24 24 0 1 0 0-48 24 24 0 1 0 0 48M64 352c0-17.7 14.3-32 32-32s32 14.3 32 32h256c35.3 0 64 28.7 64 64v32c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64v-32c0-35.3 28.7-64 64-64"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M224 48a64 64 0 1 1 0 128 64 64 0 1 1 0-128m24 173.4c50.3-11 88-55.8 88-109.4C336 50.1 285.9 0 224 0S112 50.1 112 112c0 53.6 37.7 98.4 88 109.4V320h48zM96 320c-17.7 0-32 14.3-32 32-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64v-32c0-35.3-28.7-64-64-64H128c0-17.7-14.3-32-32-32m0 80h288c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M304 112a80 80 0 1 0-160 0 80 80 0 1 0 160 0m32 0c0 56.4-41.7 103.1-96 110.9V320h-32v-97.1c-54.3-7.8-96-54.4-96-110.9C112 50.1 162.1 0 224 0s112 50.1 112 112M64 304c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16m352 112c0-17.7-14.3-32-32-32H64c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32zM64 352h320c35.3 0 64 28.7 64 64v32c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64v-32c0-35.3 28.7-64 64-64M208 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M320 112a96 96 0 1 0-192 0 96 96 0 1 0 192 0m16 0c0 59.2-45.9 107.6-104 111.7V352h152c35.3 0 64 28.7 64 64v32c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64v-32c0-35.3 28.7-64 64-64h152V223.7c-58.1-4.1-104-52.6-104-111.7C112 50.1 162.1 0 224 0s112 50.1 112 112M64 312c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8s-3.6 8-8 8H72c-4.4 0-8-3.6-8-8m368 104c0-26.5-21.5-48-48-48H64c-26.5 0-48 21.5-48 48v32c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48zM192 80a16 16 0 1 0 32 0 16 16 0 1 0-32 0m16 32a32 32 0 1 1 0-64 32 32 0 1 1 0 64"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M192 352V219.4c10.1 3 20.9 4.6 32 4.6s21.9-1.6 32-4.6V352zm-128 0c0-17.7 14.3-32 32-32s32 14.3 32 32z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M336 112a112 112 0 1 0-224 0 112 112 0 1 0 224 0M176 72a24 24 0 1 1 48 0 24 24 0 1 1-48 0M64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64v-32c0-35.3-28.7-64-64-64z"
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
