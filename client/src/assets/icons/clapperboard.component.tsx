import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ClapperboardIcon: React.FC<
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
                  d="M448 32h-86.1l-1 1-127 127H326l1-1L453.8 32.3c-1.9-.2-3.8-.3-5.8-.3m64 128V96c0-15.1-5.3-29.1-14-40L394 160zM294.1 32h-92.2l-1 1-127 127H166l1-1L294 32zM64 32C28.7 32 0 60.7 0 96v64h6.1l1-1 127-127zm448 160H0v224c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64z"
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
                  d="M48 208h416v208c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16zm352-48h-64l80-80h32c8.8 0 16 7.2 16 16zm-80-80-80 80h-64l80-80zm-160 0-80 80H48v-32l48-48zm352 80V96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V160"
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
                  d="M32 192v224c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V192zm350.6-32H480V96c0-9.2-3.9-17.5-10.1-23.3zm-45.3 0 96-96H326.6l-96 96h106.8zm-56-96H174.6l-96 96h106.8l96-96zm-152 0H64c-17.7 0-32 14.3-32 32v64h1.4l96-96zM512 96v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64"
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
                  d="M16 192v224c0 26.5 21.5 48 48 48h384c26.5 0 48-21.5 48-48V192zm339.3-16H496V96c0-16.5-8.3-31-21-39.7zm-22.6 0 5.7-5.7 121-121c-3.6-.9-7.4-1.3-11.3-1.3H331.3l-5.7 5.7L203.3 176zm-152 0 5.7-5.7L308.7 48H179.3l-5.7 5.7L51.3 176zm-152 0 5.7-5.7L156.7 48H64c-26.5 0-48 21.5-48 48v80zM512 96v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64"
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
                  d="M0 160h512v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M453.8 32.3 327 159l-1 1h-92.1L361 33l1-1h86c2 0 3.9.1 5.8.3M393.9 160 498 56c8.8 11 14 24.9 14 40v64zm-192-128H294L167 159l-1 1H73.9L201 33l1-1zM134 32 7 159l-1 1H0V96c0-35.3 28.7-64 64-64h70.1z"
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
