import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BridgeLockIcon: React.FC<
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
                  d="M32 64c0-17.7 14.3-32 32-32h512c17.7 0 32 14.3 32 32s-14.3 32-32 32h-40v64h-8c-61.9 0-112 50.1-112 112v24.6c-9.9 5.8-18.2 14.1-23.8 24.1-17.6-20-43.4-32.7-72.2-32.7-53 0-96 43-96 96v64c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-64c0-53-43-96-96-96V160h72V96H64c-17.7 0-32-14.3-32-32m376 32v64h80V96zm-48 64V96h-80v64zM152 96v64h80V96zm376 144c-17.7 0-32 14.3-32 32v48h64v-48c0-17.7-14.3-32-32-32m-80 32c0-44.2 35.8-80 80-80s80 35.8 80 80v48c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V352c0-17.7 14.3-32 32-32z"
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
                  d="M56 32c-13.3 0-24 10.7-24 24s10.7 24 24 24h48v64H56c-13.3 0-24 10.7-24 24s10.7 24 24 24h393.6c20.2-19.8 47.9-32 78.4-32 27.3 0 52.4 9.8 71.8 26.1 5-4.4 8.2-10.9 8.2-18.1 0-13.3-10.7-24-24-24h-48V80h40c13.3 0 24-10.7 24-24s-10.7-24-24-24zm280 208h-32c-57.4 0-104 46.6-104 104v88h-48v-96c0-53-43-96-96-96-13.3 0-24 10.7-24 24s10.7 24 24 24c26.5 0 48 21.5 48 48v104c0 22.1 17.9 40 40 40h64c22.1 0 40-17.9 40-40v-96c0-30.9 25.1-56 56-56h32c24.9 0 45.9 16.2 53.2 38.6 5.5-12.6 14.9-23.2 26.8-30v-19c-19.1-22.9-47.8-37.5-80-37.5zM488 80v64h-80V80zm-128 0v64h-80V80zm-128 0v64h-80V80zm296 160c17.7 0 32 14.3 32 32v48h-64v-48c0-17.7 14.3-32 32-32m-80 32v48c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h160c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32v-48c0-44.2-35.8-80-80-80s-80 35.8-80 80"
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
                  d="M48 32h544c8.8 0 16 7.2 16 16s-7.2 16-16 16h-64v64h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H48c-8.8 0-16-7.2-16-16s7.2-16 16-16h64V64H48c-8.8 0-16-7.2-16-16s7.2-16 16-16m272 208c40.6 0 75.4 25.3 89.4 60.9C394 312.6 384 331.2 384 352v-16c0-35.3-28.7-64-64-64s-64 28.7-64 64v96c0 26.5-21.5 48-48 48h-32c-26.5 0-48-21.5-48-48v-96c0-35.3-28.7-64-64-64H48c-8.8 0-16-7.2-16-16s7.2-16 16-16h16c53 0 96 43 96 96v96c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-96c0-53 43-96 96-96M496 64h-96v64h96zm-128 0h-96v64h96zm-128 0h-96v64h96zm288 160c-26.5 0-48 21.5-48 48v48h96v-48c0-26.5-21.5-48-48-48m-80 48c0-44.2 35.8-80 80-80s80 35.8 80 80v48c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V352c0-17.7 14.3-32 32-32zm0 80v128h160V352z"
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
                  d="M40 32c-4.4 0-8 3.6-8 8s3.6 8 8 8h80v96H40c-4.4 0-8 3.6-8 8s3.6 8 8 8h560c4.4 0 8-3.6 8-8s-3.6-8-8-8h-80V48h80c4.4 0 8-3.6 8-8s-3.6-8-8-8zm349.6 293.7c2.8-6.2 6.5-11.9 11.1-16.8-13.6-31.1-44.6-52.9-80.7-52.9-48.6 0-88 39.4-88 88v96c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24v-96c0-48.6-39.4-88-88-88H40c-4.4 0-8 3.6-8 8s3.6 8 8 8h24c39.8 0 72 32.2 72 72v96c0 22.1 17.9 40 40 40h32c22.1 0 40-17.9 40-40v-96c0-39.8 32.2-72 72-72 33.4 0 61.5 22.8 69.6 53.7M504 48v96H392V48zm-128 0v96H264V48zm-128 0v96H136V48zm280 160c26.5 0 48 21.5 48 48v64h-96v-64c0-26.5 21.5-48 48-48m-64 48v64h-16c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h160c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32h-16v-64c0-35.3-28.7-64-64-64s-64 28.7-64 64m-16 80h160c8.8 0 16 7.2 16 16v128c0 8.8-7.2 16-16 16H448c-8.8 0-16-7.2-16-16V352c0-8.8 7.2-16 16-16"
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
                  d="M64 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h40v64H32v128c53 0 96 43 96 96v64c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32v-64c0-53 43-96 96-96 28.8 0 54.6 12.7 72.2 32.7 5.6-10 13.9-18.4 23.8-24.1V272c0-61.9 50.1-112 112-112h8V96h40c17.7 0 32-14.3 32-32s-14.3-32-32-32zm424 64v64h-80V96zm-128 0v64h-80V96zm-128 0v64h-80V96z"
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
