import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ImagesUserIcon: React.FC<
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
                  d="M96 96v224c0 35.3 28.7 64 64 64h352c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H160c-35.3 0-64 28.7-64 64m240 0a64 64 0 1 1 0 128 64 64 0 1 1 0-128m-66.3 160h132.6c25.2 0 45.7 20.5 45.7 45.7 0 10.1-8.2 18.3-18.3 18.3H242.3c-10.1 0-18.3-8.2-18.3-18.3 0-25.2 20.5-45.7 45.7-45.7M48 120c0-13.3-10.7-24-24-24S0 106.7 0 120v224c0 75.1 60.9 136 136 136h320c13.3 0 24-10.7 24-24s-10.7-24-24-24H136c-48.6 0-88-39.4-88-88z"
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
                  d="M512 80H160c-8.8 0-16 7.2-16 16v224c0 8.8 7.2 16 16 16h64c0-35.3 28.7-64 64-64h96c35.3 0 64 28.7 64 64h64c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16M160 32h352c35.3 0 64 28.7 64 64v224c0 35.3-28.7 64-64 64H160c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64M24 96c13.3 0 24 10.7 24 24v224c0 48.6 39.4 88 88 88h320c13.3 0 24 10.7 24 24s-10.7 24-24 24H136C60.9 480 0 419.1 0 344V120c0-13.3 10.7-24 24-24m248 80a64 64 0 1 1 128 0 64 64 0 1 1-128 0"
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
                  d="M512 64H160c-17.7 0-32 14.3-32 32v224c0 17.7 14.3 32 32 32h64v-16c0-44.2 35.8-80 80-80h64c44.2 0 80 35.8 80 80v16h64c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32m-64 320H160c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h352c35.3 0 64 28.7 64 64v224c0 35.3-28.7 64-64 64zm-32-32v-16c0-26.5-21.5-48-48-48h-64c-26.5 0-48 21.5-48 48v16zM16 96c8.8 0 16 7.2 16 16v240c0 53 43 96 96 96h336c8.8 0 16 7.2 16 16s-7.2 16-16 16H128C57.3 480 0 422.7 0 352V112c0-8.8 7.2-16 16-16m352 64a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-32-64a64 64 0 1 1 0 128 64 64 0 1 1 0-128"
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
                  d="M512 48H160c-26.5 0-48 21.5-48 48v224c0 26.5 21.5 48 48 48h64v-32c0-44.2 35.8-80 80-80h64c44.2 0 80 35.8 80 80v32h64c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48m-64 336H160c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h352c35.3 0 64 28.7 64 64v224c0 35.3-28.7 64-64 64zm-16-16v-32c0-35.3-28.7-64-64-64h-64c-35.3 0-64 28.7-64 64v32zM64 128v16c-26.5 0-48 21.5-48 48v224c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48h16c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192c0-35.3 28.7-64 64-64m320 32a48 48 0 1 0-96 0 48 48 0 1 0 96 0m-48-64a64 64 0 1 1 0 128 64 64 0 1 1 0-128"
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
                  d="M160 32c-35.3 0-64 28.7-64 64v224c0 35.3 28.7 64 64 64h352c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm112 128a64 64 0 1 1 128 0 64 64 0 1 1-128 0m-48 141.7c0-25.2 20.5-45.7 45.7-45.7h132.6c25.2 0 45.7 20.5 45.7 45.7 0 10.1-8.2 18.3-18.3 18.3H242.3c-10.1 0-18.3-8.2-18.3-18.3"
                />
                <path
                  className="aps-icon-foreground"
                  d="M48 120c0-13.3-10.7-24-24-24S0 106.7 0 120v224c0 75.1 60.9 136 136 136h320c13.3 0 24-10.7 24-24s-10.7-24-24-24H136c-48.6 0-88-39.4-88-88zm352 40a64 64 0 1 0-128 0 64 64 0 1 0 128 0M224 301.7c0 10.1 8.2 18.3 18.3 18.3h187.4c10.1 0 18.3-8.2 18.3-18.3 0-25.2-20.5-45.7-45.7-45.7H269.7c-25.2 0-45.7 20.5-45.7 45.7"
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
