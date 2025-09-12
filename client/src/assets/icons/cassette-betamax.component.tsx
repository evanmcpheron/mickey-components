import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CassetteBetamaxIcon: React.FC<
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
                  d="M64 32C28.7 32 0 60.7 0 96v32h576V96c0-35.3-28.7-64-64-64zm512 128H0v256c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64zM192 320a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-128 0a96 96 0 1 1 192 0 96 96 0 1 1-192 0m256-64c0-17.7 14.3-32 32-32h128c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H352c-17.7 0-32-14.3-32-32z"
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
                  d="M48 416V160h480v256c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm304 224h80v80h-80zm-48-16v112c0 17.7 14.3 32 32 32h112c17.7 0 32-14.3 32-32V240c0-17.7-14.3-32-32-32H352c-17.7 0-32 14.3-32 32m-136 0a56 56 0 1 1 0 112 56 56 0 1 1 0-112m0 160a104 104 0 1 0 0-208 104 104 0 1 0 0 208m0-80a24 24 0 1 0 0-48 24 24 0 1 0 0 48"
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
                  d="M32 160v256c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32V160zm0-32h512V96c0-17.7-14.3-32-32-32H64c-17.7 0-32 14.3-32 32zm544-32v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h448c35.3 0 64 28.7 64 64M240 304a64 64 0 1 0-128 0 64 64 0 1 0 128 0m-160 0a96 96 0 1 1 192 0 96 96 0 1 1-192 0m72 0a24 24 0 1 1 48 0 24 24 0 1 1-48 0m200-48v96h96v-96zm-32 0c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32h-96c-17.7 0-32-14.3-32-32z"
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
                  d="M16 144v272c0 26.5 21.5 48 48 48h448c26.5 0 48-21.5 48-48V144zm0-16h544V96c0-26.5-21.5-48-48-48H64c-26.5 0-48 21.5-48 48zm560-32v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h448c35.3 0 64 28.7 64 64M240 304a80 80 0 1 0-160 0 80 80 0 1 0 160 0m-176 0a96 96 0 1 1 192 0 96 96 0 1 1-192 0m96-16a16 16 0 1 0 0 32 16 16 0 1 0 0-32m32 16a32 32 0 1 1-64 0 32 32 0 1 1 64 0m160-80c-8.8 0-16 7.2-16 16v128c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16zm-32 16c0-17.7 14.3-32 32-32h128c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H352c-17.7 0-32-14.3-32-32z"
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
                  d="M0 160h576v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm256 160a96 96 0 1 0-192 0 96 96 0 1 0 192 0m96-96c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32V256c0-17.7-14.3-32-32-32z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M64 32C28.7 32 0 60.7 0 96v64h576V96c0-35.3-28.7-64-64-64zm128 288a32 32 0 1 1-64 0 32 32 0 1 1 64 0m-32-96a96 96 0 1 0 0 192 96 96 0 1 0 0-192"
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
