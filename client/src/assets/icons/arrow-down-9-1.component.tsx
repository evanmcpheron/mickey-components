import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ArrowDown91Icon: React.FC<
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
                  d="M160 480c9 0 17.5-3.8 23.6-10.4l88-96c11.9-13 11.1-33.3-2-45.2s-33.3-11.1-45.2 2L192 365.7V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v301.7l-32.4-35.3c-11.9-13-32.2-13.9-45.2-2s-13.9 32.2-2 45.2l88 96c6.1 6.6 14.6 10.4 23.6 10.4m290.7-186c-8.3-6-19.1-7.7-28.8-4.4l-48 16c-16.8 5.6-25.8 23.7-20.2 40.5s23.7 25.8 40.5 20.2l5.9-2V416H384c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32h-16v-96c0-10.3-4.9-19.9-13.3-26M418.3 91a32 32 0 1 1 27.4 57.9A32 32 0 1 1 418.3 91m-13.2 112.8-6.8 9.2c-10.5 14.2-7.5 34.2 6.7 44.8s34.2 7.5 44.8-6.7l48.8-65.8c14-18.9 21.5-41.7 21.5-65.2 0-48.6-39.4-88-88-88s-88 39.4-88 88c0 39.2 25.6 72.4 61.1 83.8z"
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
                  d="m47 377 96 96c9.4 9.4 24.6 9.4 33.9 0l96-96c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55V56c0-13.3-10.7-24-24-24s-24 10.7-24 24v342.1L81 343c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9zm409-65c0-7.7-3.7-15-10-19.5s-14.3-5.7-21.6-3.3l-48 16c-12.6 4.2-19.4 17.8-15.2 30.4s17.8 19.4 30.4 15.2l16.4-5.5V432h-24c-13.3 0-24 10.7-24 24s10.7 24 24 24h96c13.3 0 24-10.7 24-24s-10.7-24-24-24h-24zm-32-152a40 40 0 1 1 0-80 40 40 0 1 1 0 80m88-40c0-48.6-39.4-88-88-88s-88 39.4-88 88c0 42.1 29.6 77.3 69.1 86l-15.6 18.7c-8.5 10.2-7.1 25.3 3.1 33.8s25.3 7.1 33.8-3.1l64.6-77.6c13-15.6 20.3-35.1 20.9-55.3V120z"
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
                  d="M428 64a52 52 0 1 0 0 104 52 52 0 1 0 0-104m-84 52c0-46.4 37.6-84 84-84s84 37.6 84 84c0 1.3 0 2.7-.1 4h.1c0 21.2-7.6 41.8-21.5 57.9l-62.4 72.5c-5.8 6.7-15.9 7.5-22.6 1.7s-7.5-15.9-1.7-22.6l25.5-29.5H428c-46.4 0-84-37.6-84-84m-76.7 263.3-96 96c-6.2 6.2-16.4 6.2-22.6 0l-96-96c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l68.7 68.7V48c0-8.8 7.2-16 16-16s16 7.2 16 16v377.4l68.7-68.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6M448 304v144h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16s7.2-16 16-16h32V326.2l-26.9 9c-8.4 2.8-17.4-1.7-20.2-10.1s1.7-17.4 10.1-20.2l48-16c4.9-1.6 10.2-.8 14.4 2.2s6.6 7.8 6.6 13z"
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
                  d="M427.9 184.1A68 68 0 1 1 428 48a68 68 0 1 1-.1 136.1m.1 15.9c7.5 0 14.8-1 21.7-2.8L410 242.7c-2.9 3.3-2.6 8.4.8 11.3s8.4 2.6 11.3-.8l65-74.6c6.3-7.3 11.6-15.4 15.6-24 6-11.6 9.4-24.7 9.4-38.7v-4h-.1C509.8 67.5 473 32 428 32c-46.4 0-84 37.6-84 84s37.6 84 84 84M165.7 477.7l112-112c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L168 452.7V40c0-4.4-3.6-8-8-8s-8 3.6-8 8v412.7l-98.3-98.4c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l112 112c3.1 3.1 8.2 3.1 11.3 0zm270.7-188.4c-2.2-1.5-5.1-1.7-7.6-.7l-56 24c-4.1 1.7-5.9 6.4-4.2 10.5s6.4 5.9 10.5 4.2l44.9-19.2V464h-48c-4.4 0-8 3.6-8 8s3.6 8 8 8h112c4.4 0 8-3.6 8-8s-3.6-8-8-8h-48V296c0-2.7-1.4-5.2-3.6-6.7"
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
                  d="M445.7 148.9A32 32 0 1 0 418.3 91a32 32 0 1 0 27.4 57.9M405 203.8c-35.4-11.4-61-44.6-61-83.8 0-48.6 39.4-88 88-88s88 39.4 88 88c0 23.5-7.5 46.3-21.5 65.2L449.7 251c-10.5 14.2-30.6 17.2-44.8 6.7s-17.2-30.6-6.7-44.8l6.8-9.2zM464 320v96h16c17.7 0 32 14.3 32 32s-14.3 32-32 32h-96c-17.7 0-32-14.3-32-32s14.3-32 32-32h16v-51.6l-5.9 2c-16.8 5.6-34.9-3.5-40.5-20.2s3.5-34.9 20.2-40.5l48-16c9.8-3.3 20.5-1.6 28.8 4.4s13.3 15.7 13.3 26z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M160 480c9 0 17.5-3.8 23.6-10.4l88-96c11.9-13 11.1-33.3-2-45.2s-33.3-11.1-45.2 2L192 365.7V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v301.7l-32.4-35.3c-11.9-13-32.2-13.9-45.2-2s-13.9 32.2-2 45.2l88 96c6.1 6.6 14.6 10.4 23.6 10.4"
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
