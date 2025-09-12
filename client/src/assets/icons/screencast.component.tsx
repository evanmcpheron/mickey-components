import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ScreencastIcon: React.FC<
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
                  d="M512 96H64v99c-13-2-26.4-3-40-3H0V96c0-35.3 28.7-64 64-64h448c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H288v-24c0-13.6-1-27-3-40h227zM24 224c128.1 0 232 103.9 232 232 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184-13.3 0-24-10.7-24-24s10.7-24 24-24m8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64M0 344c0-13.3 10.7-24 24-24 75.1 0 136 60.9 136 136 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88-13.3 0-24-10.7-24-24"
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
                  d="M512 80H64c-8.8 0-16 7.2-16 16v97.1c-7.9-.7-15.9-1.1-24-1.1H0V96c0-35.3 28.7-64 64-64h448c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H288v-24c0-8.1-.4-16.1-1.1-24H512c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16M24 224c128.1 0 232 103.9 232 232 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184-13.3 0-24-10.7-24-24s10.7-24 24-24m8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64M0 344c0-13.3 10.7-24 24-24 75.1 0 136 60.9 136 136 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88-13.3 0-24-10.7-24-24"
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
                  d="M512 64H64c-17.7 0-32 14.3-32 32v96.1c-2.7-.1-5.3-.1-8-.1H0V96c0-35.3 28.7-64 64-64h448c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H288v-24c0-2.7 0-5.3-.1-8H512c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32M16 224c132.5 0 240 107.5 240 240 0 8.8-7.2 16-16 16s-16-7.2-16-16c0-114.9-93.1-208-208-208-8.8 0-16-7.2-16-16s7.2-16 16-16m16 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64M0 336c0-8.8 7.2-16 16-16 79.5 0 144 64.5 144 144 0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9-50.1-112-112-112-8.8 0-16-7.2-16-16"
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
                  d="M512 48H64c-26.5 0-48 21.5-48 48v96H0V96c0-35.3 28.7-64 64-64h448c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H288v-16h224c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48M8 224c137 0 248 111 248 248 0 4.4-3.6 8-8 8s-8-3.6-8-8c0-128.1-103.9-232-232-232-4.4 0-8-3.6-8-8s3.6-8 8-8m40 224a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-48 0a32 32 0 1 1 64 0 32 32 0 1 1-64 0m0-120c0-4.4 3.6-8 8-8 83.9 0 152 68.1 152 152 0 4.4-3.6 8-8 8s-8-3.6-8-8c0-75.1-60.9-136-136-136-4.4 0-8-3.6-8-8"
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
                  d="M64 96h448v320H285c2 13 3 26.4 3 40v24h224c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96v96h24c13.6 0 27 1 40 3z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M0 248c0-13.3 10.7-24 24-24 128.1 0 232 103.9 232 232 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184-13.3 0-24-10.7-24-24m0 200a32 32 0 1 1 64 0 32 32 0 1 1-64 0m24-128c75.1 0 136 60.9 136 136 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88-13.3 0-24-10.7-24-24s10.7-24 24-24"
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
