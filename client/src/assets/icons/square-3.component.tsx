import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const Square3Icon: React.FC<
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
                  d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm88 96h128c9.9 0 18.8 6.1 22.4 15.3s1.1 19.7-6.2 26.4l-50.8 46.5c41.9 4.8 74.6 40.4 74.6 83.6 0 46.5-37.7 84.2-84.2 84.2H208c-30.1 0-58.1-15.6-73.9-41.2l-2.6-4.2c-7-11.3-3.5-26.1 7.8-33s26.1-3.5 33 7.8l2.6 4.2a38.75 38.75 0 0 0 33 18.4h27.8c20 0 36.2-16.2 36.2-36.2 0-20.1-16.3-36.3-36.4-36.2l-51.5.3c-9.9.1-18.9-6-22.5-15.2s-1.2-19.8 6.1-26.5l50.7-46.2H152c-13.3 0-24-10.7-24-24s10.7-24 24-24"
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
                  d="M64 80c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm152 32h128c9.9 0 18.8 6.1 22.4 15.3s1.1 19.7-6.2 26.4l-50.8 46.5c41.9 4.8 74.6 40.4 74.6 83.6 0 46.5-37.7 84.2-84.2 84.2H208c-30.1 0-58.1-15.6-73.9-41.2l-2.6-4.2c-7-11.3-3.5-26.1 7.8-33s26.1-3.5 33 7.8l2.6 4.2a38.75 38.75 0 0 0 33 18.4h27.8c20 0 36.2-16.2 36.2-36.2 0-20.1-16.3-36.3-36.4-36.2l-51.5.3c-9.9.1-18.9-6-22.5-15.2s-1.2-19.8 6.1-26.5l50.7-46.2H152c-13.3 0-24-10.7-24-24s10.7-24 24-24"
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
                  d="M64 64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm144 32h144c6.7 0 12.7 4.2 15 10.4s.5 13.3-4.6 17.7l-78.9 67.6 19.9-.1c44.4-.2 80.6 35.7 80.6 80.2 0 44.3-35.9 80.2-80.2 80.2h-36c-27.6 0-53.5-13-70.1-35l-2.5-3.4c-5.3-7.1-3.9-17.1 3.2-22.4s17.1-3.9 22.4 3.2l2.5 3.4c10.5 14 27 22.2 44.5 22.2h36c26.6 0 48.2-21.6 48.2-48.2 0-26.7-21.7-48.3-48.4-48.2l-63.5.3c-6.7 0-12.7-4.1-15.1-10.4s-.5-13.4 4.6-17.7l79.1-67.8H144c-8.8 0-16-7.2-16-16s7.2-16 16-16"
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
                  d="M64 48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm136 32h160c3.3 0 6.3 2.1 7.5 5.2s.3 6.6-2.2 8.8l-111.9 97.9 58.1-.3c40-.2 72.5 32.2 72.5 72.2 0 39.9-32.3 72.2-72.2 72.2h-71.1c-18.2 0-34.8-10.3-42.9-26.5l-4.9-9.9c-2-4-.4-8.8 3.6-10.7s8.8-.4 10.7 3.6l4.9 9.9c5.4 10.8 16.5 17.7 28.6 17.7h71.1c31 0 56.2-25.2 56.2-56.2 0-31.1-25.3-56.3-56.4-56.2l-79.6.3c-3.3 0-6.3-2-7.5-5.2s-.3-6.7 2.2-8.9l112-98H136c-4.4 0-8-3.6-8-8s3.6-8 8-8z"
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
                  d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm88 96h128c9.9 0 18.8 6.1 22.4 15.3s1.1 19.7-6.2 26.4l-50.8 46.5c41.9 4.8 74.6 40.4 74.6 83.6 0 46.5-37.7 84.2-84.2 84.2H208c-30.1 0-58.1-15.6-73.9-41.2l-2.6-4.2c-7-11.3-3.5-26.1 7.8-33s26.1-3.5 33 7.8l2.6 4.2a38.75 38.75 0 0 0 33 18.4h27.8c20 0 36.2-16.2 36.2-36.2 0-20.1-16.3-36.3-36.4-36.2l-51.5.3c-9.9.1-18.9-6-22.5-15.2s-1.2-19.8 6.1-26.5l50.7-46.2H152c-13.3 0-24-10.7-24-24s10.7-24 24-24"
                />
                <path
                  className="aps-icon-foreground"
                  d="M128 152c0-13.3 10.7-24 24-24h128c9.9 0 18.8 6.1 22.4 15.3s1.1 19.7-6.1 26.4l-50.8 46.5c41.9 4.8 74.6 40.4 74.6 83.6 0 46.5-37.7 84.2-84.2 84.2H208c-30.1 0-58.1-15.6-73.9-41.2l-2.6-4.2c-7-11.3-3.5-26.1 7.8-33s26.1-3.5 33 7.8l2.6 4.2a38.75 38.75 0 0 0 33 18.4h27.8c20 0 36.2-16.2 36.2-36.2 0-20.1-16.3-36.3-36.4-36.2l-51.5.3c-9.9.1-18.9-6-22.5-15.2s-1.2-19.8 6.1-26.5l50.7-46.2H152c-13.3 0-24-10.7-24-24"
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
