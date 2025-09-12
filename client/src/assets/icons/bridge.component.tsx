import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BridgeIcon: React.FC<
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
                  d="M32 32C14.3 32 0 46.3 0 64s14.3 32 32 32h40v64H0v128c53 0 96 43 96 96v64c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32v-64c0-53 43-96 96-96s96 43 96 96v64c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32v-64c0-53 43-96 96-96V160h-72V96h40c17.7 0 32-14.3 32-32s-14.3-32-32-32zm424 64v64h-80V96zm-128 0v64h-80V96zm-128 0v64h-80V96z"
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
                  d="M24 32C10.7 32 0 42.7 0 56s10.7 24 24 24h48v64H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h528c13.3 0 24-10.7 24-24s-10.7-24-24-24h-48V80h40c13.3 0 24-10.7 24-24s-10.7-24-24-24zm432 48v64h-80V80zm-128 0v64h-80V80zm-128 0v64h-80V80zM24 240c-13.3 0-24 10.7-24 24s10.7 24 24 24c26.5 0 48 21.5 48 48v104c0 22.1 17.9 40 40 40h64c22.1 0 40-17.9 40-40v-96c0-30.9 25.1-56 56-56h32c30.9 0 56 25.1 56 56v96c0 22.1 17.9 40 40 40h64c22.1 0 40-17.9 40-40V336c0-26.5 21.5-48 48-48 13.3 0 24-10.7 24-24s-10.7-24-24-24c-53 0-96 43-96 96v96h-48v-88c0-57.4-46.6-104-104-104h-32c-57.4 0-104 46.6-104 104v88h-48v-96c0-53-43-96-96-96"
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
                  d="M16 32C7.2 32 0 39.2 0 48s7.2 16 16 16h64v64H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h544c8.8 0 16-7.2 16-16s-7.2-16-16-16h-64V64h64c8.8 0 16-7.2 16-16s-7.2-16-16-16H16m448 32v64h-96V64zm-128 0v64h-96V64zm-128 0v64h-96V64zM16 240c-8.8 0-16 7.2-16 16s7.2 16 16 16h16c35.3 0 64 28.7 64 64v96c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48v-96c0-35.3 28.7-64 64-64s64 28.7 64 64v96c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48v-96c0-35.3 28.7-64 64-64h16c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16c-53 0-96 43-96 96v96c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-96c0-53-43-96-96-96s-96 43-96 96v96c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-96c0-53-43-96-96-96z"
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
                  d="M8 32c-4.4 0-8 3.6-8 8s3.6 8 8 8h80v96H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h560c4.4 0 8-3.6 8-8s-3.6-8-8-8h-80V48h80c4.4 0 8-3.6 8-8s-3.6-8-8-8zm464 16v96H360V48zm-128 0v96H232V48zm-128 0v96H104V48zM8 256c-4.4 0-8 3.6-8 8s3.6 8 8 8h24c39.8 0 72 32.2 72 72v96c0 22.1 17.9 40 40 40h32c22.1 0 40-17.9 40-40v-96c0-39.8 32.2-72 72-72s72 32.2 72 72v96c0 22.1 17.9 40 40 40h32c22.1 0 40-17.9 40-40v-96c0-39.8 32.2-72 72-72h24c4.4 0 8-3.6 8-8s-3.6-8-8-8h-24c-48.6 0-88 39.4-88 88v96c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24v-96c0-48.6-39.4-88-88-88s-88 39.4-88 88v96c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24v-96c0-48.6-39.4-88-88-88z"
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
                  d="M0 64c0-17.7 14.3-32 32-32h512c17.7 0 32 14.3 32 32s-14.3 32-32 32h-40v64h-48V96h-80v64h-48V96h-80v64h-48V96h-80v64H72V96H32C14.3 96 0 81.7 0 64"
                />
                <path
                  className="aps-icon-foreground"
                  d="M0 160h576v128c-53 0-96 43-96 96v64c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-64c0-53-43-96-96-96s-96 43-96 96v64c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-64c0-53-43-96-96-96z"
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
