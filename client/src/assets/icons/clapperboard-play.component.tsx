import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ClapperboardPlayIcon: React.FC<
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
                  d="M453.8 32.3 327 159l-1 1h-92.1L361 33l1-1h86c2 0 3.9.1 5.8.3M393.9 160 498 56c8.8 11 14 24.9 14 40v64zm-192-128H294L167 159l-1 1H73.9L201 33l1-1zM134 32 7 159l-1 1H0V96c0-35.3 28.7-64 64-64h70.1zM0 192h512v224c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm216.5 65.9c-5.2 2.8-8.5 8.2-8.5 14.1v128c0 5.9 3.2 11.3 8.5 14.1s11.5 2.5 16.4-.8l96-64c4.4-3 7.1-8 7.1-13.3s-2.7-10.3-7.1-13.3l-96-64c-4.9-3.3-11.2-3.6-16.4-.8"
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
                  d="M48 416c0 8.8 7.2 16 16 16h384c8.8 0 16-7.2 16-16V208H48zm288-256h64l64-64c0-8.8-7.2-16-16-16h-32zm-96 0 80-80h-64l-80 80zm-160 0 80-80H96l-48 48v32zm432-64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64M216.5 241.9c5.2-2.8 11.5-2.5 16.4.8l96 64c4.4 3 7.1 8 7.1 13.3s-2.7 10.3-7.1 13.3l-96 64c-4.9 3.3-11.2 3.6-16.4.8s-8.5-8.2-8.5-14.1V256c0-5.9 3.2-11.3 8.5-14.1"
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
                  d="M480 192v224c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V192zm0-32h-97.4l87.3-87.3C476.1 78.5 480 86.8 480 96zm-249.4 0 96-96h106.8l-96 96zm-45.3 0H78.6l96-96h106.8l-96 96zM64 64h65.4l-96 96H32V96c0-17.7 14.3-32 32-32m448 96V96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V160m-295.9 66.2c-4.9-2.9-11.1-2.9-16.1-.1s-8.1 8.1-8.1 13.9v160c0 5.7 3.1 11 8.1 13.9s11.1 2.8 16.1-.1l136-80c4.9-2.9 7.9-8.1 7.9-13.8s-3-10.9-7.9-13.8zm96.3 93.8L224 372V268z"
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
                  d="M496 176v240c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V176zm0-16H371.3L475 56.3c12.7 8.7 21 23.2 21 39.7zm-276.7 0L325.7 53.7l5.7-5.7H448c3.9 0 7.7.5 11.3 1.3L348.7 160zm-22.6 0H67.3L173.7 53.7l5.7-5.7h129.3zM64 48h92.7l-112 112H16V96c0-26.5 21.5-48 48-48m448 112V96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V160m-307.8 65.2c-2.5-1.5-5.6-1.6-8.1-.2s-4.1 4.1-4.1 7v176c0 2.9 1.6 5.6 4.1 7s5.6 1.4 8.1-.2l144-88c2.4-1.5 3.8-4 3.8-6.8s-1.4-5.4-3.8-6.8zM328.7 320 208 393.7V246.3z"
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
                  d="M512 160H0v256c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64zm-295.5 81.9c5.2-2.8 11.5-2.5 16.4.8l96 64c4.4 3 7.1 8 7.1 13.3s-2.7 10.3-7.1 13.3l-96 64c-4.9 3.3-11.2 3.6-16.4.8s-8.5-8.2-8.5-14.1V256c0-5.9 3.2-11.3 8.5-14.1"
                />
                <path
                  className="aps-icon-foreground"
                  d="M448 32h-86.1l-1 1-127 127H326l1-1L453.8 32.3c-1.9-.2-3.8-.3-5.8-.3m64 128V96c0-15.1-5.3-29.1-14-40L394 160zM294.1 32h-92.2l-1 1-127 127H166l1-1L294 32zM64 32C28.7 32 0 60.7 0 96v64h6.1l1-1 127-127zm152.5 209.9c-5.2 2.8-8.5 8.2-8.5 14.1v128c0 5.9 3.2 11.3 8.5 14.1s11.5 2.5 16.4-.8l96-64c4.4-3 7.1-8 7.1-13.3s-2.7-10.3-7.1-13.3l-96-64c-4.9-3.3-11.2-3.6-16.4-.8"
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
