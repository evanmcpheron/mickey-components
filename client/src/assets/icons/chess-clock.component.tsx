import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ChessClockIcon: React.FC<
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
                  d="M256 56c0-13.3-10.7-24-24-24H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h32v48H64c-35.3 0-64 28.7-64 64v224c0 35.3 28.7 64 64 64h512c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64h-32v-16c0-8.8-7.2-16-16-16H400c-8.8 0-16 7.2-16 16v16H200V80h32c13.3 0 24-10.7 24-24m320 248a112 112 0 1 1-224 0 112 112 0 1 1 224 0m-52.7-59.3c-6.2-6.2-16.4-6.2-22.6 0l-48 48c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l48-48c6.2-6.2 6.2-16.4 0-22.6M176 192a112 112 0 1 1 0 224 112 112 0 1 1 0-224m-16 48v64c0 8.8 7.2 16 16 16s16-7.2 16-16v-64c0-8.8-7.2-16-16-16s-16 7.2-16 16"
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
                  d="M256 56c0-13.3-10.7-24-24-24H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h32v32H64c-35.3 0-64 28.7-64 64v240c0 35.3 28.7 64 64 64h512c35.3 0 64-28.7 64-64V176c0-35.3-28.7-64-64-64h-32V96c0-8.8-7.2-16-16-16H400c-8.8 0-16 7.2-16 16v16H200V80h32c13.3 0 24-10.7 24-24m320 104c8.8 0 16 7.2 16 16v240c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16zM200 400a104 104 0 1 0 0-208 104 104 0 1 0 0 208m-16-160c0-8.8 7.2-16 16-16s16 7.2 16 16v48c0 8.8-7.2 16-16 16s-16-7.2-16-16zm329.5 129.5a104 104 0 1 0-147-147 104 104 0 1 0 147 147m-22.6-124.4c6.2 6.2 6.2 16.4 0 22.6l-33.9 34c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l33.9-33.9c6.2-6.2 16.4-6.2 22.6 0z"
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
                  d="M240 32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48v64h384c35.3 0 64 28.7 64 64v224c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192c0-35.3 28.7-64 64-64h96V64h-48c-8.8 0-16-7.2-16-16s7.2-16 16-16h128m304 48c0 8.8-7.2 16-16 16H400c-8.8 0-16-7.2-16-16s7.2-16 16-16h128c8.8 0 16 7.2 16 16M64 160c-17.7 0-32 14.3-32 32v224c0 17.7 14.3 32 32 32h512c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm112 224a80 80 0 1 0 0-160 80 80 0 1 0 0 160m0-192a112 112 0 1 1 0 224 112 112 0 1 1 0-224m344.6 168.6a80 80 0 1 0-113.2-113.2 80 80 0 1 0 113.2 113.2M384.8 224.8a112 112 0 1 1 158.4 158.4 112 112 0 1 1-158.4-158.4M176 240c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48c0-8.8 7.2-16 16-16m333.3 41.4-33.9 33.9c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l33.9-33.9c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6"
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
                  d="M248 32c4.4 0 8 3.6 8 8s-3.6 8-8 8h-64v80h392c35.3 0 64 28.7 64 64v224c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192c0-35.3 28.7-64 64-64h104V48h-64c-4.4 0-8-3.6-8-8s3.6-8 8-8h144m-72 112H64c-26.5 0-48 21.5-48 48v224c0 26.5 21.5 48 48 48h512c26.5 0 48-21.5 48-48V192c0-26.5-21.5-48-48-48zm368-56c0 4.4-3.6 8-8 8H392c-4.4 0-8-3.6-8-8s3.6-8 8-8h144c4.4 0 8 3.6 8 8M176 400a96 96 0 1 0 0-192 96 96 0 1 0 0 192m0-208a112 112 0 1 1 0 224 112 112 0 1 1 0-224m355.9 179.9a96 96 0 1 0-135.8-135.8 96 96 0 1 0 135.8 135.8M384.8 224.8a112 112 0 1 1 158.4 158.4 112 112 0 1 1-158.4-158.4M176 240c4.4 0 8 3.6 8 8v56c0 4.4-3.6 8-8 8s-8-3.6-8-8v-56c0-4.4 3.6-8 8-8m333.3 30.1-39.6 39.6c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l39.6-39.6c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3"
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
                  d="M256 56c0-13.3-10.7-24-24-24H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h32v48h48V80h32c13.3 0 24-10.7 24-24m128 56v16h160v-16c0-8.8-7.2-16-16-16H400c-8.8 0-16 7.2-16 16m139.3 132.7c-6.2-6.2-16.4-6.2-22.6 0l-48 48c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l48-48c6.2-6.2 6.2-16.4 0-22.6M160 240v64c0 8.8 7.2 16 16 16s16-7.2 16-16v-64c0-8.8-7.2-16-16-16s-16 7.2-16 16"
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
