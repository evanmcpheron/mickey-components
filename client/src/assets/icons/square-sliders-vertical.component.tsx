import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SquareSlidersVerticalIcon: React.FC<
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
                  d="M0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm144 0c-17.7 0-32 14.3-32 32v32H96c-17.7 0-32 14.3-32 32s14.3 32 32 32h16v160c0 17.7 14.3 32 32 32s32-14.3 32-32V224h16c17.7 0 32-14.3 32-32s-14.3-32-32-32h-16v-32c0-17.7-14.3-32-32-32m192 32c0-17.7-14.3-32-32-32s-32 14.3-32 32v160h-16c-17.7 0-32 14.3-32 32s14.3 32 32 32h16v32c0 17.7 14.3 32 32 32s32-14.3 32-32v-32h16c17.7 0 32-14.3 32-32s-14.3-32-32-32h-16z"
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
                  d="M384 80c8.8 0 16 7.2 16 16v320c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16zM64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm80 96c-13.3 0-24 10.7-24 24v32h-16c-13.3 0-24 10.7-24 24s10.7 24 24 24h16v128c0 13.3 10.7 24 24 24s24-10.7 24-24V232h16c13.3 0 24-10.7 24-24s-10.7-24-24-24h-16v-32c0-13.3-10.7-24-24-24m184 24c0-13.3-10.7-24-24-24s-24 10.7-24 24v128h-16c-13.3 0-24 10.7-24 24s10.7 24 24 24h16v32c0 13.3 10.7 24 24 24s24-10.7 24-24v-32h16c13.3 0 24-10.7 24-24s-10.7-24-24-24h-16z"
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
                  d="M384 64c17.7 0 32 14.3 32 32v320c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32zM64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm80 96c-8.8 0-16 7.2-16 16v48h-24c-8.8 0-16 7.2-16 16s7.2 16 16 16h80c8.8 0 16-7.2 16-16s-7.2-16-16-16h-24v-48c0-8.8-7.2-16-16-16m0 128c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16s16-7.2 16-16v-96c0-8.8-7.2-16-16-16m160-128c-8.8 0-16 7.2-16 16v112h-24c-8.8 0-16 7.2-16 16s7.2 16 16 16h80c8.8 0 16-7.2 16-16s-7.2-16-16-16h-24V144c0-8.8-7.2-16-16-16m0 192c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16s16-7.2 16-16v-32c0-8.8-7.2-16-16-16"
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
                  d="M384 48c26.5 0 48 21.5 48 48v320c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V96c0-26.5 21.5-48 48-48zM64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm72 64c-4.4 0-8 3.6-8 8v56h-24c-17.7 0-32 14.3-32 32s14.3 32 32 32h64c17.7 0 32-14.3 32-32s-14.3-32-32-32h-24v-56c0-4.4-3.6-8-8-8m0 80h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 80c-4.4 0-8 3.6-8 8v144c0 4.4 3.6 8 8 8s8-3.6 8-8V264c0-4.4-3.6-8-8-8m184-152c0-4.4-3.6-8-8-8s-8 3.6-8 8v152h-24c-17.7 0-32 14.3-32 32s14.3 32 32 32h64c17.7 0 32-14.3 32-32s-14.3-32-32-32h-24zm-40 168h64c8.8 0 16 7.2 16 16s-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16s7.2-16 16-16m40 88c0-4.4-3.6-8-8-8s-8 3.6-8 8v48c0 4.4 3.6 8 8 8s8-3.6 8-8z"
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
                  d="M0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm144 0c-17.7 0-32 14.3-32 32v32H96c-17.7 0-32 14.3-32 32s14.3 32 32 32h16v160c0 17.7 14.3 32 32 32s32-14.3 32-32V224h16c17.7 0 32-14.3 32-32s-14.3-32-32-32h-16v-32c0-17.7-14.3-32-32-32m192 32c0-17.7-14.3-32-32-32s-32 14.3-32 32v160h-16c-17.7 0-32 14.3-32 32s14.3 32 32 32h16v32c0 17.7 14.3 32 32 32s32-14.3 32-32v-32h16c17.7 0 32-14.3 32-32s-14.3-32-32-32h-16z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M96 160c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32zm160 128c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32z"
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
