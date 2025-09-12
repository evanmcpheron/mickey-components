import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const JetFighterIcon: React.FC<
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
                  d="M160 24c0-13.3 10.7-24 24-24h112c13.3 0 24 10.7 24 24s-10.7 24-24 24h-16l104 144h116.4c7.7 0 15.3 1.4 22.5 4.1L625 234.4c9 3.4 15 12 15 21.6s-6 18.2-15 21.6l-102.1 38.3c-7.2 2.7-14.8 4.1-22.5 4.1H384L280 464h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-13.3 0-24-10.7-24-24s10.7-24 24-24h8V320h-32l-54.6 54.6c-6 6-14.1 9.4-22.6 9.4H64c-17.7 0-32-14.3-32-32v-64c-17.7 0-32-14.3-32-32s14.3-32 32-32v-64c0-17.7 14.3-32 32-32h18.7c8.5 0 16.6 3.4 22.6 9.4L160 192h32V48h-8c-13.3 0-24-10.7-24-24M80 240c-8.8 0-16 7.2-16 16s7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16z"
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
                  d="M216 0h80c13.3 0 24 10.7 24 24s-10.7 24-24 24h-6.9c4.7 6.1 9.8 12.6 15.1 19.6C329.5 100.4 361 141.7 386 176h97.1c5.7 0 11.3.9 16.7 2.5l108.1 33.8C627 218.3 640 236 640 256s-13 37.7-32.1 43.7l-108.1 33.7c-5.4 1.7-11 2.6-16.7 2.6H386l-97.5 128h7.5c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-13.3 0-24-10.7-24-24s10.7-24 24-24h8V336h-14.1l-31.6 31.6a55.92 55.92 0 0 1-39.6 16.4H88c-30.9 0-56-25.1-56-56v-48h-8c-13.3 0-24-10.7-24-24s10.7-24 24-24h8v-48c0-30.9 25.1-56 56-56h18.7c14.9 0 29.1 5.9 39.6 16.4l31.6 31.6H192V48h-8c-13.3 0-24-10.7-24-24s10.7-24 24-24zm24 176h86.4c-19.9-26.7-41.6-55.1-60.1-79.1-10-12.9-19-24.5-26.3-33.9zM80 280v48c0 4.4 3.6 8 8 8h18.7c2.1 0 4.2-.8 5.7-2.3L151 295c4.5-4.5 10.6-7 17-7h315.1c.8 0 1.6-.1 2.4-.4L586.7 256l-101.2-31.6c-.8-.2-1.6-.4-2.4-.4H168c-6.4 0-12.5-2.5-17-7l-38.6-38.6c-1.5-1.5-3.5-2.3-5.7-2.3H88c-4.4 0-8 3.6-8 8v48h56c13.3 0 24 10.7 24 24s-10.7 24-24 24H80zm160 56v112.4L325.6 336z"
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
                  d="M224 32h23.9l104.7 144H224zm160.2 176h106c1.9 0 3.8.3 5.6 1l107.6 40.3c2.8 1 4.6 3.7 4.6 6.6s-1.8 5.6-4.6 6.6L495.8 303c-1.8.7-3.7 1-5.6 1H160c-4.2 0-8.3 1.7-11.3 4.7l-38.6 38.6c-3 3-7.1 4.7-11.3 4.7H80c-8.8 0-16-7.2-16-16v-64h80c8.8 0 16-7.2 16-16s-7.2-16-16-16H64v-64c0-8.8 7.2-16 16-16h18.7c4.2 0 8.3 1.7 11.3 4.7l38.6 38.6c3 3 7.1 4.7 11.3 4.7h224.3M32 272v64c0 26.5 21.5 48 48 48h18.7c12.7 0 24.9-5.1 33.9-14.1l34-33.9H192v144c-8.8 0-16 7.2-16 16s7.2 16 16 16h112c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16.6l104.7-144h98.1c5.8 0 11.5-1 16.9-3.1l107.6-40.3c15.3-5.7 25.4-20.3 25.4-36.6s-10.1-30.9-25.4-36.6l-107.6-40.3c-5.4-2-11.1-3.1-16.9-3.1h-98.1L287.4 32H304c8.8 0 16-7.2 16-16s-7.2-16-16-16H192c-8.8 0-16 7.2-16 16s7.2 16 16 16v144h-25.4l-33.9-33.9c-9-9-21.2-14.1-33.9-14.1H80c-26.5 0-48 21.5-48 48v64H16c-8.8 0-16 7.2-16 16s7.2 16 16 16zm192 208V336h128.6L247.9 480z"
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
                  d="M208 16h36l124.1 168H208zm176.1 184H485c6.3 0 12.7 1.1 18.6 3.2l110.6 39c5.8 2.1 9.8 7.6 9.8 13.8s-3.9 11.7-9.8 13.8l-110.6 39c-6 2.1-12.3 3.2-18.6 3.2H152c-1.9 0-3.7.7-5.1 1.9l-39.1 32.6c-4.3 3.5-9.8 5.5-15.4 5.5H72c-13.3 0-24-10.7-24-24v-64h104c4.4 0 8-3.6 8-8s-3.6-8-8-8H48v-64c0-13.3 10.7-24 24-24h20.4c5.6 0 11.1 2 15.4 5.6l39.1 32.6c1.4 1.2 3.3 1.9 5.1 1.9h232.1zM32 264v64c0 22.1 17.9 40 40 40h20.4c9.4 0 18.4-3.3 25.6-9.3l36.9-30.7H192v168c-4.4 0-8 3.6-8 8s3.6 8 8 8h112c4.4 0 8-3.6 8-8s-3.6-8-8-8h-40.1L388 328h97c8.2 0 16.3-1.4 24-4.1l110.6-39C631.8 280.5 640 269 640 256s-8.2-24.5-20.4-28.9l-110.6-39c-7.7-2.7-15.8-4.1-24-4.1h-97L263.9 16H304c4.4 0 8-3.6 8-8s-3.6-8-8-8H192c-4.4 0-8 3.6-8 8s3.6 8 8 8v168h-37.1L118 153.3c-7.2-6-16.2-9.3-25.6-9.3H72c-22.1 0-40 17.9-40 40v64H8c-4.4 0-8 3.6-8 8s3.6 8 8 8zm176 64h160.1L244 496h-36z"
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
                  d="M192 192V48h88l104 144zm0 128h192L280 464h-88z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M160 24c0 13.3 10.7 24 24 24h112c13.3 0 24-10.7 24-24S309.3 0 296 0H184c-13.3 0-24 10.7-24 24m32 168h-32l-54.6-54.6c-6-6-14.1-9.4-22.6-9.4H48c-8.8 0-16 7.2-16 16v80c-17.7 0-32 14.3-32 32s14.3 32 32 32v80c0 8.8 7.2 16 16 16h34.7c8.5 0 16.6-3.4 22.6-9.4L160 320h340.4c7.7 0 15.3-1.4 22.5-4.1L625 277.6c9-3.4 15-12 15-21.6s-6-18.2-15-21.6l-102.1-38.3c-7.2-2.7-14.8-4.1-22.5-4.1zM80 240h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16s7.2-16 16-16m104 224c-13.3 0-24 10.7-24 24s10.7 24 24 24h112c13.3 0 24-10.7 24-24s-10.7-24-24-24z"
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
