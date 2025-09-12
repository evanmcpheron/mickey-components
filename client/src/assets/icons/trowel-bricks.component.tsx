import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const TrowelBricksIcon: React.FC<
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
                  d="M240.8 4.8C250.3 10.6 256 20.9 256 32v72h89c3.6-13.8 16.1-24 31-24h88c26.5 0 48 21.5 48 48s-21.5 48-48 48h-88c-14.9 0-27.4-10.2-31-24h-89v72c0 11.1-5.7 21.4-15.2 27.2s-21.2 6.4-31.1 1.4l-192-96C6.8 151.2 0 140.1 0 128s6.8-23.2 17.7-28.6l192-96c9.9-5 21.7-4.4 31.1 1.4M288 256c0-17.7 14.3-32 32-32h160c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H320c-17.7 0-32-14.3-32-32zM32 384h96c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32m192 0h256c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32"
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
                  d="M240.8 4.8c-9.4-5.8-21.2-6.4-31.1-1.4l-192 96C6.8 104.8 0 115.9 0 128s6.8 23.2 17.7 28.6l192 96c9.9 5 21.7 4.4 31.1-1.4S256 235.1 256 224v-72h89c3.6 13.8 16.1 24 31 24h88c26.5 0 48-21.5 48-48s-21.5-48-48-48h-88c-14.9 0-27.4 10.2-31 24h-89V32c0-11.1-5.7-21.4-15.2-27.2M288 384h176v80H256v-80zm-80 0v80H48v-80zm256-48H336v-64h128zm-176-64v64H48c-26.5 0-48 21.5-48 48v80c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-80c0-1.3-.1-2.7-.2-4 .1-1.3.2-2.7.2-4V272c0-26.5-21.5-48-48-48H336c-26.5 0-48 21.5-48 48"
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
                  d="m32 128 192-96v192zm224-96c0-11.1-5.7-21.4-15.2-27.2s-21.2-6.4-31.1-1.4l-192 96C6.8 104.8 0 115.9 0 128s6.8 23.2 17.7 28.6l192 96c9.9 5 21.7 4.4 31.1-1.4S256 235.1 256 224v-80h88c0 17.7 14.3 32 32 32h88c26.5 0 48-21.5 48-48s-21.5-48-48-48h-88c-17.7 0-32 14.3-32 32h-88zm208 80c8.8 0 16 7.2 16 16s-7.2 16-16 16h-88v-32zM288 384h192v96H256v-96zm-64 0v96H32v-96zm256-32H320v-96h160zm-192-96v96H32c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32V256c0-17.7-14.3-32-32-32H320c-17.7 0-32 14.3-32 32"
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
                  d="M232.4 18.4c-4.7-2.9-10.6-3.2-15.6-.7l-192 96C19.4 116.4 16 122 16 128s3.4 11.6 8.8 14.3l192 96c5 2.5 10.9 2.2 15.6-.7s7.6-8.1 7.6-13.6V32c0-5.5-2.9-10.7-7.6-13.6M256 32v88h88v-8c0-17.7 14.3-32 32-32h88c26.5 0 48 21.5 48 48s-21.5 48-48 48h-88c-17.7 0-32-14.3-32-32v-8h-88v88c0 11.1-5.7 21.4-15.2 27.2s-21.2 6.4-31.1 1.4l-192-96C6.8 151.2 0 140.1 0 128s6.8-23.2 17.7-28.6l192-96c9.9-5 21.7-4.4 31.1 1.4S256 20.9 256 32m104 112c0 8.8 7.2 16 16 16h88c17.7 0 32-14.3 32-32s-14.3-32-32-32h-88c-8.8 0-16 7.2-16 16v32m-72 240h-48v112h240c8.8 0 16-7.2 16-16v-96H288m-64-16h64v-96c0-17.7 14.3-32 32-32h160c17.7 0 32 14.3 32 32v208c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32v-80c0-17.7 14.3-32 32-32zm0 16H32c-8.8 0-16 7.2-16 16v80c0 8.8 7.2 16 16 16h192zm272-16v-96c0-8.8-7.2-16-16-16H320c-8.8 0-16 7.2-16 16v96z"
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
                  d="M320 224h160c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H320c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32M0 416c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm192 0c0-17.7 14.3-32 32-32h256c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M256 32c0-11.1-5.7-21.4-15.2-27.2s-21.2-6.4-31.1-1.4l-192 96C6.8 104.8 0 115.9 0 128s6.8 23.2 17.7 28.6l192 96c9.9 5 21.7 4.4 31.1-1.4S256 235.1 256 224v-72h89c3.6 13.8 16.1 24 31 24h88c26.5 0 48-21.5 48-48s-21.5-48-48-48h-88c-14.9 0-27.4 10.2-31 24h-89z"
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
