import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ChessClockFlipIcon: React.FC<
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
                  d="M384 56c0-13.3 10.7-24 24-24h112c13.3 0 24 10.7 24 24s-10.7 24-24 24h-32v48h88c35.3 0 64 28.7 64 64v224c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192c0-35.3 28.7-64 64-64h32v-16c0-8.8 7.2-16 16-16h128c8.8 0 16 7.2 16 16v16h184V80h-32c-13.3 0-24-10.7-24-24m-96 248a112 112 0 1 0-224 0 112 112 0 1 0 224 0m-52.7-59.3c6.2 6.2 6.2 16.4 0 22.6l-48 48c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l48-48c6.2-6.2 16.4-6.2 22.6 0M464 416a112 112 0 1 0 0-224 112 112 0 1 0 0 224m16-176v64c0 8.8-7.2 16-16 16s-16-7.2-16-16v-64c0-8.8 7.2-16 16-16s16 7.2 16 16"
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
                  d="M384 56c0-13.3 10.7-24 24-24h112c13.3 0 24 10.7 24 24s-10.7 24-24 24h-32v32h88c35.3 0 64 28.7 64 64v240c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V176c0-35.3 28.7-64 64-64h32V96c0-8.8 7.2-16 16-16h128c8.8 0 16 7.2 16 16v16h184V80h-32c-13.3 0-24-10.7-24-24M64 160c-8.8 0-16 7.2-16 16v240c0 8.8 7.2 16 16 16h512c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16zm376 32a104 104 0 1 1 0 208 104 104 0 1 1 0-208m16 48c0-8.8-7.2-16-16-16s-16 7.2-16 16v48c0 8.8 7.2 16 16 16s16-7.2 16-16zm-329.5-17.5a104 104 0 1 1 147 147 104 104 0 1 1-147-147M251 245.1c-6.2-6.2-16.4-6.2-22.6 0L194.3 279c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l33.9-33.9c6.2-6.2 6.2-16.4 0-22.6z"
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
                  d="M400 32c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v64H64c-35.3 0-64 28.7-64 64v224c0 35.3 28.7 64 64 64h512c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64h-96V64h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H400M96 80c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16s-7.2-16-16-16H112c-8.8 0-16 7.2-16 16m480 80c17.7 0 32 14.3 32 32v224c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V192c0-17.7 14.3-32 32-32zm-112 64a80 80 0 1 1 0 160 80 80 0 1 1 0-160m0 192a112 112 0 1 0 0-224 112 112 0 1 0 0 224M119.4 247.4a80 80 0 1 1 113.2 113.2 80 80 0 1 1-113.2-113.2m135.8 135.8A112 112 0 1 0 96.8 224.8a112 112 0 1 0 158.4 158.4M464 240c-8.8 0-16 7.2-16 16v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48c0-8.8-7.2-16-16-16m-242.7 41.4c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-33.9 33.9c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0z"
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
                  d="M392 32c-4.4 0-8 3.6-8 8s3.6 8 8 8h64v80H64c-35.3 0-64 28.7-64 64v224c0 35.3 28.7 64 64 64h512c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H472V48h64c4.4 0 8-3.6 8-8s-3.6-8-8-8H392m72 112h112c26.5 0 48 21.5 48 48v224c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V192c0-26.5 21.5-48 48-48zM96 88c0 4.4 3.6 8 8 8h144c4.4 0 8-3.6 8-8s-3.6-8-8-8H104c-4.4 0-8 3.6-8 8m368 120a96 96 0 1 1 0 192 96 96 0 1 1 0-192m0 208a112 112 0 1 0 0-224 112 112 0 1 0 0 224M108.1 236.1a96 96 0 1 1 135.8 135.8 96 96 0 1 1-135.8-135.8m147.1 147.1A112 112 0 1 0 96.8 224.8a112 112 0 1 0 158.4 158.4M464 240c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8s8-3.6 8-8v-56c0-4.4-3.6-8-8-8m-242.7 30.1c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0l-39.6 39.6c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0z"
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
                  d="M384 56c0-13.3 10.7-24 24-24h112c13.3 0 24 10.7 24 24s-10.7 24-24 24h-32v48h-48V80h-32c-13.3 0-24-10.7-24-24M96 112c0-8.8 7.2-16 16-16h128c8.8 0 16 7.2 16 16v16H96zm139.3 132.7c6.2 6.2 6.2 16.4 0 22.6l-48 48c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l48-48c6.2-6.2 16.4-6.2 22.6 0M480 240v64c0 8.8-7.2 16-16 16s-16-7.2-16-16v-64c0-8.8 7.2-16 16-16s16 7.2 16 16"
                />
                <path
                  className="aps-icon-foreground"
                  d="M0 192c0-35.3 28.7-64 64-64h512c35.3 0 64 28.7 64 64v224c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm288 112a112 112 0 1 0-224 0 112 112 0 1 0 224 0m176 112a112 112 0 1 0 0-224 112 112 0 1 0 0 224"
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
