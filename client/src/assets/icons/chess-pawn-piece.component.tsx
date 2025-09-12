import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ChessPawnPieceIcon: React.FC<
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
                viewBox="0 0 256 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M176 240c19.4-14.6 32-37.8 32-64 0-44.2-35.8-80-80-80s-80 35.8-80 80c0 26.2 12.6 49.4 32 64h-8c-13.3 0-24 10.7-24 24s10.7 24 24 24h5.7L64 384h128l-13.7-96h5.7c13.3 0 24-10.7 24-24s-10.7-24-24-24zM4.8 473.6C1.7 477.8 0 482.8 0 488c0 13.3 10.7 24 24 24h208c13.3 0 24-10.7 24-24 0-5.2-1.7-10.2-4.8-14.4L208 416H48z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M128 144a48 48 0 1 1 0 96 48 48 0 1 1 0-96m73.4 144c12.6-.7 22.6-11.2 22.6-24 0-9.7-5.8-18.1-14.1-21.9 8.9-14.6 14.1-31.8 14.1-50.1 0-53-43-96-96-96s-96 43-96 96c0 18.4 5.2 35.5 14.1 50.1C37.8 245.9 32 254.3 32 264c0 12.8 10 23.3 22.6 24L51 352h48.1l3.6-64h50.6l3.6 64H205zM52.7 464l16.6-32h117.5l16.6 32zm143.9-80H59.5c-12 0-22.9 6.7-28.4 17.3L4.6 452.5c-3 5.8-4.6 12.2-4.6 18.7C0 493.8 18.2 512 40.8 512h174.4c22.5 0 40.8-18.2 40.8-40.8 0-6.5-1.6-12.9-4.6-18.7l-26.5-51.2c-5.5-10.6-16.5-17.3-28.4-17.3z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M176 176a48 48 0 1 0-96 0 48 48 0 1 0 96 0m16 80h-6.1l10.7 96h-32.3l-10.7-96h-51.3l-10.7 96H59.5l10.7-96H64c-8.8 0-16-7.2-16-16s7.2-16 16-16c-10-13.4-16-30-16-48 0-44.2 35.8-80 80-80s80 35.8 80 80c0 18-6 34.6-16 48 8.8 0 16 7.2 16 16s-7.2 16-16 16m-1.8 128c11.1 0 21.4 5.7 27.2 15.1l32.7 52.7c3.9 6.2 5.9 13.4 5.9 20.8 0 21.8-17.7 39.4-39.4 39.4H39.4C17.7 512 0 494.3 0 472.6c0-7.3 2.1-14.5 5.9-20.8l32.7-52.7c5.8-9.4 16.1-15.1 27.2-15.1zM33.1 468.7c-.7 1.2-1.1 2.5-1.1 3.9 0 4.1 3.3 7.4 7.4 7.4h177.2c4.1 0 7.4-3.3 7.4-7.4 0-1.4-.4-2.7-1.1-3.9L190.2 416H65.8z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M128 240a64 64 0 1 0 0-128 64 64 0 1 0 0 128m80-64c0 26.2-12.6 49.4-32 64h16c4.4 0 8 3.6 8 8s-3.6 8-8 8h-13.1l15.4 128h-16.2l-15.3-128H93.2L77.9 384H61.8l15.3-128H64c-4.4 0-8-3.6-8-8s3.6-8 8-8h16c-19.4-14.6-32-37.8-32-64 0-44.2 35.8-80 80-80s80 35.8 80 80M56.2 416h143.6c7.8 0 15 3.7 19.5 10.1l32.2 45.1c2.9 4.1 4.5 8.9 4.5 13.9v2.9c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24v-2.9c0-5 1.6-9.9 4.5-13.9l32.2-45.1c4.5-6.3 11.8-10.1 19.5-10.1m-6.5 19.4-32.2 45.1c-1 1.4-1.5 3-1.5 4.6v2.9c0 4.4 3.6 8 8 8h208c4.4 0 8-3.6 8-8v-2.9c0-1.7-.5-3.3-1.5-4.6l-32.2-45.1c-1.5-2.1-3.9-3.4-6.5-3.4H56.2c-2.6 0-5 1.2-6.5 3.4"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M208 416H48L4.8 473.6C1.7 477.8 0 482.8 0 488c0 13.3 10.7 24 24 24h208c13.3 0 24-10.7 24-24 0-5.2-1.7-10.2-4.8-14.4z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M176 240c19.4-14.6 32-37.8 32-64 0-44.2-35.8-80-80-80s-80 35.8-80 80c0 26.2 12.6 49.4 32 64h-8c-13.3 0-24 10.7-24 24s10.7 24 24 24h4.4L48 416h160l-28.4-128h4.4c13.3 0 24-10.7 24-24s-10.7-24-24-24z"
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
