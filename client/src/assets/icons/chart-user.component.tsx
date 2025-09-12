import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ChartUserIcon: React.FC<
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
                  d="M160 64c0-35.3 28.7-64 64-64h352c35.3 0 64 28.7 64 64v288c0 35.3-28.7 64-64 64H336.8c-11.8-25.5-29.9-47.5-52.4-64H576V64H224v49.1C205.2 102.2 183.3 96 160 96zm252.7 75.3c-4.6-4.6-5.9-11.5-3.5-17.4s8.3-9.9 14.8-9.9h88c8.8 0 16 7.2 16 16v88c0 6.5-3.9 12.3-9.9 14.8s-12.9 1.1-17.4-3.5l-27-27L401 273c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47 55.7-55.7-27-27zM64 224a96 96 0 1 1 192 0 96 96 0 1 1-192 0M0 485.3C0 411.7 59.7 352 133.3 352h53.3c73.7 0 133.4 59.7 133.4 133.3 0 14.7-11.9 26.7-26.7 26.7H26.7C11.9 512 0 500.1 0 485.3"
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
                  d="M576 48H224c-8.8 0-16 7.2-16 16v41.3c-14.8-6-31-9.3-48-9.3V64c0-35.3 28.7-64 64-64h352c35.3 0 64 28.7 64 64v288c0 35.3-28.7 64-64 64H336.8c-8.3-18-19.8-34.2-33.7-48H576c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16m-163.3 91.3c-4.6-4.6-5.9-11.5-3.5-17.4s8.3-9.9 14.8-9.9h88c8.8 0 16 7.2 16 16v88c0 6.5-3.9 12.3-9.9 14.8s-12.9 1.1-17.4-3.5l-27-27L401 273c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47 55.7-55.7-27-27zM160 272a48 48 0 1 0 0-96 48 48 0 1 0 0 96m0-144a96 96 0 1 1 0 192 96 96 0 1 1 0-192m-26.7 272c-39.8 0-73.2 27.2-82.6 64h218.6c-9.5-36.8-42.9-64-82.6-64zm0-48h53.3c73.7 0 133.4 59.7 133.4 133.3 0 14.7-11.9 26.7-26.7 26.7H26.7C11.9 512 0 500.1 0 485.3 0 411.7 59.7 352 133.3 352"
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
                  d="M576 32H224c-17.7 0-32 14.3-32 32v36c-10.2-2.6-21-4-32-4V64c0-35.3 28.7-64 64-64h352c35.3 0 64 28.7 64 64v288c0 35.3-28.7 64-64 64H336.8c-5.3-11.4-11.8-22.2-19.5-32H576c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32m-176 96c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16v-57.4L395.3 267.3c-6.2 6.2-16.4 6.2-22.6 0l-80-80c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l68.7 68.7 89.4-89.4H416c-8.8 0-16-7.2-16-16M160 288a64 64 0 1 0 0-128 64 64 0 1 0 0 128m0-160a96 96 0 1 1 0 192 96 96 0 1 1 0-192m-26.7 256c-54.2 0-98.4 42.5-101.2 96h255.8c-2.8-53.5-47-96-101.2-96zm0-32h53.3c73.7 0 133.4 59.7 133.4 133.3 0 14.7-11.9 26.7-26.7 26.7H26.7C11.9 512 0 500.1 0 485.3 0 411.7 59.7 352 133.3 352"
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
                  d="M224 16h352c26.5 0 48 21.5 48 48v288c0 26.5-21.5 48-48 48H328.3c3.1 5.2 6 10.5 8.5 16H576c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224c-35.3 0-64 28.7-64 64v32c5.4 0 10.8.3 16 1V64c0-26.5 21.5-48 48-48m192 104c0 4.4 3.6 8 8 8h76.7L384 244.7l-74.3-74.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l80 80c3.1 3.1 8.2 3.1 11.3 0L512 139.3V216c0 4.4 3.6 8 8 8s8-3.6 8-8v-96c0-4.4-3.6-8-8-8h-96c-4.4 0-8 3.6-8 8M133.3 368h53.3c64.9 0 117.4 52.5 117.4 117.3 0 5.9-4.8 10.7-10.7 10.7H26.7c-5.9 0-10.7-4.8-10.7-10.7C16 420.5 68.5 368 133.3 368m0-16C59.7 352 0 411.7 0 485.3 0 500.1 11.9 512 26.7 512h266.6c14.7 0 26.7-11.9 26.7-26.7 0-73.6-59.7-133.3-133.3-133.3zM80 224a80 80 0 1 1 160 0 80 80 0 1 1-160 0m176 0a96 96 0 1 0-192 0 96 96 0 1 0 192 0"
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
                  d="M160 64c0-35.3 28.7-64 64-64h352c35.3 0 64 28.7 64 64v288c0 35.3-28.7 64-64 64H336.8c-11.8-25.5-29.9-47.5-52.4-64H576V64H224v49.1C205.2 102.2 183.3 96 160 96zm252.7 75.3c-4.6-4.6-5.9-11.5-3.5-17.4s8.3-9.9 14.8-9.9h88c8.8 0 16 7.2 16 16v88c0 6.5-3.9 12.3-9.9 14.8s-12.9 1.1-17.4-3.5l-27-27L401 273c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47 55.7-55.7-27-27z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M160 320a96 96 0 1 0 0-192 96 96 0 1 0 0 192m-26.7 32C59.7 352 0 411.7 0 485.3 0 500.1 11.9 512 26.7 512h266.6c14.7 0 26.7-11.9 26.7-26.7 0-73.6-59.7-133.3-133.3-133.3z"
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
