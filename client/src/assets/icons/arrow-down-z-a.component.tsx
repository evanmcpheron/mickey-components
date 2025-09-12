import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ArrowDownZAIcon: React.FC<
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
                  d="M183.6 469.6C177.5 476.2 169 480 160 480s-17.5-3.8-23.6-10.4l-88-96c-11.9-13-11.1-33.3 2-45.2s33.3-11.1 45.2 2l32.4 35.3V64c0-17.7 14.3-32 32-32s32 14.3 32 32v301.7l32.4-35.4c11.9-13 32.2-13.9 45.2-2s13.9 32.2 2 45.2l-88 96zM320 64c0-17.7 14.3-32 32-32h128c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9L429.3 160H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H352c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9L402.7 96H352c-17.7 0-32-14.3-32-32m96 192c12.1 0 23.2 6.8 28.6 17.7l64 128 16 32c7.9 15.8 1.5 35-14.3 42.9s-35 1.5-42.9-14.3l-7.2-14.3h-88.4l-7.2 14.3c-7.9 15.8-27.1 22.2-42.9 14.3s-22.2-27.1-14.3-42.9l16-32 64-128c5.4-10.8 16.5-17.7 28.6-17.7m-20.2 144h40.4L416 359.6z"
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
                  d="m47 377 96 96c9.4 9.4 24.6 9.4 33.9 0l96-96c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55V56c0-13.3-10.7-24-24-24s-24 10.7-24 24v342.1L81 343c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9zM352 32c-13.3 0-24 10.7-24 24s10.7 24 24 24h74.6l-92.5 104.1c-6.3 7.1-7.8 17.2-4 25.8S342.6 224 352 224h128c13.3 0 24-10.7 24-24s-10.7-24-24-24h-74.6l92.5-104.1c6.3-7.1 7.8-17.2 4-25.8S489.4 32 480 32zm64 240c-9.1 0-17.4 5.1-21.5 13.3l-80 160c-5.9 11.9-1.1 26.3 10.7 32.2s26.3 1.1 32.2-10.7l13.4-26.8H456c1.7 0 3.3-.2 4.9-.5l13.6 27.2c5.9 11.9 20.3 16.7 32.2 10.7s16.7-20.3 10.7-32.2l-80-160c-4.1-8.1-12.4-13.3-21.5-13.3zm-21.2 120 21.2-42.3 21.2 42.3z"
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
                  d="m267.3 379.3-96 96c-6.2 6.2-16.4 6.2-22.6 0l-96-96c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l68.7 68.7V48c0-8.8 7.2-16 16-16s16 7.2 16 16v377.4l68.7-68.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6M352 32h128c6.2 0 11.8 3.5 14.4 9.1s1.9 12.1-1.9 16.9L385.3 192H480c8.8 0 16 7.2 16 16s-7.2 16-16 16H352c-6.2 0-11.8-3.5-14.4-9.1s-1.9-12.1 1.9-16.9L446.7 64H352c-8.8 0-16-7.2-16-16s7.2-16 16-16m64 256c6.1 0 11.6 3.4 14.3 8.8l63.9 127.7.3.6 15.8 31.7c4 7.9.7 17.5-7.2 21.5s-17.5.7-21.5-7.2L470.1 448H361.9l-11.6 23.2c-4 7.9-13.6 11.1-21.5 7.2s-11.1-13.6-7.2-21.5l15.8-31.7.3-.6 63.9-127.7c2.7-5.4 8.2-8.8 14.3-8.8zm-38.1 128h76.2L416 339.8z"
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
                  d="m277.7 365.7-112 112c-3.1 3.1-8.2 3.1-11.3 0l-112-112c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0l98.3 98.3V40c0-4.4 3.6-8 8-8s8 3.6 8 8v412.7l98.3-98.3c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3zM336 40c0-4.4 3.6-8 8-8h144c3.1 0 5.9 1.8 7.2 4.6s.9 6.1-1 8.5L360.9 208H488c4.4 0 8 3.6 8 8s-3.6 8-8 8H344c-3.1 0-5.9-1.8-7.2-4.6s-.9-6.1 1-8.5L471.1 48H344c-4.4 0-8-3.6-8-8m87.2 252.4 63.9 127.9.2.3 23.9 47.8c2 4 .4 8.8-3.6 10.7s-8.8.4-10.7-3.6L475.1 432H356.9l-21.8 43.6c-2 4-6.8 5.6-10.7 3.6s-5.6-6.8-3.6-10.7l23.9-47.8.1-.3 63.9-127.9c1.4-2.7 4.1-4.4 7.2-4.4s5.8 1.7 7.2 4.4zM467.1 416 416 313.9 364.9 416z"
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
                  d="M352 96c-17.7 0-32-14.3-32-32s14.3-32 32-32h128c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9L429.3 160H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H352c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9L402.7 96zm64 160c12.1 0 23.2 6.8 28.6 17.7l64 128 16 32c7.9 15.8 1.5 35-14.3 42.9s-35 1.5-42.9-14.3l-7.2-14.3h-88.4l-7.2 14.3c-7.9 15.8-27.1 22.2-42.9 14.3s-22.2-27.1-14.3-42.9l16-32 64-128c5.4-10.8 16.5-17.7 28.6-17.7m-20.2 144h40.4L416 359.6z"
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
