import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SendBackwardIcon: React.FC<
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
                  d="M64 0C28.7 0 0 28.7 0 64v224c0 35.3 28.7 64 64 64h64V224c0-53 43-96 96-96h128V64c0-35.3-28.7-64-64-64zm160 224h224v224H224zm-64 0v224c0 35.3 28.7 64 64 64h224c35.3 0 64-28.7 64-64V224c0-35.3-28.7-64-64-64H224c-35.3 0-64 28.7-64 64"
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
                  d="M64 0C28.7 0 0 28.7 0 64v224c0 35.3 28.7 64 64 64h64V224c0-53 43-96 96-96h128V64c0-35.3-28.7-64-64-64zm160 208h224c8.8 0 16 7.2 16 16v224c0 8.8-7.2 16-16 16H224c-8.8 0-16-7.2-16-16V224c0-8.8 7.2-16 16-16m-64 16v224c0 35.3 28.7 64 64 64h224c35.3 0 64-28.7 64-64V224c0-35.3-28.7-64-64-64H224c-35.3 0-64 28.7-64 64"
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
                  d="M64 32h224c17.7 0 32 14.3 32 32v64h32V64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64v224c0 35.3 28.7 64 64 64h64v-32H64c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32m224 64c0-17.7-14.3-32-32-32H96c-17.7 0-32 14.3-32 32v160c0 17.7 14.3 32 32 32h32v-32H96V96h160v32h32zm-64 96h224c17.7 0 32 14.3 32 32v224c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32m-64 32v224c0 35.3 28.7 64 64 64h224c35.3 0 64-28.7 64-64V224c0-35.3-28.7-64-64-64H224c-35.3 0-64 28.7-64 64"
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
                  d="M288 16H64c-26.5 0-48 21.5-48 48v224c0 26.5 21.5 48 48 48h64v16H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0h224c35.3 0 64 28.7 64 64v64h-16V64c0-26.5-21.5-48-48-48m0 112h-16V96c0-8.8-7.2-16-16-16H96c-8.8 0-16 7.2-16 16v160c0 8.8 7.2 16 16 16h32v16H96c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h160c17.7 0 32 14.3 32 32zm-112 96v224c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V224c0-26.5-21.5-48-48-48H224c-26.5 0-48 21.5-48 48m-16 0c0-35.3 28.7-64 64-64h224c35.3 0 64 28.7 64 64v224c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64z"
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
                  d="M448 224v224H224V224zm-224-64c-35.3 0-64 28.7-64 64v224c0 35.3 28.7 64 64 64h224c35.3 0 64-28.7 64-64V224c0-35.3-28.7-64-64-64z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M0 64C0 28.7 28.7 0 64 0h224c35.3 0 64 28.7 64 64v96H224c-35.3 0-64 28.7-64 64v128H64c-35.3 0-64-28.7-64-64z"
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
