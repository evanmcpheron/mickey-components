import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const TruckBoltIcon: React.FC<
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
                  d="M48 0C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h16c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48zm368 160h50.7l77.3 77.3V256H416zM112 416a48 48 0 1 1 96 0 48 48 0 1 1-96 0m368-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96M270.3 87.2 233.9 160H288c6.9 0 13 4.4 15.2 10.9s-.1 13.7-5.6 17.9l-128 96c-5.9 4.5-14.2 4.2-19.9-.5s-7.4-12.8-4.1-19.4l36.5-72.9H128c-6.9 0-13-4.4-15.2-10.9s.1-13.7 5.6-17.9l128-96c5.9-4.5 14.2-4.2 19.9.5s7.4 12.8 4.1 19.4z"
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
                  d="M352 48c8.8 0 16 7.2 16 16v288c0 8.8-7.2 16-16 16H243.2c-16.6-28.7-47.6-48-83.2-48s-66.6 19.3-83.2 48H64c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16zm32 368c0 53 43 96 96 96s96-43 96-96h40c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8V245.3c0-14.9-5.9-29.1-16.4-39.6l-93.3-93.3A55.92 55.92 0 0 0 458.7 96H416V64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64 0 53 43 96 96 96s96-43 96-96h128m173.7-176.4.4.4H416v-96h42.7c2.1 0 4.2.8 5.7 2.3zM112 416a48 48 0 1 1 96 0 48 48 0 1 1-96 0m368-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96M267.2 84.6c-5.3-5.2-13.4-6.1-19.7-2.2l-128 80c-6.1 3.8-8.9 11.1-6.9 18S120.8 192 128 192h51.7l-33.5 55.8c-3.8 6.3-2.8 14.5 2.5 19.6s13.4 6.1 19.7 2.2l128-80c6.1-3.8 8.9-11.1 6.9-18s-8.2-11.6-15.4-11.6h-51.6l33.5-55.8c3.8-6.3 2.8-14.5-2.5-19.6z"
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
                  d="M352 32c17.7 0 32 14.3 32 32v320H250.5c-13.2-37.3-48.7-64-90.5-64s-77.4 26.7-90.5 64H64c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32zM0 352c0 35.3 28.7 64 64 64 0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16V235.8c0-11.5-4.1-22.5-11.6-31.2l-78.7-91.8c-9.1-10.7-22.4-16.8-36.4-16.8H416V64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64zm416-224h65.3c4.7 0 9.1 2 12.1 5.6l77.5 90.4H416zm0 216.4V256h160v128h-5.5c-13.2-37.3-48.7-64-90.5-64-24.6 0-47 9.2-64 24.4M160 352a64 64 0 1 1 0 128 64 64 0 1 1 0-128m256 64a64 64 0 1 1 128 0 64 64 0 1 1-128 0M251.3 91.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-96 96c-4.6 4.6-5.9 11.5-3.5 17.4s8.3 9.9 14.8 9.9h89.4l-68.7 68.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l96-96c4.6-4.6 5.9-11.5 3.5-17.4s-8.3-9.9-14.8-9.9h-89.4z"
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
                  d="M352 16c26.5 0 48 21.5 48 48v336H236.7c-10.4-36.9-44.4-64-84.7-64s-74.2 27.1-84.7 64H64c-26.5 0-48-21.5-48-48V64c0-26.5 21.5-48 48-48zM64 416h.4c-.2 2.6-.4 5.3-.4 8 0 48.6 39.4 88 88 88s88-39.4 88-88c0-2.7-.1-5.4-.4-8h160.8c-.2 2.6-.4 5.3-.4 8 0 48.6 39.4 88 88 88s88-39.4 88-88c0-2.7-.1-5.4-.4-8H632c4.4 0 8-3.6 8-8s-3.6-8-8-8h-24V229.3c0-10.6-4.2-20.8-11.7-28.3L503 107.7c-7.5-7.5-17.7-11.7-28.3-11.7H416V64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64m352-304h58.7c6.4 0 12.5 2.5 17 7l93.3 93.3c1.1 1.1 2.2 2.4 3 3.7H416zm0 261.4V232h176v168h-19.3c-10.4-36.9-44.4-64-84.7-64-29.8 0-56.1 14.8-72 37.4M152 352a72 72 0 1 1 0 144 72 72 0 1 1 0-144m264 72a72 72 0 1 1 144 0 72 72 0 1 1-144 0M270.9 104.1c8.3-14.5-8.4-30.4-22.5-21.4l-125.5 79.8c-13.5 8.6-7.4 29.5 8.6 29.5h45.6l-32 55.9c-8.3 14.5 8.4 30.4 22.5 21.4l125.5-79.9c13.5-8.6 7.4-29.5-8.6-29.5h-45.6l32-55.9zM131.5 176 257 96.1 218.2 164c-1.4 2.5-1.4 5.5 0 8s4.1 4 6.9 4h59.4L159 255.9l38.8-67.9c1.4-2.5 1.4-5.5 0-8s-4.1-4-6.9-4z"
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
                  d="M266.3 51.7c5.7 4.8 7.4 12.8 4.1 19.4L233.9 144H288c6.9 0 13 4.4 15.2 10.9s-.1 13.7-5.6 17.9l-128 96c-5.9 4.5-14.2 4.2-19.9-.5s-7.4-12.8-4.1-19.4l36.5-72.9H128c-6.9 0-13-4.4-15.2-10.9s.1-13.7 5.6-17.9l128-96c5.9-4.5 14.2-4.2 19.9.5M96 432a80 80 0 1 1 160 0 80 80 0 1 1-160 0m288 0a80 80 0 1 1 160 0 80 80 0 1 1-160 0"
                />
                <path
                  className="aps-icon-foreground"
                  d="M0 48C0 21.5 21.5 0 48 0h320c26.5 0 48 21.5 48 48v48h50.7c17 0 33.3 6.7 45.3 18.7l77.3 77.3c12 12 18.7 28.3 18.7 45.3V352c17.7 0 32 14.3 32 32s-14.3 32-32 32h-33.1c-7.8-54.3-54.4-96-110.9-96s-103.1 41.7-110.9 96h-66.2c-7.8-54.3-54.4-96-110.9-96S72.9 361.7 65.1 416H48c-26.5 0-48-21.5-48-48zm416 208h128v-18.7L466.7 160H416zM266.3 51.7c-5.7-4.8-13.9-5-19.9-.5l-128 96c-5.5 4.1-7.8 11.3-5.6 17.9S121.1 176 128 176h54.1l-36.4 72.8c-3.3 6.6-1.6 14.7 4.1 19.4s13.9 5 19.9.5l128-96c5.5-4.1 7.8-11.3 5.6-17.9S294.9 144 288 144h-54.1l36.4-72.8c3.3-6.6 1.6-14.7-4.1-19.4z"
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
