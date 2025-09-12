import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ObjectsAlignCenterHorizontalIcon: React.FC<
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
                  d="M256 0c-13.3 0-24 10.7-24 24v40H80c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h152v64h-88c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h88v40c0 13.3 10.7 24 24 24s24-10.7 24-24v-40h88c26.5 0 48-21.5 48-48v-64c0-26.5-21.5-48-48-48h-88v-64h152c26.5 0 48-21.5 48-48v-64c0-26.5-21.5-48-48-48H280V24c0-13.3-10.7-24-24-24"
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
                  d="M432 176H80v-64h352zm48-64c0-26.5-21.5-48-48-48H280V24c0-13.3-10.7-24-24-24s-24 10.7-24 24v40H80c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h152v64h-88c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h88v40c0 13.3 10.7 24 24 24s24-10.7 24-24v-40h88c26.5 0 48-21.5 48-48v-64c0-26.5-21.5-48-48-48h-88v-64h152c26.5 0 48-21.5 48-48zM368 400H144v-64h224z"
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
                  d="M448 176c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16h352c8.8 0 16 7.2 16 16zm-176 48h160c26.5 0 48-21.5 48-48v-64c0-26.5-21.5-48-48-48H272V16c0-8.8-7.2-16-16-16s-16 7.2-16 16v48H80c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h160v64h-96c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h96v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h96c26.5 0 48-21.5 48-48v-64c0-26.5-21.5-48-48-48h-96zm-16 96h112c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H144c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16z"
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
                  d="M264 8c0-4.4-3.6-8-8-8s-8 3.6-8 8v56H80c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h168v64H144c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h104v56c0 4.4 3.6 8 8 8s8-3.6 8-8v-56h104c26.5 0 48-21.5 48-48v-64c0-26.5-21.5-48-48-48H264v-64h168c26.5 0 48-21.5 48-48v-64c0-26.5-21.5-48-48-48H264zm-8 296h112c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H144c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32zm0-96H80c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32h352c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32z"
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
                  d="M80 64c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-64c0-26.5-21.5-48-48-48zm64 224c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48v-64c0-26.5-21.5-48-48-48z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M232 24c0-13.3 10.7-24 24-24s24 10.7 24 24v40h-48zm0 264v-64h48v64zm0 160h48v40c0 13.3-10.7 24-24 24s-24-10.7-24-24z"
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
