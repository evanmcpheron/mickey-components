import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const PollPeopleIcon: React.FC<
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
                  d="M128 48a48 48 0 1 0-96 0 48 48 0 1 0 96 0m448 80h-96V96h96zM272 32c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm304 384H352v-32h224zm-304-96c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48v-64c0-26.5-21.5-48-48-48zM64 128c-35.3 0-64 28.7-64 64 0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32 0-35.3-28.7-64-64-64zm64 208a48 48 0 1 0-96 0 48 48 0 1 0 96 0m-64 80c-35.3 0-64 28.7-64 64 0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32 0-35.3-28.7-64-64-64z"
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
                  d="M128 48a48 48 0 1 0-96 0 48 48 0 1 0 96 0m464 32v64H480V80zM272 32c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm320 336v64H352v-64zm-320-48c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48v-64c0-26.5-21.5-48-48-48zM64 128c-35.3 0-64 28.7-64 64 0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32 0-35.3-28.7-64-64-64zm64 208a48 48 0 1 0-96 0 48 48 0 1 0 96 0m-64 80c-35.3 0-64 28.7-64 64 0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32 0-35.3-28.7-64-64-64z"
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
                  d="M80 48a16 16 0 1 1 32 0 16 16 0 1 1-32 0m64 0a48 48 0 1 0-96 0 48 48 0 1 0 96 0m448 16c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16h-80V64zm-320 0h208v96H272c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16m0-32c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm320 320c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H384v-96zm-320 0h80v96h-80c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16m0-32c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48v-64c0-26.5-21.5-48-48-48zM1.1 486.1l-1 7.9c-1.1 8.8 5.1 16.8 13.9 17.9s16.8-5.1 17.9-13.9l1-7.9c3-24 23.4-42 47.6-42h31c24.2 0 44.6 18 47.6 42l1 7.9c1.1 8.8 9.1 15 17.9 13.9s15-9.1 13.9-17.9l-1-7.9c-5-40-39-70.1-79.4-70.1h-31c-40.3 0-74.4 30-79.4 70.1m0-288-1 7.9c-1.1 8.8 5.1 16.8 13.9 17.9s16.8-5.1 17.9-13.9l1-7.9c3-24 23.4-42 47.6-42h31c24.2 0 44.6 18 47.6 42l1 7.9c1.1 8.8 9.1 15 17.9 13.9s15-9.1 13.9-17.9l-1-7.9c-5-40-39-70.1-79.4-70.1h-31c-40.3 0-74.4 30-79.4 70.1M80 336a16 16 0 1 1 32 0 16 16 0 1 1-32 0m64 0a48 48 0 1 0-96 0 48 48 0 1 0 96 0"
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
                  d="M112 48a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-80 0a48 48 0 1 1 96 0 48 48 0 1 1-96 0m480 0v128h80c17.7 0 32-14.3 32-32V80c0-17.7-14.3-32-32-32zm-16 0H272c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h224zM224 80c0-26.5 21.5-48 48-48h320c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H272c-26.5 0-48-21.5-48-48zm160 256v128h208c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32zm-16 0h-96c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h96zm-144 32c0-26.5 21.5-48 48-48h320c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H272c-26.5 0-48-21.5-48-48zm-112-32a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-80 0a48 48 0 1 1 96 0 48 48 0 1 1-96 0m32-192c-26.5 0-48 21.5-48 48 0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16 0-26.5-21.5-48-48-48zm0-16h32c35.3 0 64 28.7 64 64 0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32 0-35.3 28.7-64 64-64M16 480c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16 0-26.5-21.5-48-48-48H64c-26.5 0-48 21.5-48 48m-16 0c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64 0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32"
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
                  d="M480 192h112c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48H480v64h96v32h-96zm-96 288h208c26.5 0 48-21.5 48-48v-64c0-26.5-21.5-48-48-48H384v64h192v32H384z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M80 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96m-16 32c-35.3 0-64 28.7-64 64 0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32 0-35.3-28.7-64-64-64zm64 208a48 48 0 1 0-96 0 48 48 0 1 0 96 0m-64 80c-35.3 0-64 28.7-64 64 0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32 0-35.3-28.7-64-64-64zM224 80c0-26.5 21.5-48 48-48h208v160H272c-26.5 0-48-21.5-48-48zm0 288c0-26.5 21.5-48 48-48h112v160H272c-26.5 0-48-21.5-48-48z"
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
