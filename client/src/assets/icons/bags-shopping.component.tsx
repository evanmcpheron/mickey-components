import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BagsShoppingIcon: React.FC<
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
                  d="M176 96v64h96V96c0-26.5-21.5-48-48-48s-48 21.5-48 48m-48 64V96c0-53 43-96 96-96s96 43 96 96v64h64c35.3 0 64 28.7 64 64H240c-44.2 0-80 35.8-80 80v160c0 5.5.6 10.8 1.6 16H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64zm128 96h256c35.3 0 64 28.7 64 64v128c0 35.3-28.7 64-64 64H256c-35.3 0-64-28.7-64-64V320c0-35.3 28.7-64 64-64m64 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v16c0 53 43 96 96 96s96-43 96-96v-16c0-8.8-7.2-16-16-16s-16 7.2-16 16v16c0 35.3-28.7 64-64 64s-64-28.7-64-64z"
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
                  d="M176 96c0-26.5 21.5-48 48-48s48 21.5 48 48v64h-96zm-48 64H64c-35.3 0-64 28.7-64 64v192c0 35.3 28.7 64 64 64h96v-48H64c-8.8 0-16-7.2-16-16V224c0-8.8 7.2-16 16-16h320c8.8 0 16 7.2 16 16h48c0-35.3-28.7-64-64-64h-64V96c0-53-43-96-96-96s-96 43-96 96zm128 96c-35.3 0-64 28.7-64 64v128c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V320c0-35.3-28.7-64-64-64zm64 80v16c0 35.3 28.7 64 64 64s64-28.7 64-64v-16c0-8.8 7.2-16 16-16s16 7.2 16 16v16c0 53-43 96-96 96s-96-43-96-96v-16c0-8.8 7.2-16 16-16s16 7.2 16 16"
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
                  d="M160 96c0-35.3 28.7-64 64-64s64 28.7 64 64v64H160zm-32 64H64c-35.3 0-64 28.7-64 64v192c0 35.3 28.7 64 64 64h96v-32H64c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32h320c17.7 0 32 14.3 32 32h32c0-35.3-28.7-64-64-64h-64V96c0-53-43-96-96-96s-96 43-96 96zm384 128c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H256c-17.7 0-32-14.3-32-32V320c0-17.7 14.3-32 32-32zm-320 32v128c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V320c0-35.3-28.7-64-64-64H256c-35.3 0-64 28.7-64 64m128 16c0-8.8-7.2-16-16-16s-16 7.2-16 16v16c0 53 43 96 96 96s96-43 96-96v-16c0-8.8-7.2-16-16-16s-16 7.2-16 16v16c0 35.3-28.7 64-64 64s-64-28.7-64-64z"
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
                  d="M144 96c0-44.2 35.8-80 80-80s80 35.8 80 80v64H144zm-16 64H64c-35.3 0-64 28.7-64 64v192c0 35.3 28.7 64 64 64h96v-16H64c-26.5 0-48-21.5-48-48V224c0-26.5 21.5-48 48-48h320c26.5 0 48 21.5 48 48h16c0-35.3-28.7-64-64-64h-64V96c0-53-43-96-96-96s-96 43-96 96zm384 112c26.5 0 48 21.5 48 48v128c0 26.5-21.5 48-48 48H256c-26.5 0-48-21.5-48-48V320c0-26.5 21.5-48 48-48zm-320 48v128c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V320c0-35.3-28.7-64-64-64H256c-35.3 0-64 28.7-64 64m128 8c0-4.4-3.6-8-8-8s-8 3.6-8 8v40c0 44.2 35.8 80 80 80s80-35.8 80-80v-40c0-4.4-3.6-8-8-8s-8 3.6-8 8v40c0 35.3-28.7 64-64 64s-64-28.7-64-64z"
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
                  d="M224 48c-26.5 0-48 21.5-48 48v64h96V96c0-26.5-21.5-48-48-48M64 160h64V96c0-53 43-96 96-96s96 43 96 96v64h64c35.3 0 64 28.7 64 64H240c-44.2 0-80 35.8-80 80v160c0 5.5.6 10.8 1.6 16H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64m256 176v16c0 35.3 28.7 64 64 64s64-28.7 64-64v-16c0-8.8 7.2-16 16-16s16 7.2 16 16v16c0 53-43 96-96 96s-96-43-96-96v-16c0-8.8 7.2-16 16-16s16 7.2 16 16"
                />
                <path
                  className="aps-icon-foreground"
                  d="M256 256c-35.3 0-64 28.7-64 64v128c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V320c0-35.3-28.7-64-64-64zm64 80v16c0 35.3 28.7 64 64 64s64-28.7 64-64v-16c0-8.8 7.2-16 16-16s16 7.2 16 16v16c0 53-43 96-96 96s-96-43-96-96v-16c0-8.8 7.2-16 16-16s16 7.2 16 16"
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
