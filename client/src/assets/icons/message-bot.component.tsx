import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const MessageBotIcon: React.FC<
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
                  d="M160 0c-35.3 0-64 28.7-64 64v112H59.7c-5.5-9.6-15.9-16-27.7-16-17.7 0-32 14.3-32 32s14.3 32 32 32c11.8 0 22.2-6.4 27.7-16H96v144c0 35.3 28.7 64 64 64h64v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L373.3 416H480c35.3 0 64-28.7 64-64V208h36.3c5.5 9.6 15.9 16 27.7 16 17.7 0 32-14.3 32-32s-14.3-32-32-32c-11.8 0-22.2 6.4-27.7 16H544V64c0-35.3-28.7-64-64-64zm0 128c0-17.7 14.3-32 32-32h256c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32zm64 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64m192 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
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
                  d="M272 368H160c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16h320c8.8 0 16 7.2 16 16v288c0 8.8-7.2 16-16 16H357.3l-12.8 9.6L272 432v-64M96 208v144c0 35.3 28.7 64 64 64h64v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5l17.1-12.8 5.1-3.8.2-.2 101.3-76H480c35.3 0 64-28.7 64-64V208h36.3c5.5 9.6 15.9 16 27.7 16 17.7 0 32-14.3 32-32s-14.3-32-32-32c-11.8 0-22.2 6.4-27.7 16H544V64c0-35.3-28.7-64-64-64H160c-35.3 0-64 28.7-64 64v112H59.7c-5.5-9.6-15.9-16-27.7-16-17.7 0-32 14.3-32 32s14.3 32 32 32c11.8 0 22.2-6.4 27.7-16zm80-80v128c0 17.7 14.3 32 32 32h224c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H208c-17.7 0-32 14.3-32 32m32 64a32 32 0 1 1 64 0 32 32 0 1 1-64 0m192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64"
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
                  d="M224 384c17.7 0 32 14.3 32 32v48l98.1-73.6c5.5-4.2 12.3-6.4 19.2-6.4H480c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H160c-17.7 0-32 14.3-32 32v288c0 17.7 14.3 32 32 32zM544 64v112h36.3c5.5-9.6 15.9-16 27.7-16 17.7 0 32 14.3 32 32s-14.3 32-32 32c-11.8 0-22.2-6.4-27.7-16H544v144c0 35.3-28.7 64-64 64H373.3l-123.7 92.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3v-80h-64c-35.3 0-64-28.7-64-64V208H59.7c-5.5 9.6-15.9 16-27.7 16-17.7 0-32-14.3-32-32s14.3-32 32-32c11.8 0 22.2 6.4 27.7 16H96V64c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64m-336 64c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h224c8.8 0 16-7.2 16-16v-96c0-8.8-7.2-16-16-16zm-48 16c0-26.5 21.5-48 48-48h224c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48zm56 48a32 32 0 1 1 64 0 32 32 0 1 1-64 0m176-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64"
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
                  d="M224 400c8.8 0 16 7.2 16 16v80l123.7-92.8c2.8-2.1 6.1-3.2 9.6-3.2H480c26.5 0 48-21.5 48-48V64c0-26.5-21.5-48-48-48H160c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48zM96 64c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v120h33c3.6-13.8 16.1-24 31-24 17.7 0 32 14.3 32 32s-14.3 32-32 32c-14.9 0-27.4-10.2-31-24h-33v152c0 35.3-28.7 64-64 64H373.3l-123.7 92.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3v-80h-64c-35.3 0-64-28.7-64-64V200H63c-3.6 13.8-16.1 24-31 24-17.7 0-32-14.3-32-32s14.3-32 32-32c14.9 0 27.4 10.2 31 24h33zM32 208a16 16 0 1 0 0-32 16 16 0 1 0 0 32m592-16a16 16 0 1 0-32 0 16 16 0 1 0 32 0M176 96c-8.8 0-16 7.2-16 16v160c0 8.8 7.2 16 16 16h288c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16zm-32 16c0-17.7 14.3-32 32-32h288c17.7 0 32 14.3 32 32v160c0 17.7-14.3 32-32 32H176c-17.7 0-32-14.3-32-32zm80 56a24 24 0 1 0 0 48 24 24 0 1 0 0-48m40 24a40 40 0 1 1-80 0 40 40 0 1 1 80 0m128 0a24 24 0 1 0 48 0 24 24 0 1 0-48 0m24 40a40 40 0 1 1 0-80 40 40 0 1 1 0 80"
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
                  d="M96 64c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v288c0 35.3-28.7 64-64 64H373.3l-123.7 92.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3v-80h-64c-35.3 0-64-28.7-64-64zm96 32c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M59.7 208c-5.5 9.6-15.9 16-27.7 16-17.7 0-32-14.3-32-32s14.3-32 32-32c11.8 0 22.2 6.4 27.7 16H96v32zM192 192a32 32 0 1 1 64 0 32 32 0 1 1-64 0m224-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64m224 32c0 17.7-14.3 32-32 32-11.8 0-22.2-6.4-27.7-16H544v-32h36.3c5.5-9.6 15.9-16 27.7-16 17.7 0 32 14.3 32 32"
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
