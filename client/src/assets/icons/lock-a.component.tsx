import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const LockAIcon: React.FC<
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
                  d="M224 64c44.2 0 80 35.8 80 80v48H144v-48c0-44.2 35.8-80 80-80M80 144v48H64c-35.3 0-64 28.7-64 64v192c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V256c0-35.3-28.7-64-64-64h-16v-48C368 64.5 303.5 0 224 0S80 64.5 80 144m49.7 280.8L209.6 265c.8-1.6 1.8-3 3-4.3 1.4-1.5 3.1-2.6 5-3.4 2.1-.9 4.2-1.3 6.4-1.3s4.3.4 6.4 1.3c1.8.8 3.5 1.9 5 3.4 1.3 1.3 2.3 2.7 3.1 4.3l79.9 159.9c4 7.9.7 17.5-7.2 21.5s-17.5.7-21.5-7.2L270.1 400h-92.2l-19.6 39.2c-4 7.9-13.6 11.1-21.5 7.2s-11.1-13.6-7.2-21.5zm64.2-56.8h60.2L224 307.8z"
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
                  d="M224 48c44.2 0 80 35.8 80 80v32H144v-32c0-44.2 35.8-80 80-80M96 128v32H64c-35.3 0-64 28.7-64 64v224c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V224c0-35.3-28.7-64-64-64h-32v-32C352 57.3 294.7 0 224 0S96 57.3 96 128m-32 80h320c8.8 0 16 7.2 16 16v224c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224c0-8.8 7.2-16 16-16m58.5 197.3c-5.9 11.9-1.1 26.3 10.7 32.2s26.3 1.1 32.2-10.7l13.4-26.8h90.3l13.4 26.7c5.9 11.9 20.3 16.7 32.2 10.7s16.7-20.3 10.7-32.2l-79.8-159.7c-1.2-2.4-2.7-4.6-4.6-6.5-2.2-2.2-4.7-3.9-7.4-5-3.1-1.3-6.3-2-9.5-2s-6.4.6-9.5 2c-2.7 1.2-5.3 2.9-7.4 5-1.9 1.9-3.4 4.1-4.6 6.5zm80.3-53.3 21.2-42.3 21.2 42.3z"
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
                  d="M224 32c53 0 96 43 96 96v64H128v-64c0-53 43-96 96-96M96 128v64H80c-44.2 0-80 35.8-80 80v160c0 44.2 35.8 80 80 80h288c44.2 0 80-35.8 80-80V272c0-44.2-35.8-80-80-80h-16v-64C352 57.3 294.7 0 224 0S96 57.3 96 128m-16 96h288c26.5 0 48 21.5 48 48v160c0 26.5-21.5 48-48 48H80c-26.5 0-48-21.5-48-48V272c0-26.5 21.5-48 48-48m49.7 200.8c-4 7.9-.7 17.5 7.2 21.5s17.5.7 21.5-7.2l19.5-39.1h92.2l19.6 39.2c4 7.9 13.6 11.1 21.5 7.2s11.1-13.6 7.2-21.5l-80-159.9c-.8-1.6-1.8-3-3.1-4.3-1.4-1.4-3.1-2.6-5-3.4-2.1-.9-4.2-1.3-6.4-1.3s-4.3.4-6.4 1.3c-1.8.8-3.5 1.9-5 3.4-1.3 1.3-2.3 2.7-3 4.3zm64.2-56.8 30.1-60.2 30.1 60.2z"
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
                  d="M224 16c61.9 0 112 50.1 112 112v64H112v-64c0-61.9 50.1-112 112-112M96 128v64H64c-35.3 0-64 28.7-64 64v192c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V256c0-35.3-28.7-64-64-64h-32v-64C352 57.3 294.7 0 224 0S96 57.3 96 128m-32 80h320c26.5 0 48 21.5 48 48v192c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V256c0-26.5 21.5-48 48-48m88.9 180.3c-.1.1-.1.2-.1.3l-23.9 47.8c-2 4-.4 8.8 3.6 10.7s8.8.4 10.7-3.6l21.7-43.5h118.2l21.8 43.6c2 4 6.8 5.6 10.7 3.6s5.6-6.8 3.6-10.7l-23.9-47.8c0-.1-.1-.2-.1-.3l-64-127.9c-.3-.6-.6-1.1-1-1.6l-.6-.6c-1.5-1.4-3.5-2.2-5.5-2.2-1.1 0-2.1.2-3.2.7-.7.3-1.3.7-1.9 1.2-.2.2-.5.4-.7.6-.6.6-1.1 1.3-1.4 2zm20-4.3L224 281.9 275.1 384z"
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
                  d="M224 64c44.2 0 80 35.8 80 80v48H144v-48c0-44.2 35.8-80 80-80M80 144v48H64c-35.3 0-64 28.7-64 64v192c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V256c0-35.3-28.7-64-64-64h-16v-48C368 64.5 303.5 0 224 0S80 64.5 80 144m49.7 280.8L209.6 265c.8-1.6 1.8-3 3-4.3 1.4-1.5 3.1-2.6 5-3.4 2.1-.9 4.2-1.3 6.4-1.3s4.3.4 6.4 1.3c1.8.8 3.5 1.9 5 3.4 1.3 1.3 2.3 2.7 3.1 4.3l79.9 159.9c4 7.9.7 17.5-7.2 21.5s-17.5.7-21.5-7.2L270.1 400h-92.2l-19.6 39.2c-4 7.9-13.6 11.1-21.5 7.2s-11.1-13.6-7.2-21.5zm64.2-56.8h60.2L224 307.8z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M235.3 260.7c-1.4-1.4-3.1-2.6-4.9-3.4-2.1-.9-4.2-1.3-6.4-1.3s-4.3.4-6.4 1.3c-1.8.8-3.5 1.9-4.9 3.4-1.3 1.3-2.3 2.7-3.1 4.3l-79.9 159.8c-4 7.9-.7 17.5 7.2 21.5s17.5.7 21.5-7.2l19.5-39.1h92.2l19.6 39.2c4 7.9 13.6 11.1 21.5 7.2s11.1-13.6 7.2-21.5l-80-159.9c-.8-1.6-1.8-3-3.1-4.3M254.1 368h-60.2l30.1-60.2z"
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
