import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const VrCardboardIcon: React.FC<
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
                  d="M576 64H64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h120.4c24.2 0 46.4-13.7 57.2-35.4l32-64c8.8-17.5 26.7-28.6 46.3-28.6s37.5 11.1 46.3 28.6l32 64c10.8 21.7 33 35.4 57.2 35.4H576c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64M96 240a64 64 0 1 1 128 0 64 64 0 1 1-128 0m384-64a64 64 0 1 1 0 128 64 64 0 1 1 0-128"
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
                  d="M560 112H80c-17.7 0-32 14.3-32 32v224c0 17.7 14.3 32 32 32h110.6c12.1 0 23.2-6.8 28.6-17.7l34.7-69.5c12.5-25 38.1-40.8 66.1-40.8s53.6 15.8 66.1 40.8l34.7 69.5c5.4 10.8 16.5 17.7 28.6 17.7H560c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32M80 64h480c44.2 0 80 35.8 80 80v224c0 44.2-35.8 80-80 80H449.4c-30.3 0-58-17.1-71.6-44.2l-34.7-69.5c-4.4-8.8-13.4-14.3-23.2-14.3s-18.8 5.5-23.2 14.3L262 403.8c-13.6 27.1-41.3 44.2-71.6 44.2H80c-44.2 0-80-35.8-80-80V144c0-44.2 35.8-80 80-80m16 176a64 64 0 1 1 128 0 64 64 0 1 1-128 0m384-64a64 64 0 1 1 0 128 64 64 0 1 1 0-128"
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
                  d="M576 96H64c-17.7 0-32 14.3-32 32v256c0 17.7 14.3 32 32 32h136.4c12.1 0 23.2-6.8 28.6-17.7l39.2-78.3c9.8-19.6 29.9-32 51.8-32s42 12.4 51.8 32l-21.5 10.7 21.5-10.7 39.2 78.3c5.4 10.8 16.5 17.7 28.6 17.7H576c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32M64 64h512c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H439.6c-24.2 0-46.4-13.7-57.2-35.4l-39.2-78.3c-4.4-8.8-13.4-14.3-23.2-14.3s-18.8 5.5-23.2 14.3l-39.2 78.3c-10.8 21.7-33 35.4-57.2 35.4H64c-35.3 0-64-28.7-64-64V128c0-35.3 28.7-64 64-64m112 224a48 48 0 1 0 0-96 48 48 0 1 0 0 96m0-128a80 80 0 1 1 0 160 80 80 0 1 1 0-160m336 80a48 48 0 1 0-96 0 48 48 0 1 0 96 0m-128 0a80 80 0 1 1 160 0 80 80 0 1 1-160 0"
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
                  d="M576 80H64c-26.5 0-48 21.5-48 48v256c0 26.5 21.5 48 48 48h136.4c18.2 0 34.8-10.3 42.9-26.5l39.2-78.3C289.6 313 304.1 304 320 304s30.4 9 37.5 23.2l39.2 78.3c8.1 16.3 24.8 26.5 42.9 26.5H576c26.5 0 48-21.5 48-48V128c0-26.5-21.5-48-48-48M64 64h512c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H439.6c-24.2 0-46.4-13.7-57.2-35.4l-39.2-78.3c-4.4-8.8-13.4-14.3-23.2-14.3s-18.8 5.5-23.2 14.3l-39.2 78.3c-10.8 21.7-33 35.4-57.2 35.4H64c-35.3 0-64-28.7-64-64V128c0-35.3 28.7-64 64-64m112 240a64 64 0 1 0 0-128 64 64 0 1 0 0 128m0-144a80 80 0 1 1 0 160 80 80 0 1 1 0-160m352 80a64 64 0 1 0-128 0 64 64 0 1 0 128 0m-144 0a80 80 0 1 1 160 0 80 80 0 1 1-160 0"
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
                  d="M576 64H64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h120.4c24.2 0 46.4-13.7 57.2-35.4l32-64c8.8-17.5 26.7-28.6 46.3-28.6s37.5 11.1 46.3 28.6l32 64c10.8 21.7 33 35.4 57.2 35.4H576c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64M96 240a64 64 0 1 1 128 0 64 64 0 1 1-128 0m384-64a64 64 0 1 1 0 128 64 64 0 1 1 0-128"
                />
                <path
                  className="aps-icon-foreground"
                  d="M160 304a64 64 0 1 0 0-128 64 64 0 1 0 0 128m320 0a64 64 0 1 0 0-128 64 64 0 1 0 0 128"
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
