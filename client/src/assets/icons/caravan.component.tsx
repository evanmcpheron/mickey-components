import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CaravanIcon: React.FC<
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
                  d="M0 112c0-44.2 35.8-80 80-80h336c88.4 0 160 71.6 160 160v160h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H288c0 53-43 96-96 96s-96-43-96-96H80c-44.2 0-80-35.8-80-80zm320 240h128v-96h-32c-8.8 0-16-7.2-16-16s7.2-16 16-16h32v-64c0-17.7-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32zM96 128c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32zm96 336a48 48 0 1 0 0-96 48 48 0 1 0 0 96"
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
                  d="M416 80c61.9 0 112 50.1 112 112v176h-48V168c0-22.1-17.9-40-40-40h-80c-22.1 0-40 17.9-40 40v200h-44.8c-16.6-28.7-47.6-48-83.2-48s-66.6 19.3-83.2 48H80c-17.7 0-32-14.3-32-32V112c0-17.7 14.3-32 32-32zM80 416h16c0 53 43 96 96 96s96-43 96-96h328c13.3 0 24-10.7 24-24s-10.7-24-24-24h-40V192c0-88.4-71.6-160-160-160H80C35.8 32 0 67.8 0 112v224c0 44.2 35.8 80 80 80m352-192h-16c-13.3 0-24 10.7-24 24s10.7 24 24 24h16v96h-64V176h64zm-304-96c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32zm64 240a48 48 0 1 1 0 96 48 48 0 1 1 0-96"
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
                  d="M416 64c70.7 0 128 57.3 128 128v192h-64V168c0-22.1-17.9-40-40-40h-80c-22.1 0-40 17.9-40 40v216h-37.5c-13.2-37.3-48.7-64-90.5-64s-77.4 26.7-90.5 64H80c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48zM80 416h16c0 53 43 96 96 96s96-43 96-96h336c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48V192c0-88.4-71.6-160-160-160H80C35.8 32 0 67.8 0 112v224c0 44.2 35.8 80 80 80m368-192h-32c-8.8 0-16 7.2-16 16s7.2 16 16 16h32v128h-96V168c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8zm-320-64h128v64H128zm-32 0v64c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32H128c-17.7 0-32 14.3-32 32m96 192a64 64 0 1 1 0 128 64 64 0 1 1 0-128"
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
                  d="M416 48c79.5 0 144 64.5 144 144v208H286.7c-7.6-45.4-47.1-80-94.7-80s-87.1 34.6-94.7 80H80c-35.3 0-64-28.7-64-64V112c0-35.3 28.7-64 64-64zM80 416h16c0 53 43 96 96 96s96-43 96-96h344c4.4 0 8-3.6 8-8s-3.6-8-8-8h-56V192c0-88.4-71.6-160-160-160H80C35.8 32 0 67.8 0 112v224c0 44.2 35.8 80 80 80m16-272h128c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16m-32 16v64c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32H96c-17.7 0-32 14.3-32 32m352-16c8.8 0 16 7.2 16 16v64h-40c-4.4 0-8 3.6-8 8s3.6 8 8 8h40v80c0 8.8-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16V160c0-8.8 7.2-16 16-16zm32 88v-72c0-17.7-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32v160c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32zM192 336a80 80 0 1 1 0 160 80 80 0 1 1 0-160"
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
                  d="M64 160c0-17.7 14.3-32 32-32h128c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zm256 0c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v64h-32c-8.8 0-16 7.2-16 16s7.2 16 16 16h32v96h-99.2c-7.7-15-17.4-28.7-28.8-40.8zM192 352a80 80 0 1 1 0 160 80 80 0 1 1 0-160"
                />
                <path
                  className="aps-icon-foreground"
                  d="M0 112c0-44.2 35.8-80 80-80h336c88.4 0 160 71.6 160 160v160h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H302.9c-7.8-54.3-54.4-96-110.9-96S88.9 361.7 81.1 416H80c-44.2 0-80-35.8-80-80zm348.8 240H448V160c0-17.7-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32v151.2c11.4 12.1 21.2 25.8 28.8 40.8M96 128c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32z"
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
