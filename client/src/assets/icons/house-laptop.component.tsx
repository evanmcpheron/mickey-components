import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const HouseLaptopIcon: React.FC<
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
                  d="M218.3 8.5c12.3-11.3 31.2-11.3 43.4 0l208 192c6.7 6.2 10.3 14.8 10.3 23.5H336c-19.1 0-36.3 8.4-48 21.7V208c0-8.8-7.2-16-16-16h-64c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h64v128H112c-26.5 0-48-21.5-48-48V256H32c-13.2 0-25-8.1-29.8-20.3s-1.6-26.2 8.1-35.2zM352 304v144h192V304zm-48-16c0-17.7 14.3-32 32-32h224c17.7 0 32 14.3 32 32v160h32c8.8 0 16 7.2 16 16 0 26.5-21.5 48-48 48H304c-26.5 0-48-21.5-48-48 0-8.8 7.2-16 16-16h32z"
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
                  d="M224.8 5.4c8.8-7.2 21.5-7.2 30.3 0l216 176c10.3 8.4 11.8 23.5 3.4 33.8s-23.5 11.8-33.8 3.4L416 198.4V240h-48v-80.7L240 55 112 159.3V360c0 4.4 3.6 8 8 8h152v48H120c-30.9 0-56-25.1-56-56V198.4l-24.8 20.2c-10.3 8.4-25.4 6.8-33.8-3.4s-6.8-25.4 3.4-33.8zM288 216v45.7c-6 6.8-10.6 14.9-13.3 23.8-3.2 1.6-6.9 2.5-10.7 2.5h-48c-13.3 0-24-10.7-24-24v-48c0-13.3 10.7-24 24-24h48c13.3 0 24 10.7 24 24m64 104v144h192V320zm-48-16c0-17.7 14.3-32 32-32h224c17.7 0 32 14.3 32 32v160h36c6.6 0 12 5.4 12 12 0 19.9-16.1 36-36 36H292c-19.9 0-36-16.1-36-36 0-6.6 5.4-12 12-12h36z"
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
                  d="M229.6 3.9c6-5.1 14.8-5.1 20.8 0l224 192c6.7 5.8 7.5 15.9 1.7 22.6-3.1 3.7-7.6 5.6-12.1 5.6h-.2c-3.7 0-7.3-1.3-10.3-3.9L416 187.9V224h-32v-63.5L240 37.1 96 160.5V352c0 17.7 14.3 32 32 32h144v32H128c-35.3 0-64-28.7-64-64V187.9l-37.6 32.2c-6.7 5.8-16.8 5-22.6-1.7s-5-16.8 1.7-22.6l224-192zM352 256h192c26.5 0 48 21.5 48 48v128c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8-7.2-16-16-16H352c-8.8 0-16 7.2-16 16v128c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-26.5 21.5-48 48-48m-80 224h352c8.8 0 16 7.2 16 16s-7.2 16-16 16H272c-8.8 0-16-7.2-16-16s7.2-16 16-16m-64-304h64c17.7 0 32 14.3 32 32v16c0 8.8-7.2 16-16 16s-16-7.2-16-16v-16h-64v64h48c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32"
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
                  d="M234.8 1.9c3-2.6 7.4-2.6 10.4 0l232 200c3.3 2.9 3.7 7.9.8 11.3s-7.9 3.7-11.3.8L416 170.3V224h-16v-67.5L240 18.6 80 156.5V360c0 22.1 17.9 40 40 40h152v16H120c-30.9 0-56-25.1-56-56V170.3l-50.8 43.8c-3.3 2.9-8.4 2.5-11.3-.8s-2.5-8.4.8-11.3l232-200zM304 200v26.7c-6 2.1-11.4 5.4-16 9.5V200c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v80c0 4.4 3.6 8 8 8h72v16h-72c-13.3 0-24-10.7-24-24v-80c0-13.3 10.7-24 24-24h80c13.3 0 24 10.7 24 24m256 72H336c-8.8 0-16 7.2-16 16v160h256V288c0-8.8-7.2-16-16-16m-256 16c0-17.7 14.3-32 32-32h224c17.7 0 32 14.3 32 32v160h32c8.8 0 16 7.2 16 16 0 26.5-21.5 48-48 48H304c-26.5 0-48-21.5-48-48 0-8.8 7.2-16 16-16h32zm272 176H272c0 17.7 14.3 32 32 32h288c17.7 0 32-14.3 32-32h-48"
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
                  d="M261.7 8.5c-12.3-11.3-31.2-11.3-43.4 0l-208 192c-9.7 8.9-12.9 22.9-8.1 35.2S18.8 256 32 256h32v112c0 26.5 21.5 48 48 48h160V288h-64c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16v37.7c11.7-13.3 28.9-21.7 48-21.7h144c0-8.8-3.6-17.3-10.3-23.5z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M352 448h192V304H352zm-48 0V288c0-17.7 14.3-32 32-32h224c17.7 0 32 14.3 32 32v160h32c8.8 0 16 7.2 16 16 0 26.5-21.5 48-48 48H304c-26.5 0-48-21.5-48-48 0-8.8 7.2-16 16-16z"
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
