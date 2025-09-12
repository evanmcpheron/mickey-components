import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BoreHoleIcon: React.FC<
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
                  d="M256 0c-17.7 0-32 14.3-32 32v264.6c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-23.7-12.9-44.4-32-55.4V32c0-17.7-14.3-32-32-32M48 128c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48h-80c-17.7 0-32 14.3-32 32v192c0 53-43 96-96 96s-96-43-96-96V160c0-17.7-14.3-32-32-32z"
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
                  d="M256 0c13.3 0 24 10.7 24 24v204.7c23.5 9.5 40 32.5 40 59.3 0 35.3-28.7 64-64 64s-64-28.7-64-64c0-26.9 16.5-49.9 40-59.3V24c0-13.3 10.7-24 24-24m0 272a16 16 0 1 0 0 32 16 16 0 1 0 0-32m-144-96H80c-17.7 0-32 14.3-32 32v224c0 17.7 14.3 32 32 32h352c17.7 0 32-14.3 32-32V208c0-17.7-14.3-32-32-32h-32v112c0 79.5-64.5 144-144 144s-144-64.5-144-144zm16-48c17.7 0 32 14.3 32 32v128c0 53 43 96 96 96s96-43 96-96V160c0-17.7 14.3-32 32-32h48c44.2 0 80 35.8 80 80v224c0 44.2-35.8 80-80 80H80c-44.2 0-80-35.8-80-80V208c0-44.2 35.8-80 80-80z"
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
                  d="M256 0c-8.8 0-16 7.2-16 16v242c-27.6 7.1-48 32.2-48 62 0 35.3 28.7 64 64 64s64-28.7 64-64c0-29.8-20.4-54.9-48-62V16c0-8.8-7.2-16-16-16m32 320a32 32 0 1 1-64 0 32 32 0 1 1 64 0M80 160h48v160c0 70.7 57.3 128 128 128s128-57.3 128-128V160h48c26.5 0 48 21.5 48 48v224c0 26.5-21.5 48-48 48H80c-26.5 0-48-21.5-48-48V208c0-26.5 21.5-48 48-48m80 0c0-17.7-14.3-32-32-32H80c-44.2 0-80 35.8-80 80v224c0 44.2 35.8 80 80 80h352c44.2 0 80-35.8 80-80V208c0-44.2-35.8-80-80-80h-48c-17.7 0-32 14.3-32 32v160c0 53-43 96-96 96s-96-43-96-96z"
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
                  d="M256 0c4.4 0 8 3.6 8 8v264.5c31.6 3.9 56 30.9 56 63.5 0 35.3-28.7 64-64 64s-64-28.7-64-64c0-32.6 24.4-59.6 56-63.5V8c0-4.4 3.6-8 8-8m0 288a48 48 0 1 0 0 96 48 48 0 1 0 0-96M64 144c-26.5 0-48 21.5-48 48v256c0 26.5 21.5 48 48 48h384c26.5 0 48-21.5 48-48V192c0-26.5-21.5-48-48-48h-64c-8.8 0-16 7.2-16 16v192c0 61.9-50.1 112-112 112s-112-50.1-112-112V160c0-8.8-7.2-16-16-16zM0 192c0-35.3 28.7-64 64-64h64c17.7 0 32 14.3 32 32v192c0 53 43 96 96 96s96-43 96-96V160c0-17.7 14.3-32 32-32h64c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64z"
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
                  d="M48 128c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48h-80c-17.7 0-32 14.3-32 32v192c0 53-43 96-96 96s-96-43-96-96V160c0-17.7-14.3-32-32-32z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32v264.6c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-23.7-12.9-44.4-32-55.4z"
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
