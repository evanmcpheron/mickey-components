import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ListDropdownIcon: React.FC<
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
                  d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm384 160v224H64V192zm-11.3-96c7.1 0 10.7 8.6 5.7 13.7l-36.7 36.7c-3.1 3.1-8.2 3.1-11.3 0l-36.7-36.7c-5-5-1.5-13.7 5.7-13.7h73.4zM128 232c-13.3 0-24 10.7-24 24s10.7 24 24 24h256c13.3 0 24-10.7 24-24s-10.7-24-24-24zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24h256c13.3 0 24-10.7 24-24s-10.7-24-24-24z"
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
                  d="M48 192v224c0 8.8 7.2 16 16 16h384c8.8 0 16-7.2 16-16V192zM0 96c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm436.7 0h-73.4c-7.1 0-10.7 8.6-5.7 13.7l36.7 36.7c3.1 3.1 8.2 3.1 11.3 0l36.7-36.7c5-5 1.5-13.7-5.7-13.7zM128 232h256c13.3 0 24 10.7 24 24s-10.7 24-24 24H128c-13.3 0-24-10.7-24-24s10.7-24 24-24m0 96h256c13.3 0 24 10.7 24 24s-10.7 24-24 24H128c-13.3 0-24-10.7-24-24s10.7-24 24-24"
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
                  d="M64 64c-17.7 0-32 14.3-32 32v64h448V96c0-17.7-14.3-32-32-32zM32 192v224c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V192zM0 96c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm128 160h256c8.8 0 16 7.2 16 16s-7.2 16-16 16H128c-8.8 0-16-7.2-16-16s7.2-16 16-16m0 96h256c8.8 0 16 7.2 16 16s-7.2 16-16 16H128c-8.8 0-16-7.2-16-16s7.2-16 16-16M352.2 90.3l31.8 19 31.8-19.1c7.6-4.5 17.4-2.1 21.9 5.5s2.1 17.4-5.5 22l-40 24c-5.1 3-11.4 3-16.5 0l-40-24c-7.6-4.5-10-14.4-5.5-22s14.4-10 21.9-5.5z"
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
                  d="M64 48c-26.5 0-48 21.5-48 48v80h480V96c0-26.5-21.5-48-48-48zM16 192v224c0 26.5 21.5 48 48 48h384c26.5 0 48-21.5 48-48V192zM0 96c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm120 176h272c4.4 0 8 3.6 8 8s-3.6 8-8 8H120c-4.4 0-8-3.6-8-8s3.6-8 8-8m0 96h272c4.4 0 8 3.6 8 8s-3.6 8-8 8H120c-4.4 0-8-3.6-8-8s3.6-8 8-8M349 89.8l35 28 35-28c3.4-2.8 8.5-2.2 11.2 1.2s2.2 8.5-1.2 11.2l-40 32c-2.9 2.3-7.1 2.3-10 0l-40-32c-3.4-2.8-4-7.8-1.2-11.2s7.8-4 11.2-1.2"
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
                  d="M128 232c-13.3 0-24 10.7-24 24s10.7 24 24 24h256c13.3 0 24-10.7 24-24s-10.7-24-24-24zm0 88c-13.3 0-24 10.7-24 24s10.7 24 24 24h256c13.3 0 24-10.7 24-24s-10.7-24-24-24z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M0 96c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm64 96v224h384V192zm299.3-96c-7.1 0-10.7 8.6-5.7 13.7l36.7 36.7c3.1 3.1 8.2 3.1 11.3 0l36.7-36.7c5-5 1.5-13.7-5.7-13.7z"
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
