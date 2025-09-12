import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const PrintSlashIcon: React.FC<
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
                  d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L522.2 384H544c17.7 0 32-14.3 32-32v-96c0-35.3-28.7-64-64-64H277.2L192 125.2V64h226.7L448 93.3V160h64V93.3c0-17-6.7-33.3-18.7-45.3L464 18.7C452 6.7 435.7 0 418.7 0H192c-35.3 0-64 28.7-64 64v11zm459 483.1-51-40.2H192v-96h132.9L122.2 192.3C89.6 195.2 64 222.6 64 256v96c0 17.7 14.3 32 32 32h32v64c0 35.3 28.7 64 64 64h256c20.1 0 38.1-9.3 49.8-23.8M496 248a24 24 0 1 1 0 48 24 24 0 1 1 0-48"
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
                  d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L542.6 400h1.4c17.7 0 32-14.3 32-32V256c0-35.3-28.7-64-64-64H277.2L176 112.6V64c0-8.8 7.2-16 16-16h229.5c4.2 0 8.3 1.7 11.3 4.7l26.5 26.5c3 3 4.7 7.1 4.7 11.3V160h48V90.5c0-17-6.7-33.3-18.7-45.3l-26.6-26.5C454.7 6.7 438.5 0 421.5 0H192c-35.3 0-64 28.7-64 64v11zM338.5 240H512c8.8 0 16 7.2 16 16v96h-46.6zm-155.7 0-60.6-47.7C89.6 195.2 64 222.6 64 256v112c0 17.7 14.3 32 32 32h48v80c0 17.7 14.3 32 32 32h288c15.5 0 28.5-11 31.4-25.7L448 449v15H192v-96h153.2l-60.9-48H176c-17.7 0-32 14.3-32 32h-32v-96c0-8.8 7.2-16 16-16z"
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
                  d="M480 463.9V480H160V352h178.3l-40.5-32H160c-17.7 0-32 14.3-32 32v32H96V256c0-17.7 14.3-32 32-32h48.2l-40.5-32H128c-35.3 0-64 28.7-64 64v128c0 17.7 14.3 32 32 32h32v64c0 17.7 14.3 32 32 32h320c14.8 0 27.3-10.1 30.9-23.7zM137.5 30.4 163 50.5c5.1-10.9 16.2-18.5 29-18.5h229.5c8.5 0 16.6 3.4 22.6 9.4l26.5 26.5c6 6 9.4 14.1 9.4 22.6V160h32V90.5c0-17-6.7-33.3-18.7-45.3l-26.6-26.5C454.7 6.7 438.5 0 421.5 0H192c-23 0-43.2 12.2-54.5 30.4M512 192H342.2l40.5 32H512c17.7 0 32 14.3 32 32v95.3l32 25.3V256c0-35.3-28.7-64-64-64m-16 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48M25.9 3.4C19-2 8.9-.8 3.4 6.1s-4.2 17 2.7 22.5l608 480c6.9 5.5 17 4.3 22.5-2.6s4.3-17-2.6-22.5z"
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
                  d="M576 256c0-35.3-28.7-64-64-64H355.1l20.3 16H512c26.5 0 48 21.5 48 48v97.7l16 12.6zm-453-63.8c-33 2.6-59 30.1-59 63.8v128c0 17.7 14.3 32 32 32h32v64c0 17.7 14.3 32 32 32h320c11.8 0 22.2-6.4 27.7-16H160c-8.8 0-16-7.2-16-16V352c0-8.8 7.2-16 16-16h145.1l-20.3-16H160c-17.7 0-32 14.3-32 32v48H96c-8.8 0-16-7.2-16-16V256c0-26.5 21.5-48 48-48h15zM192 0c-20.1 0-38.1 9.3-49.8 23.9l12.6 9.9C163.5 22.9 176.9 16 192 16h229.5c12.7 0 24.9 5.1 33.9 14.1l26.5 26.5c9 9 14.1 21.2 14.1 33.9V160h16V90.5c0-17-6.7-33.3-18.7-45.3l-26.6-26.5C454.7 6.7 438.5 0 421.5 0zm320 272a16 16 0 1 0-32 0 16 16 0 1 0 32 0M13 1.7C9.5-1 4.5-.4 1.7 3S-.4 11.5 3 14.3l624 496c3.5 2.7 8.5 2.2 11.2-1.3s2.2-8.5-1.3-11.2z"
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
                  d="m446.8 448 51 40.2C486.1 502.7 468.1 512 448 512H192c-35.3 0-64-28.7-64-64v-64H96c-17.7 0-32-14.3-32-32v-96c0-33.4 25.6-60.8 58.2-63.7L324.9 352H192v96zm97.2-64h-21.8l-245-192H512c35.3 0 64 28.7 64 64v96c0 17.7-14.3 32-32 32M192 64v61.2L128 75V64c0-35.3 28.7-64 64-64h226.7c17 0 33.3 6.7 45.3 18.7L493.3 48c12 12 18.7 28.3 18.7 45.3V160h-64V93.3L418.7 64zm328 208a24 24 0 1 0-48 0 24 24 0 1 0 48 0"
                />
                <path
                  className="aps-icon-foreground"
                  d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1l-592-464C-1.2 34.7-3.1 19.6 5.1 9.2"
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
