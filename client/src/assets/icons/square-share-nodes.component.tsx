import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SquareShareNodesIcon: React.FC<
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
                  d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm320 128c0 35.3-28.7 64-64 64-15.4 0-29.5-5.4-40.6-14.5L194.1 256l85.3 46.5c11-9.1 25.2-14.5 40.6-14.5 35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64c0-2.5.1-4.9.4-7.3L174.5 300c-11.7 12.3-28.2 20-46.5 20-35.3 0-64-28.7-64-64s28.7-64 64-64c18.3 0 34.8 7.7 46.5 20l81.9-44.7c-.3-2.4-.4-4.9-.4-7.3 0-35.3 28.7-64 64-64s64 28.7 64 64"
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
                  d="M64 80c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm352 80c0 26.5-21.5 48-48 48-9.8 0-18.9-2.9-26.5-7.9L197.7 256l79.9 39.9c7.6-5 16.7-7.9 26.5-7.9 26.5 0 48 21.5 48 48s-21.5 48-48 48c-25.5 0-46.4-20-47.9-45.1l-85.6-42.8c-7.6 5-16.7 7.9-26.5 7.9-26.5 0-48-21.5-48-48s21.5-48 48-48c9.8 0 18.9 2.9 26.5 7.9l85.6-42.8C257.6 148 278.5 128 304 128c26.5 0 48 21.5 48 48"
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
                  d="M64 64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm320 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64m0 32c-18.4 0-35.1-7.8-46.7-20.3l-81.7 44.6c.3 2.5.5 5.1.5 7.7s-.2 5.2-.5 7.7l81.7 44.6c11.6-12.5 28.3-20.3 46.7-20.3 35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64c0-5.4.7-10.6 1.9-15.6l-78.2-42.7C168.1 309.6 149.2 320 128 320c-35.3 0-64-28.7-64-64s28.7-64 64-64c21.2 0 40.1 10.4 51.7 26.3l78.2-42.7c-1.3-5-1.9-10.2-1.9-15.6 0-35.3 28.7-64 64-64s64 28.7 64 64-28.7 64-64 64m0 160a32 32 0 1 0 0-64 32 32 0 1 0 0 64M160 256a32 32 0 1 0-64 0 32 32 0 1 0 64 0"
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
                  d="M64 48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm328 96a40 40 0 1 0 0-80 40 40 0 1 0 0 80m0 16c-19.1 0-35.9-9.5-46-24.1l-108.8 54.5c1.8 5.5 2.8 11.5 2.8 17.6s-1 12.1-2.8 17.6L282 328.1c10.1-14.5 26.9-24.1 46-24.1 30.9 0 56 25.1 56 56s-25.1 56-56 56-56-25.1-56-56c0-6.2 1-12.1 2.8-17.6L166 287.9c-10.1 14.5-26.9 24.1-46 24.1-30.9 0-56-25.1-56-56s25.1-56 56-56c19.1 0 35.9 9.5 46 24.1l108.8-54.4c-1.8-5.5-2.8-11.5-2.8-17.6 0-30.9 25.1-56 56-56s56 25.1 56 56-25.1 56-56 56zm0 192a40 40 0 1 0 0-80 40 40 0 1 0 0 80M160 256a40 40 0 1 0-80 0 40 40 0 1 0 80 0"
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
                  d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm320 128c0 35.3-28.7 64-64 64-15.4 0-29.5-5.4-40.6-14.5L194.1 256l85.3 46.5c11-9.1 25.2-14.5 40.6-14.5 35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64c0-2.5.1-4.9.4-7.3L174.5 300c-11.7 12.3-28.2 20-46.5 20-35.3 0-64-28.7-64-64s28.7-64 64-64c18.3 0 34.8 7.7 46.5 20l81.9-44.7c-.3-2.4-.4-4.9-.4-7.3 0-35.3 28.7-64 64-64s64 28.7 64 64"
                />
                <path
                  className="aps-icon-foreground"
                  d="M320 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64c0 2.5.1 4.9.4 7.3L174.5 212c-11.7-12.3-28.2-20-46.5-20-35.3 0-64 28.7-64 64s28.7 64 64 64c18.3 0 34.8-7.7 46.5-20l81.9 44.7c-.3 2.4-.4 4.9-.4 7.3 0 35.3 28.7 64 64 64s64-28.7 64-64-28.7-64-64-64c-15.4 0-29.5 5.4-40.6 14.5L194.1 256l85.3-46.5c11 9.1 25.2 14.5 40.6 14.5"
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
