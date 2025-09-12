import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BrushIcon: React.FC<
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
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M162.4 6c-1.5-3.6-5-6-8.9-6h-19c-3.9 0-7.5 2.4-8.9 6l-20.7 51.7c-3.2 8-14.6 8-17.8 0L66.4 6c-1.5-3.6-5-6-8.9-6H48C21.5 0 0 21.5 0 48v208h384V48c0-26.5-21.5-48-48-48H230.5c-3.9 0-7.5 2.4-8.9 6l-20.7 51.7c-3.2 8-14.6 8-17.8 0zM0 288v32c0 35.3 28.7 64 64 64h64v64c0 35.3 28.7 64 64 64s64-28.7 64-64v-64h64c35.3 0 64-28.7 64-64v-32zm192 144a16 16 0 1 1 0 32 16 16 0 1 1 0-32"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M48 288V64c0-8.8 7.2-16 16-16h32v96c0 8.8 7.2 16 16 16s16-7.2 16-16V48h64v64c0 8.8 7.2 16 16 16s16-7.2 16-16V48h96c8.8 0 16 7.2 16 16v224zM0 320c0 35.3 28.7 64 64 64h64v64c0 35.3 28.7 64 64 64s64-28.7 64-64v-64h64c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64zm192 112a16 16 0 1 1 0 32 16 16 0 1 1 0-32"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M256 352c-17.7 0-32 14.3-32 32v64c0 17.7-14.3 32-32 32s-32-14.3-32-32v-64c0-17.7-14.3-32-32-32H80c-26.5 0-48-21.5-48-48v-16h320v16c0 26.5-21.5 48-48 48zm96-96H32V64c0-17.7 14.3-32 32-32h32v112c0 8.8 7.2 16 16 16s16-7.2 16-16V32h64v80c0 8.8 7.2 16 16 16s16-7.2 16-16V32h96c17.7 0 32 14.3 32 32zM80 384h48v64c0 35.3 28.7 64 64 64s64-28.7 64-64v-64h48c44.2 0 80-35.8 80-80V64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64v240c0 44.2 35.8 80 80 80"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M256 352c-8.8 0-16 7.2-16 16v80c0 26.5-21.5 48-48 48s-48-21.5-48-48v-80c0-8.8-7.2-16-16-16H80c-35.3 0-64-28.7-64-64v-16h352v16c0 35.3-28.7 64-64 64zm112-96H16V64c0-26.5 21.5-48 48-48h16v104c0 4.4 3.6 8 8 8s8-3.6 8-8V16h80v72c0 4.4 3.6 8 8 8s8-3.6 8-8V16h64v88c0 4.4 3.6 8 8 8s8-3.6 8-8V16h48c26.5 0 48 21.5 48 48zM80 368h48v80c0 35.3 28.7 64 64 64s64-28.7 64-64v-80h48c44.2 0 80-35.8 80-80V64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64v224c0 44.2 35.8 80 80 80m128 80a16 16 0 1 0-32 0 16 16 0 1 0 32 0"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M162.4 6c-1.5-3.6-5-6-8.9-6h-19c-3.9 0-7.5 2.4-8.9 6l-20.7 51.7c-3.2 8-14.6 8-17.8 0L66.4 6c-1.5-3.6-5-6-8.9-6H48C21.5 0 0 21.5 0 48v240h384V48c0-26.5-21.5-48-48-48H230.5c-3.9 0-7.5 2.4-8.9 6l-20.7 51.7c-3.2 8-14.6 8-17.8 0z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M0 288h384v32c0 35.3-28.7 64-64 64h-64v64c0 35.3-28.7 64-64 64s-64-28.7-64-64v-64H64c-35.3 0-64-28.7-64-64zm192 176a16 16 0 1 0 0-32 16 16 0 1 0 0 32"
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
