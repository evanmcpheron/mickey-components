import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const TreasureChestIcon: React.FC<
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
                  d="M0 160v96h128V32C57.3 32 0 89.3 0 160m0 272c0 26.5 21.5 48 48 48h80V288H0zm416-144h-64v32c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32v-32h-64v192h256zm112 192c26.5 0 48-21.5 48-48V288H448v192zm48-320c0-70.7-57.3-128-128-128v224h128zm-160 96V32H160v224h64v-32c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v32zm-112-16c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16z"
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
                  d="M160 80h256v160h-64v-16c0-17.7-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32v16h-64zM48 160c0-38.7 27.5-71 64-78.4V240H48zm0 272V288h64v144zm368-144v144H160V288h64v32c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32v-32zm112 144h-64V288h64zm0-272v80h-64V81.6c36.5 7.4 64 39.7 64 78.4M128 32C57.3 32 0 89.3 0 160v272c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V160c0-70.7-57.3-128-128-128zm176 224v32c0 8.8-7.2 16-16 16s-16-7.2-16-16v-32c0-8.8 7.2-16 16-16s16 7.2 16 16"
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
                  d="M128 64v192h64v-32c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32h64V64zm192 320h-64c-35.3 0-64-28.7-64-64v-32h-64v160h320V288h-64v32c0 35.3-28.7 64-64 64M96 69.5C58.7 82.6 32 118.2 32 160v96h64zM32 288v144c0 8.8 7.2 16 16 16h48V288zm448 160h48c8.8 0 16-7.2 16-16V288h-64zm64-192v-96c0-41.8-26.7-77.4-64-90.5V256zM0 160C0 89.3 57.3 32 128 32h320c70.7 0 128 57.3 128 128v272c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48zm320 32h-64c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32v-96c0-17.7-14.3-32-32-32m-16 48v64c0 8.8-7.2 16-16 16s-16-7.2-16-16v-64c0-8.8 7.2-16 16-16s16 7.2 16 16"
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
                  d="M136 48v224h80v-48c0-26.5 21.5-48 48-48h48c26.5 0 48 21.5 48 48v48h80V48zm176 320h-48c-26.5 0-48-21.5-48-48v-32h-80v176h304V288h-80v32c0 26.5-21.5 48-48 48M120 48.3C61.9 52.4 16 100.8 16 160v112h104zM16 288v144c0 17.7 14.3 32 32 32h72V288zm440 176h72c17.7 0 32-14.3 32-32V288H456zm104-192V160c0-59.2-45.9-107.6-104-111.7V272zM0 160C0 89.3 57.3 32 128 32h320c70.7 0 128 57.3 128 128v272c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48zm312 32h-48c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32h48c17.7 0 32-14.3 32-32v-96c0-17.7-14.3-32-32-32m-16 48v64c0 4.4-3.6 8-8 8s-8-3.6-8-8v-64c0-4.4 3.6-8 8-8s8 3.6 8 8"
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
                  d="M96 36v220H0v-96C0 100.4 40.8 50.2 96 36m128 220h-64V32h256v224h-64v-32c0-17.7-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32zm256 0V36c55.2 14.2 96 64.3 96 124v96zM0 288h96v192H48c-26.5 0-48-21.5-48-48zm416 192H160V288h64v32c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32v-32h64zm64 0V288h96v144c0 26.5-21.5 48-48 48z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M160 32v224H96V36c10.2-2.6 21-4 32-4zm256 224V32h32c11 0 21.8 1.4 32 4v220zm-192-32c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32zm64 0c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16v-64c0-8.8-7.2-16-16-16M160 480H96V288h64zm256 0V288h64v192z"
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
