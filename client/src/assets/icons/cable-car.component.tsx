import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CableCarIcon: React.FC<
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
                  d="M288 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64M160 56a32 32 0 1 1 64 0 32 32 0 1 1-64 0M32 288c0-35.3 28.7-64 64-64h136v-66.5l-203.1 42c-13 2.7-25.7-5.7-28.4-18.6s5.7-25.7 18.6-28.4l232-48 232-48c13-2.7 25.7 5.7 28.4 18.6s-5.7 25.7-18.6 28.4l-212.9 44V224h136c35.3 0 64 28.7 64 64v160c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64zm64 0c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16zm112 16v64c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16h-64c-8.8 0-16 7.2-16 16m144-16c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16z"
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
                  d="M288 64a32 32 0 1 0 0-64 32 32 0 1 0 0 64m-64-8a32 32 0 1 0-64 0 32 32 0 1 0 64 0m208 232v64h-80v-80h64c8.8 0 16 7.2 16 16m0 112v48c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16v-48h352M80 352v-64c0-8.8 7.2-16 16-16h64v80zm128-80h96v80h-96zM96 224c-35.3 0-64 28.7-64 64v160c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V288c0-35.3-28.7-64-64-64H280v-76.5l212.9-44c13-2.7 21.3-15.4 18.6-28.4s-15.4-21.3-28.4-18.6l-232 48-232 48c-13 2.7-21.3 15.4-18.6 28.4s15.4 21.3 28.4 18.6l203.1-42V224z"
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
                  d="M288 48a24 24 0 1 0 0-48 24 24 0 1 0 0 48m-72 8a24 24 0 1 0-48 0 24 24 0 1 0 48 0m104 200v96H192v-96h128m32 0h64c17.7 0 32 14.3 32 32v64h-96zm96 128v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32v-64h384M64 352v-64c0-17.7 14.3-32 32-32h64v96zm352-128H272v-82.9l227.1-45.4c8.7-1.7 14.3-10.2 12.6-18.8s-10.2-14.3-18.8-12.6l-240 48-240 48C4.2 162-1.4 170.5.3 179.1s10.2 14.3 18.8 12.6L240 147.5V224H96c-35.3 0-64 28.7-64 64v160c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V288c0-35.3-28.7-64-64-64"
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
                  d="M272 32a16 16 0 1 1 32 0 16 16 0 1 1-32 0m48 0a32 32 0 1 0-64 0 32 32 0 1 0 64 0M192 48a16 16 0 1 1 0 32 16 16 0 1 1 0-32m0 48a32 32 0 1 0 0-64 32 32 0 1 0 0 64m224 144c26.5 0 48 21.5 48 48v160c0 26.5-21.5 48-48 48H96c-26.5 0-48-21.5-48-48V288c0-26.5 21.5-48 48-48h320m0-16H264v-97.6l241.8-54.6c4.3-1 7-5.3 6-9.6s-5.3-7-9.6-6l-248 56-248 56c-4.3 1-7 5.3-6 9.6s5.3 7 9.6 6L248 130v94H96c-35.3 0-64 28.7-64 64v160c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V288c0-35.3-28.7-64-64-64M96 304c0-8.8 7.2-16 16-16h80v96h-80c-8.8 0-16-7.2-16-16zm112 80v-96h96v96zm112 0v-96h80c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16zM80 304v64c0 17.7 14.3 32 32 32h288c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32H112c-17.7 0-32 14.3-32 32"
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
                  d="M492.9 103.5c13-2.7 21.3-15.4 18.6-28.4s-15.4-21.3-28.4-18.6l-232 48-232 48c-13 2.7-21.3 15.4-18.6 28.4s15.4 21.3 28.4 18.6l203.1-42V224h48v-76.5zM96 288c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16zm112 16v64c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16h-64c-8.8 0-16 7.2-16 16m144-16c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M320 32a32 32 0 1 0-64 0 32 32 0 1 0 64 0M192 88a32 32 0 1 0 0-64 32 32 0 1 0 0 64M96 224c-35.3 0-64 28.7-64 64v160c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V288c0-35.3-28.7-64-64-64zm0 64h64c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16m112 16c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16zm144-16h64c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16"
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
