import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const RoadBridgeIcon: React.FC<
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
                  d="M352 0h256c17.7 0 32 14.3 32 32v448c0 17.7-14.3 32-32 32H352c-17.7 0-32-14.3-32-32V32c0-17.7 14.3-32 32-32m128 200c-13.3 0-24 10.7-24 24v64c0 13.3 10.7 24 24 24s24-10.7 24-24v-64c0-13.3-10.7-24-24-24m24 184c0-13.3-10.7-24-24-24s-24 10.7-24 24v64c0 13.3 10.7 24 24 24s24-10.7 24-24zM480 40c-13.3 0-24 10.7-24 24v64c0 13.3 10.7 24 24 24s24-10.7 24-24V64c0-13.3-10.7-24-24-24M32 96h256v64h-40v64h40v96c-53 0-96 43-96 96v64c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-64c0-53-43-96-96-96v-96h72v-64H32c-17.7 0-32-14.3-32-32s14.3-32 32-32m168 64h-80v64h80z"
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
                  d="M576 48c8.8 0 16 7.2 16 16v384c0 8.8-7.2 16-16 16h-72v-56c0-13.3-10.7-24-24-24s-24 10.7-24 24v56h-72c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16h72v56c0 13.3 10.7 24 24 24s24-10.7 24-24V48zm0-48H384c-35.3 0-64 28.7-64 64v384c0 35.3 28.7 64 64 64h192c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64m-96 192c-13.3 0-24 10.7-24 24v80c0 13.3 10.7 24 24 24s24-10.7 24-24v-80c0-13.3-10.7-24-24-24M24 96c-13.3 0-24 10.7-24 24s10.7 24 24 24h48v64H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h264v-48h-40v-64h40V96zm248 208c-57.4 0-104 46.6-104 104v56h-48v-64c0-53-43-96-96-96-13.3 0-24 10.7-24 24s10.7 24 24 24c26.5 0 48 21.5 48 48v72c0 22.1 17.9 40 40 40h64c22.1 0 40-17.9 40-40v-64c0-30.9 25.1-56 56-56h16v-48zm-72-160v64h-80v-64z"
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
                  d="M576 32c17.7 0 32 14.3 32 32v384c0 17.7-14.3 32-32 32h-80v-64c0-8.8-7.2-16-16-16s-16 7.2-16 16v64h-80c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32h80v64c0 8.8 7.2 16 16 16s16-7.2 16-16V32zm0-32H384c-35.3 0-64 28.7-64 64v384c0 35.3 28.7 64 64 64h192c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64m-96 192c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16s16-7.2 16-16v-96c0-8.8-7.2-16-16-16M16 96c-8.8 0-16 7.2-16 16s7.2 16 16 16h64v64H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h272v-32h-48v-64h48V96zm248 192c-48.6 0-88 39.4-88 88v88c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-88c0-48.6-39.4-88-88-88h-8c-8.8 0-16 7.2-16 16s7.2 16 16 16h8c30.9 0 56 25.1 56 56v88c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48v-88c0-30.9 25.1-56 56-56h24v-32zm-56-160v64h-96v-64z"
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
                  d="M576 16h-88v80c0 4.4-3.6 8-8 8s-8-3.6-8-8V16h-88c-26.5 0-48 21.5-48 48v384c0 26.5 21.5 48 48 48h88v-80c0-4.4 3.6-8 8-8s8 3.6 8 8v80h88c26.5 0 48-21.5 48-48V64c0-26.5-21.5-48-48-48M384 0h192c35.3 0 64 28.7 64 64v384c0 35.3-28.7 64-64 64H384c-35.3 0-64-28.7-64-64V64c0-35.3 28.7-64 64-64m96 192c4.4 0 8 3.6 8 8v112c0 4.4-3.6 8-8 8s-8-3.6-8-8V200c0-4.4 3.6-8 8-8M8 96h280v16h-56v80h56v16H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h80v-80H8c-4.4 0-8-3.6-8-8s3.6-8 8-8m264 208h16v16h-16c-39.8 0-72 32.2-72 72v80c0 22.1-17.9 40-40 40h-32c-22.1 0-40-17.9-40-40v-80c0-39.8-32.2-72-72-72H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h8c48.6 0 88 39.4 88 88v80c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-80c0-48.6 39.4-88 88-88m-56-192H104v80h112z"
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
                  d="M288 96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h40v64H0v96c53 0 96 43 96 96v64c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32v-64c0-53 43-96 96-96v-96h-40v-64h40zm-168 64h80v64h-80z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M608 0H352c-17.7 0-32 14.3-32 32v448c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32M504 224v64c0 13.3-10.7 24-24 24s-24-10.7-24-24v-64c0-13.3 10.7-24 24-24s24 10.7 24 24m-24 136c13.3 0 24 10.7 24 24v64c0 13.3-10.7 24-24 24s-24-10.7-24-24v-64c0-13.3 10.7-24 24-24m24-296v64c0 13.3-10.7 24-24 24s-24-10.7-24-24V64c0-13.3 10.7-24 24-24s24 10.7 24 24"
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
