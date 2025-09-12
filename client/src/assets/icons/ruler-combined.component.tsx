import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const RulerCombinedIcon: React.FC<
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
                  d="M.2 468.9C2.7 493.1 23.1 512 48 512h416c26.5 0 48-21.5 48-48v-96c0-26.5-21.5-48-48-48h-48v80c0 8.8-7.2 16-16 16s-16-7.2-16-16v-80h-64v80c0 8.8-7.2 16-16 16s-16-7.2-16-16v-80h-64v80c0 8.8-7.2 16-16 16s-16-7.2-16-16v-80h-80c-8.8 0-16-7.2-16-16s7.2-16 16-16h80v-64h-80c-8.8 0-16-7.2-16-16s7.2-16 16-16h80v-64h-80c-8.8 0-16-7.2-16-16s7.2-16 16-16h80V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v416c0 1.7.1 3.3.2 4.9"
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
                  d="M192 288v-64h-64c-8.8 0-16-7.2-16-16s7.2-16 16-16h64v-64h-64c-8.8 0-16-7.2-16-16s7.2-16 16-16h64V64c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16v384c0 .6 0 1.2.1 1.7.8 8 7.7 14.3 15.9 14.3h384c8.8 0 16-7.2 16-16V336c0-8.8-7.2-16-16-16h-32v64c0 8.8-7.2 16-16 16s-16-7.2-16-16v-64h-64v64c0 8.8-7.2 16-16 16s-16-7.2-16-16v-64h-64v64c0 8.8-7.2 16-16 16s-16-7.2-16-16v-64h-64c-8.8 0-16-7.2-16-16s7.2-16 16-16zm96-16h160c35.3 0 64 28.7 64 64v112c0 35.3-28.7 64-64 64H64C30.9 512 3.6 486.8.3 454.5c-.2-2.2-.3-4.3-.3-6.5V64C0 28.7 28.7 0 64 0h112c35.3 0 64 28.7 64 64v208z"
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
                  d="M192 192v-64h-64c-8.8 0-16-7.2-16-16s7.2-16 16-16h64V64c0-17.7-14.3-32-32-32H64c-17.7 0-32 14.3-32 32v384c0 1.1.1 2.2.2 3.3C33.8 467.4 47.5 480 64 480h384c17.7 0 32-14.3 32-32v-96c0-17.7-14.3-32-32-32h-32v64c0 8.8-7.2 16-16 16s-16-7.2-16-16v-64h-64v64c0 8.8-7.2 16-16 16s-16-7.2-16-16v-64h-64v64c0 8.8-7.2 16-16 16s-16-7.2-16-16v-64h-64c-8.8 0-16-7.2-16-16s7.2-16 16-16h64v-64h-64c-8.8 0-16-7.2-16-16s7.2-16 16-16zm64 96h192c35.3 0 64 28.7 64 64v96c0 35.3-28.7 64-64 64H64C30.9 512 3.6 486.8.3 454.5c-.2-2.2-.3-4.3-.3-6.5V64C0 28.7 28.7 0 64 0h96c35.3 0 64 28.7 64 64v224z"
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
                  d="M192 208h-88c-4.4 0-8 3.6-8 8s3.6 8 8 8h88v80h-88c-4.4 0-8 3.6-8 8s3.6 8 8 8h88v88c0 4.4 3.6 8 8 8s8-3.6 8-8v-88h80v88c0 4.4 3.6 8 8 8s8-3.6 8-8v-88h80v88c0 4.4 3.6 8 8 8s8-3.6 8-8v-88h48c26.5 0 48 21.5 48 48v80c0 26.5-21.5 48-48 48H64c-23.2 0-42.6-16.4-47-38.3-.6-3.1-1-6.4-1-9.7V64c0-26.5 21.5-48 48-48h80c26.5 0 48 21.5 48 48v48h-88c-4.4 0-8 3.6-8 8s3.6 8 8 8h88zm200 96H208V64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64v384c0 4.4.4 8.7 1.3 12.9C7.3 490.1 33.1 512 64 512h384c35.3 0 64-28.7 64-64v-80c0-35.3-28.7-64-64-64z"
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
                  d="M.2 468.9C2.7 493.1 23.1 512 48 512h416c26.5 0 48-21.5 48-48v-96c0-26.5-21.5-48-48-48h-48v80c0 8.8-7.2 16-16 16s-16-7.2-16-16v-80h-64v80c0 8.8-7.2 16-16 16s-16-7.2-16-16v-80h-64v80c0 8.8-7.2 16-16 16s-16-7.2-16-16v-80h-80c-8.8 0-16-7.2-16-16s7.2-16 16-16h80v-64h-80c-8.8 0-16-7.2-16-16s7.2-16 16-16h80v-64h-80c-8.8 0-16-7.2-16-16s7.2-16 16-16h80V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v416c0 1.7.1 3.3.2 4.9"
                />
                <path
                  className="aps-icon-foreground"
                  d="M112 96c-8.8 0-16 7.2-16 16s7.2 16 16 16h80V96zm80 96h-80c-8.8 0-16 7.2-16 16s7.2 16 16 16h80zm0 96h-80c-8.8 0-16 7.2-16 16s7.2 16 16 16h80v80c0 8.8 7.2 16 16 16s16-7.2 16-16v-80h-32zm128 32h-32v80c0 8.8 7.2 16 16 16s16-7.2 16-16zm96 80v-80h-32v80c0 8.8 7.2 16 16 16s16-7.2 16-16"
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
