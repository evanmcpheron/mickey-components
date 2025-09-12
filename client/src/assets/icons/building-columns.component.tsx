import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BuildingColumnsIcon: React.FC<
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
                  d="m243.4 2.6-224 96c-14 6-21.8 21-18.7 35.8S16.8 160 32 160v8c0 13.3 10.7 24 24 24h400c13.3 0 24-10.7 24-24v-8c15.2 0 28.3-10.7 31.3-25.6s-4.8-29.9-18.7-35.8l-224-96c-8-3.4-17.2-3.4-25.2 0M128 224H64v196.3c-.6.3-1.2.7-1.8 1.1l-48 32c-11.7 7.8-17 22.4-12.9 35.9S17.9 512 32 512h448c14.1 0 26.5-9.2 30.6-22.7s-1.1-28.1-12.9-35.9l-48-32c-.6-.4-1.2-.7-1.8-1.1V224H384v192h-40V224h-64v192h-48V224h-64v192h-40zM256 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64"
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
                  d="M267.6 3c-7.2-4-16-4-23.2 0L17.6 128.1C6.7 134.1 0 145.5 0 157.9 0 176.8 15.2 192 34.1 192h443.8c18.8 0 34.1-15.2 34.1-34.1 0-12.4-6.7-23.8-17.6-29.8zm-39.3 141H88.2L256 51.4 423.8 144H283.7c2.7-4.7 4.3-10.2 4.3-16 0-17.7-14.3-32-32-32s-32 14.3-32 32c0 5.8 1.6 11.3 4.3 16M64 224v160c-13.3 0-24 10.7-24 24s10.7 24 24 24h392c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8V224h-48v160h-64V224h-48v160h-64V224h-48v160h-64V224zM32 464c-13.3 0-24 10.7-24 24s10.7 24 24 24h456c13.3 0 24-10.7 24-24s-10.7-24-24-24z"
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
                  d="M263.9 2.1C259-.7 253-.7 248.1 2.1L15.8 133.7C6 139.3 0 149.6 0 160.8 0 178 14 192 31.2 192h449.6c17.2 0 31.2-14 31.2-31.2 0-11.2-6-21.6-15.8-27.1zM306.6 160c3.5-7.3 5.4-15.4 5.4-24 0-30.9-25.1-56-56-56s-56 25.1-56 56c0 8.6 1.9 16.7 5.4 24H34.3L256 34.4 477.7 160zM256 112a24 24 0 1 1 0 48 24 24 0 1 1 0-48M64 352c-8.8 0-16 7.2-16 16s7.2 16 16 16h384c8.8 0 16-7.2 16-16s-7.2-16-16-16V224h-32v128h-80V224h-32v128h-96V224h-32v128H96V224H64zm-24 64c-8.8 0-16 7.2-16 16s7.2 16 16 16h432c8.8 0 16-7.2 16-16s-7.2-16-16-16zm-24 64c-8.8 0-16 7.2-16 16s7.2 16 16 16h480c8.8 0 16-7.2 16-16s-7.2-16-16-16z"
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
                  d="M252.7.7c2.1-.9 4.5-.9 6.6 0l238.6 107.8c8.6 3.9 14.1 12.4 14.1 21.9v5.6c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24v-5.7c0-9.4 5.5-18 14.1-21.9zM288 144h200c4.4 0 8-3.6 8-8v-5.7c0-3.1-1.8-6-4.7-7.3L256 16.8 20.7 123c-2.9 1.3-4.7 4.1-4.7 7.3v5.7c0 4.4 3.6 8 8 8h200c-5-6.7-8-15-8-24 0-22.1 17.9-40 40-40s40 17.9 40 40c0 9-3 17.3-8 24m-32 0a24 24 0 1 0 0-48 24 24 0 1 0 0 48M72 192c4.4 0 8 3.6 8 8v168h104V200c0-4.4 3.6-8 8-8s8 3.6 8 8v168h112V200c0-4.4 3.6-8 8-8s8 3.6 8 8v168h104V200c0-4.4 3.6-8 8-8s8 3.6 8 8v176c0 4.4-3.6 8-8 8H72c-4.4 0-8-3.6-8-8V200c0-4.4 3.6-8 8-8M32 440c0-4.4 3.6-8 8-8h432c4.4 0 8 3.6 8 8s-3.6 8-8 8H40c-4.4 0-8-3.6-8-8M0 504c0-4.4 3.6-8 8-8h496c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.4 0-8-3.6-8-8"
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
                  d="M128 192H64v228.3c-.6.3-1.2.7-1.7 1.1l-48 32c-11.7 7.8-17 22.4-12.9 35.9S17.9 512 32 512h448c14.1 0 26.5-9.2 30.6-22.7s-1.1-28.1-12.9-35.9l-48-32c-.6-.4-1.2-.7-1.8-1.1V192H384v224h-40V192h-64v224h-48V192h-64v224h-40z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M268.6 2.6c-8-3.4-17.2-3.4-25.2 0l-224 96c-14 6-21.8 21-18.7 35.8S16.8 160 32 160v8c0 13.3 10.7 24 24 24h400c13.3 0 24-10.7 24-24v-8c15.2 0 28.3-10.7 31.3-25.6s-4.8-29.9-18.7-35.8zM256 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64"
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
