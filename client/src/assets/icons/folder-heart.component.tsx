import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const FolderHeartIcon: React.FC<
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
                  d="M512 416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h128c20.1 0 39.1 9.5 51.2 25.6l19.2 25.6c6 8.1 15.5 12.8 25.6 12.8h160c35.3 0 64 28.7 64 64zM144 253.3c0 16.2 6.5 31.8 17.9 43.3l82.7 82.7c6.2 6.2 16.4 6.2 22.6 0l82.7-82.7c11.5-11.5 17.9-27.1 17.9-43.3 0-33.8-27.4-61.3-61.3-61.3-16.2 0-31.8 6.5-43.3 17.9l-7.4 7.4-7.4-7.4c-11.5-11.5-27.1-17.9-43.3-17.9-33.8 0-61.3 27.4-61.3 61.3z"
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
                  d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H289.9L247 53.1A71.98 71.98 0 0 0 196.1 32zM48 96c0-8.8 7.2-16 16-16h132.1c6.4 0 12.5 2.5 17 7l45.3 45.3c7.5 7.5 17.7 11.7 28.3 11.7H448c8.8 0 16 7.2 16 16v256c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16zm96 157.3c0 16.2 6.5 31.8 17.9 43.3l82.7 82.7c6.2 6.2 16.4 6.2 22.6 0l82.7-82.7c11.5-11.5 17.9-27.1 17.9-43.3 0-33.8-27.4-61.3-61.3-61.3-16.2 0-31.8 6.5-43.3 17.9l-7.4 7.4-7.4-7.4c-11.5-11.5-27.1-17.9-43.3-17.9-33.8 0-61.3 27.4-61.3 61.3z"
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
                  d="M32 96c0-17.7 14.3-32 32-32h124.1c8.5 0 16.6 3.4 22.6 9.4l35.9 35.9c12 12 28.3 18.7 45.3 18.7H448c17.7 0 32 14.3 32 32v256c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32zm32-64C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H291.9c-8.5 0-16.6-3.4-22.6-9.4l-35.9-35.9c-12-12-28.3-18.7-45.3-18.7zm112 221.3c0-16.2 13.1-29.3 29.3-29.3 7.8 0 15.2 3.1 20.7 8.6l18.7 18.7c6.2 6.2 16.4 6.2 22.6 0l18.7-18.7c5.5-5.5 12.9-8.6 20.7-8.6 16.2 0 29.3 13.1 29.3 29.3 0 7.8-3.1 15.2-8.6 20.7L256 345.4 184.6 274c-5.5-5.5-8.6-12.9-8.6-20.7m29.3-61.3c-33.8 0-61.3 27.4-61.3 61.3 0 16.2 6.5 31.8 17.9 43.3l82.7 82.7c6.2 6.2 16.4 6.2 22.6 0l82.7-82.7c11.5-11.5 17.9-27.1 17.9-43.3 0-33.8-27.4-61.3-61.3-61.3-16.2 0-31.8 6.5-43.3 17.9l-7.4 7.4-7.4-7.4c-11.5-11.5-27.1-17.9-43.3-17.9z"
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
                  d="M496 416c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V96c0-26.5 21.5-48 48-48h133.5c12.7 0 24.9 5.1 33.9 14.1L267.3 98c9 9 21.2 14.1 33.9 14.1H448c26.5 0 48 21.5 48 48zM64 480h384c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H301.3c-8.5 0-16.6-3.4-22.6-9.4l-36-35.9c-12-12-28.3-18.7-45.3-18.7H64C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64m96-230.1c0-23.2 18.8-41.9 41.9-41.9 11.1 0 21.8 4.4 29.7 12.3l18.7 18.7c1.5 1.5 3.5 2.3 5.7 2.3s4.2-.8 5.7-2.3l18.7-18.7c7.9-7.9 18.5-12.3 29.7-12.3 23.2 0 41.9 18.8 41.9 41.9v.6c0 10.6-4 20.9-11.2 28.8l-78.9 86.1c-1.5 1.7-3.7 2.6-5.9 2.6s-4.4-.9-5.9-2.6l-78.9-86.1c-7.2-7.8-11.2-18.1-11.2-28.8zm41.9-57.9c-32 0-57.9 25.9-57.9 57.9v.6c0 14.7 5.5 28.8 15.4 39.6l78.9 86.1c4.5 5 11 7.8 17.7 7.8s13.1-2.8 17.7-7.8l78.9-86.1a58.55 58.55 0 0 0 15.4-39.6v-.6c0-32-25.9-57.9-57.9-57.9-15.4 0-30.1 6.1-41 17L256 222.1 242.9 209c-10.9-10.9-25.6-17-41-17"
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
                  d="M512 416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h128c20.1 0 39.1 9.5 51.2 25.6l19.2 25.6c6 8.1 15.5 12.8 25.6 12.8h160c35.3 0 64 28.7 64 64zM144 253.3c0 16.2 6.5 31.8 17.9 43.3l82.7 82.7c6.2 6.2 16.4 6.2 22.6 0l82.7-82.7c11.5-11.5 17.9-27.1 17.9-43.3 0-33.8-27.4-61.3-61.3-61.3-16.2 0-31.8 6.5-43.3 17.9l-7.4 7.4-7.4-7.4c-11.5-11.5-27.1-17.9-43.3-17.9-33.8 0-61.3 27.4-61.3 61.3z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M205.3 192c-33.8 0-61.3 27.4-61.3 61.3 0 16.2 6.5 31.8 17.9 43.3l82.7 82.7c6.2 6.2 16.4 6.2 22.6 0l82.7-82.7c11.5-11.5 17.9-27.1 17.9-43.3 0-33.8-27.4-61.3-61.3-61.3-16.2 0-31.8 6.5-43.3 17.9l-7.4 7.4-7.4-7.4c-11.5-11.5-27.1-17.9-43.3-17.9z"
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
