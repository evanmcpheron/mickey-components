import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const FlashlightIcon: React.FC<
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
                  d="M576 416h32c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32h-32zM544 97.7C449.1 107.9 384 160 384 160H48c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h336s65.1 52.1 160 62.3zM224 256c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32"
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
                  d="M384 304H48v-96h336c11.6 0 22.9-4.2 31.7-11.9l.1-.1c.2-.2.7-.6 1.4-1.2 1.5-1.2 3.9-3.1 7.4-5.4 6.9-4.8 17.5-11.4 31.4-18.2 15-7.3 33.9-14.6 56.1-19.8v209.3c-22.2-5.2-41-12.5-56.1-19.8-14-6.8-24.5-13.4-31.4-18.2-3.4-2.4-5.9-4.3-7.4-5.4-.7-.6-1.2-1-1.4-1.2l-.1-.1c-8.8-7.7-20-11.9-31.6-11.9zm192 64c-5.5 0-10.8-.2-16-.4V144.4c5.2-.3 10.5-.4 16-.4h16v224zM384 160H48c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h336s72 64 192 64h32c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32h-32c-120 0-192 64-192 64m-136 72c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24z"
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
                  d="m401.8 325.4 31.5 21c24 16 50.8 27.1 78.7 32.9V132.7c-28 5.8-54.7 16.9-78.7 32.9l-31.5 21-8.1 5.4H48c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h345.7zM544 383.6c4.5.3 9 .4 13.5.4H592c8.8 0 16-7.2 16-16V144c0-8.8-7.2-16-16-16h-34.5c-4.5 0-9 .1-13.5.4zM0 304v-96c0-26.5 21.5-48 48-48h336l31.5-21c42.1-28 91.5-43 142-43H592c26.5 0 48 21.5 48 48v224c0 26.5-21.5 48-48 48h-34.5c-50.5 0-100-15-142-43L384 352H48c-26.5 0-48-21.5-48-48m224-48c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16s-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16"
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
                  d="M388.8 336H48c-17.7 0-32-14.3-32-32v-96c0-17.7 14.3-32 32-32h340.8l4-2.7 31.5-21c31.2-20.8 66.7-33.9 103.6-38.5v284.4c-36.9-4.6-72.4-17.7-103.6-38.5l-31.5-21zm168.7 64c-4.5 0-9-.1-13.5-.4V112.4c4.5-.3 9-.4 13.5-.4H600c13.3 0 24 10.7 24 24v240c0 13.3-10.7 24-24 24zM0 208v96c0 26.5 21.5 48 48 48h336l31.5 21c42.1 28 91.5 43 142 43H600c22.1 0 40-17.9 40-40V136c0-22.1-17.9-40-40-40h-42.5c-50.5 0-100 15-142 43L384 160H48c-26.5 0-48 21.5-48 48m256 32h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16s7.2-16 16-16m-32 16c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32s-14.3-32-32-32h-32c-17.7 0-32 14.3-32 32"
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
                  d="M576 96c-112 0-192 64-192 64H48c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h336s80 64 192 64zM224 256c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32"
                />
                <path
                  className="aps-icon-foreground"
                  d="M608 96h-32v320h32c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32M256 224c-17.7 0-32 14.3-32 32s14.3 32 32 32h32c17.7 0 32-14.3 32-32s-14.3-32-32-32z"
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
