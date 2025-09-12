import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const LaptopMobileIcon: React.FC<
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
                  d="M128 0C92.7 0 64 28.7 64 64v224H19.2C8.6 288 0 296.6 0 307.2 0 349.6 34.4 384 76.8 384H352v-96H128V64h320v32h64V64c0-35.3-28.7-64-64-64zm320 448V192h128v256zm-64-272v288c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48H432c-26.5 0-48 21.5-48 48"
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
                  d="M128 48h320c8.8 0 16 7.2 16 16v32h48V64c0-35.3-28.7-64-64-64H128C92.7 0 64 28.7 64 64v256H16c-8.8 0-16 7.2-16 16 0 26.5 21.5 48 48 48h304v-64H112V64c0-8.8 7.2-16 16-16m256 128v288c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48H432c-26.5 0-48 21.5-48 48m48 0h160v288H432z"
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
                  d="M128 32h320c17.7 0 32 14.3 32 32v32h32V64c0-35.3-28.7-64-64-64H128C92.7 0 64 28.7 64 64v224H19.2C8.6 288 0 296.6 0 307.2 0 349.6 34.4 384 76.8 384H352v-32H76.8c-20.3 0-37.4-13.5-42.9-32H352v-32H96V64c0-17.7 14.3-32 32-32m288 144c0-8.8 7.2-16 16-16h160c8.8 0 16 7.2 16 16v288c0 8.8-7.2 16-16 16H432c-8.8 0-16-7.2-16-16zm-32 0v288c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48H432c-26.5 0-48 21.5-48 48"
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
                  d="M128 16h320c26.5 0 48 21.5 48 48v32h16V64c0-35.3-28.7-64-64-64H128C92.7 0 64 28.7 64 64v224H19.2C8.6 288 0 296.6 0 307.2 0 349.6 34.4 384 76.8 384H352v-16H76.8C43.2 368 16 340.8 16 307.2c0-1.8 1.4-3.2 3.2-3.2H352v-16H80V64c0-26.5 21.5-48 48-48m272 160c0-17.7 14.3-32 32-32h160c17.7 0 32 14.3 32 32v288c0 17.7-14.3 32-32 32H432c-17.7 0-32-14.3-32-32zm-16 0v288c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48H432c-26.5 0-48 21.5-48 48"
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
                  d="M128 0C92.7 0 64 28.7 64 64v224H19.2C8.6 288 0 296.6 0 307.2 0 349.6 34.4 384 76.8 384H352v-96H128V64h320v32h64V64c0-35.3-28.7-64-64-64zm448 448V192H448v256z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M448 192h128v256H448zm-16-64c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48z"
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
