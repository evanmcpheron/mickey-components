import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const WarehouseFullIcon: React.FC<
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
                  d="M0 488V171.3c0-26.2 15.9-49.7 40.2-59.4L308.1 4.8c7.6-3.1 16.1-3.1 23.8 0l267.9 107.1c24.3 9.7 40.2 33.3 40.2 59.4V488c0 13.3-10.7 24-24 24h-48c-13.3 0-24-10.7-24-24V224c0-17.7-14.3-32-32-32H128c-17.7 0-32 14.3-32 32v264c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24m376-104h112c13.3 0 24 10.7 24 24v80c0 13.3-10.7 24-24 24H376c-13.3 0-24-10.7-24-24v-80c0-13.3 10.7-24 24-24M128 248c0-13.3 10.7-24 24-24h144c13.3 0 24 10.7 24 24v80c0 13.3-10.7 24-24 24H152c-13.3 0-24-10.7-24-24zm24 136h144c13.3 0 24 10.7 24 24v80c0 13.3-10.7 24-24 24H152c-13.3 0-24-10.7-24-24v-80c0-13.3 10.7-24 24-24"
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
                  d="M323 51.1a7.8 7.8 0 0 0-6 0l-254 103c-9.1 3.7-15 12.5-15 22.2V488c0 13.3-10.7 24-24 24S0 501.3 0 488V176.3c0-29.3 17.8-55.7 44.9-66.7L299 6.6c13.5-5.5 28.6-5.5 42.1 0l254 103c27.2 11 45 37.4 45 66.7V488c0 13.3-10.7 24-24 24s-24-10.7-24-24V176.3c0-9.8-5.9-18.6-15-22.2zM144 240v248c0 13.3-10.7 24-24 24s-24-10.7-24-24V232c0-22.1 17.9-40 40-40h368c22.1 0 40 17.9 40 40v256c0 13.3-10.7 24-24 24s-24-10.7-24-24V240zm232 176h64c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24h-64c-13.3 0-24-10.7-24-24v-48c0-13.3 10.7-24 24-24M176 312c0-13.3 10.7-24 24-24h96c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24h-96c-13.3 0-24-10.7-24-24zm24 104h96c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24h-96c-13.3 0-24-10.7-24-24v-48c0-13.3 10.7-24 24-24"
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
                  d="M326.2 36c-4-1.7-8.4-1.7-12.4 0L51.6 146.4C39.7 151.4 32 163 32 175.9V496c0 8.8-7.2 16-16 16s-16-7.2-16-16V175.9c0-25.8 15.4-49 39.2-59L301.4 6.5c11.9-5 25.3-5 37.3 0l262.1 110.4c23.7 10 39.2 33.2 39.2 59V496c0 8.8-7.2 16-16 16s-16-7.2-16-16V175.9c0-12.9-7.7-24.5-19.6-29.5zM96 224c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32v272c0 8.8-7.2 16-16 16s-16-7.2-16-16V224H128v272c0 8.8-7.2 16-16 16s-16-7.2-16-16zm256 176v80h80c8.8 0 16-7.2 16-16v-48c0-8.8-7.2-16-16-16zm-32 80v-80H192v64c0 8.8 7.2 16 16 16zm0-176c0-8.8-7.2-16-16-16h-96c-8.8 0-16 7.2-16 16v64h128zm112 64c26.5 0 48 21.5 48 48v48c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V304c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v64h80"
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
                  d="M329.1 20.4c-5.8-2.4-12.4-2.4-18.2 0L40.8 131.2c-15 6.2-24.8 20.8-24.8 37V504c0 4.4-3.6 8-8 8s-8-3.6-8-8V168.2c0-22.7 13.7-43.2 34.7-51.8L304.8 5.6c9.7-4 20.6-4 30.4 0l270.1 110.8c21 8.6 34.7 29.1 34.7 51.8V504c0 4.4-3.6 8-8 8s-8-3.6-8-8V168.2c0-16.2-9.8-30.8-24.8-37zM120 208c-4.4 0-8 3.6-8 8v288c0 4.4-3.6 8-8 8s-8-3.6-8-8V216c0-13.3 10.7-24 24-24h400c13.3 0 24 10.7 24 24v288c0 4.4-3.6 8-8 8s-8-3.6-8-8V216c0-4.4-3.6-8-8-8zm200 112c0-8.8-7.2-16-16-16H192c-8.8 0-16 7.2-16 16v64h144v-64m0 80H176v80c0 8.8 7.2 16 16 16h128zm16 96h112c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16H336zm0-112h112c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V320c0-17.7 14.3-32 32-32h112c17.7 0 32 14.3 32 32v64"
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
                  d="M128 248c0-13.3 10.7-24 24-24h144c13.3 0 24 10.7 24 24v80c0 13.3-10.7 24-24 24H152c-13.3 0-24-10.7-24-24zm224 160c0-13.3 10.7-24 24-24h112c13.3 0 24 10.7 24 24v80c0 13.3-10.7 24-24 24H376c-13.3 0-24-10.7-24-24zm-200-24h144c13.3 0 24 10.7 24 24v80c0 13.3-10.7 24-24 24H152c-13.3 0-24-10.7-24-24v-80c0-13.3 10.7-24 24-24"
                />
                <path
                  className="aps-icon-foreground"
                  d="M0 171.3V488c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V224c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32v264c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V171.3c0-26.2-15.9-49.7-40.2-59.4L331.9 4.8c-7.6-3.1-16.1-3.1-23.8 0L40.2 111.9C15.9 121.6 0 145.2 0 171.3"
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
