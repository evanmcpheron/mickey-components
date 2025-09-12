import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const TurntableIcon: React.FC<
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
                  d="M0 96c0-35.3 28.7-64 64-64h448c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm384 160a160 160 0 1 0-320 0 160 160 0 1 0 320 0m128-144c0-8.8-7.2-16-16-16s-16 7.2-16 16v160.4c0 2.5-.6 4.9-1.7 7.2l-16.2 32.5c-11 .7-21.4 7-26.7 17.6l-16 32c-7.9 15.8-1.5 35 14.3 42.9s35 1.5 42.9-14.3l16-32c5.3-10.6 4.2-22.7-1.9-31.9l16.2-32.4c3.3-6.7 5.1-14 5.1-21.5zM224 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64"
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
                  d="M512 80c8.8 0 16 7.2 16 16v320c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16zM64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm160 368a144 144 0 1 0 0-288 144 144 0 1 0 0 288m0-176a32 32 0 1 1 0 64 32 32 0 1 1 0-64m272-88c0-13.3-10.7-24-24-24s-24 10.7-24 24v135.7c0 6.7-1.7 13.3-4.9 19.2l-40.2 73.7c-6.3 11.6-2.1 26.2 9.6 32.6s26.2 2.1 32.6-9.6l40.2-73.7c7-12.9 10.7-27.4 10.7-42.1z"
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
                  d="M512 64c17.7 0 32 14.3 32 32v320c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32zM64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm160 352a128 128 0 1 1 0-256 128 128 0 1 1 0 256M64 256a160 160 0 1 0 320 0 160 160 0 1 0-320 0m160 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48m256 17.4V112c0-8.8-7.2-16-16-16s-16 7.2-16 16v176.5c-16 1.4-30.9 10.8-38.6 26.2l-16 32c-11.8 23.6-2.2 52.2 21.3 64s52.2 2.2 64-21.3l16-32c10.6-21.2 3.9-46.5-14.6-59.9zM452.3 320c2.3 0 4.6.6 6.8 1.7 7.9 4 11.1 13.6 7.2 21.5l-16 32c-4 7.9-13.6 11.1-21.5 7.2s-11.1-13.6-7.2-21.5l16-32c2.7-5.5 8.2-8.7 14-8.8h.7z"
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
                  d="M512 48c26.5 0 48 21.5 48 48v320c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V96c0-26.5 21.5-48 48-48zM64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm160 368a144 144 0 1 1 0-288 144 144 0 1 1 0 288M64 256a160 160 0 1 0 320 0 160 160 0 1 0-320 0m144 0a16 16 0 1 1 32 0 16 16 0 1 1-32 0m48 0a32 32 0 1 0-64 0 32 32 0 1 0 64 0m256-152c0-4.4-3.6-8-8-8s-8 3.6-8 8v152.4c0 3.7-.9 7.4-2.5 10.7l-22.8 45.5c-13.9-3-28.7 3.6-35.3 17l-16 32c-7.9 15.8-1.5 35 14.3 42.9s35 1.5 42.9-14.3l16-32c7.9-15.8 1.5-35-14.3-42.9-.9-.5-1.9-.9-2.8-1.2.9.4 1.9.8 2.8 1.2 2.5 1.2 4.7 2.7 6.7 4.5l22.8-45.5c2.8-5.6 4.2-11.7 4.2-17.9zm-40.8 225.7c7.9 4 11.1 13.6 7.2 21.5l-16 32c-4 7.9-13.6 11.1-21.5 7.2s-11.1-13.6-7.2-21.5l16-32c4-7.9 13.6-11.1 21.5-7.2"
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
                  d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm160 64a160 160 0 1 1 0 320 160 160 0 1 1 0-320m272 0c8.8 0 16 7.2 16 16v160.4c0 7.5-1.7 14.8-5.1 21.5l-16.2 32.4c6.1 9.2 7.2 21.4 1.9 31.9l-16 32c-7.9 15.8-27.1 22.2-42.9 14.3s-22.2-27.1-14.3-42.9l16-32c5.3-10.6 15.7-17 26.7-17.6l16.2-32.5c1.1-2.2 1.7-4.7 1.7-7.2V112c0-8.8 7.2-16 16-16"
                />
                <path
                  className="aps-icon-foreground"
                  d="M64 256a160 160 0 1 1 320 0 160 160 0 1 1-320 0m192 0a32 32 0 1 0-64 0 32 32 0 1 0 64 0M496 96c8.8 0 16 7.2 16 16v160.4c0 7.5-1.7 14.8-5.1 21.5l-16.2 32.4c6.1 9.2 7.2 21.4 1.9 31.9l-16 32c-7.9 15.8-27.1 22.2-42.9 14.3s-22.2-27.1-14.3-42.9l16-32c5.3-10.6 15.7-17 26.7-17.6l16.2-32.5c1.1-2.2 1.7-4.7 1.7-7.2V112c0-8.8 7.2-16 16-16"
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
