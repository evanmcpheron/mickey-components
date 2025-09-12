import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ObjectExcludeIcon: React.FC<
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
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M0 64C0 28.7 28.7 0 64 0h224c35.3 0 64 28.7 64 64v96h96c35.3 0 64 28.7 64 64v224c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64v-96H64c-35.3 0-64-28.7-64-64zm320 128H192v128h128z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M64 48h224c8.8 0 16 7.2 16 16v64h48V64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64v224c0 35.3 28.7 64 64 64h64v-48H64c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16m96 336v64c0 35.3 28.7 64 64 64h224c35.3 0 64-28.7 64-64V224c0-35.3-28.7-64-64-64h-64v48h64c8.8 0 16 7.2 16 16v224c0 8.8-7.2 16-16 16H224c-8.8 0-16-7.2-16-16v-64zm128-32c35.3 0 64-28.7 64-64h-48c0 8.8-7.2 16-16 16h-32v48zm64-144v-48h-64v48h16v48h48zM224 352v-48h-16v-48h-48v96h64m-64-128h48c0-8.8 7.2-16 16-16h32v-48h-32c-35.3 0-64 28.7-64 64"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M64 32h224c17.7 0 32 14.3 32 32v64h32V64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64v224c0 35.3 28.7 64 64 64h64v-32H64c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32m96 352v64c0 35.3 28.7 64 64 64h224c35.3 0 64-28.7 64-64V224c0-35.3-28.7-64-64-64h-64v32h64c17.7 0 32 14.3 32 32v224c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32v-64zm128-32c35.3 0 64-28.7 64-64h-32c0 17.7-14.3 32-32 32h-32v32zm64-160v-32h-64v32h32v64h32zM224 352v-32h-32v-64h-32v96h64m-64-128h32c0-17.7 14.3-32 32-32h32v-32h-32c-35.3 0-64 28.7-64 64"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M64 16h224c26.5 0 48 21.5 48 48v64h16V64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64v224c0 35.3 28.7 64 64 64h64v-16H64c-26.5 0-48-21.5-48-48V64c0-26.5 21.5-48 48-48m96 368v64c0 35.3 28.7 64 64 64h224c35.3 0 64-28.7 64-64V224c0-35.3-28.7-64-64-64h-64v16h64c26.5 0 48 21.5 48 48v224c0 26.5-21.5 48-48 48H224c-26.5 0-48-21.5-48-48v-64zm128-32c35.3 0 64-28.7 64-64h-16c0 26.5-21.5 48-48 48h-32v16zm64-176v-16h-64v16h48v80h16zM224 352v-16h-48v-80h-16v96h64m-64-128h16c0-26.5 21.5-48 48-48h32v-16h-32c-35.3 0-64 28.7-64 64"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M224 160c-35.3 0-64 28.7-64 64v128h128c35.3 0 64-28.7 64-64V160zm80 48v96h-96v-96z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M64 0C28.7 0 0 28.7 0 64v224c0 35.3 28.7 64 64 64h96v96c0 35.3 28.7 64 64 64h224c35.3 0 64-28.7 64-64V224c0-35.3-28.7-64-64-64h-96V64c0-35.3-28.7-64-64-64zm288 160v128c0 35.3-28.7 64-64 64H160V224c0-35.3 28.7-64 64-64z"
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
