import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SquareRssIcon: React.FC<
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
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm32 104c0-13.3 10.7-24 24-24 137 0 248 111 248 248 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-110.5-89.5-200-200-200-13.3 0-24-10.7-24-24m0 96c0-13.3 10.7-24 24-24 83.9 0 152 68.1 152 152 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-57.4-46.6-104-104-104-13.3 0-24-10.7-24-24m0 120a32 32 0 1 1 64 0 32 32 0 1 1-64 0"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M64 80c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm96 40c0-13.3 10.7-24 24-24 137 0 248 111 248 248 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-110.5-89.5-200-200-200-13.3 0-24-10.7-24-24m0 96c0-13.3 10.7-24 24-24 83.9 0 152 68.1 152 152 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-57.4-46.6-104-104-104-13.3 0-24-10.7-24-24m0 120a32 32 0 1 1 64 0 32 32 0 1 1-64 0"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M384 64c17.7 0 32 14.3 32 32v320c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32zM64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm48 320a16 16 0 1 1 0 32 16 16 0 1 1 0-32m0 64a48 48 0 1 0 0-96 48 48 0 1 0 0 96M80 128c-8.8 0-16 7.2-16 16s7.2 16 16 16c132.5 0 240 107.5 240 240 0 8.8 7.2 16 16 16s16-7.2 16-16c0-150.2-121.8-272-272-272m0 96c-8.8 0-16 7.2-16 16s7.2 16 16 16c79.5 0 144 64.5 144 144 0 8.8 7.2 16 16 16s16-7.2 16-16c0-97.2-78.8-176-176-176"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M384 48c26.5 0 48 21.5 48 48v320c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V96c0-26.5 21.5-48 48-48zM64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm48 304a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0 80a48 48 0 1 0 0-96 48 48 0 1 0 0 96M72 96c-4.4 0-8 3.6-8 8s3.6 8 8 8c163.5 0 296 132.5 296 296 0 4.4 3.6 8 8 8s8-3.6 8-8C384 235.7 244.3 96 72 96m0 96c-4.4 0-8 3.6-8 8s3.6 8 8 8c110.5 0 200 89.5 200 200 0 4.4 3.6 8 8 8s8-3.6 8-8c0-119.3-96.7-216-216-216"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M120 112c-13.3 0-24 10.7-24 24s10.7 24 24 24c110.5 0 200 89.5 200 200 0 13.3 10.7 24 24 24s24-10.7 24-24c0-137-111-248-248-248m0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24c57.4 0 104 46.6 104 104 0 13.3 10.7 24 24 24s24-10.7 24-24c0-83.9-68.1-152-152-152m8 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
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
