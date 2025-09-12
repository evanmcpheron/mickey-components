import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const PrescriptionBottlePillIcon: React.FC<
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
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M0 32C0 14.3 14.3 0 32 0h320c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32H32C14.3 96 0 81.7 0 64zm32 96h320v83.2c-57 29.1-96 88.4-96 156.8 0 54.5 24.8 103.3 63.8 135.6-9.4 5.4-20.2 8.4-31.8 8.4H96c-35.3 0-64-28.7-64-64v-32h112c8.8 0 16-7.2 16-16s-7.2-16-16-16H32v-64h112c8.8 0 16-7.2 16-16s-7.2-16-16-16H32v-64h112c8.8 0 16-7.2 16-16s-7.2-16-16-16H32zm272.8 172.5c6.7-12.6 23.6-13.5 33.7-3.4l164.4 164.4c10.1 10.1 9.2 27-3.4 33.7-20.1 10.7-43.1 16.8-67.5 16.8-79.5 0-144-64.5-144-144 0-24.4 6.1-47.4 16.8-67.5m254.5 135c-6.7 12.6-23.6 13.5-33.7 3.4L361.1 274.5c-10.1-10.1-9.2-27 3.4-33.7 20.1-10.7 43.1-16.8 67.5-16.8 79.5 0 144 64.5 144 144 0 24.4-6.1 47.4-16.8 67.5z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M48 48h288v32H48zM40 0C17.9 0 0 17.9 0 40v48c0 22.1 17.9 40 40 40h304c22.1 0 40-17.9 40-40V40c0-22.1-17.9-40-40-40zm-8 160v288c0 35.3 28.7 64 64 64h192c11.6 0 22.4-3.1 31.8-8.4-13.7-11.3-25.6-24.7-35.3-39.6H96c-8.8 0-16-7.2-16-16v-32h56c13.3 0 24-10.7 24-24s-10.7-24-24-24H80v-48h56c13.3 0 24-10.7 24-24s-10.7-24-24-24H80v-48h56c13.3 0 24-10.7 24-24s-10.7-24-24-24H80v-16zm320 0h-48v87.2c13.8-14.6 30-26.8 48-36zm80 112a96 96 0 1 1 0 192 96 96 0 1 1 0-192m0 240a144 144 0 1 0 0-288 144 144 0 1 0 0 288m-49-193c-9.4 9.4-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-64-64c-9.4-9.4-24.6-9.4-33.9 0"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M336 32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16zM48 0C21.5 0 0 21.5 0 48v32c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM32 160v288c0 35.3 28.7 64 64 64h192c11.6 0 22.4-3.1 31.8-8.4-8.9-7.3-17-15.5-24.3-24.5q-3.6.9-7.5.9H96c-17.7 0-32-14.3-32-32v-32h80c8.8 0 16-7.2 16-16s-7.2-16-16-16H64v-64h80c8.8 0 16-7.2 16-16s-7.2-16-16-16H64v-64h80c8.8 0 16-7.2 16-16s-7.2-16-16-16H64v-32zm320 0h-32v72.2c9.8-8.1 20.6-15.2 32-21zm80 96a112 112 0 1 1 0 224 112 112 0 1 1 0-224m0 256a144 144 0 1 0 0-288 144 144 0 1 0 0 288m36.7-84.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-96-96c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M344 16c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24H40c-13.3 0-24-10.7-24-24V40c0-13.3 10.7-24 24-24zM40 0C17.9 0 0 17.9 0 40v48c0 22.1 17.9 40 40 40h304c22.1 0 40-17.9 40-40V40c0-22.1-17.9-40-40-40zm-8 408v40c0 35.3 28.7 64 64 64h192c11.6 0 22.4-3.1 31.8-8.4-4.4-3.6-8.6-7.5-12.6-11.5-5.9 2.6-12.3 4-19.1 4H96c-26.5 0-48-21.5-48-48V416h104c4.4 0 8-3.6 8-8s-3.6-8-8-8H48v-80h104c4.4 0 8-3.6 8-8s-3.6-8-8-8H48v-80h104c4.4 0 8-3.6 8-8s-3.6-8-8-8H48v-48H32v248m320-248h-16v60.5c5.2-3.4 10.5-6.5 16-9.3zm80 80a128 128 0 1 1 0 256 128 128 0 1 1 0-256m0 272a144 144 0 1 0 0-288 144 144 0 1 0 0 288m-61.7-205.7c-3.1 3.1-3.1 8.2 0 11.3l112 112c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-112-112c-3.1-3.1-8.2-3.1-11.3 0"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M32 0C14.3 0 0 14.3 0 32v32c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32zm320 128H32v64h112c8.8 0 16 7.2 16 16s-7.2 16-16 16H32v64h112c8.8 0 16 7.2 16 16s-7.2 16-16 16H32v64h112c8.8 0 16 7.2 16 16s-7.2 16-16 16H32v32c0 35.3 28.7 64 64 64h192c11.6 0 22.4-3.1 31.8-8.4-39-32.3-63.8-81-63.8-135.6 0-68.4 39-127.7 96-156.8z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M338.5 297.1c-10.1-10.1-27-9.2-33.7 3.4-10.7 20.1-16.8 43.1-16.8 67.5 0 79.5 64.5 144 144 144 24.4 0 47.4-6.1 67.5-16.8 12.6-6.7 13.5-23.6 3.4-33.7zm187 141.8c10.1 10.1 27 9.2 33.7-3.4 10.7-20.1 16.8-43.1 16.8-67.5 0-79.5-64.5-144-144-144-24.4 0-47.4 6.1-67.5 16.8-12.6 6.7-13.5 23.6-3.4 33.7z"
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
