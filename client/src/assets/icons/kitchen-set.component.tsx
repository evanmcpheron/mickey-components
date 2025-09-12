import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const KitchenSetIcon: React.FC<
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
                  d="M240 144a96 96 0 1 0-192 0 96 96 0 1 0 192 0m44.4 32c-14.5 64.1-71.9 112-140.4 112C64.5 288 0 223.5 0 144S64.5 0 144 0c68.5 0 125.9 47.9 140.4 112h71.8c8.8-9.8 21.6-16 35.8-16h104c26.5 0 48 21.5 48 48s-21.5 48-48 48H392c-14.2 0-27-6.2-35.8-16zM144 80a64 64 0 1 1 0 128 64 64 0 1 1 0-128m256 160c13.3 0 24 10.7 24 24v8h96c13.3 0 24 10.7 24 24s-10.7 24-24 24H280c-13.3 0-24-10.7-24-24s10.7-24 24-24h96v-8c0-13.3 10.7-24 24-24M288 464V352h224v112c0 26.5-21.5 48-48 48H336c-26.5 0-48-21.5-48-48M48 320h128c26.5 0 48 21.5 48 48s-21.5 48-48 48h-16c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32v-80c0-8.8 7.2-16 16-16m128 64c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16v32zM24 464h176c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24"
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
                  d="M240 144a96 96 0 1 0-192 0 96 96 0 1 0 192 0m46 24c-11.4 68.1-70.7 120-142 120C64.5 288 0 223.5 0 144S64.5 0 144 0c71.4 0 130.6 51.9 142 120h66.7c3.8-22.7 23.6-40 47.3-40h96c26.5 0 48 21.5 48 48v32c0 26.5-21.5 48-48 48h-96c-23.8 0-43.5-17.3-47.3-40zM80 144a64 64 0 1 1 128 0 64 64 0 1 1-128 0m296 120c0-13.3 10.7-24 24-24s24 10.7 24 24v8h96c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8v144c0 26.5-21.5 48-48 48H336c-26.5 0-48-21.5-48-48V320h-8c-13.3 0-24-10.7-24-24s10.7-24 24-24h96zm-40 56v144h128V320zM32 336c0-8.8 7.2-16 16-16h128c26.5 0 48 21.5 48 48s-21.5 48-48 48h-16c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32zm128 48h16c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16zM0 488c0-13.3 10.7-24 24-24h176c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24m400-360v32h96v-32z"
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
                  d="M144 256a112 112 0 1 0 0-224 112 112 0 1 0 0 224m143.1-96c-8 72-69 128-143.1 128C64.5 288 0 223.5 0 144S64.5 0 144 0c74.1 0 135.2 56 143.1 128h67.6c6.6-18.6 24.4-32 45.3-32h96c26.5 0 48 21.5 48 48s-21.5 48-48 48h-96c-20.9 0-38.7-13.4-45.3-32zM272 320h48v-32c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32v32h48c8.8 0 16 7.2 16 16s-7.2 16-16 16h-16v112c0 26.5-21.5 48-48 48H336c-26.5 0-48-21.5-48-48V352h-16c-8.8 0-16-7.2-16-16s7.2-16 16-16m80 0h96v-32h-96zm-32 32v112c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16V352zm176-224h-96c-8.8 0-16 7.2-16 16s7.2 16 16 16h96c8.8 0 16-7.2 16-16s-7.2-16-16-16m-304 16a48 48 0 1 0-96 0 48 48 0 1 0 96 0m-128 0a80 80 0 1 1 160 0 80 80 0 1 1-160 0M0 496c0-8.8 7.2-16 16-16h192c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16-7.2-16-16m160-144v32h16c8.8 0 16-7.2 16-16s-7.2-16-16-16zm0-32h16c26.5 0 48 21.5 48 48s-21.5 48-48 48h-16c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32v-80c0-8.8 7.2-16 16-16h112m-32 64v-32H64v64h64z"
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
                  d="M144 272a128 128 0 1 0 0-256 128 128 0 1 0 0 256m143.8-120c-4.2 75.8-66.9 136-143.8 136C64.5 288 0 223.5 0 144S64.5 0 144 0c76.8 0 139.6 60.2 143.8 136H353c3.6-13.8 16.1-24 31-24h128c17.7 0 32 14.3 32 32s-14.3 32-32 32H384c-14.9 0-27.4-10.2-31-24zm96.2 8h128c8.8 0 16-7.2 16-16s-7.2-16-16-16H384c-8.8 0-16 7.2-16 16s7.2 16 16 16M264 320h72v-24c0-13.3 10.7-24 24-24h80c13.3 0 24 10.7 24 24v24h72c4.4 0 8 3.6 8 8s-3.6 8-8 8h-8v128c0 26.5-21.5 48-48 48H320c-26.5 0-48-21.5-48-48V336h-8c-4.4 0-8-3.6-8-8s3.6-8 8-8m88 0h96v-24c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8zm160 16H288v128c0 17.7 14.3 32 32 32h160c17.7 0 32-14.3 32-32zM224 144a80 80 0 1 0-160 0 80 80 0 1 0 160 0m-176 0a96 96 0 1 1 192 0 96 96 0 1 1-192 0M0 504c0-4.4 3.6-8 8-8h208c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.4 0-8-3.6-8-8m160-168v64h16c17.7 0 32-14.3 32-32s-14.3-32-32-32zm16 80h-16v16c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32v-96c0-8.8 7.2-16 16-16h128c26.5 0 48 21.5 48 48s-21.5 48-48 48M48 336v96c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-96z"
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
                  d="M144 224a80 80 0 1 0 0-160 80 80 0 1 0 0 160M16 480c-8.8 0-16 7.2-16 16s7.2 16 16 16h192c8.8 0 16-7.2 16-16s-7.2-16-16-16zm240-184c0 13.3 10.7 24 24 24h240c13.3 0 24-10.7 24-24s-10.7-24-24-24h-96v-8c0-13.3-10.7-24-24-24s-24 10.7-24 24v8h-96c-13.3 0-24 10.7-24 24"
                />
                <path
                  className="aps-icon-foreground"
                  d="M224 144a80 80 0 1 0-160 0 80 80 0 1 0 160 0m60.4 32c-14.5 64.1-71.9 112-140.4 112C64.5 288 0 223.5 0 144S64.5 0 144 0c68.5 0 125.9 47.9 140.4 112h71.8c8.8-9.8 21.6-16 35.8-16h104c26.5 0 48 21.5 48 48s-21.5 48-48 48H392c-14.2 0-27-6.2-35.8-16zM48 320h128c26.5 0 48 21.5 48 48s-21.5 48-48 48h-16c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32v-80c0-8.8 7.2-16 16-16m128 64c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16v32zm336-64v144c0 26.5-21.5 48-48 48H336c-26.5 0-48-21.5-48-48V320z"
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
