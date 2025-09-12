import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const TableCellsLockIcon: React.FC<
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
                  d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320v-64h-24v-64h24c0-23.7 12.9-44.4 32-55.4V288h-56v-64h66.8c15.8-33.2 47.5-57.5 85.2-62.9V96c0-35.3-28.7-64-64-64zm88 64v64H64V96zm56 0h88v64h-88zm240 0v64h-88V96zM64 224h88v64H64zm232 0v64h-88v-64zM152 352v64H64v-64zm56 0h88v64h-88zm320-112c17.7 0 32 14.3 32 32v48h-64v-48c0-17.7 14.3-32 32-32m-80 32v48c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h160c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32v-48c0-44.2-35.8-80-80-80s-80 35.8-80 80"
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
                  d="M360 80v88h104V96c0-8.8-7.2-16-16-16zm-48 0H200v88h112zm-160 0H64c-8.8 0-16 7.2-16 16v72h104zM48 216v80h104v-80zm0 128v72c0 8.8 7.2 16 16 16h88v-88zm152 88h112v-88H200zm160 0h24v48H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v65.1c-34.7 5-64.2 25.8-81 54.9h-71v80h56v.6c-16.9 9.8-29 27.1-31.5 47.4H360zM200 296h112v-80H200zm328-56c-17.7 0-32 14.3-32 32v48h64v-48c0-17.7-14.3-32-32-32m-80 32c0-44.2 35.8-80 80-80s80 35.8 80 80v48c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V352c0-17.7 14.3-32 32-32z"
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
                  d="M352 64v96h128V96c0-17.7-14.3-32-32-32zm-32 0H192v96h128zm-160 0H64c-17.7 0-32 14.3-32 32v64h128zM32 192v128h128V192zm0 160v64c0 17.7 14.3 32 32 32h96v-96zm160 96h128v-96H192zm160 0h32v32H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v65.1c-24.1 3.5-45.8 14.6-62.4 30.9H352v128h40.6c-5.4 9.4-8.6 20.3-8.6 32h-32zM192 320h128V192H192zm336-96c-26.5 0-48 21.5-48 48v48h96v-48c0-26.5-21.5-48-48-48m-80 48c0-44.2 35.8-80 80-80s80 35.8 80 80v48c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V352c0-17.7 14.3-32 32-32zm160 80H448v128h160z"
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
                  d="M352 48h96c26.5 0 48 21.5 48 48v69.5c5.1-1.8 10.5-3.2 16-4.1V96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320v-16h-32V336h34c1.5-5.7 3.7-11 6.5-16H352V192h104.4c5.4-6.1 11.7-11.5 18.5-16H352zm-16 0v128H176V48zm-176 0v128H16V96c0-26.5 21.5-48 48-48zM16 192h144v128H16zm0 144h144v128H64c-26.5 0-48-21.5-48-48zm160 128V336h160v128zm0-144V192h160v128zm352-112c26.5 0 48 21.5 48 48v64h-96v-64c0-26.5 21.5-48 48-48m-64 48v64h-16c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h160c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32h-16v-64c0-35.3-28.7-64-64-64s-64 28.7-64 64m-16 80h160c8.8 0 16 7.2 16 16v128c0 8.8-7.2 16-16 16H448c-8.8 0-16-7.2-16-16V352c0-8.8 7.2-16 16-16"
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
                  d="M0 96c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v65.1c-37.8 5.4-69.4 29.6-85.2 62.9H360v64h56v8.6c-19.1 11.1-32 31.7-32 55.4h-24v64h24v64H64c-35.3 0-64-28.7-64-64zm64 0v64h88V96zm0 128v64h88v-64zm0 128v64h88v-64zM208 96v64h88V96zm0 128v64h88v-64zm0 128v64h88v-64zM360 96v64h88V96z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M496 272v48h64v-48c0-17.7-14.3-32-32-32s-32 14.3-32 32m-48 48v-48c0-44.2 35.8-80 80-80s80 35.8 80 80v48c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V352c0-17.7 14.3-32 32-32"
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
