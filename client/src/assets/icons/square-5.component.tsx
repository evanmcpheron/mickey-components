import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const Square5Icon: React.FC<
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
                  d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm112 96h104c13.3 0 24 10.7 24 24s-10.7 24-24 24h-84l-7.8 43 61.4 6.9c40.1 4.5 70.4 38.4 70.4 78.8 0 43.8-35.5 79.3-79.3 79.3h-36c-27.5 0-53.3-13.7-68.6-36.6l-4.1-6.1c-7.4-11-4.5-25.9 6.5-33.3s25.9-4.5 33.3 6.5l4.1 6.1c6.4 9.6 17.2 15.3 28.8 15.3h36c17.3 0 31.3-14 31.3-31.3 0-15.9-12-29.3-27.8-31.1l-86.9-9.8c-6.6-.7-12.6-4.2-16.6-9.5s-5.5-12.1-4.4-18.6l16-88c2.1-11.4 12-19.7 23.6-19.7z"
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
                  d="M64 80c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm176 32h104c13.3 0 24 10.7 24 24s-10.7 24-24 24h-84l-7.8 43 61.4 6.9c40.1 4.5 70.4 38.4 70.4 78.8 0 43.8-35.5 79.3-79.3 79.3h-36c-27.5 0-53.3-13.7-68.6-36.6l-4.1-6.1c-7.4-11-4.5-25.9 6.5-33.3s25.9-4.5 33.3 6.5l4.1 6.1c6.4 9.6 17.2 15.3 28.8 15.3h36c17.3 0 31.3-14 31.3-31.3 0-15.9-12-29.3-27.8-31.1l-86.9-9.8c-6.6-.7-12.6-4.2-16.6-9.5s-5.5-12.1-4.4-18.6l16-88c2.1-11.4 12-19.7 23.6-19.7z"
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
                  d="M64 64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm176 32h112c8.8 0 16 7.2 16 16s-7.2 16-16 16h-99.5L172 225.9l80.4 8.1c38.4 3.9 67.6 36.2 67.6 74.8 0 41.5-33.7 75.2-75.2 75.2h-44c-27.4 0-53-13.7-68.3-36.4l-1.8-2.7c-4.9-7.3-3-17.3 4.4-22.2s17.3-3 22.2 4.4l1.8 2.7c9.3 13.9 25 22.3 41.8 22.3h44c23.8 0 43.2-19.3 43.2-43.2 0-22.2-16.8-40.7-38.8-42.9l-98.8-10c-4.6-.5-8.8-2.9-11.5-6.7s-3.6-8.6-2.4-13.1l24-96c1.8-7.1 8.2-12.1 15.5-12.1z"
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
                  d="M64 48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm168 32h128c4.4 0 8 3.6 8 8s-3.6 8-8 8H174.4l-20.5 88.9 101.5 9.3c36.6 3.3 64.6 34 64.6 70.8 0 39.3-31.8 71.1-71.1 71.1h-53c-26.7 0-51.7-13.4-66.5-35.5l13.3-8.9c11.9 17.7 31.9 28.5 53.2 28.5H249c30.4 0 55.1-24.7 55.1-55.1 0-28.5-21.7-52.3-50.1-54.9L143.3 248c-2.3-.2-4.4-1.4-5.8-3.3s-1.8-4.2-1.3-6.5l24-104c.8-3.6 4.1-6.2 7.8-6.2"
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
                  d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm112 96h104c13.3 0 24 10.7 24 24s-10.7 24-24 24h-84l-7.8 43 61.4 6.9c40.1 4.5 70.4 38.4 70.4 78.8 0 43.8-35.5 79.3-79.3 79.3h-36c-27.5 0-53.3-13.7-68.6-36.6l-4.1-6.1c-7.4-11-4.5-25.9 6.5-33.3s25.9-4.5 33.3 6.5l4.1 6.1c6.4 9.6 17.2 15.3 28.8 15.3h36c17.3 0 31.3-14 31.3-31.3 0-15.9-12-29.3-27.8-31.1l-86.9-9.8c-6.6-.7-12.6-4.2-16.6-9.5s-5.5-12.1-4.4-18.6l16-88c2.1-11.4 12-19.7 23.6-19.7z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M152.4 147.7c2.1-11.4 12-19.7 23.6-19.7h104c13.3 0 24 10.7 24 24s-10.7 24-24 24h-84l-7.8 43 61.4 6.9c40.1 4.5 70.4 38.4 70.4 78.8 0 43.8-35.5 79.3-79.3 79.3h-36c-27.5 0-53.3-13.7-68.6-36.6l-4.1-6.1c-7.4-11-4.5-25.9 6.5-33.3s25.9-4.5 33.3 6.5l4.1 6.1c6.4 9.6 17.2 15.3 28.8 15.3h36c17.3 0 31.3-14 31.3-31.3 0-15.9-12-29.3-27.8-31.1l-86.9-9.8c-6.6-.7-12.6-4.2-16.6-9.5s-5.5-12.1-4.4-18.6l16-88z"
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
