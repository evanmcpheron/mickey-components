import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CaravanSimpleIcon: React.FC<
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
                  d="M80 32C35.8 32 0 67.8 0 112v224c0 44.2 35.8 80 80 80h16c0 53 43 96 96 96s96-43 96-96h320c17.7 0 32-14.3 32-32s-14.3-32-32-32h-32V192c0-88.4-71.6-160-160-160zM64 160c0-17.7 14.3-32 32-32h128c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zm288-32h64c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32M144 416a48 48 0 1 1 96 0 48 48 0 1 1-96 0"
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
                  d="M80 80c-17.7 0-32 14.3-32 32v224c0 17.7 14.3 32 32 32h28.8c16.6-28.7 47.6-48 83.2-48s66.6 19.3 83.2 48H528V192c0-61.9-50.1-112-112-112zm16 336H80c-44.2 0-80-35.8-80-80V112c0-44.2 35.8-80 80-80h336c88.4 0 160 71.6 160 160v176h40c13.3 0 24 10.7 24 24s-10.7 24-24 24H288c0 53-43 96-96 96s-96-43-96-96m0-256c0-17.7 14.3-32 32-32h128c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32zm256-32h64c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32M240 416a48 48 0 1 0-96 0 48 48 0 1 0 96 0"
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
                  d="M80 64c-26.5 0-48 21.5-48 48v224c0 26.5 21.5 48 48 48h21.5c13.2-37.3 48.7-64 90.5-64s77.4 26.7 90.5 64H544V192c0-70.7-57.3-128-128-128zm16 352H80c-44.2 0-80-35.8-80-80V112c0-44.2 35.8-80 80-80h336c88.4 0 160 71.6 160 160v192h48c8.8 0 16 7.2 16 16s-7.2 16-16 16H288c0 53-43 96-96 96s-96-43-96-96m160-256H128v64h128zm-128-32h128c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32m224 32v64h64v-64zm-32 0c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32zm-64 256a64 64 0 1 0-128 0 64 64 0 1 0 128 0"
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
                  d="M80 48c-35.3 0-64 28.7-64 64v224c0 35.3 28.7 64 64 64h17.3c7.6-45.4 47.1-80 94.7-80s87.1 34.6 94.7 80H560V192c0-79.5-64.5-144-144-144zm16 368H80c-44.2 0-80-35.8-80-80V112c0-44.2 35.8-80 80-80h336c88.4 0 160 71.6 160 160v208h56c4.4 0 8 3.6 8 8s-3.6 8-8 8H288c0 53-43 96-96 96s-96-43-96-96m128-272H96c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16M96 128h128c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32m256 16c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16zm-32 16c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32zm-48 256a80 80 0 1 0-160 0 80 80 0 1 0 160 0"
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
                  d="M64 160v64c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32H96c-17.7 0-32 14.3-32 32m256 0v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32M192 512a80 80 0 1 0 0-160 80 80 0 1 0 0 160"
                />
                <path
                  className="aps-icon-foreground"
                  d="M80 32C35.8 32 0 67.8 0 112v224c0 44.2 35.8 80 80 80h1.1c7.8-54.3 54.4-96 110.9-96s103.1 41.7 110.9 96H608c17.7 0 32-14.3 32-32s-14.3-32-32-32h-32V192c0-88.4-71.6-160-160-160zM64 160c0-17.7 14.3-32 32-32h128c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zm288-32h64c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32"
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
